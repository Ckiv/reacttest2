import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NewsPage from "./pages/NewsPage";
import Header from "./partials/Header";
import Menu from "./partials/Menu";
import Footer from "./partials/Footer";



function App() {

  return (
      <div className="wrapper">
        <Header/>
        <div className="wrapper_page">
          <Menu/>
          <div className="app_page">
            <h1>Content App Page</h1>
          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
