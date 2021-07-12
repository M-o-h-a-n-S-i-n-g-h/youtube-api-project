import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoDetailsAction } from "../redux/actions/video.action"
import VideoInfo from "../components/VideoInfo/VideoInfo.component";
import { addComment } from "../redux/actions/comments.action";
import {
   GET_VIDEODETAIL_REQUEST,
   GET_VIDEODETAIL_SUCCESS
} from "../redux/constants/video.constants";

const VideoDetail = ({match}) => {
   const [textOriginal, setTextOriginal] = useState("");
   const videoId = match.params.id;
   const videoSrc = `https://www.youtube.com/embed/${videoId}`;
   
   const dispatch = useDispatch();
   const {videoDetails, loading} = useSelector((state) => state.video);
   const {addCommentResponse, replyCommentResponse, error} = useSelector(state => state.comment);
   console.log("commentResponse", addCommentResponse);
   console.log("replycommentResponse", replyCommentResponse);
   const video = videoDetails ? videoDetails.video : null;
   const comments = videoDetails ? videoDetails.comments : null;
   const channelId = video ? video.items[0].snippet.channelId : null;
   // console.log(video)
   console.log(comments)
   
   const handleAddComment = (channelId, videoId, textOriginal) => {
      dispatch(addComment(channelId, videoId, textOriginal));
      setTextOriginal("");
   }
   
   useEffect(() => {
      dispatch(getVideoDetailsAction(videoId));
   }, [dispatch, videoId])
   
   
   return (
     <div style={{textAlign: "center"}}>
        {loading && <h3>Loading...</h3>}
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