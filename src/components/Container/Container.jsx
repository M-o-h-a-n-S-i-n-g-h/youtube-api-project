import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core";

export default function AppContainer({children}) {
   return (
     <React.Fragment>
        <CssBaseline/>
        <Container fixed>
           <Typography component="div"/>
           {children}
        </Container>
     </React.Fragment>
   );
}