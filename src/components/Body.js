import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {

	console.log("Body rendered");
	let [listOfRestaurant, setListOfRestaurant] = useState([]);
	let [filteredRestaurant, setFilteredRestaurant] = useState([]);
	let [searchText, setSearchText] = useState("");

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9542499&lng=77.65611799999999&page_type=DESKTOP_WEB_LISTING")
	
		let json = await data.json()
		setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
		setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
	}

	return (!listOfRestaurant.length) ? <Shimmer /> : (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input type="text" className="search-box" value={searchText} onChange={(e) => {
						setSearchText(e.target.value)
					}}/>
					<button onClick={() => {
						let filteredRestaurant = listOfRestaurant.filter(res => res.data.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
						setFilteredRestaurant(filteredRestaurant)
					}}>Search</button>
				</div>
				<button className="filer-btn" onClick={()=> {
					let filteredRestaurant = listOfRestaurant.filter(res => res.data.avgRating > 4);
					setListOfRestaurant(filteredRestaurant)
				}}>Top Rated Restaurant</button>
				</div>
			<div className="res-container">
				{filteredRestaurant.map((restaurant) =>
					<RestaurantCard key={restaurant.data.id} resData={restaurant} />
				)}
			</div>
		</div>
	)
}

export default Body;