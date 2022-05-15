import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const HeroComp = () => {
	const data = [
		{
			title: "Get your",
			special: "NGO",
			title1: "to be found and Empowered",
			subTitle:
				"Create a new pipeline or choose an existing one and add this app to a stage in it.",
		},
		{
			title: "You have",
			special: "to be seen",
			title1: "and heard by peaople that metters",
			subTitle:
				"Create a new pipeline or choose an existing one and add this app to a stage in it.",
		},
		{
			title: "Make your",
			special: "NGO's work",
			title1: "one of the World Best",
			subTitle:
				"Create a new pipeline or choose an existing one and add this app to a stage in it.",
		},
	];

	const [quote, setQuote] = useState(data);
	const [count, setCount] = useState(0);

	const textColor = useRef();
	const textColor1 = useRef();
	const textColor2 = useRef();

	const myColor = ["#35715D", "white", "white"];
	const myColor1 = ["white", "#35715D", "white"];
	const myColor2 = ["white", "white", "#35715D"];

	useEffect(() => {
		setInterval(() => {
			setCount((count) => count + 1);
		}, 6000);
	}, []);

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

	return (
		<Container>
			<Wrapper>
				<Content>
					<Title>
						{data[count % quote.length].title}
						<span>{data[count % quote.length].special}</span>
						{data[count % quote.length].title1}
					</Title>
					<SubTitle>{data[count % quote.length].subTitle}</SubTitle>

					<Dots>
						<Dot ref={textColor} />
						<Dot ref={textColor1} />
						<Dot ref={textColor2} />
					</Dots>

					<Button>Sign up to get started</Button>
				</Content>
				<Image src="/assets/hero.png" />
			</Wrapper>
		</Container>
	);
};

export default HeroComp;

const Button = styled.div`
	padding: 20px 10px;
	background-color: #ffb850;
	width: 180px;
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
	font-weight: bold;
	border-radius: 15px 0px 15px 15px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
		rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	transition: all 350ms;
	transform: scale(1);
	margin-top: 40px;

	:hover {
		cursor: pointer;
		transform: scale(1.06);
	}

	@media screen and (max-width: 800px) {
		color: black;
		padding: 10px;
		font-size: 15px;
		width: 100px;
		margin-top: 20px;
	}
`;

const Dots = styled.div`
	display: flex;
`;
const Dot = styled.div`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: white;
	margin: 20px 8px;
`;
const SubTitle = styled.div`
	font-size: 28px;
	margin-top: 20px;
	line-height: 1.2;

	@media screen and (max-width: 800px) {
		font-size: 20px;
	}
`;

const Title = styled.div`
	font-size: 50px;
	font-weight: bold;
	line-height: 1.2;
	font-size: 38px;
	span {
		color: #ffb850;
		margin: 0 10px;
		text-transform: uppercase;
	}

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;
const Image = styled.img`
	width: 50%;
	height: 650px;
	object-fit: contain;

	@media screen and (max-width: 800px) {
		width: 100%;
		height: 450px;
	}
`;

const Content = styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-right: 60px;

	@media screen and (max-width: 800px) {
		width: 90%;
		/* text-align: center; */
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
	}
`;

const Wrapper = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 800px) {
		width: 90%;
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		justify-content: center;
	}
`;

const Container = styled.div`
	background-color: #1e4c3d;
	min-height: 600px;
	height: 100%;
	color: white;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 120px;

	@media screen and (max-width: 800px) {
		width: 100%;
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		justify-content: center;
		padding-bottom: 50px;
	}
`;
