import React from 'react';
import ReactDOM from 'react-dom/client';
import UseEffectDemo from './hooks/useEffect';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UseEffectDemo />
  </React.StrictMode>   
);


