import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
   root: {
      maxWidth: 345,
   },
   media: {
      height: 140,
   },
});


const defaultProps = {
   borderRadius: "10px",
   marginTop: "20px"
};


export const checkRouteToRedirect = (path) => {
   return path.startsWith("/p");
}


const VideoItem = ({video, history, match}) => {
   const classes = useStyles();
   const {title} = video.snippet;
   const {medium: {url}} = video.snippet.thumbnails;
   
   return (
     <Box borderColor="secondary.main" {...defaultProps} >
        <Card className={classes.root}
              data-testid="card"
              style={{margin: "20px"}}
              variant="elevation"
              onClick={() => history.push(!checkRouteToRedirect(match.path)
                                          ? `/video/${video.id.videoId ?? video.id}`
                                          : match.url)
              }
        >
           <CardActionArea>
              <CardMedia
                className={classes.media}
                image={url}
                title={title}
                style={{height: "15em"}}
              />
              <CardContent>
                 <Typography gutterBottom variant="h6" component="h3">
                    {title}
                 </Typography>
              </CardContent>
           </CardActionArea>
        </Card>
     </Box>
   );
}

export default withRouter(VideoItem);