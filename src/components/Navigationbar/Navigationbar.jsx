import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, Button, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link, withRouter } from "react-router-dom";
import ShowSuccess from "../ShowSuccess/ShowSuccess";

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
}));

const NavBar = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const {isLoggedIn, imgUrl, loading} = useSelector((state) => state.auth);
   const [notify, setNotify] = useState(false);
   
   
   const showToast = () => {
      if (notify) {
         return <ShowSuccess message={"SignIn success"}/>
      } else {
         return null;
      }
   }
   
   const signInHandler = () => {
      dispatch(login()).then(() => {
         setNotify(true);
         setTimeout(() => {
            setNotify(false);
         }, 4000)
      })
   }
   
   const signOutHandler = () => {
      sessionStorage.removeItem("persist:root");
      window.location.reload();
   }
   
   
   return (
     <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor: "red"}}>
           <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit"
                          aria-label="menu">
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                 <Grid container direction="row" alignItems="center">
                    <Grid item>
                       <YouTubeIcon fontSize={"large"}
                                    style={{
                                       display: 'flex',
                                       alignItems: 'center',
                                       flexWrap: 'wrap'
                                    }}
                       />
                    </Grid>
                    <Grid item>
                       <Link to="/">
                        <span>
                           <b
                             style={{fontFamily: "Open Sans", cursor: "pointer"}}>
                              Youtube
                           </b>
                        </span>
                       </Link>
                    </Grid>
                 </Grid>
              </Typography>
              <Link to="/">
                 <Button color="inherit">Home</Button>
              </Link>
              <div>
                 {isLoggedIn &&
                 <Button
                   variant="contained"
                   color="primary"
                   onClick={signOutHandler}
                 >
                    SignOut
                 </Button>
                 }
                 {!isLoggedIn &&
                 <Button variant="contained"
                         color="primary"
                         onClick={signInHandler}
                 >
                    SignIn
                 </Button>
                 }
                 {loading ? null :
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                     <Avatar src={imgUrl}/>
                  </IconButton>
                 }
              </div>
           </Toolbar>
        </AppBar>
        {showToast()}
     </div>
   );
}

export default withRouter(NavBar);