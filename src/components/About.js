import User from "./User";
import UserClass from "./userClass";
const About = () => {
	return (
		<div>
			<h1>About Us 😃 </h1>
			<h3>This is My Food Pal. You can order soon delicious food for your tummy 🥘</h3>
			{/* <User name={"Prateek (function)"} location = {"Kanpur"} /> */}
			<UserClass name="Prateek (class)" location="Mangla vihar 2nd" />
		</div>
	)
}

export default About;