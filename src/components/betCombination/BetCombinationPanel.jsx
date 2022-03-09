import React, { useState, useEffect } from 'react'
import UpIcon from '../../images/newImages/up-red.png'
import DownIcon from '../../images/newImages/down-blue.png'
import BonusCell from '../../images/newImages/event.png'
import Gift from '../../images/newImages/gift.png'
import NormalCell from '../../images/newImages/blue-card.png'
import FootballIcon from '../../images/newImages/soccer.png'
import GlobeIcon from '../../images/newImages/world.png'
import ArrowBlack from '../../images/newImages/down.png'
import DropDownControls from 'components/dropdowns/SportNonLiveDropDownControls'
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
import ArrowUp from '../../images/arrow_up.png'
import ArrowDown from '../../images/arrow_dn.png'
import NorwayIcon from '../../images/newImages/norway.png'
import AustriaIcon from '../../images/newImages/austria.png'
import NetherlandIcon from '../../images/newImages/netherland.png'
import UKIcon from '../../images/newImages/uk.png'
import Plus from '../../images/newImages/plus.png'
import Minus from '../../images/newImages/minus.png'
import Clock from '../../images/newImages/clock-light-gray.png'
import Cup from '../../images/newImages/cup.png'
import Medal from '../../images/newImages/Medal.png'
import Jewel from '../../images/newImages/jewel.png'
import _uniqueId from 'lodash/uniqueId';
import './BetCombination.css'
// import Dropdown from 'components/common/Dropdown/Dropdown'
// import DropDownInput from 'components/common/DropDownInput'

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
            bet: "none",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
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
            bet: "right",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
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
            bet: "none",
            buttonWithExtraData : {text: '언오버 (연장미포함)', img: Jewel}
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
            buttonWithExtraData : {text: '핸디캡 (연장미포함)', img: Medal}
        },
    ]

    const subArray2 = [
        {
            id: 5,
            type: "핸디캡",
            team1: "바살룬즈 IF",
            team2: "스타백 IF",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 6,
            type: "핸디캡",
            team1: "바살룬즈 IF",
            team2: "스타백 IF",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 7,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData : {text: '언오버 (연장미포함)', img: Jewel}
        },
        {
            id: 8,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            isLastSubarray: true,
            buttonWithExtraData : {text: '핸디캡 (연장미포함)', img: Medal}
        },
    ]
    const subArray3 = [
        {
            id: 20,
            type: "핸디캡",
            team1: "SV Kuchl",
            team2: "FC Blau Weiss Linz",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 21,
            type: "핸디캡",
            team1: "SV Kuchl",
            team2: "FC Blau Weiss Linz",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 22,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData : {text: '언오버 (연장미포함)', img: Jewel}
        },
        {
            id: 23,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            isLastSubarray: true,
            buttonWithExtraData : {text: '핸디캡 (연장미포함)', img: Medal}
        },
    ]

    const subArray4 = [
        {
            id: 24,
            type: "핸디캡",
            team1: "AZ 알카르크 B",
            team2: "FC 오스",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 25,
            type: "핸디캡",
            team1: "AZ 알카르크 B",
            team2: "FC 오스",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 26,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData : {text: '언오버 (연장미포함)', img: Jewel}
        },
        {
            id: 27,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData : {text: '핸디캡 (연장미포함)', img: Medal}
        },
    ]

    const subArray5 = [
        {
            id: 29,
            type: "핸디캡",
            team1: "PSV 에인트호번 (asd)",
            team2: "FC 에인트호번",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 30,
            type: "핸디캡",
            team1: "PSV 에인트호번 (asd)",
            team2: "FC 에인트호번",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 31,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData : {text: '언오버 (연장미포함)', img: Jewel}
        },
        {
            id: 32,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData : {text: '핸디캡 (연장미포함)', img: Medal}
        },
    ]

    const subArray6 = [
        {
            id: 34,
            type: "핸디캡",
            team1: "버밍엄 시티 FC",
            team2: "뉴캐슬 유나이티드12",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 35,
            type: "핸디캡",
            team1: "버밍엄 시티 FC",
            team2: "뉴캐슬 유나이티드12",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 36,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData : {text: '언오버 (연장미포함)', img: Jewel}
        },
        {
            id: 37,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            isLastSubarray: true,
            buttonWithExtraData : {text: '핸디캡 (연장미포함)', img: Medal}
        },
    ]
    const subArray7 = [
        {
            id: 34,
            type: "핸디캡",
            team1: "노팅엄 포리스트",
            team2: "사우스햄튼 FC",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 35,
            type: "핸디캡",
            team1: "노팅엄 포리스트",
            team2: "사우스햄튼 FC",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 36,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData : {text: '언오버 (연장미포함)', img: Jewel}
        },
        {
            id: 37,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            isLastSubarray: true,
            buttonWithExtraData : {text: '핸디캡 (연장미포함)', img: Medal}
        },
    ]
    const subArray8 = [
        {
            id: 34,
            type: "핸디캡",
            team1: "레딩",
            team2: "울버햄프턴 원더랜드",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "none",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 35,
            type: "핸디캡",
            team1: "레딩",
            team2: "울버햄프턴 원더랜드",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: false,
            hasDown: false,
            bet: "right",
            buttonWithExtraData : {text: '승무패 (연장미포함)', img: Cup}
        },
        {
            id: 36,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            buttonWithExtraData : {text: '언오버 (연장미포함)', img: Jewel}
        },
        {
            id: 37,
            type: "언오버",
            team1: "오버",
            team2: "언더",
            stat1: 2.26,
            stat2: 2.96,
            stat3: 3.47,
            hasUp: true,
            hasDown: true,
            bet: "none",
            isLastSubarray: true,
            buttonWithExtraData : {text: '핸디캡 (연장미포함)', img: Medal}
        },
    ]
    const FirstArray = [
        {
            id: 9,
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
            id: 10,
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
            id: 11,
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
            subArray: subArray3,
            isLast: true
        },
    ]

    const ThirdArray = [
        {
            id: 12,
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
            subArray: subArray4
        },
        {
            id: 13,
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
            subArray: subArray5,
            isLast: true
        },
    ]

    const FourthArray = [
        {
            id: 14,
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
            subArray: subArray6
        },
        {
            id: 15,
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
            subArray: subArray7
        },
        {
            id: 16,
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
            subArray: subArray8,
            isLast: true
        },
        
    ]

    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedCarrier, setSelectedCarrier] = useState("국가선택")
    const [isHover1, setHover1] = useState(null)
    const [isOpen, setOpen] = useState(new Array(20).fill(false))
    const [isButtonClicked, setButtonClicked] = useState("")
    console.log(`isHover1`, isHover1)

    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }
    
    useEffect(() => {
        if (!selectedCarrier) {
            setSelectedCarrier('value')
        }
    }, [selectedCarrier])

    const gameResultButton = (
        <div
            style={{
                width: "35.06rem",
                height: "6.75rem",
                borderWidth: '0.1875rem',
                fontSize: '2.625rem'
            }}
            className="flex items-center justify-between bg-white placeholder-gray-r8c8c8c outline-none rounded-2xl border border-gray-cccccc font-spoqaMedium text-15px tracking-tight text-gray-r454545 group" 
        >
            <div className="flex">
                <img style={{width: '3.75rem', marginLeft: '2.0625rem', marginRight: '0.9375rem'}} className="object-contain" src={GlobeIcon} alt="" />
                <p style={{color:"#7b7b7b"}} className="group-hover:text-black">{selectedCarrier}</p>
            </div>
            <img style={{width: '1.5625rem', marginRight: '2.0625rem'}} src={ArrowBlack} alt="" />
        </div>
    )

    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`); 
    };
      
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }; 

    function SearchDropdownCell({ items }) {
        return items.map(item => {
            let isChecked = checkedState[item.id]
            return (
                <div onPointerUp={() => handleOnChange(item.id)} style={{height: '8rem', paddingLeft: '3rem', paddingRight: '3rem', fontSize: '2.8125rem', fontWeight: '400', fontFamily: 'SpoqaHanSansNeoMedium', margin: '0'}} className=" relative w-full border-b border-gray-ececec flex items-center justify-between pt-3">
                    <p>{item.text}</p>
                    <input
                        // style={{right: '1.875rem', top: '2.5rem'}}
                        className='w-12 h-12'
                        type="checkbox"
                        checked={isChecked}
                        name={item.text}
                        // onChange={() => handleOnChange(item.id)}
                    />
                </div>

            )
        });
    }

    const searchDropdown = (
        <div className="flex flex-col items-center bg-white rounded-3xl shadow-plain5 text-gray-r393e41 font-spoqaMedium text-5xl overflow-hidden">
            <div style={{height:"calc(var(--vh) * 100 - 40rem)"}} className='w-full overflow-y-scroll'>
                <SearchDropdownCell items={filterArray} />
            </div>
            <div style={{padding: '1.875rem'}} className="w-full h-full flex items-center justify-center">
                <button 
                    style={{
                        backgroundColor: "#171a1d",
                        height:"7.3125rem",
                        padding: '1px',
                    }} 
                    className="relative w-1/2 flex mr-4 items-center justify-center rounded-xl hover:opacity-75"
                    onClick={() => setDropdownOpen(false)}
                >
                    <div 
                        style={{
                            borderColor: "#737579",
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }} 
                        className="flex w-full h-full items-center rounded-lg justify-center border cursor-pointer"
                    >
                        <span style={{textShadow: "1px 1px 1px #00000070", fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-white" >
                            확인
                        </span>
                    </div>
                </button>
                <button 
                    style={{
                        backgroundColor: "#cb4343",
                        height:"7.3125rem",
                        padding: '1px',
                    }} 
                    className="relative w-1/2 flex items-center justify-center rounded-xl hover:opacity-75"
                    onClick={() => setCheckedState(filterArray.fill(false))}
                >
                    <div 
                        style={{
                            borderColor: "#f36576",
                            background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                        }} 
                        className="flex w-full h-full items-center justify-center rounded-lg border cursor-pointer"
                    >
                        <span style={{textShadow: "1px 1px 1px #00000070", fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-white" >
                            초기화
                        </span>
                    </div>
                </button>
            </div>
        </div>
    )

    const InboxSearch = (

        // <DropDownInput isBetCombination={true} />
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
        <div className="flex">
            <button 
                style={{
                    width:"29.6875rem", 
                    height: "7.4375rem",
                    padding: '1px',
                    fontSize: '2.625rem',
                    marginRight: '0.375rem',
                    backgroundColor: "#ad7b4e"
                }}  
                className="flex items-center justify-center rounded-xl"
                onMouseEnter={() => setHover1(0)}
                onMouseLeave={() => setHover1(null)}
            >
                <div 
                    style={{
                        borderColor: "#f9b26d",
                        background: "linear-gradient(to bottom, #f8a351, #f38236)" ,
                        color: "#ffffff",
                        textShadow: "1px 1px 0px rgba(0,0,0,0.5)",
                        padding: '0 1.3125rem'
                    }}  
                    className="flex w-full h-full items-center justify-between rounded-lg border bg-gradient-to-b cursor-pointer"
                >
                    <span style={{width: '20.8rem'}} className="truncate text-left font-spoqaMedium tracking-tight">{team1}</span>
                    <span className="font-roboto tracking-tight">{stat1}</span>
                </div>
            </button>

            <button 
                style={{
                    width:"10.2rem", 
                    height: "7.4375rem",
                    padding: '1px',
                    fontSize: '2.625rem',
                    marginRight: '0.375rem',
                    backgroundColor: "#ad7b4e"
                }}  
                className="flex items-center justify-center rounded-xl"              
            >
                <div 
                    style={{
                        borderColor: "#f9b26d",
                        background: "linear-gradient(to bottom, #f8a351, #f38236)",
                        color: "#ffffff",
                        textShadow: "1px 1px 0px rgba(0,0,0,0.5)",
                    }}  
                    className="flex w-full h-full items-center justify-center rounded-lg border bg-gradient-to-b cursor-pointer"
                >
                    <span className="font-spoqaMedium tracking-tight">{stat2}</span>
                </div>
            </button>

            <button 
                style={{
                    width:"29.6875rem", 
                    height: "7.4375rem",
                    padding: '1px',
                    fontSize: '2.625rem',
                    backgroundColor: "#ad7b4e"
                }}  
                className="relative flex items-center justify-center rounded-xl"
                onMouseEnter={() => setHover1(1)}
                onMouseLeave={() => setHover1(null)}
            >
                <div 
                    style={{
                        borderColor:"#f9b26d",
                        background: "linear-gradient(to bottom, #f8a351, #f38236)",
                        color: "#ffffff",
                        textShadow: "1px 1px 0px rgba(0,0,0,0.5)",
                        padding: '0 1.3125rem'
                    }}  
                    className="flex w-full h-full items-center justify-between rounded-lg border bg-gradient-to-b cursor-pointer"
                >
                    <span className="font-roboto tracking-tight">{stat3}</span>
                    <span className="truncate font-spoqaMedium tracking-tight text-right">{team2}</span>
                </div>
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
        stat2Color = "none",
        isSubButton,
        buttonWithExtraData
    }) => {
        const [isHover3, setHover3] = useState("")

        return (
            <div className="flex">
                <button 
                    style={{
                        width:"29.6875rem", 
                        height: `${isSubButton? "9.9375rem" : "6.4375rem"}`,
                        padding: '1px',
                        fontSize: '2.625rem',
                        marginRight: '0.45rem',
                        backgroundColor: (`${id}left` === isButtonClicked || `${id}left` === isHover3) ? "#cb4343" : "#b3b3b3" 
                    }}  
                    className="flex items-center relative justify-center rounded-xl"
                    onClick={() => {
                        setButtonClicked(`${id}left`)
                        setAddedCard(prevArray => 
                        [...prevArray, {id: _uniqueId('prefix-'), value: "left"}])}}
                    onMouseEnter={() => setHover3(`${id}left`)}
                    onMouseLeave={() => setHover3(null)}

                >
                    <div 
                        style={{
                            padding: '0 0.7875rem',
                            borderColor: (`${id}left` === isButtonClicked || `${id}left` === isHover3) ? "#ff7982" : "#ffffff",
                            background:  (`${id}left` === isButtonClicked || `${id}left` === isHover3)
                            ? "linear-gradient(to bottom, #ff535f, #ee4e5a)"  
                            : "linear-gradient(to bottom, #f9f9f9, #e7ecf1)",
                            color: (`${id}left` === isButtonClicked || `${id}left` === isHover3) ? "#ffffff" : "#454545",
                            textShadow: (`${id}left` === isButtonClicked || `${id}left` === isHover3) ? "1px 1px 0px #00000070" : ""
                        }}  
                        className="flex w-full h-full items-center justify-between rounded-lg border bg-gradient-to-b cursor-pointer"
                    >
                        <span className="truncate text-right font-spoqaMedium tracking-tight mt-1">{truncate(team1,10, 10)}</span>
                        <span style={{color: stat1Color === "red" && `${id}left` !== isButtonClicked && `${id}left` !== isHover3 ? "#d52e2e" : ""}} className="flex items-center font-roboto tracking-tight">
                            {hasUp === true && (
                                <img className='mr-4' style={{width: '1.3125rem', height: '1.125rem'}} src={UpIcon} alt="" />
                            )} 
                            <p>{stat1}</p>
                        </span>
                    </div>
                    {buttonWithExtraData?.text && (
                        <p style={{fontSize: '1.875rem', marginLeft: '1.4875rem'}} className="flex mt-4 w-full absolute top-0 left-0 items-center tracking-tight">
                            <img style={{maxWidth: '2.5625rem', maxHeight: '2.5625rem', marginRight: '0.1875rem'}} className="" src={buttonWithExtraData?.img} alt="" />
                            <span style={{color: `${id}left` === isButtonClicked || `${id}left` === isHover3 ? "#fadcdc" : "#7b7b7b"}} className='text-gray-r7b7b7b font-spoqaMedium'>{buttonWithExtraData?.text}</span>
                        </p>
                    )}
                </button>

                <button 
                    style={{
                        width:"10rem", 
                        height: `${isSubButton? "9.9375rem" : "6.4375rem"}`,
                        padding: '1px',
                        fontSize: '2.625rem',
                        marginRight: '0.45rem',
                        backgroundColor: (`${id}middle` === isButtonClicked || `${id}middle` === isHover3) ? "#cb4343" : "#b3b3b3" 
                    }}  
                    className="flex items-center justify-center rounded-xl"
                    onClick={() => {
                        setButtonClicked(`${id}middle`)
                        setAddedCard(prevArray => 
                        [...prevArray, {id: _uniqueId('prefix-'), value: "middle"}])}}
                    onMouseEnter={() => setHover3(`${id}middle`)}
                    onMouseLeave={() => setHover3(null)}

                >
                    <div 
                        style={{
                            padding: '0 0.6875rem',
                            borderColor: (`${id}middle` === isButtonClicked || `${id}middle` === isHover3) ? "#ff7982" : "#ffffff",
                            background: (`${id}middle` === isButtonClicked || `${id}middle` === isHover3)
                            ? "linear-gradient(to bottom, #ff535f, #ee4e5a)"  
                            : "linear-gradient(to bottom, #f9f9f9, #e7ecf1)",
                            color: (`${id}middle` === isButtonClicked || `${id}middle` === isHover3) ? "#ffffff" : "#454545",
                            textShadow: (`${id}middle` === isButtonClicked || `${id}middle` === isHover3) ? "1px 1px 0px #00000070" : ""
                        }}  
                        className="flex items-center w-full h-full justify-center rounded-lg border bg-gradient-to-b cursor-pointer px-10px pt-2px"
                    >
                        <span  style={{color: stat2Color === "blue" && `${id}middle` !== isButtonClicked && `${id}middle` !== isHover3 ? "#0056a6" : ""}} className="font-roboto tracking-tight">{stat2}</span>
                    </div>
                </button>

                <button 
                    style={{
                        width:"29.6875rem", 
                        height: `${isSubButton? "9.9375rem" : "6.4375rem"}`,
                        padding: '1px',
                        fontSize: '2.625rem',
                        marginRight: '0.45rem',
                        backgroundColor: (`${id}right` === isButtonClicked || `${id}right` === isHover3) ? "#cb4343" : "#b3b3b3" 
                    }}  
                    className="flex items-center justify-center rounded-xl"
                    onClick={() => {
                        setButtonClicked(`${id}right`)
                        setAddedCard(prevArray => 
                        [...prevArray, {id: _uniqueId('prefix-'), value: "right"}])}}
                    onMouseEnter={() => setHover3(`${id}right`)}
                    onMouseLeave={() => setHover3(null)}
                >
                    <div 
                        style={{
                            padding: '0 0.7875rem',
                            borderColor: (`${id}right` === isButtonClicked || `${id}right` === isHover3) ? "#ff7982" : "#ffffff",
                            background: (`${id}right` === isButtonClicked || `${id}right` === isHover3)
                            ? "linear-gradient(to bottom, #ff535f, #ee4e5a)"  
                            : "linear-gradient(to bottom, #f9f9f9, #e7ecf1)",
                            color: (`${id}right` === isButtonClicked || `${id}right` === isHover3) ? "#ffffff" : "#454545",
                            textShadow: (`${id}right` === isButtonClicked || `${id}right` === isHover3) ? "1px 1px 0px #00000070" : ""
                        }}  
                        className="flex w-full h-full items-center justify-between rounded-lg border bg-gradient-to-b cursor-pointer"
                    >
                        <span className="flex items-center font-roboto tracking-tight">
                            <p>{stat3}</p>
                            {hasDown === true && (
                                <img className='ml-4' style={{width: '1.3125rem', height: '1.125rem'}} src={DownIcon} alt="" />
                            )}
                            </span>
                        <span className="truncate font-spoqaMedium tracking-tight text-left mt-1">{team2 === "FC Blau Weiss Linz" ? truncate(team2, 13, 13) : truncate(team2, 10, 8) }</span>
                    </div>
                </button>
            </div>
        )
    }

    function LeagueCell({
        array = [], 
        isSubArray = false, 
        isLastSubarray = false,
        isSubButton
    }) {
        const [isHover2, setHover2] = useState(null)
        console.log(`isHover2`, isHover2)
        const handleOnChange = (position) => {
            const updatedCheckedState = isOpen.map((item, index) =>
              index === position ? !item : item
            );
            setOpen(updatedCheckedState);
        }; 
        
        return array?.map(items => (
            <div className="flex flex-col">
                <div 
                    style={{backgroundColor: isSubArray === true ? "#f1f1f1" : "#ffffff", height: `${isSubButton ? "11.5625rem" : "8.0625rem"}`, borderBottomWidth: '0.1875rem'}} 
                    className={`${items.isLast && isOpen[items.id] === false && " rounded-b-xl"} ${items.isLastSubarray === true && "rounded-b-xl"} w-full border-b border-gray-dddddd flex items-center`}
                >
                    
                    <div style={{marginLeft: '0.75rem'}} className="h-full flex items-center">
                        <NormalOptions  
                            isSubButton={isSubButton}
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
                            buttonWithExtraData = {items?.buttonWithExtraData}
                        />
                    </div>
                    {isSubArray === false && (
                        <div className="relative">
                            <button 
                                style={{
                                    width:"5.625rem",
                                    height: "6.4375rem",
                                    padding: '1px',
                                    backgroundColor: isOpen[items.id] === true ? "#5b646e" : "#171a1d"
                                }} 
                                className="relative flex items-center justify-center rounded-xl group hover:opacity-75"
                                onClick={() => handleOnChange(items.id)}
                                onMouseOver={() => setHover2(items.id)}
                                onMouseLeave={() => setHover2(null)}
                            >
                                <div 
                                    style={{
                                        borderColor: isOpen[items.id] === true ? "#8f97a0" : "#737579",
                                        background: isOpen[items.id] === true
                                        ? "linear-gradient(to bottom, #8995a2, #757d87)"
                                        : "linear-gradient(to bottom, #585b5e, #303337)"
                                    }} 
                                    className="flex items-center justify-center w-full h-full rounded-lg border cursor-pointer"
                                >
                                    <span style={{textShadow: "1px 1px 1px #00000070"}} className="font-spoqaMedium tracking-tight text-white" >
                                        {isOpen[items.id] === true ? (
                                            <img className='w-4' src={Minus} alt="" />
                                        ) : (
                                            <img style={{width: '1.4375rem'}} className='' src={Plus} alt="" />
                                        )}
                                    </span>
                                </div>
                            </button>
                        </div>
                    )}
                                                

                </div>
                {isOpen[items.id] === true && (
                    <LeagueCell isSubButton array={items.subArray} isSubArray={true} isLastSubarray={items.isLast} />
                )}
            </div>
        ))
    }

    const LeagueGroup = ({
        flag = NorwayIcon, 
        title,
        array = FirstArray,
        isLastElement = false
    }) => {
        const [isHover4, setHover4] = useState("")
        console.log(`isHover4`, isHover4)
        return (
            <div style={{paddingTop: '1.6875rem'}} className="relative flex flex-col">
                <img style={{filter: "drop-shadow(5px 5px 5px #00000020)", width: '77.625rem'}} className="absolute z-10" src={NormalCell} alt="" />
                <div style={{height: '7.5rem'}} className="w-full z-20 flex items-center relative">
                    <img style={{width: '3.9375rem', marginLeft: '1.8125rem'}} className="" src={FootballIcon} alt="" />
                    <img style={{width: '5.625rem', marginLeft: '1.0625rem', marginRight: '0.875rem'}} className="" src={flag} alt="" />
                    <p 
                        style={{fontSize: '2.625rem'}}
                        className="font-spoqaMedium text-white truncate pt-1" 
                        onMouseEnter={() => setHover4(title)}
                        onMouseLeave={() => setHover4("")}
                    >
                        {title}
                    </p>
                    <div style={{fontSize: '2.625rem', marginTop: '0.025rem'}} className="flex absolute mr-5 right-0 flex-col text-blue-r8494a4 font-spoqaMedium items-center justify-center h-full">
                        <p className="tracking-tight">2021-06-29</p>
                        <p style={{marginTop: '-0.875rem'}} className="flex w-full justify-end items-center tracking-tight">
                            <img style={{width: '2.375rem', height: '2.375rem', marginRight: '0.2875rem'}} className="mb-1" src={Clock} alt="" />
                            <span>15:45</span>
                        </p>
                    </div>
                </div>
                {/* <div className="h-px w-full bg-gray-dddddd" /> */}
                
                <div style={{paddingBottom:  `${isLastElement ? "1.125rem" : ""}`, borderBottomWidth: `${isLastElement ? "0.1875rem" : ""}`}} className={`w-full ${isLastElement ? "border-b border-gray-ececec" : "rounded-b-xl"} bg-white z-20 flex flex-col shadow`}>
                    <LeagueCell array={array} />
                </div>
            </div>
        ) 
    }

    return (
        <div style={{borderRadius:"0.5rem"}} className="w-full shadow-subNavbar bg-gray-fafafa">
            <div style={{paddingTop: '2.1875rem', paddingBottom: '1.125rem'}} className="flex w-full pb-0 font-spoqaMedium tracking-tight text-gray-r454545">
                <div style={{fontSize: '2.625rem', marginLeft:"11.15rem"}} className="h-full flex items-center flex-shrink-0 space-x-2">
                    <p>승(홈)</p>
                    <img className='w-7 h-7 object-contain mb-1' src={ArrowUp} alt="" />
                </div>
                <div style={{fontSize: '2.625rem', marginLeft: "14.8rem"}} className="h-full flex items-center flex-shrink-0">무</div>
                <div style={{fontSize: '2.625rem', marginLeft: "13.4rem"}} className="h-full flex items-center flex-shrink-0 space-x-2">
                    <p>패(원정)</p>
                    <img className='w-7 h-7 object-contain mb-1' src={ArrowDown} alt="" />
                </div>
                <div style={{fontSize: '2.625rem', marginLeft: "10rem"}} className="h-full mr-8 flex items-center flex-shrink-0">정보</div>
            </div>
        

            <div className="relative flex flex-col justify-start items-center">
                <img style={{width: '77.625rem'}} className="absolute object-contain" src={BonusCell} alt="" />
                <img style={{width: '6.75rem'}} className="absolute left-6 z-50 object-contain" src={Gift} alt="" />
                <div className="w-full z-20 flex items-center">
                    <p style={{color:"#ffde00", textShadow: "1px 1px 0px rgba(0, 0, 0, 0.4)", fontSize: '2.625rem', marginTop:"1.6rem"}} className="ml-36 font-spoqaBold">보너스 이벤트</p>
                </div>
                <div style={{marginLeft: '1.5rem'}} className="w-full z-20 flex items-center mt-8">
                    <EventOptions 
                        team1 = "다폴더 보너스 배당"
                        team2 = "◀3폴더 이상 베팅 시"
                        stat1 = "-"
                        stat2 = "VS"
                        stat3 = "-"
                    />
                </div>
            </div>

            <div className="">
                <div style={{width: '76.875rem', height: '8.4375rem', marginTop: '2.6rem', marginLeft: '0.3125rem', borderWidth: '0.1875rem'}} className="flex items-center justify-between border border-gray-dddddd rounded-lg bg-gray-f9f9f9">
                    <div className="flex items-center">
                        <img style={{width: '3.9375rem', marginLeft: '1.3125rem'}} className="object-contain" src={FootballIcon} alt="" />
                        <p style={{fontSize: '2.625rem', marginLeft: '0.6875rem'}} className="font-spoqaMedium text-gray-r454545 mt-1">축구</p>
                        <div 
                            style={{backgroundColor:"#8494a4", fontSize: '2.9375rem', width: '8.125rem', height: '4.5rem'}} 
                            className="rounded-full ml-4 flex items-center justify-center font-spoqaMedium tracking-tight text-white pt-1"
                        >
                            15
                        </div>
                    </div>
                    <div style={{marginRight:'0.6rem'}} className="mr-5px">
                        {InboxSearch}
                    </div>  
                </div>
            </div>

        
            <div style={{marginBottom: '15.9375rem'}} className="">
                <LeagueGroup title="노르웨이 - Eliteserien" />
                <LeagueGroup flag={AustriaIcon} title="오스트리아 - 컵" array={SecondArray}/>
                <LeagueGroup flag={NetherlandIcon} title="네덜란드 - D2" array={ThirdArray}/>
                <LeagueGroup isLastElement flag={UKIcon} title="영국 - U23" array={FourthArray}/>
            </div>
            
            
        </div>
    )
}

export default BetCombinationPanel
