import React, { useState } from 'react'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
import DownArrowIcon from '../../images/down_arrow_icon.png'
import SearchIcon from '../../images/myPage/search.png'
import DropDownControls from '../dropdowns/DropDownControls'
import InboxTable from './tables/InboxTable'

const Inbox = () => {

    const inboxArray = [
        { 
            id: 0,
            text: "서버 점검 안내", 
            isRead: false,
            time: "2021.06.29 07:35",
            type: "안내",
            isClicked: true,
            path: '/mypage/inbox/1'
        },
        { 
            id: 1,
            text: "정기 점검 안내", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "일반",
            path: '/mypage/inbox/2'
        },
        { 
            id: 2,
            text: "바이너리 서비스 종료 안내", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "일반",
            path: '/mypage/inbox/3'
        },
        { 
            id: 3,
            text: "미니게임 파워볼 동행복권 시스템 정기 점검", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "안내",
            path: '/mypage/inbox/4'
        },
        { 
            id: 4,
            text: "스포츠 & 미니게임 충전 보너스 (21.04.24 변경)", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "이벤트",
            path: '/mypage/inbox/5'
        },
        { 
            id: 5,
            text: "일시: 2021.4.27 화요일 14:00 부터 서버안정화를 위한 정기점검이 진행됩니다.", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "일반",
            path: '/mypage/inbox/6'
        },
        { 
            id: 6,
            text: "입금계좌변경안내", 
            isRead: false,
            time: "2021.06.29 07:35",
            type: "안내",
            path: '/mypage/inbox/7'
        },
        { 
            id: 7,
            text: "입금계좌변경안내", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "안내",
            path: '/mypage/inbox/8'
        },
        { 
            id: 8,
            text: "입금계좌변경안내", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "안내",
            path: '/mypage/inbox/9'
        },
        { 
            id: 9,
            text: "입금계좌변경안내", 
            isRead: false,
            time: "2021.06.29 07:35",
            type: "안내",
            path: '/mypage/inbox/10'
        },
        
    ];

    const [page, setPage] = useState(0)
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedCarrier, setSelectedCarrier] = useState("제목")
    const [checkedState, setCheckedState] = useState(
        new Array(inboxArray.length).fill(false)
    );
    const [isAllSelected, setAllSelected] = useState(false)

    const AllSelectButtonPressed = () => {

        if (isAllSelected === false) {
            setAllSelected(true)
            setCheckedState(Array(inboxArray.length).fill(true))
        } else {
            setAllSelected(false)
            setCheckedState(Array(inboxArray.length).fill(false))
        }
    };

    const dropDownCellClass = "flex w-120px h-40px py-2px bg-white items-center hover:bg-blue-lightGradLight px-14px"



    const searchDropdown = (
        <div className="mt-4px flex flex-col items-center justify-center w-120px overflow-hidden bg-white rounded-md border border-gray-dddddd shadow-plain5 text-gray-r393e41 font-spoqaMedium text-14px tracking-tight">
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("제목")
                setDropdownOpen(false)
            }}>
                제목
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("본문")
                setDropdownOpen(false)
            }}>
                본문
            </button>
        </div>
    )

    const dropdownButton = (
        <div className="flex w-120px h-42px bg-white rounded-md border border-gray-dddddd group ">
            <input  className="w-0 text-16px"/>
            <div className="flex w-full text-gray-r393e41 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight" >
                <label className="ml-14px cursor-pointer group-hover:text-black">{selectedCarrier}</label>
                <img className="w-10px h-6px object-contain mr-10px" src={DownArrowIcon} alt="arrow" /> 
            </div>
        </div>
    )
    
    const InboxSearch = (
        <div className="h-64px w-full bg-gray-f9f9f9 rounded-2xl border border-gray-dddddd flex items-center justify-center space-x-10px">
            <DropDownControls 
                buttonChild={dropdownButton} 
                isDropdownOpen={isDropdownOpen} 
                setDropdownOpen={setDropdownOpen}
            >
                {searchDropdown}
            </DropDownControls>

            <div className="flex w-381px h-42px bg-white rounded-md border border-gray-dddddd">
                <input 
                    className="pl-11px rounded-md placeholder-gray-r7c7c7c w-full text-gray-r393e41 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight"
                    placeholder="검색어를 입력해 주세요"
                />
                <button className="flex items-center justify-center w-42px h-42px rounded-md bg-gradient-to-b from-gray-r555555 via-gray-r555555 to-gray-r333333 -mt-px -mr-px flex-shrink-0  hover:opacity-75">
                    <img src={SearchIcon} alt=""/>
                </button>
            </div>
        </div>
    )
    
    return (
        <div>
            <MyPageTitle title="쪽지관리" inboxCount="7"/>

            <div className="mt-20px"></div>
            <InboxTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray}/>

            <div className="mt-20px h-36px w-full flex items-center justify-between">
                <div className="flex space-x-2px">
                    <button 
                        className="flex items-center justify-center w-90px h-36px rounded-4px bg-gray-r171a1d hover:opacity-75"
                        onClick={() => AllSelectButtonPressed()}
                    >
                        <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-red-cb4343 hover:opacity-75">
                        <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">선택삭제</span>
                        </div>
                    </button>
                </div>
                <button className="flex items-center justify-center h-36px w-114px rounded-4px bg-blue-r0070d9 hover:opacity-75">
                    <div className="flex items-center justify-center h-34px w-112px bg-black rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-14px text-white">전체읽음처리</span>
                    </div>
                </button>
            </div>

            <div className="flex w-full justify-center mt-4px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

            <div className="-mt-30px mb-60px">
                {InboxSearch}
            </div>
        </div>
    )
}

export default Inbox
