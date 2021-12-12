import React from 'react'
import DateSearchBar from '../DateSearchBar';
import SportsPanel from './SportsPanel'

const SportsContent = ({checkedState, setCheckedState , showSub = true, attachedArray, setAttachedArray, setPopupOpen}) => {
    return (
        <div className="w-full">

            <DateSearchBar isGameResultsSearch={true} />


            <div className="w-full h-full mt-20px">
                <div className="space-y-15px">
                    <SportsPanel isPopup={!showSub} type={5} score='4:4' result='win' checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
                    <SportsPanel isPopup={!showSub} type={6} firstScore='5:0' secondScore='1:2' secondResult='lose' winAmount="+900,000,000" checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
                    <SportsPanel isPopup={!showSub} type={5} score='1:0' checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
                    <SportsPanel isPopup={!showSub} type={5} score='2:1' checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
                </div>

            </div>
            
        </div>
    )
}

export default SportsContent
