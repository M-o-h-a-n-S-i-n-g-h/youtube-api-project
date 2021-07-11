import React from "react";
import Comments from "../Comments/Comments.component";

const VideoInfo = ({
   videoTitle,
   channelTitle,
   videoSrc,
   description,
   likes,
   dislikes,
   comments,
   channelId
}) => {
   return (
     <div>
        <h1>{videoTitle}</h1>
        <iframe
          src={videoSrc}
          title="YouTube video player"
          width="1320"
          height="594"
          allowFullScreen
        />
        <div>
           <span style={{margin: "20px"}}>Likes: <b>{likes}</b></span>
           <span>DisLikes: <b>{dislikes}</b></span>
        </div>
        <h3>{channelTitle}</h3>
        <p>{description}</p>
        {comments.map((comment) => (
          <Comments
            key={comment.id}
            id={comment.id}
            videoComments={comment.snippet}
            channelId={channelId}
            videoId={comment.snippet.videoId}
          />
        ))}
     </div>
   )
}

export default VideoInfo;