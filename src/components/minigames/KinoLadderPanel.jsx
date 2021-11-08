import React from 'react'
import KinoLadderGame from './game/KinoLadderGame'
import PowerballHistory from './history/PowerballHistory'
import PowerLadderResults from './results/PowerLadderResults'

const KinoLadderPanel = ({
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
                <KinoLadderGame setSelectedOption={setSelectedOption} />
            ) : selectedTab === 1 ? (
                <PowerLadderResults array={resultsArray} />
            ) : selectedTab === 2 ? (
                <PowerballHistory array={historyArray} checkedState={checkedState} setCheckedState={setCheckedState} />   
            ) : <></>}
        </>
    )
}

export default KinoLadderPanel
