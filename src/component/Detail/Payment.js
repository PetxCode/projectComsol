import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { MdExpandLess } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { usePaystackPayment } from "react-paystack";

const Payment = () => {
	const getData = useSelector((state) => state.currentUser);
	const id = getData?._id;
	console.log(id);
	const navigate = useNavigate();
	const [count, setCount] = useState(2);
	const [quote, setQuote] = useState([
		{
			id: 1,
			quote: "This is the day that the Lord has made",
			name: "Peter Oti",
			title: "Lead Developer",
		},
		{
			id: 2,
			quote: "Great opportunities happens to those that are well prepared",
			name: "Bukola Peters",
			title: "Lead Developer",
		},
		{
			id: 3,
			quote: "This is the day that the Lord has made",
			name: "Peter Oti",
			title: "President of JavaScript",
		},
	]);

	const increase = () => {
		setCount(count + 1);
	};

	const decrease = () => {
		if (count < 1) {
			let newData = quote.length;
			setCount(newData);
		} else {
			setCount(count - 1);
		}
	};

	const schemaModel = yup.object().shape({
		name: yup.string().required("This field has to be filled"),
		email: yup.string().required("This field has to be filled"),
		amount: yup.number().required("This field has to be filled"),
	});
	const [paymentData, setPaymentData] = useState({});

	const onSuccess = (reference) => {
		console.log(reference);
	};

	const onClose = () => {
		console.log("closed");
	};

	const initializePayment = usePaystackPayment({
		reference: new Date().getTime().toString(),
		email: paymentData.email,
		amount: paymentData.amount * 100,
		publicKey: "pk_test_d632bf4b9aa1e74745eb158cec8034961dc13b18",
	});

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schemaModel),
	});

	const onSubmit = handleSubmit(async (data) => {
		console.log(data);
		setPaymentData(data);

		const { userName, email, password } = data;
		const formData = new FormData();

		initializePayment(onSuccess, onClose);

		// reset();
		// navigate("/");
	});

	const textColor = useRef();
	const textColor1 = useRef();
	const textColor2 = useRef();

	const myColor = ["#35715D", "white", "white"];
	const myColor1 = ["white", "#35715D", "white"];
	const myColor2 = ["white", "white", "#35715D"];

	useEffect(() => {
		textColor.current.style.backgroundColor = myColor[count % myColor.length];
		textColor.current.style.transition = "all 350ms";

		textColor1.current.style.backgroundColor =
			myColor1[count % myColor1.length];
		textColor1.current.style.transition = "all 350ms";

		textColor2.current.style.backgroundColor =
			myColor2[count % myColor2.length];
		textColor2.current.style.transition = "all 350ms";
	}, [count]);

	useEffect(() => {
		decrease();
		increase();
	}, []);

	return (
		<Container>
			<Wrapper>
				<Content>
					<Holder>
						<HolderCard>
							<Welcome>Thanks for decising to Fund our works</Welcome>
							<SubTitle>
								Your support means a great deal to us, Thank You!
							</SubTitle>
							<Form onSubmit={onSubmit} type="multipart/form-data">
								{/* <ImageHolder>
									<ImageView src={image} />
									<ImageInput onChange={handleImage} type="file" id="img" />
									<ImageLabel htmlFor="img">Choose Your Best Pitch</ImageLabel>
								</ImageHolder> */}

								<Label>Please we will like to know you?</Label>
								<LabelError>{errors.name && errors?.name.message}</LabelError>
								<Input
									placeholder="What would you want us to call you?"
									{...register("name")}
								/>

								<Label>How can we reach you?</Label>
								<LabelError>{errors.email && errors?.email.message}</LabelError>
								<Input
									placeholder="Please enter your Email"
									{...register("email")}
								/>

								<Label>Please enter the amount you'd want to give?</Label>
								<LabelError>
									{errors.amount && errors?.amount.message}
								</LabelError>
								<Input placeholder="Anount in Naira" {...register("amount")} />

								<Button
									type="submit"
									onClick={() => {
										console.log("This is Button");
									}}
								>
									Donate{" "}
								</Button>
							</Form>
						</HolderCard>
					</Holder>
				</Content>

				<ImageWrapper>
					<Card>
						<Quote>{quote[count % quote.length].quote}</Quote>
						<Name>{quote[count % quote.length].name}</Name>
						<Position>{quote[count % quote.length].title}</Position>
						<Ball>
							<Flex>
								<Dots onClick={decrease}>
									<MdExpandLess />
								</Dots>
								<Dot onClick={increase}>
									<MdExpandLess />
								</Dot>
							</Flex>
							<Dots1>
								<Dot1 ref={textColor} />
								<Dot1 ref={textColor1} />
								<Dot1 ref={textColor2} />
							</Dots1>
						</Ball>
					</Card>
				</ImageWrapper>
			</Wrapper>
		</Container>
	);
};

