import './App.css';
import React, { Component } from 'react';
import logo from './logo.svg';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider, withSnackbar } from 'notistack';
import { Provider } from 'mobx-react';
import MobxStore from './stores'
import Forage from './localforage'

import { inject, observer } from 'mobx-react'
import { observable, action } from 'mobx'

const store = new MobxStore()
const forage = new Forage()

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const snackbarOptions = {
  maxSnack: 3,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  }
}

export const App = () =>
  <Provider forage={forage} store={store}>
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider {...snackbarOptions}>
        <RoutedApp />
      </SnackbarProvider>
    </MuiThemeProvider>
  </Provider>

@inject('forage', 'store') @withSnackbar class RoutedApp extends Component {

  componentDidMount() {
    const { services } = this.props.store
    const { enqueueSnackbar, closeSnackbar } = this.props

    // : Pass the calling function for notifications to the store
    services.setNotifyFunctions({ enqueueSnackbar, closeSnackbar })

    // : Initialize the localforage session for videos
    this.props.forage.videos.init()
    console.log('good! stufing stufings and ff')
  }

  render() {
    const { forage } = this.props
    const { videos } = forage
    console.log('props')
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={videos.get}>Fetch</button>
          <button onClick={videos.clear}>Clear</button>
          <button onClick={videos.drop}>Drop</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
