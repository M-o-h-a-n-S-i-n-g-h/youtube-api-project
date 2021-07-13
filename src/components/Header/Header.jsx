import { Toolbar } from "@material-ui/core";
import React from "react";
import NavBar from "../Navigationbar/Navigationbar";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";


export const Header = () => {
   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
   
   
   
   return (
     <header>
        <NavBar  />
     </header>
   );
}

export default Header;