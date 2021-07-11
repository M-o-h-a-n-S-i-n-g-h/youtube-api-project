import { takeLatest, call, put } from "redux-saga/effects";
import { youtube } from "../../Helpers/Helpers";
import {
   SEARCH_LIST,
   SEARCH_LIST_REQUEST,
   SEARCH_LIST_SUCCESS
} from "../constants/search.constants";

const fetchResults = async (action) => {
   const {data} = await youtube.get("/search",
     {
        params: {
           part: "snippet",
           q: action.params
        }
     });
   return data;
}

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