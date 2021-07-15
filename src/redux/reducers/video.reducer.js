import {
   GET_POPULARVIDEOS_FAIL,
   GET_POPULARVIDEOS_REQUEST, GET_POPULARVIDEOS_SUCCESS,
   GET_VIDEODETAIL_FAIL,
   GET_VIDEODETAIL_REQUEST,
   GET_VIDEODETAIL_SUCCESS, POPULARVIDEOS_RESET
} from "../constants/video.constants";

export function videoReducer(state = {video: {}, popularVideos: {}}, action) {
   switch (action.type) {
      case GET_VIDEODETAIL_REQUEST:
         return {loading: true}
      case GET_VIDEODETAIL_SUCCESS:
         return {loading: false, videoDetails: action.payload}
      case GET_VIDEODETAIL_FAIL:
         return {loading: false, error: action.error}
      case GET_POPULARVIDEOS_REQUEST:
         return {loading: true}
      case GET_POPULARVIDEOS_SUCCESS:
         return {loading: false, popularVideos: action.payload}
      case GET_POPULARVIDEOS_FAIL:
         return {loading: false, error: action.error}
      case POPULARVIDEOS_RESET:
         return {loading: false, popularVideos: {}}
      default:
         return state;
   }
}