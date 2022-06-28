import React, {DetailedHTMLProps, HTMLAttributes, useState} from 'react';
import styles from './Header.module.css';
import SBS from '/public/favico/safari-pinned-tab.svg'
import Link from "next/link";
import {Portal} from "next/dist/client/portal";
import {Modal} from "../../components/Modal/Modal";
import Links from "../../components/Burger/Burger";


export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export default function Header({...props}: HeaderProps): JSX.Element {
    const [mounted, setMounted] = useState(false)
    const HamburgerIcon = () => (<div className='p-1/2'>
        <svg className="w-8 h-8 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
             viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    </div>)


    return (

        <div  {...props} id="outer-container">
            <ul className={styles.Header}>
                <span className={styles.HeaderLogo}><SBS/><p>Step by Step</p></span>


                <div className={styles.List}>


                    <nav className={styles.menu__box}>


                        <Link href="/">Главная</Link>{" "}
                        |{" "}


                        <Link className={styles.menu__item} href="/#about">Обо мне</Link>{" "}
                        |{" "}

                        <Link className={styles.menu__item} href="/#git">Мои работы</Link>{" "}
                        |{" "}
                        <a className={styles.menu__item} onClick={() => {
                            setMounted(true)

                        }}>Контакты</a>


                    </nav>
                    {mounted && (<Portal type={'modal'}><Modal onClose={() => {
                        setMounted(false);
                    }}/></Portal>)}

                </div>
                <div className={styles.burger}><Links/></div>

            </ul>


        </div>


    );
}
