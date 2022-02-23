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
    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`); 
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [selectedTab, setSelectedTab] = useState(0)
    const [buttonHover, setButtonHover] = useState(null)

    return (
        <div className="w-fill rounded-lg max-h-screen">
            <div 
            style={{
                background: "linear-gradient(to bottom, #748697, #8494a4", 
                height: '8.5625rem',
                padding: '0 0.525rem 0 1.125rem',
                borderRadius: '1.6875rem',
                marginLeft: '1.875rem', 
                marginRight: '1.875rem'
            }}
            className="relative z-20 rounded-t-lg flex items-center justify-between ">
                <div style={{fontSize: '2.625rem'}} className="flex items-center pt-1">
                    <p style={{marginRight: '1.9375rem', fontSize: '2.625rem'}} className='ml-3 text-white font-spoqaMedium'>2021-08-02 (월)</p>
                    <div style={{color:"#ffe672", fontSize: '3.375rem'}} className="flex font-spoqaBold tracking-tight items-center">
                        <img style={{width: '2.875rem', marginRight: '0.75rem'}} className="object-contain" src={ClockIcon} alt="" />
                        <p className='mt-1'>{format(time, dateFormat1, { locale : ko })}</p>
                        
                    </div>
                </div>

                <div className="flex">
                    <button 
                        style={{width: "6.5rem", height: "6.5rem", borderColor:"#9c9c9c"}} 
                        className={`${buttonHover === 0 && "opacity-75"} mr-3 rounded-2xl border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center`}
                        onPointerDown={() => setButtonHover(0)}
                        onPointerUp={() => {
                            setButtonHover(null)
                            setAddedCard([])
                        }}
                        onPointerOut={() => setButtonHover(null)}
                    >
                        <div style={{borderColor:"#9c9c9c"}} className="flex rounded-2xl w-full h-full items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8">
                            <img className='w-12' src={TrashIcon} alt="" />
                        </div>
                    </button>
                    <button 
                        style={{width: "6.5rem", height: "6.5rem", borderColor:"#9c9c9c"}} 
                        className={`${buttonHover === 1 && "opacity-75"} mr-3 rounded-2xl border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center`}
                        onPointerDown={() => setButtonHover(1)}
                        onPointerUp={() => {
                            setButtonHover(null)
                        }}
                        onPointerOut={() => setButtonHover(null)}
                    >
                        <div style={{borderColor:"#9c9c9c"}} className="flex rounded-2xl w-full h-full items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8">
                            <img className='w-12' src={RefrshIcon} alt="" />
                        </div>
                    </button>
                    <button 
                        onPointerDown={() => setButtonHover(2)}
                        onPointerUp={() => {
                            setButtonHover(null)
                            setOpenedCart(false)
                        }}
                        onPointerOut={() => setButtonHover(null)}
                        style={{width: "6.5rem", height: "6.5rem", borderColor:"#9c9c9c"}} 
                        className={`${buttonHover === 2 && "opacity-75"} mr-3 rounded-2xl border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center`}
                    >
                        <div style={{borderColor:"#9c9c9c"}} className="flex rounded-2xl w-full h-full items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8 ">
                            <img style={{width: '2.75rem', height: '2.75rem'}} src={CloseIcon} alt="" />
                        </div>
                    </button>
                </div>
            </div>

            <div style={{marginBottom: '2.0625rem',paddingLeft: '1.875rem', paddingRight: '1.875rem'}} className="bg-white flex flex-col">
                <BetCartHorizontalMenu2 itemsArray={tabsArray} setSelectedTab={setSelectedTab} isState={selectedTab} setState={setSelectedTab} />
            </div>
            {/* <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/powerball"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} /> */}

            <div style={{maxHeight: "calc((var(--vh) * 100) - 24rem)"}} className='overflow-y-scroll max-h-screen pb-8'>
                <Route exact path="/bet-combination">
                    <div style={{paddingLeft: '1.875rem', paddingRight: '1.875rem'}}>
                    <BetCombinationRightPanelCart addedCard={addedCard} setAddedCard={setAddedCard} />     

                    </div>
                </Route>
                <Route path="/bet-combination/history">
                    <BetCombinationRightPanelHistory /> 
                </Route>
            </div>
            

        </div>
    )
}

export default BetCombinationRightPanel
