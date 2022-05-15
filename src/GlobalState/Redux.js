import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUser: null,
	userDetail: {},
	allUser: [],
	brandData: [],
	pitchData: [],
	videoData: [],
	eventData: [],
	mainData: [],
};

const Redux = createSlice({
	name: "user_state",
	initialState,
	reducers: {
		allUsers: (state, { payload }) => {
			state.allUser = payload;
		},
		mainBrandData: (state, { payload }) => {
			state.brandData = payload;
		},
		createUser: (state, { payload }) => {
			state.currentUser = payload;
		},
		userDetails: (state, { payload }) => {
			state.userDetail = payload;
		},
		emptyUserDetails: (state) => {
			state.userDetail = {};
		},

		logOutUser: (state) => {
			state.currentUser = null;
		},
		mainData: (state, { payload }) => {
			state.mainData = payload;
		},
	},
});

export const {
	createUser,
	userDetails,
	logOutUser,
	emptyUserDetails,
	allUsers,
	mainBrandData,
	mainData,
} = Redux.actions;

export default Redux.reducer;
