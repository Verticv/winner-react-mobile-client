import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from 'components/common/HistoryTable'
import ScrollButton from 'components/common/ScrollButton'
import SelectAllButton from 'components/common/SelectAllButton'
import Icon1 from '../../../images/newImages/mypage/live-casino/ico-1.png'
import Icon2 from '../../../images/newImages/mypage/ar/1.png'
import Icon3 from '../../../images/newImages/mypage/ar/2.png'
import Icon4 from '../../../images/newImages/mypage/ar/3.png'
import Icon5 from '../../../images/newImages/mypage/ar/4.png'
import Icon6 from '../../../images/newImages/mypage/ar/5.png'
import Icon7 from '../../../images/newImages/mypage/ar/6.png'
import Icon8 from '../../../images/newImages/mypage/ar/7.png'

import SubHorizontalMenu4 from './SubHorizontalMenu4'

const subTabsArray = [
    { text: "전체", icon: Icon1, id: 0 },
    { text: "축구", icon: Icon2, id: 1 },
    { text: "경마", icon: Icon3, id: 2 },
    { text: "개경주", icon: Icon4, id: 3, custom: "mt-8px" },
    { text: "레이싱", icon: Icon5, id: 4 },
    { text: "탁구", icon: Icon6, id: 5 },
    { text: "배드민턴", icon: Icon7, id: 6 },
    { text: "양궁", icon: Icon8, id: 8 },
];

// 베팅번호 => number
// 베팅시간 => time
// 게임종류  => type
// 게임구분 => name
// 베팅금액  => amount
// 적중/손실금액 => profit
// 상태 => status

const tableData = [
    [          
        {
            0: {베팅번호: 7193915},
        },
        {
            0: {베팅시간: "2021-06-29 15:46:13"}
        },
        {
            0: {게임종류: "탁구"}
        },
        {
            0: {게임구분: "승패"}
        },
        {
            0: {베팅금액: "12,000"}
        },
        {
            0: {'적중/손실금액': "-12,000"}
        },
        {
            0: {상태: "패"}
        },
        {
            buttonColor: '#0056a6'
        }
    ],
    [          
        {
            0: {베팅번호: 7193914}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임종류: "개경주"}
        },
        {
            0: {게임구분: "승리"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {'적중/손실금액': "+900,000,000"}
        },
        {
            0: {상태: "승"}
        }
    ],
    [          
        {
            0: {베팅번호: 7193913}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임종류: "축구"}
        },
        {
            0: {게임구분: "경기결과"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
]

const ARGameBetHistory = ({isState = 0, setState, showSub = true}) => {

    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(true)

   

    return (
        <div className="w-full">
            {showSub === true && (
                <>
                    <div className="w-full flex relative top-0">
                        <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                        <div id='scroll-wrapper1' style={{padding: '1.875rem', paddingRight: '0', paddingTop: '0'}} className="sticky overflow-x-scroll overflow-y-hidden hide-scrollbar">
                            <div className=" flex flex-shrink-0 w-full">
                                <SubHorizontalMenu4 itemsArray={subTabsArray} isState={isState} setState={setState} />
                            </div>
                        </div>
                        <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full left-0 z-50"></div>
                    </div>
                </>

            )}
            
            <DateSearchBar isLeagueSearch={false} />

            <ScrollButton />

            <div className="h-full">
                <HistoryTable
                    containerBackground= '#f7f9fc'
                    tableData={tableData}
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='34.15rem'
                />   
            </div>

            <SelectAllButton buttonsNumber={3} count={3} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
        </div>
    )
}

export default ARGameBetHistory
