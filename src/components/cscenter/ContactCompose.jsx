import React, { useState } from 'react'
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
import MobileDropDownControls from 'components/dropdowns/MobileDropDownControls';
import DownArrowIcon from '../../images/down_arrow_icon.png'

const ContactCompose = () => {

    const [selectedCarrier, setSelectedCarrier] = useState("선택")
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const dropDownCellClass = "flex w-120px h-30px py-2px bg-white items-center hover:bg-blue-lightGradLight px-14px"

    const dropdownButton = (
        <div style={{width: '26.25rem', height: '6.75rem', borderWidth: '0.1875rem'}} className="flex h-full bg-white rounded-md border border-gray-dddddd group">
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
        <div style={{width: '26.25rem'}} className="mt-4px flex flex-col items-center justify-center w-120px overflow-hidden bg-white rounded-md border border-gray-dddddd text-gray-r393e41 font-spoqaMedium text-14px tracking-tight">
            <button style={{width: '26.25rem', height: '6.75rem', fontSize: '2.8125rem'}} className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("제목")
                setDropdownOpen(false)
            }}>
                제목
            </button>
            <button style={{width: '26.25rem', height: '6.75rem', fontSize: '2.8125rem'}} className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("본문")
                setDropdownOpen(false)
            }}>
                본문
            </button>
            <button style={{width: '26.25rem', height: '6.75rem', fontSize: '2.8125rem'}} className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("작성자")
                setDropdownOpen(false)
            }}>
                작성자
            </button>
        </div>
    )

    return (
        <div style={{padding: '1.875rem'}}>
            
            <div className="w-full rounded-2xl shadow-subNavbar overflow-hidden">

                <div style={{height: '9.1875rem', paddingLeft: '2.8125rem',  borderBottomWidth: '0.1875rem'}} className="w-full bg-gray-fafafa border-b border-gray-ededed flex items-center">

                    <MobileDropDownControls 
                        buttonChild={dropdownButton} 
                        isDropdownOpen={isDropdownOpen} 
                        setDropdownOpen={setDropdownOpen}
                        dropdownContainerStyle={{marginTop: '6.75rem'}}
                    >
                        {searchDropdown}
                    </MobileDropDownControls>

                </div>

                <div style={{height: '9.1875rem', borderBottomWidth: '0.1875rem', paddingLeft: '2.6875rem'}} className="w-full text-5xl bg-white border-b border-gray-dddddd">
                    <input 
                        className="bg-white outline-none w-full h-full font-spoqa tracking-tight place-color-grey-1"
                        placeholder="제목을 입력하세요."
                    />
                </div>

                


                <div style={{height:"70.25rem",paddingTop: '3.125rem', paddingLeft: '2.6875rem', fontSize: '2.8125rem'}} className="w-full bg-white">
                    <textarea 
                        style={{resize: "none"}}
                        className="outline-none w-full h-full font-spoqa tracking-tight placeholder-gray-r454545 place-color-grey-1"
                        placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다."
                    />
                </div>
            </div>


            <div style={{marginTop: '3.75rem', marginBottom: '20rem', fontSize: '2.8125rem'}} className="flex w-full items-center justify-center">
                <button style={{height: '7.3125rem', padding: '0.1875rem'}} className="flex items-center justify-center w-1/2 mr-4 rounded-lg bg-blue-r0070d9">
                    <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-white">작성하기</span>
                    </div>
                </button>
                <button style={{height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem'}} className="flex items-center justify-center w-1/2 rounded-md bg-gray-r171a1d">
                    <div className="flex items-center justify-center w-full h-full rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-white">취소하기</span>
                    </div>
                </button>
            </div>
            
            <BottomNavbar />
        </div>
    )
}

export default ContactCompose
