import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import styles from './Header.module.css';
import SBS from '/public/favico/safari-pinned-tab.svg'

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export default function Header({...props}: HeaderProps): JSX.Element {
    return (

        <div {...props}>
            <ul className={styles.Header}>
                <span className={styles.HeaderLogo}><SBS/><p>Step by Step</p></span>

                <div className={styles.List}>
                    <li>
                        <a href="#">Главная</a>
                    </li>
                    <li>
                        <a href="#">Обо мне</a>
                    </li>
                    <li>
                        <a href="#">Мои работы</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </div>
            </ul>


        </div>


    );
}
