import React from 'react'
import VirtualBanner from '../../images/gameBanner/16.png'
import './GameBanners.css'

const ARgameBanner = () => {
    const gamesArray = [
        { id: 0, background: VirtualBanner, imgText: '키론가상게임', textMarginBottom: '25rem', textMarginTop: '5rem', color: "bg-green-r7bd26a", btnText: "게임시작", class: "", path: "/minigame/powerball" },
    ];
    const cardClass = "group relative flex justify-end w-full transition cursor-pointer overflow-hidden"

    function CardList({ items }) {
        return items.map((item, index) => (
            <div 
                key={item.id} 
                className={`${cardClass} flex items-center`}
                style={{marginBottom: items.length - 1 === index ? '18rem' : '1.875rem'}}
            >
                <img className="z-20 object-contain" src={item.background} alt="background" />
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

export default ARgameBanner
