import './App.css';
import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider, withSnackbar } from 'notistack';
import { inject, observer } from 'mobx-react'
import { Provider } from 'mobx-react';
import MobxStore from './stores'
import Forage from './localforage'

import { hot } from 'react-hot-loader'

const store = new MobxStore()
const forage = new Forage()

const rest = (ms) => {
  return new Promise(r => setTimeout(r, ms));
}

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const snackbarOptions = {
  maxSnack: 3,
  disableWindowBlurListener: true,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
}

const App = () =>
  <Provider
    forage={forage}
    store={store}
  >
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider {...snackbarOptions}>
        <RoutedApp />
      </SnackbarProvider>
    </MuiThemeProvider>
  </Provider >

@withSnackbar @inject('forage', 'store') @observer class RoutedApp extends Component {

  componentDidMount() {
    const { services } = this.props.store
    const { enqueueSnackbar, closeSnackbar } = this.props

    // : Pass the calling function for notifications to the store
    services.setNotifyFunctions({ enqueueSnackbar, closeSnackbar })

    // : Initialize the localforage session for videos
    this.props.forage.videos.init()
  }

  render() {
    const { services } = this.props.store
    const { forage } = this.props
    const { videos } = forage
    const { loader } = services

    return (
      <div className="App">
        <header className="App-header">
          <h1>React App</h1>
          {/* <LoadingScreen visible={loader} /> */}
          <p>
            Edit <code>src/App.jsx</code> and save to reload.
          </p>
          <button onClick={this.toggle}>Toggle</button>
          <button onClick={videos.get}>Fetch</button>
          <button onClick={videos.clear}>Clear</button>
          <button onClick={videos.drop}>Drop</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Stuff
          </a>
        </header>
      </div>
    );
  }
}

const LoadingScreen = observer(({ visible }) => (
  <>
    {visible &&
      <div style={{
        height: '100vh', width: '100vw', background: '#eae1c5', position: 'absolute',
        display: 'flex', flexFlow: 'row no-wrap', justifyContent: 'center', alignItems: 'center'
      }}>
        <h1 style={{ color: '#ec5c5c' }}>...</h1>
      </div>
    }
  </>
))

export default hot(module)(App)
// export default App