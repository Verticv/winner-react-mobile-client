import React, { useState } from 'react'
import Pagination from './Pagination'
import InboxTable from './tables/InboxTable'
import Navbar from 'components/mainPage/Navbar'
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from 'components/common/HomePageTopBanner'
import Search from 'components/common/Search'
import ScrollButton from 'components/common/ScrollButton'

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

    const CouponTitle = ({text = '사용 가능한 쿠폰', number = '10', numberColor = '#ed2f59', endText = '장'}) => {
        return (
            <div className="flex items-center space-x-20px">
                <div style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-gray-r8c8c8c">
                    <span>{text} </span>
                    <span style={{color: numberColor}} className="font-robotoBold">{number}</span>
                    <span>{endText}&nbsp;</span>
                </div>
            </div>
        )
    }

  
    return (
        <div className="w-full">

            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar /> 
                <HomePageTopBanner pageTitle='쪽지관리' />
            </div>
            {/* <MyPageTitle title="쪽지관리" inboxCount="7"/> */}
            <div style={{margin: '1.875rem', marginBottom: '1.25rem', marginTop: '1.1875rem'}} className='mt-4 flex justify-between'>
                <CouponTitle text='전체 받은 쪽지' number='7' endText='건' />
                <div className='flex'>
                    <CouponTitle text='쪽지보관은 최장' number='14' endText='일' numberColor='#0056a6' />
                    <CouponTitle text='최대' number='20' endText='개' numberColor='#0056a6' />
                </div>
            </div>
            <div style={{borderRadius:"1em", margin: '1.875rem', marginTop: '0'}} className="shadow-subNavbar overflow-hidden">
                <div className="flex flex-col w-full">
                    <InboxTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray}/>
                </div>
            </div>


            <div style={{margin: '3.75rem 1.875rem'}} className="flex items-center justify-between">
                <div className="flex w-full">
                    <button 
                        style={{padding: '1px', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center mr-4 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                        onClick={() => AllSelectButtonPressed()}
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #555555, #333333)",
                            }}
                            className="flex items-center justify-center h-full w-full rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button 
                        style={{padding: '1px', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center mr-4 rounded-2xl bg-red-cb4343 hover:opacity-75"
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                            }}
                            className="flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 cursor-pointer"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">선택삭제</span>
                        </div>
                    </button>
                    <button 
                            style={{padding: '1px', height: '7.3125rem'}}
                            className="flex flex-1 items-center justify-center rounded-2xl bg-blue-r0070d9 hover:opacity-75"
                            onClick={() => AllSelectButtonPressed()}
                        >
                            <div 
                                className="flex items-center justify-center h-full w-full rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db"
                            >
                                <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">전체읽음처리</span>
                            </div>
                        </button>
                </div>
            </div>

            <div style={{marginBottom: '3.75rem'}} className="flex w-full justify-center mt-4px">
                <Pagination page={page} setPage={setPage} withMarginBottom={false}/>   
            </div>

            <Search />
            <ScrollButton />
            <BottomNavbar />
        </div>
    )
}

export default Inbox
