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
                    x1={426.667}
                    y1={694.167}
                    x2={-52.182}
                    y2={532.795}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#564B93" />
                    <Stop offset={1} stopColor="#6B75CE" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint1_linear"
                    x1={-393.6}
                    y1={-298.667}
                    x2={159.811}
                    y2={985.535}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#6B75CE" />
                    <Stop offset={0.196} stopColor="#9B8CF8" />
                    <Stop offset={0.8} stopColor="#564B93" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}