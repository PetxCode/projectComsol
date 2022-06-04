import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroComp from "./component/homeComponents/HeroComp";
import Home from "./component/homeComponents/Home";
import Register from "./Holder/Register/Register";
import SignIn from "./Holder/Register/SignIn";
import Category from "./component/categoryPage/Category";
import Detail from "./component/Detail/Detail";
import Header from "./component/headerComponents/Header";
import Footer from "./component/Footer/Footer";
import PrivateRoute from "./GlobalState/PrivateRoute";
import DetailsUser from "./component/Detail/DetailsUser";
import DetailDashBoard from "./component/Detail/Detail";
import Payment from "./component/Detail/Payment";
import NoUserDetail from "./component/Detail/NoUserDetail";
import PitchForm from "./Holder/OtherForms/PitchForm";
import BrandForm from "./Holder/OtherForms/BrandForm";
import JourneyForm from "./Holder/OtherForms/JourneyForm";
import ScrollToTop from "./ScrollToTop";
import VideoForm from "./Holder/OtherForms/VideoForm";
import EventForm from "./Holder/OtherForms/EventForm";
import ResetPassword from "./Holder/Register/ResetPassword";
import ForgetPassword from "./Holder/Register/ForgetPassword";
import EmailVerified from "./Holder/Register/EmailVerified";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pay" element={<Payment />} />
					<Route path="/register" element={<Register />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/:id/detail" element={<NoUserDetail />} />
					<Route path="/reset_password" element={<ResetPassword />} />
					<Route
						path="/api/user/reset/:id/:token"
						element={<ForgetPassword />}
					/>
					<Route path="/api/user/:id/:token" element={<EmailVerified />} />
					<Route path="/categories" element={<Category />} />
					<Route
						path="/dashboard/video_form"
						element={
							<PrivateRoute>
								<VideoForm />
							</PrivateRoute>
						}
					/>
					<Route
						path="/pitch_deck"
						element={
							<PrivateRoute>
								<PitchForm />
							</PrivateRoute>
						}
					/>
					<Route
						path="/dashboard/journey_path"
						element={
							<PrivateRoute>
								<JourneyForm />
							</PrivateRoute>
						}
					/>
					<Route
						path="/dashboard/event_path"
						element={
							<PrivateRoute>
								<EventForm />
							</PrivateRoute>
						}
					/>
					<Route
						path="/dashboard/brand_form"
						element={
							<PrivateRoute>
								<BrandForm />
							</PrivateRoute>
						}
					/>
					<Route
						path="/dashboard"
						element={
							<PrivateRoute>
								<DetailDashBoard />
							</PrivateRoute>
						}
					/>
				</Routes>
			</ScrollToTop>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
