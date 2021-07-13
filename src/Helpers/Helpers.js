import axios from "axios";
import * as credentials from "../credentials";

export const youtube = axios.create({
   baseURL: "https://www.googleapis.com/youtube/v3",
   params: {
      key: credentials.API_KEY,
      maxResults: 50,
   }
})