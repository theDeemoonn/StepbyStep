import React, {Component} from 'react';
import {P} from "../../../components";
import styles from './About.module.css';


 function About () {

    return (

        <div id='about' className={styles.aboutCard}>
            <span className={styles.aboutCardLeft}>
            <span className={styles.ellipseAbout1}></span>
            </span>
            <span className={styles.aboutSpan}>
            <P size='about'> Hi all. I'm Dmitry, a beginner frontend developer. Why programming?
 Everything is elementary - I like it, the profession of the future, thanks to which I can provide for myself and fulfill my dream.
 Why should you choose me? I approach every order with great responsibility and
 love, because I want to make a name for myself, eliminate negligence, fully study the project,
 client and his target audience, work for quality, trying to place an order as quickly as possible and
 unique, taking into account all the edits and desires. By trusting me, you will get the most out of your
 project, save your nerves and time.
 If you are interested in me, want to know something else or use my services, then I
 I will provide all my contacts.</P></span>
            <span className={styles.aboutCardRight}>
                <span className={styles.ellipseAbout2}></span>
            <span className={styles.ellipseAbout3}></span>
            </span>


        </div>
    );

}


export default About;








