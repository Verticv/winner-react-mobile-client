import PointsApply from 'components/points/PointsApply'
import PointsTransactionHistory from 'components/points/PointsTransactionHistory'
import PointsAccumulateHistory from 'components/points/PointsAccumulateHistory'


import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from '../components/common/HomePageTopBanner';
import HorizontalMenu1 from 'components/horizontalMenus/HorizontalMenu1'
import React, { useState } from 'react'
import { Route } from 'react-router'
import Icon1 from '../images/newImages/Application-for-currency-exchange2.png'
import Icon2 from '../images/newImages/mainPage/Application-for-currency-exchange1.png'
import Icon3 from '../images/newImages/mainPage/Application-for-currency-exchange2.png'
import BottomNavbar from '../components/bottomNavbar/BottomNavbar'


const tabsArray = [
    { text: "포인트전환신청", icon: Icon1, id: 0, path: "/mypage/points/points-apply" },
    { text: "포인트적립내역", icon: Icon2, id: 1, path: "/mypage/points/points-accumulate-history" },
    { text: "포인트전환내역", icon: Icon3, id: 2, path: "/mypage/points/points-transaction-history" },
];


const PointsPage = ({isAuthenticated, setAuthenticated}) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    console.log(selectedSubTab, selectedTab)

    const SubMenuList = (
        <>
            <div style={{padding: '1.875rem', paddingBottom: '0.9375rem'}} className='w-full flex'>
                <div style={{borderRadius:"1.625rem", padding: '2px', marginRight: '0.46875rem', height: '13.125rem'}} className="flex items-center justify-center w-1/2 bg-gradient-to-b from-blue-r01a0ea to-blue-r0779de">
                    <div style={{borderRadius:"1.5rem"}} className="w-full h-full pt-9 bg-white flex items-center flex-col">
                        <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">잔여 포인트</div>
                        <div style={{fontSize: '4.125rem', marginTop: '1.125rem'}} className="tracking-tight flex items-center">
                            <span className="font-spoqaBold text-blue-r0056a6">278</span>
                            <span className="font-spoqa text-gray-r616161">P</span>
                        </div>
                    </div>
                </div>
                <div style={{borderRadius:"1.625rem", marginLeft: '0.46875rem', height: '13.125rem'}} className="items-center pt-9 flex-col flex w-1/2 bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">당월 적립포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '1.125rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">50</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
            </div>

            
            <div style={{padding: '1.875rem', paddingTop: '0'}} className='w-full flex'>
                <div style={{borderRadius:"1.625rem", marginRight: '0.46875rem', height: '13.125rem'}} className="items-center pt-9 flex-col flex w-1/3 bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">전월 적립포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '1.125rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">228</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
                <div style={{borderRadius:"1.625rem", marginRight: '0.46875rem',  marginLeft: '0.46875rem', height: '13.125rem'}} className="items-center pt-9 flex-col flex w-1/3 bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">총 누적포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '1.125rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">278</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
                <div style={{borderRadius:"1.625rem", marginLeft: '0.46875rem', height: '13.125rem'}} className="items-center pt-9 flex-col flex w-1/3 bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">총 사용포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '1.125rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">0</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <div style={{maxWidth: '1242px'}} className="relative w-full flex flex-col justify-center limit:overflow-x-hidden">

            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                <HomePageTopBanner pageTitle='포인트' /> 
            </div>
 
            <div style={{paddingBottom: '3.75rem'}} className="flex flex-col items-start limit:items-center w-full h-full">

                <div style={{padding: '1.875rem', paddingBottom : '1.875rem'}} className="w-full relative top-0">
                    <div className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                        <div className=" flex flex-shrink-0 w-full">
                        <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                        </div>
                    </div>
                </div>

                <div className="flex w-full">
                    <div className="w-full">
                    
                        <Route exact path="/mypage/points/points-apply">
                            <PointsApply />
                            <BottomNavbar />
                        </Route>
                        <Route exact path="/mypage/points/points-accumulate-history">
                            <PointsAccumulateHistory SubMenuList={SubMenuList} />
                            <BottomNavbar />
                        </Route>
                        <Route exact path="/mypage/points/points-transaction-history">
                            <PointsTransactionHistory SubMenuList={SubMenuList} />
                            <BottomNavbar />
                        </Route>
                        
                        <Route path="*">
                        </Route>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PointsPage
