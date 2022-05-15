import React from "react";
import styled from "styled-components";

const ExploreProps = ({ image, text, title }) => {
	return (
		<div>
			<Container>
				<Wrapper>
					<Image src={image} />
					<Content>
						<Title>{title}</Title>
						<Text>{text}</Text>
					</Content>
				</Wrapper>
			</Container>
		</div>
	);
};

export default ExploreProps;

const Text = styled.div`
	text-align: center;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 30px;
	text-align: center;
	margin: 20px 0;
`;

const Content = styled.div``;

const Image = styled.img`
	width: 250px;
	height: 120px;
	object-fit: contain;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;

const Container = styled.div`
	width: 300px;
	height: 100%;
	color: #1e4c3d;
	margin: 20px 50px;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 900px) {
		margin: 20px 0px;
	}
`;
