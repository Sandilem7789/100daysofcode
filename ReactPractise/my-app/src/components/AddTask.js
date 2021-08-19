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
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
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

    onAdd({ text, day, category, quantity });

    setText("");
    setDay("");
    //setReminder(false);
    setCategory("");
    setQuantity("0");
  };

  const style = {
    display: "grid",
    placeItems: "center",
    marginTop: "10px",
  };

  return (
    <Grid container spacing={3} style={style}>
      <Typography variant='h6' gutterBottom style={{ paddingTop: "20px" }}>
        <span
          style={{
            fontSize: "3.8vh",
            fontWeight: "bold",
          }}
        >
          <span className='form-label'>Add Items To Your Stock</span>
        </span>
      </Typography>
      
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <InputLabel>
                <Typography variant='h6' gutterBottom>
                  <span className='form-label'>Item Name</span>
                </Typography>
              </InputLabel>
            </Grid>
            <Grid item xs={6} sm={6}>
              <input
                type='text'
                placeholder='Enter Item Name'
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Grid>
          </Grid>
        </div>
        <div className='form-control'>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <InputLabel>
                <Typography variant='h6'>
                  <span className='form-label'>Item Description</span>
                </Typography>
              </InputLabel>
            </Grid>
            <Grid item xs={6} sm={6}>
              <input
                type='text'
                placeholder='Enter Item Description'
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </Grid>
          </Grid>
        </div>
        <div className='form-control'>
          <Grid item xs={6} sm={6}>
            <InputLabel>
              <Typography variant='h6' style={{ color: "black" }}>
                <span className='form-label'>Category</span>
              </Typography>
            </InputLabel>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem key={1} value='Accessories'>
                Accessories
              </MenuItem>
              <MenuItem key={2} value='Bags'>
                Bags
              </MenuItem>
              <MenuItem key={3} value='Shoes'>
                Shoes
              </MenuItem>
              <MenuItem key={4} value='Other'>
                Other
              </MenuItem>
              <MenuItem key={5} value='Clothing'>
                Clothing
              </MenuItem>
            </Select>
          </Grid>
        </div>
        <div
          className='form-control 
		      form-control-check'
          style={{ paddingTop: "8px" }}
        >
          <Grid item xs={12} sm={6}>
            <InputLabel>
              <Typography variant='h6' gutterBottom>
                <span className='form-label'>Price</span>
              </Typography>
            </InputLabel>
          </Grid>
          <Grid item sx={12} sm={12}>
            {/*<input
                type='number'
                placeholder='Number of Items'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
			      />*/}
            <TextField
              id='outlined-number'
              type='number'
              placeholder='Enter Price Here'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              style={{
                padding: "0px",
                margin: "0px",
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant='outlined'
            />
          </Grid>
        </div>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'>
            Item Price{" "}
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-amount'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            startAdornment={<InputAdornment position='start'>R</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <div style={style}>
          <Button
            type='submit'
            value='Save Item'
            variant='outlined'
            color='primary'
          >
            Save Item
          </Button>
        </div>
      </form>
      {/*<AddProduct />*/}
    </Grid>
  );
};
export default AddTask;
