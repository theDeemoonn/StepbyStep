import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import styles from './p.module.css';
import cn from "classnames";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: React.ReactNode;
    size?: 'medium' | 'large' | 'about';
}

export function P({children, size = 'medium', className, ...props}: PProps): JSX.Element {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.medium]: size == 'medium',
                [styles.large]: size == 'large',
                [styles.about]: size == 'about',
            })} {...props}>


            {children}
        </p>

    );
};
