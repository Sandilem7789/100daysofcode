import { useState } from "react";
import AddProduct from "./AddProductForm/AddProduct";
import FormInput from "./AddProductForm/FormInput";
import {
  Grid,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  TextField,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Paper,
  CssBaseline,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formLabel: {
		fontFamily: "Poppins, sans-serif",
		fontWeight: "bold",
    padding: "20px 0px 30px"
	},
	formFooter: {
		fontFamily: "Poppins, sans-serif",
	},
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
		
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    fontFamily: 'Poppins',
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    fontFamily: "Poppins"
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

const AddTask = ({ onAdd }) => {
  //hooks
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  //const [reminder, setReminder] = useState(false)

  //my added hooks
  const [quantity, setQuantity] = useState("0");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  //my added variables
  const classes = useStyles();

  //triggered when we submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add Item Name");
      return;
    }

    onAdd({ text, day, quantity, category, price });
    setText("");
    setDay("");
    //setReminder(false);
    setCategory("");
    setQuantity("");
    setPrice("");
  };

  const style = {
    display: "grid",
    placeItems: "center",
    marginTop: "10px",
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.Paper}>
          <Typography
            component='h1'
            variant='h4'
            align='center'
            className={classes.formLabel}
          >
            Add Items To Your Stock
          </Typography>
          <form
            onSubmit={onSubmit}
            style={{ paddingLeft: "50px", paddingRight: "50px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='itemName'
                  name='itemName'
                  label='Item Name'
                  fullWidth
                  className={classes.formInput}
                  variant='outlined'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='itemDescription'
                  name='itemDescription'
                  label='Item Description'
                  fullWidth
                  className={classes.formInput}
                  variant='outlined'
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant='outlined'
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel id='demo'>Category</InputLabel>
                  <Select
                    required
                    labelId='item-category'
                    id='item-category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    fullWidth
                    label='Category'
                    
                  >
                    <MenuItem key={1} value='Main'>Main</MenuItem>
                    <MenuItem key={2} value='Sidedish'>Sidedish</MenuItem>
                    <MenuItem key={3} value='Coldrink'>Coldrink</MenuItem>
                    <MenuItem key={4} value='Coffe/Tea'>Coffe/Tea</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='price'
                  name='price'
                  label='Price'
                  fullWidth
                  variant='outlined'
                  value={price}
                  type="number"
                  helperText="Insert the price: numbers only"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Grid>
            </Grid>
            <div className={classes.buttons} style={{paddingBottom: "30px"}}>
              <Button
                type='submit'
                value='Save Item'
                variant='contained'
                color='primary'
                className={classes.button}
              >
                Save Item
              </Button>
            </div>
          </form>
        </Paper>
      </main>
      </>
  );
};
export default AddTask;
