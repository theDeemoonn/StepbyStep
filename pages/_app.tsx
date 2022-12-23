import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/burger.css'
import {YMInitializer} from "react-yandex-metrika";

config.autoAddCss = false

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return <>
        <Head>
            <title>Step by Step</title>


        </Head>


        <Component {...pageProps} />
        <YMInitializer accounts={[90946636]} options={{webvisor: true}} version="2"/>
    </>


}

export default MyApp


