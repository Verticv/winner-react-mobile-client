import HorizontalMenu4 from 'components/horizontalMenus/HorizontalMenu4'
import React, { useState } from 'react'
import KinoLadderPanel from './KinoLadderPanel'
import PowerballPanel from './PowerballPanel'
import PowerLadderPanel from './PowerLadderPanel'
import SpeedKinoPanel from './SpeedKinoPanel'
import {
    PowerballHistoryArray,
    PowerballResultsArray,
    PowerLadderResultsArray
} from './arrays'
import { Route, useHistory } from 'react-router'

const MinigamesPanel = ({
    selectedGame,
    setSelectedGame,
    selectedTab,
    setSelectedTab,
    setSelectedOption
}) => {

    const [checkedState, setCheckedState] = useState(
        new Array(PowerballHistoryArray.length).fill(false)
    );
    const [isAllSelected, setAllSelected] = useState(false)
    const history = useHistory();

    const MenuArray = [
        { id: 0, text: "게임하기" },
        { id: 1, text: "회차결과" },
        { id: 2, text: "베팅내역" },
    ]

    return (
        <div className="w-full">
            <div className="relative flex z-10 px-3px">
                <HorizontalMenu4 itemsArray={MenuArray} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </div>

            <div className="px-2px w-full">
                <div className="-mt-7px w-full bg-gray-fafafa z-20 flex relative rounded-xl shadow-subNavbar overflow-hidden">
                    <Route path="/minigame/powerball">
                        <PowerballPanel  
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            historyArray={PowerballHistoryArray}
                            resultsArray={PowerballResultsArray}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            setSelectedOption={setSelectedOption}
                        />                    </Route>
                    <Route path="/minigame/powerladder">
                        <PowerLadderPanel 
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            historyArray={PowerballHistoryArray}
                            resultsArray={PowerLadderResultsArray}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            setSelectedOption={setSelectedOption}
                        />
                    </Route>
                    <Route path="/minigame/speedkino">
                        <SpeedKinoPanel
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            historyArray={PowerballHistoryArray}
                            resultsArray={PowerLadderResultsArray}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            setSelectedOption={setSelectedOption}
                        />                    
                    </Route>
                    <Route path="/minigame/kinoladder">
                        <KinoLadderPanel 
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            historyArray={PowerballHistoryArray}
                            resultsArray={PowerLadderResultsArray}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            setSelectedOption={setSelectedOption}
                        />                   
                    </Route>
                </div>
            </div>

            {selectedTab === 2 && (
                <div className="mt-20px h-36px w-full flex items-center justify-between">
                    <div className="flex space-x-2px">
                        <button 
                            className="flex items-center justify-center w-90px h-36px rounded-md bg-gray-r171a1d hover:opacity-75"
                            onClick={() => {
                                if (isAllSelected === true) {
                                    setCheckedState(Array(PowerballHistoryArray.length).fill(false))
                                } else {
                                    setCheckedState(Array(PowerballHistoryArray.length).fill(true))
                                }
                                setAllSelected(!isAllSelected)
                            }}
                        >
                            <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-white">{isAllSelected ? "선택해제" : "전체선택"}</span>
                            </div>
                        </button>
                        <button className="flex items-center justify-center w-90px h-36px rounded-md bg-red-cb4343 hover:opacity-75">
                            <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-white">선택삭제</span>
                            </div>
                        </button>
                    </div>
                    <button 
                        className="flex items-center justify-center h-36px w-114px rounded-4px bg-blue-r0070d9 hover:opacity-75"
                        onClick={() => history.push('/mypage/bet-history/minigame')}
                    >
                        <div className="flex items-center justify-center h-34px w-112px bg-black rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">전체베팅내역</span>
                        </div>
                    </button>
                </div>
            )}
        </div>
    )
}

export default MinigamesPanel
