import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
//import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteSharp from "@material-ui/icons/DeleteSharp";
//import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import MoreVertIcon from "@material-ui/icons/MoreVert";

//import { FaTimes } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: "white",
    color: "secondary",
  },
  media: {
    paddingTop: "106.25%", // 16:9 that was "56.25%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    color: "black",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: "black",
  },
  avatar: {
    backgroundColor: "black",
		fontSize: "16px",
		width: "2.5vh",
		height: "2.5vh"
  },
}));

const CardTask = ({ task, onDelete, onToggle }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const imageUrl = `/images/${task.text}.jpg`;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imageUrl}
        height='0'
        width='20%'
        title={task.text}
      />
      <CardContent>
        <Typography variant='h5' color='white' component='p'>
          {task.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        
        <IconButton onClick={() => onDelete(task.id)}>
          <DeleteSharp />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography variant='body2' paragraph>Detailed Description</Typography>
					<Grid item xs={12}>
						<Button type="button" variant="primary" size="small" style={{margin:"5px", borderRadius: "50px"}}>Delete</Button>
						<Button type="button" variant="contained" color="primary" style={{margin:"5px"}}>Delete</Button>
					</Grid>
						
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardTask;
