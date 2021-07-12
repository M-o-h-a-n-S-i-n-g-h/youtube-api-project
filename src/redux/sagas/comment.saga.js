import { takeLatest, call, put, select } from "redux-saga/effects";
import {
   ADD_COMMENT, ADD_COMMENT_FAIL,
   ADD_COMMENT_REQUEST,
   ADD_COMMENT_SUCCESS, REPLY_COMMENT, REPLY_COMMENT_REQUEST
} from "../constants/comment.constants";
import { youtube } from "../../Helpers/Helpers";

export const authState = (state) => state.auth;

const postComment = async (action, token) => {
   const config = {
      headers: {
         "Accept": "application/json",
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`,
      },
   };
   const {data} = await youtube.post("/commentThreads?part=snippet%2Cid%2Creplies", {
        snippet: {
           channelId: action.channelId,
           videoId: action.videoId,
           topLevelComment: {
              snippet: {
                 textOriginal: action.textOriginal
              }
           }
        }
     },
     config
   );
   return data;
}

export const replyComment = async (action, token) => {
   console.log(action, "Action")
   const config = {
      headers: {
         "Accept": "application/json",
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`,
      },
   };
   const {data} = await youtube.post("/comments?part=snippet%2Cid", {
        snippet: {
           parentId: action.parentId,
           textOriginal: action.textOriginal
        }
     },
     config
   );
   return data;
}


export function* addCommentActions(action) {
   try {
      yield put({type: ADD_COMMENT_REQUEST});
      const userInfo = yield select(authState);
      const token = userInfo.token;
      const response = yield call(postComment, ...[action, token]);
      yield put({type: ADD_COMMENT_SUCCESS, payload: response})
   } catch (err) {
      console.error(err);
      yield put({type: ADD_COMMENT_FAIL, error: err.message})
   }
}

export function* replyCommentActions(action) {
   try {
      yield put({type: REPLY_COMMENT_REQUEST});
      const userInfo = yield select(authState);
      const token = userInfo.token;
      yield call(replyComment, ...[action, token]);
      
   } catch (err) {
      console.log(err);
   }
}

export function* watchCommentActions() {
   yield takeLatest(ADD_COMMENT, addCommentActions)
   yield takeLatest(REPLY_COMMENT, replyCommentActions)
}