import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {

	const [resInfo, setResInfo] = useState(null);

	// const { name } = resInfo.cards[0].card.card.info;

	useEffect(() => {
		fetchMenu()
	}, [])

	const fetchMenu = async () => {
		let data = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9542499&lng=77.65611799999999&restaurantId=8241&submitAction=ENTER"
		)
		let json = await data.json();
		setResInfo(json?.data?.cards[0]?.card?.card?.info);
	}

	if (!resInfo) return < Shimmer />

	const { name } = resInfo;
	
	return (
		<div>
			<h1>{name}</h1>
			<h2>Menu</h2>
			<ul>
				<li>Pizza</li>
				<li>Burger</li>
				<li>Cold drink</li>
			</ul>
		</div>
	)
}

export default RestaurantMenu;