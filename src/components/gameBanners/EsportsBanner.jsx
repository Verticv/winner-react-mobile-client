import React from 'react'
import EsportsBannerImage from '../../images/gameBanner/11.png'
import './GameBanners.css'

const EsportsBanner = () => {
    const gamesArray = [
        { id: 0, background: EsportsBannerImage, color: "bg-purple-a898ee", btnText: "게임시작", class: "" },
    ];
    const cardClass = "group relative flex justify-end w-full transition cursor-pointer overflow-hidden"

    function CardList({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                className={`${cardClass} flex items-center`} 
            >
                <img className="z-20 object-contain" src={item.background} alt="background" />
                <div className={`shadow-plain3 absolute z-20 right-6px w-64px h-24px rounded-full flex items-center justify-center text-white font-spoqaBold text-12px pt-px ${item.color}`}>{item.btnText}</div>
            </div>
        ));
    }

    return (
        <div className="flex flex-col w-screen px-10px space-y-10px pb-60px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default EsportsBanner
