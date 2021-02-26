import * as React from "react"

export default (props) => {
    return (
        <svg
            width={375}
            height={812}
            viewBox="0 0 375 812"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill="url(#prefix__paint0_linear)"
                fillOpacity={0.25}
                d="M0 0h375v812H0z"
            />
            <defs>
                <linearGradient
                    id="prefix__paint0_linear"
                    x1={-23.5}
                    y1={-25.621}
                    x2={540.148}
                    y2={624.044}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E8B7E5" />
                    <stop offset={0.182} stopColor="#D4C3FC" />
                    <stop offset={0.729} stopColor="#A5C5FC" />
                </linearGradient>
            </defs>
        </svg>
    )
}