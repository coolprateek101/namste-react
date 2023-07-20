import { useEffect, useState } from "react";

const User = (props) => {

	const [count, setCount] = useState(0);
	const count2 = useState(1)

	
	// console.log(count, '**');

	// useEffect(() => {
	// 	setCount(5)
	// }, [])
	
	return (
		<div className="user-card">
			<h1>count: {count}</h1>
			<h1>count2: {count2}</h1>
			<h2>Name: {props.name}</h2>
			<h2>Location: {props.location}</h2>
		</div>
	)
}

export default User;