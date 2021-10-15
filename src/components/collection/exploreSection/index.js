import React from "react";
import ExploreCard from "./exploreCard";
import "./exploreSection.css";
import ResultsCard from "./resultsCard";

const ExploreSection = ({ restaurants, collectionName }) => {
  return (
    <div className="max-width explore-section">
      
      {restaurants.length ?
      <>
      <div className="collection-title">{collectionName}</div>
        <div className="explore-grid">
        {restaurants.map((restaurant, i) => (
          <ExploreCard restaurant={restaurant} i={i} />
        ))}
      </div></> : <div className="explore-results"><ResultsCard/></div>
      }
      
    </div>
  );
};

export default ExploreSection;
