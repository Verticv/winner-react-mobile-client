import React, { useState } from 'react'
import { Route, useHistory } from 'react-router'
import Pagination from 'components/myPage/Pagination'
import CouponGiftPopup from 'components/popups/CouponGiftPopup'
import Navbar from 'components/mainPage/Navbar'
import BottomNavbar from '../bottomNavbar/BottomNavbar'
import HorizontalMenu1 from 'components/horizontalMenus/HorizontalMenu1'
import PopupControls from 'components/popups/PopupControls'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from 'components/common/HomePageTopBanner';
import CouponUsageTable from 'components/myPage/tables/CouponUsageTable'
import CouponGiftTable from 'components/myPage/tables/CouponGiftTable'

import Icon1 from '../../images/newImages/coupon1.png'
import Icon2 from '../../images/newImages/coupon2.png'
import Icon3 from '../../images/newImages/coupon3.png'

const tableArrayTitles = [
    {
        id: 0,
        text: "쿠폰명",
        isRed: false,
    },
    {
        id: 1,
        text: "쿠폰금액",
        isRed: true,

    },
    {
        id: 2,
        text: "보낸회원아이디",
        isRed: false,

    },
    {
        id: 3,
        text: "처리상태",
        isRed: false,

    },
    {
        id: 4,
        text: "발급일",
        isRed: false,

    },
    {
        id: 5,
        text: "만료일",
        isRed: false,

    }
]

const tableArray = [
    {
        id: 0,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: "사용가능",
        amount: "2021-06-30",
        profit: "2021-07-29",
    },
    {
        id: 1,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: "사용가능",
        amount: "2021-06-30",
        profit: "2021-07-29",
    },
    {
        id: 2,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: "사용가능",
        amount: "2021-06-30",
        profit: "2021-07-29",
    },
    {
        id: 3,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: "사용가능",
        amount: "2021-06-30",
        profit: "2021-07-29",
    },
    {
        id: 4,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: "사용가능",
        amount: "2021-06-30",
        profit: "2021-07-29",
    },
    {
        id: 5,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: "사용가능",
        amount: "2021-06-30",
        profit: "2021-07-29",
    },
    {
        id: 6,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: "사용가능",
        amount: "2021-06-30",
        profit: "2021-07-29",
    },
    {
        id: 7,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: "사용가능",
        amount: "2021-06-30",
        profit: "2021-07-29",
    },
];

const giftsTableArrayTitles = [
    {
        id: 0,
        text: "쿠폰명",
        isRed: false,
    },
    {
        id: 1,
        text: "쿠폰금액",
        isRed: true,

    },
    {
        id: 2,
        text: "보낸회원아이디",
        isRed: false,

    },
    {
        id: 3,
        text: "발급일",
        isRed: false,

    },
    {
        id: 4,
        text: "만료일",
        isRed: false,
    }
]

const giftsTableArray = [
    {
        id: 0,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#ff1237',
    },
    {
        id: 1,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#ff1237',
    },
    {
        id: 2,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#ff1237',
    },
    {
        id: 3,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#ff1237',
    },
    {
        id: 4,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#ff1237',
    },
    {
        id: 5,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#ff1237',
    },
    {
        id: 6,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#ff1237',
    },
    {
        id: 7,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#ff1237',
    },
];


const historyTableArrayTitles = [
    {
        id: 0,
        text: "쿠폰명",
        isRed: false,
    },
    {
        id: 1,
        text: "쿠폰금액",
        isRed: true,

    },
    {
        id: 2,
        text: "보낸회원아이디",
        isRed: false,

    },
    {
        id: 3,
        text: "발급일",
        isRed: false,

    },
    {
        id: 4,
        text: "만료일",
        isRed: false,
    }
]

const historyTableArray = [
    {
        id: 0,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#ff1237',
    },
    {
        id: 1,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#0056a6',
    },
    {
        id: 2,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#454545',
    },
    {
        id: 3,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#279140',
    },
    {
        id: 4,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#ff1237',
    },
    {
        id: 5,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#ff1237',
    },
    {
        id: 6,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#ff1237',
    },
    {
        id: 7,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#ff1237',
    },
];

const sentHistoryTableArrayTitles = [
    {
        id: 0,
        text: "쿠폰명",
        isRed: false,
    },
    {
        id: 1,
        text: "쿠폰금액",
        isRed: true,

    },
    {
        id: 2,
        text: "보낸회원아이디",
        isRed: false,

    },
    {
        id: 3,
        text: "보낸일시",
        isRed: false,

    },
    {
        id: 4,
        text: "발급일",
        isRed: false,

    },
    {
        id: 5,
        text: "만료일",
        isRed: false,
    }
]

