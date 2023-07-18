import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

	const [resInfo, setResInfo] = useState(null);

	const { resId } = useParams()

	useEffect(() => {
		fetchMenu()
	}, [])

	const fetchMenu = async () => {
		let data = await fetch(
			`${MENU_API}=${resId }& submitAction=ENTER`
		)
		let json = await data.json();
		setResInfo(json.data);
	}

	if (!resInfo) return < Shimmer />

	const { id, name, cuisines, costForTwo } = resInfo.cards[0]?.card?.card?.info;
	
	const { itemCards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

	// console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card, "item");
	return (
		<div>
			<h1>{name}</h1>
			<h3>{cuisines.join(", ")}</h3>
			<h2>Menu</h2>
			<ul>
				{
					itemCards.map(item =>
						<li key={item.card.info.id}>
							{item.card.info.name} - Rs. {item.card.info.price / 100}
						</li>
					)
				}


			</ul>
		</div>
	)
}

export default RestaurantMenu;