import React, { useRef, useEffect } from 'react'

export default function Slider() {
    const loadTextRef = useRef<null | HTMLSpanElement>(null);
    const loadDoneRef = useRef<null | HTMLSpanElement>(null);

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
        loadTextRef.current?.classList.add('fading')
        loadDoneRef.current?.classList.add('fading')
    }

    function handleLoadDone() {
        loadDoneRef.current?.classList.remove('hide')
    }

    function handleRemoveText() {
        loadTextRef.current?.classList.add('hide')
        loadDoneRef.current?.classList.add('hide')
    }
    return (
        <div className='greeting-slider'>
            <span ref={loadTextRef} className='load-text'>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </span>
            <span ref={loadDoneRef} className='load-done hide'>&#123;&#10003;&#125;</span>
        </div>
    )
}
