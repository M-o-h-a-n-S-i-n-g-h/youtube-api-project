import { GET_VIDEODETAIL_REQUEST, GET_VIDEODETAIL_SUCCESS } from "../constants/video.constants"
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
            part: "id, snippet",
            videoId: videoId
         }
      });
      dispatch({type: GET_VIDEODETAIL_SUCCESS, payload: {video, comments}});
      
   } catch (error) {
      console.log(error);
   }
}