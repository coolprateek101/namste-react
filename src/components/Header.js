import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
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
					<li>
						<Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
					</li>
					<li>
						<Link to="/about" style={{ textDecoration: 'none' }}> About us</Link>
					</li>
					<li>
						<Link to="/contact"  style={{ textDecoration: 'none' }}>Contact us</Link>
					</li>
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