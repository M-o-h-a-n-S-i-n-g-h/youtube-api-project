import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoDetailsAction } from "../redux/actions/video.action"
import VideoInfo from "../components/VideoInfo/VideoInfo.component";
import { addComment } from "../redux/actions/comments.action";

const VideoDetail = ({match}) => {
   const [readToComment, setReadyToComment] = useState(false);
   const [textOriginal, setTextOriginal] = useState("");
   const videoId = match.params.id;
   const videoSrc = `https://www.youtube.com/embed/${videoId}`;
   
   const dispatch = useDispatch();
   const {videoDetails, loading} = useSelector((state) => state.video);
   const {addCommentResponse, error} = useSelector(state => state.comment);
   console.log("commentResponse", addCommentResponse);
   const video = videoDetails ? videoDetails.video : null;
   const comments = videoDetails ? videoDetails.comments : null;
   const channelId = video ? video.items[0].snippet.channelId : null;
   // console.log(video)
   // console.log(comments)
   
   useEffect(() => {
      dispatch(getVideoDetailsAction(videoId));
   }, [dispatch, videoId])
   
   const handleAddComment = (channelId, videoId) => {
      setReadyToComment(true);
      // dispatch(addComment(channelId, videoId))
   }
   
   return (
     <div style={{textAlign: "center"}}>
        {loading && <h3>Loading...</h3>}
        <h3>Comments</h3>
        <span>
            <button
              onClick={() => handleAddComment(channelId, videoId, textOriginal)}>
              Add Comment
           </button>
        </span>
        {readToComment && (
          <input
            type="text"
            value={textOriginal}
            onChange={(e) => setTextOriginal(e.target.value)}
          />)
        }
        {video && comments && (
          <VideoInfo
            videoTitle={video.items[0].snippet.title}
            likes={video.items[0].statistics.likeCount}
            dislikes={video.items[0].statistics.dislikeCount}
            channelTitle={video.items[0].snippet.channelTitle}
            channelId={video.items[0].snippet.channelId}
            description={video.items[0].snippet.description}
            videoSrc={videoSrc}
            comments={comments.items}
          />
        )}
     
     </div>
   )
}

export default VideoDetail;