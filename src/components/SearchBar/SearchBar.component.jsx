import React from "react";

const SearchBar = ({handleChange, handleSubmit}) => {
   return (
     <form onSubmit={handleSubmit}>
        <label htmlFor="query">Search</label>
        <input type="text" name="query" onChange={handleChange}/>
     </form>
   )
}
export default SearchBar;