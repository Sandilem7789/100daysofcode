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
import UpdateSharp from "@material-ui/icons/UpdateSharp";
import { Divider } from "@material-ui/core";
//import MoreVertIcon from "@material-ui/icons/MoreVert";

//import { FaTimes } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "auto",
    background: "white",
    color: "#000",
    marginRight: "15px",
    marginLeft: "15px",
    marginTop: "15px",

  },
  media: {
    paddingTop: "106.25%", // 16:9 that was "56.25%"
    alignItem: "center"
  },
  expand: {
    transform: "rotate(0deg)",
    marginRight: "auto",
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

  const imageUrl = `/images/menu-Items/${task.text}.jpg`;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imageUrl}
        height='0'
        width='20%'
        title={task.text}
      />
        <CardContent
          style={{
            display: "flex",
            padding: "0px 10px",
            alignContent: "center",
          }}
        >
          <Grid container spacing={1}>
          <CardActions
            disableSpacing
            style={{
              padding: "2px",
            }}
          >
            <Grid item xs={12}>
              <Typography variant='h5' color='white' component='p'>
                <span className='card-labels' style={{ fontWeight: "bold" }}>
                  {task.text}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
                item
                xs={6}
                >
                <ExpandMoreIcon />
              </IconButton>
            </Grid>
          </CardActions>
        </Grid>
        </CardContent>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography variant='body1' color='white' component='p'>
            <span className='card-labels'>Description: {task.day}</span>
            <Typography variant='body1' color='white' component='p'>
              <span className='card-labels'>Category: </span>
              <span className='card-labels'>{task.category}</span>
            </Typography>
          </Typography>
          
          <Typography variant='body2' color='white' component='p'>
            <span className='card-labels'>
              Price :
              <span style={{ fontWeight: "bold" }}> R{task.price}</span>
            </span>
          </Typography>
          <br />
          <Divider />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                type='button'
                variant='contained'
                color='primary'
                style={{ margin: "0px", justifySelf: "center" }}
              >
                Update
                <UpdateSharp />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type='button'
                variant='contained'
                color='secondary'
                style={{ margin: "0px" }}
                onClick={() => onDelete(task.id)}
              >
                Delete
                <DeleteSharp />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardTask;
