import React from 'react'
import '../RadioButton.css'
import FootballIcon from '../../../images/myPage/betHistory/football.png'
import USFlagIcon from '../../../images/myPage/betHistory/us_flag.png'
import UKFlagIcon from '../../../images/myPage/betHistory/uk_flag_rec.png'
import SpainFlagIcon from '../../../images/myPage/betHistory/spain_flag.png'
import ClockIcon from '../../../images/myPage/betHistory/clock.png'
import UpIcon from '../../../images/myPage/betHistory/UP.png'
import DownIcon from '../../../images/myPage/betHistory/DOWN.png'

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

    const addEntryClick = () => {
        setAttachedArray(oldArray => [...oldArray, id]);
    };

    const handleRemoveItem = (id) => {
        setAttachedArray(attachedArray.filter(item => item !== id));
    };
    
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
        <div className="flex items-center w-full h-56px bg-gray-fefefe border-b border-gray-dddddd">
            <div style={{width: isAttached ? "127px" : "122px", marginLeft: isAttached ? "16px" : "0px"}} className="-space-y-4px flex flex-col items-center justify-center h-56px font-spoqaMedium text-14px tracking-tight text-gray-r454545">
                <span>승무패</span> 
                <span>(연장포함)</span>
            </div>
            <div className="flex space-x-4px">
                <button 
                    style={{
                        width: isAttached ? "365px" : "285px",
                        textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
                        backgroundColor: bet === "left" ? "#cb4343" : "#dddddd",
                        
                    }} 
                    className="flex items-center justify-center h-36px rounded-lg"
                >
                    <div 
                    style={{width: isAttached ? "363px" : "283px"}}
                    className={`${
                        bet === "left" 
                        ? "text-white border-red-ff7982 from-red-ff535f via-red-ff535f to-red-ee4e5a" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"} 
                        flex items-center justify-between h-34px rounded-lg border bg-gradient-to-b cursor-pointer px-10px pt-px`
                    }>
                        <span className="truncate w-108px text-left font-spoqaMedium tracking-tight text-14px">{team1}</span>
                        <div className="flex items-center space-x-5px">
                            {hasUp && <img className="object-none" src={UpIcon} alt="" /> }
                            <span className="font-roboto tracking-tight text-14px">{stat1}</span>
                        </div>
                    </div>
                </button>

                <button
                    style={{textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",}} 
                    className={`flex group items-center justify-center w-81px h-36px rounded-lg bg-gray-dddddd ${bet === "middle" ? "bg-red-cb4343" : "bg-gray-dddddd"}`}
                >
                    <div className={`${
                        bet === "middle" 
                        ? "text-white border-red-ff7982 from-red-ff535f via-red-ff535f to-red-ee4e5a" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"}
                        pt-px flex items-center justify-center h-34px w-79px rounded-lg border border-white bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb cursor-pointer`}
                    >
                        <span className="font-roboto tracking-tight text-14px">{stat2}</span>
                    </div>
                </button>

                <button style={{width: isAttached ? "365px" : "285px"}} className={`${bet === "right" ? "bg-red-cb4343" : "bg-gray-dddddd"} flex group items-center justify-center h-36px rounded-lg bg-gray-dddddd`}>
                    <div
                    style={{
                        width: isAttached ? "363px" : "283px",
                        textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",
                        backgroundColor: bet === "right" ? "#cb4343" : "#dddddd"
                    }} 
                    className={`${
                        bet === "right" 
                        ? "text-white border-red-ff7982 from-red-ff535f via-red-f8515d to-red-ee4e5a" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"} 
                        pt-px flex items-center justify-between h-34px rounded-lg border border-white bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb cursor-pointer px-10px`}
                    >
                        <div className="flex items-center space-x-5px">
                            <span className="font-roboto tracking-tight text-14px">{stat3}</span>
                            {hasDown && <img className="object-none" src={DownIcon} alt="" /> }
                        </div>
                        <span className="truncate w-108px font-spoqaMedium tracking-tight text-14px text-right">{team2}</span>
                    </div>
                </button>
            </div>

            <div className="flex ml-10px font-spoqaMedium tracking-tight text-14px text-center">
                <div style={{width: isAttached && "90px"}} className="font-roboto w-99px text-gray-r454545">{score}</div>
                <div style={{width: isAttached && "59px"}} className="w-61px text-gray-r454545">{choice === "home" ? "홈팀 승" : "원정팀 승"}</div>
                <div 
                style={{marginRight:isAttached && "5px"}}
                className={`${
                    result === "win" 
                    ? "text-red-500" 
                    : result === "lose" 
                    ? "text-gray-r454545" 
                    : result === "cancel" 
                    ? "text-blue-r0056a6" 
                    : "text-gray-r454545"} 
                    ${
                        isPopup ? "w-63px" : "w-73px"
                    }
                    `}
                >{
                    result === "win" 
                    ? "승" 
                    : result === "lose" 
                    ? "패" 
                    : result === "cancel" 
                    ? "취소" 
                    : "결과없음"}</div>
            </div>
        </div>
    )

    const Cards0 = ({bet = "right"}) => (
        <div className="w-full rounded-lg overflow-hidden shadow-subNavbar">
            <div className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-20px">
                <div className="flex items-center">
                    <img src={FootballIcon} alt="" />
                    <img className="ml-5px" src={USFlagIcon} alt="" />
                    <span className="ml-4px font-spoqaMedium text-20px tracking-tight text-white pt-3px">MLS</span>
                </div>
                <div className="flex items-center">
                    <img src={ClockIcon} alt="" />
                    <span 
                        style={{color: "#dae8f5"}}
                        className="ml-5px font-spoqa text-16px tracking-tight text-white"
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
                    score="4 : 4"
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
            <div className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-20px">
                <div className="flex items-center">
                    <img src={FootballIcon} alt="" />
                    <img className="ml-5px" src={UKFlagIcon} alt="" />
                    <span className="ml-4px font-spoqaMedium text-20px tracking-tight text-white pt-3px">EPL</span>
                </div>
                <div className="flex items-center">
                    <img src={ClockIcon} alt="" />
                    <span 
                        style={{color: "#dae8f5"}}
                        className="ml-5px font-spoqa text-16px tracking-tight text-white"
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
                    score="5 : 2"
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
                    score="0 : 3"
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
            <div className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-20px">
                <div className="flex items-center">
                    <img src={FootballIcon} alt="" />
                    <img className="ml-5px" src={UKFlagIcon} alt="" />
                    <span className="ml-4px font-spoqaMedium text-20px tracking-tight text-white pt-3px">EPL</span>
                </div>
                <div className="flex items-center">
                    <img src={ClockIcon} alt="" />
                    <span 
                        style={{color: "#dae8f5"}}
                        className="ml-5px font-spoqa text-16px tracking-tight text-white"
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
                    score="5 : 2"
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
            <div className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-20px">
                <div className="flex items-center">
                    <img src={FootballIcon} alt="" />
                    <img className="ml-5px" src={SpainFlagIcon} alt="" />
                    <span className="ml-4px font-spoqaMedium text-20px tracking-tight text-white pt-3px">라리가</span>
                </div>
                <div className="flex items-center">
                    <img src={ClockIcon} alt="" />
                    <span 
                        style={{color: "#dae8f5"}}
                        className="ml-5px font-spoqa text-16px tracking-tight text-white"
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
                    score="1 : 2"
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
        <div style={{borderRadius:"1em"}} className="w-full shadow-subNavbar bg-gray-fafafa pb-10px">
            <div className="flex h-54px w-full font-spoqaMedium text-14px tracking-tight text-gray-r454545">
                <div style={{width: isAttached === true ? "162px" : "138px"}} className="h-full flex items-center justify-center">베팅구분</div>
                <div style={{width: isAttached === true ? "315px" : "274px"}} className="h-full flex items-center justify-center">승(홈)</div>
                <div style={{width: isAttached === true ? "139px" : "100px"}} className="h-full flex items-center justify-center">무</div>
                <div style={{width: isAttached === true ? "317px" : "284px"}} className="h-full flex items-center justify-center">패(원정)</div>
                <div style={{width: isAttached === true ? "85px" : "108px", marginLeft:  isAttached === true ? "40px" : "0px"}} className="h-full flex items-center justify-center">스코어</div>
                <div style={{width: isAttached === true ? "66px" : "50px"}} className="h-full flex items-center justify-center">선택</div>
                <div style={{width: isAttached === true ? "58px" : "80px", marginRight:  isAttached === true ? "25px" : "0px"}} className="h-full flex items-center justify-center">결과</div>
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
            
            <div className="flex w-full px-10px mt-10px space-x-10px">
                <table>
                    <div className="flex w-auto h-36px rounded-lg bg-gray-efefef font-spoqaMedium text-14px tracking-tight text-gray-r585858">
                        {(isAttached === false) && (
                            <div className="w-45px h-full flex items-center justify-center">선택</div>
                        )}
                        {(isAttached === false && isPopup === false) && (
                            <div className="w-116px h-full flex items-center justify-center border-l border-gray-fafafa">베팅번호</div>
                        )}
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "151px" : "151px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">베팅시간</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "150px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">베팅금액</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "78px" : "178px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">배당률</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "165px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">예상적중금액</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "178px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">당첨금</div>
                        
                    </div>
                    <div className="flex w-auto h-36px font-spoqa text-14px tracking-tight text-gray-r585858">
                        {(isAttached === false) && checkedState && (
                            <div className="w-45px h-full flex items-center justify-center">
                                <input 
                                    className="radio" 
                                    type="checkbox" 
                                    name="radio" 
                                    checked={checkedState[type]}
                                    onChange={() => handleOnChange(type)}
                                />
                            </div>
                        )}
                        {(isAttached === false && isPopup === false) && (
                            <div style={{WebkitTextStroke:"0.2px"}} className="w-116px h-full flex items-center justify-center border-l border-gray-fafafa">{ticketNumber}</div>
                        )}
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "151px" : "151px", WebkitTextStroke:"0.2px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">{time}</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "150px", WebkitTextStroke:"0.2px"}} className="h-full flex items-center justify-end border-l border-gray-fafafa pr-5px">{amount}</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "78px" : "178px", WebkitTextStroke:"0.2px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">{ratio}</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "165px", WebkitTextStroke:"0.2px"}} className="h-full flex items-center justify-end border-l border-gray-fafafa pr-5px">{predictedPrice}</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "200px", WebkitTextStroke:"0.2px"}} className="h-full flex items-center justify-end border-l border-gray-fafafa pr-5px"><p className={`${winAmount.includes("+") && "text-red-500"}`}>{winAmount}</p>원</div>
                    </div>
                </table>
                
                <div className="flex space-x-5px">
                    {isAttached === false && (
                        <button 
                            onClick={() => {
                                setPopupOpen && setPopupOpen(false)
                                setAttachedArray && addEntryClick()
                            }} 
                            className="flex items-center justify-center w-111px h-73px rounded-md bg-blue-r0070d9 hover:opacity-75"
                        >
                            <div className="pt-px flex items-center justify-center h-71px w-109px rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-white">내역올리기</span>
                            </div>
                        </button>
                    )}
                    
                    {(isPopup === false && noButtons === false) && (
                        <button onClick={() => setAttachedArray && handleRemoveItem(id) } className="flex items-center justify-center w-111px h-73px rounded-md bg-red-cb4343 hover:opacity-75">
                            <div className="pt-px flex items-center justify-center h-71px w-109px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-df304f to-red-cf254d cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-white">내역삭제</span>
                            </div>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SportsBetHistoryPanel
