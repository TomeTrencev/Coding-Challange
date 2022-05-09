
import React from 'react';
import { Links } from './Links';

export const InTheNews = ({ cards }) => {

    return (
        <div >
            <h1 className='main-title'>EnterPrice League  <span className='span-title'>in the News</span></h1>
            <Links />
            <div id='news'>
                {cards.map((card, i) => {
                    return (
                        <div className='cards' key={i}>

                            <div className='div-image'>
                                <img src={card.logo} alt="" width="150px"></img>
                            </div>
                            <h2>{card.title}</h2>
                            <p>{card.paragraph}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

<div></div>