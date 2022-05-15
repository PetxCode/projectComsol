import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainBrandData } from "../../../GlobalState/Redux";

const PropsCOmp = ({ id }) => {
	const dispatch = useDispatch();
	const getBrandData = useSelector((state) => state.brand);
	const [data, setData] = useState();

	const [brandName, setBrandName] = useState("");

	const getBrand = async () => {
		const myID = "625ed23d256a8a9687b8cb2f";
		const url = `https://project-comsol.herokuapp.com/api/brand/${id}/view`;

		const res = await axios.get(url);

		setData(res.data.data);
		// dispatch(mainBrandData(res.data.data));

		setBrandName(data?.brand[0]?.name);
	};

	useEffect(() => {
		getBrand();
	}, []);

	return (
		<div>
			<div></div>
			<div>{brandName ? brandName : <div>no name yet</div>}</div>
		</div>
	);
};

export default PropsCOmp;
