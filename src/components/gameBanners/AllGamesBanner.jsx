import React from 'react'
import EvolutionBg from '../../images/cardBg/1.png'
import AsiaBg from '../../images/cardBg/2.png'
import PragmaticBg from '../../images/cardBg/3.png'
import DgBg from '../../images/cardBg/4.png'
import SexyBg from '../../images/cardBg/5.png'
import BigBg from '../../images/cardBg/6.png'
import SlotGameBanner from '../../images/gameBanner/7.png'
import SportsBanner1 from '../../images/gameBanner/8.png'
import SportsBanner2 from '../../images/gameBanner/9.png'
import SportsBanner3 from '../../images/gameBanner/10.png'
import EsportsBannerImage from '../../images/gameBanner/11.png'
import MinigameBanner1 from '../../images/gameBanner/12.png'
import MinigameBanner2 from '../../images/gameBanner/13.png'
import MinigameBanner3 from '../../images/gameBanner/14.png'
import MinigameBanner4 from '../../images/gameBanner/15.png'
import VirtualBanner from '../../images/gameBanner/16.png'
import FishingBanner from '../../images/gameBanner/17.png'

const AllGamesBanner = () => {

    const cardClass = "group relative flex justify-end w-full transition cursor-pointer overflow-hidden"

    const gamesArray = [
        { id: 0, img: EvolutionBg, color: "bg-teal-r4eb2ba", btnText: "게임시작", class: "" },
        { id: 1, img: AsiaBg, color: "bg-blue-r3384ca", btnText: "게임시작", class: "" },
        { id: 2, img: PragmaticBg, color: "bg-purple-d03ab7", btnText: "게임시작", class: "" },
        { id: 3, img: DgBg, color: "bg-orange-e39e90", btnText: "게임시작", class: "" },
        { id: 4, img: SexyBg, color: "bg-red-db4a4a", btnText: "게임시작", class: "" },
        { id: 5, img: BigBg, color: "bg-yellow-e3ba3c", btnText: "게임시작", class: "" },
        { id: 6, img: SlotGameBanner, color: "bg-green-r7bd26a", btnText: "게임시작", class: "" },
        { id: 7, img: SportsBanner1, color: "bg-yellow-e3ba3c", btnText: "게임시작", class: "" },
        { id: 8, img: SportsBanner2, color: "bg-blue-r3384ca", btnText: "게임시작", class: "", path: "/bet-combination" },
        { id: 9, img: SportsBanner3, color: "bg-orange-e39e90", btnText: "게임시작", class: "", path: "/bet-combination" },
        { id: 10, img: EsportsBannerImage, color: "bg-purple-a898ee", btnText: "게임시작", class: "" },
        { id: 11, img: MinigameBanner1, color: "bg-purple-d03ab7", btnText: "게임시작", class: "", path: "/minigame/powerball" },
        { id: 12, img: MinigameBanner2, color: "bg-blue-r77a4e0", btnText: "게임시작", class: "", path: "/minigame/powerladder" },
        { id: 13, img: MinigameBanner3, color: "bg-orange-e39e90", btnText: "게임시작", class: "", path: "/minigame/speedkino" },
        { id: 14, img: MinigameBanner4, color: "bg-green-e3ba3c", btnText: "게임시작", class: "", path: "/minigame/kinoladder" },
        { id: 15, img: VirtualBanner, color: "bg-green-r7bd26a", btnText: "게임시작", class: "", path: "/minigame/powerball" },
        { id: 16, img: FishingBanner, color: "bg-blue-r3384ca", btnText: "게임시작", class: "" },

        // { id: 6, img: WinnerBg, color: "bg-gray-b2b2b2", btnText: "준비중", class: "" },
        // { id: 7, img: WinnerBg, color: "bg-gray-b2b2b2", btnText: "준비중", class: "" },
    ];

    function CardList({ items }) {
        return items.map((item, index) => (
            <div 
                key={item.id} 
                className={`${cardClass} flex items-center`}
                style={{marginBottom: items.length - 1 === index ? '18rem' : ''}}
            >
                <img className="z-20 object-contain" src={item.img} alt="background" />
                <div className={`mr-8 text-4xl shadow-sm absolute z-20 right-0 w-56 h-20 rounded-full flex items-center justify-center text-white font-spoqaBold pt-px ${item.color}`}>{item.btnText}</div>
            </div>
        ));
    }
    
    return (
        <div className="flex flex-col px-7 lg:px-7 space-y-10px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default AllGamesBanner
