import axios from "axios";
const KEY = "AIzaSyBBj6tv0IPU15e3Ip_EnD7kTElWZwkasxk";

export const youtube = axios.create({
   baseURL: "https://www.googleapis.com/youtube/v3",
   params: {
      key: KEY,
      maxResults: 50,
   }
})