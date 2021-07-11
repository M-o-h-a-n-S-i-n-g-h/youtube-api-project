import { SEARCH_LIST } from "../constants/search.constants";

export const getSearchResultsAction = (query) => {
   return {
      type: SEARCH_LIST,
      params: query
   }
}