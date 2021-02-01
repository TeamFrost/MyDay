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
                d="M20.1 9H19V6.75c0-3.105-2.464-5.625-5.5-5.625S8 3.645 8 6.75V9H6.9c-1.21 0-2.2 1.012-2.2 2.25V22.5c0 1.238.99 2.25 2.2 2.25h13.2c1.21 0 2.2-1.012 2.2-2.25V11.25c0-1.238-.99-2.25-2.2-2.25zm-9.9-2.25c0-1.867 1.474-3.375 3.3-3.375 1.826 0 3.3 1.508 3.3 3.375V9h-6.6V6.75zm9.9 15.75H6.9V11.25h13.2V22.5zm-6.6-3.375c1.21 0 2.2-1.012 2.2-2.25s-.99-2.25-2.2-2.25c-1.21 0-2.2 1.012-2.2 2.25s.99 2.25 2.2 2.25z"
                fill="#B4C5D2"
            />
        </Svg>
    )
}