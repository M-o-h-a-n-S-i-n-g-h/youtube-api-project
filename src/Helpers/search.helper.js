import { youtube } from "./Helpers";

export const fetchResults = async (action) => {
   const {data} = await youtube.get("/search",
     {
        params: {
           part: "snippet",
           q: action.params
        }
     });
   return data;
}