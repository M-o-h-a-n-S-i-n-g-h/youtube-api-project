import React from "react";

const VideoInfo = ({videoTitle, channelTitle, videoSrc, description, likes, dislikes}) => {
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
     </div>
   )
}

export default VideoInfo;