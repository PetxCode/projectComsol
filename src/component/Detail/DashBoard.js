import React, { useState } from "react";
import styled from "styled-components";
import { ImArrowLeft2 } from "react-icons/im";
import TitleProps from "./TitleProps";
import CardProps from "./CardProps";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";

const Dashboard = () => {
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
					<Image src={cover} />
					<Overlay>
						<Arrow to="/categories">
							<ImArrowLeft2 />
						</Arrow>
						<Info>
							<Logo src="/assets/logo1.png" />
							<TextHolder>
								<Name>Solid Rock Foundation</Name>
								<Slogan>For love of christianity</Slogan>
							</TextHolder>
						</Info>
					</Overlay>
					<span>
						<label htmlFor="cover">
							<AiOutlineEdit />
						</label>
						<input type="file" id="cover" onChange={uploadCover} />
					</span>
				</HeroHolder>
				<Button>Upload your pitch</Button>
				<Details>
					<Detail1>
						{input1 ? (
							<span>
								<label onClick={displayInput1}>
									<AiOutlineEdit />
								</label>
							</span>
						) : (
							<DoneHolder>
								<Done onClick={displayInput1}>Done</Done>
							</DoneHolder>
						)}
						<TitleProps text="Get To Know Us" />
						<DetailText>
							{input1 ? (
								<p>
									Both rest of know draw fond post as. It agreement defective to
									excellent. Feebly do engage of narrow. Extensive repulsive
									belonging depending if promotion be zealously as. Preference
									inquietude ask now are dispatched led appearance. Small meant
									in so doubt hopes. Me smallness is existence attending
								</p>
							) : (
								<textarea type="text" />
							)}
						</DetailText>
					</Detail1>
					<Detail1>
						{input2 ? (
							<span>
								<label onClick={displayInput2}>
									<AiOutlineEdit />
								</label>
							</span>
						) : (
							<DoneHolder>
								<Done onClick={displayInput2}>Done</Done>
							</DoneHolder>
						)}
						<TitleProps text="our journey so far" />
						<DetailText>
							{input2 ? (
								<p>
									On no twenty spring of in esteem spirit likely estate.
									Continue new you declared differed learning bringing honoured.
									At mean mind so upon they rent am walk. Shortly am waiting
									inhabit smiling he chiefly of in. Lain tore time gone him his
									dear sure. Fat decisively estimating affronting assistance
									not. Resolve pursuit regular so calling me. West he plan girl
									been my then up no. In show dull give need so held. One order
									all scale sense her gay style wrote. Incommode our not one
									ourselves residence. Shall there whose those stand she end. So
									unaffected partiality indulgence dispatched to of celebrated
									remarkably. Unfeeling are had allowance own perceived
									abilities. Folly words widow one downs few age every seven. If
									miss part by fact he park just shew. Discovered had get
									considered projection who favourable. Necessary up knowledge
									it tolerably. Unwilling departure education is be dashwoods or
									an. Use off agreeable law unwilling sir deficient curiosity
									instantly. Easy mind life fact with see has bore ten. Parish
									any chatty can elinor
								</p>
							) : (
								<textarea type="text" />
							)}
						</DetailText>
					</Detail1>
					<Detail1>
						<TitleProps text="our various events" />
						<DetailImage>
							<div>
								<span>
									<label>
										<AiOutlineEdit />
									</label>
								</span>
								<CardProps
									image="/assets/girl.jpg"
									title="Kids day out"
									text="A visit to the park"
								/>
							</div>
							<div>
								<CardProps
									image="/assets/card2.jpg"
									title="Food for thought"
									text="Distribution of food to the"
								/>
							</div>
							<div>
								<CardProps
									image="/assets/card3.jpg"
									title="Mothers day"
									text="Ceebrating mothers day"
								/>
							</div>
						</DetailImage>
					</Detail1>
					<Detail1>
						{input3 ? (
							<span>
								<label onClick={displayInput3}>
									<AiOutlineEdit />
								</label>
							</span>
						) : (
							<DoneHolder>
								<Done onClick={displayInput3}>Done</Done>
							</DoneHolder>
						)}
						<TitleProps text="more usecases" />
						<DetailText>
							{input3 ? (
								<div>
									<p>
										On no twenty spring of in esteem spirit likely estate.
										Continue new you declared differed learning bringing
										honoured. At mean mind so upon they rent am walk. Shortly am
										waiting inhabit smiling he chiefly of in. Lain tore time
										gone him his dear sure. Fat decisively estimating affronting
										assistance not. Resolve pursuit regular so calling me. West
										he plan girl been my then up no. In show dull give need so
										held. One order all scale sense her gay style wrote.
										Incommode our not one ourselves residence. Shall there whose
										those stand she end. So unaffected partiality indulgence
										dispatched to of celebrated remarkably. Unfeeling are had
										allowance own perceived abilities. Folly words widow one
										downs few age every seven. If miss part by fact he park just
										shew. Discovered had get considered projection who
										favourable. Necessary up knowledge it tolerably. Unwilling
										departure education is be dashwoods or an. Use off agreeable
										law unwilling sir deficient curiosity instantly. Easy mind
										life fact with see has bore ten. Parish any chatty can
										elinor
									</p>
									<p>
										On no twenty spring of in esteem spirit likely estate.
										Continue new you declared differed learning bringing
										honoured. At mean mind so upon they rent am walk. Shortly am
										waiting inhabit smiling he chiefly of in. Lain tore time
										gone him his dear sure. Fat decisively estimating affronting
										assistance not. Resolve pursuit regular so calling me. West
										he plan girl been my then up no. In show dull give need so
										held. One order all scale sense her gay style wrote.
										Incommode our not one ourselves residence. Shall there whose
										those stand she end. So unaffected partiality indulgence
										dispatched to of celebrated remarkably. Unfeeling are had
										allowance own perceived abilities. Folly words widow one
										downs few age every seven. If miss part by fact he park just
										shew. Discovered had get considered projection who
										favourable. Necessary up knowledge it tolerably. Unwilling
										departure education is be dashwoods or an. Use off agreeable
										law unwilling sir deficient curiosity instantly. Easy mind
										life fact with see has bore ten. Parish any chatty can
										elinor
									</p>
								</div>
							) : (
								<textarea type="text" />
							)}
						</DetailText>
					</Detail1>
				</Details>
				<Div>
					<Footer txtA />
				</Div>
			</Left>
			<Right>
				<RightHead>Here's a Summary of our work</RightHead>
				<Line />
				<Youtube
					src="https://www.youtube.com/watch?v=c1xTDSIXit8"
					frameborder="0"
					allow="autoplay; encrypted-media"
					allowfullscreen
					title="video"
				/>
				<RestRight>
					<RestText>
						<VidTitle>Hear's the story of john</VidTitle>
						<Date>20th December 2021</Date>
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

export default Dashboard;

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
		opacity: 0;
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
