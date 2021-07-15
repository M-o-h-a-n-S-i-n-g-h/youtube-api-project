import {
   SEARCH_LIST_FAIL,
   SEARCH_LIST_REQUEST, SEARCH_LIST_RESET,
   SEARCH_LIST_SUCCESS
} from "../constants/search.constants";

export const searchReducer = (state = {results: []}, action) => {
   switch (action.type) {
      case SEARCH_LIST_REQUEST:
         return {
            ...state,
            loading: true
         }
      case SEARCH_LIST_SUCCESS:
         return {
            ...state,
            loading: false,
            results: action.payload
         }
      case SEARCH_LIST_FAIL:
         return {loading: false, error: action.error}
      default: {
         return state
      }
   }
}