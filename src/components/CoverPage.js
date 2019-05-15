import React, { Component } from 'react';

import { Link, animateScroll as scroll } from "react-scroll";

class CoverPage extends Component {
    render() {
        return (
            <div className="cover-text">
                {/* <h2>Insiten Tracker</h2> */}
                <h2>An online tool to track and analyze potential target companies.</h2>
                <button className="cover-button"><a href="#section1">Get Started</a></button>
                <div className="cover-page">

                </div>
            </div >
        )
    }
}

export default CoverPage;