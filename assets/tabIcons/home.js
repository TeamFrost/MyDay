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
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <Path
                d="M20 8l-6-5.26a3 3 0 00-4 0L4 8a3 3 0 00-1 2.26V19a3 3 0 003 3h12a3 3 0 003-3v-8.75A3 3 0 0020 8zm-6 12h-4v-5a1 1 0 011-1h2a1 1 0 011 1v5zm5-1a1 1 0 01-1 1h-2v-5a3 3 0 00-3-3h-2a3 3 0 00-3 3v5H6a1 1 0 01-1-1v-8.75a1 1 0 01.34-.75l6-5.25a1 1 0 011.32 0l6 5.25a1 1 0 01.34.75V19z"
                {...props}
            />
        </Svg>
    )
}