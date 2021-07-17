import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoDetailsAction } from "../redux/actions/video.action"
import VideoInfo from "../components/VideoInfo/VideoInfo.component";
import { CircularProgress } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import NotFoundError from "../components/404/404";

const VideoDetail = ({match}) => {
   const [textOriginal, setTextOriginal] = useState("");
   const videoId = match.params.id;
   const videoSrc = `https://www.youtube.com/embed/${videoId}`;
   
   const dispatch = useDispatch();
   const {videoDetails, loading, error} = useSelector((state) => state.video);
   const video = videoDetails ? videoDetails.video : null;
   const comments = videoDetails ? videoDetails.comments : null;
   
   useEffect(() => {
      dispatch(getVideoDetailsAction(videoId));
   }, [videoId])
   
   if (error) {
      return <NotFoundError className="App">{error}</NotFoundError>
   }
   
   return (
     <Layout>
        <div data-testid="videoInfo">
           {loading &&
           <CircularProgress size={60}
                             left={-20}
                             top={10}
                             style={{marginLeft: '50%'}}
                             color="secondary"
           />}
           {video && comments && (
             <>
                <VideoInfo
                  video={video}
                  videoId={videoId}
                  videoSrc={videoSrc}
                  comments={comments.items}
                />
                <h3>Comments</h3>
                <input
                  type="text"
                  value={textOriginal}
                  onChange={(e) => setTextOriginal(e.target.value)}
                />
             </>
           )}
        </div>
     </Layout>
   )
}

export default VideoDetail;