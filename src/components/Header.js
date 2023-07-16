import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {

	const [btnName, setBtnName] = useState("Login");

	return (
		<div className="header">
			<div className="logoContainer">
				<img
					className="logo"
					src={LOGO_URL}
				/>
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About us</li>
					<li>Contact us</li>
					<li>cart</li>
					<button className="logIn" onClick={() => {
						btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
					}}>{btnName}</button>
				</ul>
			</div>
		</div>
	)
}

export default Header;