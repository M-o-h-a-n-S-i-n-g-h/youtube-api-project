import React, { useState } from "react";
import Comments from "../Comments/Comments.component";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Avatar, Button, Divider, TextField } from "@material-ui/core";
import TextAccordian from "../Accordian/Accordian";
import { addComment } from "../../redux/actions/comments.action";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";
import ShowError from "../ShowError/ShowError";
import { getVideoDetailsAction } from "../../redux/actions/video.action";

const VideoInfo = ({video, history, videoSrc, videoId, comments,}) => {
   const styles = {
      div: {
         textAlign: "center"
      },
      h1: {
         fontSize: "3em",
         marginTop: "10px"
      },
      likes: {
         margin: "20px",
         fontSize: "3em",
      },
      text: {
         fontSize: "1.5em",
         top: "-25%",
         position: "relative"
      },
      span: {
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         margin: "-15px 0 10px 0"
      },
      spanIcon: {
         margin: "0 30px 0 30px"
      },
      icon: {
         fontSize: "3em",
      }
   }
   
   
   const [textOriginal, setTextOriginal] = useState("");
   const [error, setError] = useState("");
   const dispatch = useDispatch();
   const {isLoggedIn} = useSelector(state => state.auth);
   const {title, channelTitle, description, channelId} = video.items[0].snippet;
   const {url} = video.items[0].snippet.thumbnails.medium;
   const {likeCount, dislikeCount, viewCount} = video.items[0].statistics;
   
   
   const handleAddComment = async (channelId, videoId, textOriginal) => {
      if (textOriginal.length === 0) {
         setError("You are adding empty comment");
         setTimeout(() => {
            setError("")
         }, 4000)
      } else {
         await dispatch(addComment(channelId, videoId, textOriginal));
         await dispatch(getVideoDetailsAction(videoId));
         setTimeout(() => {
         }, 4000)
         setTextOriginal("");
      }
   }
   
   
   return (
     <div>
        {error && <ShowError error={error}/>}
        <div style={styles.div}>
           <h1 style={styles.h1}>{title}</h1>
           <span style={styles.span}>
              <span style={styles.spanIcon}>
                  <VisibilityIcon style={styles.icon}/>
                 <h4 style={styles.text}>{viewCount}</h4>
              </span>
           <span style={styles.spanIcon}>
              <ThumbUpIcon style={styles.icon}/>
              <h4 style={styles.text}>{likeCount}</h4>
           </span>
           <span style={styles.spanIcon}>
              <ThumbDownIcon style={styles.icon}/>
              <h4 style={styles.text}>{dislikeCount}</h4>
           </span>
        </span>
        </div>
        <iframe
          src={videoSrc}
          title="YouTube video player"
          width="100%"
          height="594"
          allowFullScreen
        />
        <Divider variant="inset"/>
        <div style={{padding: "2em"}}>
           <Avatar src={url} style={{display: "inline-block", float: "left"}}/>
           <span>
            <span style={{
               fontSize: "2em",
               fontWeight: "bold",
               marginLeft: "15px",
            }}>{channelTitle}</span>
        </span>
           <span>
              <Button
                variant="contained"
                color="primary"
                style={{marginLeft: "20px"}}
                onClick={() => {
                   history.push(`/playlist/${channelId}`)
                }}>
                 Show PlayLists
              </Button>
           </span>
        </div>
        <Divider variant="inset"/>
        <TextAccordian description={description}/>
        <h1>Comments</h1>
        <TextField
          type="text"
          value={textOriginal}
          onChange={(e) => setTextOriginal(e.target.value)}
          margin={"normal"}
        />
        <span>
           {
              isLoggedIn ? (<Button
                           variant="contained"
                           color="primary"
                           onClick={() => handleAddComment(channelId, videoId, textOriginal)}>
                            Add Comments
                         </Button>)
                         :
              (<Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(login())}>
                 SignIn to Add Comment
              </Button>)
           }
        </span>
        {comments.map((comment) => (
          <Comments
            key={comment.id}
            id={comment.id}
            videoComments={comment.snippet}
            parentId={comments[0].id}
          />
        ))}
     </div>
   )
}

export default withRouter(VideoInfo);