import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#29B6F6',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: '#b71c1c',
    },
    success: {
      main: '#C8E6C9'
    },
    text: {
        primary: '#fafafa',
    }
  },
  typography: {
    fontFamily: "IBMPlexSans, sans-serif",
    h1: {
      fontWeight: 'bolder',
      fontSize: 72,
      whiteSpace: 'nowrap'
    },
    h2: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 'normal',
      fontSize: 24
    },
  },

});

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      `
    },

    MuiButton: {
      styleOverrides: {
        root: {

          transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',

          "&.Mui-active, &:active": {
            
            transform: 'scaleX(.95) scaleY(0.92)',
            boxShadow: `0px 0px 0px 4px ${
              theme.palette.primary.main
            }`,
          }
        }
      }
    },

    MuiSlider: {
      styleOverrides: {

        root: {

          height: 3,

          "&.Mui-disabled": {
            color: theme.palette.secondary.main
          }
        },

        thumb: ({ ownerState, theme }: any) => ({
          
          ...
          
          (ownerState.disabled === true && 
            {
              display: 'none'
            }
          ) || ({

            width: 5,
            height: 5
          }),
          
          transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',

          '&:before': {
            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
          },

          ':hover': {
            width: 10,
            height: 10,
            boxShadow: 'none',
          },

          '&:hover, &.Mui-focusVisible, &.Mui-active': {
            // boxShadow: `0px 0px 0px 4px ${
            //   theme.palette.mode === 'dark'
            //     ? 'rgb(255 255 255 / 16%)'
            //     : 'rgb(0 0 0 / 16%)'
            // }`,
            boxShadow: 'none',
          },
        })

      }
    }
  }
})
export default theme;