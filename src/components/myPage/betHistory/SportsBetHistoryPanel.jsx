import React from 'react'
import '../RadioButton.css'
import FootballIcon from '../../../images/newImages/mypage/sports/football.png'
import USFlagIcon from '../../../images/newImages/mypage/sports/usaFlag.png'
import UKFlagIcon from '../../../images/newImages/mypage/sports/englandFlag.png'
import SpainFlagIcon from '../../../images/newImages/mypage/sports/spain.svg.png'
import ClockIcon from '../../../images/newImages/mypage/sports/clock.png'
import UpIcon from '../../../images/newImages/mypage/sports/up-red.png'
import DownIcon from '../../../images/newImages/mypage/sports/blue-down.png'

const SportsBetHistoryPanel = ({
    id = 0,
    type = 0,
    time = "2021-06-29 15:45",
    amount = "5,000원",
    ratio = "4.34",
    predictedPrice = "21,715원",
    winAmount = "0",
    ticketNumber = "1891241599",
    checkedState = null,
    setCheckedState = null,
    setPopupOpen = null,
    isPopup = false,
    isAttached = false,
    setAttachedArray = null,
    attachedArray = null,
    noButtons = false
}) => {

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }; 

    // const addEntryClick = () => {
    //     setAttachedArray(oldArray => [...oldArray, id]);
    // };

    // const handleRemoveItem = (id) => {
    //     setAttachedArray(attachedArray.filter(item => item !== id));
    // };
    
    const CardContent = ({
        bet, 
        result, 
        choice, 
        score, 
        team1, 
        team2, 
        stat1, 
        stat2, 
        stat3,
        hasUp = false,
        hasDown = false
    }) => (
        <div className="flex items-center w-full h-36 p-3 bg-gray-fefefe border-b border-gray-dddddd">
            {/* <div style={{width: isAttached ? "127px" : "122px", marginLeft: isAttached ? "16px" : "0px"}} className="-space-y-4px flex flex-col items-center justify-center h-56px font-spoqaMedium text-14px tracking-tight text-gray-r454545">
                <span>승무패</span> 
                <span>(연장포함)</span>
            </div> */}
            <div className="flex space-x-2">
                <button 
                    style={{
                        width: '26.875rem',
                        height: '7.4375rem',
                        padding: '0.1875rem',
                        textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
                        // backgroundColor: bet === "left" ? "#cb4343" : "#dddddd",
                        
                    }} 
                    className="flex items-center justify-center h-36px rounded-lg"
                >
                    <div 
                    className={`${
                        bet === "left" 
                        ? "text-white border-red-f99097 bg-gradient-to-b from-red-d7434f to-red-ff535f" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"} 
                        flex items-center justify-between h-full w-full rounded-lg border bg-gradient-to-b cursor-pointer px-10px pt-px`
                    }>
                        <span style={{fontSize: '2.625rem'}} className="truncate text-left font-spoqaMedium tracking-tight text-14px">{team1}</span>
                        <div className="flex items-center space-x-5px">
                            {hasUp && <img className="object-contain w-8 h-7" src={UpIcon} alt="" /> }
                            <span  style={{fontSize: '2.625rem'}} className="font-roboto tracking-tight text-14px">{stat1}</span>
                        </div>
                    </div>
                </button>

                <button
                    style={{
                        textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",
                        height: '7.4375rem',
                        padding: '0.1875rem',
                    }} 
                    className={`flex group items-center justify-center w-40 rounded-lg bg-gray-dddddd ${bet === "middle" ? "bg-red-cb4343" : "bg-gray-dddddd"}`}
                >
                    <div className={`${
                        bet === "middle" 
                        ? "text-white border-red-f99097 bg-gradient-to-b from-red-d7434f to-red-ff535f" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"}
                        pt-px flex items-center justify-center h-full w-full rounded-lg border border-white bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb cursor-pointer`}
                    >
                        <span style={{fontSize: '2.625rem'}} className="font-roboto tracking-tight text-14px">{stat2}</span>
                    </div>
                </button>

                <button style={{
                            width: '26.875rem',
                            height: '7.4375rem',
                            padding: '0.1875rem',
                        }} 
                    className={`${bet === "right" ? "bg-red-cb4343" : "bg-gray-dddddd"} flex group items-center justify-center h-36px rounded-lg bg-gray-dddddd`}>
                    <div
                    style={{
                        textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",
                        // backgroundColor: bet === "right" ? "#cb4343" : "#dddddd"
                    }} 
                    className={`${
                        bet === "right" 
                        ? "text-white border-red-ff7982 bg-gradient-to-b from-red-d7434f to-red-ff535f" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545 bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb "} 
                        pt-px flex items-center justify-between h-full w-full rounded-lg border border-white cursor-pointer px-10px`}
                    >
                        <div className="flex items-center space-x-5px">
                            <span style={{fontSize: '2.625rem'}} className="font-roboto tracking-tight text-14px">{stat3}</span>
                            {hasDown && <img className="object-contain w-8 h-7" src={DownIcon} alt="" /> }
                        </div>
                        <span style={{fontSize: '2.625rem'}} className="truncate font-spoqaMedium tracking-tight text-14px text-right">{team2}</span>
                    </div>
                </button>
            </div>

            <div className="flex ml-10px font-spoqaMedium tracking-tight text-14px text-center">
                {/* <div style={{width: isAttached && "90px"}} className="font-roboto w-99px text-gray-r454545">{score}</div> */}
                {/* <div style={{width: isAttached && "59px"}} className="w-61px text-gray-r454545">{choice === "home" ? "홈팀 승" : "원정팀 승"}</div> */}
                <div 
                style={{marginRight:isAttached && "5px", fontSize: '2.5rem'}}
                className={`${
                    result === "win" 
                    ? "text-red-500" 
                    : result === "lose" 
                    ? "text-gray-subNavbar" 
                    : result === "cancel" 
                    ? "text-blue-r0056a6" 
                    : "text-gray-r454545"} 
                    `}
                >{
                    result === "win" 
                    ? <><p style={{marginBottom: '-1rem'}}>승</p> <p className='text-gray-subNavbar'>{score}</p></>
                    : result === "lose" 
                    ? <><p style={{marginBottom: '-1rem'}}>패</p> <p className='text-gray-subNavbar'>{score}</p></>
                    : result === "cancel" 
                    ? "취소"
                    : "결과없음"}
                    {/* <p>{score}</p> */}
                    </div>
            </div>
        </div>
    )

    const Cards0 = ({bet = "right"}) => (
        <div className="w-full rounded-lg overflow-hidden shadow-subNavbar">
            <div style={{height: '7.5rem'}} className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-8">
                <div className="flex items-center">
                    <img style={{width: '4.25rem', height: '4.25rem'}} src={FootballIcon} alt="" />
                    <img style={{width: '5.625', height: '3.3125rem'}} className="ml-4" src={USFlagIcon} alt="" />
                    <span style={{fontSize: '2.625rem'}} className="ml-4 font-spoqaMedium text-20px tracking-tight text-white pt-3px">MLS</span>
                </div>
                <div className="flex items-center">
                    <img style={{width: '2.875rem', height: '2.875rem'}} src={ClockIcon} alt="" />
                    <span 
                        style={{color: "#dae8f5", fontSize: '2.625rem', marginLeft: '0.5625rem'}}
                        className="font-spoqa text-16px tracking-tight text-white"
                    >
                        2021-06-29 15:45
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-fefefe border-gray-dddddd">
                <CardContent 
                    bet={bet} 
                    result="cancel" 
                    choice="away" 
                    score="4:4"
                    team1="CF파추카"
                    team2="과달하라 차바스..."
                    stat1="2.26"
                    stat2="2.96"
                    stat3="3.47"
                />
            </div>
        </div>
    )

    const Cards1 = ({hasUp = true, hasDown = true}) => (
        <div className="w-full rounded-lg overflow-hidden shadow-subNavbar">
            <div style={{height: '7.5rem'}} className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-8">
                <div className="flex items-center">
                    <img style={{width: '4.25rem', height: '4.25rem'}} src={FootballIcon} alt="" />
                    <img style={{width: '5.625', height: '3.3125rem'}} className="ml-4" src={UKFlagIcon} alt="" />
                    <span style={{fontSize: '2.625rem'}} className="ml-4 font-spoqaMedium text-20px tracking-tight text-white pt-3px">EPL</span>
                </div>
                <div className="flex items-center">
                    <img style={{width: '2.875rem', height: '2.875rem'}} src={ClockIcon} alt="" />
                    <span 
                        style={{color: "#dae8f5", fontSize: '2.625rem', marginLeft: '0.5625rem'}}
                        className="font-spoqa text-16px tracking-tight text-white"
                    >
                        2021-06-29 15:45
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-fefefe border-gray-dddddd">
                <CardContent 
                    bet="left" 
                    result="win" 
                    choice="home" 
                    score="5:2"
                    team1="맨유"
                    team2="첼시"
                    stat1="2.95"
                    stat2="4.62"
                    stat3="1.39"
                />
                <CardContent 
                    bet="right" 
                    result="win" 
                    choice="away"
                    score="0:3"
                    team1="아스널"
                    team2="맨시티"
                    stat1="2.95"
                    stat2="3.32"
                    stat3="2.5"
                    hasDown={hasDown}
                    hasUp={hasUp}
                />

            </div>
        </div>
    )

    const Cards2 = () => (
        <div className="w-full rounded-lg overflow-hidden shadow-subNavbar">
            <div style={{height: '7.5rem'}} className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-8">
                <div className="flex items-center">
                    <img style={{width: '4.25rem', height: '4.25rem'}} src={FootballIcon} alt="" />
                    <img style={{width: '5.625', height: '3.3125rem'}} className="ml-4" src={UKFlagIcon} alt="" />
                    <span style={{fontSize: '2.625rem'}} className="ml-4 font-spoqaMedium text-20px tracking-tight text-white pt-3px">EPL</span>
                </div>
                <div className="flex items-center">
                    <img style={{width: '2.875rem', height: '2.875rem'}} src={ClockIcon} alt="" />
                    <span 
                        style={{color: "#dae8f5", fontSize: '2.625rem', marginLeft: '0.5625rem'}}
                        className="font-spoqa text-16px tracking-tight text-white"
                    >
                        2021-06-29 15:45
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-fefefe border-gray-dddddd">
                <CardContent 
                    bet="left" 
                    result="win" 
                    choice="home" 
                    score="5:2"
                    team1="맨유"
                    team2="첼시"
                    stat1="2.95"
                    stat2="4.62"
                    stat3="1.39"
                />
            </div>
        </div>
    )

    const Cards3 = () => (
        <div className="w-full rounded-lg overflow-hidden shadow-subNavbar">
            <div style={{height: '7.5rem'}} className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-8">
                <div className="flex items-center">
                    <img style={{width: '4.25rem', height: '4.25rem'}} src={FootballIcon} alt="" />
                    <img style={{width: '5.625', height: '3.3125rem'}} className="ml-4" src={SpainFlagIcon} alt="" />
                    <span style={{fontSize: '2.625rem'}} className="ml-4 font-spoqaMedium text-20px tracking-tight text-white pt-3px">라리가</span>
                </div>
                <div className="flex items-center">
                    <img style={{width: '2.875rem', height: '2.875rem'}} src={ClockIcon} alt="" />
                    <span 
                        style={{color: "#dae8f5", fontSize: '2.625rem', marginLeft: '0.5625rem'}}
                        className="font-spoqa text-16px tracking-tight text-white"
                    >
                        2021-06-29 15:45
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-fefefe border-gray-dddddd">
                <CardContent 
                    bet="left" 
                    result="lose" 
                    choice="away" 
                    score="1:2"
                    team1="바르셀로나"
                    team2="레알마드리드"
                    stat1="1.80"
                    stat2="3.32"
                    stat3="1.90"
                />
            </div>
        </div>
    )




    return (
        <div style={{borderRadius:"1em", margin: '1.875rem', paddingBottom: '2.0625rem'}} className="shadow-subNavbar bg-gray-fafafa">
            <div style={{paddingTop: '2.1875rem'}} className="flex w-full pb-8 font-spoqaMedium text-14px tracking-tight text-gray-r454545">
                <div style={{fontSize: '2.625rem'}} className="h-full flex-1 flex items-center justify-end">승(홈)</div>
                <div style={{fontSize: '2.625rem'}} className="h-full flex-1 flex items-center justify-end">무</div>
                <div style={{fontSize: '2.625rem', flex: '1.3 1.3 0%;'}} className="h-full flex-1 flex items-center justify-end">패(원정)</div>
                <div style={{fontSize: '2.625rem', flex: '0.8 0.8 0%;'}} className="h-full mr-8 flex-1 flex items-center justify-end">결과</div>
                {/* <div style={{width: isAttached === true ? "85px" : "108px", marginLeft:  isAttached === true ? "40px" : "0px"}} className="h-full flex items-center justify-center">스코어</div>
                <div style={{width: isAttached === true ? "66px" : "50px"}} className="h-full flex items-center justify-center">선택</div>
                <div style={{width: isAttached === true ? "58px" : "80px", marginRight:  isAttached === true ? "25px" : "0px"}} className="h-full flex items-center justify-center">결과</div> */}
            </div>

            <div className="w-full px-10px space-y-10px">
                {type === 0 
                ? <Cards0 />
                : type === 1 
                ? <Cards1 />
                : type === 2 
                ? <><Cards2 /><Cards3 /></>
                : type === 3
                ? <><Cards0 bet="middle" /><Cards1 hasDown={false} hasUp={false} /></>
                : type === 4 
                ? <Cards0 bet="middle" />
                : <></>
                }
                </div>
            

                {/* <div style={{height: '33.75rem', paddingRight: '1.875rem', margin: '1.875rem', marginTop: '1.875rem'}} className="p-12 bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 h-56px border-b border-gray-dddddd flex items-center justify-between shadow-subNavbar rounded-2xl"> */}
                    <div style={{margin: '1.875rem', marginBottom: '0'}} className="flex flex-wrap items-center w-full h-full">
                        <div style={{width: '5.8125rem'}} className="relative text-left pt-7px">
                        <label className="form-control">
                        <input
                                className='w-12 h-12'
                                type="checkbox"
                                checked={checkedState[type]}
                                onChange={() => handleOnChange(type)}
                            />
                        </label>
                            
                        </div>
                        <div style={{width: '52.3125rem'}}>
                            <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅번호 :</span> 1891241599</div>
                            <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅시간 :</span> 2021-06-29 15:45</div>
                            <div className='flex'>
                                <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', marginRight: '5.3125rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>게임종류 :</span> 5,000</div>
                                <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>게임구분 :</span> 4.34</div>
                            </div>
                            <div className='flex'>
                                <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', marginRight: '5.3125rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅금액 :</span> 20,000</div>
                                <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅금액 :</span> 0</div>
                            </div>
                        </div>
                    </div>

                    <div style={{margin: '3.75rem 1.875rem', marginTop: '2.8125rem', marginBottom: '0'}} className="flex items-center justify-between">
                        <div className="flex w-full space-x-2px">
                            <button 
                                style={{borderRadius:"4px", padding: '0.1875rem', height: '7.3125rem'}}
                                className="flex flex-1 items-center justify-center mr-4 rounded-md bg-blue-r0070d9 hover:opacity-75"
                                // onClick={() => allSelectButtonPressed()}
                            >
                                <div 
                                    style={{
                                        borderRadius: "3px"
                                    }}
                                    className="flex items-center justify-center h-full w-full rounded-lg border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db"
                                >
                                    <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">전체선택</span>
                                </div>
                            </button>
                            <button 
                                style={{borderRadius:"4px", padding: '0.1875rem', height: '7.3125rem', backgroundColor: '#7e3636'}}
                                className="flex flex-1 items-center justify-center m-0 rounded-md bg-brown-7e3636 hover:opacity-75"
                            >
                                <div 
                                    style={{
                                        borderRadius: "3px"
                                    }}
                                    className="flex items-center justify-center h-full w-full rounded-lg border border-red-f36576 bg-gradient-to-b from-red-cf254d to-red-f03a50 cursor-pointer"
                                >
                                    <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">선택삭제</span>
                                </div>
                            </button>
                        </div>
                    </div>
                {/* </div> */}
        </div>
    )
}

