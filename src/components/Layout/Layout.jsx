import React from "react";
import AppContainer from "../Container/Container";

const Layout = ({children}) => {
   return <>
      <AppContainer>
         {children}
      </AppContainer>
   </>
}
export default Layout;