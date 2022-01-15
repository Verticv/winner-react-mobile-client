import React, { useState } from 'react'
import Card from '../../images/subNavbar/1_1.png'
import Slot from '../../images/subNavbar/2_1.png'
import Sport from '../../images/subNavbar/3_1.png'
import Esport from '../../images/subNavbar/4_1.png'
import Minigame from '../../images/subNavbar/5_1.png'
import AugmentedGame from '../../images/subNavbar/6_1.png'
import Fishing from '../../images/subNavbar/7_1.png'
import Lottery from '../../images/subNavbar/8_1.png'

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

    function onClickHandle(id) {
        var circle = document.getElementsByClassName("highlight")[0]
        circle.style.transform = "translate3d(" + (id * 16) + "rem, 0px, 0)"
    }


    function TabsList({ items }) {
        return items.map((item, index) => (
            <button 
                key={item.id}
                style={{height: '13.4375rem'}}
                className={`
                ${selectedTab === item.id 
                    ? "text-white duration-150" 
                    : " space-x-2px text-gray-subNavbar duration-300"
                } 
                flex flex-col justify-start flex-shrink-0 items-center w-64 rounded-2xl z-20 transition ease-in-out tracking-tight relative`} 
                onClick={() => {
                    if (item.text === 'e-스포츠') {
                        window.location.href = 'http://222.239.127.198:7458/sub_recent.html';
                    } else {
                        setSelectedTab(item.id)
                        setGameBanner(item.id)
                        onClickHandle(item.id)
                    }
                }}
            >
                <img 
                    style={{height: `${item.id === 0 ? '9.375rem' : selectedTab === item.id ? "8.375rem" : "9.3125rem"}`, marginTop: `${selectedTab === item.id && index !== 0 ? '0.6rem' : ''}` ,width: `${item.id === 0 ? "9.3125rem" : "9.375rem"}`}}
                    className={`absolute top-0 object-contain w-32 h-32 mb-4ذ
                        ${item.id === 0 && "w-40px h-40px pt-4"}
                        ${(selectedTab === item.id && item.id !== 0) ? "w-36px h-40px" : item.id !== 0 ? `${item.classDefault} w-48px h-48px` : ""} 
                    `} 
                    src={item.id === 0 ? item.icon : selectedTab === item.id ? item.icon : item.iconDefault} alt="icon" 
                />
                <label style={{fontSize: '2.4375rem', marginBottom: '1rem'}} className={"absolute mb-7  bottom-px cursor-pointer flex-shrink-0 font-spoqaMedium text-4xl pt-px pr-2px" }>{item.text}</label>
            </button>
        ));
    }
    return (
        <div style={{paddingLeft: '2.1875rem'}} id="container" className="flex justify-start items-start w-full">
                <div className="highlight" />
                <TabsList items={tabsArray}/>
        </div>
    )
}

export default SubNavbar
