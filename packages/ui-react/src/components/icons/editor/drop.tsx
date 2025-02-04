import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorDrop = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12.658 1.247C18.188 6.077 21 10.293 21 14c0 5.25-4.097 9-9 9s-9-3.75-9-9c0-3.707 2.811-7.924 8.342-12.753L12 .672l.658.575ZM5 14c0 4.103 3.164 7 7 7s7-2.897 7-7c0-2.85-2.307-6.434-7-10.663C7.307 7.567 5 11.15 5 14Zm7 4v2a6 6 0 0 0 6-6h-2a4 4 0 0 1-4 4Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorDrop;
