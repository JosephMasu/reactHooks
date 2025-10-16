import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import UseRefDemo2 from './hooks/useRef'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UseRefDemo2 />
  </React.StrictMode>   
);


