import React from 'react'
import DateSearchBar from '../DateSearchBar';
import SportsMatchResultPanel from 'components/common/cards/SportsMatchResultPanel'

const SportsContent = ({checkedState, setCheckedState , showSub = true, attachedArray, setAttachedArray, setPopupOpen}) => {
    return (
        <div className="w-full">
            <DateSearchBar isGameResultsSearch={true} />
            <SportsMatchResultPanel />
        </div>
    )
}

export default SportsContent
