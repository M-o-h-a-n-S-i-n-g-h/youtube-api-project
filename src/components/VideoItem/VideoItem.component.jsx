import React from "react";
import { withRouter } from "react-router-dom"

const VideoItem = ({video, history}) => {
   return (
     <div onClick={() => history.push(`/video/${video.id.videoId}`)}>
        <img src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
        <div>{video.snippet.title}</div>
     </div>
   )
}

export default withRouter(VideoItem);