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
            <Path
                d="M25.048 0H10.56a.895.895 0 00-.633.262L4.364 5.826a.895.895 0 00-.262.633v22.646c0 .494.4.895.895.895h20.051c.495 0 .895-.4.895-.895V.895c0-.494-.4-.895-.895-.895zM9.665 3.056v2.507H7.158l2.507-2.507zM24.153 28.21H5.893V7.354h4.667c.495 0 .895-.401.895-.896V1.791h12.698v26.418z"
                fill="#564B93"
            />
            <Path
                d="M18.382 11.231a.892.892 0 001.266 0L21.49 9.39a.895.895 0 00-1.266-1.266l-1.123 1.123-.086.086-.406-.405a.895.895 0 10-1.266 1.266l1.039 1.038zM9.188 9.703a.895.895 0 100 1.79h5.473a.895.895 0 100-1.79H9.188zM18.382 15.505a.892.892 0 001.266 0l1.842-1.842a.895.895 0 00-1.266-1.266l-1.21 1.21-.405-.406a.895.895 0 00-1.266 1.265l1.039 1.04zM14.66 13.977H9.189a.895.895 0 100 1.79h5.473a.895.895 0 100-1.79zM18.382 19.78a.893.893 0 001.266 0l1.842-1.843a.895.895 0 00-1.266-1.266l-1.123 1.123-.086.086-.406-.405a.895.895 0 10-1.266 1.266l1.039 1.038zM14.66 18.251H9.189a.895.895 0 100 1.79h5.473a.895.895 0 100-1.79zM20.224 20.945l-1.21 1.21-.048-.05-.357-.356a.895.895 0 00-1.266 1.266l1.039 1.038a.892.892 0 001.266 0l1.842-1.842a.896.896 0 00-1.266-1.266zM14.66 22.525H9.189a.895.895 0 000 1.79h5.473a.895.895 0 100-1.79z"
                fill="#564B93"
            />
        </Svg>
    )
}