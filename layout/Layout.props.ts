import React, {DetailedHTMLProps, HTMLAttributes} from "react";

export * from './Layout';

export interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

    children: React.ReactNode;
}
