import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default (props) => {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M2.917 15.408l5-5.008 3.333 3.333 7.083-7.966-1.175-1.175-5.908 6.641L7.917 7.9l-6.25 6.258 1.25 1.25z"
                fill="#fff"
            />
        </Svg>
    )
}
