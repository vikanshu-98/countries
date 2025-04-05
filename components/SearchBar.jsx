

export default function SearchBar({updateSearchValue}){ 
    return( 
        
        <div className="search-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" name="" onChange={(e)=>updateSearchValue(e.target.value.toLowerCase())} placeholder="Search for a country"/>
        </div> 
    )
}