import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router';
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
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
import Pagination from 'components/myPage/Pagination';
import ContactTable from 'components/myPage/tables/ContactTable'
import Search from 'components/common/Search'

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
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    const [checkedState, setCheckedState] = useState(
        new Array(inboxArray.length).fill(false)
    );
    const history = useHistory();
    console.log(`selectedSubTab`, selectedSubTab)

    return (
        <div>
                <div className="w-full relative top-0">
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

                <Search />
                <BottomNavbar />
            </div>
    )
}

export default Contact
