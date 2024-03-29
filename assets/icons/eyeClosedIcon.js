import * as React from "react"
import Svg, { Path } from "react-native-svg"
export default (props) => {
    return (
        <Svg
            width={23}
            height={23}
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.5 5.75a9.363 9.363 0 018.452 5.27 9.244 9.244 0 01-2.31 2.99l1.352 1.352a11.31 11.31 0 003.048-4.341c-1.658-4.207-5.75-7.188-10.542-7.188-1.217 0-2.386.192-3.488.547l1.58 1.58a9.687 9.687 0 011.908-.21zm-1.025 1.092l1.983 1.984c.546.24.987.68 1.227 1.227l1.984 1.984a4.49 4.49 0 00.134-1.026c.01-2.376-1.926-4.303-4.303-4.303-.355 0-.69.048-1.025.134zM1.926 3.71l2.569 2.568a11.249 11.249 0 00-3.537 4.744c1.658 4.207 5.75 7.187 10.542 7.187a11.24 11.24 0 004.14-.785l3.277 3.277 1.352-1.351L3.277 2.348l-1.35 1.36zm7.188 7.187l2.5 2.502c-.037.01-.076.019-.114.019a2.397 2.397 0 01-2.396-2.396c0-.048.01-.077.01-.125zM5.855 7.638l1.677 1.677a4.409 4.409 0 00-.345 1.706 4.319 4.319 0 006.01 3.967l.938.94a9.998 9.998 0 01-2.635.364 9.363 9.363 0 01-8.453-5.271 9.49 9.49 0 012.808-3.383z"
                fill="#B4C5D2"
            />
        </Svg>
    )
}