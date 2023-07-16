import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";

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
		element: <AppLayout />
	},
	{
		path: "/about",
		element: <About />
	}

])
root.render(<RouterProvider router={appRouter} />)
