import React, {useEffect, useRef} from "react";
import styles from '/components/Modal/Modal.module.css'
import {Htag} from "../Htag/Htag";
import ReactDOM from "react-dom";

interface IModal {
    onClose?: () => void;

}


export function Modal(props: IModal) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                props.onClose?.();
                console.log('close')
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

            <Htag tag={'h2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, illo provident. Ab autem
                cupiditate illo incidunt minus natus quam sequi? Aliquid aspernatur assumenda aut facilis iste minus
                obcaecati. Ratione, vel.</Htag>


        </div>

    ), node);
}



