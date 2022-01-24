import React, { useState } from 'react'
import HorizontalMenu1 from '../horizontalMenus/HorizontalMenu1'
import AccountProfileComponent from 'components/common/AccountProfileComponent'
import LeftMenu from "components/myPage/LeftMenu";
import HorizontalSubMenu from 'components/horizontalMenus/HorizontalSubMenu2'
import Icon1 from '../../images/newImages/mainPage/sports-1.png'
import Icon2 from '../../images/newImages/mainPage/sports-2.png'
import HomePageTopBanner from '../common/HomePageTopBanner'
import BottomNavbar from '../bottomNavbar/BottomNavbar'
import Pagination from './Pagination'
import SportsContent from './gameResults/SportsContent'
import { Route } from 'react-router'
import Navbar from '../mainPage/Navbar'
import NoticeBanner from '../mainPage/NoticeBanner'
import Sports from './gameResults/Sports'
import subIcon1 from '../../images/newImages/mainPage/results/1.png';
import subIcon3 from '../../images/newImages/mainPage/results/3.png';
import Logo from "../../images/newImages/mainPage/icons/logo.png";

const tabsArray = [
    { text: "스포츠", icon: Icon1, id: 0, path: "/mypage/gameresults/all" },
    { text: "미니게임", icon: Icon2, id: 1, path: "/minigame/powerball" },
];

const tabsSubArray = [
    { text: "승무패", id: 0, path: "/mypage/gameresults/all" },
    { text: "핸디캡", id: 1, path: "/mypage/gameresults/all1" },
    { text: "언오버", id: 2, path: "/mypage/gameresults/all2" },
    { text: "스페셜", id: 3, path: "/mypage/gameresults/all3" },
];

const LeftMenuSubArray = [
    {
      text: "스포츠",
      icon: subIcon1,
      id: 0,
      path: "/mypage/gameresults/all",
    },
    {
      text: "미니게임",
      icon: subIcon3,
      id: 1,
      path: "#",
    }
  ]



const GameResults = ({isAuthenticated}) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(3).fill(false)
    );

    console.log(selectedTab, selectedSubTab)
 
    return (
        <div style={{maxWidth: '1242px'}} className="w-full flex flex-col">

            <Route exact path="/mypage/gameresults">
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

            <Route exact path="/mypage/gameresults/all">
                <div className="w-full z-30 flex flex-col items-center">
                    <NoticeBanner />
                    <Navbar /> 
                    <HomePageTopBanner pageTitle='경기결과' />
                </div>
                
                <div className="w-full relative top-0">
                    <div style={{padding: '1.875rem'}} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                        <div className=" flex flex-shrink-0 w-full">
                            <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                        </div>
                    </div>
                </div>


                <Route path="/mypage/gameresults/all">
                    <>
                    <div id='scroll-wrapper1' style={{paddingLeft: '1.875rem'}} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                        <div className=" flex flex-shrink-0 w-full">
                            <HorizontalSubMenu selectedTab={selectedTab} isSameWidth itemsArray={tabsSubArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                        </div>
                    </div>

                        <Sports />
                        <SportsContent checkedState={checkedState} setCheckedState={setCheckedState} />
                        <div style={{marginTop: '1.875rem'}}>
                            <Pagination page={page} setPage={setPage}/>
                        </div>
                        <BottomNavbar />
                    </>
                </Route>

            </Route>

           

        </div>
    )
}

export default GameResults
