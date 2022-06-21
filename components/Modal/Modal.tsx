import React, {useEffect, useRef} from "react";
import styles from '/components/Modal/Modal.module.css'
import ReactDOM from "react-dom";
import FacebookIcon from '/public/modallogo/facebook-f-brands.svg'
import InstagramIcon from '/public/modallogo/instagram-brands.svg'
import TwitterIcon from '/public/modallogo/twitter-brands.svg'
import GitHubIcon from '/public/modallogo/github-brands.svg'
import LinkedinIcon from '/public/modallogo/linkedin-in-brands.svg'


interface IModal {
    onClose?: () => void;

}


export function Modal(props: IModal) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                props.onClose?.();

            }
        }


        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }

    });


    const node = document.querySelector('#modal');
    if (!node) return null;

    return ReactDOM.createPortal((

        <div className={styles.Modal} ref={ref}>
            <div className={styles.BTN}>
                <a href='#'><span className={styles.Facebook}><FacebookIcon/></span></a>
                <p>Facebook</p>
            </div>
            <div className={styles.BTN}>
                <a href='#'><span><InstagramIcon/></span></a>
                <p>Instagram</p>
            </div>
            <div className={styles.BTN}>
                <a href='#'><span><TwitterIcon/></span></a>
                <p>Twitter</p>
            </div>
            <div className={styles.BTN}>
                <a href='#'><span><GitHubIcon/></span></a>
                <p>GitHub</p>
            </div>
            <div className={styles.BTN}>
                <a href='#'><span><LinkedinIcon/></span></a>
                <p>Linkedin</p>
            </div>


        </div>

    ), node);
}



