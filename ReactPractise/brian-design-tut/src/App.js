import React from "react";
import logo from './logo.svg';
import './App.css';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/CheckBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckBoxExample = () => {
  const [checked, setChecked] = React.useState(true)
  return(
    <FormControlLabel
      control={
        <Checkbox
        checked={checked}
        icon={<DeleteIcon color="secondary" />}
        checkedIcon={<SaveIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          "aria-label": "secondary checkbox"
        }}
      />}
      label="Testing CheckBox"
    />
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckBoxExample />
        <ButtonGroup
          size="large"
          variant="contained" 
          color="primary"
        >
          <Button
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
          >
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
