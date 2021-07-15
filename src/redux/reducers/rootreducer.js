import { combineReducers } from "redux";
import { searchReducer } from "./search.reducer";
import { videoReducer } from "./video.reducer";
import { authReducer } from "./auth.reducer";
import { commentsReducer } from "./comments.reducer";
import { playListReducer } from "./playlist.reducer";


export const rootReducer = combineReducers({
   search: searchReducer,
   video: videoReducer,
   auth: authReducer,
   comment: commentsReducer,
   playList: playListReducer
})