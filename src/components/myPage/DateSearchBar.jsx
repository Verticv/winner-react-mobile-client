import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import ko from 'date-fns/locale/ko';
import CalendarIcon from '../../images/myPage/betHistory/calendar.png'
import DropDownControls from 'components/dropdowns/DropDownControls';
import ArrowDownGray from '../../images/arrows/arrow_down_gray.png'
import './DatePicker.css'
registerLocale('ko', ko)

const DateSearchBar = ({
    isLeagueSearch = false, 
    hasIdSearch = false,
    has3MonthSearch = false,
    isGameResultsSearch = false
}) => {

    const LeagueExampleArray = [
        {id: 0, text: "League1"},
        {id: 1, text: "League2"},
        {id: 2, text: "League3"},
        {id: 3, text: "League4"},
        {id: 4, text: "League5"},
        {id: 5, text: "League6"},
        {id: 6, text: "League7"},
        {id: 7, text: "League8"},
        {id: 8, text: "League9"},
        {id: 9, text: "League10"},
    ]


    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedCarrier, setSelectedCarrier] = useState("리그선택")

    const dropDownCellClass = "flex w-full h-30px py-2px bg-white items-center hover:bg-blue-lightGradLight px-10px"

    const gameResultButton = (
        <div className="flex items-center justify-between bg-white placeholder-gray-r8c8c8c outline-none w-138px h-42px rounded-md border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c hover:text-gray-r585858" >
            <p className="mt-px">{selectedCarrier}</p>
            <img src={ArrowDownGray} alt="" />
        </div>
    )

    function DropdownCells({ items }) {
        return items.map(item => (
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier(item.text)
                setDropdownOpen(false)
            }}>
                {item.text}
            </button>
        ));
    }


    const searchDropdown = (
        <div style={{height:"249px"}} className="mt-4px flex flex-col items-center justify-center w-138px overflow-hidden bg-white rounded-md border border-gray-dddddd text-gray-r8c8c8c font-spoqaMedium text-14px tracking-tight">
            <div style={{width:"134px"}} className="pt-4px mt-2px h-full overflow-y-scroll overflow-x-hidden">
                <DropdownCells items={LeagueExampleArray} />
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


    return (
        <div className="h-63px w-full bg-gray-f9f9f9 mt-20px rounded-2xl border border-gray-dddddd flex items-center justify-center space-x-10px">
                
                {isLeagueSearch === true && (
                    <div className="space-x-5px">
                        <input 
                            placeholder="리그선택"
                            className="pt-px mt-px placeholder-gray-r8c8c8c flex-shrink-0 outline-none w-138px h-42px rounded-md border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c" 
                        />
                        <input
                            placeholder="팀명검색" 
                            className="pt-px mt-px placeholder-gray-r8c8c8c flex-shrink-0 outline-none w-138px h-42px rounded-md border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c" />
                    </div>
                )}

                {isGameResultsSearch === true && (
                    <div className="space-x-5px flex">
                        <div className="pt-px">{InboxSearch}</div>
                        <input
                            placeholder="팀명검색" 
                            className="pt-px mt-px placeholder-gray-r8c8c8c flex-shrink-0 outline-none w-138px h-42px rounded-md border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c" />
                    </div>
                )}

                <div className="flex space-x-10px items-center w-304px h-full">
                    <div className="relative">
                        <DatePicker 
                            className="pt-px mt-px flex-shrink-0 outline-none w-138px h-42px rounded-md border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c focus:ml-10px"
                            locale="ko" 
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                            dateFormatCalendar="yyyy년 MM월"
                        />
                        <img src={CalendarIcon} alt="" className="absolute top-0 right-0 mt-14px mr-10px" />
                    </div>
                    <span className="font-spoqaMedium text-14px text-gray-r454545 mt-px">~</span>
                    <div className="relative">
                        <DatePicker 
                            className="pt-px mt-px flex-shrink-0 outline-none w-138px h-42px rounded-md border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c" 
                            locale="ko"
                            selected={endDate} 
                            onChange={(date) => setEndDate(date)}
                            dateFormat="yyyy-MM-dd"
                            dateFormatCalendar="yyyy년 MM월"
                        />
                        <img src={CalendarIcon} alt="" className="absolute top-0 right-0 mt-14px mr-10px" />
                    </div>
                </div>
                <div className="flex h-full space-x-6px items-center">
                    <div className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r004b8a hover:opacity-75">
                        <div className="flex items-center justify-center h-40px w-73px rounded-4px border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">오늘</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r2068b2 hover:opacity-75">
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">1주일</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r286fce hover:opacity-75">
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r538dcf bg-gradient-to-b from-blue-r3176c5 via-blue-r286bb7 to-blue-r1c5ca5 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">15일</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r286fce hover:opacity-75">
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r70a8f5 bg-gradient-to-b from-blue-r5497f4 via-blue-r4985d8 to-blue-r3d71b8 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">1개월</span>
                        </div>
                    </div>

                    {has3MonthSearch && (
                        <div className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r177cce hover:opacity-75">
                            <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">3개월</span>
                            </div>
                        </div>
                    )}

                    {!hasIdSearch ? (
                        <div className="flex items-center justify-center h-42px w-75px rounded-4px bg-gray-r171a1d hover:opacity-75">
                            <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">검색</span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r177cce hover:opacity-75">
                            <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">3개월</span>
                            </div>
                        </div>
                    )}
                    
                </div>
                
                {hasIdSearch && (
                    <div className="flex space-x-5px">
                        <input 
                            className="w-138px h-42px rounded-4px border border-gray-dddddd bg-white outline-none text-15px font-spoqaMedium tracking-tight text-gray-r8c8c8c px-10px" 
                            placeholder="아이디" 
                        />
                        <div 
                            style={{
                                width:"75px",
                                height:"42px",
                                borderRadius: "4px",
                            }} 
                            className="flex items-center justify-center rounded-4px bg-gray-r171a1d hover:opacity-75"
                        >
                            <div 
                                style={{
                                    width:"73px", 
                                    height:"40px",
                                    background: "linear-gradient(to bottom, #585b5e, #303337)",
                                    borderRadius: "3px"
                                }} 
                                className="flex items-center justify-center bg-black rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r585b5e to-gray-r303337 cursor-pointer"
                            >
                                <span className="font-spoqaMedium tracking-tight text-14px text-white">검색</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
    )
}

export default DateSearchBar
