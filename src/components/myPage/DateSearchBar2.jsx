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

const DateSearchBar2 = () => {

    const LeagueExampleArray = [
        {id: 0, text: "200"},
        {id: 1, text: "201"},
        {id: 2, text: "202"},
        {id: 3, text: "203"},
        {id: 4, text: "204"},
        {id: 5, text: "205"},
        {id: 6, text: "206"},
        {id: 7, text: "207"},
        {id: 8, text: "208"},
        {id: 9, text: "209"},
    ]


    const [startDate, setStartDate] = useState(new Date())
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedCarrier, setSelectedCarrier] = useState("전체회차")

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

                <div className="flex space-x-10px items-center  h-full justify-center">
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
                    <div className="pt-px">{InboxSearch}</div>
                    <div className="flex items-center justify-center h-42px w-75px rounded-4px bg-gray-r171a1d hover:opacity-75">
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">검색</span>
                        </div>
                    </div>
                </div>
             
            </div>
    )
}

export default DateSearchBar2
