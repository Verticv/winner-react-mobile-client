import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar';
import SportsBetHistoryPanel from '../../common/cards/SportsBetHistoryPanel'
import ScrollButton from 'components/common/ScrollButton'
import SelectAllButton from 'components/common/SelectAllButton'

const SportsBetHistory = ({checkedState, setCheckedState , showSub = true, attachedArray, setAttachedArray, setPopupOpen}) => {

    const [isAllSelected, setAllSelected] = useState(false)

    return (
        <div className="w-full">

            <DateSearchBar isGameResultsSearch={true} />


            <div className="w-full h-full">

                <ScrollButton />

                <div className="">
                    <SportsBetHistoryPanel isPopup={!showSub} type={0} checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
                </div>
                
                <SelectAllButton btn2Text='내역올리기' buttonsNumber={3} count={3} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
            </div>
            
        </div>
    )
}

export default SportsBetHistory
