import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import Menu from "./partials/Menu";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/main" component={MainPage}/>
            <Route path="/news" component={NewsPage}/>
            <Route path="/app" component={App}/>
        </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
