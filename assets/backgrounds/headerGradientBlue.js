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
                    x1={20.267}
                    y1={270.545}
                    x2={355.483}
                    y2={581.124}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#A5C5FC" />
                    <Stop offset={1} stopColor="#5C8DF7" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint1_linear"
                    x1={49.067}
                    y1={10.091}
                    x2={128.274}
                    y2={479.718}
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