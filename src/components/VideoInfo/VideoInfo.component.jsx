import React, { useState } from "react";
import Comments from "../Comments/Comments.component";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Avatar, Box, Divider } from "@material-ui/core";
import TextAccordian from "../Accordian/Accordian";
import { addComment } from "../../redux/actions/comments.action";
import { useDispatch } from "react-redux";


const VideoInfo = ({
   videoTitle,
   channelTitle,
   videoSrc,
   videoId,
   description,
   likes,
   dislikes,
   comments,
   channelId,
   viewCount,
   thumbnail
}) => {
   const styles = {
      div: {
         textAlign: "center"
      },
      h1: {
         fontSize: "3em",
      },
      likes: {
         margin: "20px",
         fontSize: "3em",
      },
      span: {
         fontSize: "6px",
      },
      icon: {
         fontSize: "2em",
      }
   }
   const [textOriginal, setTextOriginal] = useState("");
   const dispatch = useDispatch();
   
   
   const handleAddComment = (channelId, videoId, textOriginal) => {
      dispatch(addComment(channelId, videoId, textOriginal));
      setTextOriginal("");
   }
   
   
   return (
     <div>
        <div style={styles.div}>
           <h1 style={styles.h1}>{videoTitle}</h1>
           <span style={styles.span}>
              <span style={styles.likes}>
               <VisibilityIcon
                 style={styles.icon}
               />
                 <b>{viewCount}</b>
           </span>
           <span style={styles.likes}><ThumbUpIcon style={styles.icon}/> <b>{likes}</b></span>
           <span style={styles.likes}><ThumbDownIcon style={styles.icon}/> <b>{dislikes}</b></span>
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
           <Avatar src={thumbnail} style={{display: "inline-block", float: "left"}}/>
           <span>
            <span style={{
               fontSize: "2em",
               fontWeight: "bold",
               marginLeft: "15px",
            }}>{channelTitle}</span>
        </span>
        </div>
        <Divider variant="inset"/>
        <TextAccordian description={description}/>
        <h3>Comments</h3>
        <input
          type="text"
          value={textOriginal}
          onChange={(e) => setTextOriginal(e.target.value)}
        />
        <span>
            <button
              onClick={() => handleAddComment(channelId, videoId, textOriginal)}>
              Add Comment
           </button>
        </span>
        {comments.map((comment) => (
          <Comments
            key={comment.id}
            id={comment.id}
            videoComments={comment.snippet}
            channelId={channelId}
            videoId={comment.snippet.videoId}
            parentId={comments[0].id}
          />
        ))}
     </div>
   )
}

export default VideoInfo;