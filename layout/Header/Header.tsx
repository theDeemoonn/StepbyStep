import React, {DetailedHTMLProps, HTMLAttributes, useState} from 'react';
import styles from './Header.module.css';
import SBS from '/public/favico/safari-pinned-tab.svg'
import Link from "next/link";
import {Portal} from "next/dist/client/portal";
import {Modal} from "../../components/Modal/Modal";

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export default function Header({...props}: HeaderProps): JSX.Element {
    const [mounted, setMounted] = useState(false)

    return (

        <div {...props}>
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
            </ul>


        </div>


    );
}
