import React, { useState } from 'react'
import AccountProfileComponent from 'components/common/AccountProfileComponent'
import HorizontalMenu from '../horizontalMenus/HorizontalMenu'
import Icon1 from '../../images/myPage/betHistory/ico_1.png'
import Icon2 from '../../images//newImages/mainPage/betHistory/ico_1.png'
import Icon3 from '../../images//newImages/mainPage/betHistory/ico_2.png'
import Icon4 from '../../images//newImages/mainPage/betHistory/ico_3.png'
import Icon5 from '../../images//newImages/mainPage/betHistory/ico_4.png'
import Icon6 from '../../images//newImages/mainPage/betHistory/ico_5.png'
import Icon7 from '../../images//newImages/mainPage/betHistory/ico_6.png'
import Icon8 from '../../images//newImages/mainPage/betHistory/ico_7.png'
import Icon9 from '../../images//newImages/mainPage/betHistory/ico_8.png'
import subIcon1 from '../../images/newImages/mainPage/betHistory/1.png'
import subIcon2 from '../../images/newImages/mainPage/betHistory/2.png'
import subIcon3 from '../../images/newImages/mainPage/betHistory/3.png'
import subIcon4 from '../../images/newImages/mainPage/betHistory/4.png'
import subIcon5 from '../../images/newImages/mainPage/betHistory/5.png'
import subIcon6 from '../../images/newImages/mainPage/betHistory/6.png'
import subIcon7 from '../../images/newImages/mainPage/betHistory/7.png'
import subIcon8 from '../../images/newImages/mainPage/betHistory/8.png'

import Logo from "../../images/newImages/mainPage/icons/logo.png";
import HomePageTopBanner from '../common/HomePageTopBanner'
import LeftMenu from "components/myPage/LeftMenu";
import BottomNavbar from '../bottomNavbar/BottomNavbar'
import Pagination from './Pagination'
import LiveCasinoBetHistory from './betHistory/LiveCasinoBetHistory'
import SportsBetHistory from './betHistory/SportsBetHistory'
// import AllBetHistory from './betHistory/AllBetHistory'
// import SlotBetHistory from './betHistory/SlotBetHistory'
// import MinigameBetHistory from './betHistory/MinigameBetHistory'
// import ARGameBetHistory from './betHistory/ARGameBetHistory'
import { Route } from 'react-router'
// import ESportsBetHistory from './betHistory/ESportsBetHistory'
import Navbar from '../mainPage/Navbar'
import NoticeBanner from '../mainPage/NoticeBanner'

const tabsArray = [
    { text: "전체", icon: Icon1, id: 0, path: "/mypage/bet-history/all" },
    { text: "라이브카지노", icon: Icon2, id: 1, path: "/mypage/bet-history/all/live-casino" },
    { text: "슬롯", icon: Icon3, id: 2, path: "/mypage/bet-history/all/slot-game" },
    { text: "스포츠", icon: Icon4, id: 3, path: "/mypage/bet-history/all/sports" },
    { text: "e-스포츠", icon: Icon5, id: 4, path: "/mypage/bet-history/all/e-sports" },
    { text: "미니게임", icon: Icon6, id: 5, path: "/mypage/bet-history/all/minigame" },
    { text: "키론가상게임", icon: Icon7, id: 6, path: "/mypage/bet-history/all/ar-game" },
    { text: "피싱게임", icon: Icon8, id: 7, path: "/mypage/bet-history/all/fishing-game" },
    { text: "로터리게임", icon: Icon9, id: 8, path: "/mypage/bet-history/all/lottery-game" }
];

