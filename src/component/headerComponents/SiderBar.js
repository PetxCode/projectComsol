import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SiderBar = ({ toggle, setToggle, onToggle }) => {
	return (
		<Container>
			<Wrapper>
				<Nav
					to="/"
					onClick={() => {
						setToggle(false);
					}}
				>
					Home
				</Nav>
				<Nav
					to="/categories"
					onClick={() => {
						setToggle(false);
					}}
				>
					Categories
				</Nav>

				<Space />
				{/* <Holder> */}
				<Button
					to="/signin"
					onClick={() => {
						setToggle(false);
					}}
				>
					{" "}
					LogIn
				</Button>
				<Button
					to="/signup"
					onClick={() => {
						setToggle(false);
					}}
				>
					{" "}
					Sign up
				</Button>
				{/* </Holder> */}
			</Wrapper>
		</Container>
	);
};

export default SiderBar;

const Holder = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Button = styled(Link)`
	/* width: 150px; */
	text-decoration: none;
	color: white;
	margin: 30px 20px;
	font-size: 20px;
	transition: all 350ms;
	transform: scale(1);
	padding: 20px 0;
	border-radius: 10px 10px 0px 10px;
	background-color: rgba(30, 76, 61, 0.2);
	display: flex;
	justify-content: center;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	:hover {
		cursor: pointer;
		transform: scale(1.06);
		background-color: rgba(30, 76, 61, 1);
		padding: 20px 20px;
	}
`;

const Space = styled.div`
	margin: 50px 0;
	border-bottom: 1px dashed white;
`;

const Nav = styled(Link)`
	text-decoration: none;
	color: white;
	margin: 30px 0;
	font-size: 20px;
	transition: all 350ms;
	transform: scale(1);
	padding: 20px 0;
	border-radius: 10px 10px 0px 10px;
	background-color: rgba(30, 76, 61, 0.2);
	display: flex;
	justify-content: center;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	:hover {
		cursor: pointer;
		transform: scale(1.06);
		background-color: rgba(30, 76, 61, 1);
		padding: 20px 20px;
	}
`;

const Wrapper = styled.div`
	padding: 20px 50px;
	color: white;
	flex: flex;
	flex-direction: column;
`;

const Container = styled.div`
	display: none;
	@media screen and (max-width: 800px) {
		display: block;
		width: 100%;
		min-height: calc(100vh - 100px);
		height: 100%;
		background-color: #ffb850;
		padding-top: 120px;
		position: fixed;
		z-index: 100;
	}
`;
