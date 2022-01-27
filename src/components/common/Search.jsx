import React from 'react'
import DownArrowIcon from '../../images/newImages/search-arrow-down.png'
import SearchIcon from '../../images/newImages/search-icon.png'
import Dropdown from 'components/common/Dropdown/Dropdown';

const Search = () => {

  const carrierOptions = ["제목", "본문", "작성자"]

  const InboxSearch = (
    <div style={{padding: '1.75rem 1.625rem', paddingBottom: '1.5625rem', height: '10.4375rem', borderWidth: '0.1875rem'}} className="w-full bg-gray-f9f9f9 rounded-2xl border border-gray-dddddd flex items-center justify-center">
        <div style={{width: '15rem', height: '6.75rem', borderWidth: '0.1875rem'}} className="flex h-full bg-white rounded-2xl border border-gray-dddddd group">
            <div
                style={{ width:'15rem'}}
                className="flex w-full text-gray-r393e41 font-spoqaMedium outline-none rounded-2xl  border-gray-dddddd h-full justify-between items-center tracking-tight" 
            >
                <Dropdown labelStyle={{marginLeft: '1.6875rem', color: '#454545', fontSize: '2.8125rem'}} options={carrierOptions} isLeagueSelection={true} labelClasses="pt-1">
                    <img style={{width: '1.5625rem', height: '1rem', marginRight: '1.5625rem'}} className="object-contain" src={DownArrowIcon} alt="arrow" /> 
                </Dropdown>
            </div>
        </div>

        <div style={{borderWidth: '0.1875rem', marginLeft: '0.6875rem'}} className="flex w-full h-full bg-white rounded-2xl border border-gray-dddddd">
            <input 
                style={{fontSize: '2.8125rem', paddingLeft: '1.5625rem'}}
                className="rounded-2xl placeholder-gray-r7c7c7c w-full text-gray-r393e41 font-spoqaMedium outline-none h-full justify-between items-center tracking-tight"
                placeholder="검색어를 입력해 주세요"
                onFocus={() => {
                    const menu = document.querySelector('#main-menu');
                    menu.style.marginBottom  = '-14.075rem'
                }}
                onBlur={() => {
                    const menu = document.querySelector('#main-menu');
                    menu.style.marginBottom = '0'
                }}
            />
            <button style={{width: '6.65rem', height: '6.65rem', marginTop: '-0.1875rem', marginRight: '-0.1875rem'}} className="flex items-center justify-center h-full rounded-2xl bg-gradient-to-b from-gray-r555555 via-gray-r555555 to-gray-r333333 flex-shrink-0 hover:opacity-75">
                <img style={{width: '2.6rem', height: '2.6rem'}} src={SearchIcon} alt=""/>
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
