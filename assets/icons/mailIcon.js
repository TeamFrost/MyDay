import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default (props) => {
    return (
        <Svg
            width={27}
            height={27}
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M22.3 4.5H4.7c-1.21 0-2.189 1.013-2.189 2.25L2.5 20.25c0 1.238.99 2.25 2.2 2.25h17.6c1.21 0 2.2-1.012 2.2-2.25V6.75c0-1.237-.99-2.25-2.2-2.25zm0 15.75H4.7V9l8.8 5.625L22.3 9v11.25zm-8.8-7.875L4.7 6.75h17.6l-8.8 5.625z"
                fill="#B4C5D2"
            />
        </Svg>
    )
}