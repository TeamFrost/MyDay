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
                d="M11.1 6.125c3.474 0 6.572 1.997 8.085 5.156-1.512 3.16-4.61 5.156-8.085 5.156-3.474 0-6.572-1.996-8.085-5.156 1.512-3.16 4.61-5.156 8.085-5.156zm0-1.875c-4.583 0-8.497 2.916-10.083 7.031 1.586 4.116 5.5 7.031 10.083 7.031s8.498-2.915 10.083-7.03C19.598 7.165 15.683 4.25 11.1 4.25zm0 4.688c1.265 0 2.292 1.05 2.292 2.343 0 1.294-1.027 2.344-2.292 2.344s-2.292-1.05-2.292-2.344c0-1.293 1.027-2.344 2.292-2.344zm0-1.876c-2.273 0-4.125 1.894-4.125 4.22 0 2.324 1.852 4.218 4.125 4.218 2.273 0 4.125-1.894 4.125-4.219S13.373 7.062 11.1 7.062z"
                fill="#B4C5D2"
            />
        </Svg>
    )
}