import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import Header from './components/Header/Header';
import App from './pages/Homepage/App';
import reportWebVitals from './reportWebVitals';
import Sidebar from './components/Sidebar/Sidebar';

const contenair = document.getElementById('root');
const root = createRoot(contenair);

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
