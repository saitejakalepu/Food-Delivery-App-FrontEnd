import React from 'react'
import Brands from './brands'
import Foods from './foods'
import ExploreSection from './exploreSection'
import { restaurants } from "../../data/restaurants";
import { useSelector } from 'react-redux';
import Filters from "../filters"

export const Collections = () => {

 const searchInput = useSelector(state => state.query);
 const restaurantsList = restaurants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase()));

 const deliveryFilters = [
    {
      id: 1,
      icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
      title: "Filters",
    },
    {
      id: 2,
      title: "Rating: 4.0+",
    },
    {
      id: 3,
      title: "Safe and Hygienic",
    },
    {
      id: 4,
      title: "Pure Veg",
    },
    {
      id: 5,
      title: "Delivery Time",
      icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    },
    {
      id: 6,
      title: "Great Offers",
    },
  ];

   
    return (
        <div>
            {searchInput==="" && 
            <>
            <div className="max-width">
            <Filters filterList={deliveryFilters} />
             </div>
            <Foods/>
            <Brands/>
            </>
            }
           
            <ExploreSection
            restaurants={restaurantsList}
            collectionName="Delivery Restaurants near you"
            /> 
            
           
            
        </div>
    )
}


export default Collections