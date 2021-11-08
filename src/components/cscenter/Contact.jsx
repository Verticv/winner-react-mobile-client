import HorizontalMenu from 'components/horizontalMenus/HorizontalMenu';
import MyPageTitle from 'components/myPage/MyPageTitle';
import React, { useState } from 'react'
import Icon1 from '../../images/myPage/betHistory/ico_1.png'
import Icon2 from '../../images/myPage/betHistory/ico_2.png'
import Icon3 from '../../images/myPage/betHistory/ico_3.png'
import Icon4 from '../../images/myPage/betHistory/ico_4.png'
import Icon5 from '../../images/myPage/betHistory/ico_5.png'
import Icon6 from '../../images/myPage/betHistory/ico_6.png'
import Icon7 from '../../images/myPage/betHistory/ico_7.png'
import Icon8 from '../../images/cscenter/8.png'
import Icon9 from '../../images/cscenter/9.png'
import Icon10 from '../../images/cscenter/10.png'
import ContactTable from './tables/ContactTable';
import Pagination from 'components/myPage/Pagination';
import DropDownControls from 'components/dropdowns/DropDownControls';
import DownArrowIcon from '../../images/down_arrow_icon.png'
import SearchIcon from '../../images/myPage/search.png'
import { useHistory } from 'react-router';

const Contact = () => {

    const tabsArray = [
        { text: "전체", icon: Icon1, id: 0, path: "/cscenter/contact/all" },
        { text: "라이브카지노", icon: Icon2, id: 1, path: "/cscenter/contact/all/live-casino" },
        { text: "슬롯", icon: Icon3, id: 2, path: "/cscenter/contact/all/slot" },
        { text: "스포츠", icon: Icon4, id: 3, path: "/cscenter/contact/all/sports" },
        { text: "e-스포츠", icon: Icon5, id: 4, path: "/cscenter/contact/all/e-sports" },
        { text: "미니게임", icon: Icon6, id: 5, path: "/cscenter/contact/all/minigame" },
        { text: "키론가상게임", icon: Icon7, id: 6, path: "/cscenter/contact/all/ar-game" },
        { text: "충전/환전", icon: Icon8, id: 7, path: "/cscenter/contact/all/transaction" },
        { text: "베팅관련", icon: Icon9, id: 8, path: "/cscenter/contact/all/about-betting" },
        { text: "기타", icon: Icon10, id: 9, path: "/cscenter/contact/all/other" },
    ];

    const inboxArray = [
        { 
            id: 0,
            text: "은행계좌정보", 
            isRead: false,
            time: "2021.06.29 07:35",
            category: "계좌문의",
            isClicked: true,
            path: '/cscenter/contact/view/1'
        },
        { 
            id: 1,
            text: "스포츠북 문의", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "스포츠북",
            path: '/cscenter/contact/view/2'
        },
        { 
            id: 2,
            text: "카지노 문의", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "카지노",
            path: '/cscenter/contact/view/3'
        },
        { 
            id: 3,
            text: "키론가상게임 문의", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "키론가상게임",
            path: '/cscenter/contact/view/4'
        },
        { 
            id: 4,
            text: "미니게임 문의", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "미니게임",
            path: '/cscenter/contact/view/5'
        },
        { 
            id: 5,
            text: "슬롯 문의", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "슬롯",
            path: '/cscenter/contact/view/6'
        },
        { 
            id: 6,
            text: "충전환전 문의", 
            isRead: false,
            time: "2021.06.29 07:35",
            category: "충전환전",
            path: '/cscenter/contact/view/7'
        },
        { 
            id: 7,
            text: "베팅관련 문의", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "베팅관련",
            path: '/cscenter/contact/view/8'
        },
        { 
            id: 8,
            text: "문의드립니다", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "기타",
            path: '/cscenter/contact/view/9'
        },
        { 
            id: 9,
            text: "문의드립니다", 
            isRead: false,
            time: "2021.06.29 07:35",
            category: "기타",
            path: '/cscenter/contact/view/10'
        },
        
    ];

    const [, setSelectedTab] = useState(0)
    const [page, setPage] = useState(0)
    const [selectedCarrier, setSelectedCarrier] = useState("제목")
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const history = useHistory();

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
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("작성자")
                setDropdownOpen(false)
            }}>
                작성자
            </button>
        </div>
    )

    const dropdownButton = (
        <div className="flex w-120px h-42px bg-white rounded-md border border-gray-dddddd group">
            <input  className="w-0 text-16px"/>
            <div
                className="flex w-full text-gray-r393e41 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight" 
            >
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
                <button className="flex items-center justify-center w-42px h-42px rounded-md bg-gradient-to-b from-gray-r555555 via-gray-r555555 to-gray-r333333 -mt-px -mr-px flex-shrink-0 hover:opacity-75">
                    <img src={SearchIcon} alt=""/>
                </button>
            </div>
        </div>
    )

    return (
        <div>

            <MyPageTitle title="문의하기" />

            <div className="relative w-full mt-20px">
                <HorizontalMenu itemsArray={tabsArray} setSelectedTab={setSelectedTab} />

                <div className="mt-20px"></div>

                <ContactTable array={inboxArray}/>
  

                <div className="mt-20px h-36px w-full flex items-center justify-end space-x-2px">
                    <button className="flex items-center justify-center w-90px h-36px  rounded-4px bg-red-cb4343 hover:opacity-75">
                        <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">계좌문의</span>
                        </div>
                    </button>
                    <button 
                        className="flex items-center justify-center h-36px w-90px rounded-4px bg-blue-r0070d9 hover:opacity-75"
                        onClick={() => history.push('/cscenter/contact/compose')}
                    >
                        <div className="flex items-center justify-center h-34px w-88px bg-black rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">문의작성</span>
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
            
        </div>
    )
}

export default Contact
