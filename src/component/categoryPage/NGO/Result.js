import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { allUsers } from "../../../GlobalState/Redux";
import CardProps from "./CardProps";

const Result = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.allUser);

	const getData = async () => {
		const url = "https://project-comsol.herokuapp.com/api/user";
		const res = await axios.get(url);
		dispatch(allUsers(res.data.data));
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Container>
			<Text>All Category</Text>
			<CardHolder>
				{data?.map((props) => (
					<div key={props._id}>
						{props.brand.length > 1 ? <CardProps props={props} /> : null}
					</div>
				))}

				{/*         
				<CardProps
					image="/assets/prop2.jpg"
					logo="/assets/logo2.png"
					name="Dream From The slum"
					slogan="A hand the gives never lacks"
					text={`title: "You have", special: "to be seen", title1: "and heard by peaople
        that metters", subTitle: "Create a new pipeline or choose an existing
        one and add this app to a stage in it.", title: "You have", special: "to
        be seen", title1: "and heard by peaople that metters", subTitle: "Create
        a new pipeline or choose an existing one and add this app to a stage in
        it.", be seen", title1: "and heard by peaople that metters", subTitle:
        "Create a new pipeline or choose an existing one and add this app to a
        stage in it.",`}
				/>
				<CardProps
					image="/assets/prop3.jpg"
					logo="/assets/logo3.jpg"
					name="Elisha Foundation"
					slogan="Helping the community"
					text={`title: "You have", special: "to be seen", title1: "and heard by peaople
        that metters", subTitle: "Create a new pipeline or choose an existing
        one and add this app to a stage in it.", title: "You have", special: "to
        be seen", title1: "and heard by peaople that metters", subTitle: "Create
        a new pipeline or choose an existing one and add this app to a stage in
        it.", be seen", title1: "and heard by peaople that metters", subTitle:
        "Create a new pipeline or choose an existing one and add this app to a
        stage in it.",`}
				/> */}
			</CardHolder>
		</Container>
	);
};

export default Result;

const Container = styled.div`
	padding: 0 80px;
	@media screen and (max-width: 1276px) {
		padding: 0 40px;
	}
	@media screen and (max-width: 425px) {
		padding: 0;
	}
`;

const Text = styled.div`
	color: #1e4c3d;
	font-size: 22px;
	font-weight: 700;
	@media screen and (max-width: 425px) {
		margin-left: 20px;
	} ;
`;

const CardHolder = styled.div`
	margin-top: 40px;
	display: flex;
	justify-content: flex-start;
	height: auto;
	flex-wrap: wrap;
	padding-bottom: 20px;

	@media screen and (max-width: 1188px) {
		justify-content: space-around;
		width: 100%;
	} ;
`;
