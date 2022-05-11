import React, { Component } from 'react';
import NavBar from '../../components/navbar/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BasicList from './disc-list/disc-list.component';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import { Stack } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default class HomePage extends Component {
   
  constructor(props){
    super(props)
    this.state = { homePage: "Home Page"}
  }

  render() {
    return (
      <ThemeProvider theme="darkTheme">
        <Stack sx={{
            display: 'block',
            color: '#3d3d3d',
          }} spacing={10}>
          <NavBar />
          <BasicList />
        </Stack>
        </ThemeProvider>
    )
  }
}
