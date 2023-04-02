import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconHeart = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M16.553 2c-1.447 0-2.38.172-3.45.696a6.166 6.166 0 0 0-1.113.7 6.3 6.3 0 0 0-1.068-.668C9.832 2.188 8.85 2 7.455 2 3.716 2 1 5.097 1 9.12c0 3.038 1.694 5.972 4.849 8.81 1.656 1.49 3.77 2.963 5.285 3.747l.866.45.866-.45c1.515-.784 3.63-2.258 5.285-3.747C21.306 15.092 23 12.158 23 9.12c0-3.98-2.742-7.105-6.447-7.12ZM21 9.12c0 2.38-1.414 4.83-4.186 7.323-1.512 1.36-3.455 2.718-4.814 3.43-1.359-.712-3.302-2.07-4.814-3.43C4.414 13.949 3 11.5 3 9.12 3 6.148 4.884 4 7.455 4c1.11 0 1.793.132 2.58.52.465.23.876.534 1.232.914l.735.785.73-.791c.363-.395.78-.706 1.25-.936.764-.374 1.405-.492 2.567-.492C19.09 4.01 21 6.189 21 9.12Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconHeart;