const sentHistoryTableArray = [
    {
        id: 0,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#92278f',
        profit: '2021-06-29 15:45',
    },
    {
        id: 1,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#92278f',
        profit: '2021-06-29 15:45',
    },
    {
        id: 2,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#92278f',
        profit: '2021-06-29 15:45',
    },
    {
        id: 3,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#92278f',
        profit: '2021-06-29 15:45',
    },
    {
        id: 4,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#92278f',
        profit: '2021-06-29 15:45',
    },
    {
        id: 5,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#92278f',
        profit: '2021-06-29 15:45',
    },
    {
        id: 6,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#92278f',
        profit: '2021-06-29 15:45',
    },
    {
        id: 7,
        number: '테스트쿠폰',
        time: "5,000",
        type: "eric123",
        name: '2021-06-29',
        amount: "2021-07-29",
        buttonColor: '#92278f',
        profit: '2021-06-29 15:45',
    },
];


const HistoryMenu = ({
    itemsArray, 
    setSelectedTab,
    setSelectedSubTab = null
}) => {
    // r0056a6
    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    console.log(isHover)

    function TabsList({ items }) {
        return items.map((item, index) => (
            <button 
                className={`${
                    pathname === item.path
                    ? "bg-blue-r0056a6" 
                    : "bg-white hover:bg-blue-d3f3fe border border-gray-rb7b7b7"
                } w-1/2 rounded-full`}
                style={{height: '6.375rem', fontSize: '2.8125rem', marginRight: `${!index ? '0.9375rem' : '' }`, borderWidth: `${pathname !== item.path ? '0.1875rem' : ''}`}} 
                key={item.id} 
                onClick={() => {
                    history.push(item.path)
                    setSelectedTab(item.id)
                    if (setSelectedSubTab !== null) {
                        setSelectedSubTab(0)
                    }
                }}
                onMouseOver={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
            >
                <div >
                    <div>
                        <span
                            className={`${
                                pathname === item.path
                                ? "text-white" 
                                : "text-gray-r7b7b7b"
                            }`}
                        >{item.text}</span>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full">
            <TabsList items={itemsArray} />
        </div>
    )
}


const GiftButton = (
    <div style={{height: '7.3125rem', width: '36.4375rem', padding: '0.1875rem', marginBottom: '1.875rem'}} className="flex items-center justify-center rounded-4px bg-blue-r0070d9 hover:opacity-75">
        <div className="flex items-center justify-center h-full w-full bg-black rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-white">쿠폰선물하기</span>
        </div>
    </div>
)


const CouponUsage = ({isAuthenticated, setAuthenticated}) => {

    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))
    
    const CouponTitle = ({text = '사용 가능한 쿠폰', number = '10', numberColor = '#ed2f59'}) => {
        return (
            <div className="flex items-center space-x-20px">
                <div style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-gray-r8c8c8c">
                    <span>{text} </span>
                    <span style={{color: numberColor}} className="font-robotoBold">{number}</span>
                    <span>장</span>
                </div>
            </div>
        )
    }

    const [page, setPage] = useState(0)
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)

    console.log(selectedTab, selectedSubTab)

    const tabsArray = [
        { text: "쿠폰사용", icon: Icon1, id: 0, path: "/mypage/coupon" },
        { text: "쿠폰선물", icon: Icon2, id: 1, path: "/mypage/coupon/coupon-gift" },
        { text: "쿠폰내역", icon: Icon3, id: 2, path: "/mypage/coupon/coupon-history/received" },
    ];

    const historyTabsArray = [
        { text: "쿠폰발급내역", icon: Icon1, id: 0, path: "/mypage/coupon/coupon-history/received" },
        { text: "쿠폰선물내역", icon: Icon2, id: 1, path: "/mypage/coupon/coupon-history/sent" }
    ]


    return (
        <div style={{maxWidth: '1242px'}} className="relative w-full flex flex-col justify-center limit:overflow-x-hidden">
            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                <HomePageTopBanner pageTitle='쿠폰관리' />
            </div>

            

            <div style={{paddingBottom: '3.75rem'}} className="flex flex-col items-start limit:items-center w-full h-full">

                <div style={{padding: '1.875rem', paddingBottom : '1.875rem'}} className="w-full relative top-0 z-40">
                    <div className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                        <div className=" flex flex-shrink-0 w-full">
                        <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                            {/* {(selectedTab !== 0 && selectedTab !== 3 && selectedTab !== 4 && selectedTab !== 7 && selectedTab !== 8) && (
                                <div style={{marginLeft: `${selectedTab * 116 + 49}px`}} className={`absolute bottom-0 w-20px -mb-10px overflow-hidden inline-block `}>
                                    <div className="h-10px w-10px bg-gradient-to-br from-gray-d2dfea via-gray-eff3f6 to-gray-eff3f6 rotate-45 transform origin-bottom-left"></div>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>

                <div className="flex w-full">
                    <div className="w-full">
                    
                        <Route exact path="/mypage/coupon">
                            <div className='mt-4 flex justify-center'>
                                <CouponTitle text='사용 가능한 쿠폰' number='10' />
                            </div>
                            <div className="">
                                <CouponUsageTable
                                    containerBackground= '#f7f9fc'
                                    array={tableArray}
                                    titleArray={tableArrayTitles}
                                    checkedState={checkedState} 
                                    setCheckedState={setCheckedState}
                                    isPopupOpen={isPopupOpen}
                                    setPopupOpen={setPopupOpen}
                                    cardHeight='29.5625rem'
                                    hasLeftInput={false}
                                />   
                            </div>
                            <div style={{marginTop: '1.875rem'}}>
                                <Pagination page={page} setPage={setPage}/>
                            </div>
                            <BottomNavbar />
                        </Route>
                        <Route exact path="/mypage/coupon/coupon-gift">
                            <div className='mt-4 flex justify-center'>
                                <CouponTitle text='사용 가능한 쿠폰' number='7' />
                            </div>
                            <div className="">
                                <CouponGiftTable
                                    containerBackground= '#f7f9fc'
                                    array={giftsTableArray}
                                    titleArray={giftsTableArrayTitles}
                                    checkedState={checkedState} 
                                    setCheckedState={setCheckedState}
                                    isPopupOpen={isPopupOpen}
                                    setPopupOpen={setPopupOpen}
                                    cardHeight='25.3125rem'
                                    isButtonGradient={false}
                                />   
                            </div>
                            <div style={{marginBottom: '2.9375rem'}} className='mt-4'>
                                <p className='font-spoqaMedium text-gray-r7c7c7c text-center' style={{fontSize: '2.625rem'}}>
                                    <span className='text-blue-r0056a6 font-spoqaBold'>쿠폰선물하기</span> 버튼을 클릭하여 쿠폰받을 회원을 선택하세요.
                                </p>
                            </div>
                            <div className="flex w-full justify-center">
                                <PopupControls buttonChild={GiftButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                                    <CouponGiftPopup setPopupOpen={setPopupOpen} />
                                </PopupControls> 
                            </div>
                            <div style={{marginTop: '1.875rem'}}>
                                <Pagination page={page} setPage={setPage}/>
                            </div>
                            <BottomNavbar />
                            {/* <PointsAccumulateHistory />
                            <BottomNavbar /> */}
                        </Route>
                        <Route exact path="/mypage/coupon/coupon-history/received">
                            <div style={{margin: '1.875rem', marginTop: '0', marginBottom: '2.875rem'}}>
                                <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
                            </div>
                            
                            <div className='mt-4 flex justify-center'>
                                <CouponTitle text='사용가능' number='32' />
                                <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem'}} className='bg-gray-c5c5c5'></div>
                                <CouponTitle text='사용완료' number='8' numberColor='#0056a6' />
                                <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem'}} className='bg-gray-c5c5c5'></div>
                                <CouponTitle text='기간만료' number='0' numberColor='#000000' />
                                <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem'}} className='bg-gray-c5c5c5'></div>
                                <CouponTitle text='회수된쿠폰' number='0' numberColor='#279140' />
                            </div>
                            <div className="">
                                <CouponGiftTable
                                    containerBackground= '#f7f9fc'
                                    array={historyTableArray}
                                    titleArray={historyTableArrayTitles}
                                    checkedState={checkedState} 
                                    setCheckedState={setCheckedState}
                                    isPopupOpen={isPopupOpen}
                                    setPopupOpen={setPopupOpen}
                                    cardHeight='25.3125rem'
                                    isButtonGradient={false}
                                />   
                            </div>
                            <div style={{marginTop: '1.875rem'}}>
                                <Pagination page={page} setPage={setPage}/>
                            </div>
                            <BottomNavbar />
                        </Route>
                        <Route exact path="/mypage/coupon/coupon-history/sent">
                            <div style={{margin: '1.875rem', marginTop: '0', marginBottom: '2.875rem'}}>
                                <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
                            </div>
                            
                            <div className='mt-4 flex justify-center'>
                                <CouponTitle text='사용가능' number='32' />
                                <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem'}} className='bg-gray-c5c5c5'></div>
                                <CouponTitle text='사용완료' number='8' numberColor='#0056a6' />
                                <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem'}} className='bg-gray-c5c5c5'></div>
                                <CouponTitle text='기간만료' number='0' numberColor='#000000' />
                                <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 0.9375rem'}} className='bg-gray-c5c5c5'></div>
                                <CouponTitle text='회수된쿠폰' number='0' numberColor='#279140' />
                            </div>
                            <div className="">
                                <CouponGiftTable
                                    containerBackground= '#f7f9fc'
                                    array={sentHistoryTableArray}
                                    titleArray={sentHistoryTableArrayTitles}
                                    checkedState={checkedState} 
                                    setCheckedState={setCheckedState}
                                    isPopupOpen={isPopupOpen}
                                    setPopupOpen={setPopupOpen}
                                    cardHeight='29.5rem'
                                    isButtonGradient={false}
                                />   
                            </div>
                            <div style={{marginTop: '1.875rem'}}>
                                <Pagination page={page} setPage={setPage}/>
                            </div>
                            <BottomNavbar />
                        </Route>
                        
                        <Route path="*">
                        </Route>
                    </div>
                </div>

            </div>

            {/* <div className="mt-20px">
                <CouponUsageTable />
            </div>

            <div className="mt-60px">
                <Pagination page={page} setPage={setPage}/>   
            </div> */}
        </div>
    )
}

export default CouponUsage
