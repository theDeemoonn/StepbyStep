import {GitCard, Htag} from "../components";
import Card from "../components/Card/Card";
import {LayoutContainer} from "../layout/Layout";
import React from "react";

import axios from "axios";
import {RootObject} from "../interfaces/menu.interface";
import {GetStaticProps} from "next";
import Body from "../layout/body/body";
import About from "../layout/body/about/about";


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

            <Htag id={'about'} tag={'h2'}>About me</Htag>
            <About/>


            <Htag id={'git'} tag={'h2'}>My GitHub profile</Htag>

            {/*<GitCard git={git}/>*/}


            <div className="git_card_container">
                {/* eslint-disable-next-line react/jsx-key */}
                {git.map(git => <GitCard git={git}/>)}

            </div>


        </>

    )
}

export default LayoutContainer(Home);


export const getServerSideProps: GetStaticProps = async () => {
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