const LeftMenuBetHistoryArray = [
    {
      text: "라이브카지노",
      icon: subIcon1,
      id: 0,
      path: "/mypage/bet-history/all/live-casino",
      mainPath: "/mypage/bet-history",
    },
    {
      text: "슬롯게임",
      icon: subIcon2,
      id: 1,
      path: "/mypage/bet-history/all/slot-game",
      mainPath: "/mypage/bet-history",
    },
    {
      text: "스포츠",
      icon: subIcon3,
      id: 2,
      path: "/mypage/bet-history/all/sports",
      mainPath: "/mypage/bet-history",
    },
    {
      text: "e-스포츠",
      icon: subIcon4,
      id: 3,
      path: "/mypage/bet-history/all/e-sports",
      mainPath: "/mypage/bet-history",
    },
    {
      text: "미니게임",
      icon: subIcon5,
      id: 4,
      path: "/mypage/bet-history/all/minigame",
      mainPath: "/mypage/bet-history",
    },
    {
      text: "가상게임",
      icon: subIcon6,
      id: 5,
      path: "/mypage/bet-history/all/ar-game",
      mainPath: "/mypage/bet-history",
    },
    {
      text: "피싱게임",
      icon: subIcon7,
      id: 6,
      path: "/mypage/bet-history/all/fishing-game",
      mainPath: "/mypage/bet-history",
    },
    {
      text: "로터리게임",
      icon: subIcon8,
      id: 7,
      path: "/mypage/bet-history/all/lottery-game",
      mainPath: "/mypage/bet-history",
    },
  ];


const BetHistory = ({isAuthenticated}) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [historySelectedSubTab, setHistorySelectedSubTab] = useState(0)

    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(3).fill(false)
    );

 
    return (
        <div style={{maxWidth: '1242px'}} className="w-full flex flex-col">

            

            <Route exact path="/mypage/bet-history">
                <>
                    {/* <AllBetHistory />
                    <Pagination page={page} setPage={setPage}/>    */}
                    <AccountProfileComponent isAuthenticated={isAuthenticated} />
                    <div style={{marginTop: '1.875rem', marginBottom: '36.375rem'}} className="flex w-full">
                        <LeftMenu
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                            selectedSubTab={selectedSubTab}
                            setSelectedSubTab={setSelectedSubTab}
                            array={LeftMenuBetHistoryArray}
                        />
                    </div>
                    <div className="flex justify-center mb-40">
                        <img style={{width: '22.3125rem'}} className="object-contain" src={Logo} alt="logo" />
                    </div>
                </>
            </Route>

            <Route path="/mypage/bet-history/all">
                <div className="w-full z-30 flex flex-col items-center">
                    <NoticeBanner />
                    <Navbar /> 
                    <HomePageTopBanner pageTitle='베팅내역' />
                </div>
                
                <div className="w-full flex relative top-0">
                    <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                    <div id='scroll-wrapper' style={{padding: '1.875rem', paddingRight: '0'}} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                        <div className=" flex flex-shrink-0 w-full">
                            <HorizontalMenu itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                        </div>
                    </div>
                    <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full left-0 z-50"></div>
                </div>

                <Route path="/mypage/bet-history/all/live-casino">
                <>
                    <LiveCasinoBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab} />
                    <div style={{marginTop: '1.25rem'}}>
                        <Pagination page={page} setPage={setPage}/>
                    </div>
                    <BottomNavbar />
                </>
            </Route>
                {/* <Route path="/mypage/bet-history/all/slot-game">
                    <>
                        <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                        <Pagination page={page} setPage={setPage}/>   
                    </>
                </Route> */}
                <Route path="/mypage/bet-history/all/sports">
                    <>
                        <SportsBetHistory checkedState={checkedState} setCheckedState={setCheckedState} />
                        <Pagination page={page} setPage={setPage}/>
                        <BottomNavbar />
                    </>
                </Route>
                {/*  <Route path="/mypage/bet-history/all/e-sports">
                    <>
                        <ESportsBetHistory />
                    </>
                </Route>
                <Route path="/mypage/bet-history/all/minigame">
                    <>
                        <MinigameBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                        <Pagination page={page} setPage={setPage}/>   
                    </>
                </Route>
                <Route path="/mypage/bet-history/all/ar-game">
                    <>
                        <ARGameBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                        <Pagination page={page} setPage={setPage}/>   
                    </>
                </Route>
                <Route path="/mypage/bet-history/all/fishing-game">
                    <>
                        <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                        <Pagination page={page} setPage={setPage}/>   
                    </>
                </Route>
                <Route path="/mypage/bet-history/all/lottery-game">
                    <div className="mt-40px"/>
                </Route> */}
            </Route>



        </div>
    )
}

export default BetHistory
