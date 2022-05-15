import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImArrowLeft2 } from "react-icons/im";
import TitleProps from "./TitleProps";
import CardProps from "./CardProps";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import vid from "./letstart.mp4";
import axios from "axios";
import { mainData } from "../../GlobalState/Redux";
import { useDispatch, useSelector } from "react-redux";
import CardDesign from "./CardDesign";
import moment from "moment";

const NoUserDetail = () => {
	const { id } = useParams();
	const [brand, setBrand] = useState();
	const [pitch, setPitch] = useState();
	const [main, setMain] = useState();
	const [journey, setJourney] = useState();
	const [event, setEvent] = useState();
	const [video, setVideo] = useState();

	const getVideo = async () => {
		const url = `https://project-comsol.herokuapp.com/api/video/${id}/view`;

		const res = await axios.get(url);
		if (res) {
			setVideo(res.data.data);
			console.log("Video data: ", video);
		}
	};

	const getEvent = async () => {
		const url = `https://project-comsol.herokuapp.com/api/event/${id}/view`;

		const res = await axios.get(url);
		if (res) {
			setEvent(res.data.data);
		}
	};

	const getJorney = async () => {
		const url = `https://project-comsol.herokuapp.com/api/journey/${id}/view`;

		const res = await axios.get(url);
		if (res) {
			setJourney(res.data.data);
		}
	};

	const getMain = async () => {
		const url = `https://project-comsol.herokuapp.com/api/user/${id}`;

		const res = await axios.get(url);
		if (res) {
			setMain(res.data.data);
		}
	};

	const getBrand = async () => {
		const url = `https://project-comsol.herokuapp.com/api/brand/${id}/view`;

		const res = await axios.get(url);
		if (res) {
			setBrand(res.data.data);
		}
	};

	const getPitch = async () => {
		const url = `https://project-comsol.herokuapp.com/api/pitch/${id}/view`;

		const res = await axios.get(url);
		if (res) {
			setPitch(res.data.data);
		}
	};

	useEffect(() => {
		getBrand();
		getPitch();
		getMain();
		getJorney();
		getEvent();
		getVideo();
	}, [brand]);
	return (
		<Container>
			<Left>
				<HeroHolder>
					<Image src={brand?.brand[0]?.coverImage} />
					<Overlay>
						<Arrow to="/categories">
							<ImArrowLeft2 />
						</Arrow>
						<Info>
							{" "}
							<Logo src={main?.logo} />
							<TextHolder>
								<Name>{brand?.brand[0]?.name}</Name>
								<Slogan>{brand?.brand[0]?.slogan}</Slogan>
							</TextHolder>
						</Info>
					</Overlay>
				</HeroHolder>
				{/* <div>{pitch.pitch[0].title}</div> */}
				{pitch?.pitch[0] ? (
					<Download rel="noopener" target={"_blank"} href={pitch.pitch[0].url}>
						Download our pitch
					</Download>
				) : (
					<Download>No pitch Deck yet</Download>
				)}
				{/* <Button>Download our pitch</Button> */}
				<Details>
					<Detail1>
						<TitleProps text="Get To Know Us" />
						<DetailText>
							<p>
								{journey?.journey[0]?.vision ? (
									journey?.journey[0]?.vision
								) : (
									<p>{brand?.brand[0]?.about}</p>
								)}
							</p>
						</DetailText>
					</Detail1>
					<Detail1>
						<TitleProps text="our journey so far" />
						<DetailText>
							<p>
								{journey?.journey[0]?.why ? (
									journey?.journey[0]?.why
								) : (
									<p>{brand?.brand[0]?.about}</p>
								)}
							</p>
						</DetailText>
					</Detail1>
					<Detail1>
						<TitleProps text="our various events" />
						<DetailImage>
							{event?.event?.map((props) => (
								<CardDesign
									key={props._id}
									image={props.image}
									title={props.title}
									text={props.description}
								/>
							))}
						</DetailImage>
					</Detail1>
					<Detail1>
						<TitleProps text="more usecases" />
						<DetailText>
							<p>
								{journey?.journey[0]?.focus ? (
									journey?.journey[0]?.focus
								) : (
									<p>{brand?.brand[0]?.about}</p>
								)}
							</p>
							<p></p>
						</DetailText>
					</Detail1>
				</Details>
				<Div>
					<Footer txtA />
				</Div>
			</Left>
			<Right>
				<Button1 to="/pay">Help fund our vision</Button1>

				<RightHead>Here's a brief Pitch video of our work</RightHead>
				<Line />

				<Youtube
					src={
						video?.video[0]
							? `https://www.youtube.com/embed/${
									video?.video[0]?.videoURL.split("=")[1]
							  }`
							: "https://www.youtube.com/embed/nA7qa6M47rs"
					}
					poster="https://media.wired.com/photos/5cc244c9af643e2f373ebb28/191:100/w_2400,h_1256,c_limit/Coding-Becomes-Criminal.jpg"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					title="video"
					// src="https://media.wired.com/photos/5cc244c9af643e2f373ebb28/191:100/w_2400,h_1256,c_limit/Coding-Becomes-Criminal.jpg"

					type="video/mp4"
					controls
				/>
				<RestRight>
					<RestText>
						<VidTitle>
							{video?.video[0]?.title ? (
								video?.video[0]?.title
							) : (
								<p>Hear's the story of john23</p>
							)}
						</VidTitle>
						<Date>
							Posted{" "}
							<strong>{moment().fromNow(video?.video[0]?.createdAt)}</strong>
						</Date>
					</RestText>
					<RightIcon>
						<FiMoreVertical />
					</RightIcon>
				</RestRight>
			</Right>
			<DivMobile>
				<Footer txtA />
			</DivMobile>
		</Container>
	);
};

