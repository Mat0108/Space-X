import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router';


import Capsules from './pages/Capsules';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">

        <Router>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/Capsules" element ={<Capsules />}></Route>
              <Route path="/Launches" element={<Capsules />}></Route>

          </Routes>
      </Router>
    </div>
  );
}

export default App;
