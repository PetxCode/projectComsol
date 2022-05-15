import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContentLoader from "react-content-loader";

const CardProps = ({ props }) => {
	// const user = useSelector((state) => state.currentUser);
	const id = props._id;
	const [data, setData] = useState();
	const [brandName, setBrandName] = useState("");
	const [mySlogan, setMySlogan] = useState("");

	console.log(id);

	const getBrand = async () => {
		const url = `https://project-comsol.herokuapp.com/api/brand/${id}/view`;
		const res = await axios.get(url);
		setData(res.data.data);
	};

	useEffect(() => {
		getBrand();
	}, [data]);

	return (
		<div>
			{!data ? (
				<ContentLoader
					viewBox="0 0 500 420"
					height={420}
					width={500}
					{...props}
				>
					<rect x="16" y="17" rx="0" ry="0" width="360" height="200" />
					<circle cx="35" cy="248" r="20" />
					<rect x="69" y="229" rx="2" ry="2" width="275" height="15" />
					<rect x="69" y="253" rx="2" ry="2" width="140" height="15" />
				</ContentLoader>
			) : (
				<Container>
					<Image src={data?.brand[0]?.coverImage} />
					<Mid>
						<Logo src={props.logo} />
						<Texts>
							<Name>
								{data?.brand[0]?.name ? (
									data?.brand[0]?.name
								) : (
									<div>Nothing</div>
								)}
							</Name>
							{/* <Name>name</Name> */}
							<Span>
								{data?.brand[0]?.slogan ? (
									data?.brand[0]?.slogan
								) : (
									<div>Nothing</div>
								)}
							</Span>
						</Texts>
					</Mid>
					<Rest>
						{data?.brand[0]?.about ? data?.brand[0]?.about : <div>Nothing</div>}
					</Rest>
					<Alt to={`/${id}/detail`}>Know More</Alt>
				</Container>
			)}
		</div>
	);
};

export default CardProps;

const Container = styled.div`
	margin: 10px;
	width: 370px;
	min-height: 470px;
	padding-bottom: 10px;
	border-radius: 4px;
	overflow: hidden;
	box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.2);

	@media screen and (max-width: 1188px) {
		margin: 15px;
	}
	@media screen and (max-width: 354px) {
		min-height: 470px;
		overflow: none;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 300px;
	object-fit: cover;
`;

const Mid = styled.div`
	margin-top: 7px;
	display: flex;
	align-items: center;
	padding: 0 15px;
`;

const Logo = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 100%;
	background: white;
	border: 1px solid rgba(0, 0, 0, 0.2);
	margin-right: 15px;
`;

const Texts = styled.div``;

const Name = styled.div`
	font-weight: 700;
	font-size: 20px;
	color: #1e4c3d;
	text-transform: capitalize;
`;

const Span = styled.div`
	font-weight: 500;
	font-size: 13px;
	color: #ffb850;
`;

const Rest = styled.div`
	padding: 0 15px;
	margin: 15px 0;
	font-size: 13px;
	text-align: justify;
	font-weight: 500;
	opacity: 0.7;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;
`;

const Alt = styled(Link)`
	display: flex;
	justify-content: flex-end;
	padding: 0 15px;
	margin-top: 5px;
	font-weight: 700;
	text-decoration: underline;
	font-size: 13px;
	cursor: pointer;
	color: black;
`;
