import React from 'react'
import PowerBallResults from 'components/minigames/results/PowerBallResults';
import CloseIcon from '../../images/newImages/close-white.png'
import {
    // PowerballHistoryArray,
    PowerballResultsArray,
    // PowerLadderResultsArray
} from 'components/minigames/arrays'


const RoundResultPopup = ({setPopupOpen}) => {


    return (
        <div style={{height:"100vh", width: '77.625rem' ,borderTopLeftRadius: '4rem', borderTopRightRadius: '4rem'}} className="flex flex-col rounded-lg overflow-hidden">
            <div style={{height: '9.5rem'}} className="relative bg-blue-r5d799c flex items-center justify-center flex-shrink-0">
                <label style={{fontSize: '3.75rem'}} className="font-spoqaBold text-white tracking-tight">회차결과</label>
                <button style={{marginRight: '4.625rem'}} className="absolute right-0 cursor-pointer z-20" onClick={() => setPopupOpen(false)}>
                    <img style={{width: '3.1875rem', height: '3.1875rem'}} src={CloseIcon} alt="close_icon" />
                </button>
            </div>
            
            <div style={{paddingBottom: '1.875rem'}} className="w-full h-full bg-white">

                <PowerBallResults array={PowerballResultsArray} />

            </div>

            
        </div>
    )
}

export default RoundResultPopup
