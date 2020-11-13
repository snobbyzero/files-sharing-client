import {Link} from "react-router-dom";
import React from "react";

export default function Root() {
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
        </div>
    )
}
