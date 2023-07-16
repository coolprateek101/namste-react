import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {

	let [listOfRestaurant, setListOfRestaurant] = useState([]);
	let [name, setName] = useState("");

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9542499&lng=77.65611799999999&page_type=DESKTOP_WEB_LISTING")
	
		let json = await data.json()
		setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
	}

	return (!listOfRestaurant.length) ? <Shimmer /> : (
		<div className="body">
			<div className="filter">
				{/* <input className="searchInput" value={name} onChange={(e) => {
					console.log(e.target.value);
					setName(e.target.value)
					let filteredRestaurant = listOfRestaurant.filter(res => res.data.name.includes(name))
					setListOfRestaurant(filteredRestaurant)
					console.log(name);
					if (name === "") setListOfRestaurant(resList)
				}}/> */}

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