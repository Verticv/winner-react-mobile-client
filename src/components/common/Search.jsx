import React, { useState } from 'react'
import DownArrowIcon from '../../images/newImages/search-arrow-down.png'
import SearchIcon from '../../images/newImages/search-icon.png'
import DropDownControls from 'components/dropdowns/RegisterDropDownControls'

const Search = () => {

  const [selectedCarrier, setSelectedCarrier] = useState("제목")
  const [isDropdownOpen, setDropdownOpen] = useState(true)

  const dropDownCellClass = "flex w-full h-40px p-8 bg-white justify-between items-center border-b border-gray-ececec"

  const dropdownButton = (
      <div style={{width: '15rem', height: '6.75rem', borderWidth: '0.1875rem'}} className="flex h-full bg-white rounded-2xl border border-gray-dddddd group">
          <input  className="w-0 text-16px"/>
          <div
              className="flex w-full text-gray-r393e41 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight" 
          >
              <label style={{fontSize: '2.8125rem', marginLeft: '1.6875rem'}} className="cursor-pointer group-hover:text-black">{selectedCarrier}</label>
              <img style={{width: '1.5625rem', height: '1rem', marginRight: '1.5625rem'}} className="w-10px h-6px object-contain" src={DownArrowIcon} alt="arrow" /> 
          </div>
      </div>
  )

  
  const searchDropdown = (
    <div className="flex flex-col h-full items-center bg-white rounded-3xl shadow-plain5 text-gray-r393e41 font-spoqaMedium text-5xl">
          
          <button style={{height: '8rem'}} className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("제목")
                setDropdownOpen(false)
            }}>
                <p>제목</p>
                <div>
                    <label className="form-control">
                        <input
                            className='w-12 h-12 radio-input'
                            type="radio"
                            checked={selectedCarrier === "제목"}
                            name="제목"
                        />
                    </label>
                </div>
            </button>


            <button style={{height: '8rem'}} className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("본문")
                setDropdownOpen(false)
            }}>
                <p>본문</p>
                <div>
                    <label className="form-control">
                        <input
                            className='w-12 h-12 radio-input'
                            type="radio"
                            checked={selectedCarrier === "본문"}
                            name="본문"
                        />
                    </label>
                </div>
            </button>

            <button style={{height: '8rem'}} className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("작성자")
                setDropdownOpen(false)
            }}>
                <p>작성자</p>
                <div>
                    <label className="form-control">
                        <input
                            className='w-12 h-12 radio-input'
                            type="radio"
                            checked={selectedCarrier === "작성자"}
                            name="작성자"
                        />
                    </label>
                </div>
            </button>

      </div>
  )

  const InboxSearch = (
    <div style={{padding: '1.75rem 1.625rem', paddingBottom: '1.5625rem', height: '10.4375rem', borderWidth: '0.1875rem'}} className="w-full bg-gray-f9f9f9 rounded-2xl border border-gray-dddddd flex items-center justify-center">
        <DropDownControls left='14%'  buttonChild={dropdownButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen}>
            {searchDropdown}
        </DropDownControls>

        <div style={{borderWidth: '0.1875rem', marginLeft: '0.6875rem'}} className="flex w-full h-full bg-white rounded-2xl border border-gray-dddddd">
            <input 
                style={{fontSize: '2.8125rem', paddingLeft: '1.5625rem'}}
                className="rounded-2xl placeholder-gray-r7c7c7c w-full text-gray-r393e41 font-spoqaMedium outline-none h-full justify-between items-center tracking-tight"
                placeholder="검색어를 입력해 주세요"
            />
            <button style={{width: '6.75rem', height: '6.75rem', marginTop: '-0.1875rem', marginRight: '-0.1875rem'}} className="flex items-center justify-center h-full rounded-2xl bg-gradient-to-b from-gray-r555555 via-gray-r555555 to-gray-r333333 flex-shrink-0 hover:opacity-75">
                <img style={{width: '3.125rem', height: '3.125rem'}} src={SearchIcon} alt=""/>
            </button>
        </div>
    </div>
)


    return (
      <div style={{margin: '0 1.875rem', marginBottom: '19.625rem'}}>
          {InboxSearch}
      </div>
    )
    
}

export default Search
