/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import Tab from './components/Tab';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <Tab>
              <Link to='/'>Home</Link>
            </Tab>
            <Tab>
              <Link to='/about'>About</Link>
            </Tab>
            <Tab>
              <Link to='/features'>Features</Link>
            </Tab>
          </div>
          <div className="viewport">
            <Switch>
              <Route path="/" exact={true}>
                <Home />
              </Route>
              <Route path="/about" exact={true}>
                <About />
              </Route>
              <Route path="/features" exact={true}>
                <Features />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
