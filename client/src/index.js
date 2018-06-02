import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const AppWrapper = () => {
//   return ()
// }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
