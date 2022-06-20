import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from '/components/Button/Button.module.css'
import cn from 'classnames';


export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;

}

export default function Button({children, className, ...props}: ButtonProps) {

    return (
        <button className={cn(styles.Button, className)}{...props}>
            {children}
        </button>

    );
}
