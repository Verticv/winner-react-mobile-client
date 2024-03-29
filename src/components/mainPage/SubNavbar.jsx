import React, { useEffect, useState } from 'react'
import Card from '../../images/subNavbar/1_1.png'
import Slot from '../../images/subNavbar/2_1.png'
import Sport from '../../images/subNavbar/3_1.png'
import Esport from '../../images/subNavbar/4_1.png'
import Minigame from '../../images/subNavbar/5_1.png'
import AugmentedGame from '../../images/subNavbar/6_1.png'
import Fishing from '../../images/subNavbar/7_1.png'
import Lottery from '../../images/subNavbar/8_1.png'
import horizontalsScroll from '../../utils/horizontalsScroll';

import CardDefualt from '../../images/subNavbar/1.png'
import SlotDefault from '../../images/subNavbar/2.png'
import SportDefault from '../../images/subNavbar/3.png'
import EsportDefault from '../../images/subNavbar/4.png'
import MinigameDefault from '../../images/subNavbar/5.png'
import AugmentedGameDefault from '../../images/subNavbar/6.png'
import FishingDefault from '../../images/subNavbar/7.png'
import LotteryDefault from '../../images/subNavbar/8.png'

import AllGames from '../../images/subNavbar/all_games.png'
import './SubNavbar.css'

const SubNavbar = ({isGameBanner, setGameBanner}) => {

    const [selectedTab, setSelectedTab] = useState(0)

    const tabsArray = [
        { text: "전체", icon: AllGames, iconDefault: AllGames, id: 0, class: "", classDefault: "" },
        { text: "라이브카지노", icon: Card, iconDefault: CardDefualt, id: 1, class: "pt-1 pl-3px", classDefault: "pt-px -mr-2px" },
        { text: "슬롯게임", icon: Slot, iconDefault: SlotDefault, id: 2, class: "pt-1 mr-2px", classDefault: "pt-px" },
        { text: "스포츠", icon: Sport, iconDefault: SportDefault, id: 3, class: "pt-1 mr-8px", classDefault: "pt-px" },
        { text: "e-스포츠", icon: Esport, iconDefault: EsportDefault, id: 4, class: "pt-1 mr-6px", classDefault: "pt-px" },
        { text: "미니게임", icon: Minigame, iconDefault: MinigameDefault, id: 5, class: "pt-1 mr-6px", classDefault: "pt-px" },
        { text: "키론가상게임", icon: AugmentedGame, iconDefault: AugmentedGameDefault, id: 6, class: "pt-1 mr-6px", classDefault: "pt-px" },
        { text: "피싱게임", icon: Fishing, iconDefault: FishingDefault, id: 7, class: "pt-1 mr-2px", classDefault: "pt-px" },
        { text: "로터리게임", icon: Lottery, iconDefault: LotteryDefault, id: 8, class: "pt-1 mr-6px", classDefault: "pt-px" }
    ];



    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }

    function onClickHandle(id) {
        var circle = document.getElementsByClassName("highlight")[0]
        if (windowDimensions.width > 1240) {
            circle.style.transform = "translate3d(" + (id * 138) + "px, 0px, 0)"
        } else if (windowDimensions.width > 700 && windowDimensions.width < 851) {
            circle.style.transform = "translate3d(" + (id * (windowDimensions.width - 32) /9) + "px, 0px, 0)"
        } else if (windowDimensions.width > 850 && windowDimensions.width < 901 ) {
            circle.style.transform = "translate3d(" + (id * (windowDimensions.width - 26) /9) + "px, 0px, 0)"
        } else if (windowDimensions.width > 900 && windowDimensions.width < 1050) {
            circle.style.transform = "translate3d(" + (id * (windowDimensions.width - 26) /9) + "px, 0px, 0)"
        } else if (windowDimensions.width > 1049 && windowDimensions.width < 1130) {
            circle.style.transform = "translate3d(" + (id * (windowDimensions.width - 24) /9) + "px, 0px, 0)"
        } else if (windowDimensions.width > 1129 && windowDimensions.width < 1240) {
            circle.style.transform = "translate3d(" + (id * (windowDimensions.width - 22) /9) + "px, 0px, 0)"
        } else {
            circle.style.transform = "translate3d(" + (id * 74) + "px, 0px, 0)"
        }
    }

    function TabsList({ items }) {
        return items.map((item, index) => (
            <button 
                id={`t${index}`}
                key={item.id}
                style={{
                    height: '62px', 
                    width:  (windowDimensions.width > 1240 && items.length - 1 === index) ? "calc(138px + 1rem)" : (windowDimensions.width > 700 && items.length - 1 === index) ? "calc((100vw - 3.5rem) /9 + 1.75rem)" : windowDimensions.width > 1240 ? "138px" : windowDimensions.width > 700 ? "calc((100vw - 3.5rem) /9)" : items.length - 1 === index ? 'calc(74px + 1.75rem)' : '74px',
                    paddingRight: items.length - 1 === index ? '15px' : ''
                }}
                className={`
                ${selectedTab === item.id 
                    ? "text-white duration-150" 
                    : " space-x-2px text-gray-subNavbar duration-300"
                } 
                flex flex-col justify-start flex-shrink-0 items-center rounded-2xl z-20 transition ease-in-out tracking-tight relative`} 
                onClick={() => {
                    horizontalsScroll(items, 't', 'scroll-wrapper', index)
                    setSelectedTab(item.id)
                    setGameBanner(item.id)
                    onClickHandle(item.id)
                }}
            >
                <img 
                    style={{
                        height: `${item.id === 0 ? '44px' : selectedTab === item.id ? "44px" : "44px"}`, 
                        marginTop: `${selectedTab === item.id && index !== 0 ? '' : ''}` ,
                        width: `${item.id === 0 ? "44px" : "44px"}`,
                        paddingTop: item.id === 0 ? "5px" : ""
                    }}
                    className={`absolute top-0 object-contain
                        ${item.id === 0 && "w-40px h-40px"}
                        ${(selectedTab === item.id && item.id !== 0) ? "w-36px h-40px" : item.id !== 0 ? `${item.classDefault} w-48px h-48px` : ""} 
                    `} 
                    src={item.id === 0 ? item.icon : selectedTab === item.id ? item.icon : item.iconDefault} alt="icon" 
                />
                <p style={{
                    fontSize: '12px', 
                    // marginBottom: '5px', 
                    marginRight: item.id === 0 ? "3px" : "",
                    height: '12px',
                    marginBottom: "5px"
                    }} className={"absolute bottom-0 cursor-pointer flex-shrink-0 font-spoqaMedium text-4xl flex items-center justify-center" }
                >
                    {item.text}
                </p>
            </button>
        ));
    }
    return (
        <div style={{paddingLeft: '1.75rem'}} id="container" className={`flex items-start w-screen relative`}>
            <div className="highlight" />
            <TabsList items={tabsArray}/>            
        </div>
    )
}

export default SubNavbar
