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
   const {isLoggedIn} = useSelector(state => state.auth);
   const {loading, error, playlist} = useSelector((state) => state.playList);
   const {id} = useParams();
   
   useEffect(() => {
      if (isLoggedIn) {
         dispatch(getPlayListAction(id));
      }
   }, [id])
   
   return (
     <AppContainer>
        {!isLoggedIn && <h2 className="App">Please SignIn to view PlayLists</h2>}
        {loading && <CircularProgress size={100}
                                      left={-20}
                                      top={50}
                                      style={{marginLeft: '50%'}}
                                      color="primary"
        />}
        {isLoggedIn && error && <h2 className="App">{error}</h2>}
        {playlist?.items && checkExistence(playlist.items) && <VideoList videos={playlist.items}/>}
     </AppContainer>
   )
}

export default PlayList;