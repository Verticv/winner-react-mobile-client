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
        // { id: 6, img: WinnerBg, color: "bg-gray-b2b2b2", btnText: "준비중", class: "" },
        // { id: 7, img: WinnerBg, color: "bg-gray-b2b2b2", btnText: "준비중", class: "" },
    ];

    function CardList({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                className={`${cardClass} flex items-center`} 
                onClick={() => item.id !==6 && item.id !==7 && history.push('/live-casino')}
            >
                <img className="z-20 object-contain" src={item.img} alt="background" />
                <div className={`mr-0 sm:mr-9 md:mr-10 text-xl shadow-sm absolute z-20 right-8px w-28 h-12 rounded-full flex items-center justify-center text-white font-spoqaBold pt-px ${item.color}`}>{item.btnText}</div>
            </div>
        ));
    }

    return (
        <div className="flex flex-col px-3.5 lg:px-7 space-y-10px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default LiveCasinoBanner
