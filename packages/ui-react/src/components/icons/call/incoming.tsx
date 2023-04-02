import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCallIncoming = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M10.975 6.254c.585.65.4 1.386-.118 2.084a5.448 5.448 0 0 1-.436.508c-.082.087-.146.151-.28.285l-.767.768c-.1.1.586 1.47 1.917 2.803 1.33 1.331 2.7 2.018 2.801 1.917l.767-.767c.422-.422.645-.626.952-.828.639-.418 1.335-.532 1.922-.007 1.917 1.372 3.002 2.213 3.534 2.765 1.037 1.078.901 2.736.006 3.682-.31.328-.704.722-1.169 1.17-2.811 2.813-8.745 1.101-13.292-3.451C2.263 12.63.552 6.696 3.358 3.889c.503-.512.67-.678 1.16-1.161.913-.9 2.648-1.041 3.703 0 .554.548 1.439 1.686 2.754 3.526Zm5.297 9.012-.766.767c-1.303 1.303-3.521.192-5.629-1.917-2.109-2.111-3.219-4.329-1.916-5.632l.766-.766c.123-.123.18-.18.246-.25.092-.097.167-.182.228-.257-1.166-1.623-1.958-2.637-2.385-3.06-.22-.217-.714-.177-.896.002-.483.476-.642.635-1.144 1.144-1.804 1.806-.423 6.596 3.45 10.472 3.87 3.875 8.66 5.257 10.478 3.438.457-.442.83-.815 1.117-1.118.208-.22.245-.671.006-.92-.397-.412-1.37-1.17-3.05-2.377a6.86 6.86 0 0 0-.505.474ZM20 11V9h-3.586l5.293-5.293-1.414-1.414L15 7.586V4h-2v7h7Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCallIncoming;
