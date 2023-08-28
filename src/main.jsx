import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import your Redux store
import App from './App'; // Import your App component

const root = document.getElementById('root');
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

// Use createRoot to render your app
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(rootComponent);