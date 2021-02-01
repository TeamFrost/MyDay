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
      height={1200}
      viewBox="0 0 800 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M799.929 1130.53l-.285 35.03c-132.826-50.13-235.808-62.64-308.947-37.52 99.203-41.5 192.641-72.21 309.232 2.49z"
          fill="url(#prefix__paint0_linear)"
        />
        <Path
          d="M800 0v1121.64l-.071 8.89c-116.591-74.7-210.029-43.99-309.232-2.49-131.195 54.9-272.469 128.68-490.697 2.54V0h800z"
          fill="url(#prefix__paint1_linear)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={405.333}
          y1={1085.44}
          x2={852.534}
          y2={1203.63}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9B8CF8" />
          <Stop offset={1} stopColor="#E8B7E5" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={-50.133}
          y1={-37.864}
          x2={692.862}
          y2={1198.37}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E8B7E5" />
          <Stop offset={0.182} stopColor="#D4C3FC" />
          <Stop offset={0.729} stopColor="#A5C5FC" />
        </LinearGradient>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h800v1200H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}