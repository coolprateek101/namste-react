import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

	let [listOfRestaurant, setListOfRestaurant] = useState(resList);
	
	return (
		<div className="body">
			<div className="filter">
				<button className="filer-btn" onClick={()=> {
					let filteredRestaurant = listOfRestaurant.filter(res => res.data.avgRating > 4);
					setListOfRestaurant(filteredRestaurant)
				}}>
						Top Rated Restaurant</button>
				</div>
			<div className="res-container">
				{listOfRestaurant.map((restaurant, idx) =>
					<RestaurantCard key={restaurant.data.id} resData={restaurant} />
				)}
			</div>
		</div>
	)
}

export default Body;