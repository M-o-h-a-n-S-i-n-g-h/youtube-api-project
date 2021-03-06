import {
   ADD_COMMENT_SUCCESS,
   ADD_COMMENT_REQUEST,
   ADD_COMMENT_FAIL,
   REPLY_COMMENT_REQUEST,
   REPLY_COMMENT_SUCCESS,
   EDIT_COMMENT_REQUEST,
   EDIT_COMMENT_SUCCESS, REPLY_COMMENT_FAIL, EDIT_COMMENT_FAIL
} from "../constants/comment.constants";

export const commentsReducer = (state = {addCommentResponse: {status: 100}}, action) => {
   switch (action.type) {
      case ADD_COMMENT_REQUEST:
         return {loading: true, status: 100}
      case ADD_COMMENT_SUCCESS:
         return {loading: false, addCommentResponse: action.payload}
      case ADD_COMMENT_FAIL:
         return {loading: false, error: action.error}
      case REPLY_COMMENT_REQUEST:
         return {loading: true}
      case REPLY_COMMENT_SUCCESS:
         return {loading: false, replyCommentResponse: action.payload}
      case REPLY_COMMENT_FAIL:
         return {loading: false, error: action.error}
      case EDIT_COMMENT_REQUEST:
         return {loading: true}
      case EDIT_COMMENT_SUCCESS:
         return {loading: false, editCommentResponse: action.payload}
      case EDIT_COMMENT_FAIL:
         return {loading: false, error: action.error}
      default:
         return state
   }
}