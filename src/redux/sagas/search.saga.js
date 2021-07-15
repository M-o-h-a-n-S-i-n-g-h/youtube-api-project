import { takeLatest, call, put } from "redux-saga/effects";
import {
   SEARCH_LIST, SEARCH_LIST_FAIL,
   SEARCH_LIST_REQUEST, SEARCH_LIST_RESET,
   SEARCH_LIST_SUCCESS, SEARCH_RESET
} from "../constants/search.constants";
import { fetchResults } from "../../Helpers/search.helper";


export function* getSearchResults(action) {
   try {
      yield put({type: SEARCH_LIST_REQUEST});
      const results = yield call(fetchResults, action);
      yield put({type: SEARCH_LIST_SUCCESS, payload: results});
   } catch (error) {
      yield put({
         type: SEARCH_LIST_FAIL, error: error.response && error.response.data.message
                                        ? error.response.data.message
                                        : error.message,
      })
   }
}


export function* watchSearchResults() {
   yield takeLatest(SEARCH_LIST, getSearchResults);
}