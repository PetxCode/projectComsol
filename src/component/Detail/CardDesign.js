import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import axios from "axios";

const CardDesign = ({ image, title, text, props, onClick }) => {
	const [main, setMain] = useState();
	const user = useSelector((state) => state.currentUser);

	const id = user?._id;

	const getMain = async () => {
		const url = `https://project-comsol.herokuapp.com/api/user/${id}`;

		const res = await axios.get(url);
		if (res) {
			setMain(res.data.data);
		}
	};

	useEffect(() => {
		getMain();
	}, []);

	return (
		<Container>
			{/* {user ? <Icon onClick={onClick} /> : null} */}

			<Image src={image} />
			<Overlay>
				<Title>{title}</Title>
				<Text>{text}</Text>
			</Overlay>
		</Container>
	);
};

export default CardDesign;

const Icon = styled(AiFillDelete)`
	border-radius: 3px;
	font-size: 30px;
	color: darkred;
	transition: all 350ms;
	transform: scale(1);
	position: absolute;
	top: 5px;
	left: 5px;
	z-index: 100;

	:hover {
		transform: scale(1.2);
		cursor: pointer;
	}
`;

const Container = styled.div`
	margin: 10px;
	width: 190px;
	height: 150px;
	border-radius: 5px;
	overflow: hidden;
	position: relative;
	@media screen and (max-width: 768px) {
		margin: 20px;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Overlay = styled.div`
	position: absolute;
	background: rgba(30, 76, 61, 0.6);
	width: 100%;
	height: 100%;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding-left: 20px;
`;

const Title = styled.div`
	color: white;
	font-weight: 700;
	font-size: 19px;
`;

const Text = styled.div`
	color: #ffb850;
	margin-bottom: 10px;
	font-size: 13px;
`;
