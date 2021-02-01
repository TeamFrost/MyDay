import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export default (props) => {
    return (
        <Svg
            width={800}
            height={1200}
            viewBox="0 0 800 1200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M427.367 1164.92c-228.79-27.66-285.018-78.74-427.367 0V1133c76.513-105.16 250.071-21.16 427.367 31.92z"
                fill="url(#prefix__paint0_linear)"
            />
            <Path
                d="M800 0v1133c-98.278 95.19-236.548 72.67-372.619 31.92C250.071 1111.84 76.513 1027.84 0 1133V0h800z"
                fill="url(#prefix__paint1_linear)"
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={20.267}
                    y1={1082.18}
                    x2={611.514}
                    y2={1219.13}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#A5C5FC" />
                    <Stop offset={1} stopColor="#5C8DF7" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint1_linear"
                    x1={49.067}
                    y1={40.364}
                    x2={944.764}
                    y2={1368.04}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#A5C5FC" />
                    <Stop offset={0.758} stopColor="#D4C3FC" />
                    <Stop offset={1} stopColor="#E8B7E5" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}