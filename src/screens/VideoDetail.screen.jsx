import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoDetailsAction } from "../redux/actions/video.action"
import VideoInfo from "../components/VideoInfo/VideoInfo.component";
import Comments from "../components/Comments/Comments.component";

const VideoDetail = ({match}) => {
   const videoId = match.params.id;
   const videoSrc = `https://www.youtube.com/embed/${videoId}`
   const dispatch = useDispatch();
   const {videoDetails, loading} = useSelector((state) => state.video);
   const video = videoDetails ? videoDetails.video : null;
   const comments = videoDetails ? videoDetails.comments : null;
   // console.log(comments, "Comments")
   
   useEffect(() => {
      dispatch(getVideoDetailsAction(videoId));
   }, [dispatch, videoId])
   
   return (
     <div style={{textAlign: "center"}}>
        {loading && <h3>Loading...</h3>}
        {video && (
          <VideoInfo
            videoTitle={video.items[0].snippet.title}
            likes={video.items[0].statistics.likeCount}
            dislikes={video.items[0].statistics.dislikeCount}
            channelTitle={video.items[0].snippet.channelTitle}
            description={video.items[0].snippet.description}
            videoSrc={videoSrc}
          />
        )}
        <h3>Comments</h3>
        {comments && (
          comments.items.map((comment) => (
            <Comments
              key={comment.id}
              id={comment.id}
              videoComments={comment.snippet}
            />
          ))
        )}
     </div>
   )
}

export default VideoDetail;