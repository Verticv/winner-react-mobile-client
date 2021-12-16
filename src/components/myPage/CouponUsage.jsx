import React, { useState } from 'react'
import { Route } from 'react-router'
import Pagination from 'components/myPage/Pagination'
import Navbar from 'components/mainPage/Navbar'
import BottomNavbar from '../bottomNavbar/BottomNavbar'
import HorizontalMenu1 from 'components/horizontalMenus/HorizontalMenu1'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from 'components/common/HomePageTopBanner';
import CouponUsageTable from 'components/myPage/tables/CouponUsageTable'
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


const CouponUsage = ({isAuthenticated, setAuthenticated}) => {

    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))
    
    const CouponTitle = ({text = '사용 가능한 쿠폰', number = '10'}) => {
        return (
            <div className="flex items-center space-x-20px">
                {/* <div style={{backgroundColor:"#b1b1b1"}} className="h-12px w-px bg-gray-r8c8c8c mb-px" /> */}
                <div style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-gray-r8c8c8c">
                    <span>{text} </span>
                    <span style={{color: "#ed2f59"}} className="font-robotoBold">{number}</span>
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
        { text: "쿠폰내역", icon: Icon3, id: 2, path: "/mypage/coupon/coupon-history" },
    ];

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
                            {/* /mypage/coupon/coupon-usage */}
                            {/* <PointsApply />
                            <BottomNavbar /> */}
                        </Route>
                        <Route exact path="/mypage/coupon/coupon-gift">
                            /mypage/coupon/coupon-gift
                            {/* <PointsAccumulateHistory />
                            <BottomNavbar /> */}
                        </Route>
                        <Route exact path="/mypage/coupon/coupon-history">
                            /mypage/coupon/coupon-history
                            {/* <PointsTransactionHistory />
                            <BottomNavbar /> */}
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
