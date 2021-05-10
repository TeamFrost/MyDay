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
                d="M15.167 9.333A4.665 4.665 0 0010.5 4.667a4.665 4.665 0 00-4.667 4.666A4.665 4.665 0 0010.5 14a4.665 4.665 0 004.667-4.667zm-2.334 0a2.34 2.34 0 01-2.333 2.334 2.34 2.34 0 01-2.333-2.334A2.34 2.34 0 0110.5 7a2.34 2.34 0 012.333 2.333zM1.167 21v2.333h18.666V21c0-3.103-6.218-4.667-9.333-4.667S1.167 17.897 1.167 21zM3.5 21c.233-.828 3.85-2.333 7-2.333 3.138 0 6.743 1.493 7 2.333h-14zm19.833-3.5V14h3.5v-2.333h-3.5v-3.5H21v3.5h-3.5V14H21v3.5h2.333z">
            </Path>
        </Svg>
    );
}

