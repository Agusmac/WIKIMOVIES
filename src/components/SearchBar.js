import React from "react"
import searchIcon from '../images/search-icon.svg';

export default function SearchBar({searchTerm,changer}) {
    
    return (
        <div className="searchDIV">
            <div className="searchBar">
                <img alt="searchIcon" src={searchIcon}/>
                <input type="text" placeholder="Search Movie" value={searchTerm} onChange={changer}/>
            </div>
        </div>
    )
}