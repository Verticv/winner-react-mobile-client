import React from 'react'
import SlotGameBanner from '../../images/gameBanner/7.png'
import './GameBanners.css'

const SlotsBanner = () => {
    const cardClass = "group relative flex justify-end w-full transition cursor-pointer overflow-hidden"

    const gamesArray = [
        { id: 0, img: SlotGameBanner, color: "bg-green-r7bd26a", btnText: "게임시작", class: "" },
    ];
    function CardList({ items }) {
        return items.map((item, index) => (
            <div 
                key={item.id} 
                className={`${cardClass} flex items-center`}
                style={{marginBottom: items.length - 1 === index ? '18rem' : ''}}
            >
                <img className="z-20 object-contain" src={item.img} alt="background" />
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

export default SlotsBanner
