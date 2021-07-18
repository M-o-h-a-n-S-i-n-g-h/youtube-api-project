import {
   GET_POPULARVIDEOS_FAIL,
   GET_POPULARVIDEOS_REQUEST, GET_POPULARVIDEOS_SUCCESS,
   GET_VIDEODETAIL_FAIL,
   GET_VIDEODETAIL_REQUEST,
   GET_VIDEODETAIL_SUCCESS, POPULARVIDEOS_RESET
} from "../constants/video.constants"
import { youtube } from "../../Helpers/Helpers";


export const getVideoDetailsAction = videoId => async dispatch => {
   try {
      dispatch({type: GET_VIDEODETAIL_REQUEST});
      const {data: video} = await youtube.get("/videos", {
         params: {
            part: "statistics, snippet",
            id: videoId
         }
      });
      const {data: comments} = await youtube.get("/commentThreads", {
         params: {
            part: "id, snippet, replies",
            videoId: videoId
         }
      });
      dispatch({type: GET_VIDEODETAIL_SUCCESS, payload: {video, comments}});
      
   } catch (error) {
      dispatch({
         type: GET_VIDEODETAIL_FAIL, error: "404 Not Found",
      })
   }
}

export const getPopularVideos = () => async dispatch => {
   try {
      dispatch({type: GET_POPULARVIDEOS_REQUEST});
      
      const {data} = await youtube.get("/videos", {
         params: {
            part: "snippet, statistics, id",
            chart: "mostPopular"
         }
      })
      dispatch({type: GET_POPULARVIDEOS_SUCCESS, payload: data});
      
   } catch (error) {
      dispatch({
         type: GET_POPULARVIDEOS_FAIL,
         error: "Failed to Fetch Popular Videos" || error.response.data.message
      })
   }
}

export const resetPopularVideosAction = () => dispatch => {
   dispatch({type: POPULARVIDEOS_RESET, payload: []})
}