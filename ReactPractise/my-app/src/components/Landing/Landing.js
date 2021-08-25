import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Item from "../CustomerModule/Item"

const useStyles = makeStyles({
  root: {
    minWidth: "auto",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 34,
    fontFamily: "Pooins, sans-serif",
    color: "black",
    fontWeight: "bolder "
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Landing({ tasks, }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container spacing={2}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={4}>
					<Item task={task} />
        </Grid>
      ))}
    </Grid>
  );
}
