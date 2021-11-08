import React, { useState } from 'react'
import UpIcon from '../../images/betCombination/up.png'
import DownIcon from '../../images/betCombination/down.png'
import BonusCell from '../../images/betCombination/bonus_cell.png'
import NormalCell from '../../images/betCombination/normal_cell.png'
import FootballIcon from '../../images/betCombination/soccer.png'
import GlobeIcon from '../../images/betCombination/globe.png'
import ArrowBlack from '../../images/betCombination/arrow_black.png'
import DropDownControls from 'components/dropdowns/DropDownControls'
import T1 from '../../images/betCombination/t1.png'
import T2 from '../../images/betCombination/t2.png'
import T3 from '../../images/betCombination/t3.png'
import T4 from '../../images/betCombination/t4.png'
import T5 from '../../images/betCombination/t5.png'
import T6 from '../../images/betCombination/t6.png'
import T7 from '../../images/betCombination/t7.png'
import T8 from '../../images/betCombination/t8.png'
import T9 from '../../images/betCombination/t9.png'
import T10 from '../../images/betCombination/t10.png'
import T11 from '../../images/betCombination/t11.png'
import T12 from '../../images/betCombination/t12.png'
import T13 from '../../images/betCombination/t13.png'
import T14 from '../../images/betCombination/t14.png'
import T15 from '../../images/betCombination/t15.png'
import T16 from '../../images/betCombination/t16.png'
import NorwayIcon from '../../images/betCombination/norway.png'
import AustriaIcon from '../../images/betCombination/austria.png'
import NetherlandIcon from '../../images/betCombination/netherland.png'
import UKIcon from '../../images/betCombination/uk.png'
import Bubble1 from '../../images/betCombination/bubble1.png'
import Bubble2 from '../../images/betCombination/bubble2.png'
import _uniqueId from 'lodash/uniqueId';
import './BetCombination.css'

