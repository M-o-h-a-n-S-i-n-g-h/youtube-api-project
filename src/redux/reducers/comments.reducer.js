import {
   ADD_COMMENT_SUCCESS,
   ADD_COMMENT_REQUEST,
   ADD_COMMENT_FAIL
} from "../constants/comment.constants";

export const commentsReducer = (state = {addCommentResponse: {}}, action) => {
   switch (action.type) {
      case ADD_COMMENT_REQUEST:
         return {loading: true}
      case ADD_COMMENT_SUCCESS:
         return {loading: false, addCommentResponse: action.payload}
      case ADD_COMMENT_FAIL:
         return {loading: false, error: action.error}
      default:
         return state
   }
}