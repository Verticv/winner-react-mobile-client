import React, { useState } from 'react'
import Card from '../../images/subNavbar/card.png'
import Slot from '../../images/subNavbar/slot.png'
import Sport from '../../images/subNavbar/sport.png'
import Esport from '../../images/subNavbar/esport.png'
import Minigame from '../../images/subNavbar/minigame.png'
import AugmentedGame from '../../images/subNavbar/augmented_game.png'
import Fishing from '../../images/subNavbar/fishing.png'
import Lottery from '../../images/subNavbar/lottery.png'
import CardDefualt from '../../images/subNavbar/card_default.png'
import SlotDefault from '../../images/subNavbar/slot_default.png'
import SportDefault from '../../images/subNavbar/sport_default.png'
import EsportDefault from '../../images/subNavbar/esport_default.png'
import MinigameDefault from '../../images/subNavbar/minigame_default.png'
import AugmentedGameDefault from '../../images/subNavbar/augmented_game_default.png'
import FishingDefault from '../../images/subNavbar/fishing_default.png'
import LotteryDefault from '../../images/subNavbar/lottery_default.png'
import AllGames from '../../images/subNavbar/all_games.png'
import './SubNavbar.css'

const SubNavbar = ({isGameBanner, setGameBanner}) => {

    const [selectedTab, setSelectedTab] = useState(0)

    const tabsArray = [
        { text: "전체", icon: AllGames, iconDefault: AllGames, id: 0, class: "", classDefault: "" },
        { text: "라이브카지노", icon: Card, iconDefault: CardDefualt, id: 1, class: "pt-1 pl-3px", classDefault: "pt-6px -mr-2px" },
        { text: "슬롯게임", icon: Slot, iconDefault: SlotDefault, id: 2, class: "pt-1 mr-2px", classDefault: "pt-6px" },
        { text: "스포츠", icon: Sport, iconDefault: SportDefault, id: 3, class: "pt-1 mr-8px", classDefault: "pt-6px" },
        { text: "e-스포츠", icon: Esport, iconDefault: EsportDefault, id: 4, class: "pt-1 mr-6px", classDefault: "pt-6px" },
        { text: "미니게임", icon: Minigame, iconDefault: MinigameDefault, id: 5, class: "pt-1 mr-6px", classDefault: "pt-6px" },
        { text: "키론가상게임", icon: AugmentedGame, iconDefault: AugmentedGameDefault, id: 6, class: "pt-1 mr-6px", classDefault: "pt-6px" },
        { text: "피싱게임", icon: Fishing, iconDefault: FishingDefault, id: 7, class: "pt-1 mr-2px", classDefault: "pt-6px" },
        { text: "로터리게임", icon: Lottery, iconDefault: LotteryDefault, id: 8, class: "pt-1 mr-6px", classDefault: "pt-6px" }
    ];

    function onClickHandle(id) {
        var circle = document.getElementsByClassName("highlight")[0]
        circle.style.transform = "translate3d(" + (id * 80) + "px, 0px, 0)"
    }


    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`
                ${selectedTab === item.id 
                    ? "text-white py-4 duration-150" 
                    : " space-x-2px text-gray-subNavbar duration-300 hover:bg-gray-d8dfea"
                } 
                flex flex-col justify-start flex-shrink-0 items-center w-80px h-70px rounded-md z-20 transition ease-in-out tracking-tight relative`} 
                onClick={() => {
                    setSelectedTab(item.id)
                    setGameBanner(item.id)
                    onClickHandle(item.id)
                }}
            >
                <img 
                className={`absolute top-0 object-contain 
                    ${item.id === 0 && "w-40px h-40px mt-8px"}
                    ${(selectedTab === item.id && item.id !== 0) ? "mt-8px w-36px h-40px" : item.id !== 0 ? `${item.classDefault} w-50px h-50px` : ""} 
                `} 
                src={selectedTab === item.id ? item.icon : item.iconDefault} alt="icon" 
                />
                <label className={"absolute bottom-2px cursor-pointer flex-shrink-0 font-spoqaMedium text-12px pt-px" }>{item.text}</label>
            </button>
        ));
    }

    return (
        <div id="container" className="flex justify-start items-start w-full h-70px">
                <div className="highlight" />
                <TabsList items={tabsArray}/>
        </div>
    )
}

export default SubNavbar
