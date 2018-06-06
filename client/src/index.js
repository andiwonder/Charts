import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.css';
import App from './App';

// Redux stuff
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

// const AppWrapper = () => {
//   return ()
// }

// need to add the window.__REDUX part so that I can use redux tools in chrome
ReactDOM.render(
  <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
