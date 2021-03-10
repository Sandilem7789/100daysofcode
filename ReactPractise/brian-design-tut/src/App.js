import React from "react";
import logo from './logo.svg';
import './App.css';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/CheckBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

import { makeStyles, ThemeProvider, createMuiTheme  } from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";
import "fontsource-roboto";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(180deg, #fe6b8b, #ff8e53)",
    border: 0,
    borderRadius: 8,
    color: "black",
    padding: "20px 30px",
    marginBottom: "30px",
    fontWeight: "bolder"
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 10
    }
  }
})

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Styled Button Test</Button>
}

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
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            
            <AppBar color="secondary">
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Theming
                </Typography>
                <Button>
                  Login
                </Button>
              </ToolBar>
            </AppBar>

            <Typography variant="h2" component="div">
              M  U  I
            </Typography>
            <Typography variant="h5">
              #100days0fcode
            </Typography>
            <ButtonStyled />
            
            <Grid container spacing={2} justify="center">
              <Grid item xs={3} md={3} lg={5}>
                <Paper style={{ height: 90, width: "100%"}}/>
              </Grid>
              <Grid item xs={3} md={3} lg={5}>
                <Paper style={{ height: 90, width: "100%"}}/>
              </Grid>
              <Grid item xs={3} md={3} lg={10}>
                <Paper style={{ height: 90, width: "100%" }}/>
              </Grid>
            </Grid>
            
            <CheckBoxExample />
            <ButtonGroup
              size="large" variant="contained"
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
