import React from "react";
import Header from '../partials/Header'
import Menu from '../partials/Menu'
import Footer from '../partials/Footer'


function NewsPage() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="wrapper_page">
                <Menu/>
                <div className="news_page">
                    <h1>Content News Page</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default NewsPage