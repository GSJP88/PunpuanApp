import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';          // ← just import it once and you’re done!
import "./index.css";
import './Styles/swal.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);