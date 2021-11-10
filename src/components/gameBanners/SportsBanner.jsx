import React from 'react'
import { useHistory } from 'react-router'
import SportsBanner1 from '../../images/gameBanner/8.png'
import SportsBanner2 from '../../images/gameBanner/9.png'
import SportsBanner3 from '../../images/gameBanner/10.png'
import './GameBanners.css'

const SportsBanner = () => {

    const history = useHistory();

    const gamesArray = [
        { id: 0, background: SportsBanner1, color: "bg-yellow-e3ba3c", btnText: "게임시작", class: "" },
        { id: 1, background: SportsBanner2, color: "bg-blue-r3384ca", btnText: "게임시작", class: "", path: "/bet-combination" },
        { id: 2, background: SportsBanner3, color: "bg-orange-e39e90", btnText: "게임시작", class: "", path: "/bet-combination" },
    ];

    const cardClass = "group relative flex justify-end w-full transition cursor-pointer overflow-hidden"

    function CardList({ items }) {
        return items.map(item => (
            <>
                {item.link ? (
                    <a 
                        href={item.link}
                        key={item.id} 
                        className={`${cardClass} flex items-center`} 
                    >
                        <img className="z-20 object-contain" src={item.background} alt="background" />
                        <div className={`shadow-plain3 absolute z-20 right-6px w-64px h-24px rounded-full flex items-center justify-center text-white font-spoqaBold text-12px pt-px ${item.color}`}>{item.btnText}</div>
                    </a>
                ) : (
                    <button 
                        key={item.id} 
                        className={`${cardClass} flex items-center`} 
                        onClick={() => history.push(item.path)}
                    >
                        <img className="z-20 object-contain" src={item.background} alt="background" />
                        <div className={`shadow-plain3 absolute z-20 right-6px w-64px h-24px rounded-full flex items-center justify-center text-white font-spoqaBold text-12px pt-px ${item.color}`}>{item.btnText}</div>
                    </button>
                )}
            
            </>
        ));
    }

    return (
        <div className="flex flex-col w-screen px-10px space-y-10px pb-60px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default SportsBanner
