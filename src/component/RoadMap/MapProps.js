import React from "react";
import styled from "styled-components";

const MapProps = ({ btn, ht, br, image, cl, textCl }) => {
	return (
		<Container>
			<ImageWrapper br={br}>
				<Image src={image} />
			</ImageWrapper>
			<Line ht={ht} />
			<Button cl={cl} textCl={textCl}>
				{btn}
			</Button>
		</Container>
	);
};

export default MapProps;

const Button = styled.div`
	padding: 20px 40px;
	background-color: ${({ cl }) => cl};
	color: white;
	border-radius: 15px 0px 15px 15px;
	transition: all 350ms;
	transform: scale(1);
	color: ${({ textCl }) => textCl};
	font-weight: bold;
	text-transform: uppercase;

	:hover {
		transform: scale(1.05);
		cursor: pointer;
	}

	@media screen and (max-width: 900px) {
		margin-top: 20px;
	}
`;

const Line = styled.div`
	border-right: 3px solid gray;
	height: ${({ ht }) => ht};

	@media screen and (max-width: 900px) {
		display: none;
	}
`;

const Image = styled.img`
	width: 200px;
	height: 300px;
	object-fit: contain;
`;

const ImageWrapper = styled.div`
	background-color: white;
	width: 200px;
	height: 300px;
	height: 300px;
	border-radius: ${({ br }) => br};
`;

const Container = styled.div`
	width: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin: 0 10px;

	@media screen and (max-width: 900px) {
		margin-top: 20px;
	}
`;
