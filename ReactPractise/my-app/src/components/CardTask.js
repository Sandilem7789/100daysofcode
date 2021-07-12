import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { FaTimes } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: "darkgrey",
    color: "white",
    marginBottom: "2vh"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    background: "grey",
    color: "white",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    color: "white",
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: "black"
  },
  avatar: {
    backgroundColor: "black"
  },
}));

const CardTask = ({task, onDelete, onToggle}) => {
  const style = {
		color: "black",
		cursor: "pointer",
    size: "sm"
	}
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {task.id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/*<MoreVertIcon />*/}
            <FaTimes style={style} onClick={() => onDelete(task.id)}/>
          </IconButton>
        }
        title={task.text}
        subheader={task.day}
      />
      <CardMedia
        className={classes.media}
        image="/images/bed.jpg"
        title="Paella dish"
        
      />
      <CardContent>
        <Typography variant="body2" color="white" component="p">
            {task.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>

          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


export default CardTask;