import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, CssBaseline, GlobalStyles } from '@mui/material';


import { Form } from './components/Form';

import theme from './themes/theme2';

function App() {

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppBar 
          sx={{ 
            alignItems: 'center', 
            justifyContent: 'center',
            backdropFilter: 'blur(20px)'
          }} 
          color='transparent'
          elevation={0}
        >
          <Toolbar>
            <Typography variant="h1" component="div">
              bored?
            </Typography>
          </Toolbar>
        </AppBar>
        <Form />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
