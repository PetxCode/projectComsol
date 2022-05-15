import React from "react";
import styled from "styled-components";
import MapProps from "./MapProps";

const Map = () => {
	return (
		<Container>
			<MapProps
				textCl="black"
				ht="100px"
				cl="#83AEA0"
				btn="Register"
				br="0 15px 15px 15px"
				image="/assets/man.png"
			/>
			<MapProps
				textCl="black"
				ht="200px"
				cl="#65D6D7"
				btn="Pitch"
				image="/assets/phone.png"
			/>
			<MapProps
				textCl="white"
				ht="160px"
				cl="#1e4c3d"
				btn="get Invested"
				br=" 15px 0 15px 15px"
				image="/assets/city.png"
			/>
		</Container>
	);
};

export default Map;
const Container = styled.div`
	display: flex;

	@media screen and (max-width: 1024px) {
		margin-top: 50px;
	}

	@media screen and (max-width: 900px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;
