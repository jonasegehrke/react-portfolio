import React from 'react'

export default function Blob() {
    return (
        <svg className="blob" id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <clipPath id="blob">
                    <path fill="#474bff" 
                        d="M391,352Q313,464,184.5,418.5Q56,373,60,242.5Q64,112,189,62.5Q314,13,391.5,126.5Q469,240,391,352Z" />
                </clipPath>
            </defs>
            <image x="0" y="0" width="100%" height="100%" clipPath="url(#blob)"
                xlinkHref={'/images/profile.jpg'} preserveAspectRatio="xMidYMid slice"></image>
        </svg>

        
    )
}
