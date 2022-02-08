import React, { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router'
import PopupControls from 'components/popups/PopupControls';
import RoundResultPopup from 'components/popups/RoundResultPopup';
import PowerLadderRoundResultPopup from 'components/popups/PowerLadderRoundResultPopup';
import SpeedKinoRoundResultPopup from 'components/popups/SpeedKinoRoundResultPopup';
import ClockIcon from '../../images/minigames/clock_blue.png'
import RefreshIcon from '../../images/minigames/refresh_icon.png'
import CloseIcon from '../../images/minigames/cart-close.png'
import SelectionBg from '../../images/minigames/cart-check-img.png'
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
    selectedOption,
    setOpenedCart
}) => {

    const [inputValue, setInputValue] = useState(null)
    const [isPopupOpen, setPopupOpen] = useState(true)
    var nf = new Intl.NumberFormat();
    const history = useHistory();

    const BetAmountButton = ({amount}) => (
        <button 
            style={{
                width:"24.4rem",
                height: '7.5rem',
                // padding: '0.2rem',
                fontSize: '2.625rem',
                borderColor: "#b3bac1",
                borderRadius: '0.75rem'
            }} 
            className="flex rounded-lg flex-shrink-0 border hover:opacity-75"
            onClick={() => setInputValue(inputValue + amount)}
        >
            <div 
                style={{
                    borderRadius:"0.75rem",
                    background: "linear-gradient(to bottom, #feffff, #cedeed)",
                    borderWidth: "0.1875rem",
                    borderColor: "#fff",
                    // borderWidth: '0.1875rem'
                }} 
                className="flex items-center justify-center w-full h-full cursor-pointer">
                <span className="font-roboto tracking-tight text-gray-r585858">{nf.format(amount)}</span>
            </div>
        </button>
    )
    const BetFixedAmountButton = ({amount, text}) => (
        <button 
            style={{
                width:"24.4rem",
                height: '7.5rem',
                fontSize: '2.625rem',
                borderColor: "#171a1d",
                borderRadius: '0.75rem',
                backgroundColor: '#747679',
                // padding: '0.2rem',
            }} 
            className="flex rounded-lg flex-shrink-0 border hover:opacity-75"
            onClick={() => setInputValue(amount)}
        >
            <div 
                style={{
                    width: "100%",
                    borderRadius:"0.75rem",
                    borderWidth: "0.1875rem",
                    borderColor: "#747679",
                    background: "linear-gradient(to bottom, #585b5e, #303337)",
                }} 
                className="flex items-center justify-center h-full cursor-pointer">
                <span className="font-spoqaMedium tracking-tight text-white">{text}</span>
            </div>
        </button>
    )

    const GrayButton = ({text}) => (
        <button     
            style={{
                background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                borderRadius:"0.75rem",
                width: '36.375rem',
                height: '7.5rem',
                padding: '1px',
            }}
            className={`bg-white overflow-hidden rounded-lg flex items-end`} 
        >
            <div 
                style={{
                    width:"100%", 
                    borderRadius:"0.75rem",
                    paddingBottom: '0.4625rem'
                }} 
                className={`flex w-full justify-end h-full items-end bg-gray-c7c7c7`}
            >
                <div 
                    style={{
                        background: "linear-gradient(to bottom, #f7f7f7, #e9e9e9)",
                        borderRadius:"0.75rem",
                        borderBottomLeftRadius:"0.75rem 0.6rem",
                        borderBottomRightRadius: "0.75rem 0.6rem",
                        borderColor: "#d6dfe8",
                    }}
                    className={`mt-3px h-full w-full rounded-b-lg rounded-t-md flex flex-col justify-center items-center`}
                >
                    <div style={{fontSize: '2.625rem'}} className={`flex items-center font-spoqaMedium text-gray-r585858`}>
                        {text}
                    </div>
                    
                </div>
            </div>
        </button>
    )

    const AttachButton = (
        <GrayButton  text='회차결과' />
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
        <>
        <div 
                    style={{
                        background: "linear-gradient(to right, #2087f0, #1873cf", 
                        height: '8.5625rem',
                        padding: '0 1.125rem',
                        marginBottom: '0.9375rem',
                        borderRadius: '1.6875rem'
                    }} 
                    className="w-full rounded-lg flex justify-between items-center"
                >
                    <div style={{fontSize: '2.625rem'}} className="flex">
                        <div style={{marginRight: '1.375rem'}} className="font-spoqaMedium tracking-tight text-white flex items-center">
                            {format(time, dateFormat, { locale : ko })} {format(time, dateFormat1, { locale : ko })} <p style={{color:"#ffea00", marginLeft: '0.8125rem'}} className=""> [216회차]</p>
                        </div>
                        <div style={{color:"#bffff5"}} className="flex font-spoqaBold tracking-tight items-center">
                            <img style={{width: '2.875rem', marginRight: '0.75rem'}} className="object-contain mb-1" src={ClockIcon} alt="" />
                            <p style={{fontSize: '3.375rem'}}>02:16</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img style={{width: '6.55rem', marginRight: '0.75rem'}} src={RefreshIcon} alt="" className="cursor-pointer" />
                        <button
                            onClick={() => setOpenedCart(false)}
                            // style={{width: '15.625rem'}}
                            className="">
                            <img style={{width: '6.55rem'}} src={CloseIcon} alt="" className="cursor-pointer" />
                        </button>
                    </div>
                </div>

        <div 
            className="relative rounded-xl flex flex-col overflow-hidden"
        >
            
            <div 
                style={{paddingBottom: '1.125rem'}}
                className="border-b border-gray-dddddd bg-gray-fbfbfb"
            >
                

                <div style={{height: "11.6875rem"}} className="relative w-full rounded-sm flex">
                    <img className="absolute object-contain z-10" src={SelectionBg} alt="" />
                    <div style={{width:"24rem"}} className="flex h-full z-20 items-center justify-center">
                        <img style={{width:"3.5rem"}} className="object-contain mr-1" src={CheckIcon} alt="" />
                        <p style={{color:"#7a5a37", fontSize: '2.625rem', marginTop: '2px'}} className="tracking-tight font-spoqaBold">게임선택</p>
                    </div>
                    <div style={{width:"30rem", fontSize: '1.875rem', marginLeft: '1rem'}} className="flex h-full z-20 items-center justify-center flex-col -space-y-3">
                        {(selectedOption[0].type === "일반볼" || selectedOption[0].type === "파워볼") && (
                            <p style={{color:"#3e83b3"}} className="tracking-tight font-spoqaMedium flex items-center">{selectedOption[0].type}</p>
                        )}
                        {(selectedOption[0].type === "일반볼" || selectedOption[0].type === "파워볼") ? (
                            <p style={{color:"#365b7e", fontSize: '2.25rem'}} className="tracking-tight font-spoqaBold flex items-center">{selectedOption[0].name}</p>
                        ) :(
                            <p style={{color:"#365b7e"}} className="tracking-tight font-spoqaBold flex items-center">{selectedOption[0].name}</p>
                        )} 
                    </div>
                    <div style={{width:"16rem"}} className="flex h-full z-20 items-center justify-end">
                        {selectedOption[0].buttonType && (
                            <div 
                                style={{width:"11.375rem"}} 
                                className="relative flex items-center justify-center cursor-pointer"
                            >
                                <img 
                                    className={`${
                                        (selectedOption[0].buttonType === "blue_sq" || selectedOption[0].buttonType === "red_sq") ? "" : ""
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
                                <div className="flex flex-col items-center">
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

            <div style={{height: '6.875rem', paddingLeft: '1.8125rem', paddingRight: '2.0625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem'}} className="border-b border-gray-dddddd flex items-center justify-between">
                <p className="font-spoqaMedium tracking-tight text-gray-r454545">보유금액</p>
                <p className="font-robotoBold tracking-tight text-blue-r0056a6">3,522,170</p>
            </div>
            <div style={{height: '6.875rem', paddingLeft: '1.8125rem', paddingRight: '2.0625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem'}} className="border-b border-gray-dddddd flex items-center justify-between">
                <p className="font-spoqaMedium tracking-tight text-gray-r454545">배당률</p>
                <p style={{color:"#f26522"}} className="font-roboto tracking-tight">1.95</p>
            </div>
            <div style={{height: '6.875rem', paddingLeft: '1.8125rem', paddingRight: '0rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem'}} className="border-b border-gray-dddddd flex items-center justify-between">
                <p className="font-spoqaMedium tracking-tight text-gray-r454545">베팅금액</p>

                <input 
                    style={{color: "#d52e2e", width: "36.875rem", height: "5.375rem", backgroundColor: "#e8e8e8", borderWidth: '0.1875rem'}} 
                    className="flex items-center justify-end border rounded-lg pr-8 border-gray-dddddd font-roboto tracking-tight text-blue-r0056a6 text-right"
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
            <div style={{height: '6.875rem', paddingLeft: '1.8125rem', paddingRight: '2.0625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem'}} className="border-b border-gray-dddddd flex items-center justify-between">
                <p className="font-spoqaMedium tracking-tight text-gray-r454545">적중금액</p>
                <p className="font-roboto tracking-tight text-blue-r0056a6">19,500</p>
            </div>





            
            <div style={{height:"", paddingTop: '1.875rem'}} className="w-full">

                <div className="flex flex-col">
                    <div style={{marginBottom: '0.35rem'}} className="flex">
                        <div style={{marginRight: '0.35rem'}}>
                            <BetAmountButton amount={5000}/>
                        </div>
                        <div style={{marginRight: '0.35rem'}}>
                            <BetAmountButton amount={10000}/>
                        </div>
                        <BetAmountButton amount={50000}/>
                    </div>
                    <div style={{marginBottom: '0.35rem'}} className="flex">
                        <div style={{marginRight: '0.35rem'}}>
                            <BetAmountButton amount={100000}/>
                        </div>
                        <div style={{marginRight: '0.35rem'}}>
                            <BetAmountButton amount={500000}/>
                        </div>
                        <BetAmountButton amount={1000000}/>
                    </div>
                    <div style={{marginBottom: '0.35rem'}} className="flex">
                        <div style={{marginRight: '0.35rem'}} className="flex-shrink-0">
                            <BetFixedAmountButton amount={22170} text="잔돈" />
                        </div>
                        <div style={{marginRight: '0.35rem'}} className="flex-shrink-0">
                            <BetFixedAmountButton amount={null} text="초기화" />
                        </div>
                        <div className="flex-shrink-0">
                            <BetFixedAmountButton amount={3522170} text="최대" />
                        </div>
                    </div>
                </div>

                

                <button style={{width:"73.875rem", height: '9rem', padding: '1px', fontSize: '3.1875rem'}} className="flex items-center justify-center rounded-lg bg-blue-r2068b2 flex-shrink-0 hover:opacity-75">
                    <div style={{borderRadius:"3px"}} className="flex items-center justify-center w-full h-full rounded-lg border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                        <img style={{width: '3.5rem'}} className='object-contain' src={BetIcon} alt="" />
                        <span style={{marginLeft: '1.3125rem'}} className="font-spoqaMedium tracking-tight text-white">베팅하기</span>
                    </div>
                </button>
                
                


            </div>





            { (selectedGame === "/minigame/speedkino" || selectedGame === "/minigame/kinoladder") && (
                <div className="absolute w-full h-full bg-black bg-opacity-70 z-20 flex justify-center"> 
                    <div className="flex flex-col items-center justify-center">
                        <img style={{width: '20.5rem'}} className="object-contain" src={LockIcon} alt="" />
                        <div 
                            style={{textShadow: "2px 4px 4px #00000080", fontSize: '2.9375rem'}} 
                            className="text-white font-spoqaMedium text-18px tracking-tight mt-6px"
                        >지금은 베팅할 수 없습니다.</div>
                    </div>
                </div>
            )}
        </div>

        
        <div style={{marginTop: '0.35rem'}} className='flex'>
            <div style={{marginRight: '0.75rem'}}>
            <Route path="/minigame/powerball">
                <PopupControls buttonChild={AttachButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                    <RoundResultPopup setPopupOpen={setPopupOpen} />
                </PopupControls> 
            </Route>

            <Route path="/minigame/powerladder">    
                <PopupControls buttonChild={AttachButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                    <PowerLadderRoundResultPopup setPopupOpen={setPopupOpen} />
                </PopupControls> 
            </Route>

            <Route path="/minigame/speedkino">
                <PopupControls buttonChild={AttachButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                    <SpeedKinoRoundResultPopup setPopupOpen={setPopupOpen} />
                </PopupControls> 
            </Route>
                            
            <Route path="/minigame/kinoladder">
                <PopupControls buttonChild={AttachButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                    <PowerLadderRoundResultPopup setPopupOpen={setPopupOpen} />
                </PopupControls> 
            </Route>
        
                
            </div>
            <div onPointerUp={() => {
                history.push('/mypage/bet-history/all/minigame')
            }}>
                <GrayButton text='전체베팅내역' />
            </div>
        </div>
    </>
    )
}

export default MinigamesRightPanel
