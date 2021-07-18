import React from "react";
import SearchBar from "../components/SearchBar/SearchBar.component";
import { getSearchResultsAction } from "../redux/actions/search.action";
import { connect } from "react-redux";
import VideoList from "../components/VideoList/VideoList.component";
import Layout from "../components/Layout/Layout";
import { getPopularVideos, resetPopularVideosAction } from "../redux/actions/video.action";
import PopularVideosList from "../components/PopularVideoList/PopularVideosList.component";
import 'react-toastify/dist/ReactToastify.css';
import ShowLoading from "../components/ShowLoading/ShowLoading";
import ShowError from "../components/ShowError/ShowError";

class HomeScreen extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         query: "",
         error: false
      }
   }
   
   componentDidMount() {
      this.props.getPopularVideosAction();
   }
   
   handleChange = (event) => {
      this.setState(() => ({query: event.target.value}));
   }
   
   handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.query.length === 0) {
         this.setState(({error: true}));
         setTimeout(() => {
            this.setState({error: false});
         }, 4000)
      } else {
         this.props.getSearchResultsAction(this.state.query);
         this.props.resetPopularVideosAction();
      }
   }
   
   render() {
      const {searchResults, popularVideos, loading, error} = this.props;
      
      if (this.props.error) {
         return <h2 className="App">{this.props.error}</h2>
      }
      
      return (
        <Layout>
           <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
           {loading && <ShowLoading/>}
           {error && <ShowError error={error}/>}
           {this.state.error && <ShowError error="Please enter a query to search for Videos"/>}
           {
              (
                popularVideos?.items &&
                <PopularVideosList popularVideos={popularVideos.items}/>
              )
              ?? (
                searchResults?.items &&
                <VideoList videos={searchResults.items}/>
              )
           }
        </Layout>
      )
   }
}

const mapStateToProps = state => {
   return {
      loading: state.search.loading || state.video.loading,
      searchResults: state.search.results,
      popularVideos: state.video.popularVideos,
      error: state.search.error || state.video.error,
   }
}

const mapDispatchToProps = dispatch => {
   return {
      getSearchResultsAction: (query) => dispatch(getSearchResultsAction(query)),
      getPopularVideosAction: () => dispatch(getPopularVideos()),
      resetPopularVideosAction: () => dispatch(resetPopularVideosAction())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);