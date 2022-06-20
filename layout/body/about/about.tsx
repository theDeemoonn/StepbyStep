import React, {Component} from 'react';
import {P} from "../../../components";
import styles from './About.module.css';

class About extends Component {
    render() {
        return (

            <div id='about' className={styles.aboutCard}>
                <span className={styles.aboutCardLeft}>
                <span className={styles.ellipseAbout1}></span>
                </span>
                <span className={styles.aboutSpan}>
                <P size='about'> Привет всем. Я Дмитрий, начинающий frontend разработчик. Почему программирование?
                    Все
                    элементарно - мне это
                    нравится, профессия будущего, благодаря которой я могу обеспечить себя и осуществить свою мечту -
                    путешествовать. Почему вы должны выбрать меня? Я подхожу к каждому заказу с большой ответственностью
                    и
                    любовью, так как хочу сделать себе имя, исключить халатность, полностью изучить проект,
                    клиента и его целевую аудиторию, работать на качество, стараясь сделать заказ максимально быстро и
                    уникально, учитывая все правки и желания. Доверившись мне, вы получите максимальную отдачу от своего
                    проекта, сэкономите свои нервы и время.
                    Если вы заинтересованы во мне, хотите узнать что-то еще или воспользоваться моими услугами, то я
                    предоставлю все свои контакты. </P></span>
                <span className={styles.aboutCardRight}>
                    <span className={styles.ellipseAbout2}></span>
                <span className={styles.ellipseAbout3}></span>
                </span>


            </div>
        );
    }
}


export default About;








