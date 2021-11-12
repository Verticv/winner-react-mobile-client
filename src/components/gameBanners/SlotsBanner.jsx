import React from 'react'
import SlotGameBanner from '../../images/gameBanner/7.png'
import './GameBanners.css'

const SlotsBanner = () => {
    const cardClass = "group relative flex justify-end w-full transition cursor-pointer overflow-hidden"

    const gamesArray = [
        { id: 0, img: SlotGameBanner, color: "bg-green-r7bd26a", btnText: "게임시작", class: "" },
        // { id: 6, img: WinnerBg, color: "bg-gray-b2b2b2", btnText: "준비중", class: "" },
        // { id: 7, img: WinnerBg, color: "bg-gray-b2b2b2", btnText: "준비중", class: "" },
    ];
    function CardList({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                className={`${cardClass} flex items-center`} 
            >
                <img className="z-20 object-contain" src={item.img} alt="background" />
                <div style={{fontSize:"10px"}} className={`shadow-sm absolute z-20 right-8px w-64px h-24px rounded-full flex items-center justify-center text-white font-spoqaBold pt-px ${item.color}`}>{item.btnText}</div>
            </div>
        ));
    }

    return (
        <div className="flex flex-col w-screen px-10px space-y-10px pb-60px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default SlotsBanner
