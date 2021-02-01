import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export default (props) => {
    return (
        <Svg
            width={800}
            height={700}
            viewBox="0 0 800 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M427.367 679.539c-228.79-16.14-285.018-45.937-427.367 0v-18.623c76.513-61.345 250.071-12.341 427.367 18.623z"
                fill="url(#prefix__paint0_linear)"
            />
            <Path
                d="M800 0v660.916c-98.278 55.526-236.548 42.391-372.619 18.623C250.071 648.575 76.513 599.571 0 660.916V0h800z"
                fill="url(#prefix__paint1_linear)"
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={20.267}
                    y1={631.273}
                    x2={558.391}
                    y2={844.947}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#A5C5FC" />
                    <Stop offset={1} stopColor="#5C8DF7" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint1_linear"
                    x1={49.067}
                    y1={23.545}
                    x2={433.096}
                    y2={999.384}
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