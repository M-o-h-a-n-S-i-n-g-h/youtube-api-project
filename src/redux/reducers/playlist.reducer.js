import {
   GET_PLAYLIST_FAIL,
   GET_PLAYLIST_REQUEST,
   GET_PLAYLIST_SUCCESS, PLAYLIST_EMPTY
} from "../constants/playlist.constant";

export const playListReducer = (state = {playlist: {noPlayList: false}}, action) => {
   switch (action.type) {
      case GET_PLAYLIST_REQUEST:
         return {loading: true}
      case GET_PLAYLIST_SUCCESS:
         return {loading: false, playlist: action.payload}
      case PLAYLIST_EMPTY:
         return {loading: false, noPlayList: true}
      case GET_PLAYLIST_FAIL:
         return {loading: false, error: action.payload}
      default:
         return state
   }
}