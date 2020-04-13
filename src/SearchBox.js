import React from 'react';

const SearchBox = ( { searchfield, searchChange } ) => {
    return (
        <div className='pa3'>
        <input type='search' placeholder='Search Animal'  onChange={searchChange} />
        </div>
    )

}

export default SearchBox;

