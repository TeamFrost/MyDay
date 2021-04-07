import * as React from "react"
import Svg, { Path } from "react-native-svg"
export default (props) => {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M16 10.667l-8 8 1.88 1.88L16 14.44l6.12 6.107 1.88-1.88-8-8z"
                fill="#564B93"
            />
        </Svg>
    )
}