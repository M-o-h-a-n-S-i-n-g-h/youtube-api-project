import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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
     <List className={classes.root}>
        <ListItem alignItems="flex-start">
           <ListItemAvatar>
              <Avatar alt={userName} src={profileUrl}/>
           </ListItemAvatar>
           <ListItemText
             secondary={
                <React.Fragment>
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
   );
}