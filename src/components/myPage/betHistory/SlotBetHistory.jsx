import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from 'components/common/HistoryTable'
import ScrollButton from 'components/common/ScrollButton'
import SelectAllButton from 'components/common/SelectAllButton'
import Icon1 from '../../../images/newImages/mypage/slots/1.png'
import Icon2 from '../../../images/newImages/mypage/slots/2.png'
import Icon3 from '../../../images/newImages/mypage/slots/3.png'
import Icon4 from '../../../images/newImages/mypage/slots/4.png'
import Icon5 from '../../../images/newImages/mypage/slots/5.png'
import Icon6 from '../../../images/newImages/mypage/slots/6.png'
import Icon7 from '../../../images/newImages/mypage/slots/7.png'
import Icon8 from '../../../images/newImages/mypage/slots/8.png'
import Icon9 from '../../../images/newImages/mypage/slots/9.png'
import Icon10 from '../../../images/newImages/mypage/slots/10.png'
import Icon11 from '../../../images/newImages/mypage/slots/11.png'
import Icon12 from '../../../images/newImages/mypage/slots/12.png'
import Icon13 from '../../../images/newImages/mypage/slots/13.png'
import Icon14 from '../../../images/newImages/mypage/slots/14.png'
import Icon15 from '../../../images/newImages/mypage/slots/15.png'
import SubHorizontalMenu3 from './SubHorizontalMenu3'

const subTabsArray = [
    { text: "마이크로게이밍", icon: Icon1, id: 0 },
    { text: "YGG드라실", icon: Icon2, id: 1 },
    { text: "드라군소프트", icon: Icon3, id: 2 },
    { text: "분고", icon: Icon4, id: 3, custom: "mt-8px" },
    { text: "플레이슨", icon: Icon5, id: 4 },
    { text: "넷엔트", icon: Icon6, id: 5 },
    { text: "프레그메틱플레이", icon: Icon7, id: 6 },
    { text: "퀵스핀", icon: Icon8, id: 6 },
    { text: "스페이드", icon: Icon9, id: 6 },
    { text: "하바네로", icon: Icon10, id: 6 },
    { text: "월드매치", icon: Icon11, id: 6 },
    { text: "메버릭", icon: Icon12, id: 6 },
    { text: "플레인앤고", icon: Icon13, id: 6 },
    { text: "YL게이밍", icon: Icon14, id: 6 },
    { text: "레드타이거", icon: Icon15, id: 6 },
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
            0: {게임종류: "레드타이거"}
        },
        {
            0: {게임구분: "Dragon's Luck"}
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
            0: {게임종류: "프레그메틱플레이"}
        },
        {
            0: {게임구분: "Starz Megaways"}
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

const SlotBetHistory = ({isState = 0, setState, showSub = true, isPopup = false}) => {

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
                                <SubHorizontalMenu3 itemsArray={subTabsArray} isState={isState} setState={setState} />
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

            <SelectAllButton buttonsNumber={3} count={3} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
        </div>
    )
}

export default SlotBetHistory
