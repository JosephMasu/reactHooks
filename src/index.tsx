import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import CounterReducer from './hooks/useReducer'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CounterReducer />
  </React.StrictMode>   
);


