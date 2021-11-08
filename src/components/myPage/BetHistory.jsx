import React, { useState } from 'react'
import HorizontalMenu from '../horizontalMenus/HorizontalMenu'
import Icon1 from '../../images/myPage/betHistory/ico_1.png'
import Icon2 from '../../images/myPage/betHistory/ico_2.png'
import Icon3 from '../../images/myPage/betHistory/ico_3.png'
import Icon4 from '../../images/myPage/betHistory/ico_4.png'
import Icon5 from '../../images/myPage/betHistory/ico_5.png'
import Icon6 from '../../images/myPage/betHistory/ico_6.png'
import Icon7 from '../../images/myPage/betHistory/ico_7.png'
import Icon8 from '../../images/myPage/betHistory/ico_8.png'
import Icon9 from '../../images/myPage/betHistory/ico_9.png'
import Pagination from './Pagination'
import MyPageTitle from './MyPageTitle'
import LiveCasinoBetHistory from './betHistory/LiveCasinoBetHistory'
import SportsBetHistory from './betHistory/SportsBetHistory'
import AllBetHistory from './betHistory/AllBetHistory'
import SlotBetHistory from './betHistory/SlotBetHistory'
import MinigameBetHistory from './betHistory/MinigameBetHistory'
import ARGameBetHistory from './betHistory/ARGameBetHistory'
import { Route } from 'react-router'
import ESportsBetHistory from './betHistory/ESportsBetHistory'

const tabsArray = [
    { text: "전체", icon: Icon1, id: 0, path: "/mypage/bet-history" },
    { text: "라이브카지노", icon: Icon2, id: 1, path: "/mypage/bet-history/live-casino" },
    { text: "슬롯게임", icon: Icon3, id: 2, path: "/mypage/bet-history/slot-game" },
    { text: "스포츠", icon: Icon4, id: 3, path: "/mypage/bet-history/sports" },
    { text: "e-스포츠", icon: Icon5, id: 4, path: "/mypage/bet-history/e-sports" },
    { text: "미니게임", icon: Icon6, id: 5, path: "/mypage/bet-history/minigame" },
    { text: "키론가상게임", icon: Icon7, id: 6, path: "/mypage/bet-history/ar-game" },
    { text: "피싱게임", icon: Icon8, id: 7, path: "/mypage/bet-history/fishing-game" },
    { text: "로터리게임", icon: Icon9, id: 8, path: "/mypage/bet-history/lottery-game" }
];


const BetHistory = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(3).fill(false)
    );
 
    return (
        <div className="flex flex-col items-center">
            
            <MyPageTitle title="베팅내역" />
            
            <div className="relative w-full mt-20px">
                <HorizontalMenu itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                {(selectedTab !== 0 && selectedTab !== 3 && selectedTab !== 4 && selectedTab !== 7 && selectedTab !== 8) && (
                    <div style={{marginLeft: `${selectedTab * 116 + 49}px`}} className={`absolute bottom-0 w-20px -mb-10px overflow-hidden inline-block `}>
                        <div className="h-10px w-10px bg-gradient-to-br from-gray-d2dfea via-gray-eff3f6 to-gray-eff3f6 rotate-45 transform origin-bottom-left"></div>
                    </div>
                )}
            </div>
            
            <Route exact path="/mypage/bet-history">
                <>
                    <AllBetHistory />
                    <Pagination page={page} setPage={setPage}/>   
                </>
            </Route>
            <Route path="/mypage/bet-history/live-casino">
                <>
                    <LiveCasinoBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                    <Pagination page={page} setPage={setPage}/>   
                </>
            </Route>
            <Route path="/mypage/bet-history/slot-game">
                <>
                    <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                    <Pagination page={page} setPage={setPage}/>   
                </>
            </Route>
            <Route path="/mypage/bet-history/sports">
                <>
                    <SportsBetHistory checkedState={checkedState} setCheckedState={setCheckedState} />
                    <Pagination page={page} setPage={setPage}/>   
                </>
            </Route>
            <Route path="/mypage/bet-history/e-sports">
                <>
                    <ESportsBetHistory />
                </>
            </Route>
            <Route path="/mypage/bet-history/minigame">
                <>
                    <MinigameBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                    <Pagination page={page} setPage={setPage}/>   
                </>
            </Route>
            <Route path="/mypage/bet-history/ar-game">
                <>
                    <ARGameBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                    <Pagination page={page} setPage={setPage}/>   
                </>
            </Route>
            <Route path="/mypage/bet-history/fishing-game">
                <>
                    <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                    <Pagination page={page} setPage={setPage}/>   
                </>
            </Route>
            <Route path="/mypage/bet-history/lottery-game">
                <div className="mt-40px"/>
            </Route>

        </div>
    )
}

export default BetHistory
