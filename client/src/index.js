import React from 'react';
import ReactDOM from 'react-dom';
// import CssBaseline from '@material-ui/core/CssBaseline';
import './index.css';
import App from './App';

// Redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import logger from 'redux-logger';

import registerServiceWorker from './registerServiceWorker';

// const AppWrapper = () => {
//   return ()
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk, logger)));

// need to add the window.__REDUX part so that I can use redux tools in chrome
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
