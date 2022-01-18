import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router';
import HorizontalSubMenu from 'components/horizontalMenus/HorizontalSubMenu'
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
import Pagination from 'components/myPage/Pagination';
import ContactTable from 'components/myPage/tables/ContactTable'
import Search from 'components/common/Search'

const Contact = () => {

    const tabsArray = [
        { text: "전체", id: 0, width: '11.5625rem', path: "/cscenter/all/contact/all" },
        { text: "카지노", id: 1, width: '13.4375rem', path: "/cscenter/all/contact/all/live-casino" },
        { text: "슬롯", id: 2, width: '11.5625rem', path: "/cscenter/all/contact/all/slot" },

        { text: "스포츠", id: 3, width: '13.4375rem', path: "/cscenter/all/contact/all/sports" },
        { text: "e-스포츠", id: 4, width: '15.3125rem', path: "/cscenter/all/contact/all/e-sports" },
        { text: "미니게임", id: 5, width: '15.3125rem', path: "/cscenter/all/contact/all/minigame" },
        { text: "키론가상게임", id: 6, path: "/cscenter/all/contact/all/ar-game" },
        { text: "충전/환전", id: 7, path: "/cscenter/all/contact/all/transaction" },
        { text: "베팅관련", id: 8, path: "/cscenter/all/contact/all/about-betting" },
        { text: "기타", id: 9, path: "/cscenter/all/contact/all/other" },
    ];

    const inboxArray = [
        { 
            id: 0,
            text: "은행계좌정보", 
            isRead: false,
            time: "2021.06.29 07:35",
            category: "계좌문의",
            isClicked: true,
            path: '/cscenter/all/contact/view/1'
        },
        { 
            id: 1,
            text: "스포츠북 문의", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "스포츠북",
            path: '/cscenter/all/contact/view/2'
        },
        { 
            id: 2,
            text: "카지노 문의", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "카지노",
            path: '/cscenter/all/contact/view/3'
        },
        { 
            id: 3,
            text: "키론가상게임 문의", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "키론가상게임",
            path: '/cscenter/all/contact/view/4'
        },
        { 
            id: 4,
            text: "미니게임 문의", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "미니게임",
            path: '/cscenter/all/contact/view/5'
        },
        { 
            id: 5,
            text: "슬롯 문의", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "슬롯",
            path: '/cscenter/all/contact/view/6'
        },
        { 
            id: 6,
            text: "충전환전 문의", 
            isRead: false,
            time: "2021.06.29 07:35",
            category: "충전환전",
            path: '/cscenter/all/contact/view/7'
        },
        { 
            id: 7,
            text: "베팅관련 문의", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "베팅관련",
            path: '/cscenter/all/contact/view/8'
        },
        { 
            id: 8,
            text: "문의드립니다", 
            isRead: true,
            time: "2021.06.29 07:35",
            category: "기타",
            path: '/cscenter/all/contact/view/9'
        },
        { 
            id: 9,
            text: "문의드립니다", 
            isRead: false,
            time: "2021.06.29 07:35",
            category: "기타",
            path: '/cscenter/all/contact/view/10'
        },
        
    ];
    const location = useLocation();
    const [, setSelectedTab] = useState(0)
    const [page, setPage] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    const [checkedState, setCheckedState] = useState(
        new Array(inboxArray.length).fill(false)
    );
    const history = useHistory();
    console.log(`selectedSubTab`, selectedSubTab)

    return (
        <div>
                <div className="w-full flex relative top-0">
                    <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                    <div style={{paddingLeft: '1.875rem'}} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                        <div className=" flex flex-shrink-0 w-full">
                            <HorizontalSubMenu itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                        </div>
                    </div>
                    <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '2.3rem'}} className="absolute h-full left-0 z-50"></div>
                </div>

                <div style={{borderRadius:"1em", margin: '1.875rem', marginTop: '1.875rem'}} className="shadow-subNavbar overflow-hidden">
                    <div className="flex flex-col w-full">
                        <ContactTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray}/>
                    </div>
                </div>


                {/* <ContactTable array={inboxArray}/> */}

                <div style={{margin:'1.875rem', marginTop: '3.75rem', marginBottom: '3.9375rem', fontSize: '2.8125rem'}} className="flex items-center justify-center">
                    <button style={{height: '7.3125rem', padding: '1px'}} className="flex items-center justify-center w-1/2 mr-4 rounded-2xl bg-red-cb4343">
                        <div className="flex items-center justify-center w-full h-full bg-black rounded-2xl border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-white">계좌문의</span>
                        </div>
                    </button>
                    <button style={{height: '7.3125rem', padding: '1px', fontSize: '2.8125rem'}} onClick={() => history.push('/cscenter/all/contact/compose')} className="flex items-center justify-center w-1/2 rounded-2xl bg-blue-r0070d9">
                        <div className="flex items-center justify-center w-full h-full rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-white">문의작성</span>
                        </div>
                    </button>
                </div>
  

                <div style={{marginBottom: '3.75rem'}} className="flex w-full justify-center mt-4px">
                    <Pagination page={page} setPage={setPage} withMarginBottom={false}/>   
                </div>

                <Search />
                <BottomNavbar />
            </div>
    )
}

export default Contact
