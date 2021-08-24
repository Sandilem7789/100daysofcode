import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

export default function Landing() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
      <Card className={classes.root} variant='outlined'>
        <CardContent className="cardDescription">
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
          >
            
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    </Grid>
  );
}
