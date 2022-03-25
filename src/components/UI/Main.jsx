import React, {useEffect, useRef, useState} from "react"
import "./scss/style.scss"
import vector from "../images/vector.png"
import profile from "../images/profile.jpg"
import man from "../images/man.png"
import left from "../images/left.png"
import right from "../images/right.png"
import user1 from "../images/user1.png"
import user2 from "../images/camera.png"
import user3 from "../images/user3.png"
import user4 from "../images/user4.png"
import activeBtn from "../images/active.png"
import passiveBtn from "../images/passive.png"
import plus from "../images/plus.png"
import Modal from "./Modal";
import Message from "./Message";


const Main = () => {
    const [start, setStart] = useState([<img src={activeBtn} alt="active"/>])
    const [center, setCenter] = useState([<img src={passiveBtn} alt="active"/>])
    const [end, setEnd] = useState([<img src={passiveBtn} alt="active"/>])
    const [change, setChange] =useState('')
    const [modalActive, setModalActive] = useState(false)
    const [messageActive, setMessageActive] = useState(false)
    const [styleBtnPrev, setStyleBtnPrev] = useState({
        background: "#E0E0E0"
    })
    const [styleBtnNext, setStyleBtnNext] = useState({
        background: "#EEEEEE"
    })


    const reviews = useRef(null)
    const userReview = useRef(null)

    //количество слайдов
    let numbRev = 4
    let sum = 543 * (numbRev - 2)

    //функция возврата к концу слайдов
    const handlePrev = () => {
        if (reviews.current.scrollLeft > 0) {
            reviews.current.scrollLeft -= 543
        } else {
            reviews.current.scrollLeft = sum
        }
        setChange()
    }

    //функция возврата к началу слайдов
    const handleNext = () => {
        if (reviews.current.scrollLeft < sum) {
            reviews.current.scrollLeft += 543
        } else {
            reviews.current.scrollLeft = 0
        }
        setChange()
    }

    //не смог настроить обновления только после изменения значения scrollLeft,
    // происходит постоянное обновление, что недопустимо (но работает)

    // useEffect( () => {
    //     setChange(reviews.current.scrollLeft)
    // })

    useEffect(() => {
        if (reviews.current.scrollLeft <= 0) {
            setStart ( [<img src={activeBtn} alt="active"/>])
            setCenter ([<img src={passiveBtn} alt="passive"/>])
            setEnd ([<img src={passiveBtn} alt="passive"/>])
            setStyleBtnPrev ({
                background: "#E0E0E0"
            })
            setStyleBtnNext ({
                background: "#EEEEEE"
            })
        } else if (reviews.current.scrollLeft > 0 && reviews.current.scrollLeft < sum) {
            setStart ( [<img src={passiveBtn} alt="passive"/>])
            setCenter ([<img src={activeBtn} alt="active"/>])
            setEnd ([<img src={passiveBtn} alt="passive"/>])
            setStyleBtnPrev ({
                background: "#EEEEEE"
            })
            setStyleBtnNext ({
                background: "#EEEEEE"
            })
        } else {
            setStart ( [<img src={passiveBtn} alt="passive"/>])
            setCenter ([<img src={passiveBtn} alt="passive"/>])
            setEnd ([<img src={activeBtn} alt="active"/>])
            setStyleBtnPrev ({
                background: "#EEEEEE"
            })
            setStyleBtnNext ({
                background: "#E0E0E0"
            })
        }

        setChange( '')

    }, [change])

    //переход в начало
    const handleStart = () => {
        reviews.current.scrollLeft = 0
        setChange()
    }

    //переход в центр
    const handleCenter = () => {
        reviews.current.scrollLeft = 543
        setChange()
    }

    //переход в конец
    const handleEnd = () => {
        reviews.current.scrollLeft = sum
        setChange()
    }

    return (
        <div className="wrapper">
            <div className="main">

                <div className="main__bg-img">
                    <img src={vector} alt="vector"/>
                </div>


                <div className="container">
                    <div className="main__title">
                        Добро пожаловать в академию!
                    </div>
                    <div className="profile">
                        <div className="profile__photo">
                            <img src={profile} alt="profile"/>
                        </div>
                        <div className="profile__info">
                            <div className="profile__h">
                                <div className="profile__name">
                                    Иван Егоров
                                </div>
                                <div className="profile__date">
                                    08.04.1991
                                </div>
                            </div>
                            <div className="profile__private">
                                <div className="profile__private-text">
                                    <b>Город: &nbsp;</b>
                                    Ижевск
                                </div>
                                <div className="profile__private-text">
                                    <b>Пол: &nbsp;</b>
                                    мужчина &nbsp;
                                    <img src={man} alt="man"/>
                                </div>
                                <div className="profile__private-text">
                                    <b>Возраст: &nbsp;</b>
                                    30
                                </div>
                            </div>
                            <div className="profile__text">
                                <b>О себе: &nbsp;</b>Всем привет! Меня зовут Иван,
                                мне 30 лет, по специальности я инженер по атоматизации.
                                Учусь на веб-разработчика в онлайн-школе Geekbrains,
                                в том числе стараюсь подтянуть знания самостоятельно,
                                читая книги, смотря видеоуроки и разрабатывая сайты.
                            </div>
                        </div>
                    </div>
                    <div className="reviews">
                        <div className="reviews__content">
                            <div className="reviews__title">
                                <div className="reviews__title-text">
                                    Отзывы
                                </div>
                                <button
                                    className="reviews__title-btn"
                                    onClick={() => setModalActive(true)}>
                                    <img src={plus} alt="plus"/>
                                    <div className="reviews__title-btn-text">
                                        &nbsp; Добавить отзыв
                                    </div>
                                </button>
                            </div>
                            <div className="reviews-container" ref={reviews}>
                                <div className="user-review" ref={userReview}>
                                    <div className="user-review__info">
                                        <div className="user-review__info-name">
                                            <div className="user-review__info-photo">
                                                <img src={user1} alt="user1"/>
                                            </div>
                                            <div>
                                                &nbsp; Буба Бубенцов
                                            </div>
                                        </div>
                                        <div className="user-review__info-date">
                                            10.01.2022
                                        </div>
                                    </div>
                                    <div className="user-review__text">
                                        Отличный коллектив, руководители понимают сам процесс работы каждого
                                        сотрудника и помогают всем без исключения. Система KPI позволяет
                                        реально хорошо зарабатывать по простому принципу - чем больше и
                                        лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная
                                        страховка ДМС, организовали курсы английского языка бесплатно,
                                        оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.
                                    </div>
                                </div>
                                <div className="user-review">
                                    <div className="user-review__info">
                                        <div className="user-review__info-name">
                                            <div className="user-review__info-photo">
                                                <img src={user2} alt="user2"/>
                                            </div>
                                            <div>
                                                &nbsp; Илья Анташкевич
                                            </div>
                                        </div>
                                        <div className="user-review__info-date">
                                            19.11.2021
                                        </div>
                                    </div>
                                    <div className="user-review__text">
                                        Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал
                                        в компанию. Долго переживал что будет тяжело влиться, но тут прям классные
                                        ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом.
                                        Для эффективной работы здесь нужно хорошо знать иностранные языки.
                                    </div>
                                </div>
                                <div className="user-review">
                                    <div className="user-review__info">
                                        <div className="user-review__info-name">
                                            <div className="user-review__info-photo">
                                                <img src={user3} alt="user1"/>
                                            </div>
                                            <div>
                                                &nbsp; Юрина Маргарита
                                            </div>
                                        </div>
                                        <div className="user-review__info-date">
                                            26.06.2021
                                        </div>
                                    </div>
                                    <div className="user-review__text">
                                        Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы
                                        отметить отличную работу сотрудников: все было выполнено качественно,
                                        со знанием дела, в установленные сроки. За время работы с компанией
                                        значительно увеличилась аудитория, сайт приносит стабильный доход,
                                        контент уникальный, грамотный и качественный. Будет продолжать работу
                                        и дальше. Мы довольны, что доверили создание сайта компании ilink.
                                    </div>
                                </div>
                                <div className="user-review">
                                    <div className="user-review__info">
                                        <div className="user-review__info-name">
                                            <div className="user-review__info-photo">
                                                <img src={user4} alt="user2"/>
                                            </div>
                                            <div>
                                                &nbsp; Дмитрий Иванов
                                            </div>
                                        </div>
                                        <div className="user-review__info-date">
                                            13.04.2021
                                        </div>
                                    </div>
                                    <div className="user-review__text">
                                        Отвечала за найм и адаптацию сотрудников в компании, за поддержание
                                        на нужном уровне HR-бренда и трудового настроя коллектива.
                                        В компанию пришла без опыта работы HR-ом. Всему научилась здесь.
                                        Как теории, так и практике. Набрала опыт достаточно быстро.
                                        Есть программа обучения, поощряются различные курсы, и это большой плюс.
                                        В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__pos" >
                                <div className="reviews__pos-start" onClick={handleStart}>
                                    {start}
                                </div>
                                <div className="reviews__pos-center" onClick={handleCenter}>
                                    {center}
                                </div>
                                <div className="reviews__pos-end" onClick={handleEnd}>
                                    {end}
                                </div>
                            </div>
                        </div>
                        <button className="reviews__btn" onClick={handlePrev} style={styleBtnPrev}>
                            <img src={left} alt="left"/>
                        </button>
                        <button className="reviews__btn" onClick={handleNext} style={styleBtnNext}>
                            <img src={right} alt="right"/>
                        </button>
                    </div>
                </div>

                <Modal
                    active={modalActive}
                    setActive={setModalActive}
                    setMessageActive={setMessageActive}
                />

                <Message active={messageActive} setActive={setMessageActive}/>

            </div>
        </div>
    )
}

export default Main