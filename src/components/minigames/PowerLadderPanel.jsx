import React from 'react'
import PowerLadderGame from './game/PowerLadderGame'
import PowerballHistory from './history/PowerballHistory'
import PowerLadderResults from './results/PowerLadderResults'


const PowerLadderPanel = ({
    selectedTab, 
    setSelectedTab, 
    historyArray, 
    resultsArray,
    checkedState, 
    setCheckedState,
    setSelectedOption
}) => {

    return (
        <>
            {selectedTab === 0 ? (
                <PowerLadderGame setSelectedOption={setSelectedOption} />
            ) : selectedTab === 1 ? (
                <PowerLadderResults array={resultsArray} />
            ) : (
                <PowerballHistory array={historyArray} checkedState={checkedState} setCheckedState={setCheckedState} />   
            )}
            
        </>
    )
}

export default PowerLadderPanel
