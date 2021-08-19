import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

//added by me
import { makeStyles } from "@material-ui/core/styles"
import { 
  MenuItem, 
  FormControl,
  InputLabel,
  Select,
  Button,
  InputAdornment } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formInput: {
		fontFamily: "Poppins, sans-serif",
	}
}));

export default function AddressForm({onAdd}) {
  //hooks for maintaining the state of the form data
  const [category, setCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  //styling agent
  const classes = useStyles();

  //triggered when we submit
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({category, itemName, itemDescription, itemPrice})

    setCategory("");
    setItemName("");
    setItemDescription("");
    setItemPrice("0");
  }

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='itemName'
            name='itemName'
            label='Item Name'
            fullWidth
            autoComplete='item-name'
            className={classes.formInput}
            variant='outlined'
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='image'
            name='image'
            label='Select Image'
            fullWidth
            variant='outlined'
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='itemDescription'
            name='itemDescription'
            label='Item Description'
            fullWidth
            autoComplete='description'
            variant='outlined'
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='price'
            name='price'
            label='Price'
            fullWidth
            autoComplete='price'
            variant='outlined'
            value={itemPrice}
            startAdornment={<InputAdornment position='start'>R</InputAdornment>}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" className={classes.formControl} fullWidth>
            <InputLabel id="demo">Category</InputLabel>
            <Select
              required
              labelId="item-category"
              id="item-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
              label="Category"
            >
              <MenuItem value="Main">Main</MenuItem>
              <MenuItem value="Sidedish">Sidedish</MenuItem>
              <MenuItem value="Coldrink">Coldrink</MenuItem>
              <MenuItem value="Coffe/Tea">Coffe/Tea</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color='secondary' name='saveAddress' value='yes' />
            }
            label='Use this address for payment details'
            className={classes.formInput}
          />
          <Button
            type='submit'
            value='Save Item'
            variant='outlined'
            color='primary'
          >
            Save Item
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
