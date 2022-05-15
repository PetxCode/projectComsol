import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";

const Footer = ({ txtA }) => {
	const date = new Date().getFullYear();
	return (
		<Container txtA={txtA}>
			<Left txtA={txtA}>
				<Logo>COMSOL</Logo>
				<Write txtA={txtA}>
					oth rest of know draw fond post as. It agreement defective to
					excellent. Feebly do engage of narrow. Extensive repulsive belonging
					depending if promotion be zealously as
				</Write>
				<Icon>
					<FaFacebook />
					<AiOutlineTwitter />
					<AiOutlineInstagram />
					<FaLinkedinIn />
				</Icon>
			</Left>
			<Right txtA={txtA}>
				<ListHolder txtA={txtA}>
					<ListHead>Companies</ListHead>
					<Lists>
						<List>About us</List>
						<List>Career</List>
						<List>Leadership</List>
						<List>Partners</List>
						<List>Press</List>
						<List>Contact us</List>
					</Lists>
				</ListHolder>
				<ListHolder txtA={txtA}>
					<ListHead>Resources</ListHead>
					<Lists>
						<List>WhyOfficeSpace</List>
						<List>Customers Stories</List>
						<List>Blogs</List>
						<List>Guilds</List>
					</Lists>
				</ListHolder>
				<Text txtA={txtA}>
					Copyright
					<br /> @{date} Developed by{" "}
					<Tag
						rel="noopener"
						target={"_blank"}
						href="https://codelab-home.web.app"
					>
						CodeLab
					</Tag>
				</Text>
			</Right>
		</Container>
	);
};

export default Footer;

const Tag = styled.a`
	transition: all 350ms;
	transform: scale(1);
	color: #1e4c3d;
	text-decoration: none;
	font-size: 18px;
	font-weight: bold;

	:hover {
		transform: scale(1.5);
		cursor: pointer;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: ${({ txtA }) => (txtA ? "column" : "unset")};
	align-items: ${({ txtA }) => (txtA ? "center" : "unset")};
	margin-top: 100px;
	padding: 0px 80px;
	justify-content: space-between;
	margin-bottom: 20px;
	flex-wrap: wrap;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
	@media screen and (max-width: 425px) {
		flex-direction: column;
		align-items: center;
	}
`;

const Left = styled.div`
	text-align: ${({ txtA }) => (txtA ? "center" : "unset")};
	display: flex;
	flex-direction: column;
	align-items: ${({ txtA }) => (txtA ? "center" : "unset")};
	@media screen and (max-width: 768px) {
		text-align: center;
		align-items: center;
	}
`;

const Right = styled.div`
	display: flex;
	flex-direction: ${({ txtA }) => (txtA ? "column" : "unset")};
	align-items: ${({ txtA }) => (txtA ? "center" : "unset")};
	text-align: ${({ txtA }) => (txtA ? "center" : "unset")};
	@media screen and (max-width: 768px) {
		text-align: center;
		align-items: center;
		flex-direction: column;
	}
`;

const Logo = styled.div`
	font-weight: 900;
	font-size: 25px;
`;

const Write = styled.div`
	margin-top: 14px;
	max-width: 320px;
	font-size: 14px;
	text-align: ${({ txtA }) => (txtA ? "center" : "justify")};
	font-weight: 500;
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

const Icon = styled.div`
	margin-top: 20px;
	font-size: 25px;
	width: 150px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ListHolder = styled.div`
	margin-right: ${({ txtA }) => (txtA ? "unset" : "60px")};
	margin-top: ${({ txtA }) => (txtA ? "40px" : "unset")};
	@media screen and (max-width: 768px) {
		margin-right: unset;
		margin-top: 40px;
	}
`;

const ListHead = styled.div`
	font-weight: 800;
	font-size: 18px;
`;

const Lists = styled.div`
	margin-top: 20px;
`;

const List = styled.div`
	margin-top: 10px;
	font-weight: 500;
	font-size: 15px;
	cursor: pointer;
`;

const Text = styled.div`
	max-width: 250px;
	font-size: 15px;
	margin-top: ${({ txtA }) => (txtA ? "40px" : "unset")};
	@media screen and (max-width: 768px) {
		margin-top: 40px;
	}
`;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``
