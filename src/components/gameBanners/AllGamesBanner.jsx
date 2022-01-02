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
        { id: 0, img: EvolutionBg, imgText: '에볼루션', textMarginBottom: '28.2rem', textMarginTop: '6rem', color: "bg-teal-r4eb2ba", btnText: "게임시작", class: "" },
        { id: 1, img: AsiaBg, imgText: '아시아게이밍', textMarginBottom: '26rem', textMarginTop: '8rem', color: "bg-blue-r3384ca", btnText: "게임시작", class: "" },
        { id: 2, img: PragmaticBg, imgText: '프라그메틱플레이', textMarginBottom: '24rem', textMarginTop: '8rem', color: "bg-purple-d03ab7", btnText: "게임시작", class: "" },
        { id: 3, img: DgBg, imgText: '드림게이밍', textMarginBottom: '27rem', textMarginTop: '8rem', color: "bg-orange-e39e90", btnText: "게임시작", class: "" },
        { id: 4, img: SexyBg, imgText: '섹시게이밍', textMarginBottom: '28rem', textMarginTop: '7rem', color: "bg-red-db4a4a", btnText: "게임시작", class: "" },
        { id: 5, img: BigBg, imgText: '빅게이밍', textMarginBottom: '28rem', textMarginTop: '4.5rem', color: "bg-yellow-e3ba3c", btnText: "게임시작", class: "" },
        { id: 6, img: SlotGameBanner, imgText: '케이플레이슬롯', textMarginBottom: '25rem', textMarginTop: '5rem', color: "bg-green-r7bd26a", btnText: "게임시작", class: "" },
        { id: 7, img: SportsBanner1, imgText: '라이브베팅', textMarginBottom: '27rem', textMarginTop: '8rem', color: "bg-yellow-e3ba3c", btnText: "게임시작", class: "" },
        { id: 8, img: SportsBanner2, imgText: '조합베팅', textMarginBottom: '28rem', textMarginTop: '8rem', color: "bg-blue-r3384ca", btnText: "게임시작", class: "", path: "/bet-combination" },
        { id: 9, img: SportsBanner3, imgText: '스페셜', textMarginBottom: '30rem', textMarginTop: '8rem', color: "bg-orange-e39e90", btnText: "게임시작", class: "", path: "/bet-combination" },
        { id: 10, img: EsportsBannerImage, imgText: '인플레이매트릭스', textMarginBottom: '23rem', textMarginTop: '5rem', color: "bg-purple-a898ee", btnText: "게임시작", class: "" },
        { id: 11, img: MinigameBanner1, imgText: '파워볼', textMarginBottom: '29.3rem', textMarginTop: '4.5rem', color: "bg-purple-d03ab7", btnText: "게임시작", class: "", path: "/minigame/powerball" },
        { id: 12, img: MinigameBanner2, imgText: '파워사다리', textMarginBottom: '26.5rem', textMarginTop: '4.5rem', color: "bg-blue-r77a4e0", btnText: "게임시작", class: "", path: "/minigame/powerladder" },
        { id: 13, img: MinigameBanner3, imgText: '스피드키노', textMarginBottom: '27rem', textMarginTop: '5rem', color: "bg-orange-e39e90", btnText: "게임시작", class: "", path: "/minigame/speedkino" },
        { id: 14, img: MinigameBanner4, imgText: '키노사다리', textMarginBottom: '27rem', textMarginTop: '4.5rem', color: "bg-green-e3ba3c", btnText: "게임시작", class: "", path: "/minigame/kinoladder" },
        { id: 15, img: VirtualBanner, imgText: '키론가상게임', textMarginBottom: '25rem', textMarginTop: '5rem', color: "bg-green-r7bd26a", btnText: "게임시작", class: "", path: "/minigame/powerball" },
        { id: 16, img: FishingBanner, imgText: '케이플레이피싱', textMarginBottom: '24.5rem', textMarginTop: '5rem', color: "bg-blue-r3384ca", btnText: "게임시작", class: "" },
    ];

    function CardList({ items }) {
        return items.map((item, index) => (
            <div 
                key={item.id} 
                className={`${cardClass} flex items-center`}
                style={{marginBottom: items.length - 1 === index ? '18rem' : '1.875rem'}}
            >
                <img className="z-20 object-contain" src={item.img} alt="background" />
                <div style={{fontSize: '2.625rem', marginRight: item.textMarginBottom, marginTop: item.textMarginTop}} className={`mr-72 text-4xl absolute z-20 right-0 justify-center text-black font-spoqaMedium`}>{item.imgText}</div>
                <div style={{boxShadow: '0px 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.3)', width: '13.125rem'}} className={`mr-8 text-4xl absolute z-20 right-0 h-20 rounded-full flex items-center justify-center text-white font-spoqaBold ${item.color}`}><span className='mt-1'>{item.btnText}</span></div>
            </div>
        ));
    }
    
    return (
        <div className="flex flex-col px-7">
            <CardList items={gamesArray} />
        </div>
    )
}

export default AllGamesBanner
