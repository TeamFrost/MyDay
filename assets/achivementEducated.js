import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export default (props) => {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M28.23 19.147v-6.863c0-.349-.2-.65-.49-.798l-.01-.004-13.25-6.527a.894.894 0 00-.79 0L.44 11.482a.894.894 0 000 1.604l4.765 2.346v4.45c0 .341.194.652.499.803l7.987 3.934a.897.897 0 00.79 0l7.986-3.934a.894.894 0 00.5-.802v-4.45l3.475-1.712v5.426a2.61 2.61 0 00-1.712 2.447v2.749c0 .494.4.894.895.894h3.422c.494 0 .895-.4.895-.894v-2.749a2.61 2.61 0 00-1.712-2.447zM14.086 6.754l9.411 4.636h-7.116a2.467 2.467 0 00-2.295-1.57 2.466 2.466 0 00-2.464 2.464 2.466 2.466 0 002.464 2.463 2.467 2.467 0 002.295-1.57h7.116l-9.411 4.636-11.227-5.53 11.227-5.53zm.675 5.53a.676.676 0 11-1.353-.002.676.676 0 011.353.002zm6.417 7.043l-7.092 3.493-7.093-3.493v-3.014l6.698 3.299a.894.894 0 00.79 0l6.697-3.299v3.014zm6.975 4.122H26.52v-1.855a.818.818 0 011.634 0v1.855z"
                    fill="#5C8DF7"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" d="M0 0h30v30H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}