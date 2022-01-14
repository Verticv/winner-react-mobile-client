import React, { useState } from 'react'
import DownArrowIcon from '../../images/newImages/search-arrow-down.png'
import DropDownControls from 'components/dropdowns/RegisterDropDownControls'

const DropDownInput = () => {

  const [selectedCarrier, setSelectedCarrier] = useState("전체")
  const [isDropdownOpen, setDropdownOpen] = useState(true)

  const dropDownCellClass = "flex w-full p-8 bg-white justify-between items-center border-b border-gray-ececec"
  const dropdownButton = (
      <div style={{width: '34.06rem', height: '6.75rem', fontSize: '2.625rem', marginLeft: '1.875rem'}} className="flex h-full bg-white rounded-2xl border border-gray-dddddd group">
          <input  className="w-0"/>
          <div
              style={{paddingLeft: '1.75rem', paddingRight: '1.875rem'}}
              className="flex w-full text-gray-r393e41 font-spoqaMedium outline-none h-full justify-between items-center tracking-tight" 
          >
              <label style={{fontSize: '2.8125rem'}} className="cursor-pointer text-gray-r7b7b7b">{selectedCarrier}</label>
              <img style={{width: '1.5625rem', height: '1rem'}} className="object-contain" src={DownArrowIcon} alt="arrow" /> 
          </div>
      </div>
  )

  
  const searchDropdown = (
    <div className="flex flex-col h-full items-center bg-white rounded-3xl shadow-plain5 text-gray-r393e41 font-spoqaMedium text-5xl">
          
          <button style={{height: '8rem'}} className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("전체")
                setDropdownOpen(false)
            }}>
                <p>전체</p>
                <div>
                    <label className="form-control">
                        <input
                            className='w-12 h-12 radio-input'
                            type="radio"
                            checked={selectedCarrier === "전체"}
                            name="전체"
                        />
                    </label>
                </div>
            </button>
      </div>
  )

  const InboxSearch = (
    <div>
        <DropDownControls left='14%'  buttonChild={dropdownButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen}>
            {searchDropdown}
        </DropDownControls>
    </div>
)


    return (
      <div style={{margin: '', marginBottom: ''}}>
          {InboxSearch}
      </div>
    )
    
}

export default DropDownInput
