import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import SubHorizontalMenu from './SubHorizontalMenu'
import AllIcon from '../../../images/myPage/betHistory/all.png'
import Sub1 from '../../../images/myPage/betHistory/minigame/sub1.png'
import Sub2 from '../../../images/myPage/betHistory/minigame/sub2.png'
import Sub3 from '../../../images/myPage/betHistory/minigame/sub3.png'
import Sub4 from '../../../images/myPage/betHistory/minigame/sub4.png'
import MinigameBetHistoryPanel from './MinigameBetHistoryPanel'
import MinigameBetHistoryTable from '../tables/MinigameBetHistoryTable'
import MinigameBetHistoryPowerballTable from '../tables/MinigameBetHistoryPowerballTable'

const subTabsArray = [
    { text: "전체", icon: AllIcon, id: 0 },
    { text: "파워볼", icon: Sub1, id: 1 },
    { text: "파워사다리", icon: Sub2, id: 2 },
    { text: "스피드키노", icon: Sub3, id: 3, custom: "mt-8px" },
    { text: "키노사다리", icon: Sub4, id: 4 },
];

const tableArray = [
    {
        id: 0,
        number: 7193915,
        time: "2021-06-29 15:46:13",
        type: "파워볼",
        name: "파워볼 언오버",
        history: "언더",
        amount: "12,000",
        percentage: "1.95",
        profit: "-12,000",
        status: "패",
    },
    {
        id: 1,
        number: 7193914,
        time: "2021-06-29 15:45:41",
        type: "파워사다리",
        name: "홀/짝",
        history: "짝",
        amount: "900,000,000",
        percentage: "1.95",
        profit: "+900,000,000",
        status: "승"
    },
    {
        id: 2,
        number: 7193913,
        time: "2021-06-29 15:45:41",
        type: "파워사다리",
        name: "홀/짝",
        history: "홀",
        amount: "800,000",
        percentage: "1.95",
        profit: "-800,000",
        status: "패"
    },
];

const MinigameBetHistory = ({isState, setState, showSub = true, attachedArray, setAttachedArray, setPopupOpen1}) => {

    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(false)

    function allSelectButtonPressed() {
        if (isAllSelected) {
            setCheckedState(Array(3).fill(false))
        } else {
            setCheckedState(Array(3).fill(true))
        }
        setAllSelected(!isAllSelected)
    }

    return (
        <div className="w-full">
            {showSub === true && (
                <div className="mt-10px h-88px w-full bg-gray-eff3f6 rounded-xl p-4px">
                    <SubHorizontalMenu itemsArray={subTabsArray} isState={isState} setState={setState} />
                </div>
            )}
            

            <DateSearchBar isLeagueSearch={false} />

            <div className="w-full h-full mt-20px">

                {isState === 0 ? (
                    <MinigameBetHistoryTable 
                        array={tableArray} 
                        checkedState={checkedState} 
                        setCheckedState={setCheckedState}
                        isPopupOpen={isPopupOpen}
                        setPopupOpen={setPopupOpen}
                    />   
                ) : isState === 1 ? (
                    <MinigameBetHistoryPowerballTable 
                        array={tableArray} 
                        checkedState={checkedState} 
                        setCheckedState={setCheckedState}
                        isPopupOpen={isPopupOpen}
                        setPopupOpen={setPopupOpen}
                    /> 
                ) : isState === 2 ? (
                    <div className="space-y-15px">
                        <MinigameBetHistoryPanel 
                            id={0} 
                            checkedState={checkedState} 
                            setCheckedState={setCheckedState}
                            isPopup={!showSub}
                            attachedArray={attachedArray} 
                            setAttachedArray={setAttachedArray}
                            setPopupOpen={setPopupOpen1}
                        />
                        <MinigameBetHistoryPanel 
                            id={1} 
                            checkedState={checkedState} 
                            setCheckedState={setCheckedState}
                            team1="우3홀 [200회]"
                            team2="[200회] 좌3짝"
                            choice="odd"
                            result="win"
                            winAmount="+900,000,000"
                            isPopup={!showSub}
                            attachedArray={attachedArray} 
                            setAttachedArray={setAttachedArray}
                            setPopupOpen={setPopupOpen1}
                        />
                    </div>           
                ) : isState === 3 ? (
                    <div className="space-y-15px">
                        <MinigameBetHistoryPanel 
                            id={0} 
                            checkedState={checkedState} 
                            setCheckedState={setCheckedState}
                            game="스피드키노"
                            isPopup={!showSub}
                            attachedArray={attachedArray} 
                            setAttachedArray={setAttachedArray}
                            setPopupOpen={setPopupOpen1}
                        />
                        <MinigameBetHistoryPanel 
                            id={1} 
                            checkedState={checkedState} 
                            setCheckedState={setCheckedState}
                            result="win"
                            winAmount="+900,000,000"
                            game="스피드키노"
                            isPopup={!showSub}
                            attachedArray={attachedArray} 
                            setAttachedArray={setAttachedArray}
                            setPopupOpen={setPopupOpen1}
                        />
                    </div> 
                ) : isState === 4 ? (
                    <div className="space-y-15px">
                        <MinigameBetHistoryPanel 
                            id={0} 
                            checkedState={checkedState} 
                            setCheckedState={setCheckedState}
                            game="키노사다리"
                            isPopup={!showSub}
                            attachedArray={attachedArray} 
                            setAttachedArray={setAttachedArray}
                            setPopupOpen={setPopupOpen1}
                        />
                        <MinigameBetHistoryPanel 
                            id={1} 
                            checkedState={checkedState} 
                            setCheckedState={setCheckedState}
                            team1="우3홀 [200회]"
                            team2="[200회] 좌3짝"
                            choice="odd"
                            result="win"
                            winAmount="+900,000,000"
                            game="키노사다리"
                            isPopup={!showSub}
                            attachedArray={attachedArray} 
                            setAttachedArray={setAttachedArray}
                            setPopupOpen={setPopupOpen1}
                        />
                    </div>
                ) : (
                    <></>
                )}
                
            </div>

            <div className="mt-40px h-36px w-full flex items-center justify-between">
                <div className="flex space-x-2px">
                    <button 
                        style={{borderRadius:"4px"}}
                        className="flex items-center justify-center w-90px h-36px rounded-md bg-gray-r171a1d hover:opacity-75"
                        onClick={() => allSelectButtonPressed()}
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #555555, #333333)",
                                borderRadius: "3px"
                            }}
                            className="flex items-center justify-center h-34px w-88px rounded-4px border border-gray-r737579 cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                <button 
                    style={{borderRadius:"4px"}}
                    className="flex items-center justify-center w-90px h-36px rounded-md bg-red-cb4343 hover:opacity-75"
                >
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                            borderRadius: "3px"
                        }}
                        className="flex items-center justify-center h-34px w-88px rounded-4px border border-red-f36576 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">선택삭제</span>
                    </div>
                </button>
                </div>
                <button className="flex items-center justify-center w-159px h-36px rounded-4px bg-blue-r0070d9 hover:opacity-75">
                    <div className="flex items-center justify-center h-34px w-157px rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">게시판에 내역올리기</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default MinigameBetHistory
