import React from 'react';
import {HtagProps} from "./Htag.props";
import styles from '/components/Htag/htag.module.css'


export function Htag({tag, children}: HtagProps): JSX.Element {
    switch (tag) {
        case 'h1':
            return <h1 className={styles.h1}>{children}</h1>;
        case 'h2':
            return <h2 className={styles.h2}>{children}</h2>;
        case 'h3':
            return <h3 className={styles.h3}>{children}</h3>;
        case 'h4':
            return <h4>{children}</h4>;
        case 'h5':
            return <h5>{children}</h5>;
        case 'h6':
            return <h6>{children}</h6>;
        default:
            return <h2>{children}</h2>;
    }

};
