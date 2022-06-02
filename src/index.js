import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

ReactDOM.render( <App /> , document.getElementById('root'));

//ReactDOM.render( <App /> , document.getElementById('root'));

reportWebVitals();
