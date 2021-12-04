import React from 'react'
import EsportsBannerImage from '../../images/gameBanner/11.png'
import './GameBanners.css'

const EsportsBanner = () => {
    const gamesArray = [
        { id: 0, background: EsportsBannerImage, color: "bg-purple-a898ee", btnText: "게임시작", class: "" },
    ];
    const cardClass = "group relative flex justify-end w-full transition cursor-pointer overflow-hidden"

    function CardList({ items }) {
        return items.map((item, index) => (
            <div 
                key={item.id} 
                className={`${cardClass} flex items-center`}
                style={{marginBottom: items.length - 1 === index ? '18rem' : ''}}
            >
                <img className="z-20 object-contain" src={item.background} alt="background" />
                <div className={`mr-8 text-4xl shadow-sm absolute z-20 right-0 w-56 h-20 rounded-full flex items-center justify-center text-white font-spoqaBold text-12px pt-px ${item.color}`}>{item.btnText}</div>
            </div>
        ));
    }

    return (
        <div className="flex flex-col px-7 lg:px-7 space-y-10px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default EsportsBanner
