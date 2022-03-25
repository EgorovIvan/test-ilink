import React from "react"
import profile from "../images/profile.jpg"
import ilink from "../images/ilink.png"
import academy from "../images/academy.png"
import btn_icon from "../images/btn_icon.png"
import "./scss/style.scss"

const Header = () => {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__profile">
                            <div className="header__profile-photo">
                                <img src={profile} alt="profile"/>
                            </div>
                            <div className="header__profile-name">
                                Иван
                            </div>
                            <div className="header__profile-second_name">
                                Егоров
                            </div>
                        </div>
                        <div className="logo">
                            <img className="logo__head" src={ilink} alt="ilink"/>
                            <img className="logo__text" src={academy} alt="academy"/>
                        </div>

                        <div>
                            <button type="button" className="header__btn">
                                <div className="header__btn-text">
                                    Панель управления
                                </div>
                                <div className="header__btn-icon">
                                    <img src={btn_icon} alt="btn_icon"/>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header