import React from "react";
import SearchBar from "../components/SearchBar/SearchBar.component";
import { getSearchResultsAction } from "../redux/actions/search.action";
import { connect } from "react-redux";
import VideoList from "../components/VideoList/VideoList.component";
import Layout from "../components/Layout/Layout";
import { getPopularVideos, resetPopularVideosAction } from "../redux/actions/video.action";
import PopularVideosList from "../components/PopularVideoList/PopularVideosList.component";

class HomeScreen extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         query: "",
      }
   }
   
   componentDidMount() {
      this.props.getPopularVideosAction();
   }
   
   handleChange = (event) => {
      this.setState({query: event.target.value})
   }
   
   handleSubmit = (event) => {
      event.preventDefault();
      this.props.getSearchResultsAction(this.state.query);
      this.props.resetPopularVideosAction();
   }
   
   render() {
      const {results, popularVideos} = this.props;
      
      if (this.props.error) {
         return <h2 className="App">{this.props.error}</h2>
      }
      
      return (
        <Layout>
           <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
           {
              (popularVideos?.items &&
                <PopularVideosList popularVideos={popularVideos.items}/>) ?? (results?.items &&
                <VideoList videos={results.items}/>)
           }
        </Layout>
      )
   }
}

const mapStateToProps = state => {
   return {
      results: state.search.results,
      popularVideos: state.video.popularVideos,
      loading: state.video.loading,
      searchError: state.search.error,
      videoError: state.video.error
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