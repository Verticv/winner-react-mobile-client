import React, { useState } from 'react'
import MobileDropDownControls from 'components/dropdowns/MobileDropDownControls';
import Pagination from './Pagination'
import DownArrowIcon from '../../images/down_arrow_icon.png'
import SearchIcon from '../../images/myPage/search.png'
import InboxTable from './tables/InboxTable'
import Navbar from 'components/mainPage/Navbar'
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from 'components/common/HomePageTopBanner'

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

    const CouponTitle = ({text = '사용 가능한 쿠폰', number = '10', numberColor = '#ed2f59', endText = '장'}) => {
        return (
            <div className="flex items-center space-x-20px">
                <div style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-gray-r8c8c8c">
                    <span>{text} </span>
                    <span style={{color: numberColor}} className="font-robotoBold">{number}</span>
                    <span>{endText}</span>
                </div>
            </div>
        )
    }

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
        <div className="w-full">

            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar /> 
                <HomePageTopBanner pageTitle='베팅내역' />
            </div>
            {/* <MyPageTitle title="쪽지관리" inboxCount="7"/> */}
            <div style={{margin: '1.875rem', marginBottom: '1.25rem', marginTop: '1.1875rem'}} className='mt-4 flex justify-between'>
                <CouponTitle text='전체 받은 쪽지' number='7' />
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
                        style={{borderRadius:"4px", padding: '0.1875rem', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center mr-4 rounded-md bg-gray-r171a1d hover:opacity-75"
                        onClick={() => AllSelectButtonPressed()}
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #555555, #333333)",
                                borderRadius: "3px"
                            }}
                            className="flex items-center justify-center h-full w-full rounded-lg border border-gray-r737579 cursor-pointer"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button 
                        style={{borderRadius:"4px", padding: '0.375rem', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center mr-4 rounded-md bg-red-cb4343 hover:opacity-75"
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                                borderRadius: "3px"
                            }}
                            className="flex items-center justify-center h-full w-full rounded-lg border border-red-f36576 cursor-pointer"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">선택삭제</span>
                        </div>
                    </button>
                    <button 
                            style={{borderRadius:"4px", padding: '0.375rem', height: '7.3125rem'}}
                            className="flex flex-1 items-center justify-center rounded-md bg-blue-r0070d9 hover:opacity-75"
                            onClick={() => AllSelectButtonPressed()}
                        >
                            <div 
                                style={{
                                    borderRadius: "3px"
                                }}
                                className="flex items-center justify-center h-full w-full rounded-lg border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db"
                            >
                                <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">전체선택</span>
                            </div>
                        </button>
                </div>
            </div>

            <div style={{marginBottom: '3.75rem'}} className="flex w-full justify-center mt-4px">
                <Pagination page={page} setPage={setPage} withMarginBottom={false}/>   
            </div>

            <div style={{marginBottom: '50rem'}}>
                {InboxSearch}
            </div>
            <BottomNavbar />
        </div>
    )
}

export default Inbox
