

const SearchBar = (props) => {

    const handleSearchBar = () => {
        let input = document.getElementById("searchInput").value;
        props.setSearch(input);
        console.log(input);
    }

    return (
        
        <div className="search-bar">
            <input id="searchInput" type="text" placeholder="Search by typing.." onChange={handleSearchBar} />
        </div>
    );
};


export default SearchBar