import { all } from "redux-saga/effects"
import { watchSearchResults } from "./search.saga";
import { watchCommentActions } from "./comment.saga";

export function* rootSaga() {
   yield all([
      watchSearchResults(),
      watchCommentActions()
   ])
}