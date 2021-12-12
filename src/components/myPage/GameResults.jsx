import React, { useState } from 'react'
import HorizontalMenu1 from '../horizontalMenus/HorizontalMenu1'
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

const tabsArray = [
    { text: "스포츠", icon: Icon1, id: 0, path: "/mypage/gameresults" },
    { text: "미니게임", icon: Icon2, id: 1, path: "#" },
];


const GameResults = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(3).fill(false)
    );

    console.log(selectedTab, selectedSubTab)
 
    return (
        <div style={{maxWidth: '1242px'}} className="w-full flex flex-col">

            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar /> 
                <HomePageTopBanner pageTitle='경기결과' />
            </div>
            
            <div className="w-full relative top-0 z-40">
                <div style={{padding: '1.875rem'}} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                    <div className=" flex flex-shrink-0 w-full">
                        <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                    </div>
                </div>
            </div>


            <Route path="/mypage/gameresults">
                <>
                <div style={{margin: '0 1.875rem'}} className="flex flex-wrap items-center justify-center">
                    <div  className="flex w-full h-full items-center justify-between">
                        <div style={{width: '17.625rem', height: '6.375rem'}} className="flex items-center justify-center rounded-full bg-blue-r0056a6 hover:opacity-75">
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-white pt-px">승무패</span>
                        </div>

                        <div style={{width: '17.625rem', height: '6.375rem', borderWidth: '0.1875rem'}} className="flex items-center justify-center border border-gray-b7b7b7 rounded-full bg-white hover:opacity-75">
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-gray-b7b7b7 pt-px">핸디캡</span>
                        </div>

                        <div style={{width: '17.625rem', height: '6.375rem', borderWidth: '0.1875rem'}} className="flex items-center justify-center border border-gray-b7b7b7 rounded-full bg-white hover:opacity-75">
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-gray-b7b7b7 pt-px">언오버</span>
                        </div>

                        <div style={{width: '17.625rem', height: '6.375rem', borderWidth: '0.1875rem'}} className="flex items-center justify-center border border-gray-b7b7b7 rounded-full bg-white hover:opacity-75">
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-gray-b7b7b7 pt-px">스페셜</span>
                        </div>


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


        </div>
    )
}

export default GameResults
