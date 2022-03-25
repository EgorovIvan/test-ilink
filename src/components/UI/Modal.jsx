import React, {useState} from "react"
import "./scss/style.scss"
import close from "../images/close.png";
import plus from "../images/plus.png";
import info from "../images/info.png";


const Modal = ({active, setActive, setMessageActive}) => {
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const count = text.length

    let date = new Date().toLocaleDateString()

    const sendForm = () => {
        const data = {
            photo: "../images/camera.png",
            name: name,
            date: date,
            text: text
        }
        console.log(data)
        setActive(false)
        setMessageActive(true)
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>

                <div className="modal__title">
                    Отзыв
                    <div onClick={() => setActive(false)}>
                        <img src={close} alt="close"/>
                    </div>
                </div>

                <div className="modal__text">
                    Как вас зовут?
                </div>

                <div className="modal__name">
                    <input
                        type="text"
                        className="modal__name-input"
                        placeholder="Имя Фамилия"
                    onChange={e => setName(e.target.value)}
                    />
                    <button className="modal__name-btn">
                        <img src={plus} alt="plus"/>
                        <div className="modal__name-btn-text">
                            &nbsp; Загрузить фото
                        </div>
                    </button>
                </div>
                <div className="modal__text">
                    Все ли вам понравилось?
                </div>

                <div className="modal__info">
                    <textarea
                        className="modal__info-text"
                        maxLength={200}
                        onChange={e => setText(e.target.value)}
                        placeholder="Напишите пару слов о вашем опыте..."
                    />
                    <div className="modal__info-count" >
                        {count}/200
                    </div>
                </div>

                <div className="modal__send">
                    <button className="modal__send-btn" onClick={sendForm}>
                        Отправить отзыв
                    </button>
                    <div className="modal__send-info">
                        <img src={info} alt="info"/>
                        <div className="modal__send-info-text">
                            Все отзывы проходят модерацию в течение 2 часов
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Modal