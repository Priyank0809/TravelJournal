import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <div className="navbar--nav">
            <div className="navbar--globe">
                <i className="ok"><FontAwesomeIcon icon={faGlobeAmericas} /></i>
                <span className="navbar--span"> &nbsp;my travel journal</span>
            </div>



        </div>
    )
}