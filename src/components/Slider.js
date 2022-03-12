import React, { useRef, useEffect } from 'react'
import { GiCheckMark } from 'react-icons/gi';
import { IconContext } from "react-icons";

export default function Slider() {
    const loadTextRef = useRef();
    const loadDoneRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            handleLoadDone()
            setTimeout(() => {
                handeFadeOut()
                setTimeout(() => {
                    handleRemoveText();
                }, 500)
            }, 1700)
        }, 1500)
    })

    function handeFadeOut() {
        loadTextRef.current.classList.add('fading')
        loadDoneRef.current.classList.add('fading')
    }

    function handleLoadDone() {
        loadDoneRef.current.classList.remove('hide')
    }

    function handleRemoveText() {
        loadTextRef.current.classList.add('hide')
        loadDoneRef.current.classList.add('hide')
    }
    return (
        <div className='greeting-slider'>
            <span ref={loadTextRef} className='load-text'>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </span>
            <span ref={loadDoneRef} className='load-done hide'>&#123;&#10004;&#125;</span>
        </div>
    )
}
