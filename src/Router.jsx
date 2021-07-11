import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/Home.screen";
import VideoDetail from "./screens/VideoDetail.screen";

class Router extends React.Component {
   render() {
      return (
        <BrowserRouter>
           <Switch>
              <Route exact path="/" component={HomeScreen}/>
              <Route exact path="/video/:id" component={VideoDetail}/>
           </Switch>
        </BrowserRouter>
      )
   }
}

export default Router;