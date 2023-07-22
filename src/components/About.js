import { render } from "react-dom";
import User from "./User";
import UserClass from "./userClass";
import React from "react";

// const About = () => {
// 	return (
		// <div>
		// 	<h1>About Us 😃 </h1>
		// 	<h3>This is My Food Pal. You can order soon delicious food for your tummy 🥘</h3>
		// 	{/* <User name={"Prateek (function)"} location = {"Kanpur"} /> */}
		// 	<UserClass name="Prateek (class)" location="Mangla vihar 2nd" />
		// </div>
// 	)
// }

class About extends React.Component {

	constructor() {
		super()
		console.log("Parent Constructor");
	}
	componentDidMount () {
		console.log("Parent component mount");
	}
	render() {
		console.log("Parent Render");
		return (
			<div>
				<h1>About Us 😃 </h1>
				<h3>This is My Food Pal. You can order soon delicious food for your tummy 🥘</h3>
				{/* <UserClass name="First child " location="Mangla vihar 2nd" /> */}
				<User/>
			</div>
		)
	}
}

export default About;