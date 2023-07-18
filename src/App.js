import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/contactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Outlet />
		</div>
	)
}

let root = ReactDOM.createRoot(document.getElementById("root"));

let appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />
			},
			{
				path: "/about",
				element: <About />
			},
			{
				path: "/contact",
				element: <ContactUs />
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />
			}
		]
	}

])
root.render(<RouterProvider router={appRouter} />)
