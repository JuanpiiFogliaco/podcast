import React from 'react';
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListDividers({audioClips}) {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      {audioClips.map((clip) => (
        <Link href={`/podcast?id=${clip.id}`}>
           <ListItem button key={clip}>
                 <ListItemText primary={clip.title}/>
                 <div>{Math.ceil(clip.duration / 60)+`minutes`}</div>
          </ListItem>
        </Link>
      ))}
      <Divider />
    </List>
  );
}
