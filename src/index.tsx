import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import ForwardRef  from './hooks/useImperativeHandle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ForwardRef />
  </React.StrictMode>   
);


