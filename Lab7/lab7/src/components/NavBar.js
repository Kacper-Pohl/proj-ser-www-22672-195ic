import * as React from 'react';
import {Link} from "react-router-dom";

function NavBar(){

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info mb-4">
            <Link className="navbar-brand ms-3" to="/">HOME</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/pierwsza">Pierwsza</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/druga">Druga</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/trzecia">Trzecia</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;
