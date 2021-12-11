import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import SubHorizontalMenu from './SubHorizontalMenu'
import LiveCasinoBetHistoryTable from '../tables/LiveCasinoBetHistoryTable'
import Icon1 from '../../../images/newImages/mypage/live-casino/ico-1.png'
import Icon2 from '../../../images/newImages/mypage/live-casino/ico-2.png'
import Icon3 from '../../../images/newImages/mypage/live-casino/ico-3.png'
import Icon4 from '../../../images/newImages/mypage/live-casino/ico-4.png'

const subTabsArray = [
    { text: "전체", icon: Icon1, id: 0 },
    { text: "에볼루션", icon: Icon2, id: 1 },
    { text: "아시아게이밍", icon: Icon3, id: 2 },
    { text: "프레그메틱플레이", icon: Icon4, id: 3, custom: "mt-8px" },
    { text: "드림게이밍", icon: Icon1, id: 4 },
    { text: "섹시게이밍", icon: Icon1, id: 5 },
    { text: "빅게이밍", icon: Icon1, id: 6 },
];

const tableArray = [
    {
        id: 0,
        number: 7193915,
        time: "2021-06-29 15:46:13",
        type: "에볼루션",
        name: "바카라",
        amount: "12,000",
        profit: "-12,000",
        status: "패"
    },
    {
        id: 1,
        number: 7193914,
        time: "2021-06-29 15:45:41",
        type: "에볼루션",
        name: "바카라",
        amount: "900,000,000",
        profit: "+900,000,000",
        status: "승"
    },
    {
        id: 2,
        number: 7193913,
        time: "2021-06-29 15:45:41",
        type: "프레그메틱플레이",
        name: "블랙잭",
        amount: "800,000",
        profit: "-800,000",
        status: "패"
    },
];

const LiveCasinoBetHistory = ({isState, setState, showSub = true}) => {

    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(true)

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
                <>
                    <div className="w-full relative top-0">
                    <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff"}} className="absolute w-50px h-full right-0 z-50"></div>
                    <div style={{padding: '1.875rem', paddingRight: '0', paddingTop: '0'}} className="sticky overflow-x-scroll overflow-y-hidden hide-scrollbar">
                        <div className=" flex flex-shrink-0 w-full">
                            <SubHorizontalMenu itemsArray={subTabsArray} isState={isState} setState={setState} />
                        </div>
                    </div>
                    </div>

                    {/* <DateSearchBar isLeagueSearch={false} /> */}
                </>

            )}
            
            <DateSearchBar isLeagueSearch={false} />


            <div className="h-full">
                <LiveCasinoBetHistoryTable 
                    array={tableArray} 
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                />   
            </div>

            <div style={{margin: '3.75rem 1.875rem', marginTop: '1.875rem'}} className="flex items-center justify-between">
                <div className="flex w-full space-x-2px">
                    <button 
                        style={{borderRadius:"4px", padding: '0.1875rem', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center mr-4 rounded-md bg-gray-r171a1d hover:opacity-75"
                        onClick={() => allSelectButtonPressed()}
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #555555, #333333)",
                                borderRadius: "3px"
                            }}
                            className="flex items-center justify-center h-full w-full rounded-lg border border-gray-r737579 cursor-pointer"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button 
                        style={{borderRadius:"4px", padding: '0.1875rem', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center m-0 rounded-md bg-red-cb4343 hover:opacity-75"
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                                borderRadius: "3px"
                            }}
                            className="flex items-center justify-center h-full w-full rounded-lg border border-red-f36576 cursor-pointer"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">선택삭제</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LiveCasinoBetHistory
