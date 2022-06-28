import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from "next/document";


class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }


    render(): JSX.Element {

        return (
            <Html lang="ru">
                <Head>

                    <meta name="description" content="Шаг за шагом"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/favico/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favico/favicon.ico"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favico/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favico/favicon-16x16.png"/>
                    <link rel="manifest" href="/favico/site.webmanifest"/>
                    <link rel="mask-icon" href="/favico/safari-pinned-tab.svg" color="#3eb3d5"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>

                    <link
                        href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;700&display=swap"
                        rel="stylesheet"/>
                    <meta name="msapplication-TileColor" content="#ffffff"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <meta property="og:title" content="Step by Step"/>
                    <meta property="og:description" content="Шаг за шагом"/>
                    <meta property="og:url" content="sbys.me"/>


                </Head>
                <body>
                <Main/>
                <div id='modal'/>
              
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
