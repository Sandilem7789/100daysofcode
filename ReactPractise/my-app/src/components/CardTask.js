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
      <Grid container spacing={2}>
        <CardContent 
          style={{ 
            display: "flex",
            padding: "0px 10px",
            alignContent: "center" 
          }}>
          <CardActions 
            disableSpacing 
            style={{ 
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "4px" 
            }}>
            <Typography variant='h5' color='white' component='p'>
              {task.text}
            </Typography>
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
          </CardActions>
        </CardContent>
      </Grid>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        
        <CardContent>
          <Typography variant='body1' color='white' component='p'>
            Detailed Description and other things
          </Typography>
          <br />
          <Typography variant='body2' color='white' component='p'>
            Quantity: 20
          </Typography>
          <br />
          <Divider />
          <br />
          <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              type='button'
              variant='contained'
              color="primary"
              style={{ margin: "0px"}}
            >
              Update
              <UpdateSharp/>
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
