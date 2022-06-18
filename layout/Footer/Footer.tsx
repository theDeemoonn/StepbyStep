import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import cn from "classnames";
import styles from "/layout/Footer/Footer.module.css";
import {format} from 'date-fns';
import SBS from '/public/favico/safari-pinned-tab.svg'

export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export default function Footer({className, ...props}: FooterProps): JSX.Element {
    return (

        <footer className={cn(className, styles.footer)} {...props}>
            <div className={styles.copyright}>
                Copyright © {format(new Date(), 'yyyy')}, Step by step
            </div>
            <span className={styles.footerLogo}><SBS/></span>


        </footer>


    );
}
