import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editComment, replyComment } from "../../redux/actions/comments.action";
import { Button, TextField } from "@material-ui/core";
import CommentList from "../List/List";

const Comments = ({videoComments, parentId}) => {
   const [readyToEdit, setReadyToEdit] = useState(false);
   const [readyToReply, setReadyToReply] = useState(false);
   const dispatch = useDispatch();
   const {user, isLoggedIn} = useSelector(state => state.auth);
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
      setReadyToReply(!readyToReply);
   }
   
   const handleEditButton = () => {
      setReadyToEdit(!readyToEdit);
   }
   
   const Input = ({reference, handler, title}) => {
      return (
        <>
           <TextField inputRef={reference} id="standard-basic" label={title}/>
           <div>
              <Button style={{marginLeft: "16rem"}} onClick={handler}>{title}</Button>
           </div>
        </>
      )
   }
   
   const Reply = ({
        reference, handler, title
     }
   ) => (
     <Input reference={reference} handler={handler} title={title}/>
   )
   
   return (
     <div>
        <h5>
           <>
              <CommentList comment={videoComments.topLevelComment.snippet?.textDisplay}
                           profileUrl={videoComments.topLevelComment.snippet?.authorProfileImageUrl}
                           userName={videoComments.topLevelComment.snippet?.authorDisplayName}
              />
              {user === videoComments.topLevelComment.snippet?.authorDisplayName && isLoggedIn ?
               <span>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleEditButton}
              >
                 Edit
              </Button>
           </span> : <span>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleEditButton}
                disabled={true}
              >
                 Edit
              </Button>
           </span>}
              
              {readyToEdit && (
                <Reply
                  reference={editRef}
                  handler={handleEditComment}
                  title="Edit"
                />
              )}
              {isLoggedIn ? <span>
              <Button variant="outlined" color="primary"
                      onClick={handleReplyButton}
                      style={{marginRight: "20px"}}
              >
                 Reply
              </Button>
           </span> : <span>
              <Button variant="outlined" color="primary"
                      onClick={handleReplyButton}
                      style={{marginRight: "20px"}}
                      disabled={true}
              >
                 Reply
              </Button>
           </span>}
              {readyToReply ? (
                              <Reply
                                reference={replyRef}
                                handler={handleReplyComment}
                                title="Reply"
                              />)
                            : null}
           </>
        </h5>
     </div>
   )
}
export default Comments;