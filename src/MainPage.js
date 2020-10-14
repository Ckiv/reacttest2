import React from "react";
import Header from './partials/Header'
import Menu from './partials/Menu'
import Footer from './partials/Footer'


function MainPage() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="wrapper_main_page">
                <Menu/>
                <div className="main_page">
                    <h1>Content Main Page</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default MainPage