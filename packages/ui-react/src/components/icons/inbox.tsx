import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconInbox = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.205l.08-.189L5.103 4.56C5.553 3.641 6.122 3.073 7 3h10l.13.009c.754.099 1.305.65 1.79 1.597L22 11.795V19ZM4 13v6h16v-6h-4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2H4Zm.517-2H10v2h4v-2h5.484l-2.373-5.543a2.024 2.024 0 0 0-.3-.457l-9.635-.004c-.077.083-.173.23-.257.398L4.517 11Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconInbox;
