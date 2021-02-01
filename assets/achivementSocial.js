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
            <G clipPath="url(#prefix__clip0)" fill="#D4C3FC">
                <Path d="M2.685 7.717a.902.902 0 001.28 0l3.77-3.77a.905.905 0 10-1.28-1.28L5.319 3.803 3.325 5.797 1.84 4.312a.905.905 0 00-1.28 1.28l2.125 2.125zM13.48 7.717a.903.903 0 001.279 0l3.77-3.77a.905.905 0 00-1.28-1.28l-3.13 3.13-1.485-1.485a.905.905 0 00-1.28 1.28l2.125 2.125zM24.273 7.717a.902.902 0 001.28 0l3.77-3.77a.905.905 0 00-1.28-1.28l-3.13 3.13-1.485-1.485a.905.905 0 00-1.28 1.28l2.125 2.125zM8.353 14.676a4.21 4.21 0 00-4.206-4.206 4.21 4.21 0 00-4.206 4.206c0 1.377.665 2.6 1.69 3.369a4.202 4.202 0 00-1.69 3.368v5.378c0 .5.406.905.905.905h6.602c.5 0 .905-.405.905-.905v-5.378c0-1.377-.664-2.6-1.69-3.368a4.203 4.203 0 001.69-3.369zM4.147 12.28a2.399 2.399 0 012.396 2.396 2.399 2.399 0 01-2.396 2.396 2.399 2.399 0 01-2.396-2.396 2.399 2.399 0 012.396-2.396zm2.396 13.606H1.751v-4.473a2.399 2.399 0 012.396-2.396 2.399 2.399 0 012.396 2.396v4.473zM19.147 14.676a4.21 4.21 0 00-4.206-4.206 4.21 4.21 0 00-4.206 4.206c0 1.377.665 2.6 1.69 3.369a4.203 4.203 0 00-1.69 3.368v5.378c0 .5.405.905.905.905h6.602c.5 0 .905-.405.905-.905v-5.378c0-1.377-.664-2.6-1.69-3.368a4.203 4.203 0 001.69-3.369zm-4.206-2.396a2.399 2.399 0 012.396 2.396 2.399 2.399 0 01-2.396 2.396 2.399 2.399 0 01-2.396-2.396 2.399 2.399 0 012.396-2.396zm2.396 13.606h-4.792v-4.473a2.399 2.399 0 012.396-2.396 2.399 2.399 0 012.396 2.396v4.473zM28.251 18.045a4.202 4.202 0 001.69-3.369 4.21 4.21 0 00-4.206-4.206 4.21 4.21 0 00-4.206 4.206c0 1.377.665 2.6 1.69 3.369a4.203 4.203 0 00-1.69 3.368v5.378c0 .5.406.905.905.905h6.602c.5 0 .905-.405.905-.905v-5.378c0-1.377-.664-2.6-1.69-3.368zm-2.516-5.765a2.399 2.399 0 012.396 2.396 2.399 2.399 0 01-2.396 2.396 2.399 2.399 0 01-2.395-2.396 2.399 2.399 0 012.395-2.396zm2.396 13.606H23.34v-4.473a2.399 2.399 0 012.395-2.396 2.399 2.399 0 012.396 2.396v4.473z" />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" d="M0 0h30v30H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}