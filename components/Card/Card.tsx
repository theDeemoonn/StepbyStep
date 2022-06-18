import React from 'react';
import styles from '/components/Card/Card.module.css';
import NodeIcon from '/public/cardlogo/icons8-node-js-75.svg'
import JSIcon from '/public/cardlogo/icons8-javascript-75.svg'
import TSIcon from '/public/cardlogo/icons8-typescript-75.svg'
import ReactIcon from '/public/cardlogo/icons8-react-native-75.svg'
import ReduxIcon from '/public/cardlogo/icons8-redux-75.svg'
import GitIcon from '/public/cardlogo/icons8-git-75.svg'
import NextJSIcon from '/public/cardlogo/icons8-next.js-75.svg'
import HTMLIcon from '/public/cardlogo/icons8-html-5-75.svg'
import CSSIcon from '/public/cardlogo/icons8-css3-75.svg'
import DockerIcon from '/public/cardlogo/icons8-docker-75.svg'


export interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    logo: 'node' | 'js' | 'react' | 'redux' | 'ts' | 'git' | 'html' | 'css' | 'next' | 'docker';

    children?: React.ReactNode;
}

export default function Card({children, logo, className, ...props}: CardProps): JSX.Element {


    return (
        <div className={styles.body}>

            <div className={styles.Card}>
                <div className={styles.CardLogoUp}>
                    {logo == 'react' && <span className={styles.Icon}><ReactIcon/></span>}
                    {logo == 'js' && <span className={styles.Icon}><JSIcon/></span>}
                    {logo == 'ts' && <span className={styles.Icon}><TSIcon/></span>}
                    {logo == 'redux' && <span className={styles.Icon}><ReduxIcon/></span>}
                </div>
                <div className={styles.CardLogoDown}>
                    {logo == 'html' && <span className={styles.Icon}><HTMLIcon/></span>}
                    {logo == 'node' && <span className={styles.Icon}><NodeIcon/></span>}
                    {logo == 'next' && <span className={styles.Icon}><NextJSIcon/></span>}
                    {logo == 'css' && <span className={styles.Icon}><CSSIcon/></span>}
                    {logo == 'git' && <span className={styles.Icon}><GitIcon/></span>}
                    {logo == 'docker' && <span className={styles.Icon}><DockerIcon/></span>}

                </div>


                {children && <div className={styles.Content}>{children}</div>}
            </div>

        </div>);
}
