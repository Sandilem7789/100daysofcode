import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
		width: "80%",
		margin: "5px"
  },
  media: {
    height: 444,
  },
});

export default function Product({ imageUrl, price }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Item Name
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Leli bhande leskhumba lakhiwe ngeskhumba sentulo(lizard) ebizwa
            ngokuthi i-
            <span style={{ fontWeight: "bolder" }}>comodo lizard</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' variant='contained'>
          Add to Wishlist +
        </Button>
        <Button size='small' color='primary' variant='contained'>
          R {price}
        </Button>
      </CardActions>
    </Card>
  );
}
