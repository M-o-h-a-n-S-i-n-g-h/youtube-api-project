import { ADD_COMMENT, REPLY_COMMENT } from "../constants/comment.constants";

export const addComment = (channelId, videoId, textOriginal) => {
   return {
      type: ADD_COMMENT,
      videoId,
      channelId,
      textOriginal
   }
}

export const replyComment = (parentId, textOriginal) => {
   return {
      type: REPLY_COMMENT,
      parentId,
      textOriginal
   }
}