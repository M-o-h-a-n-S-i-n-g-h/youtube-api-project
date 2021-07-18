import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editComment, replyComment } from "../../redux/actions/comments.action";
import { Button, TextField } from "@material-ui/core";
import CommentList from "../List/List";
import { login } from "../../redux/actions/auth.action";
import ShowSuccess from "../ShowSuccess/ShowSuccess";
import ShowError from "../ShowError/ShowError";

const Comments = ({videoComments, parentId}) => {
   const [readyToEdit, setReadyToEdit] = useState(false);
   const [readyToReply, setReadyToReply] = useState(false);
   const [success, setSuccess] = useState("");
   const [error, setError] = useState("");
   const dispatch = useDispatch();
   const {user, isLoggedIn} = useSelector(state => state.auth);
   let replyRef = useRef("");
   const editRef = useRef("");
   
   const handleReplyComment = () => {
      let replyTextOriginal = replyRef.current.value;
      if (replyTextOriginal.length === 0) {
         setError("You are adding empty reply");
         setTimeout(() => {
            setError("")
         }, 4000)
      } else {
         dispatch(replyComment(parentId, replyTextOriginal));
         replyRef.current.value = "";
         setSuccess("SuccessFully Added your reply");
         setTimeout(() => {
            setSuccess("")
         }, 4000)
      }
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
   
   const Reply = ({reference, handler, title}) => (
     <Input reference={reference} handler={handler} title={title}/>
   )
   
   const userExist = () => {
      return user === videoComments.topLevelComment.snippet?.authorDisplayName;
   }
   
   
   const {
      snippet: {
         textDisplay,
         authorProfileImageUrl,
         authorDisplayName
      }
   } = videoComments.topLevelComment;
   
   return (
     <div>
        {success && <ShowSuccess message={success}/>}
        {error && <ShowError error={error}/>}
        <h5>
           <>
              <CommentList comment={textDisplay}
                           profileUrl={authorProfileImageUrl}
                           userName={authorDisplayName}
              />
              {userExist() && isLoggedIn ? (<span>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleEditButton}
              >
                 {readyToEdit ? "Cancel" : "Edit"}
              </Button>
           </span>) : null}
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
                 {readyToReply ? "Cancel" : "Reply"}
              </Button>
           </span> : <span>
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(login())}>
              SignIn in to Reply
           </Button>
           </span>}
              {readyToReply ? <Reply
                              reference={replyRef}
                              handler={handleReplyComment}
                              title="Reply"
                            />
              
                            : null
              }
           </>
        </h5>
     </div>
   )
}
export default Comments;