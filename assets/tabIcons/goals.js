import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default (props) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M22.238 5.74l1.164-1.165a.704.704 0 00-.438-1.197l-2.16-.183-.182-2.159a.703.703 0 00-1.197-.438L18.26 1.762A11.936 11.936 0 0012 0a11.922 11.922 0 00-8.485 3.515A11.922 11.922 0 000 12c0 3.205 1.248 6.219 3.515 8.485A11.922 11.922 0 0012 24c3.205 0 6.219-1.248 8.485-3.515A11.921 11.921 0 0024 12c0-2.226-.608-4.378-1.762-6.26zm-2.785-1.835c.03.342.3.613.642.642l1.242.105-1.681 1.681-1.834-.154-.155-1.834 1.681-1.682.105 1.242zM14.391 12A2.393 2.393 0 0112 14.39 2.393 2.393 0 019.61 12a2.393 2.393 0 013.508-2.112l-1.615 1.615a.703.703 0 10.994.994l1.615-1.615c.178.334.279.714.279 1.118zm-.251-3.134A3.776 3.776 0 0012 8.203 3.801 3.801 0 008.203 12 3.801 3.801 0 0012 15.797 3.801 3.801 0 0015.797 12c0-.793-.245-1.53-.663-2.14l2.008-2.008A6.578 6.578 0 0118.609 12 6.617 6.617 0 0112 18.61 6.617 6.617 0 015.39 12 6.617 6.617 0 0112 5.39c1.57 0 3.013.55 4.148 1.468L14.14 8.866zm5.35 10.625A10.524 10.524 0 0112 22.594c-2.83 0-5.49-1.102-7.49-3.103A10.524 10.524 0 011.405 12c0-2.83 1.102-5.49 3.103-7.49C6.51 2.507 9.17 1.405 12 1.405c1.851 0 3.644.476 5.235 1.382l-.793.793a.703.703 0 00-.204.556l.095 1.122A7.967 7.967 0 0012 3.984C7.58 3.984 3.984 7.58 3.984 12S7.58 20.016 12 20.016 20.016 16.42 20.016 12a7.967 7.967 0 00-1.275-4.333l1.122.095.059.002h.01l.028-.001.045-.004.028-.004a.722.722 0 00.044-.009l.028-.007a.73.73 0 00.11-.04l.026-.012a.785.785 0 00.04-.022l.024-.014a.807.807 0 00.04-.03l.019-.013a.708.708 0 00.055-.05l.793-.793A10.54 10.54 0 0122.594 12c0 2.83-1.102 5.49-3.103 7.49z"
                fill="#000"
            />
        </Svg>
    )
}