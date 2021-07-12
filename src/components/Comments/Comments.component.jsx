import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { replyComment } from "../../redux/actions/comments.action";


const Comments = ({id, videoComments, channelId, videoId, parentId}) => {
   const [readyToEdit, setReadyToEdit] = useState(false);
   const [readyToReply, setReadyToReply] = useState(false);
   // const [replyTextOriginal, setReplyTextOriginal] = useState("");
   const dispatch = useDispatch();
   const replyRef = useRef("");
   
   const handleReplyComment = () => {
      const textOriginal = replyRef.current.value;
      dispatch(replyComment(parentId, textOriginal));
   }
   
   const handleReplyButton = () => {
      setReadyToReply(true);
   }
   
   const ReplyInput = () => {
      return (
        <>
           <input
             ref={replyRef}
             type="text"
             // onChange={(e) => {
             //    e.preventDefault();
             //    setReplyTextOriginal(e.target.value)
             // }}
           />
           <button onClick={handleReplyComment}>Reply</button>
        </>
      )
   }
   
   const ParentReply = () => (<ReplyInput/>)
   
   return (
     <div>
        <h5>
           {videoComments.topLevelComment.snippet.authorDisplayName}: <span
          style={{color: "blue"}}>{videoComments.topLevelComment.snippet.textOriginal}
        </span>
           <span><button>Edit</button></span>{" "}
           {/*{readyToEdit && (*/}
           {/*  <input*/}
           {/*    type="text"*/}
           {/*    onChange={(e) => setTextOriginal(e.target.value)}*/}
           {/*  />*/}
           {/*)}*/}
           <span><button onClick={handleReplyButton}>Reply</button></span>
           {readyToReply ? (<ParentReply/>) : null}
        </h5>
     </div>
   )
}
export default Comments;