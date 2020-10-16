import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import MainPage from "../pages/MainPage";
import NewsPage from "../pages/NewsPage";

function Menu () {
    return(
        <div className="menu">
            <h1>Menu</h1>
            <nav>
                <ul>
                    <li><Link to="/main">Main</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/app">App</Link></li>
                </ul>
            </nav>
        </div>

    )
}

export default Menu