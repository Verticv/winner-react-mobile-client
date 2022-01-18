// import Footer from 'components/mainPage/Footer'
// import Footer2 from 'components/mainPage/Footer2'
import MoneyCharge from 'components/money/MoneyCharge'
import MoneyChargeHistory from 'components/money/MoneyChargeHistory'
import AccountProfileComponent from 'components/common/AccountProfileComponent'
import LeftMenu from "components/myPage/LeftMenu";
// import DirectoryComponent from 'components/myPage/DirectoryComponent'
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
import Icon1 from '../images/newImages/mainPage/icons/recharge-application.png';
import Icon2 from '../images/newImages/mainPage/icons/charging-history.png';
import subIcon1 from '../images/newImages/mainPage/money/1.png';
import subIcon2 from '../images/newImages/mainPage/money/2.png';
import Logo from "../images/newImages/mainPage/icons/logo.png";
import HomePageTopBanner from '../components/common/HomePageTopBanner';
import BottomNavbar from '../components/bottomNavbar/BottomNavbar'


const tabsArray = [
    { text: "충전신청", icon: Icon1, id: 0, path: "/mypage/money/charge" },
    { text: "충전내역", icon: Icon2, id: 1, path: "/mypage/money/charge/history" },
];

const LeftMenuSubArray = [
    {
      text: "충전신청",
      icon: subIcon1,
      id: 0,
      path: "/mypage/money/charge",
      mainPath: "/mypage/money",
    },
    {
      text: "충전내역",
      icon: subIcon2,
      id: 1,
      path: "/mypage/money/charge/history",
      mainPath: "/mypage/money",
    }
  ];



const MoneyPage = ({isAuthenticated, setAuthenticated}) => {

    // const LeftMenuArray = [
    //     { text: "보유머니 충전", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/mypage/money/charge", mainPath: "/mypage/money/charge" },
    //     { text: "보유머니 환전", icon: Icon2, iconHighlight: IconHighlight2, id: 1, path: "/mypage/money/exchange", mainPath: "/mypage/money/exchange" },
    // ]

    // const location = useLocation();
    // const [selectedTab, setSelectedTab] = useState(location.pathname)
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    console.log(selectedSubTab, selectedTab)

    return (
        <div style={{maxWidth: '1242px'}} className="relative w-full flex flex-col justify-center overflow-hidden">

            <Route exact path="/mypage/money">
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

            <Route path="/mypage/money/charge">
                <div className="w-full z-30 flex flex-col items-center">
                    <NoticeBanner />
                    <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                    <HomePageTopBanner pageTitle='머니충전' />
                </div>
    
                <div className="flex flex-col items-start limit:items-center w-full h-full">
                    <div style={{padding: '1.875rem', paddingBottom : '1.875rem'}} className="w-full relative top-0">
                        <div className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                            <div className=" flex flex-shrink-0 w-full">
                            <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                            </div>
                        </div>
                    </div>

                        <div className="flex w-full">

                            <div className="w-full">
                                
                                <Route exact path="/mypage/money/charge">
                                        <MoneyCharge />
                                </Route>
                                <Route exact path="/mypage/money/charge/history">
                                    <MoneyChargeHistory />
                                    <BottomNavbar />
                                </Route>
                            </div>
                        </div>
                </div>
            </Route>

            
        </div>
    )
}

export default MoneyPage
