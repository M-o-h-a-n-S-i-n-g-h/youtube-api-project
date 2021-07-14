import {
   GET_VIDEODETAIL_FAIL,
   GET_VIDEODETAIL_REQUEST,
   GET_VIDEODETAIL_SUCCESS
} from "../constants/video.constants";

export function videoReducer(state = {video: {}}, action) {
   switch (action.type) {
      case GET_VIDEODETAIL_REQUEST:
         return {loading: true}
      case GET_VIDEODETAIL_SUCCESS:
         return {loading: false, videoDetails: action.payload}
      case GET_VIDEODETAIL_FAIL:
         return {
            loading: false, error: action.error
         }
      default:
         return state;
   }
}