import React from 'react'
import { useHistory } from 'react-router'
import SportsBanner1 from '../../images/gameBanner/8.png'
import SportsBanner2 from '../../images/gameBanner/9.png'
import SportsBanner3 from '../../images/gameBanner/10.png'
import './GameBanners.css'

const SportsBanner = () => {

    const history = useHistory();

    const gamesArray = [
        { id: 0, background: SportsBanner1, imgText: '라이브베팅', textMarginBottom: '27rem', textMarginTop: '8rem', color: "bg-yellow-e3ba3c", btnText: "게임시작", class: "" },
        { id: 1, background: SportsBanner2, imgText: '조합베팅', textMarginBottom: '28rem', textMarginTop: '8rem', color: "bg-blue-r3384ca", btnText: "게임시작", class: "", path: "/bet-combination" },
        { id: 2, background: SportsBanner3, imgText: '스페셜', textMarginBottom: '30rem', textMarginTop: '8rem', color: "bg-orange-e39e90", btnText: "게임시작", class: "", path: "/bet-combination" },
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
                        style={{marginBottom: items.length - 1 === index ? '18rem' : '1.875rem'}}
                    >
                        <img className="z-20 object-contain" src={item.background} alt="background" />
                        <div style={{fontSize: '2.625rem', marginRight: item.textMarginBottom, marginTop: item.textMarginTop}} className={`mr-72 text-4xl absolute z-20 right-0 justify-center text-black font-spoqaMedium`}>{item.imgText}</div>
                        <div style={{boxShadow: '0px 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.3)', width: '13.125rem'}} className={`mr-8 text-4xl absolute z-20 right-0 h-20 rounded-full flex items-center justify-center text-white font-spoqaBold ${item.color}`}><span className='mt-1.5'>{item.btnText}</span></div>
                    </a>
                ) : (
                    <button 
                        key={item.id} 
                        className={`${cardClass} flex items-center`} 
                        onClick={() => history.push(item.path)}
                        style={{marginBottom: items.length - 1 === index ? '18rem' : '1.875rem'}}
                    >
                        <img className="z-20 object-contain" src={item.background} alt="background" />
                        <div style={{fontSize: '2.625rem', marginRight: item.textMarginBottom, marginTop: item.textMarginTop}} className={`mr-72 text-4xl absolute z-20 right-0 justify-center text-black font-spoqaMedium`}>{item.imgText}</div>
                        <div style={{boxShadow: '0px 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.3)', width: '13.125rem'}} className={`mr-8 text-4xl absolute z-20 right-0 h-20 rounded-full flex items-center justify-center text-white font-spoqaBold ${item.color}`}><span className='mt-1.5'>{item.btnText}</span></div>
                    </button>
                )}
            
            </>
        ));
    }

    return (
        <div className="flex flex-col px-7">
            <CardList items={gamesArray} />
        </div>
    )
}

export default SportsBanner
