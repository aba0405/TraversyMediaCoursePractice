import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField' 

import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'

import {orange, green} from '@material-ui/core/colors'
import 'fontsource-roboto'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'

const useStyles = makeStyles ({
  root:{
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53 )',
    border:0,
    marginBottom:15,
    borderRadius:15,
    color:'white',
    padding:'5px 30px'
  }
})

const theme = createMuiTheme({
  typography:{
    h4:{
      fontSize:18,
      marginBottom:15
    }
  },
  palette:{
    primary:{
      main:green[400]
    },
    secondary:{
      main:orange[400]
    }
  }
})

function ButtonStyled(){
  const classes = useStyles()
  return <Button className={classes.root}>Test Styled Button</Button>
}

/* eslint-disable */
function CheckboxExample(){
  const [checked, setChecked] = React.useState(true)
  return(
    <FormControlLabel
    control={ <Checkbox
        checked={checked}
        icon={<DeleteIcon/>}
        checkedIcon={<SaveIcon/>}
        onChange={(e)=>setChecked(e.target.checked)}
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
    />}
    label="Testing Checkbox"
    />
  )
} 
/* eslint-disable */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='sm'>
    <div className="App">
      <header className="App-header">
        <AppBar color="secondary">
          <Toolbar>
            <IconButton>
              <MenuIcon/>
              </IconButton>
              <Typography variant="h6">
                MUI Theming
              </Typography>
              <Button>
                Login
              </Button> 
          </Toolbar>
        </AppBar>
        <Typography variant='h4' component="div">
          Welcome to MUI
        </Typography>
        <Typography variant='body1'>
          Learning How To Use Material Ui
        </Typography>
        <ButtonStyled/>

        <Grid container spacing={4} justify="center">
          <Grid item xs={3} sm={6}>
            <Paper style={{height:75, width:100,}}/>
          </Grid>
            <Grid item xs={3} sm={6}>
            <Paper style={{height:75, width:100,}}/>
          </Grid>
            <Grid item xs={3} lg={12}>
            <Paper style={{height:75, width:100,}}/>
          </Grid>
        </Grid>
        <TextField
          variant='filled'
          color='secondary'
          type='date'
          label="The Date"
          value="test@test.com"
          placeholder="test@test.com"
        />
        <CheckboxExample/>
        <ButtonGroup variant="contained" color='primary'> 
        <Button 
        startIcon={<SaveIcon/>}
        endIcon={<SaveIcon/>}
        onClick={()=>alert('hello')} href = "#" 
        size = "small"
        >
          Save
        </Button>
         <Button 
        startIcon={<DeleteIcon/>}
        endIcon={<DeleteIcon/>}
        onClick={()=>alert('hello')} href = "#" 
        size = "small"
        variant="contained" 
        color='secondary'>
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