const BetCombinationPanel = ({
    addedCard, 
    setAddedCard,
    checkedState,
    setCheckedState,
    filterArray
}) => {

    const subArray = [
        {
            id: 0,
            type: "핸디캡",
            team1: "FK Haugesund",
            team2: "스트룀스고세 IF",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none" 
        },
        {
            id: 1,
            type: "핸디캡",
            team1: "FK Haugesund",
            team2: "스트룀스고세 IF",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right" 
        },
        {
            id: 2,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none" 
        },
        {
            id: 3,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
        },
    ]

    const subArray2 = [
        {
            id: 0,
            type: "핸디캡",
            team1: "FK Haugesund",
            team2: "스트룀스고세 IF",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none" 
        },
        {
            id: 1,
            type: "핸디캡",
            team1: "FK Haugesund",
            team2: "스트룀스고세 IF",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right" 
        },
        {
            id: 2,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none" 
        },
        {
            id: 3,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            isLastSubarray: true
        },
    ]

    const FirstArray = [
        {
            id: 4,
            type: "승무패",
            team1: "FK Haugesund",
            team2: "스트룀스고세 IF",
            logo1: T2,
            logo2: T3,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "red",
            stat2Color: "blue",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray
        },
        {
            id: 5,
            type: "승무패",
            team1: "바살룬즈 IF",
            team2: "스타백 IF",
            logo1: T1,
            logo2: T4,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "red",
            stat2Color: "blue",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray2,
            isLast: true
        },
    ]

    const SecondArray = [
        {
            id: 6,
            type: "승무패",
            team1: "SV Kuchl",
            team2: "FC Blau Weiss Linz",
            logo1: T5,
            logo2: T6,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "none",
            stat2Color: "none",
            hasUp: false,
            hasDown: false,
            bet: "left",
            subArray: subArray2,
            isLast: true
        },
    ]

    const ThirdArray = [
        {
            id: 7,
            type: "승무패",
            team1: "AZ 알카르크 B",
            team2: "FC 오스",
            logo1: T7,
            logo2: T8,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "none",
            stat2Color: "none",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray
        },
        {
            id: 8,
            type: "승무패",
            team1: "PSV 에인트호번 (Am)",
            team2: "FC 에인트호번",
            logo1: T9,
            logo2: T10,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "none",
            stat2Color: "none",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray2,
            isLast: true
        },
    ]

    const FourthArray = [
        {
            id: 9,
            type: "승무패",
            team1: "버밍엄 시티 FC",
            team2: "뉴캐슬 유나이티드 FC",
            logo1: T11,
            logo2: T12,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "none",
            stat2Color: "none",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray
        },
        {
            id: 10,
            type: "승무패",
            team1: "노팅엄 포리스트 FC",
            team2: "사우스햄튼 FC",
            logo1: T13,
            logo2: T14,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "none",
            stat2Color: "none",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray
        },
        {
            id: 11,
            type: "승무패",
            team1: "레딩",
            team2: "울버햄프턴 원더러스 FC",
            logo1: T15,
            logo2: T16,
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            stat1Color: "none",
            stat2Color: "none",
            hasUp: false,
            hasDown: false,
            bet: "none",
            subArray: subArray2,
            isLast: true
        },
        
    ]

    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedCarrier, setSelectedCarrier] = useState("국가선택")
    const [isHover1, setHover1] = useState(null)
    const [isOpen, setOpen] = useState(new Array(20).fill(false))
    const [isButtonClicked, setButtonClicked] = useState("")


    const dropDownCellClass = "flex w-full h-42px py-2px bg-white items-center hover:bg-blue-lightGradLight px-14px space-x-8px"

    const gameResultButton = (
        <div
            style={{
                width: "159px",
                height: "39px"
            }}
            className="flex items-center justify-between bg-white placeholder-gray-r8c8c8c outline-none rounded-md border border-gray-cccccc px-12px font-spoqaMedium text-15px tracking-tight text-gray-r454545 group" 
        >
            <div className="flex">
                <img className="object-none" src={GlobeIcon} alt="" />
                <p className="mt-px ml-6px text-14px group-hover:text-black">{selectedCarrier}</p>
            </div>
            <img src={ArrowBlack} alt="" />
        </div>
    )

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }; 

    function SearchDropdownCell({ items }) {
        return items.map(item => (
            <div className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("국가선택")
            }}>
                <input
                    type="checkbox"
                    checked={checkedState[item.id]}
                    onChange={() => handleOnChange(item.id)}
                />
                <span>{item.text}</span>
            </div>
        ));
    }

    const searchDropdown = (
        <div 
            style={{width: "159px", height:"229px" }}
            className="mt-px flex flex-col items-start overflow-hidden bg-white rounded-md border border-gray-dddddd text-gray-r454545 font-spoqaMedium text-14px tracking-tight"
        >
            <div style={{height:"185px", width:"155px"}} className="w-full overflow-y-scroll mt-2px flex-shrink-0">
                <SearchDropdownCell items={filterArray} />
            </div>
            <div style={{backgroundColor:"#e8e8e8"}} className="w-full h-full flex items-center justify-center space-x-3px">
                <button 
                    style={{
                        width:"75px",
                        backgroundColor: "#171a1d",
                        height:"35px"
                    }} 
                    className="relative flex items-center justify-center rounded-4px hover:opacity-75"
                    onClick={() => setDropdownOpen(false)}
                >
                    <div 
                        style={{
                            width:"73px",
                            borderColor: "#737579",
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                            height:"33px",
                            borderRadius:"3px"
                        }} 
                        className="flex items-center justify-center border cursor-pointer"
                    >
                        <span style={{textShadow: "1px 1px 1px #00000070"}} className="font-spoqaMedium tracking-tight text-14px text-white" >
                            확인
                        </span>
                    </div>
                </button>
                <button 
                    style={{
                        width:"75px",
                        backgroundColor: "#cb4343",
                        height:"35px"
                    }} 
                    className="relative flex items-center justify-center rounded-4px hover:opacity-75"
                    onClick={() => setCheckedState(filterArray.fill(false))}
                >
                    <div 
                        style={{
                            width:"73px",
                            borderColor: "#f36576",
                            background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                            height:"33px",
                            borderRadius:"3px"
                        }} 
                        className="flex items-center justify-center border cursor-pointer"
                    >
                        <span style={{textShadow: "1px 1px 1px #00000070"}} className="font-spoqaMedium tracking-tight text-14px text-white" >
                            초기화
                        </span>
                    </div>
                </button>
            </div>
        </div>
    )

    const InboxSearch = (
        <DropDownControls
            buttonChild={gameResultButton} 
            isDropdownOpen={isDropdownOpen} 
            setDropdownOpen={setDropdownOpen}
        >
            {searchDropdown}
        </DropDownControls>
    )

    const EventOptions = ({
        team1 = "CF파추카",
        team2 = "과달하라 차바스",
        stat1 = "2.26",
        stat2 = "2.96",
        stat3 = "3.47",
    }) => (
        <div className="flex space-x-4px">
            <button 
                style={{
                    width:"267px", 
                    height: "39px",
                    backgroundColor: "#ad7b4e"
                }}  
                className="flex items-center justify-center rounded-lg"
                onMouseEnter={() => setHover1(0)}
                onMouseLeave={() => setHover1(null)}
            >
                <div 
                    style={{
                        width:"265px", 
                        height: "37px",
                        borderColor: "#f9b26d",
                        background: "linear-gradient(to bottom, #f8a351, #f38236)" ,
                        color: "#ffffff",
                        textShadow: "1px 1px 0px #00000070"
                    }}  
                    className="flex items-center justify-between rounded-lg border bg-gradient-to-b cursor-pointer px-10px pt-px"
                >
                    <span className="truncate w-108px text-left font-spoqaMedium tracking-tight text-14px">{team1}</span>
                    <span className="font-roboto tracking-tight text-14px">{stat1}</span>
                </div>
                {isHover1 === 0 && (
                    <div className="absolute mb-73px">
                        <img className="object-none" src={Bubble1} alt="" />
                        <div style={{color:"#858585"}} className="ml-36px absolute top-9px text-14px font-spoqaMedium tracking-tight">폴더수에 맞춰서 자동으로 적용됩니다.</div>
                    </div>
                )}
            </button>

            <button 
                style={{
                    width:"71px", 
                    height: "39px",
                    backgroundColor: "#ad7b4e"
                }}  
                className="flex items-center justify-center rounded-lg"              
            >
                <div 
                    style={{
                        width:"69px", 
                        height: "37px",
                        borderColor: "#f9b26d",
                        background: "linear-gradient(to bottom, #f8a351, #f38236)",
                        color: "#ffffff",
                        textShadow: "1px 1px 0px #00000070"
                    }}  
                    className="flex items-center justify-center rounded-lg border bg-gradient-to-b cursor-pointer px-10px pt-px"
                >
                    <span className="font-spoqaMedium tracking-tight text-14px">{stat2}</span>
                </div>
            </button>

            <button 
                style={{
                    width:"267px", 
                    height: "39px",
                    backgroundColor: "#ad7b4e"
                }}  
                className="relative flex items-center justify-center rounded-lg"
                onMouseEnter={() => setHover1(1)}
                onMouseLeave={() => setHover1(null)}
            >
                <div 
                    style={{
                        width:"265px", 
                        height: "37px",
                        borderColor:"#f9b26d",
                        background: "linear-gradient(to bottom, #f8a351, #f38236)",
                        color: "#ffffff",
                        textShadow: "1px 1px 0px #00000070"
                    }}  
                    className="flex items-center justify-between rounded-lg border bg-gradient-to-b cursor-pointer px-10px pt-px"
                >
                    <span className="font-roboto tracking-tight text-14px">{stat3}</span>
                    <span className="truncate font-spoqaMedium tracking-tight text-14px text-right">{team2}</span>
                </div>
                {isHover1 === 1 && (
                    <div className="absolute mb-73px">
                        <img className="object-none" src={Bubble1} alt="" />
                        <div style={{color:"#858585"}} className="ml-36px absolute top-9px text-14px font-spoqaMedium tracking-tight">폴더수에 맞춰서 자동으로 적용됩니다.</div>
                    </div>
                )}
            </button>
        </div>
    )

    const NormalOptions = ({
        id,
        bet = "none",
        team1 = "FK Haugesund",
        team2 = "스트룀스고세 IF",
        logo1 = null,
        logo2 = null,
        hasUp = false,
        hasDown = false,
        stat1 = "2.26",
        stat2 = "2.96",
        stat3 = "3.47",
        stat1Color = "none",
        stat2Color = "none"
    }) => {
        const [isHover3, setHover3] = useState("")

        return (
            <div className="flex space-x-4px">
                <button 
                    style={{
                        width:"267px", 
                        height: "39px",
                        backgroundColor: (`${id}left` === isButtonClicked || `${id}left` === isHover3) ? "#cb4343" : "#b3b3b3" 
                    }}  
                    className="flex items-center justify-center rounded-lg"
                    onClick={() => {
                        setButtonClicked(`${id}left`)
                        setAddedCard(prevArray => 
                        [...prevArray, {id: _uniqueId('prefix-'), value: "left"}])}}
                    onMouseEnter={() => setHover3(`${id}left`)}
                    onMouseLeave={() => setHover3(null)}

                >
                    <div 
                        style={{
                            width:"265px", 
                            height: "37px",
                            borderColor: (`${id}left` === isButtonClicked || `${id}left` === isHover3) ? "#ff7982" : "#ffffff",
                            background:  (`${id}left` === isButtonClicked || `${id}left` === isHover3)
                            ? "linear-gradient(to bottom, #ff535f, #ee4e5a)"  
                            : "linear-gradient(to bottom, #f9f9f9, #e7ecf1)",
                            color: (`${id}left` === isButtonClicked || `${id}left` === isHover3) ? "#ffffff" : "#454545",
                            textShadow: (`${id}left` === isButtonClicked || `${id}left` === isHover3) ? "1px 1px 0px #00000070" : ""
                        }}  
                        className="flex items-center justify-end rounded-lg border bg-gradient-to-b cursor-pointer px-10px"
                    >
                        <span className="truncate text-right font-spoqaMedium tracking-tight text-14px pt-2px">{team1}</span>
                        <div style={{width:"38px"}} className={`${hasUp ? "justify-end pr-5px" : "justify-center"} flex items-center `}>
                            {logo1 && (
                                <img src={logo1} alt="" />
                            )}
                            {hasUp === true && (
                                <img src={UpIcon} alt="" />
                            )}
                        </div>
                        <span style={{color: stat1Color === "red" && `${id}left` !== isButtonClicked && `${id}left` !== isHover3 ? "#d52e2e" : ""}} className="font-roboto tracking-tight text-14px pt-2px">{stat1}</span>
                    </div>
                </button>

                <button 
                    style={{
                        width:"71px", 
                        height: "39px",
                        backgroundColor: (`${id}middle` === isButtonClicked || `${id}middle` === isHover3) ? "#cb4343" : "#b3b3b3" 
                    }}  
                    className="flex items-center justify-center rounded-lg"
                    onClick={() => {
                        setButtonClicked(`${id}middle`)
                        setAddedCard(prevArray => 
                        [...prevArray, {id: _uniqueId('prefix-'), value: "middle"}])}}
                    onMouseEnter={() => setHover3(`${id}middle`)}
                    onMouseLeave={() => setHover3(null)}

                >
                    <div 
                        style={{
                            width:"69px", 
                            height: "37px",
                            borderColor: (`${id}middle` === isButtonClicked || `${id}middle` === isHover3) ? "#ff7982" : "#ffffff",
                            background: (`${id}middle` === isButtonClicked || `${id}middle` === isHover3)
                            ? "linear-gradient(to bottom, #ff535f, #ee4e5a)"  
                            : "linear-gradient(to bottom, #f9f9f9, #e7ecf1)",
                            color: (`${id}middle` === isButtonClicked || `${id}middle` === isHover3) ? "#ffffff" : "#454545",
                            textShadow: (`${id}middle` === isButtonClicked || `${id}middle` === isHover3) ? "1px 1px 0px #00000070" : ""
                        }}  
                        className="flex items-center justify-center rounded-lg border bg-gradient-to-b cursor-pointer px-10px pt-2px"
                    >
                        <span  style={{color: stat2Color === "blue" && `${id}middle` !== isButtonClicked && `${id}middle` !== isHover3 ? "#0056a6" : ""}} className="font-roboto tracking-tight text-14px pt-px">{stat2}</span>
                    </div>
                </button>

                <button 
                    style={{
                        width:"267px", 
                        height: "39px",
                        backgroundColor: (`${id}right` === isButtonClicked || `${id}right` === isHover3) ? "#cb4343" : "#b3b3b3" 
                    }}  
                    className="flex items-center justify-center rounded-lg"
                    onClick={() => {
                        setButtonClicked(`${id}right`)
                        setAddedCard(prevArray => 
                        [...prevArray, {id: _uniqueId('prefix-'), value: "right"}])}}
                    onMouseEnter={() => setHover3(`${id}right`)}
                    onMouseLeave={() => setHover3(null)}
                >
                    <div 
                        style={{
                            width:"265px", 
                            height: "37px",
                            borderColor: (`${id}right` === isButtonClicked || `${id}right` === isHover3) ? "#ff7982" : "#ffffff",
                            background: (`${id}right` === isButtonClicked || `${id}right` === isHover3)
                            ? "linear-gradient(to bottom, #ff535f, #ee4e5a)"  
                            : "linear-gradient(to bottom, #f9f9f9, #e7ecf1)",
                            color: (`${id}right` === isButtonClicked || `${id}right` === isHover3) ? "#ffffff" : "#454545",
                            textShadow: (`${id}right` === isButtonClicked || `${id}right` === isHover3) ? "1px 1px 0px #00000070" : ""
                        }}  
                        className="flex items-center justify-start rounded-lg border bg-gradient-to-b cursor-pointer px-10px pt-px"
                    >
                        <span className="font-roboto tracking-tight text-14px  pt-2px">{stat3}</span>
                        <div style={{width:"38px"}} className={`${hasDown ? "justify-start pl-5px" : "justify-center"} flex items-center `}>
                            {logo2 && (
                                <img src={logo2} alt="" />
                            )}
                            {hasDown === true && (
                                <img src={DownIcon} alt="" />
                            )}
                        </div>
                        <span className="truncate font-spoqaMedium tracking-tight text-14px text-left  pt-2px">{team2}</span>
                    </div>
                </button>
            </div>
        )
    }

    function LeagueCell({
        array, 
        isSubArray = false, 
        isLastSubarray = false
    }) {

        const [isHover2, setHover2] = useState(null)

        const handleOnChange = (position) => {
            const updatedCheckedState = isOpen.map((item, index) =>
              index === position ? !item : item
            );
            setOpen(updatedCheckedState);
        }; 
        
        return array.map(items => (
            <div className="flex flex-col">
                <div 
                    style={{backgroundColor: isSubArray === true ? "#f1f1f1" : "#ffffff"}} 
                    className={`${items.isLast && isOpen[items.id] === false && " rounded-b-xl"} ${items.isLastSubarray === true && "rounded-b-xl"} w-full h-59px border-b border-gray-dddddd flex items-center`}
                >
                    <div style={{width: "129px"}} className="flex items-center justify-center h-full">
                        <p style={{color: isSubArray === true ? "#585858" : "#454545"}} className="font-roboto text-14px tracking-tight pt-2px">2021-06-29 15:45</p>
                    </div>
                    <div style={{width: "75px", color: isSubArray === true ? "#585858" : "#454545"}} className="flex flex-col items-center justify-center h-full -space-y-4px  pt-px">
                        <p className="font-spoqaMedium text-14px tracking-tight">{items.type}</p>
                        <p className="font-spoqa text-12px tracking-tight">(연장미포함)</p>
                    </div>
                    <div className="ml-11px h-full flex items-center">
                        <NormalOptions  
                            id={items.id}
                            bet={items.bet}
                            logo1={items.logo1}
                            logo2={items.logo2}
                            team1={items.team1}
                            team2={items.team2}
                            hasUp={items.hasUp}
                            hasDown={items.hasDown}
                            stat1Color={items.stat1Color}
                            stat2Color={items.stat2Color}
                        />
                    </div>
                    {isSubArray === false && (
                        <div className="relative">
                            <button 
                                style={{
                                    width:"71px",
                                    backgroundColor: isOpen[items.id] === true ? "#5b646e" : "#171a1d"
                                }} 
                                className="relative flex items-center justify-center h-39px w-75px rounded-4px ml-4px group hover:opacity-75"
                                onClick={() => handleOnChange(items.id)}
                                onMouseOver={() => setHover2(items.id)}
                                onMouseLeave={() => setHover2(null)}
                            >
                                <div 
                                    style={{
                                        width:"69px",
                                        borderColor: isOpen[items.id] === true ? "#8f97a0" : "#737579",
                                        background: isOpen[items.id] === true
                                        ? "linear-gradient(to bottom, #8995a2, #757d87)"
                                        : "linear-gradient(to bottom, #585b5e, #303337)"
                                    }} 
                                    className="flex items-center justify-center h-37px w-73px rounded-4px border cursor-pointer"
                                >
                                    <span style={{textShadow: "1px 1px 1px #00000070"}} className="font-spoqaMedium tracking-tight text-14px text-white" >
                                        {isOpen[items.id] === true ? "접기" : "+더보기"}
                                    </span>
                                </div>
                            </button>
                            {isHover2 === items.id && (
                                <div style={{width:"265px"}} className="absolute bottom-34px left-4px group-hover:opacity-100">
                                    <img className="object-none" src={Bubble2} alt="" />
                                    <div style={{color:"#858585"}} className="ml-36px absolute top-9px text-14px font-spoqaMedium tracking-tight">
                                        해당 경기에 등록된 모든베팅종류 제공
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                                                

                </div>
                {isOpen[items.id] === true && (
                    <LeagueCell array={items.subArray} isSubArray={true} isLastSubarray={items.isLast} />
                )}
            </div>
        ))
    }

    const LeagueGroup = ({
        flag = NorwayIcon, 
        title,
        array = FirstArray
    }) => {
        const [isHover4, setHover4] = useState("")

        return (
            <div className="relative flex flex-col">
                <img style={{filter: "drop-shadow(5px 5px 5px #00000020)"}} className="absolute z-10" src={NormalCell} alt="" />
                <div className="h-50px w-full z-20 flex items-center relative">
                    <img className="mx-10px" src={FootballIcon} alt="" />
                    <img className="mr-10px" src={flag} alt="" />
                    <p 
                        className="text-20px font-spoqaMedium text-white mt-3px truncate w-350px" 
                        onMouseEnter={() => setHover4(title)}
                        onMouseLeave={() => setHover4("")}
                    >
                        {title}
                    </p>
                    {isHover4.length > 30 && (
                        <div style={{marginLeft:"15px"}} className="absolute bottom-12px left-407px z-20 h-36px flex items-center">
                            <div className={`relative bottom-0 w-20px overflow-hidden inline-block transform -rotate-90 mb-4px -mr-px`}>
                                <div className="h-10px w-10px bg-gray-f9f9f9 rotate-45 transform origin-bottom-left border border-gray-400"></div>
                            </div>
                            <div style={{color:"#858585", backgroundColor:"#f9f9f9"}} className="px-16px py-8px top-9px text-14px font-spoqaMedium tracking-tight -ml-5px rounded-4px border border-gray-400">
                                <p className="mt-2px">{title}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="h-px w-full bg-gray-dddddd" />
                
                <div className="w-full bg-white z-20 flex flex-col shadow-subNavbar rounded-b-xl">
                    <LeagueCell array={array} />
                </div>
            </div>
        ) 
    }

    return (
        <div style={{borderRadius:"0.5rem"}} className="w-full shadow-subNavbar bg-gray-fafafa">

            <div className="h-50px w-full flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r454545 pt-4px">
                <p className="ml-50px">경기일시</p>
                <p style={{marginLeft: "62px"}}>구분</p>
                <div style={{marginLeft: "136px"}} className="flex">
                    <p>승(홈)오버</p>
                    <img className="blink object-none ml-5px" src={UpIcon} alt="" />
                </div>
                <p style={{marginLeft: "112px"}}>무/핸/합</p>
                <div style={{marginLeft: "107px"}} className="flex">
                    <p>패(원정)언더</p>
                    <img className="blink object-none ml-5px" src={DownIcon} alt="" />
                </div>
                <p style={{marginLeft: "118px"}}>정보</p>
            </div>

            <div className="relative flex flex-col justify-start items-center h-119px px-10px">
                <img className="absolute object-none" src={BonusCell} alt="" />
                <div className="h-50px w-full z-20 mt-4px flex items-center">
                    <div style={{color:"#ffde00", textShadow: "2px 2px 0px #00000050"}} className="ml-52px font-spoqaBold text-20px mt-6px">보너스 이벤트</div>
                </div>
                <div className="h-60px w-full z-20 flex items-center">
                    <div style={{color:"#614f46"}} className="font-roboto text-14px tracking-tight ml-10px">2021-06-29 15:45</div>
                    <div style={{color:"#614f46"}} className="font-spoqaMedium text-14px tracking-tight ml-32px mr-26px">보너스</div>
                    <EventOptions 
                        team1 = "다폴더 보너스 배당"
                        team2 = "◀ 3폴더 이상 베팅 시"
                        stat1 = "-"
                        stat2 = "VS"
                        stat3 = "-"
                    />
                </div>
            </div>

            <div className="mt-6px px-10px">
                <div className="flex items-center justify-between h-59px border border-gray-dddddd rounded-lg bg-gray-f9f9f9">
                    <div className="flex items-center">
                        <img className="object-none mx-9px" src={FootballIcon} alt="" />
                        <p className="text-20px font-spoqaMedium text-gray-r454545 mr-9px">축구</p>
                        <div 
                            style={{backgroundColor:"#8494a4"}} 
                            className="h-27px w-49px rounded-full flex items-center justify-center text-18px font-spoqaMedium tracking-tight text-white pt-2px pr-2px"
                        >
                            15
                        </div>
                    </div>
                    <div className="mr-9px">
                        {InboxSearch}
                    </div>  
                </div>
            </div>

            <div className="mt-10px px-10px pb-11px mb-60px space-y-11px">
                <LeagueGroup title="노르웨이 - UEFA Europa Conference League" />
                <LeagueGroup flag={AustriaIcon} title="오스트리아 - 컵" array={SecondArray}/>
                <LeagueGroup flag={NetherlandIcon} title="네덜란드 - D2" array={ThirdArray}/>
                <LeagueGroup flag={UKIcon} title="영국 - U23" array={FourthArray}/>
            </div>
            
            
        </div>
    )
}

export default BetCombinationPanel
