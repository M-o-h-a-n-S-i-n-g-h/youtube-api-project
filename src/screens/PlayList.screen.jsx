import React, { useEffect } from "react";
import { getPlayListAction } from "../redux/actions/playlist.action";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import AppContainer from "../components/Container/Container";
import VideoList from "../components/VideoList/VideoList.component";
import { checkExistence } from "../Helpers/checkExistence";

const PlayList = () => {
   const dispatch = useDispatch();
   const {loading, error, playlist} = useSelector((state) => state.playList);
   const {id} = useParams();
   
   useEffect(() => {
      dispatch(getPlayListAction(id));
   }, [])
   
   return (
     <AppContainer>
        {loading && <CircularProgress size={100}
                                      left={-20}
                                      top={50}
                                      style={{marginLeft: '50%'}}
                                      color="primary"
        />}
        {error && <h2>{error}</h2>}
        {playlist?.items && checkExistence(playlist.items) && <VideoList videos={playlist.items}/>}
     </AppContainer>
   )
}

export default PlayList;