import { takeLatest, call, put, select } from "redux-saga/effects";
import {
   ADD_COMMENT,
   ADD_COMMENT_FAIL,
   ADD_COMMENT_REQUEST,
   ADD_COMMENT_SUCCESS,
   EDIT_COMMENT, EDIT_COMMENT_FAIL,
   EDIT_COMMENT_REQUEST, EDIT_COMMENT_SUCCESS,
   REPLY_COMMENT, REPLY_COMMENT_FAIL,
   REPLY_COMMENT_REQUEST,
   REPLY_COMMENT_SUCCESS
} from "../constants/comment.constants";
import { editComment, postComment, replyComment } from "../../Helpers/comment.helper";

export const authState = (state) => state.auth;

export function* addCommentActions(action) {
   try {
      yield put({type: ADD_COMMENT_REQUEST});
      const userInfo = yield select(authState);
      const token = userInfo.token;
      const response = yield call(postComment, ...[action, token]);
      yield put({type: ADD_COMMENT_SUCCESS, payload: response})
   } catch (error) {
      yield put({
         type: ADD_COMMENT_FAIL, error: error.response && error.response.data.message
                                        ? error.response.data.message
                                        : error.message,
      })
   }
}

export function* replyCommentActions(action) {
   try {
      yield put({type: REPLY_COMMENT_REQUEST});
      const userInfo = yield select(authState);
      const token = userInfo.token;
      const response = yield call(replyComment, ...[action, token]);
      yield put({type: REPLY_COMMENT_SUCCESS, payload: response});
   } catch (error) {
      yield put({
         type: REPLY_COMMENT_FAIL, error: error.response && error.response.data.message
                                          ? error.response.data.message
                                          : error.message,
      })
   }
}

export function* editCommentActions(action) {
   try {
      yield put({type: EDIT_COMMENT_REQUEST});
      const userInfo = yield select(authState);
      const token = userInfo.token;
      const response = yield call(editComment, ...[action, token]);
      yield put({type: EDIT_COMMENT_SUCCESS, payload: response});
   } catch (error) {
      yield put({
         type: EDIT_COMMENT_FAIL, error: error.response && error.response.data.message
                                         ? error.response.data.message
                                         : error.message,
      })
   }
}


export function* watchCommentActions() {
   yield takeLatest(ADD_COMMENT, addCommentActions)
   yield takeLatest(REPLY_COMMENT, replyCommentActions)
   yield takeLatest(EDIT_COMMENT, editCommentActions)
}