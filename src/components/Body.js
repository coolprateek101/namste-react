import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
const Body = () => {

	let [listOfRestaurant, setListOfRestaurant] = useState([]),
		[filteredRestaurant, setFilteredRestaurant] = useState([]),
		[searchText, setSearchText] = useState("");

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
					console.log("called");
					let filteredRestaurant = listOfRestaurant.filter(res => res.data.avgRating > 4);
					console.log(filteredRestaurant);
					setFilteredRestaurant(filteredRestaurant)
				}}>Top Rated Restaurant</button>
				</div>
			<div className="res-container">
				{filteredRestaurant.map((restaurant) =>
					<Link key={restaurant.data.id} to={`/restaurant/${restaurant.data.id}`}><RestaurantCard key={restaurant.data.id} resData={restaurant} /></Link>
				)}
			</div>
		</div>
	)
}

export default Body;