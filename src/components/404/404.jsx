import React from "react";
import img from "./404.jpg";
import AppContainer from "../Container/Container";

const NotFoundError = () => {
   return (
     <AppContainer>
        <img src={img} alt="404 - Not Found"/>
     </AppContainer>
   )
}

export default NotFoundError;