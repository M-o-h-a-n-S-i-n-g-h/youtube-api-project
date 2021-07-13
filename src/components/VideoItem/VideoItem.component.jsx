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

const VideoItem = ({video, history}) => {
   const classes = useStyles();
   
   return (
     <Box borderColor="secondary.main" {...defaultProps} >
        <Card className={classes.root}
              style={{margin: "20px"}}
              variant="elevation"
              onClick={() => history.push(`/video/${video.id.videoId}`)}
        >
           <CardActionArea>
              <CardMedia
                className={classes.media}
                image={video.snippet.thumbnails.medium.url}
                title="Contemplative Reptile"
                style={{height: "15em"}}
              />
              <CardContent>
                 <Typography gutterBottom variant="h6" component="h3">
                    {video.snippet.title}
                 </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                    {video.snippet.description}
                 </Typography>
              </CardContent>
           </CardActionArea>
        </Card>
     </Box>
   
   );
}

export default withRouter(VideoItem);