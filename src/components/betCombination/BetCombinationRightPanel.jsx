import HorizontalMenu2 from 'components/horizontalMenus/HorizontalMenu2'
import React, { useEffect, useState } from 'react'
import Cart from '../../images/betCombination/cart.png'
import CartHighlight from '../../images/betCombination/cart_highlight.png'
import History from '../../images/betCombination/history.png'
import HistoryHighlight from '../../images/betCombination/history_highlight.png'
import TrashIcon from '../../images/betCombination/trash.png'
import LockIcon from '../../images/betCombination/lock.png'
import LockIconOn from '../../images/betCombination/lock_on.png'
import RefrshIcon from '../../images/betCombination/refresh.png'
import { format } from 'date-fns'
import { ko } from "date-fns/locale"
import BetCombinationRightPanelCart from './BetCombinationRightPanelCart'
import BetCombinationRightPanelHistory from './BetCombinationRightPanelHistory'

const BetCombinationRightPanel = ({
    addedCard, 
    setAddedCard, 
    isPanelFixed, 
    setPanelFixed
}) => {

    const tabsArray = [
        { text: "베팅카트", icon: Cart, iconHighlight: CartHighlight , id: 0, number: 2 },
        { text: "베팅내역", icon: History, iconHighlight: HistoryHighlight , id: 1, number: 2 }
    ];

    const dateFormat = "yyyy-MM-dd (eee)"
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
        <div className="w-fill rounded-lg shadow-subNavbar">

            <div style={{boxShadow:"0 2px 2px 0.5px #00000040"}} className="relative bg-gradient-to-b from-gray-f8f9fb via-gray-efeff0 to-gray-e5e6e6 h-54px w-full z-20 rounded-t-lg flex items-center justify-between px-8px">
                <div className="flex flex-col space-y-2px">
                    <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r585858">{format(time, dateFormat, { locale : ko })}</div>
                    <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-blue-r0056a6">{format(time, dateFormat1, { locale : ko })}</div>
                </div>

                <div className="flex space-x-2px">
                    <button 
                        style={{width: "38px", height: "38px", borderColor:"#9c9c9c"}} 
                        className="rounded-4px border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center hover:opacity-75"
                        onClick={() => setAddedCard([])}
                    >
                        <div style={{width: "34px", height: "34px", borderColor:"#9c9c9c"}} className="flex items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8">
                            <img src={TrashIcon} alt="" />
                        </div>
                    </button>
                    <button 
                        onClick={() => setPanelFixed(!isPanelFixed)} 
                        style={{width: "38px", height: "38px", borderColor:"#9c9c9c"}} 
                        className="rounded-4px border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center hover:opacity-75"
                    >
                        <div style={{width: "34px", height: "34px", borderColor:"#9c9c9c"}} className="flex items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8 ">
                            <img src={isPanelFixed ? LockIconOn : LockIcon} alt="" />
                        </div>
                    </button>
                    <button 
                        style={{width: "38px", height: "38px", borderColor:"#9c9c9c"}} 
                        className="rounded-4px border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center hover:opacity-75"
                    >
                        <div style={{width: "34px", height: "34px", borderColor:"#9c9c9c"}} className="flex items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8">
                            <img src={RefrshIcon} alt="" />
                        </div>
                    </button>
                </div>
                
            </div>

            <div className="bg-white pt-7px px-3px flex flex-col">
                <HorizontalMenu2 itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />
                <div className="mb-5px"></div>
            </div>

            {selectedTab === 0 ? (
                <BetCombinationRightPanelCart addedCard={addedCard} setAddedCard={setAddedCard} />
            ) : (
                <BetCombinationRightPanelHistory />
            )}

        </div>
    )
}

export default BetCombinationRightPanel
