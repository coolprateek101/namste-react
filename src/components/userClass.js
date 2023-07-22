import React from "react";

class UserClass extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			userInfo: {
				name: "Dummy Name",
				location: "default",
				avatar_url: "http://dummy-photo.com"
			}
		}
		console.log("child constructor");
	}

	async componentDidMount() {
		console.log("child component mount");
		// let data = await fetch("https://api.github.com/users/coolprateek101")
		// let json = await data.json()
		// this.setState({
		// 	userInfo: json
		// })

		this.timer = setInterval(() => {
			console.log("set interval");
		}, 1000)
		
	}

	componentDidUpdate() {
		console.log("component did update");
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}
	render() {
		const { name, location, avatar_url } = this.state.userInfo;
		console.log("Child render");
		return (
			<div className="user-card">
				<img src={avatar_url}></img>
				<h2>Name: {name}</h2>
				<h2>Location: {location}</h2>
			</div>
		)
	}
} 

export default UserClass; 