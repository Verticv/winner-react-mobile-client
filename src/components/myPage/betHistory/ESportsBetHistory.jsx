import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import SubHorizontalMenu from './SubHorizontalMenu'
import ScrollButton from 'components/common/ScrollButton'
import SelectAllButton from 'components/common/SelectAllButton'
import Icon1 from '../../../images/newImages/mypage/live-casino/ico-1.png'
import Icon2 from '../../../images/newImages/mypage/live-casino/ico-2.png'
import Icon3 from '../../../images/newImages/mypage/live-casino/ico-3.png'
import Icon4 from '../../../images/newImages/mypage/live-casino/ico-4.png'
import Icon7 from '../../../images/newImages/Dream_Gaming.png'
import Icon8 from '../../../images/newImages/SX-logo.png'
import Icon9 from '../../../images/newImages/Big_Gaming.png'

const subTabsArray = [
    { text: "전체", icon: Icon1, id: 0 },
    { text: "에볼루션", icon: Icon2, id: 1 },
    { text: "아시아게이밍", icon: Icon3, id: 2 },
    { text: "프레그메틱플레이", icon: Icon4, id: 3, custom: "mt-8px" },
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

const ESportsBetHistory = ({isState = 0, setState, showSub = true}) => {

    const [,setCheckedState] = useState(new Array(3).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)

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

            <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', color: '#585858', margin:'0 1.875rem', marginTop: '1.875rem', padding: '1.875rem', width: '73.875rem' }} className="h-full w-full flex items-center justify-center shadow-subNavbar rounded-2xl font-spoqaMedium">
                베팅내역이 없습니다. 
            </div>

            <SelectAllButton buttonsNumber={3} count={3} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
        </div>
    )
}

export default ESportsBetHistory
