import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

export default (props) => {
    return (
        <Svg
            width={36}
            height={36}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15.015 31.515A2.983 2.983 0 0018 34.5a2.983 2.983 0 002.985-2.985h-5.97zM18 9c4.14 0 7.5 3.36 7.5 7.5V27h-15V16.5c0-4.14 3.36-7.5 7.5-7.5zm0-6.75a2.247 2.247 0 00-2.25 2.25v1.755C11.04 7.275 7.5 11.475 7.5 16.5v9l-3 3V30h27v-1.5l-3-3v-9c0-5.025-3.54-9.225-8.25-10.245V4.5A2.247 2.247 0 0018 2.25z"
                fill="#323232"
            />
            <Circle cx={26} cy={9} r={5} fill="#F6707B" />
        </Svg>
    )
}