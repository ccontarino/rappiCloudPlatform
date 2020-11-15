import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from './theme';
import MenuComponent from './Components/MenuComponent/MenuComponent';
import SideBar from './Components/SideBar/SideBar';
import { Box, Grid, Typography, Paper } from '@material-ui/core';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return (
    <>
    <ThemeProvider theme={theme(prefersDarkMode)}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        
        <CssBaseline />


        <div class="grid-container">
  <div class="sidebar"> <SideBar /> </div>
  <div class="content"> <Typography>hola mundo</Typography></div>
  <div class="header"><MenuComponent /></div>
</div>




        {/* <Grid container direction="column" style={{height:'100%'}}>
          <MenuComponent />
          
          <div>
            <Grid container directopm="row"  >
             
                <SideBar />
             
             
                <Typography>asdsa</Typography>
             
              </Grid>
          </div>
           
          
          </Grid> */}
          
     
  

      </ThemeProvider>
      </>
  );
}

export default App;
