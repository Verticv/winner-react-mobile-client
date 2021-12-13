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
        return items.map((item, index) => (
            <>
                {item.link ? (
                    <a 
                        href={item.link}
                        key={item.id} 
                        className={`${cardClass} flex items-center`}
                        style={{marginBottom: items.length - 1 === index ? '18rem' : ''}}
                    >
                        <img className="z-20 object-contain" src={item.background} alt="background" />
                        <div style={{boxShadow: '0px 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.3)'}} className={`mr-8 text-4xl absolute z-20 right-0 w-56 h-20 rounded-full flex items-center justify-center text-white font-spoqaBold pt-px ${item.color}`}>{item.btnText}</div>
                    </a>
                ) : (
                    <button 
                        key={item.id} 
                        className={`${cardClass} flex items-center`} 
                        onClick={() => history.push(item.path)}
                        style={{marginBottom: items.length - 1 === index ? '18rem' : ''}}
                    >
                        <img className="z-20 object-contain" src={item.background} alt="background" />
                        <div style={{boxShadow: '0px 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.3)'}} className={`mr-8 text-4xl absolute z-20 right-0 w-56 h-20 rounded-full flex items-center justify-center text-white font-spoqaBold pt-px ${item.color}`}>{item.btnText}</div>
                    </button>
                )}
            
            </>
        ));
    }

    return (
        <div className="flex flex-col px-7 lg:px-7 space-y-10px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default SportsBanner
