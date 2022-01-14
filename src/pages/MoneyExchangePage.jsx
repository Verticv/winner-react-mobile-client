import MoneyExchange from 'components/money/MoneyExchange'
import MoneyExchangeHistory from 'components/money/MoneyExchangeHistory'
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import AccountProfileComponent from 'components/common/AccountProfileComponent'
import LeftMenu from "components/myPage/LeftMenu";
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
import subIcon1 from '../images/newImages/mainPage/money/3.png';
import subIcon2 from '../images/newImages/mainPage/money/4.png';
import Logo from "../images/newImages/mainPage/icons/logo.png";
import HomePageTopBanner from '../components/common/HomePageTopBanner';
import BottomNavbar from '../components/bottomNavbar/BottomNavbar'

// currency exchange
const tabsArray = [
    { text: "충전신청", icon: Icon1, id: 0, path: "/mypage/money/exchange/currency" },
    { text: "충전내역", icon: Icon2, id: 1, path: "/mypage/money/exchange/currency/history" },
];

const LeftMenuSubArray = [
    {
      text: "충전신청",
      icon: subIcon1,
      id: 0,
      path: "/mypage/money/exchange/currency",
      mainPath: "/mypage/money/exchange",
    },
    {
      text: "충전내역",
      icon: subIcon2,
      id: 1,
      path: "/mypage/money/exchange/currency/history",
      mainPath: "/mypage/money/exchange",
    }
  ]


const MoneyExchangePage = ({isAuthenticated, setAuthenticated}) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    console.log(selectedTab, selectedSubTab)

    return (
        <div style={{maxWidth: '1242px'}} className="relative w-full flex flex-col justify-center limit:overflow-x-hidden">

            <Route exact path="/mypage/money/exchange">
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

            
            <Route path="/mypage/money/exchange/currency">
                <div className="w-full z-30 flex flex-col items-center">
                    <NoticeBanner />
                    <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                    <HomePageTopBanner pageTitle='베팅내역' />
                </div>
    
                <div style={{paddingBottom: '3.75rem'}} className="flex flex-col items-start limit:items-center w-full h-full">

                    <div style={{padding: '1.875rem', paddingBottom : '1.875rem'}} className="w-full relative top-0">
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
                            
                            <Route exact path="/mypage/money/exchange/currency/history">
                                {console.log(`'ssssssssssssssssssss'`)}
                                <MoneyExchangeHistory />
                                <BottomNavbar />
                            </Route>
                            <Route exact path="/mypage/money/exchange/currency">
                                <MoneyExchange />
                            </Route>
                            /mypage/money/exchange/history
                            
                            <Route path="*">
                            </Route>
                        </div>
                    </div>

                </div>
            </Route>
        </div>
    )
}

export default MoneyExchangePage
