import React from 'react'
import MinigameBanner1 from '../../images/gameBanner/12.png'
import MinigameBanner2 from '../../images/gameBanner/13.png'
import MinigameBanner3 from '../../images/gameBanner/14.png'
import MinigameBanner4 from '../../images/gameBanner/15.png'
import './GameBanners.css'

const MinigameBanner = () => {
    const cardClass = "group relative flex justify-end w-full transition cursor-pointer overflow-hidden"

    const gamesArray = [
        { id: 0, background: MinigameBanner1, imgText: '파워볼', textMarginBottom: '29.3rem', textMarginTop: '4.5rem', color: "bg-purple-d03ab7", btnText: "게임시작", class: "", path: "/minigame/powerball" },
        { id: 1, background: MinigameBanner2, imgText: '파워사다리', textMarginBottom: '26.5rem', textMarginTop: '4.5rem', color: "bg-blue-r77a4e0", btnText: "게임시작", class: "", path: "/minigame/powerladder" },
        { id: 2, background: MinigameBanner3, imgText: '스피드키노', textMarginBottom: '27rem', textMarginTop: '5rem', color: "bg-orange-e39e90", btnText: "게임시작", class: "", path: "/minigame/speedkino" },
        { id: 3, background: MinigameBanner4, imgText: '키노사다리', textMarginBottom: '27rem', textMarginTop: '4.5rem', color: "bg-green-e3ba3c", btnText: "게임시작", class: "", path: "/minigame/kinoladder" },
    ];

    function CardList({ items }) {
        return items.map((item, index) => (
            <div 
                key={item.id} 
                className={`${cardClass} flex items-center`}
                style={{marginBottom: items.length - 1 === index ? '18rem' : ''}}
            >
                <img className="z-20 object-contain" src={item.background} alt="background" />
                <div style={{fontSize: '2.625rem', marginRight: item.textMarginBottom, marginTop: item.textMarginTop}} className={`mr-72 text-4xl absolute z-20 right-0 justify-center text-black font-spoqaMedium`}>{item.imgText}</div>
                <div style={{boxShadow: '0px 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.3)'}} className={`mr-8 text-4xl absolute z-20 right-0 w-56 h-20 rounded-full flex items-center justify-center text-white font-spoqaBold pt-px ${item.color}`}>{item.btnText}</div>
            </div>
        ));
    }

    return (
        <div className="flex flex-col px-7 lg:px-7 space-y-10px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default MinigameBanner
