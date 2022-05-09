import React from "react";
import { Links } from "./Links";

export const Press = ({press}) => {

    return(
        <div>
               <h1 className="main-title">Enterprise League <span className="span-title">Press</span></h1>
            <Links />
               <div id="press">
               {press.map((card,i)=>{
                   return(
                       <div id="press-cards"  key={i}>
                           <img src={card.logo} width="350px" alt=""></img>
                           <h2>{card.title}</h2>
                          <p id="card-date">{card.date}</p>
                          <p>{card.paragraph}</p>
                          <button id="read-more-btn">{card.button}</button>
                       </div>
                   )
               })}
               </div>
        </div>
    )
}