import React from "react";
import Header from "../Header/Header";
import AppContainer from "../Container/Container";

const Layout = ({children}) => {
   return <>
      <Header/>
      <AppContainer>
         {children}
      </AppContainer>
   </>
}
export default Layout;