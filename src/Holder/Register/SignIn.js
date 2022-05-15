import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdExpandLess } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, userDetails } from "../../GlobalState/Redux";

const SignIn = () => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.currentUser);

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

	const schemaModel = yup.object().shape({
		email: yup.string().email().required("This field has to be filled"),
		password: yup.string().required("This field has to be filled"),
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
		const url = "https://project-comsol.herokuapp.com/api/user/signin";

		const { email, password } = data;

		const res = await axios.post(url, { email, password });
		console.log(res);
		if (res) {
			localStorage.setItem("authUser", JSON.stringify(res.data.data));
			dispatch(createUser(res.data.data));

			const url = `https://project-comsol.herokuapp.com/api/user/${res.data.data._id}`;
			const pushData = await axios.get(url);
			dispatch(userDetails(pushData.data.data));
		}

		reset();
		navigate("/");
	});

	const getUser = async () => {
		try {
			// const url = `https://project-comsol.herokuapp.com/api/user/${}`
			await axios.get();
		} catch (err) {
			console.log(err.message);
		}
	};

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
							<Welcome>Sign in to your Account</Welcome>
							<SubTitle>Glad you are back... Let's help get seen!</SubTitle>
							<Form onSubmit={onSubmit}>
								<Label>Email</Label>
								<LabelError>{errors.email && errors?.email.message}</LabelError>
								<Input placeholder="Email" {...register("email")} />

								<Label>Password</Label>
								<LabelError>{errors.email && errors?.email.message}</LabelError>
								<Input
									placeholder="Password"
									type="password"
									{...register("password")}
								/>

								<Button type="submit">Signin </Button>
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

export default SignIn;

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
	align-items: center;
	flex-direction: column;
`;

const ImageView = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 5px;
	background-color: #ffb850;
	margin: 20px 0;
`;

const ImageLabel = styled.label`
	padding: 20px 0;
	background-color: #ffb850;
	width: 150px;
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
	margin-top: 20px;
	margin-bottom: 20px;
`;

const Welcome = styled.div`
	font-size: 50px;
	font-weight: bold;
	letter-spacing: 0.1px;
	line-height: 1;

	@media screen and (max-width: 425px) {
		width: 90%;
		text-align: center;
		margin-top: 100px;
		font-size: 30px;
	}
`;

const HolderCard = styled.div`
	@media screen and (max-width: 425px) {
		width: 100%;
	}
`;

const Holder = styled.div`
	padding-left: 50px;
`;

const Content = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #1e4c3d;

	@media screen and (max-width: 425px) {
		width: 100%;
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

const Position = styled.div``;

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
	background-image: url("/assets/group.jpg");
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
`;
