import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/contactUs";
import Error from "./components/Error";

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Body />
		</div>
	)
}

let root = ReactDOM.createRoot(document.getElementById("root"));

let appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error/>
	},
	{
		path: "/about",
		element: <About />
	}, 
	{
		path: "/contact",
		element: <ContactUs/>
	},
	

])
root.render(<RouterProvider router={appRouter} />)
