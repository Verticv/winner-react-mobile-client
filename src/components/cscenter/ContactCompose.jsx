import DropDownControls from 'components/dropdowns/DropDownControls'
import MyPageTitle from 'components/myPage/MyPageTitle'
import React, { useState } from 'react'
import DownArrowIcon from '../../images/down_arrow_icon.png'

const ContactCompose = () => {

    const [selectedCarrier, setSelectedCarrier] = useState("선택")
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const dropDownCellClass = "flex w-120px h-30px py-2px bg-white items-center hover:bg-blue-lightGradLight px-14px"

    const dropdownButton = (
        <div className="flex w-120px h-35px bg-white rounded-md border border-gray-cccccc group">
            <input  className="w-0 text-16px"/>
            <div
                className="flex w-full text-gray-r393e41 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight" 
            >
                <label className="ml-14px cursor-pointer group-hover:text-black">{selectedCarrier}</label>
                <img className="w-10px h-6px object-contain mr-10px" src={DownArrowIcon} alt="arrow" /> 
            </div>
        </div>
    )

    const searchDropdown = (
        <div className="-mt-2px flex flex-col items-center justify-center w-120px overflow-hidden bg-white rounded-md border border-gray-cccccc text-gray-r393e41 font-spoqaMedium text-14px tracking-tight">
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("라이브카지노")
                setDropdownOpen(false)
            }}>
                라이브카지노
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("슬롯게임")
                setDropdownOpen(false)
            }}>
                슬롯게임
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("스포츠")
                setDropdownOpen(false)
            }}>
                스포츠
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("e-스포츠")
                setDropdownOpen(false)
            }}>
                e-스포츠
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("미니게임")
                setDropdownOpen(false)
            }}>
                미니게임
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("키론가상게임")
                setDropdownOpen(false)
            }}>
                키론가상게임
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("충전/환전")
                setDropdownOpen(false)
            }}>
                충전/환전
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("베팅관련")
                setDropdownOpen(false)
            }}>
                베팅관련
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("기타")
                setDropdownOpen(false)
            }}>
                기타
            </button>
        </div>
    )

    return (
        <div>
            <MyPageTitle title="문의하기" />

            <div style={{borderRadius:"1em"}} className="mt-20px shadow-subNavbar overflow-hidden">
                <div className="h-55px bg-gray-fafafa border-b border-gray-dddddd flex">
                    <div style={{width: "139px"}} className="flex-shrink-0 border-r flex items-center justify-center">
                        <p className="text-14px font-spoqaMedium tracking-tight text-gray-r585858">유형</p>
                    </div>
                    <div className="w-full border-r bg-white px-10px flex items-center">
                        <DropDownControls
                            buttonChild={dropdownButton} 
                            isDropdownOpen={isDropdownOpen} 
                            setDropdownOpen={setDropdownOpen}
                        >
                            {searchDropdown}
                        </DropDownControls>
                    </div>
                </div>

                <div className="h-55px bg-gray-fafafa border-b border-gray-dddddd flex">
                    <div style={{width: "139px"}} className="flex-shrink-0 border-r flex items-center justify-center">
                        <p className="text-14px font-spoqaMedium tracking-tight text-gray-r585858">제목</p>
                    </div>
                    <div className="w-full border-r bg-white px-10px flex items-center">
                        <input 
                            className="outline-none w-full h-35px rounded-4px border border-gray-dddddd px-9px text-14px font-spoqa tracking-tight placeholder-gray-r8f8f8f"
                            placeholder="제목을 입력하세요."
                        />
                    </div>

                </div>

                <div className="bg-gray-fafafa border-b border-gray-dddddd flex">
                    <div style={{width: "139px"}} className="flex-shrink-0 border-r flex items-center justify-center">
                        <p className="text-14px font-spoqaMedium tracking-tight text-gray-r585858">내용</p>
                    </div>
                    <div className="w-full border-r bg-white flex items-center p-10px">
                        <textarea 
                            style={{height: "325px", resize: "none"}}
                            className="outline-none w-full rounded-4px border border-gray-dddddd px-9px py-8px text-14px font-spoqa tracking-tight placeholder-gray-r8f8f8f"
                            placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다."
                        />
                    </div>
                </div>

            </div>

            <div className="w-full mt-20px flex items-center justify-center space-x-5px mb-60px">
                <button className="flex items-center justify-center h-52px w-192px rounded-4px bg-blue-r0070d9 hover:opacity-75">
                    <div className="flex items-center justify-center h-50px w-190px bg-black rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-16px text-white">신청하기</span>
                    </div>
                </button>
                <button className="flex items-center justify-center w-192px h-52px rounded-md bg-gray-r171a1d hover:opacity-75" >
                    <div className="flex items-center justify-center h-50px w-190px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-16px text-white">취소하기</span>
                    </div>
                </button>
            </div>
            
            
        </div>
    )
}

export default ContactCompose
