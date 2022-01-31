import PointsApply from 'components/points/PointsApply'
import PointsTransactionHistory from 'components/points/PointsTransactionHistory'
import PointsAccumulateHistory from 'components/points/PointsAccumulateHistory'
import AccountProfileComponent from 'components/common/AccountProfileComponent'
import LeftMenu from "components/myPage/LeftMenu";
import Logo from "../images/newImages/mainPage/icons/logo.png";
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from '../components/common/HomePageTopBanner';
import HorizontalMenu1 from 'components/horizontalMenus/HorizontalMenu1'
import React, { useState } from 'react'
import { Route } from 'react-router'
import Icon1 from '../images/newImages/Application-for-currency-exchange2.png'
import Icon2 from '../images/newImages/mainPage/Application-for-currency-exchange1.png'
import Icon3 from '../images/newImages/mainPage/Application-for-currency-exchange2.png'
import subIcon1 from '../images/newImages/mainPage/points/1.png';
import subIcon2 from '../images/newImages/mainPage/points/2.png';
import subIcon3 from '../images/newImages/mainPage/points/3.png';
import BottomNavbar from '../components/bottomNavbar/BottomNavbar'


const tabsArray = [
    { text: "포인트전환신청", icon: Icon1, id: 0, path: "/mypage/points/all" },
    { text: "포인트적립내역", icon: Icon2, id: 1, path: "/mypage/points/all/points-accumulate-history" },
    { text: "포인트전환내역", icon: Icon3, id: 2, path: "/mypage/points/all/points-transaction-history" },
];

const LeftMenuSubArray = [
    {
      text: "포인트전환신청",
      icon: subIcon1,
      id: 0,
      path: "/mypage/points/all",
    },
    {
      text: "포인트적립내역",
      icon: subIcon2,
      id: 1,
      path: "/mypage/points/all/points-accumulate-history",
    },
    {
      text: "포인트전환내역",
      icon: subIcon3,
      id: 2,
      path: "/mypage/points/all/points-transaction-history",
    }
  ]


const PointsPage = ({isAuthenticated, setAuthenticated}) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    console.log(selectedSubTab, selectedTab)

    const SubMenuList = (
        <>
            <div style={{padding: '1.875rem', paddingBottom: '0.9375rem'}} className='w-full flex'>
                <div style={{borderRadius:"1.625rem", padding: '2px', marginRight: '0.46875rem', height: '13.125rem'}} className="flex items-center justify-center w-1/2 bg-gradient-to-b from-blue-r01a0ea to-blue-r0779de">
                    <div style={{borderRadius:"1.5rem", paddingTop: '2.5625rem'}} className="w-full h-full bg-white flex items-center flex-col">
                        <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">잔여 포인트</div>
                        <div style={{fontSize: '4.125rem', marginTop: '0.5625rem'}} className="tracking-tight flex items-center">
                            <span className="font-spoqaBold text-blue-r0056a6">278</span>
                            <span className="font-spoqa text-gray-r616161">P</span>
                        </div>
                    </div>
                </div>
                <div style={{borderRadius:"1.625rem", marginLeft: '0.46875rem', height: '13.125rem', paddingTop: '2.5625rem'}} className="items-center flex-col flex w-1/2 bg-white border-2 border-gray-b7b7b7">
                    <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">당월 적립포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '0.5625rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">50</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
            </div>

            
            <div style={{padding: '1.875rem', paddingTop: '0'}} className='w-full flex'>
                <div style={{borderRadius:"1.625rem", marginRight: '0.46875rem', height: '13.125rem', paddingTop: '2.5625rem'}} className="items-center flex-col flex w-1/3 bg-white border-2 border-gray-b7b7b7">
                    <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">전월 적립포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '0.5625rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">228</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
                <div style={{borderRadius:"1.625rem", marginRight: '0.46875rem',  marginLeft: '0.46875rem', height: '13.125rem', paddingTop: '2.5625rem'}} className="items-center flex-col flex w-1/3 bg-white border-2 border-gray-b7b7b7">
                    <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">총 누적포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '0.5625rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">278</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
                <div style={{borderRadius:"1.625rem", marginLeft: '0.46875rem', height: '13.125rem', paddingTop: '2.5625rem'}} className="items-center flex-col flex w-1/3 bg-white border-2 border-gray-b7b7b7">
                    <div className="text-gray-r7b7b7b font-spoqaMedium text-4xl tracking-tight flex items-center">총 사용포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '0.5625rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">0</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <div style={{maxWidth: '1242px'}} className="relative w-full flex flex-col justify-center overflow-hidden">

            <Route exact path="/mypage/points">
                <AccountProfileComponent isAuthenticated={isAuthenticated} />
                <div style={{marginTop: '1.875rem', marginBottom: '36.375rem'}} className="flex w-full">
                    <LeftMenu
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        selectedSubTab={selectedSubTab}
                        setSelectedSubTab={setSelectedSubTab}
                        array={LeftMenuSubArray}
                    />
                </div>
                <div className="flex justify-center mb-40">
                    <img style={{width: '22.3125rem'}} className="object-contain" src={Logo} alt="logo" />
                </div>
            </Route>

            <Route path="/mypage/points/all">
                <div className="w-full z-30 flex flex-col items-center">
                    <NoticeBanner />
                    <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                    <HomePageTopBanner pageTitle='포인트' toPath='/mypage/points' /> 
                </div>
    
                <div className="flex flex-col items-start limit:items-center w-full h-full">

                    <div style={{padding: '1.875rem', paddingBottom : '1.875rem'}} className="w-full relative top-0">
                        <div className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                            <div className=" flex flex-shrink-0 w-full">
                            <HorizontalMenu1 withSmallMarginTop itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="w-full">
                        
                            <Route exact path="/mypage/points/all">
                                <PointsApply />
                                <BottomNavbar />
                            </Route>
                            <Route exact path="/mypage/points/all/points-accumulate-history">
                                <PointsAccumulateHistory SubMenuList={SubMenuList} />
                                <BottomNavbar />
                            </Route>
                            <Route exact path="/mypage/points/all/points-transaction-history">
                                <PointsTransactionHistory SubMenuList={SubMenuList} />
                                <BottomNavbar />
                            </Route>
                            
                            <Route path="*">
                            </Route>
                        </div>
                    </div>

                </div>
            </Route>

            
        </div>
    )
}

export default PointsPage
