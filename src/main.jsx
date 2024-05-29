import React from 'react'
import ReactDOM from 'react-dom/client'
// custom css
import './index.css'
// bootstrap css
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import App from './App.jsx'
// swiper css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
