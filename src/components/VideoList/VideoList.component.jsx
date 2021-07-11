import React from "react";
import VideoItem from "../VideoItem/VideoItem.component";

const VideoList = ({videos}) => {
   return (
     <div>
        {videos.map((video, index) => (<VideoItem key={index} video={video}/>))}
     </div>
   )
}

export default VideoList;