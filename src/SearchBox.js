import React from 'react' ;

const SearchBox = ({searchChange}) => {
    return(
        <div className = 'pa2'>
            <input className = 'tc pa2 br2' type = 'search' placeholder = 'Search Robots' onChange = {searchChange}/> 
        </div>    
    );
}

export default SearchBox ;