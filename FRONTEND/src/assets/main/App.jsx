import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../pages/splash/Splash.jsx";
import SignIn from "../pages/sign-in/Login.jsx";
import { SignUp } from "../pages/sign-up/Registry1.jsx";
import { Sending, Code } from "../pages/ativation/ativation.jsx"
import { MyPhoto } from "../pages/Profile/ProfilePhoto.jsx";
import Interesting from "../pages/interesting/interestings.jsx";
import { Finish} from "../pages/finishing/Finish.jsx";
import Users from "../pages/main/Users/Users.jsx";
import Notify from "../pages/main/notify/Notify.jsx";
import Messages from "../pages/main/message/Message.jsx";
import MyProfile from "../pages/main/profile/MyProfile.jsx";
import OtherProfile from "../pages/main/profile/OtherProfile.jsx";

function App() {
	
	return (
		<BrowserRouter>
			<Routes>

				<Route
					path="/welcome"
					element={<Splash />}
				/>

				<Route
					path="/sign-in"
					element={<SignIn />}
				/>

				<Route
					path="/sign-up"
					element={<SignUp />}
				/>

				<Route
					path="/sending"
					element={<Sending />}
				/>


				<Route
					path="/code"
					element={<Code />}
				/>

				<Route
					path="/my-desription"
					element={<MyPhoto />}
				/>

				<Route
					path="/interesting"
					element={<Interesting />}
				/>

				<Route
					path="/meeting-information"
					element={<Finish />}
				/>

				<Route
					path="/"
					element={<MyProfile  />}
				/>

				<Route
					path="/notify"
					element={<Notify />}
				/>

				<Route
					path="/message"
					element={<Messages />}
				/>

				<Route
					path="/users"
					element={<Users />}
				/>

				<Route
					path="/otherProfile"
					element={<OtherProfile />}
				/>

				<Route
					path="*"
					element={<h1>404</h1>}
				/>


			</Routes>
		</BrowserRouter>
	)
}
export default App;