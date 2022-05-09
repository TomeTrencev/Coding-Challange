import React from "react";
import { Link } from 'react-router-dom'

export const Links = () => {

    return (
        <ul id="links">

            <li className="main-link"><Link to="/">In the News</Link></li>
            <li className="main-link"><Link to='/press'>Press</Link></li>

        </ul>
    )
}