import * as React from "react"
import Svg, {
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath,
} from "react-native-svg"

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
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M799.929 282.633l-.285 8.758c-132.826-12.533-235.808-15.66-308.947-9.38 99.203-10.375 192.641-18.053 309.232.622z"
                    fill="url(#prefix__paint0_linear)"
                />
                <Path
                    d="M800 0v280.41l-.071 2.223c-116.591-18.675-210.029-10.997-309.231-.622-131.196 13.725-272.47 32.169-490.698.634V0h800z"
                    fill="url(#prefix__paint1_linear)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={405.333}
                    y1={271.359}
                    x2={631.26}
                    y2={510.21}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#564B93" />
                    <Stop offset={1} stopColor="#6B75CE" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint1_linear"
                    x1={198.4}
                    y1={75}
                    x2={254.047}
                    y2={449.434}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#564B93" />
                    <Stop offset={0.74} stopColor="#6B75CE" />
                    <Stop offset={1} stopColor="#9B8CF8" />
                </LinearGradient>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" d="M0 0h800v300H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}