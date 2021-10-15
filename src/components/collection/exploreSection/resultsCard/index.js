import React from 'react';
import { setQuery } from '../../../../redux/action';
 import './resultsCard.css';
 import { useDispatch } from 'react-redux';

const ResultsCard = () => {

    const dispatch= useDispatch();
    return (
        <div className="results-container">
        <div className="results-text">
            <h3>Sorry, no results found</h3>
            <button onClick={()=>dispatch(setQuery(""))}>Back to Home</button> 
        </div>
        <div className="image-wrapper">
            <img alt="no search results found" src="https://b.zmtcdn.com/web/assets/f0b1bdc4cdae3c9e54964d791e83be401614320771.jpeg"/>
        </div>
        </div>
        
    )
}

export default ResultsCard