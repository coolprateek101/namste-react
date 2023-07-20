import React from "react";

class UserClass extends React.Component {

	constructor(props) {
		super(props)

		console.log("Child Constructor");
		this.state = {
			count: 0
		}
	}

	componentDidMount() {
		console.log("Child component mount");
	}
	render() {
		const {count, count2} = this.state;
		console.log("Child render");
		return (
			<div className="user-card">
				<h1>count: {count}</h1>
				<button onClick={() => {
					console.log("called");
					this.setState({
						count: this.state.count + 1
					})
				}}>Count Increase</button>
				<h2>Name: {this.props.name}</h2>
				<h2>Location: {this.props.location}</h2>
			</div>
		)
	}
}

export default UserClass;