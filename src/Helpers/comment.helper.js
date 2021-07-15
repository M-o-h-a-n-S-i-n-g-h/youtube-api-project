import { youtube } from "./Helpers";

export const postComment = async (action, token) => {
   const config = {
      headers: {
         "Accept": "application/json",
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`,
      },
   };
   const {data} = await youtube.post("/commentThreads?part=snippet%2Cid%2Creplies", {
        snippet: {
           channelId: action.channelId,
           videoId: action.videoId,
           topLevelComment: {
              snippet: {
                 textOriginal: action.textOriginal
              }
           }
        }
     },
     config
   );
   return data;
}

export const replyComment = async (action, token) => {
   const config = {
      headers: {
         "Accept": "application/json",
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`,
      },
   };
   const {data} = await youtube.post("/comments?part=snippet%2Cid", {
        snippet: {
           parentId: action.parentId,
           textOriginal: action.textOriginal
        }
     },
     config
   );
   return data;
}

export const editComment = async (action, token) => {
   const config = {
      headers: {
         "Accept": "application/json",
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`,
      },
   };
   const {data} = await youtube.put("/comments?part=snippet%2Cid", {
        snippet: {
           textOriginal: action.textOriginal
        }
     },
     config
   );
   return data;
}