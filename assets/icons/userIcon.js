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
                d="M13.5 6.75c1.21 0 2.2 1.013 2.2 2.25 0 1.238-.99 2.25-2.2 2.25-1.21 0-2.2-1.012-2.2-2.25 0-1.237.99-2.25 2.2-2.25zm0 11.25c2.97 0 6.38 1.451 6.6 2.25H6.9c.253-.81 3.641-2.25 6.6-2.25zm0-13.5c-2.431 0-4.4 2.014-4.4 4.5s1.969 4.5 4.4 4.5 4.4-2.014 4.4-4.5-1.969-4.5-4.4-4.5zm0 11.25c-2.937 0-8.8 1.508-8.8 4.5v2.25h17.6v-2.25c0-2.992-5.863-4.5-8.8-4.5z"
                fill="#B4C5D2"
            />
        </Svg>
    )
}