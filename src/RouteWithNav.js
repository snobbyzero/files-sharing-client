import {Link} from "react-router-dom";
import React from "react";
import {
    Route
} from 'react-router-dom';

export default function RouteWithNav({component: Component, path}) {
    return (
            <div className='menu'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/files">Catalog</Link>
                        </li>
                    </ul>
                </nav>
                <Route render={props => <Component {...props}/>} path={path}/>
            </div>
    );
}
