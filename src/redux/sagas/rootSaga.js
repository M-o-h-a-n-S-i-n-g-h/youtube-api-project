import { all } from "redux-saga/effects"
import { watchSearchResults } from "./search.saga";

export function* rootSaga() {
   yield all([
      watchSearchResults()
   ])
}