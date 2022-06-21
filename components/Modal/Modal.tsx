import React, {useEffect, useRef} from "react";
import styles from '/components/Modal/Modal.module.css'
import ReactDOM from "react-dom";
import {config} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faGithub,
    faInstagram,
    faLinkedinIn,
    faTelegram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'

import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";


config.autoAddCss = false


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
            <a className={styles.A} href='https://www.facebook.com/'><FontAwesomeIcon className={styles.BTN}
                                                                                      icon={faFacebookF}/></a>

            <a className={styles.A} href='https://www.facebook.com/'> <FontAwesomeIcon className={styles.BTN}
                                                                                       icon={faTwitter}/></a>

            <a className={styles.A} href='https://www.facebook.com/'><FontAwesomeIcon className={styles.BTN}
                                                                                      icon={faLinkedinIn}/></a>
            <a className={styles.A} href='https://www.facebook.com/'><FontAwesomeIcon className={styles.BTN}
                                                                                      icon={faInstagram}/></a>
            <a className={styles.A} href='https://github.com/theDeemoonn'><FontAwesomeIcon className={styles.BTN}
                                                                                           icon={faGithub}/></a>
            <a className={styles.A} href='https://github.com/theDeemoonn'><FontAwesomeIcon className={styles.BTN}
                                                                                           icon={faTelegram}/></a>
            <a className={styles.A} href='https://github.com/theDeemoonn'><FontAwesomeIcon className={styles.BTN}
                                                                                           icon={faEnvelopeOpenText}/></a>


        </div>

    ), node);
}



