import React, {DetailedHTMLProps, HTMLAttributes, useEffect} from "react";
import {createPortal} from "react-dom";

interface PortalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {


}


const Portal: React.FC = ({children}: PortalProps) => {
    const [mounted, setMounted] = React.useState(false)

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, [])

    return mounted
        ? createPortal(children,
            document.querySelector("#modal") as HTMLElement)
        : null


};

export default Portal;
