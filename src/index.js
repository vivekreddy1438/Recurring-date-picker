import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecurrenceProvider } from './context/RecurrenceContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecurrenceProvider>
    <App />
  </RecurrenceProvider>
);
