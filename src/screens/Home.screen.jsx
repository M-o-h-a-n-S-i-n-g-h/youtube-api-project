import React from "react";
import SearchBar from "../components/SearchBar/SearchBar.component";
import { getSearchResultsAction } from "../redux/actions/search.action";
import { connect } from "react-redux";
import VideoList from "../components/VideoList/VideoList.component";
import { login } from "../redux/actions/auth.action";

const gapi = window.gapi;

class HomeScreen extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         query: "",
         isSignedIn: null
      }
   }
   
   authStatus = () => {
      const {isSignedIn} = this.state;
      if (isSignedIn == null) {
         return null
      } else if (isSignedIn) {
         return <span>Signed in</span>
      } else {
         return <span>Not Signed In</span>
      }
   }
   
   isEmpty(obj) {
      return Object.keys(obj).length === 0;
   }
   
   handleChange = (event) => {
      this.setState({query: event.target.value})
   }
   
   handleSubmit = (event) => {
      event.preventDefault();
      this.props.getSearchResultsAction(this.state.query);
   }
   
   handleSignIn = () => {
      this.props.login();
   }
   
   render() {
      return (
        <div className="App">
           <h1>Youtube {this.authStatus()}</h1>
           <button onClick={this.handleSignIn}>Sign In</button>
           <h2>
              {
                 this.props.user && (this.isEmpty(this.props.user)
                                     ? null
                                     : this.props.user.Ys.Ve)
              }
           </h2>
           <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
           {this.props.loading && (<h2>Loading...</h2>)}
           {this.props.results.items && <VideoList videos={this.props.results.items}/>}
        </div>
      )
   }
}

const mapStateToProps = state => {
   // console.log(state.auth.user)
   return {
      results: state.search.results,
      loading: state.search.loading,
      user: state.auth.user
   }
}

const mapDispatchToProps = dispatch => {
   return {
      getSearchResultsAction: (query) => dispatch(getSearchResultsAction(query)),
      login: () => dispatch(login())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);