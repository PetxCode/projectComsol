import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import SiderBar from "./SiderBar";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, emptyUserDetails } from "../../GlobalState/Redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.currentUser);
	const userData = useSelector((state) => state.userDetail);
	const onToggle = () => {
		setToggle(!toggle);
	};

	return (
		<div>
			<Container>
				<Wrapper>
					<Holder>
						<Logo to="/">COMSOL</Logo>
						<Navigation>
							<Nav to="/">
								<span>Home</span>
							</Nav>
							<Nav to="/categories">
								<span>Categories</span>
							</Nav>
							{user ? (
								<Nav to="/dashboard">
									<span>Dashboard</span>
								</Nav>
							) : null}
						</Navigation>
					</Holder>
					<Holder>
						{user ? (
							<ButtonHolder>
								<Avatar src={userData.logo} />
								<Button1
									onClick={() => {
										localStorage.removeItem("authUser");
										dispatch(logOutUser(), emptyUserDetails());
										window.location.reload();
										navigate("/");
									}}
								>
									Sign Out
								</Button1>
							</ButtonHolder>
						) : (
							<ButtonHolder>
								<Button to="/signin">Login</Button>
								<Button to="/register">SignUp</Button>
							</ButtonHolder>
						)}

						<But onClick={onToggle} />
					</Holder>
				</Wrapper>
			</Container>
			{toggle ? (
				<SiderBar toggle={toggle} setToggle={setToggle} oonToggle={onToggle} />
			) : null}
		</div>
	);
};

export default Header;

const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.4);
	margin-right: 10px;
	border: 1px solid orange;
	object-fit: cover;
`;

const ButtonHolder = styled.div`
	display: flex;

	@media screen and (max-width: 800px) {
		display: none;
	}
`;

const But = styled(FiMenu)`
	display: none;
	@media screen and (max-width: 800px) {
		display: block;
		background-color: #ffb850;
		padding: 17px 30px;
		border-radius: 0px 10px 10px 10px;
		font-size: 20px;
		transition: all 350ms;
		transform: scale(1);
		box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
			rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

		:hover {
			cursor: pointer;
			transform: scale(1.06);
		}
	}
`;

const Button1 = styled.div`
	text-decoration: none;
	color: white;
	padding: 15px 40px;
	background-color: rgba(255, 255, 255, 0.2);
	margin: 0 10px;
	border-radius: 10px 0px 10px 10px;
	transition: all 350ms;
	transform: scale(1);

	:hover {
		cursor: pointer;
		transform: scale(1.06);
		color: white;
	}
`;

const Button = styled(NavLink)`
	text-decoration: none;
	color: white;
	padding: 15px 40px;
	background-color: rgba(255, 255, 255, 0.2);
	margin: 0 10px;
	border-radius: 10px 0px 10px 10px;
	transition: all 350ms;
	transform: scale(1);

	:hover {
		cursor: pointer;
		transform: scale(1.06);
		color: white;
	}

	&.active {
		background-color: rgba(255, 255, 255, 0.6);
	}
`;

const Holder = styled.div`
	margin: 0 30px;
	display: flex;
	align-items: center;
`;
const Nav = styled(NavLink)`
	text-decoration: none;
	color: white;
	margin: 0 20px;
	transform: scale(1);
	transition: all 350ms;
	position: relative;

	::after {
		content: "";
		height: 2px;
		background-color: #ffb850;
		position: absolute;
		width: 70%;
		top: 23px;
		left: 0;
		opacity: 0;
		transform: scale(1);
		transform-origin: center;
		transition: all 350ms;
	}

	:hover {
		cursor: pointer;
		transform: scale(1.06);

		::after {
			opacity: 1;
		}
	}
	&.active {
		::after {
			opacity: 1;
		}
	}
`;

const Navigation = styled.div`
	margin: 0 40px;
	display: flex;
	align-items: center;

	@media screen and (max-width: 800px) {
		display: none;
	}
`;

const Logo = styled(Link)`
	color: white;
	text-decoration: none;
	font-weight: bold;
	font-size: 25px;
	transition: all 350ms;
	transform: scale(1);

	:hover {
		cursor: pointer;
		transform: scale(1.06);
	}
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Container = styled.div`
	background-color: #1e4c3d;
	height: 100px;
	width: 100%;
	color: white;
	position: fixed;
	z-index: 1000;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
