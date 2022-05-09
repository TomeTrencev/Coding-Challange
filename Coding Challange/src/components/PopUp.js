import React from "react";

export const Popup = (props) => {

    return (
        <div className="popup-box">
            <div className="box">
                <h2>Do you need micro business loans?</h2>
                <p>Quick loans for business, invoice financing and flexible loans</p>
                <div id="popup-images">
                    <img src="https://test.enterpriseleague.com/static/media/violet.9459dd7e.svg" alt=""></img>
                    <img src="https://test.enterpriseleague.com/static/media/green.f01efa95.svg" alt=""></img>
                </div>
                <div id="popup-buttons">
                    <button id="purple-button" className="btn-close" onClick={() => props.setAnswer(false)}>NOT REALLY</button>
                    <button id="green-button" className="btn-close" onClick={() => props.setAnswer(true)}>YES! EXTRA MONEY</button>
                </div>
            </div>
        </div>
    )
}