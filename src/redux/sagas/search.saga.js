import { takeLatest, call, put } from "redux-saga/effects";
import {
   SEARCH_LIST,
   SEARCH_LIST_REQUEST,
   SEARCH_LIST_SUCCESS
} from "../constants/search.constants";
import { fetchResults } from "../../Helpers/search.helper";


export function* getSearchResults(action) {
   try {
      yield put({type: SEARCH_LIST_REQUEST});
      const results = yield call(fetchResults, action);
      yield put({type: SEARCH_LIST_SUCCESS, payload: results});
   } catch (error) {
      console.log(error)
   }
}

export function* watchSearchResults() {
   yield takeLatest(SEARCH_LIST, getSearchResults);
}