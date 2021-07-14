import React from "react";
import SearchBar from "../components/SearchBar/SearchBar.component";
import { getSearchResultsAction } from "../redux/actions/search.action";
import { connect } from "react-redux";
import VideoList from "../components/VideoList/VideoList.component";
import Layout from "../components/Layout/Layout";

class HomeScreen extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         query: "",
      }
   }
   
   handleChange = (event) => {
      this.setState({query: event.target.value})
   }
   
   handleSubmit = (event) => {
      event.preventDefault();
      this.props.getSearchResultsAction(this.state.query);
   }
   
   render() {
      return (
        <Layout>
           <SearchBar data-testid="search" handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
           {this.props.results.items && <VideoList videos={this.props.results.items}/>}
        </Layout>
      )
   }
}

const mapStateToProps = state => {
   return {
      results: state.search.results,
   }
}

const mapDispatchToProps = dispatch => {
   return {
      getSearchResultsAction: (query) => dispatch(getSearchResultsAction(query)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);