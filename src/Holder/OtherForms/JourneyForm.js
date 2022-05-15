import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { MdExpandLess } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BrandForm = () => {
	const getData = useSelector((state) => state.currentUser);
	const id = getData._id;
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

	const [avatar, setAvatar] = useState("");
	const [image, setImage] = useState(
		"https://firebasestorage.googleapis.com/v0/b/codelab-admission.appspot.com/o/social%2Fsimple.png?alt=media&token=99f4b576-37f6-4ba3-8716-686effea539f"
	);

	const handleImage = (e) => {
		const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setImage(save);
		setAvatar(file);
	};

	const schemaModel = yup.object().shape({
		why: yup.string().required("This field has to be filled"),
		what: yup.string().required("This field has to be filled"),
		focus: yup.string().required("This field has to be filled"),
		vision: yup.string().required("This field has to be filled"),
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
		const url = `https://project-comsol.herokuapp.com/api/journey/${id}/create`;

		const { focus, why, what, vision } = data;

		const options = (ProgressEvent) => {
			const { loaded, total } = ProgressEvent;
			const percent = Math.floor((loaded * 100) / total);
			console.log(percent);
		};

		const config = {
			headers: {
				// "content-type": "multipart/form-data",
				authorization: `CodeLab ${getData.token}`,
			},
		};

		await axios.post(url, { focus, why, what, vision }, config);

		reset();
		navigate("/");
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
							<Welcome>Share your Journey story</Welcome>
							<SubTitle>
								Glad you are here... Let's help get seen, start by sharing your
								story!
							</SubTitle>
							<Form onSubmit={onSubmit} type="multipart/form-data">
								<Label>Why we started</Label>
								<LabelError>{errors.why && errors?.why.message}</LabelError>
								<InputArea placeholder="Why we started" {...register("why")} />

								<Label>What's our Motivation</Label>
								<LabelError>{errors.what && errors?.what.message}</LabelError>
								<InputArea
									placeholder="What's our Motivation"
									{...register("what")}
								/>

								<Label>What our FOCUS are! </Label>
								<LabelError>{errors.focus && errors?.focus.message}</LabelError>
								<InputArea
									placeholder="What our FOCUS are!"
									{...register("focus")}
								/>

								<Label>Our core Vision </Label>
								<LabelError>
									{errors.vision && errors?.vision.message}
								</LabelError>
								<InputArea
									placeholder="Our core Vision"
									{...register("vision")}
								/>

								<Button
									type="submit"
									onClick={() => {
										console.log("This is Button");
									}}
								>
									Submit{" "}
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

export default BrandForm;

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
	width: 300px;
	height: 150px;
	border-radius: 5px;
	border: 3px solid #1e4c3d;
	margin: 20px 0;
	object-fit: contain;
`;

const ImageLabel = styled.label`
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

const InputArea = styled.textarea`
	width: 300px;
	height: 150px;
	resize: none;
	padding-left: 10px;
	border: 1px solid lightgray;
	border-radius: 2px;
	outline: none;

	::placeholder {
		font-family: Poppins;
		font-size: 16px;
	}
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
	margin: 10px 0;
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
	background-image: url("/assets/g.jpg");
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
	min-height: calc(100vh - 100px);
	padding-top: 100px;
	height: 100%;

	@media screen and (max-width: 425px) {
		width: 100%;
		height: 100%;
		padding-top: 0px;
	}
`;
