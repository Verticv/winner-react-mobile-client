import React from 'react'
import FishingBanner from '../../images/gameBanner/17.png'
import './GameBanners.css'

const FishingGameBanner = () => {

    const gamesArray = [
        { id: 0, background: FishingBanner, color: "bg-blue-r3384ca", btnText: "게임시작", class: "" },
    ];
    const cardClass = "group relative flex justify-end w-full transition cursor-pointer overflow-hidden"

    function CardList({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                className={`${cardClass} flex items-center`} 
            >
                <img className="z-20 object-contain" src={item.background} alt="background" />
                <div className={`mr-0 sm:mr-9 md:mr-10 text-xl  shadow-plain3 absolute z-20 right-8px w-28 h-12 rounded-full flex items-center justify-center text-white font-spoqaBold text-12px pt-px ${item.color}`}>{item.btnText}</div>
            </div>
        ));
    }
    return (
        <div className="flex flex-col px-3.5 lg:px-7 space-y-10px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default FishingGameBanner
