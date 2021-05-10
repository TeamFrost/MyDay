import React from "react";
import Svg, { Path } from "react-native-svg"

export default (props) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 28 28"
            {...props}
        >
            <Path
                fill="currentColor"
                d="M21 23.333H4.667V7h10.5V4.667h-10.5A2.34 2.34 0 002.333 7v16.333a2.34 2.34 0 002.334 2.334H21a2.34 2.34 0 002.333-2.334v-10.5H21v10.5zm-9.088-3.698l-2.287-2.753L6.417 21H19.25l-4.13-5.495-3.208 4.13zM23.333 4.667v-3.5H21v3.5h-3.5c.012.011 0 2.333 0 2.333H21v3.488c.012.012 2.333 0 2.333 0V7h3.5V4.667h-3.5z">
            </Path>
        </Svg>
    );
}

