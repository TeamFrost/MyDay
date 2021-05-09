import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export default (props) => {
  return (
    <Svg
      width={183}
      height={184}
      viewBox="0 0 183 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M117.951 72.358C71.085 25.49 22.857-2.269 10.231 10.357-2.392 22.98 25.366 71.21 72.233 118.077c46.867 46.866 95.096 74.625 107.72 62.001 12.626-12.625-15.133-60.853-62.002-107.72zm47.785 77.519c-6.998 6.999-40.723-15.378-75.324-49.98s-56.978-68.325-49.98-75.323c6.998-6.999 40.723 15.378 75.324 49.98 34.602 34.601 56.979 68.324 49.98 75.323z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M159.025 95.217c0 35.309-28.624 63.933-63.932 63.933-35.31 0-63.934-28.624-63.934-63.933s28.624-63.932 63.934-63.932c35.308 0 63.932 28.623 63.932 63.932z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M72.233 118.077c19.592 19.592 39.388 35.775 56.756 47.134l18.954-18.953c-14.63-7.89-35.909-24.738-57.531-46.36-21.622-21.623-38.47-42.901-46.36-57.531L25.098 61.32c11.36 17.368 27.542 37.163 47.134 56.756z"
        fill="url(#prefix__paint2_linear)"
      />
      <Path
        d="M31.965 95.9a7.99 7.99 0 01-7.99 7.99 7.992 7.992 0 117.991-7.99zM143.848 7.991a7.991 7.991 0 11-15.983 0 7.991 7.991 0 0115.983 0zM175.815 51.944a3.995 3.995 0 11-7.992 0 3.995 3.995 0 017.992 0zM7.991 147.844a3.995 3.995 0 11-3.995-3.995 3.994 3.994 0 013.995 3.995zM79.916 171.819a3.995 3.995 0 11-3.995-3.995 3.994 3.994 0 013.995 3.995zM159.832 111.882a7.992 7.992 0 11-15.985 0 7.992 7.992 0 0115.985 0zM31.966 3.995a3.995 3.995 0 11-7.991 0A3.995 3.995 0 0127.97 0a3.994 3.994 0 013.995 3.995z"
        fill="#DFECF5"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={40.3}
          y1={64.977}
          x2={130.426}
          y2={134.718}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#6B75CE" />
          <Stop offset={1} stopColor="#564B93" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={10.257}
          y1={26.351}
          x2={128.28}
          y2={169.052}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E8B7E5" />
          <Stop offset={1} stopColor="#9B8CF8" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={48.236}
          y1={82.66}
          x2={111.209}
          y2={131.389}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#6B75CE" />
          <Stop offset={1} stopColor="#564B93" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

