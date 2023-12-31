import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);

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