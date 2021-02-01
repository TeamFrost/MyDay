import * as React from "react"
import Svg, {
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default (props) => {
    return (
        <Svg
            width={184}
            height={179}
            viewBox="0 0 184 179"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G filter="url(#prefix__filter0_d)">
                <Path
                    d="M159.284 135.744c-31.861 41.047-68.754 44.097-105.965 32.128-37.21-11.97-67.53-75.657-36.426-104.71C37.268 44.129 143.94-40.011 122.857 31.022c-21.082 71.034 105.199 16.964 36.427 104.722z"
                    fill="url(#prefix__paint0_linear)"
                />
            </G>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M93.082 84.557L46.198 76.29l-10.26 58.184 93.768 16.534 10.26-58.185-46.884-8.266zm4.242-2.971l2.544-14.426c3.856-21.871-10.805-42.81-32.676-46.666-5.966-1.052-11.675 2.945-12.727 8.912-1.052 5.966 2.945 11.675 8.911 12.727 17.899 3.156 29.891 20.283 26.735 38.181a3.66 3.66 0 002.97 4.243 3.66 3.66 0 004.243-2.971zM64.648 34.92a3.67 3.67 0 01-2.97-4.243 3.67 3.67 0 014.242-2.97c14.123 2.49 24.568 13.686 26.796 27.087-5.72-10.116-15.748-17.702-28.068-19.874z"
                    fill="url(#prefix__paint1_linear)"
                />
                <Path
                    d="M137.631 84.975L51.076 69.713a10.972 10.972 0 00-12.727 8.911l-8.988 50.972a10.972 10.972 0 008.912 12.727l86.555 15.262a10.97 10.97 0 0012.727-8.912l8.988-50.971a10.971 10.971 0 00-8.912-12.727zm-60.707 49.041l-28.852-5.088a3.626 3.626 0 01-2.97-4.242c1.754-9.954 11.257-16.608 21.211-14.853a10.972 10.972 0 01-8.911-12.727 10.972 10.972 0 0112.727-8.911 10.972 10.972 0 018.911 12.727 10.971 10.971 0 01-12.727 8.911c9.954 1.755 16.608 11.258 14.853 21.212a3.627 3.627 0 01-4.242 2.971zm43.277 7.631L91.35 136.56a3.628 3.628 0 01-2.971-4.243 3.625 3.625 0 014.242-2.97l28.852 5.087a3.626 3.626 0 012.971 4.242 3.627 3.627 0 01-4.243 2.971zm2.544-14.426l-28.852-5.087a3.627 3.627 0 01-2.97-4.243 3.626 3.626 0 014.242-2.97l28.852 5.087a3.625 3.625 0 012.97 4.242 3.626 3.626 0 01-4.242 2.971zm2.544-14.426l-28.852-5.087a3.627 3.627 0 01-2.97-4.243 3.626 3.626 0 014.242-2.97l28.852 5.087a3.627 3.627 0 012.97 4.243 3.626 3.626 0 01-4.242 2.97z"
                    fill="url(#prefix__paint2_linear)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={27.611}
                    y1={3.005}
                    x2={191.448}
                    y2={292.761}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FAFBFC" />
                    <Stop offset={1} stopColor="#A5C5FC" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint1_linear"
                    x1={113.5}
                    y1={159.5}
                    x2={78}
                    y2={37.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#A5C5FC" />
                    <Stop offset={0.497} stopColor="#E2EDFF" />
                    <Stop offset={1} stopColor="#6B75CE" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint2_linear"
                    x1={141}
                    y1={172}
                    x2={20.5}
                    y2={25}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#5C8DF7" />
                    <Stop offset={1} stopColor="#A5C5FC" />
                </LinearGradient>
                <ClipPath id="prefix__clip0">
                    <Path
                        fill="#fff"
                        transform="rotate(10 -70.587 246.351)"
                        d="M0 0h125v125H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}