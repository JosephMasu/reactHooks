import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import UseCallbackDemo from './hooks/useCallback'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UseCallbackDemo />
  </React.StrictMode>   
);


