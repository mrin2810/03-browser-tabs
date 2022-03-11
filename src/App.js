/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/Header';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <Header />
          </div>
          <div className="viewport">
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
