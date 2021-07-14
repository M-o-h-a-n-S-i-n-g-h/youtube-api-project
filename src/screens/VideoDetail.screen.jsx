import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoDetailsAction } from "../redux/actions/video.action"
import VideoInfo from "../components/VideoInfo/VideoInfo.component";
import { addComment } from "../redux/actions/comments.action";
import { CircularProgress } from "@material-ui/core";
import Layout from "../components/Layout/Layout";

const VideoDetail = ({match}) => {
   const [textOriginal, setTextOriginal] = useState("");
   const videoId = match.params.id;
   const videoSrc = `https://www.youtube.com/embed/${videoId}`;
   
   const dispatch = useDispatch();
   const {videoDetails, loading} = useSelector((state) => state.video);
   // const {addCommentResponse, replyCommentResponse, error} = useSelector(state => state.comment);
   const video = videoDetails ? videoDetails.video : null;
   const comments = videoDetails ? videoDetails.comments : null;
   const channelId = video ? video.items[0].snippet.channelId : null;
   // console.log(video)
   // console.log(comments)
   
   const handleAddComment = (channelId, videoId, textOriginal) => {
      dispatch(addComment(channelId, videoId, textOriginal));
      setTextOriginal("");
   }
   
   useEffect(() => {
      dispatch(getVideoDetailsAction(videoId));
   }, [dispatch, videoId])
   
   return (
     <Layout>
        <div>
           {loading &&
           <CircularProgress size={40}
                             left={-20}
                             top={10}
                             status={'loading'}
                             style={{marginLeft: '50%'}}
                             color="secondary"
           />}
           {video && comments && (
             <>
                <VideoInfo
                  videoId={videoId}
                  videoTitle={video.items[0].snippet.title}
                  likes={video.items[0].statistics.likeCount}
                  dislikes={video.items[0].statistics.dislikeCount}
                  viewCount={video.items[0].statistics.viewCount}
                  channelTitle={video.items[0].snippet.channelTitle}
                  channelId={video.items[0].snippet.channelId}
                  description={video.items[0].snippet.description}
                  videoSrc={videoSrc}
                  comments={comments.items}
                  thumbnail={video.items[0].snippet.thumbnails.default.url}
                />
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
             </>
           )}
        </div>
     </Layout>
   )
}

export default VideoDetail;