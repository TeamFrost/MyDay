import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export default (props) => {
    return (
        <Svg
            width={800}
            height={300}
            viewBox="0 0 800 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M427.367 291.231c-228.79-6.917-285.018-19.687-427.367 0v-7.981c76.513-26.291 250.071-5.289 427.367 7.981z"
                fill="url(#prefix__paint0_linear)"
            />
            <Path
                d="M800 0v283.25c-98.278 23.797-236.548 18.167-372.619 7.981C250.071 277.961 76.513 256.959 0 283.25V0h800z"
                fill="url(#prefix__paint1_linear)"
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={426.667}
                    y1={297.5}
                    x2={97.169}
                    y2={38.406}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#564B93" />
                    <Stop offset={1} stopColor="#6B75CE" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint1_linear"
                    x1={-393.6}
                    y1={-128}
                    x2={-277.052}
                    y2={503.055}
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