import axios from "axios";

const mockedData = {
   results: {
      items: {
         snippet: {
            title: "",
            description: "",
            channelTitle: "",
            thumbnails: {
               medium: {
                  url: ""
               }
            }
         }
      }
   }
}
const fetchResultsMock = async () => {
   const axios = jest.mock("axios");
   await axios.get.mockImplementation(() => fetchResultsMock());
   return new Promise((resolve) => {
      resolve(mockedData);
   })
}