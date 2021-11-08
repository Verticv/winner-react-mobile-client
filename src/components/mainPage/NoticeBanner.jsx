import React from 'react'
import SpeakerIcon from '../../images/speaker.png'
import './NoticeBanner.css'

const NoticeBanner = () => {
    return (
        <div className="flex items-center h-32px w-full bg-blue-banner overflow-x-hidden">
            <div className="bg-blue-banner z-20"><img className='pl-11px pr-10px' src={SpeakerIcon} alt="speakerIcon"/></div>
            <span id="banner" className="font-spoqa text-14px text-white z-10 tracking-tight">※ 필수!! 입금하시기전 계좌문의 후 입금해 주시기 바랍니다.</span>
        </div>
    )
}

export default NoticeBanner
