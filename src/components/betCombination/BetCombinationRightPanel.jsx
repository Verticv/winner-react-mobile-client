import BetCartHorizontalMenu2 from 'components/horizontalMenus/BetCartHorizontalMenu2'
import React, { useEffect, useState } from 'react'
import { Route } from 'react-router'
import CartHighlight from '../../images/newImages/white-cart.png'
import Cart from '../../images/newImages/gray-cart.png'
import HistoryHighlight from '../../images/newImages/white-setting.png'
import History from '../../images/newImages/gray-setting.png'
import TrashIcon from '../../images/newImages/bet-cart-delete.png'
import CloseIcon from '../../images/newImages/bet-close.png'
import ClockIcon from '../../images/newImages/clock-yellow.png'
import RefrshIcon from '../../images/newImages/bet-cart-refrech.png'
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


    const tabsArray = [
        { text: "베팅카트", icon: Cart, iconHighlight: CartHighlight , id: 0, number: 2,  path: "/bet-combination" },
        { text: "베팅내역", icon: History, iconHighlight: HistoryHighlight , id: 1, number: 2,  path: "/bet-combination/history" }
    ];

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
                background: "linear-gradient(to bottom, #748697, #8494a4", 
                height: '8.5625rem',
                padding: '0 1.125rem',
                borderRadius: '1.6875rem',
            }}
            className="relative w-full z-20 rounded-t-lg flex items-center justify-between ">
                <div style={{fontSize: '2.625rem'}} className="flex items-center">
                    <p style={{marginRight: '1.9375rem', fontSize: '2.625rem'}} className='ml-3 text-white font-spoqaMedium'>2021-08-02 (월)</p>
                    <div style={{color:"#ffe672", fontSize: '3.375rem'}} className="flex font-spoqaBold tracking-tight items-center">
                        <img style={{width: '2.875rem', marginRight: '0.75rem'}} className="object-contain" src={ClockIcon} alt="" />
                        {format(time, dateFormat1, { locale : ko })}
                    </div>
                </div>

                <div className="flex">
                    <button 
                        style={{width: "6.5rem", height: "6.5rem", borderColor:"#9c9c9c"}} 
                        className="mr-3 rounded-2xl border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center hover:opacity-75"
                        onClick={() => setAddedCard([])}
                    >
                        <div style={{borderColor:"#9c9c9c"}} className="flex rounded-2xl w-full h-full items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8">
                            <img className='w-12' src={TrashIcon} alt="" />
                        </div>
                    </button>
                    <button 
                        style={{width: "6.5rem", height: "6.5rem", borderColor:"#9c9c9c"}} 
                        className="mr-3 rounded-2xl border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center hover:opacity-75"
                    >
                        <div style={{borderColor:"#9c9c9c"}} className="flex rounded-2xl w-full h-full items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8">
                            <img className='w-12' src={RefrshIcon} alt="" />
                        </div>
                    </button>
                    <button 
                        onClick={() => setOpenedCart(false)}
                        style={{width: "6.5rem", height: "6.5rem", borderColor:"#9c9c9c"}} 
                        className="rounded-2xl border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center hover:opacity-75"
                    >
                        <div style={{borderColor:"#9c9c9c"}} className="flex rounded-2xl w-full h-full items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8 ">
                            <img style={{width: '2.75rem', height: '2.75rem'}} src={CloseIcon} alt="" />
                        </div>
                    </button>
                </div>
            </div>

            <div className="bg-white flex flex-col">
                <BetCartHorizontalMenu2 itemsArray={tabsArray} setSelectedTab={setSelectedTab} isState={selectedTab} setState={setSelectedTab} />
            </div>
            {/* <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/powerball"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} /> */}

            <Route exact path="/bet-combination">
                <BetCombinationRightPanelCart addedCard={addedCard} setAddedCard={setAddedCard} />     
            </Route>
            <Route path="/bet-combination/history">
                <BetCombinationRightPanelHistory /> 
            </Route>

        </div>
    )
}

export default BetCombinationRightPanel
