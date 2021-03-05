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
            <Path
                fill="url(#prefix__paint0_linear)"
                fillOpacity={0.25}
                d="M0 0h500v900H0z"
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={-23.5}
                    y1={-25.621}
                    x2={560.148}
                    y2={724.044}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#E8B7E5" />
                    <Stop offset={0.172} stopColor="#D4C3FC" />
                    <Stop offset={0.729} stopColor="#A5C5FC" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}