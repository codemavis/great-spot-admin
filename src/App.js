import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from './components/commons/Sidebar';
import Navbar from './components/commons/Navbar';
import Footer from './components/commons/Footer';

import Home from './components/pages/Home';
import User from './components/pages/User';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/users"><User /></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
