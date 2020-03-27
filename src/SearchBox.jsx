import React from 'react';


const SearchBox = ({ seacrhField, onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search your robot face'
      />
    </div>
  )
}

export default SearchBox;