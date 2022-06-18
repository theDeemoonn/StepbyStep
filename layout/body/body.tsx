import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import {Htag, P} from "../../components";
import Button from "../../components/Button/Button";

export interface BodyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {


}

export default function Body({...props}: BodyProps): JSX.Element {
    return (
        <div {...props}>

            <Htag tag={'h1'}>Привет! Я Дмитрий</Htag>
            <P>This is a simple example of a Next.js app.</P>
            <Button>Контакты</Button>


        </div>
    )
}
