import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../headerComponents/Header";
import Landing from "./Landing";
import CatHeader from "./NGO/CatHeader";
import Result from "./NGO/Result";
import { useParams } from "react-router-dom";

const Category = () => {
	return (
		<Container>
			<Landing />
			<CatHeader />
			<Result />
		</Container>
	);
};

export default Category;

const Container = styled.div`
	padding-top: 100px;
`;
