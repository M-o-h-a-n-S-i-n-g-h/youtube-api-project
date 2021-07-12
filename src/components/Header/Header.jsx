import { Toolbar } from "@material-ui/core";
import React from "react";
import NavBar from "../Navigationbar/Navigationbar";
import { useSelector } from "react-redux";


export const Header = () => {
   return (
     <header>
        <NavBar/>
     </header>
   );
}

export default Header;