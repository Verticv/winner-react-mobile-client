// import HorizontalMenu4 from 'components/horizontalMenus/HorizontalMenu4'
import React, { useState, useEffect } from 'react'
import { Route } from 'react-router'
import KinoLadderPanel from './KinoLadderPanel'
import PowerballPanel from './PowerballPanel'
import PowerLadderPanel from './PowerLadderPanel'
import RefreshIcon from '../../images/minigames/refresh_icon.png'
import ClockIcon from '../../images/minigames/clock_blue.png'
// import CheckIcon from '../../images/minigames/checkbox.png'
import SpeedKinoPanel from './SpeedKinoPanel'
// import { he, ko } from "date-fns/locale"
import { ko } from "date-fns/locale"
import { format } from 'date-fns'
import {
    PowerballHistoryArray,
    PowerballResultsArray,
    PowerLadderResultsArray
} from './arrays'
// import { Route, useHistory } from 'react-router'

const MinigamesPanel = ({
    selectedGame,
    setSelectedGame,
    selectedTab,
    setSelectedTab,
    setSelectedOption
}) => {

    // const history = useHistory();
    const [checkedState, setCheckedState] = useState(
        new Array(PowerballHistoryArray.length).fill(false)
    );
    const [isAllSelected, setAllSelected] = useState(false)
    const dateFormat = "MM월 dd일"
    const dateFormat1 = "H:mm:ss"

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        setTime(Date.now())
    }, [])

    const MenuArray = [
        { id: 0, text: "게임하기" },
        { id: 1, text: "회차결과" },
        { id: 2, text: "베팅내역" },
    ]

    console.log(PowerLadderResultsArray, isAllSelected, setAllSelected, MenuArray)

    return (
        <div className="w-full">
            {/* <div className="relative flex z-10 px-3px">
                <HorizontalMenu4 itemsArray={MenuArray} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </div> */}

            <div 
                style={{
                    background: "linear-gradient(to right, #2087f0, #1873cf", 
                    boxShadow:'inset 0px 1px 0px 0px rgba(0, 0, 0, 0.2)',
                    height: '8.5rem',
                    margin: '0.9375rem 0'
                }} 
                className="w-full flex justify-between items-center"
            >
                <div style={{width: '6.5rem', marginRight: '0.9375rem'}}></div>
                <div className="flex w-full justify-center">
                    <div style={{fontSize: '2.8125rem', marginRight:'1.6875rem'}} className="font-spoqaMedium tracking-tight text-white flex items-center">
                        {format(time, dateFormat, { locale : ko })} {format(time, dateFormat1, { locale : ko })} <p style={{color:"#ffea00", marginLeft: '0.875rem'}} className="">[216회차]</p>
                    </div>
                    <div style={{color:"#bffff5"}} className="flex font-spoqaBold tracking-tight items-center">
                        <img style={{width: '3rem', marginRight:'0.75rem'}} className="object-contain pb-px" src={ClockIcon} alt="" />
                        <p style={{fontSize: '3.375rem'}}>02:16</p>
                    </div>
                </div>
                <img style={{width: '6.5rem', marginRight: '0.9375rem'}} src={RefreshIcon} alt="" className="cursor-pointer" />
            </div>

            <div className="w-full">
                <div className="w-full z-20 flex relative overflow-hidden">
                    <Route path="/minigame/powerball">
                        <PowerballPanel  
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            historyArray={PowerballHistoryArray}
                            resultsArray={PowerballResultsArray}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            setSelectedOption={setSelectedOption}
                        />
                    </Route>

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

            {/* 
             */}
        </div>
    )
}

export default MinigamesPanel
