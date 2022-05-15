import React from "react";
import styled from "styled-components";

const Second = () => {
	return (
		<Container>
			<Wrapper>
				<Image src="/assets/cover.jpg" />
				<COntent>
					<Top>
						<Hold>
							From the <span>poorest</span> towns and Cities
						</Hold>
					</Top>
					<SubTitle>
						Create a new pipeline or choose an existing one and add this app to
						a stage in it, Create a new pipeline or choose an existing one and
						add this app to a stage in it. Create a new pipeline or choose an
						existing one and add this app to a stage in it. Create a new
						pipeline or choose an existing one and add this app to a stage in
						it.
					</SubTitle>
					{/* <Space /> */}
					<ImageHolders>
						<SmallImage src="/assets/girl.jpg" />
						<SmallImage src="/assets/boys.jpg" />
						<SmallImage src="/assets/school.jpg" />
					</ImageHolders>
				</COntent>
			</Wrapper>
		</Container>
	);
};

export default Second;

const Hold = styled.div``;
const SmallImage = styled.img`
	width: 200px;
	height: 150px;
	background-color: #ffb850;
	object-fit: cover;
	border-radius: 0 30px;
	margin: 10px;
	@media screen and (max-width: 900px) {
		margin: 10px 0;
	}
`;

const ImageHolders = styled.div`
	display: flex;
	margin-top: 20px;
	flex-wrap: wrap;
	justify-content: center;
`;

const Space = styled.div`
	flex: 1;
`;
const SubTitle = styled.div``;

const Top = styled.div`
	font-size: 50px;
	text-transform: uppercase;
	font-weight: bold;
	line-height: 1.1;
	margin-bottom: 30px;
	color: #1e4c3d;
	display: flex;
	width: 100%;

	span {
		color: #ffb850;
		margin: 0;
	}
`;

const COntent = styled.div`
	height: 113%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 50px;
	width: 50%;
	margin-top: 30px;

	@media screen and (max-width: 900px) {
		width: 90%;
	}
`;

const Image = styled.img`
	padding: 20px 10px;
	/* background-color: #ffb850; */
	width: 580px;
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
	font-weight: bold;
	border-radius: 70px 0px 70px 70px;
	transition: all 350ms;
	transform: scale(1);
	margin-top: 40px;
	height: 100%;
	object-fit: cover;

	:hover {
		cursor: pointer;
		transform: scale(1.005);
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
			rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	}
	@media screen and (max-width: 900px) {
		width: 90%;
	}
`;
const Wrapper = styled.div`
	display: flex;
	height: 80%;
	width: 80%;
	justify-content: center;

	@media screen and (max-width: 1200px) {
		display: flex;
		flex-direction: column;
		width: 90%;
		align-items: center;
	}
`;
const Container = styled.div`
	padding-top: 30px;
	width: 100%;
	min-height: 500px;
	height: 100%;
	justify-content: center;
	display: flex;
	margin-bottom: 30px;

	@media screen and (max-width: 900px) {
		margin: 0;
	}
`;
