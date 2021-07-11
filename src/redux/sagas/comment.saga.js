import { takeLatest, call, put } from "redux-saga/effects";
import {
   ADD_COMMENT, ADD_COMMENT_FAIL,
   ADD_COMMENT_REQUEST,
   ADD_COMMENT_SUCCESS
} from "../constants/comment.constants";
import { youtube } from "../../Helpers/Helpers";


const postComment = async (action) => {
   const {data} = await youtube.post("/commentThreads", {
        "snippet": {
           "channelId": action.channelId,
           "videoId": action.videoId,
           "topLevelComment": {
              "snippet": {
                 "textOriginal": action.textOriginal
              }
           }
        }
     },
     {
        params: {part: "snippet, id, replies"}
     });
   return data;
}

export function* addCommentActions(action) {
   try {
      yield put({type: ADD_COMMENT_REQUEST});
      const response = yield call(postComment, action);
      console.log(response);
      yield put({type: ADD_COMMENT_SUCCESS, payload: response})
   } catch (err) {
      console.error(err);
      yield put({type: ADD_COMMENT_FAIL, error: err.message})
   }
}


export function* watchCommentActions() {
   yield takeLatest(ADD_COMMENT, addCommentActions)
}