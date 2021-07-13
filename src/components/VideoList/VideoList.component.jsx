import React from "react";
import VideoItem from "../VideoItem/VideoItem.component";
import { Grid } from "@material-ui/core";
import Masonry from "react-masonry-css";

const VideoList = ({videos}) => {
   
   const breakPoints = {
      default: 3,
      1100: 2,
      700: 1
   }
   
   return (
     <Masonry
       breakpointCols={breakPoints}
       className="my-masonry-grid"
       columnClassName="my-masonry-grid_column">
        {videos.map((video, index) => (
          <Grid item>
             <VideoItem key={index} video={video}/>
          </Grid>
        ))}
     </Masonry>
   )
}

export default VideoList;