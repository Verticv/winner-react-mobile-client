import React, { useEffect, useState } from 'react'
import ClockIcon from '../../images/minigames/clock_blue.png'
import RefreshIcon from '../../images/minigames/refresh_icon.png'
import SelectionBg from '../../images/minigames/selection_bg.png'
import CheckIcon from '../../images/minigames/checkbox.png'
import BetIcon from '../../images/betCombination/bet_icon.png'
import LockIcon from '../../images/minigames/lock.png'
import BlueButton from '../../images/minigames/blue.png'
import RedButton from '../../images/minigames/red.png'
import YellowButton from '../../images/minigames/yellow.png'
import GreenButton from '../../images/minigames/green.png'
import BlueButtonSq from '../../images/minigames/blue_sq.png'
import RedButtonSq from '../../images/minigames/red_sq.png'
import { format } from 'date-fns'
import { ko } from "date-fns/locale"

const MinigamesRightPanel = ({
    selectedGame,
    selectedOption
}) => {

    const [inputValue, setInputValue] = useState(null)
    var nf = new Intl.NumberFormat();

    const BetAmountButton = ({amount}) => (
        <button 
            style={{
                width:"110px", 
                borderColor: "#b3bac1"
            }} 
            className="flex items-center h-46px justify-center rounded-4px flex-shrink-0 border hover:opacity-75"
            onClick={() => setInputValue(inputValue + amount)}
        >
            <div 
                style={{
                    width:"108px", 
                    borderRadius:"3px",
                    background: "linear-gradient(to bottom, #feffff, #cedeed)",
                }} 
                className="flex items-center justify-center h-44px border border-white cursor-pointer pt-px">
                <span className="font-roboto tracking-tight text-16px text-gray-r585858 pt-px">{nf.format(amount)}</span>
            </div>
        </button>
    )
    const BetFixedAmountButton = ({amount, text}) => (
        <button 
            style={{
                width:"110px",
                borderColor: "#171a1d",
            }} 
            className="flex items-center justify-center h-46px rounded-4px flex-shrink-0 border hover:opacity-75"
            onClick={() => setInputValue(amount)}
        >
            <div 
                style={{
                    width:"108px", 
                    borderRadius:"3px",
                    background: "linear-gradient(to bottom, #585b5e, #303337)",
                    borderColor:"#747679"
                }} 
                className="flex items-center justify-center h-44px border cursor-pointer pt-px">
                <span className="font-spoqaMedium tracking-tight text-16px text-white">{text}</span>
            </div>
        </button>
    )

    const dateFormat = "MM월 dd일"
    const dateFormat1 = "H:mm:ss"

    const [time, setTime] = useState(Date.now());
    
    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div 
            style={{width: "347px", height:"509px"}}
            className="relative rounded-xl shadow-subNavbar flex flex-col overflow-hidden"
        >
            <div 
                style={{height: "131px"}}
                className="border-b border-gray-dddddd bg-gray-fbfbfb px-7px pt-7px pb-5px space-y-4px"
            >
                <div 
                    style={{
                        background: "linear-gradient(to right, #2087f0, #1873cf", 
                        boxShadow:'inset 1px 2px 1px 0px rgba(0, 0, 0, 0.2)'
                    }} 
                    className="h-52px w-full rounded-lg flex justify-between items-center pr-6px"
                >
                    <div className="flex flex-col px-7px space-y-4px pt-2px">
                        <div className="text-16px font-spoqaMedium tracking-tight text-white h-16px flex items-center">
                            {format(time, dateFormat, { locale : ko })} {format(time, dateFormat1, { locale : ko })} <p style={{color:"#ffea00"}} className="ml-3px">[216회차]</p>
                        </div>
                        <div style={{color:"#bffff5"}} className="flex space-x-2px text-18px font-spoqaBold tracking-tight h-18px items-center">
                            <img className="object-none mb-2px" src={ClockIcon} alt="" />
                            <p>02:16</p>
                        </div>
                    </div>
                    <img src={RefreshIcon} alt="" className="cursor-pointer  hover:opacity-75" />
                </div>

                <div style={{height: "62px"}} className="relative w-full rounded-sm flex">
                    <img className="absolute object-none z-10" src={SelectionBg} alt="" />
                    <div style={{width:"106px"}} className="ml-8px flex h-full z-20 flex items-center justify-center space-x-2px pt-1px pr-8px">
                        <img className="" src={CheckIcon} alt="" />
                        <p style={{color:"#7a5a37"}} className="text-16px tracking-tight font-spoqaBold mt-px">게임선택</p>
                    </div>
                    <div style={{width:"90px"}} className="ml-18px flex h-full z-20 items-center justify-center pr-2px flex-col space-y-4px">
                        {(selectedOption[0].type === "일반볼" || selectedOption[0].type === "파워볼") && (
                            <p style={{color:"#3e83b3"}} className="text-12px tracking-tight font-spoqaMedium flex items-center h-12px">{selectedOption[0].type}</p>
                        )}
                        {(selectedOption[0].type === "일반볼" || selectedOption[0].type === "파워볼") ? (
                            <p style={{color:"#365b7e"}} className="text-14px tracking-tight font-spoqaBold flex items-center h-12px">{selectedOption[0].name}</p>
                        ) :(
                            <p style={{color:"#365b7e"}} className="text-12px tracking-tight font-spoqaBold flex items-center h-12px">{selectedOption[0].name}</p>
                        )}
                    </div>
                    <div style={{width:"81px"}} className="ml-20px flex h-full z-20 flex items-center justify-center">
                        {selectedOption[0].buttonType && (
                            <div 
                                style={{width:"68px", height:"59px"}} 
                                className="relative flex items-center justify-center cursor-pointer pt-2px"
                            >
                                <img 
                                    className={`${
                                        (selectedOption[0].buttonType === "blue_sq" || selectedOption[0].buttonType === "red_sq") ? "h-54px" : "h-59px"
                                    } absolute object-contain`} 
                                    src={
                                        selectedOption[0].buttonType === "blue" 
                                        ? BlueButton
                                        : selectedOption[0].buttonType === "red"
                                        ? RedButton
                                        : selectedOption[0].buttonType === "yellow"
                                        ? YellowButton
                                        : selectedOption[0].buttonType === "green"
                                        ? GreenButton
                                        : selectedOption[0].buttonType === "blue_sq"
                                        ? BlueButtonSq
                                        : RedButtonSq
                                    } 
                                    alt="" 
                                />
                                <div className="flex flex-col items-center -space-y-6px">
                                    <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">{selectedOption[0].selection}</p>
                                    {selectedOption[0].subtitle && (
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">
                                            {selectedOption[0].subtitle}
                                        </p>
                                    )}
                                </div> 
                                {selectedOption[0].tailSide && (
                                    <div className={`${selectedOption[0].tailSide === "left" ? "left-6px" : "right-6px"} absolute w-22px h-22px rounded-full bg-black z-20 top-0 flex items-center justify-center`}>
                                        <div className="text-white text-12px tracking-tight font-spoqaMedium">{selectedOption[0].tail}</div>
                                    </div>
                                )}   
                            </div>
                        )}
                    </div>
                </div>

            </div>

            <div className="h-43px border-b border-gray-dddddd flex items-center justify-between pl-14px pr-19px ">
                <p className="text-16px font-spoqaMedium tracking-tight text-gray-r454545 pt-2px">보유금액</p>
                <p className="text-16px font-robotoBold tracking-tight text-blue-r0056a6 pt-px">3,522,170</p>
            </div>
            <div className="h-43px border-b border-gray-dddddd flex items-center justify-between pl-14px pr-19px">
                <p className="text-16px font-spoqaMedium tracking-tight text-gray-r454545 pt-px">배당률</p>
                <p style={{color:"#f26522"}} className="text-16px font-roboto tracking-tight pt-px">1.95</p>
            </div>
            <div className="h-44px border-b border-gray-dddddd flex items-center justify-between pl-14px pr-13px">
                <p className="text-16px font-spoqaMedium tracking-tight text-gray-r454545 pt-px">베팅금액</p>

                <input 
                    style={{color: "#d52e2e", width: "216px", height: "32px", backgroundColor: "#e8e8e8"}} 
                    className="flex items-center justify-end px-5px border rounded-4px border-gray-dddddd text-16px font-roboto tracking-tight text-blue-r0056a6 text-right"
                    placeholder="0"
                    value={nf.format(inputValue)}
                    onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                />
            </div>
            <div className="h-43px border-b border-gray-dddddd flex items-center justify-between pl-14px pr-19px">
                <p className="text-16px font-spoqaMedium tracking-tight text-gray-r454545 pt-px">적중금액</p>
                <p className="text-16px font-roboto tracking-tight text-blue-r0056a6 pt-px">19,500</p>
            </div>
            
            <div style={{height:"208px"}} className="w-full bg-gray-fafafa p-7px">

                <div className="flex flex-col space-y-2px">
                    <div className="flex space-x-2px">
                        <BetAmountButton amount={5000}/>
                        <BetAmountButton amount={10000}/>
                        <BetAmountButton amount={50000}/>
                    </div>
                    <div className="flex space-x-2px">
                        <BetAmountButton amount={100000}/>
                        <BetAmountButton amount={500000}/>
                        <BetAmountButton amount={1000000}/>
                    </div>
                    <div className="flex space-x-2px">
                        <BetFixedAmountButton amount={22170} text="잔돈" />
                        <BetFixedAmountButton amount={null} text="초기화" />
                        <BetFixedAmountButton amount={3522170} text="최대" />
                    </div>
                </div>

                

                <button style={{width:"334px"}} className="mt-5px flex items-center justify-center h-46px rounded-4px bg-blue-r2068b2 flex-shrink-0 hover:opacity-75">
                    <div style={{width:"332px", borderRadius:"3px"}} className="flex items-center justify-center h-44px rounded-4px border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                        <img src={BetIcon} alt="" />
                        <span className="ml-5px font-spoqaMedium tracking-tight text-16px text-white pt-px">베팅하기</span>
                    </div>
                </button>

            </div>

            {(selectedGame === "/minigame/speedkino" || selectedGame === "/minigame/kinoladder") && (
                <div className="absolute w-full h-full bg-black bg-opacity-70 z-20 flex justify-center"> 
                    <div className="flex flex-col items-center justify-center">
                        <img className="object-none" src={LockIcon} alt="" />
                        <div 
                            style={{textShadow: "2px 4px 4px #00000080"}} 
                            className="text-white font-spoqaMedium text-18px tracking-tight mt-6px"
                        >지금은 베팅할 수 없습니다.</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MinigamesRightPanel
