import React from 'react'
import '../RadioButton.css'
import FootballIcon from '../../../images/newImages/mypage/sports/football.png'
import USFlagIcon from '../../../images/newImages/mypage/sports/usaFlag.png'
import UKFlagIcon from '../../../images/newImages/mypage/sports/englandFlag.png'
import SpainFlagIcon from '../../../images/newImages/mypage/sports/spain.svg.png'
import ClockIcon from '../../../images/newImages/mypage/sports/clock.png'
import UpIcon from '../../../images/newImages/mypage/sports/up-red.png'
import DownIcon from '../../../images/newImages/mypage/sports/blue-down.png'

const SportsPanel = ({
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
    noButtons = false,
    result = 'win',
    score = '4:4',
    firstScore = '4:4',
    secondScore = '4:4',
    firstResult = 'win',
    secondResult = 'win',
}) => {

    // should add these as params
    // bet={bet} 
    // choice="away" 
    // team1="CF파추카"
    // team2="과달하라 차바스..."
    // stat1="2.26"
    // stat2="2.96"
    // stat3="3.4"

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
        <div className="flex items-center w-full h-36 p-3 pr-0 bg-gray-fefefe border-b border-gray-dddddd">
            <div className="flex">
                <button 
                    style={{
                        width: '26.875rem',
                        height: '7.4375rem',
                        padding: '0.1875rem',
                        marginRight: '0.375rem',
                        textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
                        backgroundColor: bet === "left" ? "#cb4343" : "#dddddd",                        
                    }} 
                    className="flex items-center justify-center h-36px rounded-lg bg-gray-dddddd"
                >
                    <div
                    style={{padding: '0.1875rem'}}
                    className={`${
                        bet === "left" 
                        ? "text-white border-red-f99097 bg-gradient-to-b from-red-d7434f to-red-ff535f" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"} 
                        flex items-center justify-between h-full w-full rounded-lg border bg-gradient-to-b cursor-pointer`
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
                        marginRight: '0.375rem',
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

                <button 
                    style={{
                            width: '26.875rem',
                            height: '7.4375rem',
                            padding: '0.1875rem',
                            marginRight: '0.375rem',
                        }} 
                    className={`${bet === "right" ? "bg-red-cb4343" : "bg-gray-dddddd"} flex group items-center justify-center h-36px rounded-lg bg-gray-dddddd`}>
                    <div
                    style={{
                        textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",
                    }} 
                    className={`${
                        bet === "right" 
                        ? "text-white border-red-ff7982 bg-gradient-to-b from-red-d7434f to-red-ff535f" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545 bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb "} 
                        pt-px flex items-center justify-between h-full w-full rounded-lg border border-white cursor-pointer px-10px`}
                    >
                        <div className="flex items-center space-x-5px">
                            <span style={{fontSize: '2.625rem'}} className="font-roboto tracking-tight">{stat3}</span>
                            {hasDown && <img className="object-contain w-8 h-7" src={DownIcon} alt="" /> }
                        </div>
                        <span style={{fontSize: '2.625rem'}} className="truncate font-spoqaMedium tracking-tight text-right">{team2}</span>
                    </div>
                </button>
            </div>

            <div style={{marginLeft: '0rem', fontSize: '2.625rem'}} className="w-full flex font-spoqaMedium tracking-tight text-center">
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
                    </div>
            </div>
        </div>
    )

    const Options = ({
        bet,
        result,
        score,
        team1 = "CF파추카",
        team2 = "과달하라 차바스",
        stat1 = "2.26",
        stat2 = "2.96",
        stat3 = "3.47"
    }) => (
        <div className="flex items-center w-full h-36 p-3 pr-0 bg-gray-fefefe border-b border-gray-dddddd">
            <div className="flex">
                <button 
                     style={{
                        width: '26.875rem',
                        height: '7.4375rem',
                        padding: '0.1875rem',
                        marginRight: '0.375rem',
                        textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
                        backgroundColor: bet === "left" ? "#cb4343" : "#dddddd",                        
                    }}
                    className="flex items-center justify-center h-36px rounded-lg bg-gray-dddddd"
                >
                    <div
                    style={{padding: '0.1875rem'}}
                    className={`${
                        bet === "left" 
                        ? "text-white border-red-f99097 bg-gradient-to-b from-red-d7434f to-red-ff535f" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"} 
                        flex items-center justify-between h-full w-full rounded-lg border bg-gradient-to-b cursor-pointer`
                    }>
                        <span style={{fontSize: '2.625rem'}} className="truncate text-left font-spoqaMedium tracking-tight text-14px">{team1}</span>
                        <div className="flex items-center space-x-5px">
                            <span  style={{fontSize: '2.625rem'}} className="font-roboto tracking-tight text-14px">{stat1}</span>
                        </div>
                    </div>
                </button>

                <button
                    style={{
                        textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",
                        height: '7.4375rem',
                        padding: '0.1875rem',
                        marginRight: '0.375rem',
                    }} 
                    className={`flex group items-center justify-center w-40 rounded-lg bg-gray-dddddd ${bet === "middle" ? "bg-red-cb4343" : "bg-gray-dddddd"}`}
                >
                    <div className={`${
                        bet === "middle" 
                        ? "text-white border-red-f99097 bg-gradient-to-b from-red-d7434f to-red-ff535f" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545 bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb"}
                        pt-px flex items-center justify-center h-full w-full rounded-lg border border-white  cursor-pointer`}
                    >
                        <span style={{fontSize: '2.625rem'}} className="font-roboto tracking-tight text-14px">{stat2}</span>
                    </div>
                </button>

                <button 
                    style={{
                        width: '26.875rem',
                        height: '7.4375rem',
                        padding: '0.1875rem',
                        marginRight: '0.375rem',
                    }} 
                className={`${bet === "right" ? "bg-red-cb4343" : "bg-gray-dddddd"} flex group items-center justify-center h-36px rounded-lg bg-gray-dddddd`}>
                    <div
                    style={{
                        textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",
                    }} 
                    className={`${
                        bet === "right" 
                        ? "text-white border-red-ff7982 bg-gradient-to-b from-red-d7434f to-red-ff535f" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545 bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb "} 
                        pt-px flex items-center justify-between h-full w-full rounded-lg border border-white cursor-pointer px-10px`}
                    >
                        <div className="flex items-center space-x-5px">
                            <span style={{fontSize: '2.625rem'}} className="font-roboto tracking-tight">{stat3}</span>
                        </div>
                        <span style={{fontSize: '2.625rem'}} className="truncate font-spoqaMedium tracking-tight text-right">{team2}</span>
                    </div>
                </button>
            </div>
            <div style={{marginLeft: '0rem', fontSize: '2.625rem'}} className="w-full flex font-spoqaMedium tracking-tight text-center">
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
                    result={result}
                    choice="away" 
                    score={score}
                    team1="CF파추카"
                    team2="과달하라 차바스..."
                    stat1="2.26"
                    stat2="2.96"
                    stat3="3.4"
                />
            </div>
        </div>
    )

    const NewSingleCard = () => (
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
                <Options bet="middle" result={result} score={score} />
            </div>
        </div>
    )

    const NewDoubleCard = () => (
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
                <Options bet="left" team1="LA레이커스" team2="피닉스" stat1="2.95" stat2="VS" stat3="1.39" result={firstResult}  score={firstScore} />
            </div>

            <div className="flex flex-col w-full bg-gray-fefefe border-gray-dddddd">         
                <Options bet="right" team1="세크라멘토" team2="오클라호마" stat1="2.95" stat2="VS" stat3="2.25" result={secondResult} score={secondScore}/>
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
                    result={result} 
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
                    result={result}
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
                    result={result}
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
                    result={result}
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
            </div>

            <div style={{padding: '0 1.875rem' }} className="w-full space-y-10px">
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
                : type === 5 
                ? <NewSingleCard />
                : type === 6 
                ? <NewDoubleCard />
                : <></>
                }
                </div>
                
        </div>
    )
}

export default SportsPanel
