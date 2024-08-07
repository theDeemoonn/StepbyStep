import React, {DetailedHTMLProps, HTMLAttributes, useState} from 'react';
import {Htag, P} from "../../components";
import Button from "../../components/Button/Button";
import styles from './Body.module.css';
import Image from "next/image";
import profilePic from '/public/img/image1.png'
import ReactIcon from '/public/cardlogo/icons8-react-native-48.svg'
import ReduxIcon from '/public/cardlogo/icons8-redux-50.svg'
import TSIcon from '/public/cardlogo/icons8-typescript-50.svg';
import JSIcon from '/public/cardlogo/icons8-javascript-50.svg';
import {Modal} from "../../components/Modal/Modal";
import {Portal} from "next/dist/client/portal";

export interface BodyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {


}

export default function Body({...props}: BodyProps): JSX.Element {
    const [mounted, setMounted] = useState(false)


    return (
        <div className={styles.Body} {...props}>


            <div className={styles.ContainerLeft}>
                <div className={styles.ContainerLeftStyle}>

                    <Htag tag={'h1'}>Hi! I'm Dmitry</Htag>
                    <P>I am engaged in frontend development. Do you need a website, website layout, or maybe a turnkey website? Then contact me</P>

                    <Button onClick={() => {
                        setMounted(true)

                    }}>Contacts</Button>

                </div>
                {mounted && (<Portal type={'modal'}><Modal onClose={() => {
                    setMounted(false);
                }}/></Portal>)}
            </div>

            <div className={styles.ContainerRight}>


                <span className={styles.ellipseBody1}></span>
                <span className={styles.Logo}>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Image className={styles.MeLogo} src={profilePic}/>
                </span>
                <span className={styles.IconReactBackground}>

                <span className={styles.IconReact}><ReactIcon/></span>
                </span>
                <span className={styles.IconReduxBackground}>
                <span className={styles.IconRedux}><ReduxIcon/></span>
                </span>
                <span className={styles.IconTSBackground}>
                <span className={styles.IconTS}><TSIcon/></span>
                </span>
                <span className={styles.IconJSBackground}>
                <span className={styles.IconJS}><JSIcon/></span>
                </span>
            </div>


        </div>
    )
}
