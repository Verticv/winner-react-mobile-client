import React from 'react'
import '../RadioButton.css'
import ClockIcon from '../../../images/myPage/betHistory/clock.png'
import UpIcon from '../../../images/myPage/betHistory/UP.png'
import DownIcon from '../../../images/myPage/betHistory/DOWN.png'
import Example1 from '../../../images/myPage/betHistory/minigame/example1.png'
import Sub3 from '../../../images/myPage/betHistory/minigame/sub3.png'
import Sub4 from '../../../images/myPage/betHistory/minigame/sub4.png'

const MinigameBetHistoryPanel = ({
    id = 0,
    time = "2021-06-29 15:45:05",
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
    team1 = "홀 [200회]",
    team2 = "[200회] 짝",
    choice = "even",
    result = "lose",
    game ="파워사다리"
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
        team1, 
        team2, 
        stat1, 
        stat2, 
        stat3,
        hasUp = false,
        hasDown = false
    }) => (
        <div className="flex items-center w-full h-56px bg-gray-fefefe border-b border-gray-dddddd">
            <div 
                style={{width: isAttached ? "127px" : "122px", marginLeft: isAttached ? "16px" : "0px"}} 
                className="-space-y-4px flex items-center justify-center h-56px font-spoqaMedium text-14px tracking-tight text-gray-r454545 flex-shrink-0"
            >
                <span>200</span> 
            </div>
            <div className="flex space-x-4px flex-shrink-0">
                <button 
                    style={{
                        width: isAttached ? "365px" : "285px",
                        textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
                        backgroundColor: bet === "left" ? "#cb4343" : "#dddddd"
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

                <button className={`flex group items-center justify-center w-81px h-36px rounded-lg bg-gray-dddddd ${bet === "middle" ? "bg-red-cb4343" : "bg-gray-dddddd"}`}>
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
                <div style={{width:"160px"}} className="w-61px text-gray-r454545">{choice === "even" ? "짝" : "우"}</div>
                <div 
                style={{width:"32px"}}
                className={`${
                    result === "win" 
                    ? "text-red-500" 
                    : result === "lose" 
                    ? "text-gray-r454545" 
                    : result === "cancel" 
                    ? "text-blue-r0056a6" 
                    : "text-gray-r454545"} 
                    w-73px`}
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

    const Card = ({team1, team2, choice, result}) => (
        <div className="w-full rounded-lg overflow-hidden shadow-subNavbar">
            <div className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-20px">
                <div className="flex items-center">
                    {game === "파워사다리" ? (
                        <img src={Example1} alt="" />
                    ) : game === "스피드키노" ? (
                        <img style={{zoom:"0.8", marginLeft:"5px"}} className="object-contain" src={Sub3} alt="" />
                    ) : (
                        <img style={{zoom:"0.8", marginLeft:"5px"}} className="object-contain" src={Sub4} alt="" />
                    )}

                    {game === "파워사다리" ? (
                        <span className="ml-4px font-spoqaMedium text-20px text-white pt-2px">파워사다리</span>
                    ) : game === "스피드키노" ? (
                        <span className="ml-6px font-spoqaMedium text-20px text-white pt-2px">스피드키노</span>
                    ) : (
                        <span className="ml-6px font-spoqaMedium text-20px text-white pt-2px">키노사다리</span>
                    )}
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
                    bet="right" 
                    result={result}
                    choice={choice}
                    team1={team1}
                    team2={team2}
                    stat1="1.95"
                    stat2="VS"
                    stat3="1.95"
                />
            </div>
        </div>
    )

    return (
        <div style={{borderRadius:"1em"}} className="w-full shadow-subNavbar bg-gray-fafafa pb-10px">
            <div className="flex h-54px w-full font-spoqaMedium text-14px tracking-tight text-gray-r454545">
                <div style={{width: isAttached === true ? "162px" : "138px"}} className="h-full flex items-center justify-center">회차</div>
                <div style={{width: isAttached === true ? "315px" : "274px"}} className="h-full flex items-center justify-center">승(홈)</div>
                <div style={{width: isAttached === true ? "139px" : "98px"}} className="h-full flex items-center justify-center">VS</div>
                <div style={{width: isAttached === true ? "317px" : "293px"}} className="h-full flex items-center justify-center">패(원정)</div>
                <div style={{width: isAttached === true ? "66px" : "150px"}} className="h-full flex items-center justify-center">선택</div>
                <div style={{width: isAttached === true ? "58px" : "42px", marginRight:  isAttached === true ? "25px" : "0px"}} className="h-full flex items-center justify-center">결과</div>
            </div>

            <div className="w-full px-10px space-y-10px">
                <Card team1={team1} team2={team2} choice={choice} result={result} />
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
                        <div style={{width: isAttached === true ? "212px" : isPopup === false ? "151px" : "178px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">베팅시간</div>
                        <div style={{width: isAttached === true ? "212px" : isPopup === false ? "131px" : "145px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">베팅금액</div>
                        <div style={{width: isAttached === true ? "212px" : isPopup === false ? "78px" : "178px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">배당률</div>
                        <div style={{width: isAttached === true ? "212px" : isPopup === false ? "131px" : "165px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">예상적중금액</div>
                        <div style={{width: isAttached === true ? "212px" : isPopup === false ? "131px" : "178px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">당첨금</div>
                    </div>
                    <div className="flex w-auto h-36px font-spoqa text-14px tracking-tight text-gray-r585858">
                        {(isAttached === false) && checkedState && (
                            <div className="w-45px h-full flex items-center justify-center">
                                <input 
                                    className="radio" 
                                    type="checkbox" 
                                    name="radio" 
                                    checked={checkedState[id]}
                                    onChange={() => handleOnChange(id)}
                                />
                            </div>
                        )}
                        {(isAttached === false && isPopup === false) && (
                            <div style={{WebkitTextStroke:"0.2px"}} className="w-116px h-full flex items-center justify-center border-l border-gray-fafafa">{ticketNumber}</div>
                        )}
                        <div style={{width: isAttached === true ? "212px" : isPopup === false ? "151px" : "178px", WebkitTextStroke:"0.2px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">{time}</div>
                        <div style={{width: isAttached === true ? "212px" : isPopup === false ? "131px" : "145px", WebkitTextStroke:"0.2px"}} className="h-full flex items-center justify-end border-l border-gray-fafafa pr-5px">{amount}</div>
                        <div style={{width: isAttached === true ? "212px" : isPopup === false ? "78px" : "178px", WebkitTextStroke:"0.2px"}} className="h-full flex items-center justify-center border-l border-gray-fafafa">{ratio}</div>
                        <div style={{width: isAttached === true ? "212px" : isPopup === false ? "131px" : "165px", WebkitTextStroke:"0.2px"}} className="h-full flex items-center justify-end border-l border-gray-fafafa pr-5px">{predictedPrice}</div>
                        <div style={{width: isAttached === true ? "212px" : isPopup === false ? "131px" : "178px", WebkitTextStroke:"0.2px"}} className="h-full flex items-center justify-end border-l border-gray-fafafa pr-5px"><p className={`${winAmount.includes("+") && "text-red-500"}`}>{winAmount}</p>원</div>
                        
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
                    
                    {(isPopup === false) && (
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

export default MinigameBetHistoryPanel
