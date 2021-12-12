// import Footer from 'components/mainPage/Footer'
// import Footer2 from 'components/mainPage/Footer2'
import MoneyExchange from 'components/money/MoneyExchange'
import MoneyExchangeHistory from 'components/money/MoneyExchangeHistory'
// import DirectoryComponent from 'components/myPage/DirectoryComponent'
// import LeftMenu from 'components/myPage/LeftMenu'
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
// import HorizontalMenu from 'components/horizontalMenus/HorizontalMenu'
import HorizontalMenu1 from 'components/horizontalMenus/HorizontalMenu1'
import React, { useState } from 'react'
import { Route } from 'react-router'
// import MoneyChargeBanner from '../images/money/money_charge.png'
// import MoneyExchangeBanner from '../images/money/money_exchange.png'
// import Icon1 from '../images/money/leftMenu/icon_1.png'
// import Icon2 from '../images/money/leftMenu/icon_2.png'
// import IconHighlight1 from '../images/money/leftMenu/icon_1_highlight.png'
// import IconHighlight2 from '../images/money/leftMenu/icon_2_highlight.png'
import Icon1 from '../images/newImages/mainPage/Application-for-currency-exchange.png'
import Icon2 from '../images/newImages/mainPage/Recharge-application3.png'
import HomePageTopBanner from '../components/common/HomePageTopBanner';
import BottomNavbar from '../components/bottomNavbar/BottomNavbar'


const tabsArray = [
    { text: "충전신청", icon: Icon1, id: 0, path: "/mypage/money/exchange" },
    { text: "충전내역", icon: Icon2, id: 1, path: "/mypage/money/exchange/history" },
];


const MoneyExchangePage = ({isAuthenticated, setAuthenticated}) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    console.log(selectedSubTab)

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
                        
                        <Route exact path="/mypage/money/exchange">
                            <MoneyExchange />
                        </Route>
                        <Route exact path="/mypage/money/exchange/history">
                            <MoneyExchangeHistory />
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

export default MoneyExchangePage