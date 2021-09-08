import React from 'react';
import {ThemeProvider, createTheme} from '@material-ui/core';
import Home from './components/Home';

function App() {

  const theme = createTheme({
    palette: {
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
