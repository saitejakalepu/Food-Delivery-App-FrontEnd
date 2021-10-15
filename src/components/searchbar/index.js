import React from 'react';
import './searchbar.css';
import { useDispatch , useSelector} from 'react-redux';
import { setQuery } from '../../redux/action';

export const Searchbar = () => {

  const searchInput = useSelector(state => state.query);
  const dispatch = useDispatch();
    return (
        
        <div className="searchbar-container">
          <div className="searchbar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
              onChange={(e)=>dispatch(setQuery(e.target.value))}
              value={searchInput}
            />
          </div>
        </div>
    )
}

export default Searchbar
