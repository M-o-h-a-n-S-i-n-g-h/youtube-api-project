import React, { Component } from "react";
import "./App.css";
import Router from "./Router";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallBack/ErrorFallBack";

class App extends Component {
   render() {
      return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
           <Router/>
        </ErrorBoundary>
      )
   }
}

export default App;