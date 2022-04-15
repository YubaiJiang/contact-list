import React from "react";

import "./SearchBar.css"

const SearchBar = (props) => {

    const handleSearchBar = () => {
        let input = document.getElementById("searchInput").value;
        props.setSearch(input);
    }

    return (
        
        <div className="search-bar">
            <input id="searchInput" type="text" placeholder="Search by typing.." onChange={handleSearchBar} />
        </div>
    );
};


export default SearchBar