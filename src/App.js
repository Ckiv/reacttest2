import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './MainPage'


function App() {

  return (
        <Router>
          <div>
            <Route path="/" component={MainPage}/>
          </div>
        </Router>
  );
}

export default App;
