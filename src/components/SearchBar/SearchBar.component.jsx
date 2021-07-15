import React from "react";
import { FormControl, Input, InputLabel, } from "@material-ui/core";

const SearchBar = ({handleChange, handleSubmit}) => {
   return (
     <form aria-label="form" onSubmit={handleSubmit} style={{marginTop: "20px"}}>
        <FormControl style={{width: "100%"}}>
           <InputLabel htmlFor="my-input">Search</InputLabel>
           <Input
             data-testid="input"
             id="my-input"
             aria-describedby="my-helper-text"
             onChange={handleChange}
           />
        </FormControl>
     </form>
   )
}
export default SearchBar;