import React from "react"
import "./scss/style.scss"
import vk from "../images/vk.png";
import icon from "../images/icon.png";
import twitter from "../images/twitter.png";

const Footer = () => {
    return (
        <div className="wrapper">
            <div className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__text">
                            © iLINK ACADEMY. ALL RIGHTS RESERVED. 2022
                        </div>
                        <div className="footer__icon-social">
                            <img src={vk} alt="vk"/>
                            <img src={icon} alt="icon"/>
                            <img src={twitter} alt="twitter"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer