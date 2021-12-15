import React from 'react'
import DateSearchBar from '../DateSearchBar';
import SportsPanel from './SportsPanel'

const SportsContent = ({checkedState, setCheckedState , showSub = true, attachedArray, setAttachedArray, setPopupOpen}) => {
    return (
        <div className="w-full">

            <DateSearchBar isGameResultsSearch={true} />



            <div style={{borderRadius:"1em", margin: '1.875rem', paddingBottom: '1px'}} className="h-full shadow-subNavbar bg-gray-fafafa">
                    <div style={{paddingTop: '2.1875rem', paddingBottom: '1.125rem'}} className="flex w-full pb-0 font-spoqaMedium text-14px tracking-tight text-gray-r454545">
                        <div style={{fontSize: '2.625rem'}} className="h-full flex-1 flex items-center justify-end">승(홈)</div>
                        <div style={{fontSize: '2.625rem'}} className="h-full flex-1 flex items-center justify-end">무</div>
                        <div style={{fontSize: '2.625rem', flex: '1.3 1.3 0%;'}} className="h-full flex-1 flex items-center justify-end">패(원정)</div>
                        <div style={{fontSize: '2.625rem', flex: '0.8 0.8 0%;'}} className="h-full mr-8 flex-1 flex items-center justify-end">결과</div>
                    </div>
                    <SportsPanel showHeader={false} isPopup={!showSub} type={5} score='4:4' result='win' checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
                    <SportsPanel showHeader={false} isPopup={!showSub} type={6} firstScore='5:0' secondScore='1:2' secondResult='lose' winAmount="+900,000,000" checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
                    <SportsPanel showHeader={false} isPopup={!showSub} type={5} score='1:0' checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
                    <SportsPanel isLastElement showHeader={false} isPopup={!showSub} type={5} score='2:1' checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
                </div>      
        </div>
    )
}

export default SportsContent
