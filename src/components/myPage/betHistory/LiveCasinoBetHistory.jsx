import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import SubHorizontalMenu from './SubHorizontalMenu'
import HistoryTable from 'components/common/HistoryTable'
import ScrollButton from 'components/common/ScrollButton'
import SelectAllButton from 'components/common/SelectAllButton'
import Icon1 from '../../../images/newImages/mypage/live-casino/ico-1.png'
import Icon2 from '../../../images/newImages/mypage/live-casino/ico-11.png'
import Icon3 from '../../../images/newImages/mypage/live-casino/ico-3.png'
import Icon4 from '../../../images/newImages/mypage/live-casino/ico-4.png'
import Icon7 from '../../../images/newImages/mypage/live-casino/ico-5.png'
import Icon8 from '../../../images/newImages/mypage/live-casino/ico-6.png'
import Icon9 from '../../../images/newImages/mypage/live-casino/ico-7.png'

const subTabsArray = [
    { text: "전체", icon: Icon1, id: 0 },
    { text: "에볼루션", icon: Icon2, id: 1 },
    { text: "아시아게이밍", icon: Icon3, id: 2 },
    { text: "프레그메틱플레이", icon: Icon4, id: 3 },
    { text: "드림게이밍", icon: Icon7, id: 4 },
    { text: "섹시게이밍", icon: Icon8, id: 5 },
    { text: "빅게이밍", icon: Icon9, id: 6 },
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
            0: {게임종류: "에볼루션"}
        },
        {
            0: {게임구분: "바카라"}
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
            0: {게임종류: "에볼루션"}
        },
        {
            0: {게임구분: "바카라"}
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
            0: {게임종류: "프레그메틱플레이"}
        },
        {
            0: {게임구분: "블랙잭"}
        },
        {
            0: {베팅금액: "800,000"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
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
            0: {게임종류: "프레그메틱플레이"}
        },
        {
            0: {게임구분: "블랙잭"}
        },
        {
            0: {베팅금액: "800,000"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
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
            0: {게임종류: "프레그메틱플레이"}
        },
        {
            0: {게임구분: "블랙잭"}
        },
        {
            0: {베팅금액: "800,000"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
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
            0: {게임종류: "프레그메틱플레이"}
        },
        {
            0: {게임구분: "블랙잭"}
        },
        {
            0: {베팅금액: "800,000"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
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
            0: {게임종류: "프레그메틱플레이"}
        },
        {
            0: {게임구분: "블랙잭"}
        },
        {
            0: {베팅금액: "800,000"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
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
            0: {게임종류: "프레그메틱플레이"}
        },
        {
            0: {게임구분: "블랙잭"}
        },
        {
            0: {베팅금액: "800,000"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
]

const LiveCasinoBetHistory = ({isState = 0, setState, showSub = true, isPopup = false}) => {

    const [checkedState, setCheckedState] = useState(new Array(10).fill(false))
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
                                <SubHorizontalMenu itemsArray={subTabsArray} isState={isState} setState={setState} />
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
                    cardHeight='33.75rem'
                    isPopup={isPopup}
                />   
            </div>

            <SelectAllButton buttonsNumber={3} count={20} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
        </div>
    )
}

export default LiveCasinoBetHistory
