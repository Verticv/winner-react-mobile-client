import React, { useState } from 'react'
import { useLocation } from 'react-router';
// import HorizontalMenu from 'components/horizontalMenus/HorizontalMenu';
// import MyPageTitle from 'components/myPage/MyPageTitle';
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
import HorizontalSubMenu from 'components/horizontalMenus/HorizontalSubMenu'
import MobileDropDownControls from 'components/dropdowns/MobileDropDownControls';
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
import Pagination from 'components/myPage/Pagination';
// import DropDownControls from 'components/dropdowns/DropDownControls';
import ContactTable from 'components/myPage/tables/ContactTable'

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
    const location = useLocation();
    const [, setSelectedTab] = useState(0)
    const [page, setPage] = useState(0)
    const [selectedCarrier, setSelectedCarrier] = useState("제목")
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    const [checkedState, setCheckedState] = useState(
        new Array(inboxArray.length).fill(false)
    );
    const history = useHistory();
    console.log(`selectedSubTab`, selectedSubTab)

    const dropDownCellClass = "flex w-120px h-40px py-2px bg-white items-center hover:bg-blue-lightGradLight px-14px"

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
                <div className="w-full relative top-0 z-40">
                    <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                    <div style={{paddingLeft: '1.875rem'}} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                        <div className=" flex flex-shrink-0 w-full">
                        <HorizontalSubMenu itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                        </div>
                    </div>
                </div>

                <div style={{borderRadius:"1em", margin: '1.875rem', marginTop: '1.875rem'}} className="shadow-subNavbar overflow-hidden">
                    <div className="flex flex-col w-full">
                        <ContactTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray}/>
                    </div>
                </div>


                {/* <ContactTable array={inboxArray}/> */}

                <div style={{margin:'1.875rem', marginTop: '3.75rem', marginBottom: '3.9375rem', fontSize: '2.8125rem'}} className="flex items-center justify-center">
                    <button style={{height: '7.3125rem', padding: '0.1875rem'}} className="flex items-center justify-center w-1/2 mr-4 rounded-lg bg-red-cb4343">
                        <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-white">계좌문의</span>
                        </div>
                    </button>
                    <button style={{height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem'}} onClick={() => history.push('/cscenter/contact/compose')} className="flex items-center justify-center w-1/2 rounded-md bg-blue-r0070d9">
                        <div className="flex items-center justify-center w-full h-full rounded-lg border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-white">문의작성</span>
                        </div>
                    </button>
                </div>
  

                <div style={{marginBottom: '3.75rem'}} className="flex w-full justify-center mt-4px">
                    <Pagination page={page} setPage={setPage} withMarginBottom={false}/>   
                </div>

                <div style={{margin:'0 1.875rem', marginBottom: '50rem'}}>
                    {InboxSearch}
                </div>
                <BottomNavbar />
            </div>
    )
}

export default Contact
