import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImArrowLeft2 } from "react-icons/im";
import TitleProps from "./TitleProps";
import CardProps from "./CardProps";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { mainData } from "../../GlobalState/Redux";
import moment from "moment";

const DetailsUser = () => {
	const getData = useSelector((state) => state.currentUser);

	const dispatch = useDispatch();
	const getMainData = useSelector((state) => state.mainData);
	const user = useSelector((state) => state.currentUser);
	const id = user._id;
	const [data, setData] = useState();

	const [brand, setBrand] = useState();
	const [pitch, setPitch] = useState();
	const [main, setMain] = useState();
	const [journey, setJourney] = useState();
	const [event, setEvent] = useState([]);
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
			console.log("event data: ", event);
		}
	};

	const deleteEvent = async (deleteID) => {
		const url = `https://project-comsol.herokuapp.com/api/event/${id}/${deleteID}`;

		const config = {
			headers: {
				// "content-type": "multipart/form-data",
				authorization: `CodeLab ${getData.token}`,
			},
		};

		await axios.delete(url, config);

		console.log(deleteID);

		window.location.reload();
	};

	const getJorney = async () => {
		const url = `https://project-comsol.herokuapp.com/api/journey/${id}/view`;

		const res = await axios.get(url);
		if (res) {
			setJourney(res.data.data);
			console.log("journey data: ", journey);
		}
	};

	const getMain = async () => {
		const url = `https://project-comsol.herokuapp.com/api/user/${id}`;

		const res = await axios.get(url);
		if (res) {
			setMain(res.data.data);
		}
	};

	const getBrandMain = async () => {
		const url = `https://project-comsol.herokuapp.com/api/brand/${id}/view`;

		const res = await axios.get(url);
		if (res) {
			setBrand(res.data.data);

			console.log("brand data: ", brand);
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
		getBrandMain();
		getPitch();
		getMain();
		getJorney();
		getEvent();
		getVideo();
	}, []);

	const getBrand = async () => {
		const url = `https://project-comsol.herokuapp.com/api/user/${id}`;
		const res = await axios.get(url);
		dispatch(mainData(res.data.data));
	};

	useEffect(() => {
		getBrand();
	}, []);
	// console.log("main data: ", getMainData);

	const [cover, setCover] = useState("/assets/prop1.jpg");
	const [input1, setInput1] = useState(true);
	const [input2, setInput2] = useState(true);
	const [input3, setInput3] = useState(true);

	const uploadCover = (e) => {
		const file = e.target.files[0];
		setCover(URL.createObjectURL(file));
	};

	const displayInput1 = () => {
		setInput1(!input1);
	};

	const displayInput2 = () => {
		setInput2(!input2);
	};

	const displayInput3 = () => {
		setInput3(!input3);
	};

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
							<Logo src={getMainData?.logo} />
							<TextHolder>
								<Name>{brand?.brand[0]?.name}</Name>
								<Slogan>{brand?.brand[0]?.slogan}</Slogan>
							</TextHolder>
						</Info>
					</Overlay>
					<span>
						<PathMove to="brand_form">
							<label htmlFor="cover">
								<AiOutlineEdit />
							</label>
						</PathMove>

						<input type="file" id="cover" onChange={uploadCover} />
					</span>
				</HeroHolder>
				<Button1 to="/pitch_deck">Upload your pitch</Button1>
				<Details>
					<Detail1>
						{/* <Button1 to="journey_path"> */}

						<PathMove to="journey_path">
							<span>
								<label>
									<AiOutlineEdit />
								</label>
							</span>
						</PathMove>

						<TitleProps text="Get To Know Us" />
						<DetailText>
							<p>
								<p>
									{journey?.journey[0]?.vision ? (
										journey?.journey[0]?.vision
									) : (
										<p>No data yet</p>
									)}
								</p>
							</p>
						</DetailText>
					</Detail1>
					<Detail1>
						<TitleProps text="our journey so far" />
						<DetailText>
							<p>
								<p>
									{journey?.journey[0]?.why ? (
										journey?.journey[0]?.why
									) : (
										<p>No data yet 2</p>
									)}
								</p>
							</p>
						</DetailText>
					</Detail1>
					<Detail1>
						<TitleProps text="our various events" />
						<DetailImage>
							<PathMove to="event_path">
								<div>
									<span>
										<label>
											<AiOutlineEdit />
										</label>
									</span>
								</div>
							</PathMove>
							<Diva>
								{event?.event?.map((props) => (
									<CardProps
										key={props._id}
										props={props}
										onClick={() => {
											console.log(props._id);
											deleteEvent(props._id);
										}}
										image={props.image}
										title={props.title}
										text={props.description}
									/>
								))}
							</Diva>
							<div></div>
						</DetailImage>
					</Detail1>

					<Detail1>
						<TitleProps text="more usecases" />
						<DetailText>
							<div>
								<p>
									<p>
										{journey?.journey[0]?.focus ? (
											journey?.journey[0]?.focus
										) : (
											<p>No data Yet3</p>
										)}
									</p>
								</p>
							</div>
						</DetailText>
					</Detail1>
				</Details>
				<Div>
					<Footer txtA />
				</Div>
			</Left>
			<Right>
				<RightHead>Here's a brief Pitch video of our work</RightHead>
				<Line />
				<Youtube
					src={
						video?.video[0]?.videoURL
							? `https://www.youtube.com/embed/${
									video?.video[0]?.videoURL.split("=")[1]
							  }`
							: "https://www.youtube.com/embed/nA7qa6M47rs"
					}
					// src="https://www.youtube.com/embed/nA7qa6M47rs"
					// src="https://www.youtube.com/embed/Ti8QNiRRzOA"
					frameborder="0"
					allow="autoplay; encrypted-media"
					allowfullscreen
					title="video"
					autoplay
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
							{/* 20th December 2021 */}
							Posted{" "}
							<strong>{moment().fromNow(video?.video[0]?.createdAt)}</strong>
						</Date>
					</RestText>
					<RightIcon to="video_form">
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

export default DetailsUser;

const PathMove = styled(Link)`
	text-decoration: none;
	color: white;
`;

const Diva = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Container = styled.div`
	padding-top: 100px;
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
	height: 320px;
	position: relative;
	:hover {
		span {
			opacity: 1;
		}
	}
	span {
		color: white;
		position: absolute;
		top: 40px;
		right: 40px;
		z-index: 10000;
		font-size: 25px;
		opacity: 0;
		transition: all 350ms;
	}
	input {
		display: none;
	}
	label {
		cursor: pointer;
	}
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
	object-fit: cover;
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

const Button1 = styled(Link)`
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
	position: relative;

	:hover {
		span {
			opacity: 1;
		}
	}
	span {
		color: #1e4c3d;
		position: absolute;
		top: 0;
		right: 10px;
		z-index: 10000;
		font-size: 25px;
		opacity: 1;
		transition: all 350ms;
	}
	textarea {
		width: 95%;
		outline: 1px solid #1e4c3d;
		border: none;
		border-radius: 3px;
		min-height: 300px;
		padding: 10px;
		font-size: 16px;
		margin-top: 30px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}
	label {
		cursor: pointer;
	}
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
	justify-content: space-between;
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

const RightIcon = styled(Link)`
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
const DoneHolder = styled.div`
	width: 94%;
	display: flex;
	justify-content: flex-end;
	margin-bottom: -55px;
`;

const Done = styled.div`
	color: white;
	font-size: 14px;
	/* opacity: 0; */
	transition: all 350ms;
	width: 80px;
	height: 40px;
	background-color: #1e4c3d;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
