import React from 'react';
import {ThemeProvider, createTheme} from '@material-ui/core';
import Home from './Home.js';

function App() {

  const theme = createTheme({
    palette: {
      primary:{
        main:'#D2D',
      } ,
      secondary:{
        main:'#0000FF',
      },
    },
  });
  
  return(
   <ThemeProvider theme={theme}>
     <Home/>
   </ThemeProvider>
  )
}

export default App;
