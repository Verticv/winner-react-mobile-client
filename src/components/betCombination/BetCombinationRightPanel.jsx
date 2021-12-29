import BetCartHorizontalMenu2 from 'components/horizontalMenus/BetCartHorizontalMenu2'
import React, { useEffect, useState } from 'react'
import CartHighlight from '../../images/newImages/white-cart.png'
import Cart from '../../images/newImages/gray-cart.png'
import HistoryHighlight from '../../images/newImages/white-setting.png'
import History from '../../images/newImages/gray-setting.png'
import TrashIcon from '../../images/betCombination/trash.png'
// import LockIcon from '../../images/betCombination/lock.png'
// import LockIconOn from '../../images/betCombination/lock_on.png'
import CloseIcon from '../../images/newImages/bet-close.png'
import ClockIcon from '../../images/newImages/clock-yellow.png'
import RefrshIcon from '../../images/betCombination/refresh.png'
import { format } from 'date-fns'
import { ko } from "date-fns/locale"
import BetCombinationRightPanelCart from './BetCombinationRightPanelCart'
import BetCombinationRightPanelHistory from './BetCombinationRightPanelHistory'

const BetCombinationRightPanel = ({
    addedCard, 
    setAddedCard, 
    isPanelFixed, 
    setPanelFixed,
    setOpenedCart
}) => {

    // const GameTypeArray = [
    //     { id: 0, img: Cart, text:"파워볼", textColor: '#d75bc3', time: "02:16", path: "/minigame/powerball" },
    //     { id: 1, img: History, text:"파워사다리", textColor: '#4479be', time: "02:50", path: "/minigame/powerladder" },
    // ]

    const tabsArray = [
        { text: "베팅카트", icon: Cart, iconHighlight: CartHighlight , id: 0, number: 2,  path: "/bet-combination" },
        { text: "베팅내역", icon: History, iconHighlight: HistoryHighlight , id: 1, number: 2,  path: "/minigame/powerball" }
    ];

    // const dateFormat = "yyyy-MM-dd (eee)"
    const dateFormat1 = "H:mm:ss"

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className="w-fill rounded-lg">
            <div 
            style={{
                // boxShadow:"0 2px 2px 0.5px #00000040",
                background: "linear-gradient(to bottom, #748697, #8494a4", 
                height: '8.5625rem',
                padding: '0 1.125rem',
                marginBottom: '0.9375rem',
                borderRadius: '1.6875rem'

            }}
            className="relative h-54px w-full z-20 rounded-t-lg flex items-center justify-between px-8px">
                {/* <div className="flex flex-col space-y-2px">
                    <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r585858">{format(time, dateFormat, { locale : ko })}</div>
                    <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-blue-r0056a6">{format(time, dateFormat1, { locale : ko })}</div>
                </div> */}
                <div style={{fontSize: '2.625rem'}} className="flex">
                    {/* <div style={{marginRight: '1.375rem'}} className="font-spoqaMedium tracking-tight text-white flex items-center">
                        {format(time, dateFormat, { locale : ko })} {format(time, dateFormat1, { locale : ko })}
                    </div> */}
                    <p style={{marginRight: '1.9375rem', fontSize: '3.375rem'}} className='text-white'>2021-08-02 (월)</p>
                    <div style={{color:"#ffe672"}} className="flex font-spoqaBold tracking-tight items-center">
                        <img style={{width: '2.875rem', marginRight: '0.75rem'}} className="object-contain" src={ClockIcon} alt="" />
                        {format(time, dateFormat1, { locale : ko })}
                    </div>
                </div>

                <div className="flex">
                    <button 
                        style={{width: "38px", height: "38px", borderColor:"#9c9c9c"}} 
                        className="mr-3 rounded-lg border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center hover:opacity-75"
                        onClick={() => setAddedCard([])}
                    >
                        <div style={{width: "34px", height: "34px", borderColor:"#9c9c9c"}} className="flex items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8">
                            <img src={TrashIcon} alt="" />
                        </div>
                    </button>
                    <button 
                        style={{width: "38px", height: "38px", borderColor:"#9c9c9c"}} 
                        className="mr-3 rounded-lg border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center hover:opacity-75"
                    >
                        <div style={{width: "34px", height: "34px", borderColor:"#9c9c9c"}} className="flex items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8">
                            <img src={RefrshIcon} alt="" />
                        </div>
                    </button>
                    <button 
                        onClick={() => setOpenedCart(false)}
                        style={{width: "38px", height: "38px", borderColor:"#9c9c9c"}} 
                        className="rounded-lg border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center hover:opacity-75"
                    >
                        <div style={{width: "34px", height: "34px", borderColor:"#9c9c9c"}} className="flex items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8 ">
                            <img style={{width: '2.75rem', height: '2.75rem'}} src={CloseIcon} alt="" />
                        </div>
                    </button>
                </div>
                
            </div>

            <div className="bg-white pt-7px px-3px flex flex-col">
                <BetCartHorizontalMenu2 itemsArray={tabsArray} setSelectedTab={setSelectedTab} isState={selectedTab} setState={setSelectedTab} />
                <div className="mb-5px"></div>
            </div>
            {/* <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/powerball"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} /> */}

            {selectedTab === 0 ? (
                <BetCombinationRightPanelCart addedCard={addedCard} setAddedCard={setAddedCard} />
            ) : (
                <BetCombinationRightPanelHistory />
            )}

        </div>
    )
}

export default BetCombinationRightPanel
