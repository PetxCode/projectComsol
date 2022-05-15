import React from "react";
import styled from "styled-components";
import Content from "./Content";
import Map from "./Map";

const RoadMap = () => {
	return (
		<Container>
			<Wrapper>
				<Content />
				<Map />
			</Wrapper>
		</Container>
	);
};

export default RoadMap;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	@media screen and (max-width: 1024px) {
		flex-direction: column;
		align-items: center;
	}
`;

const Container = styled.div`
	width: 100%;
	min-height: 500px;
	height: 100%;
	background-color: #ffb850;
	padding: 50px 0;
	margin: 50px 0;
	display: flex;
	justify-content: center;
`;
