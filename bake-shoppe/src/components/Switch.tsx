import React from "react";
import { useTheme } from "./ThemeContext";


function sliderSVG() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="42" viewBox="0 0 70 42" fill="none">
            <rect y="3" width="64" height="30" rx="15" fill="url(#paint0_linear_1067_189)" />
            <g filter="url(#filter0_ddd_1067_189)">
                <rect x="36" y="5" width="26" height="26" rx="13" fill="white" />
            </g>
            <defs>
                <filter id="filter0_ddd_1067_189" x="28" y="0" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1067_189" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_1067_189" result="effect2_dropShadow_1067_189" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_1067_189" result="effect3_dropShadow_1067_189" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1067_189" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1067_189" x1="-2" y1="20.5" x2="64" y2="20.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFB800" />
                    <stop offset="1" stop-color="#FF00B8" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const Switch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="switch">
            <input type="checkbox" checked={true} onClick={toggleTheme} />
            <div className="slider">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="42" viewBox="0 0 70 42" fill="none">
                    <rect y="3" width="64" height="30" rx="15" fill="url(#paint0_linear_1067_189)" />
                    <g filter="url(#filter0_ddd_1067_189)">
                        <rect x="36" y="5" width="26" height="26" rx="13" fill="white" />
                    </g>
                    <defs>
                        <filter id="filter0_ddd_1067_189" x="28" y="0" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="3" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1067_189" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow_1067_189" result="effect2_dropShadow_1067_189" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="3" />
                            <feGaussianBlur stdDeviation="4" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                            <feBlend mode="normal" in2="effect2_dropShadow_1067_189" result="effect3_dropShadow_1067_189" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1067_189" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_1067_189" x1="-2" y1="20.5" x2="64" y2="20.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFB800" />
                            <stop offset="1" stop-color="#FF00B8" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </label>
    )

}

export default Switch