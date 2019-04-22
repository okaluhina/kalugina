import React from 'react';
import { MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from '../routes';
import theme from '../theme';


const App = () => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </MuiThemeProvider>
    </div>
    )
}

export default App;
