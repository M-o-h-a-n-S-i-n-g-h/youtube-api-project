import React from "react";
import VideoList from "../VideoList/VideoList.component";

const PopularVideosList = ({popularVideos}) => {
   return (
     <VideoList videos={popularVideos} />
   )
}

export default PopularVideosList;