import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, CssBaseline, GlobalStyles } from '@mui/material';

import { Form } from './components/Form';
import { StyledH2 } from './components/styled/StyledH2'

import theme from './themes/theme2';

function App() {

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppBar 
          sx={{ 
            alignItems: 'center', 
            justifyContent: 'center',
            backdropFilter: 'blur(20px)',
            marginTop: 0,
            borderTop: 0,
            borderColor: 'rgba(255, 255, 255, 0.05)',
          }} 
          color='transparent'
          elevation={0}
          component={StyledH2}
        >
          <Toolbar>
            <Typography variant="h1">
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
