import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout/Layout.js";
import Main from "../pages/main/Main.js";
import SignIn from "../pages/signIn/SignIn.js";
import SignUp from "../pages/signUp/SignUp.js";
import EmailAuthentication from "../pages/signUp/EmailAuthentication.js";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Main /> },
			{ path: '/login', element: <SignIn /> },
			{ path: '/signup', element: <EmailAuthentication /> },
		]
	}
]);

export default router;