import React from "react";
import DetailsUser from "./DetailsUser";
import NoUserDetail from "./NoUserDetail";
import { useSelector } from "react-redux";

const DetailDashBoard = () => {
	const user = useSelector((state) => state.currentUser);

	return <div>{user ? <DetailsUser /> : null};</div>;
};

export default DetailDashBoard;
