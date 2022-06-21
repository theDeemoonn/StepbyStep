// import {LayoutContainer} from "../layout/Layout";
import React from "react";
import {Htag} from "../components";
import planePic from '/public/404logo/plane.png';
import styles from '/styles/404styles.module.css';
import Image from "next/image";


function Error404(): JSX.Element {


    return (
        <div className={styles.wrapper}>
            <div className={styles.Error}>
                <div className={styles.Sky}>
                    <Htag tag={'h2'}><span>4</span><span>0</span><span>4</span></Htag>
                    <div className={styles.Grass}/>
                    <Image src={planePic} className={styles.Plane}/>


                </div>


                <div className={styles.Field}>
                    <Htag tag={'h2'}>Что-то пошло не так...</Htag>
                    <a href={'/'}>Домой</a>
                </div>


            </div>
        </div>
    );
};

export default Error404;