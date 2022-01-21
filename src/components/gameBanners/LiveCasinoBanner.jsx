import React from 'react'
import EvolutionBg from '../../images/cardBg/1.png'
import AsiaBg from '../../images/cardBg/2.png'
import PragmaticBg from '../../images/cardBg/3.png'
import DgBg from '../../images/cardBg/4.png'
import SexyBg from '../../images/cardBg/5.png'
import BigBg from '../../images/cardBg/6.png'
import './GameBanners.css'

const LiveCasinoBanner = () => {

    const cardClass = "group relative flex justify-end w-full transition cursor-pointer overflow-hidden"

    const gamesArray = [
        { id: 0, img: EvolutionBg, imgText: '에볼루션', textMarginBottom: '28.2rem', textMarginTop: '6rem', color: "bg-teal-r4eb2ba", btnText: "게임시작", class: "" },
        { id: 1, img: AsiaBg, imgText: '아시아게이밍', textMarginBottom: '26rem', textMarginTop: '8rem', color: "bg-blue-r3384ca", btnText: "게임시작", class: "" },
        { id: 2, img: PragmaticBg, imgText: '프라그메틱플레이', textMarginBottom: '24rem', textMarginTop: '8rem', color: "bg-purple-d03ab7", btnText: "게임시작", class: "" },
        { id: 3, img: DgBg, imgText: '드림게이밍', textMarginBottom: '27rem', textMarginTop: '8rem', color: "bg-orange-e39e90", btnText: "게임시작", class: "" },
        { id: 4, img: SexyBg, imgText: '섹시게이밍', textMarginBottom: '28rem', textMarginTop: '7rem', color: "bg-red-db4a4a", btnText: "게임시작", class: "" },
        { id: 5, img: BigBg, imgText: '빅게이밍', textMarginBottom: '28rem', textMarginTop: '4.5rem', color: "bg-yellow-e3ba3c", btnText: "게임시작", class: "" },
    ];

    function CardList({ items }) {
        return items.map((item, index) => (
            <div 
                key={item.id} 
                className={`${cardClass} flex items-center`} 
                style={{marginBottom: items.length - 1 === index ? '13.625rem' : '1.875rem'}}
            >
                <img className="z-20 object-contain" src={item.img} alt="background" />
                <div style={{fontSize: '2.625rem', marginRight: item.textMarginBottom, marginTop: item.textMarginTop}} className={`mr-72 text-4xl absolute z-20 right-0 justify-center text-black font-spoqaMedium`}>{item.imgText}</div>
                <div style={{boxShadow: '0px 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.3)', width: '13.125rem'}} className={`mr-8 text-4xl absolute z-20 right-0 h-20 rounded-full flex items-center justify-center text-white font-spoqaBold ${item.color}`}><span className='mt-1.5'>{item.btnText}</span></div>
            </div>
        ));
    }

    return (
        <div className="flex flex-col px-7">
            <CardList items={gamesArray} />
        </div>
    )
}

export default LiveCasinoBanner
