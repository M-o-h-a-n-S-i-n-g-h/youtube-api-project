import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';
import { Box } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
   },
   inline: {
      display: 'inline',
   },
}));

export default function CommentList({comment, profileUrl, userName}) {
   const classes = useStyles();
   
   return (
     <Box width={1}>
        <List style={{maxWidth: "100%"}} className={classes.root}>
           <ListItem alignItems="flex-start">
              <ListItemAvatar>
                 <Avatar alt={userName} src={profileUrl}/>
              </ListItemAvatar>
              <ListItemText
                secondary={
                   <React.Fragment>
                      <div>
                         <Typography
                           component="span"
                           variant="body2"
                           className={classes.inline}
                           color="textPrimary"
                         >
                            <b>{userName}</b>
                         </Typography>
                      </div>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                         {comment}
                      </Typography>
                   </React.Fragment>
                }
              />
           </ListItem>
           <Divider variant="inset" component="li"/>
        </List>
     </Box>
   );
}