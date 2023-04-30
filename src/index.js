import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//create a root element and add it to the DOM(The main app component is inserted inside the root element)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

