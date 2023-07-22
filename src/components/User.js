import { useEffect, useState } from "react";
import { json } from "react-router-dom";

const User = (props) => {

	const [count, setCount] = useState(0);
	const count2 = useState(1)

	
	// console.log(count, '**');

	useEffect(() => {
		console.log("use Effect");
	// getUser()

	return () => {
		console.log("return");
	}
	}, [])
	
	const getUser = async() => {
		let data = await fetch("https://api.github.com/users/coolprateek101");
		data = data.json()
	}

	console.log("render");
	return (
		<div className="user-card">
			{/* <h1>count: {count}</h1>
			<h1>count2: {count2}</h1>
			<h2>Name: {props.name}</h2>
			<h2>Location: {props.location}</h2> */}
		</div>
	)
}
 
export default User;