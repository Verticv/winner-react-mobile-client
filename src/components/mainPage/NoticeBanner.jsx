import React from 'react'
import SpeakerIcon from '../../images/speaker.png'
import './NoticeBanner.css'

const NoticeBanner = () => {
    return (
        <div style={{height: '5.5rem'}} className="flex items-center h-20 w-full bg-blue-banner overflow-x-hidden pr-8">
            <div className="bg-blue-banner z-20 h-full flex-shrink-0 flex items-center"><img className='pl-8 pr-20px object-contain h-9' src={SpeakerIcon} alt="speakerIcon"/></div>
            <span id="banner" className="font-spoqa text-4xl text-white z-10 tracking-tight flex-shrink-0">※ 필수!! 입금하시기전 계좌문의 후 입금해 주시기 바랍니다.</span>
        </div>
    )
}

export default NoticeBanner
