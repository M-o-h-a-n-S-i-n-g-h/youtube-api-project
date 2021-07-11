import { ADD_COMMENT } from "../constants/comment.constants";

export const addComment = (channelId, videoId, textOriginal) => {
   return {
      type: ADD_COMMENT,
      videoId,
      channelId,
      textOriginal
   }
}