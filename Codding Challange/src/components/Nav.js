
import React from 'react';

export const Nav = () => {

    return (
        <div id='nav'>
            <a href='/'> <img src='https://enterpriseleague.com/public/img/logo-header.svg' alt='nav-img'></img></a>
            <div className='header-navigation'>
                <ul className='header-items'>
                    <li className='header-item'>Product ˅</li>
                    <li className='header-item'>Resources   ˅</li>
                    <li className='header-item'>Company  ˅</li>
                    <div className='right-items'>
                        <li className='header-item'>
                            <a id='log-in' href="/">Log in</a>
                        </li>
                        <li className='header-item'>
                            <button id='menu-btn'>Get Started</button>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}