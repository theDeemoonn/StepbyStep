import {GitCard, Htag, P} from "../components";
import Card from "../components/Card/Card";
import {LayoutContainer} from "../layout/Layout";
import React from "react";

import axios from "axios";
import {RootObject} from "../interfaces/menu.interface";
import {GetStaticProps} from "next";
import Body from "../layout/body/body";


function Home({git}: HomeProps): JSX.Element {

    return (
        <>
            <Body/>


            <div className="card_container">


                <Card logo={'html'}>
                    <Htag tag={'h4'}>HTML</Htag>
                </Card>
                <Card logo={'css'}>
                    <Htag tag={'h4'}>CSS</Htag>
                </Card>
                <Card logo={'js'}>
                    <Htag tag={'h4'}>JavaScript</Htag>
                </Card>
                <Card logo={'ts'}>
                    <Htag tag={'h4'}>TypeScript</Htag>
                </Card>
                <Card logo={'react'}>
                    <Htag tag={'h4'}>React JS</Htag>
                </Card>
                <Card logo={'redux'}>
                    <Htag tag={'h4'}>Redux</Htag>
                </Card>
                <Card logo={'git'}>
                    <Htag tag={'h4'}>Git</Htag>
                </Card>


                <Card logo={'next'}>
                    <Htag tag={'h4'}>NextJS</Htag>
                </Card>
                <Card logo={'docker'}>
                    <Htag tag={'h4'}>Docker</Htag>
                </Card>
                <Card logo={'node'}>
                    <Htag tag={'h4'}>NodeJS</Htag>
                </Card>
            </div>

            <Htag tag={'h2'}>Обо мне</Htag>
            <div className="about-card">
                <span className="about-card-left">
                <span className="ellipse-about-1"></span>
                </span>
                <span className="about-span">
                <P size='about'> Привет всем. Я Дмитрий, начинающий frontend-developer. Почему программирование?
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
                <span className="about-card-right">
                    <span className="ellipse-about-2"></span>
                <span className="ellipse-about-3"></span>
                </span>


            </div>


            <Htag tag={'h2'}>Мой профиль на GitHub</Htag>

            {/*<GitCard git={git}/>*/}


            <div className="card_container">
                {git.map(git => <GitCard git={git}/>)}

            </div>


        </>

    )
}

export default LayoutContainer(Home);


export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get<RootObject[]>(`https://api.github.com/users/theDeemoonn/repos`);
    const git = res.data;
    const ownerData = await axios.get<RootObject[]>(`https://api.github.com/users/theDeemoonn`);
    const owner = ownerData.data;
    return {
        props: {
            git,


        }
    }
}


interface HomeProps extends Record <string, unknown> {
    git: RootObject[];


}
