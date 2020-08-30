import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


/*
  Vamos definir a linguagem
*/
const language = 'PT-BR';

var $html = document.getElementById('html');
$html.setAttribute('lang', language); 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);