export default Payment;

const LabelError = styled.div`
	color: red;
	font-size: 13px;
`;

const Flex = styled.div`
	display: flex;
`;
const Dots1 = styled.div`
	display: flex;
`;
const Dot1 = styled.div`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: white;
	margin: 20px 8px;
`;
const ImageHolder = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
`;

const ImageView = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 5px;
	border: 3px solid #1e4c3d;
	margin: 20px 0;
	object-fit: cover;
`;

const ImageLabel = styled.label`
	text-align: center;
	padding: 20px 20px;
	background-color: #ffb850;
	/* width: 150px; */
	border-radius: 30px;
	font-weight: bold;
	transition: all 350ms;
	transform: scale(1);
	display: flex;
	justify-content: center;

	:hover {
		cursor: pointer;
		transform: scale(1.03);
	}
`;
const ImageInput = styled.input`
	display: none;
`;

const Input = styled.input`
	width: 300px;
	height: 40px;
	padding-left: 10px;
	border: 1px solid lightgray;
	border-radius: 2px;
	outline: none;

	::placeholder {
		font-family: Poppins;
		font-size: 16px;
	}
`;

const Button = styled.button`
	padding: 20px;
	background-color: #1e4c3d;
	width: 315px;
	border-radius: 3px;
	font-weight: bold;
	transition: all 350ms;
	transform: scale(1);
	outline: none;
	border: 0;
	font-weight: bold;
	color: white;
	margin-top: 20px;
	text-transform: uppercase;

	:hover {
		cursor: pointer;
		transform: scale(1.03);
	}
`;

const Label = styled.label`
	margin-top: 20px;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 425px) {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
`;
const SubTitle = styled.div`
	margin: 15px 0;
	@media screen and (max-width: 425px) {
		text-align: center;
	}
`;

const Welcome = styled.div`
	font-size: 50px;
	font-weight: bold;
	letter-spacing: 0.1px;
	line-height: 1;
	margin-top: 20px;

	@media screen and (max-width: 425px) {
		width: 100%;
		text-align: center;
		font-size: 30px;
	}
`;

const HolderCard = styled.div``;

const Holder = styled.div`
	padding-left: 50px;

	@media screen and (max-width: 425px) {
		padding: 0px;
	}
`;

const Content = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #1e4c3d;

	@media screen and (max-width: 425px) {
		width: 100%;
		padding-top: 120px;
	}
`;

const Dots = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 1px solid white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 10px;
	transition: all 350ms;
	transform: scale(1);
	transform: rotate(270deg);
	/* transform: rotate(270deg); */

	:hover {
		backdrop-filter: blur(12px) saturate(187%);
		-webkit-backdrop-filter: blur(12px) saturate(187%);
		background-color: rgba(252, 252, 252, 0.62);
		border-radius: 50%;
		border: 1px solid rgba(209, 213, 219, 0.3);
		transform: scale(1.2);
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;

		transform: rotate(180deg);
	}
`;
const Dot = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 1px solid white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 10px;
	transition: all 350ms;
	transform: scale(1);
	transform: rotate(90deg);
	/* transform: rotate(270deg); */

	:hover {
		backdrop-filter: blur(12px) saturate(187%);
		-webkit-backdrop-filter: blur(12px) saturate(187%);
		background-color: rgba(252, 252, 252, 0.62);
		border-radius: 50%;
		border: 1px solid rgba(209, 213, 219, 0.3);
		transform: scale(1.2);
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
const Ball = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

const Position = styled.div`
	margin-bottom: 20px;
`;

const Name = styled.div`
	font-weight: 700;
	font-size: 25px;
	font-style: italic;
	color: #ffb850;
`;

const Quote = styled.div`
	font-weight: 900;
	font-size: 40px;
	line-height: 1.2;
	margin-bottom: 50px;
	opacity: 0.8;
`;

const Card = styled.div`
	backdrop-filter: blur(12px) saturate(187%);
	-webkit-backdrop-filter: blur(12px) saturate(187%);
	background-color: rgba(30, 76, 61, 0.62);
	border-radius: 12px;
	border: 1px solid rgba(209, 213, 219, 0.3);
	width: 80%;
	min-height: 300px;
	color: white;
	margin-bottom: 20px;
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-shadow: rgba(0, 0, 0, 0.12);
`;

const ImageWrapper = styled.div`
	width: 50%;
	background-image: url("/assets/dd.png");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: flex-end;

	@media screen and (max-width: 425px) {
		display: none;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 100px);
	padding-top: 100px;

	@media screen and (max-width: 425px) {
		width: 100%;
		height: 100%;
		padding-top: 0px;
	}
`;