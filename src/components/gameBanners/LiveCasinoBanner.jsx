import React from 'react'
import EvolutionBg from '../../images/cardBg/1.png'
import AsiaBg from '../../images/cardBg/2.png'
import PragmaticBg from '../../images/cardBg/3.png'
import DgBg from '../../images/cardBg/4.png'
import SexyBg from '../../images/cardBg/5.png'
import BigBg from '../../images/cardBg/6.png'
import './GameBanners.css'
import { useHistory } from 'react-router-dom'

const LiveCasinoBanner = () => {

    const history = useHistory()
    const cardClass = "group relative flex justify-end w-full transition cursor-pointer overflow-hidden"

    const gamesArray = [
        { id: 0, img: EvolutionBg, color: "bg-teal-r4eb2ba", btnText: "게임시작", class: "" },
        { id: 1, img: AsiaBg, color: "bg-blue-r3384ca", btnText: "게임시작", class: "" },
        { id: 2, img: PragmaticBg, color: "bg-purple-d03ab7", btnText: "게임시작", class: "" },
        { id: 3, img: DgBg, color: "bg-orange-e39e90", btnText: "게임시작", class: "" },
        { id: 4, img: SexyBg, color: "bg-red-db4a4a", btnText: "게임시작", class: "" },
        { id: 5, img: BigBg, color: "bg-yellow-e3ba3c", btnText: "게임시작", class: "" },
    ];

    function CardList({ items }) {
        return items.map((item, index) => (
            <div 
                key={item.id} 
                className={`${cardClass} flex items-center`} 
                onClick={() => item.id !==6 && item.id !==7 && history.push('/live-casino')}
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

export default LiveCasinoBanner
