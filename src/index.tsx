import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import UseContextDemo from './hooks/useContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UseContextDemo />
  </React.StrictMode>   
);


