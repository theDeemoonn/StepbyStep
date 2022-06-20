import React, {Component, FunctionComponent} from 'react';
import {LayoutProps} from "./Layout.props";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Record} from "immutable";
import styles from "/layout/Layout.module.css"


export function Layout({children, ...props}: LayoutProps): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>

            <div className={styles.body}>


                {children}


            </div>
            <Footer className={styles.footer}/>
        </div>

    );
};


// @ts-ignore
export const LayoutContainer = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function LayoutContainerComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );

    };
};