import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Dimensions } from "react-native"

const screenHeight = Dimensions.get('screen').height;

export default (props) => {
    return (
        <Svg
            width={screenHeight / 32}
            height={screenHeight / 32}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"
                {...props}
            />
        </Svg>
    )
}