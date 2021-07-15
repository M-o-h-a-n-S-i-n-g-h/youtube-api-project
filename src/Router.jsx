import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/Home.screen";
import VideoDetail from "./screens/VideoDetail.screen";
import Header from "./components/Header/Header";
import PlayList from "./screens/PlayList.screen";

class Router extends React.Component {
   render() {
      return (
        <BrowserRouter>
           <Header/>
           <Switch>
              <Route exact path="/" component={HomeScreen}/>
              <Route exact path="/playlist/:id" component={PlayList}/>
              <Route exact path="/video/:id" component={VideoDetail}/>
           </Switch>
        </BrowserRouter>
      )
   }
}

export default Router;