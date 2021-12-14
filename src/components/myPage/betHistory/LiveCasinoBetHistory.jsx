import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import SubHorizontalMenu from './SubHorizontalMenu'
import LiveCasinoBetHistoryTable from '../tables/LiveCasinoBetHistoryTable'
import SelectAllButton from '../../common/SelectAllButton'
import Icon1 from '../../../images/newImages/mypage/live-casino/ico-1.png'
import Icon2 from '../../../images/newImages/mypage/live-casino/ico-2.png'
import Icon3 from '../../../images/newImages/mypage/live-casino/ico-3.png'
import Icon4 from '../../../images/newImages/mypage/live-casino/ico-4.png'
import Icon7 from '../../../images/myPage/betHistory/dg.png'
import Icon8 from '../../../images/myPage/betHistory/sexy.png'
import Icon9 from '../../../images/myPage/betHistory/big.png'

const subTabsArray = [
    { text: "전체", icon: Icon1, id: 0 },
    { text: "에볼루션", icon: Icon2, id: 1 },
    { text: "아시아게이밍", icon: Icon3, id: 2 },
    { text: "프레그메틱플레이", icon: Icon4, id: 3, custom: "mt-8px" },
    { text: "드림게이밍", icon: Icon7, id: 4 },
    { text: "섹시게이밍", icon: Icon8, id: 5 },
    { text: "빅게이밍", icon: Icon9, id: 6 },
];

const tableArrayTitles = [
    {
        id: 0,
        text: "베팅번호",
        isRed: false,
    },
    {
        id: 1,
        text: "베팅시간",
        isRed: false,

    },
    {
        id: 2,
        text: "게임종류",
        isRed: false,

    },
    {
        id: 3,
        text: "게임구분",
        isRed: false,

    },
    {
        id: 4,
        text: "베팅금액",
        isRed: false,

    },
    {
        id: 5,
        text: "적중/손실금액",
        isRed: false,

    },
    {
        id: 6,
        text: "상태 : 패",
        isRed: false,

    },
]

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

   

    return (
        <div className="w-full">
            {showSub === true && (
                <>
                    <div className="w-full relative top-0">
                    <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
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
                    titleArray={tableArrayTitles}
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='33.75rem'
                />   
            </div>

            <SelectAllButton count={3} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
        </div>
    )
}

export default LiveCasinoBetHistory
