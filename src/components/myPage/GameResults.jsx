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
import subIcon1 from '../../images/newImages/mainPage/results/1.png';
import subIcon3 from '../../images/newImages/mainPage/results/3.png';
import Logo from "../../images/newImages/mainPage/icons/logo.png";
import ScrollButton from 'components/common/ScrollButton';
import DateSearchBar from './DateSearchBar';
import MinigamesMatchResultPanel from 'components/common/cards/MinigamesMatchResultPanel';
import CardHeader from 'components/common/sportCards/CardHeader';
import PowerballResultsTable from 'components/PowerballResultsTable';
import MinigameTab from './gameResults/MinigameTab';
import Sports1 from './gameResults/Sports1';
import TableHeader2 from 'components/common/sportCards/TableHeader2';

const tabsArray = [
    { text: "스포츠", icon: Icon1, id: 0, path: "/mypage/gameresults/all" },
    { text: "미니게임", icon: Icon2, id: 1, path: "/mypage/gameresults/minigame/powerball" },
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
      path: "/mypage/gameresults/minigame/powerball",
    }
  ]



const inboxArray = [
    {
        id: 0,
        time: "2021-06-29 15:45",
        num: "211",
        results: "파워볼 홀/짝 (홀)",
        ratio: "1.95"
    },
    {
        id: 1,
        time: "2021-06-29 15:45",
        num: "211",
        results: "파워볼 숫자 (2)",
        ratio: "9.00"
    },
    {
        id: 2,
        time: "2021-06-29 15:45",
        num: "211",
        results: "파워볼 구간 A(0~2)",
        ratio: "3.15"
    },
    {
        id: 3,
        time: "2021-06-29 15:45",
        num: "211",
        results: "파워볼 언오버 (짝 언더)",
        ratio: "9.00"
    },
    {
        id: 4,
        time: "2021-06-29 15:45",
        num: "211",
        results: "일반볼 홀/짝 (짝)",
        ratio: "3.15"
    },
    {
        id: 5,
        time: "2021-06-29 15:45",
        num: "211",
        results: "일반볼 구간 (중)",
        ratio: "9.00"
    },
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
            <ScrollButton />

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
                    <HomePageTopBanner pageTitle='경기결과' toPath='/mypage/gameresults' />
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
                            <HorizontalSubMenu isSameWidth setSelectedSubTab={setSelectedSubTab}/>
                        </div>
                    </div>

                        <Sports1 />
                        <SportsContent checkedState={checkedState} setCheckedState={setCheckedState} />
                        <div style={{marginTop: '1.875rem'}}>
                            <Pagination page={page} setPage={setPage}/>
                        </div>
                        <BottomNavbar />
                    </>
                </Route>

            </Route>

            <Route path="/mypage/gameresults/minigame">
                <div className="w-full z-30 flex flex-col items-center">
                    <NoticeBanner />
                    <Navbar /> 
                    <HomePageTopBanner pageTitle='경기결과' toPath='/mypage/gameresults' />
                </div>
                
                <div className="w-full relative top-0">
                    <div style={{padding: '1.875rem'}} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                        <div className=" flex flex-shrink-0 w-full">
                            <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                        </div>
                    </div>
                </div>
                <MinigameTab />

                {/* <div className="w-full flex relative top-0">
                    <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                    <div id='scroll-wrapper1' style={{padding: '1.875rem', paddingRight: '0', paddingTop: '0'}} className="sticky overflow-x-scroll overflow-y-hidden hide-scrollbar">
                        <div className=" flex flex-shrink-0 w-full">
                            <SubHorizontalMenu2 itemsArray={subTabsArray} isState={isState} setState={setState} isMinigame={true}/>
                        </div>
                    </div>
                    <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full left-0 z-50"></div>
                </div> */}

                <DateSearchBar isLeagueSearch={false} withBlackButton hasDateSuggestion={false} />

                <Route exact path="/mypage/gameresults/minigame/powerball">
                    <div style={{borderRadius:"1em", margin: '1.875rem', marginTop: '1.9rem'}} className="shadow-subNavbar overflow-hidden bg-gray-fafafa">
                        <TableHeader2 isMinigame={true} />
                        <div className="flex flex-col w-full px-4 pb-4">
                            <CardHeader flag = 'us' name = '파워볼' date = '2021-06-29 15:45' isMinigame={true} minigameType="powerball" />
                            <PowerballResultsTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray}/>
                        </div>
                        <div className="flex flex-col w-full p-4">
                            <CardHeader flag = 'us' name = '파워볼' date = '2021-06-29 15:45' isMinigame={true} minigameType="powerball" />
                            <PowerballResultsTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray}/>
                        </div>
                    </div>
                </Route>
                <Route exact path="/mypage/gameresults/minigame/powerladder">
                    <MinigamesMatchResultPanel />
                </Route>
                <Route exact path="/mypage/gameresults/minigame/speedkino">
                    <MinigamesMatchResultPanel type="speedkino" />
                </Route>
                <Route exact path="/mypage/gameresults/minigame/kinoladder">
                    <MinigamesMatchResultPanel type="kinoladder" />
                </Route>


                {/* {isState === 0 
                ? (
                    <div style={{borderRadius:"1em", margin: '1.875rem', marginTop: '1.8rem'}} className="shadow-subNavbar overflow-hidden">
                        <div className="flex flex-col w-full p-4">
                            <CardHeader flag = 'us' name = '파워볼' date = '2021-06-29 15:45' isMinigame={true} minigameType="powerball" />
                            <PowerballResultsTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray}/>
                        </div>
                        <div className="flex flex-col w-full p-4">
                            <CardHeader flag = 'us' name = '파워볼' date = '2021-06-29 15:45' isMinigame={true} minigameType="powerball" />
                            <PowerballResultsTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray}/>
                        </div>
                    </div>
                ) : isState === 1 ? (
                    <>
                        <MinigamesMatchResultPanel />
                    </>
                ) : isState === 2 ? (
                    <>
                        <MinigamesMatchResultPanel type="speedkino" />
                    </>
                ) : (
                    <>
                        <MinigamesMatchResultPanel type="kinoladder" />
                    </>
                )} */}

                <div style={{marginTop: '1.875rem'}}>
                    <Pagination page={page} setPage={setPage}/>
                </div>
                <BottomNavbar />

            </Route>


        </div>
    )
}

export default GameResults
