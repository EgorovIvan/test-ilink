import React from "react"
import "./scss/style.scss"
import close from "../images/close.png";
import success from "../images/success.png";
import bubbles from "../images/bubbles.png";

const Message = ({active, setActive}) => {
    return (
        <div className={active ? "message active" : "message"}>

            <div className="message__title">
                Успешно!
                <div onClick={() => setActive(false)}>
                    <img src={close} alt="close"/>
                </div>

            </div>
            <div className="message__text">
                Спасибо за отзыв о нашей компании :)
            </div>
            <div className="message__success">
                <img src={success} alt="success"/>
            </div>

            <div className="message__bubbles">
                <img src={bubbles} alt="bubbles"/>
            </div>
        </div>
    )
}

export default Message