import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar';
import SportsBetHistoryPanel from '../../common/cards/SportsBetHistoryPanel'
import ScrollButton from 'components/common/ScrollButton'

const SportsBetHistory = ({checkedState, setCheckedState , showSub = true, attachedArray, setAttachedArray, setPopupOpen}) => {

    const [isAllSelected, setAllSelected] = useState(false)

    const AllSelectButtonPressed = () => {

        if (isAllSelected === false) {
            setAllSelected(true)
            setCheckedState(Array(3).fill(true))
        } else {
            setAllSelected(false)
            setCheckedState(Array(3).fill(false))
        }
    };

    return (
        <div className="w-full">

            <DateSearchBar isGameResultsSearch={true} />


            <div className="w-full h-full">

                <ScrollButton />

                <div className="">
                    <SportsBetHistoryPanel isPopup={!showSub} type={0} checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
                    <SportsBetHistoryPanel isPopup={!showSub} type={1} winAmount="+900,000,000" checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
                    <SportsBetHistoryPanel isPopup={!showSub} type={2} checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
                </div>


                <div style={{margin: '3.75rem 1.875rem'}} className="flex items-center justify-between">
                    <div style={{marginTop: '1.875rem'}} className="flex w-full">
                        <button 
                            style={{padding: '1px', height: '7.3125rem'}}
                            className="flex flex-1 items-center justify-center mr-4 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                            onClick={() => AllSelectButtonPressed()}
                        >
                            <div 
                                style={{
                                    background: "linear-gradient(to bottom, #555555, #333333)",
                                }}
                                className="flex items-center justify-center h-full w-full rounded-2xl border border-gray-r737579 cursor-pointer"
                            >
                                <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">{isAllSelected ? "선택해제" : "전체선택"}</span>
                            </div>
                        </button>
                        <button 
                            style={{padding: '1px', height: '7.3125rem'}}
                            className="flex flex-1 items-center justify-center mr-4 rounded-2xl bg-red-cb4343 hover:opacity-75"
                        >
                            <div 
                                style={{
                                    background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                                }}
                                className="flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 cursor-pointer"
                            >
                                <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">선택삭제</span>
                            </div>
                        </button>
                        <button 
                                style={{padding: '1px', height: '7.3125rem'}}
                                className="flex flex-1 items-center justify-center rounded-2xl bg-blue-r0070d9 hover:opacity-75"
                                onClick={() => AllSelectButtonPressed()}
                            >
                                <div 
                                    className="flex items-center justify-center h-full w-full rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db"
                                >
                                    <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">전체선택</span>
                                </div>
                            </button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default SportsBetHistory
