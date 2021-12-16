import PointsApply from 'components/points/PointsApply'
import PointsTransactionHistory from 'components/points/PointsTransactionHistory'
import PointsAccumulateHistory from 'components/points/PointsAccumulateHistory'


import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from '../components/common/HomePageTopBanner';
import HorizontalMenu1 from 'components/horizontalMenus/HorizontalMenu1'
import React, { useState } from 'react'
import { Route } from 'react-router'
import Icon1 from '../images/newImages/mainPage/Point-conversion-request.png'
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

    return (
        <div style={{maxWidth: '1242px'}} className="relative w-full flex flex-col justify-center limit:overflow-x-hidden">

            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                <HomePageTopBanner pageTitle='베팅내역' />
            </div>
 
            <div style={{paddingBottom: '3.75rem'}} className="flex flex-col items-start limit:items-center w-full h-full">

                <div style={{padding: '1.875rem', paddingBottom : '1.875rem'}} className="w-full relative top-0 z-40">
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
                            <PointsAccumulateHistory />
                            <BottomNavbar />
                        </Route>
                        <Route exact path="/mypage/points/points-transaction-history">
                            <PointsTransactionHistory />
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
