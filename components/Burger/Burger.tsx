import React, {DetailedHTMLProps, HTMLAttributes, useState} from "react";

import Menu from 'react-burger-menu/lib/menus/slide'
import {Modal} from "../Modal/Modal";
import {Portal} from "next/dist/client/portal";
import Link from "next/link";
import styles from '/components/Burger/burger.module.css'


export interface BurgerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onClose?: () => void;
}


export default function Links({...props}: BurgerProps): JSX.Element {
    const [mounted, setMounted] = useState(false)


    const HamburgerIcon = () => (<div>
        <svg className="w-8 h-8 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
             viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    </div>)


    return (

        <Menu right customBurgerIcon={<HamburgerIcon/>}>
            <main id="page-wrap">

                <Link href="/">Главная</Link>


                <Link href="/#about">Обо мне</Link>

                <Link href="/#git">Мои работы</Link>
                <a className={styles.menuitem} onClick={() => {
                    setMounted(true)

                }}>Контакты</a>
            </main>


            {mounted && (<Portal type={'modal'}><Modal onClose={() => {
                setMounted(false);
            }}/></Portal>)}


        </Menu>


    );

}
