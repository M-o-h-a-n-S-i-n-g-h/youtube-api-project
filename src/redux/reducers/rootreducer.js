import { combineReducers } from "redux";
import { searchReducer } from "./search.reducer";
import { videoReducer } from "./video.reducer";
import { authReducer } from "./auth.reducer";


export const rootReducer = combineReducers({
   search: searchReducer,
   video: videoReducer,
   auth: authReducer
})