export default NoUserDetail;

const Container = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const Left = styled.div`
	flex: 0.5;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (max-width: 768px) {
		flex: 1;
	}
`;

const Right = styled.div`
	height: 100%;
	width: 50%;
	position: fixed;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #f2f2f2;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		position: unset;
		width: 100%;
		height: 100vh;
		padding-bottom: 20px;
		padding-top: 20px;
	}
`;

const HeroHolder = styled.div`
	width: 100%;
	height: 520px;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Overlay = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(30, 76, 61, 0.6);
	position: absolute;
	top: 0;
	display: flex;
	align-items: flex-end;
`;

const Arrow = styled(Link)`
	position: absolute;
	top: 30px;
	left: 30px;
	color: white;
	font-size: 16px;
	border: 2px solid white;
	padding: 15px;
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 350ms;
	:hover {
		background: rgba(30, 76, 61, 0.7);
	}
`;

const Info = styled.div`
	/* background: blue; */
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const Logo = styled.img`
	width: 60px;
	height: 60px;
	object-fit: contain;
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 100%;
	background: white;
	margin-left: 35px;
`;

const TextHolder = styled.div`
	margin-left: 10px;
`;

const Name = styled.div`
	font-size: 35px;
	font-weight: 700;
	color: white;
	line-height: 1;
`;

const Slogan = styled.div`
	font-weight: 500;
	color: #ffb850;
`;

const Download = styled.a`
	text-decoration: none;
	color: white;
	background: #1e4c3d;
	padding: 10px 15px;
	margin-top: 20px;
	font-weight: 600;
	border-radius: 10px 3px 3px 3px;
	cursor: pointer;
	transition: all 350ms;
	:hover {
		transform: scale(1.02);
	}
`;

const Button = styled.div`
	text-transform: uppercase;
	margin-bottom: 50px;
	color: white;
	background: #1e4c3d;
	padding: 10px 15px;
	margin-top: 20px;
	font-weight: 600;
	border-radius: 10px 3px 3px 3px;
	cursor: pointer;
	transition: all 350ms;
	:hover {
		transform: scale(1.02);
	}
`;

const Button1 = styled(Link)`
	text-decoration: none;
	text-transform: uppercase;
	margin-bottom: 50px;
	color: white;
	background: #1e4c3d;
	padding: 10px 15px;
	margin-top: 20px;
	font-weight: 600;
	border-radius: 10px 3px 3px 3px;
	cursor: pointer;
	transition: all 350ms;
	:hover {
		transform: scale(1.02);
	}
`;

const Details = styled.div``;

const Detail1 = styled.div`
	margin-top: 60px;
`;

const DetailText = styled.div`
	margin-top: 30px;
	padding: 0 30px;
	@media screen and (max-width: 425px) {
		max-width: 100%;
	}
`;

const DetailImage = styled.div`
	margin-top: 30px;
	padding: 0 30px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	@media screen and (max-width: 425px) {
		justify-content: center;
	}
`;

const Youtube = styled.iframe`
	width: 80%;
	height: 350px;
	border-radius: 10px;
	margin-top: 30px;
	border: none;
	object-fit: cover;
`;

const RightHead = styled.div`
	font-weight: 700;
	font-size: 27px;
	text-align: center;
	@media screen and (max-width: 375px) {
		padding: 0 10px;
	}
`;

const Line = styled.div`
	margin-top: 10px;
	width: 40%;
	height: 2px;
	background: black;
	border-radius: 100px;
`;

const RestRight = styled.div`
	display: flex;
	margin-top: 10px;
	width: 80%;
	justify-content: space-between;
	align-items: center;
`;

const RestText = styled.div``;

const VidTitle = styled.div`
	font-weight: bold;
	font-size: 22px;
`;

const Date = styled.div`
	font-size: 15px;
`;

const RightIcon = styled.div`
	font-size: 20px;
	cursor: pointer;
`;

const Div = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const DivMobile = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
	}
`;
