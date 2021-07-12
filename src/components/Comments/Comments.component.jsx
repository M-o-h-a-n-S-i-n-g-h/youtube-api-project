import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editComment, replyComment } from "../../redux/actions/comments.action";

const Comments = ({id, videoComments, channelId, videoId, parentId}) => {
   const [readyToEdit, setReadyToEdit] = useState(false);
   const [readyToReply, setReadyToReply] = useState(false);
   const dispatch = useDispatch();
   const {user} = useSelector(state => state.auth);
   const replyRef = useRef("");
   const editRef = useRef("");
   
   const handleReplyComment = () => {
      let replyTextOriginal = replyRef.current.value;
      dispatch(replyComment(parentId, replyTextOriginal));
   }
   
   const handleEditComment = () => {
      const editTextOriginal = editRef.current.value;
      dispatch(editComment(editTextOriginal));
   }
   
   const handleReplyButton = () => {
      setReadyToReply(true);
   }
   
   const handleEditButton = () => {
      setReadyToEdit(true);
   }
   
   const ReplyInput = ({reference, handler, title}) => {
      return (
        <>
           <input
             ref={reference}
             type="text"
           />
           <button onClick={handler}>{title}</button>
        </>
      )
   }
   
   const ParentReply = ({reference, handler, title}) => (
     <ReplyInput reference={reference} handler={handler} title={title}/>
   )
   
   return (
     <div>
        <h5>
           {videoComments.topLevelComment.snippet?.authorDisplayName}:<span
          style={{color: "blue"}}>{videoComments.topLevelComment.snippet?.textDisplay}
           </span>
           
           {user === videoComments.topLevelComment.snippet?.authorDisplayName &&
           <span>
              <button onClick={handleEditButton}>Edit</button>
           </span>}
           {readyToEdit && (
             <ParentReply
               reference={editRef}
               handler={handleEditComment}
               title="Edit"
             />
           )}
           <span><button onClick={handleReplyButton}>Reply</button></span>
           {readyToReply ? (
                           <ParentReply
                             reference={replyRef}
                             handler={handleReplyComment}
                             title="Reply"
                           />)
                         : null}
        </h5>
     </div>
   )
}
export default Comments;