export default SportsBetHistoryPanel


// .BG {
//     border-style: solid;
//     border-width: 3px;
//     border-color: rgb(126, 54, 54);
//     border-radius: 16px;
//     background-image: -moz-linear-gradient( 90deg, rgb(207,37,77) 0%, rgb(240,58,80) 100%);
//     background-image: -webkit-linear-gradient( 90deg, rgb(207,37,77) 0%, rgb(240,58,80) 100%);
//     background-image: -ms-linear-gradient( 90deg, rgb(207,37,77) 0%, rgb(240,58,80) 100%);
//     position: absolute;
//     left: 622px;
//     top: 1776px;
//     width: 557px;
//     height: 124px;
//     z-index: 195;
//   }
  

// border-red-cb4343 bg-gradient-to-b from-red-d7434f to-red-ff535f

// .BG {
//     border-style: solid;
//     border-width: 3px;
//     border-color: rgb(203, 67, 67);
//     border-radius: 8px;
//     background-image: -moz-linear-gradient( 90deg, rgb(215,67,79) 0%, rgb(255,83,95) 100%);
//     background-image: -webkit-linear-gradient( 90deg, rgb(215,67,79) 0%, rgb(255,83,95) 100%);
//     background-image: -ms-linear-gradient( 90deg, rgb(215,67,79) 0%, rgb(255,83,95) 100%);
//     position: absolute;
//     left: 51px;
//     top: 3246px;
//     width: 435px;
//     height: 125px;
//     z-index: 83;
//   }
  