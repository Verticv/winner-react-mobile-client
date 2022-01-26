import React from 'react'
import DownArrowIcon from '../../images/newImages/search-arrow-down.png'
import Dropdown from 'components/common/Dropdown/Dropdown';

const DropDownInput = ({isLeagueSelection = true}) => {

    const carrierOptions1 = ["league 1", "league 2", "league 3", "league 4", "league 5", "league 6", "league 7", "league 8", "league 9", "league 10"]
    const carrierOptions2 = ["234회", "235회", "236회", "237회", "238회", "239회", "240회"]

    return (
        <div
            style={{width: '34.06rem', height: '6.75rem', fontSize: '2.625rem', marginLeft: '1.875rem'}}
            className="relative flex cursor-pointer group w-full text-gray-r393e41 font-spoqaMedium text-5xl outline-none h-full justify-between items-center tracking-minus05" 
        >
                <div style={{width: '34.06rem', height: '6.75rem', fontSize: '2.625rem'}} className="w-full rounded-2xl flex h-full bg-white group">
                    <div
                        style={{borderWidth: '1px'}}
                        className="flex w-full text-gray-r393e41 font-spoqaMedium outline-none rounded-2xl  border-gray-dddddd h-full justify-between items-center tracking-tight" 
                    >
                        <Dropdown labelStyle={{marginLeft: '1.75rem', color: '#7b7b7b'}} options={isLeagueSelection === true ? carrierOptions1 : carrierOptions2} isLeagueSelection={isLeagueSelection}>
                            <img style={{width: '1.5625rem', marginRight: '1.875rem', height: '1rem'}} className="object-contain" src={DownArrowIcon} alt="arrow" /> 
                        </Dropdown>
                    </div>
                </div>
        </div>
    )
    
}

export default DropDownInput
