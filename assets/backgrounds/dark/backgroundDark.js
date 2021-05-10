import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export default (props) => {
    return (
        <Svg
            width={500}
            height={900}
            viewBox="0 0 500 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path fill="url(#prefix__paint0_linear)" d="M0 0h500v900H0z" />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={20}
                    y1={-34.36}
                    x2={573.578}
                    y2={801.771}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#7E6FDD" />
                    <Stop offset={0.349} stopColor="#5E67B7" />
                    <Stop offset={0.923} stopColor="#372D6F" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}