import {RootObject} from "../../interfaces/menu.interface";
import React from "react";
import styles from '/components/Gitcard/Gitcard.module.css';
import axios from "axios";
import GitHubIcon from '/public/cardlogo/icons8-github-75.svg';

import {GetStaticProps} from "next";


interface GitCardProps extends Record <string, unknown> {


    git: RootObject;
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get<RootObject[]>(`https://api.github.com/users/theDeemoonn/repos`);
    const git = res.data;

    return {
        props: {
            git,


        },
        notFound: true
    }
}

export const GitCard = ({git}: GitCardProps): JSX.Element => {


    return (
        <div className={styles.Git}>
            <div className={styles.Giticon} key={git.name}><GitHubIcon/></div>
            <div className={styles.GitTitle} key={git.name}>{git.name}</div>
            <p className={styles.GitDesc} key={git.description}>{git.description}</p>
            <a href={git.html_url} className={styles.GitLink} key={git.html_url}>Перейти на GitHub</a>
            {/*{git.map(git => <div className={styles.GitTitle} key={git.full_name}>{git.owner.avatar_url}</div>)}*/}
            {/*{git.map(m => <a href={m.html_url} className={styles.GitLink} key={m.html_url}>Перейти на GitHub</a>)}*/}
        </div>
    )
};

