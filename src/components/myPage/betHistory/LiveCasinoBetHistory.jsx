import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import SubHorizontalMenu from './SubHorizontalMenu'
import LiveCasinoBetHistoryTable from '../tables/LiveCasinoBetHistoryTable'
import AllIcon from '../../../images/myPage/betHistory/all.png'
import EvoIcon from '../../../images/myPage/betHistory/evolution.png'
import AsiaIcon from '../../../images/myPage/betHistory/asia.png'
import PragIcon from '../../../images/myPage/betHistory/pragmatic.png'
import DgIcon from '../../../images/myPage/betHistory/dg.png'
import SexyIcon from '../../../images/myPage/betHistory/sexy.png'
import BigIcon from '../../../images/myPage/betHistory/big.png'

const subTabsArray = [
    { text: "전체", icon: AllIcon, id: 0 },
    { text: "에볼루션", icon: EvoIcon, id: 1 },
    { text: "아시아게이밍", icon: AsiaIcon, id: 2 },
    { text: "프레그메틱플레이", icon: PragIcon, id: 3, custom: "mt-8px" },
    { text: "드림게이밍", icon: DgIcon, id: 4 },
    { text: "섹시게이밍", icon: SexyIcon, id: 5 },
    { text: "빅게이밍", icon: BigIcon, id: 6 },
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
                    <div className="mt-10px h-88px w-full bg-gray-eff3f6 rounded-xl p-4px">
                        <SubHorizontalMenu itemsArray={subTabsArray} isState={isState} setState={setState} />
                    </div>

                    {/* <DateSearchBar isLeagueSearch={false} /> */}
                </>

            )}
            
            <DateSearchBar isLeagueSearch={false} />


            <div className="w-full h-full mt-20px">
                <LiveCasinoBetHistoryTable 
                    array={tableArray} 
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                />   
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

export default LiveCasinoBetHistory
