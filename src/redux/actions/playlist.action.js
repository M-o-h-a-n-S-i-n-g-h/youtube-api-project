import {
   GET_PLAYLIST_FAIL,
   GET_PLAYLIST_REQUEST,
   GET_PLAYLIST_SUCCESS, PLAYLIST_EMPTY
} from "../constants/playlist.constant";
import { youtube } from "../../Helpers/Helpers";

export const getPlayListAction = (channelId) => async (dispatch, getState) => {
   try {
      dispatch({type: GET_PLAYLIST_REQUEST});
      
      const {token} = getState().auth
      const config = {
         headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
         }
      }
      
      const {data} = await youtube.get(
        `/playlists?part=snippet&channelId=${channelId}`,
        config,
      );
   
      if (data.items.length === 0) {
         dispatch({type: PLAYLIST_EMPTY});
      } else {
         dispatch({type: GET_PLAYLIST_SUCCESS, payload: data})
      }
   
   } catch (error) {
      dispatch({
         type: GET_PLAYLIST_FAIL,
         payload: error.message
      })
   }
   
}