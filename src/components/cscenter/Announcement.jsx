import MobileDropDownControls from 'components/dropdowns/MobileDropDownControls';
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import DownArrowIcon from '../../images/down_arrow_icon.png'
import SearchIcon from '../../images/myPage/search.png'
import AnnouncementTable from './tables/AnnouncementTable'

const Announcement = () => {

    const inboxArray = [
        {
            id: 0,
            type: "스포츠북",
            title: "농구[쿼터] / 배구[세트] 스페셜 규정",
            isNew: true,
            time: "2021.06.29"
        },
        {
            id: 1,
            type: "스포츠북",
            title: "야구스포츠 스페셜 규정",
            isNew: false,
            time: "2021.06.29"
        },
        {
            id: 2,
            type: "스포츠북",
            title: "예비 도메인 안내",
            isNew: false,
            time: "2021.06.29"
        },
        {
            id: 3,
            type: "기타",
            title: "은행별 점검시간안내",
            isNew: false,
            time: "2021.06.29"
        },
        {
            id: 4,
            type: "기타",
            title: "스포츠 종목별 규정",
            isNew: false,
            time: "2021.06.29"
        },
        {
            id: 5,
            type: "스포츠북",
            title: "미니게임 통합규정",
            isNew: false,
            time: "2021.06.29"
        },
        {
            id: 6,
            type: "미니게임",
            title: "스포츠게임 관련규정",
            isNew: false,
            time: "2021.06.29"
        },
        {
            id: 7,
            type: "카지노",
            title: "에볼루션카지노 이용안내",
            isNew: false,
            time: "2021.06.29"
        },
        {
            id: 8,
            type: "스포츠북",
            title: "라이브 베팅 기본규정",
            isNew: false,
            time: "2021.06.29"
        },
        {
            id: 9,
            type: "스포츠북",
            title: "핸디캡의 이해",
            isNew: false,
            time: "2021.06.29"
        },
        
    ]


    const [page, setPage] = useState(0)
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedCarrier, setSelectedCarrier] = useState("제목")
    const [checkedState, setCheckedState] = useState(
        new Array(inboxArray.length).fill(false)
    );

    const dropDownCellClass = "flex w-120px h-40px py-2px bg-white items-center px-14px"

    const searchDropdown = (
        <div style={{width: '15rem'}} className="mt-4px flex flex-col items-center justify-center w-120px overflow-hidden bg-white rounded-md border border-gray-dddddd text-gray-r393e41 font-spoqaMedium text-14px tracking-tight">
            <button style={{width: '15rem', height: '6.75rem', fontSize: '2.8125rem'}} className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("제목")
                setDropdownOpen(false)
            }}>
                제목
            </button>
            <button style={{width: '15rem', height: '6.75rem', fontSize: '2.8125rem'}} className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("본문")
                setDropdownOpen(false)
            }}>
                본문
            </button>
            <button style={{width: '15rem', height: '6.75rem', fontSize: '2.8125rem'}} className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("작성자")
                setDropdownOpen(false)
            }}>
                작성자
            </button>
        </div>
    )

    const dropdownButton = (
        <div style={{width: '15rem', borderWidth: '0.1875rem'}} className="flex h-full bg-white rounded-md border border-gray-dddddd group">
            <input  className="w-0 text-16px"/>
            <div
                className="flex w-full text-gray-r393e41 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight" 
            >
                <label style={{fontSize: '2.8125rem', marginLeft: '1.6875rem'}} className="cursor-pointer group-hover:text-black">{selectedCarrier}</label>
                <img style={{width: '1.5625rem', height: '1rem', marginRight: '1.5625rem'}} className="w-10px h-6px object-contain" src={DownArrowIcon} alt="arrow" /> 
            </div>
        </div>
    )

    const InboxSearch = (
        <div style={{padding: '1.9375rem', height: '10.4375rem', borderWidth: '0.1875rem'}} className="w-full bg-gray-f9f9f9 rounded-2xl border border-gray-dddddd flex items-center justify-center space-x-10px">
            <MobileDropDownControls 
                buttonChild={dropdownButton} 
                isDropdownOpen={isDropdownOpen} 
                setDropdownOpen={setDropdownOpen}
                dropdownContainerStyle={{marginTop: '6.75rem'}}
            >
                {searchDropdown}
            </MobileDropDownControls>

            <div style={{borderWidth: '0.1875rem'}} className="flex w-full h-full bg-white rounded-md border border-gray-dddddd">
                <input 
                    style={{fontSize: '2.8125rem', paddingLeft: '1.5625rem'}}
                    className="rounded-md placeholder-gray-r7c7c7c w-full text-gray-r393e41 font-spoqaMedium outline-none h-full justify-between items-center tracking-tight"
                    placeholder="검색어를 입력해 주세요"
                />
                <button style={{width: '6.75rem'}} className="flex items-center justify-center h-full rounded-md bg-gradient-to-b from-gray-r555555 via-gray-r555555 to-gray-r333333 -mt-px -mr-px flex-shrink-0 hover:opacity-75">
                    <img style={{width: '3.125rem', height: '3.125rem'}} src={SearchIcon} alt=""/>
                </button>
            </div>
        </div>
    )

    return (
        <div>
            <div className="" />

            <div style={{borderRadius:"1em", margin: '1.875rem', marginTop: '0'}} className="shadow-subNavbar overflow-hidden">
                <div className="flex flex-col w-full">
                    <AnnouncementTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray}/>
                </div>
            </div>

            <div style={{margin: '3.75rem 0'}} className="flex w-full justify-center">
                <Pagination withMarginBottom={false} page={page} setPage={setPage}/>   
            </div>

            <div style={{margin: '1.875rem', marginTop: '3.75rem', marginBottom: '14rem'}} className="">
                {InboxSearch}
            </div>
            <BottomNavbar />
        </div>
    )
}

export default Announcement
