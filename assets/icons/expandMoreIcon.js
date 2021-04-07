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
                d="M22.12 11.453L16 17.56l-6.12-6.107L8 13.333l8 8 8-8-1.88-1.88z"
                fill="#564B93"
            />
        </Svg>
    )
}