import React from 'react'
import MinigameBanner1 from '../../images/gameBanner/12.png'
import MinigameBanner2 from '../../images/gameBanner/13.png'
import MinigameBanner3 from '../../images/gameBanner/14.png'
import MinigameBanner4 from '../../images/gameBanner/15.png'
import './GameBanners.css'

const MinigameBanner = () => {
    const cardClass = "group relative flex justify-end w-full transition cursor-pointer overflow-hidden"

    const gamesArray = [
        { id: 0, background: MinigameBanner1, color: "bg-purple-d03ab7", btnText: "게임시작", class: "", path: "/minigame/powerball" },
        { id: 1, background: MinigameBanner2, color: "bg-blue-r77a4e0", btnText: "게임시작", class: "", path: "/minigame/powerladder" },
        { id: 2, background: MinigameBanner3, color: "bg-orange-e39e90", btnText: "게임시작", class: "", path: "/minigame/speedkino" },
        { id: 3, background: MinigameBanner4, color: "bg-green-e3ba3c", btnText: "게임시작", class: "", path: "/minigame/kinoladder" }
    ];

    function CardList({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                className={`${cardClass} flex items-center`} 
            >
                <img className="z-20 object-contain" src={item.background} alt="background" />
                <div className={`mr-0 sm:mr-9 md:mr-10 text-xl shadow-sm absolute z-20 right-8px w-28 h-12 rounded-full flex items-center justify-center text-white font-spoqaBold text-12px pt-px ${item.color}`}>{item.btnText}</div>
            </div>
        ));
    }

    return (
        <div className="flex flex-col px-3.5 lg:px-7 space-y-10px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default MinigameBanner
