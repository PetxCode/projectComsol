import React from "react";
import styled from "styled-components";

const Content = () => {
	return (
		<Container>
			<Wrapper>
				<Title>
					Bring all NGO across Africa to the face of Investor and Financiers
				</Title>

				<Text>
					Become an expert on your visitors with geolocation statistics. Know
					where and how your customers connect to the web and keep track of
					their location.
				</Text>

				<Button>Get Started</Button>
			</Wrapper>
		</Container>
	);
};

export default Content;

const Button = styled.div`
	padding: 20px;
	background-color: #1e4c3d;
	width: 100px;
	color: white;
	border-radius: 15px 0px 15px 15px;
	transition: all 350ms;
	transform: scale(1);

	:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
`;

const Text = styled.div`
	font-size: 20px;
	margin-bottom: 20px;
`;

const Title = styled.div`
	font-weight: 900;
	font-size: 40px;
	line-height: 1.2;
	margin-bottom: 30px;
`;

const Wrapper = styled.div``;

const Container = styled.div`
	width: 600px;
	margin: 0 30px;

	@media screen and (max-width: 900px) {
		width: 90%;
	}
`;
