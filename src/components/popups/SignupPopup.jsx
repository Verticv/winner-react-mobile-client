import React, { useState } from 'react'
import SignupIcon from '../../images/sign_up_icon.png'
import KakaoLogo from '../../images/footer/kakao.png'
import TelegramLogo from '../../images/footer/telegram.png'
import SignedUpPopup from './SignedUpPopup'
import LoginPopup from './LoginPopup'
import CloseIcon from '../../images/popups/close_icon.png'
import DropDownControls from '../dropdowns/DropDownControls'
import DownArrowIcon from '../../images/down_arrow_icon.png'

const SignupPopup = ({setAuth, setPopupOpen}) => {

    const [selectedInput, setSelectedInput] = useState(null)
    const [isSignedUp, setSignedUp] = useState(false)
    const [toLogin, setToLogin] = useState()
    const [selectedCarrier, setSelectedCarrier] = useState("통신사선택")
    const [selectedBank, setSelectedBank] = useState("은행선택")
    const [isDropdownOpen, setDropdownOpen] = useState(true)


    const dropDownCellClass = "flex w-170px h-40px py-4px bg-white items-center hover:bg-blue-lightGradLight px-10px"

    const Title = ({text}) => (
        <div className="w-140px space-y-2 flex-shrink-0">
            <label className="text-gray-r393e41 font-spoqaMedium text-16px">{text}</label>
            <div className="border-b w-full border-gray-bebebe"></div>
        </div>
    )

    const carrierButton = (
        <div className="flex w-170px group cursor-pointer">
            <input  className="w-0 text-16px"/>
            <div
                onFocus={() => setSelectedInput(4)}
                onBlur={(e) => setSelectedInput(false)}
                className="flex w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none h-full justify-between items-center tracking-minus05" 
            >
                <label className="ml-10px group-hover:text-black cursor-pointer">{selectedCarrier}</label>
                <img className="w-16px h-10px object-none mr-20px" src={DownArrowIcon} alt="arrow" /> 
            </div>
        </div>
    )

    const bankButton = (
        <div className="flex w-170px group cursor-pointer">
            <input  className="w-0 text-16px"/>
            <div
                onFocus={() => setSelectedInput(4)}
                onBlur={(e) => setSelectedInput(false)}
                className="flex w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none h-full justify-between items-center tracking-minus05" 
            >
                <label className="ml-10px group-hover:text-black cursor-pointer">{selectedBank}</label>
                <img className="w-16px h-10px object-none mr-20px" src={DownArrowIcon} alt="arrow" /> 
            </div>
        </div>
    )

    const carrierDropdown = (
        <div className="flex flex-col items-center justify-center w-170px py-10px bg-white rounded-lg shadow-plain5 text-gray-r393e41 font-spoqaMedium text-16px">
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("SKT")
                setDropdownOpen(false)
            }}>
                SKT
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("KT")
                setDropdownOpen(false)
            }}>
                KT
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("LGU+")
                setDropdownOpen(false)
            }}>
                LGU+
            </button>
        </div>
    )

    const bankDropdown = (
        <div className="flex flex-col w-170px h-170px py-10px bg-white rounded-lg shadow-plain5 text-gray-r393e41 font-spoqaMedium text-16px overflow-y-scroll overflow-x-hidden">
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("KEB하나은행")
                setDropdownOpen(false)
            }}>
                KEB하나은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("제주은행")
                setDropdownOpen(false)
            }}>
                제주은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("전북은행")
                setDropdownOpen(false)
            }}>
                전북은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("우체국")
                setDropdownOpen(false)
            }}>
                우체국
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("우리은행");
                setDropdownOpen(false)
            }}>
                우리은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("외환은행")
                setDropdownOpen(false)
            }}>
                외환은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("아메리카")
                setDropdownOpen(false)
            }}>
                아메리카
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("씨티은행")
                setDropdownOpen(false)
            }}>
                씨티은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("신협")
                setDropdownOpen(false)
            }}>
                신협
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("신한은행")
                setDropdownOpen(false)
            }}>
                신한은행
            </button> 
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("수협")
                setDropdownOpen(false)
            }}>
                수협
            </button> 
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("새마을금고")
                setDropdownOpen(false)
            }}>
                새마을금고
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("상호저축은행")
                setDropdownOpen(false)
            }}>
                상호저축은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("산업은행")
                setDropdownOpen(false)
            }}>
                산업은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("부산은행")
                setDropdownOpen(false)
            }}>
                부산은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("미즈호")
                setDropdownOpen(false)
            }}>
                미즈호
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("미쓰비시")
                setDropdownOpen(false)
            }}>
                미쓰비시
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("도이치")
                setDropdownOpen(false)
            }}>
                도이치
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("대구은행")
                setDropdownOpen(false)
            }}>
                대구은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("농협")
                setDropdownOpen(false)
            }}>
                농협
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("기업은행")
                setDropdownOpen(false)
            }}>
                기업은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("국민은행")
                setDropdownOpen(false)
            }}>
                국민은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("광주은행")
                setDropdownOpen(false)
            }}>
                광주은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("경남은행")
                setDropdownOpen(false)
            }}>
                경남은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("SC제일은행")
                setDropdownOpen(false)
            }}>
                SC제일은행
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("JP모간")
                setDropdownOpen(false)
            }}>
                JP모간
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("HSBC")
                setDropdownOpen(false)
            }}>
                HSBC
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedBank("ABN암로")
                setDropdownOpen(false)
            }}>
                ABN암로
            </button>      
        </div>
    )

    return (
        <>
            {toLogin ? (
                <LoginPopup setAuth={setAuth} setPopupOpen={setPopupOpen}/>
            ) : isSignedUp ? (
                <SignedUpPopup setToLogin={setToLogin} />
            ) : (
                <div className="relative w-840px h-820px bg-white rounded-xl shadow-xl mt-79px shadow-popup">
                    <button className="w-29 h-29 absolute top-0 right-0 mt-20px mr-19px cursor-pointer z-20 hover:opacity-75" onClick={()=> setPopupOpen(false)}>
                        <img src={CloseIcon} alt="close_icon" />
                    </button>
                    <div className="absolute w-840px -mt-79px flex justify-center">
                        <div className="flex items-center justify-center h-158px w-158px rounded-full">
                            <img src={SignupIcon} alt="signup_icon"/>
                        </div>
                    </div>
                    {/* BREAK */}
                    <div className="flex flex-col w-full text-center pt-88px items-center">
                        <label className="text-gray-r393e41 text-xl text-24px font-spoqaMedium tracking-minus05">회원가입</label>
                        <span className="text-gray-r393e41 w-400px mt-5px font-spoqaMedium tracking-minus05">회원가입 시 모든 항목을 정확하게 기재하시기 바랍니다.</span>
                        <span className="text-gray-r393e41 w-400px font-spoqaMedium tracking-minus05">회원데이터는 안전한 서버에서 안전하게 보관됩니다. </span>
                    </div>
                    {/* BREAK */}
                    <div className="w-full h-466px mt-20px px-75px flex flex-col items-center">
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-8px">
                            <div className="flex space-x-10px w-full">
                                <Title text="아이디" />
                                <div className={`${selectedInput === 0 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                        onFocus={(e) => setSelectedInput(0)}
                                        onBlur={(e) => setSelectedInput(false)}
                                    />
                                    <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                                </div>
                            </div>
                            <span className="text-14px font-spoqaMedium text-gray-bebebe ml-150px tracking-minus05">영문, 숫자만 입력가능하며 최소 4자이상 입력하세요.</span>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-8px mt-2px">
                            <div className="flex space-x-10px w-full">
                                <Title text="비밀번호" />
                                <div className={`${selectedInput === 1 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                        onFocus={(e) => setSelectedInput(1)}
                                        onBlur={(e) => setSelectedInput(false)}
                                        type="password"
                                    />
                                    <div className={`${selectedInput === 1 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                                </div>
                            </div>
                            <span className="text-14px font-spoqaMedium text-gray-bebebe ml-150px tracking-minus05">영문 및 숫자를 1자 이상 반드시 포함하여 6~16자 내외로 입력해주세요. (특수문자 사용불가)</span>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-8px mt-2px">
                            <div className="flex space-x-10px w-full">
                                <Title text="환전 비밀번호" />
                                <div className={`${selectedInput === 2 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                        onFocus={(e) => setSelectedInput(2)}
                                        onBlur={(e) => setSelectedInput(false)}
                                        type="password"
                                    />
                                    <div className={`${selectedInput === 2 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                                </div>
                            </div>
                            <span className="text-14px font-spoqaMedium text-gray-bebebe ml-150px tracking-minus05">영문 및 숫자를 1자 이상 반드시 포함하여 4~8자 내외로 입력해주세요. (특수문자 사용불가)</span>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-8px mt-2px">
                            <div className="flex space-x-10px w-full">
                                <Title text="닉네임" />
                                <div className={`${selectedInput === 3 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                        onFocus={(e) => setSelectedInput(3)}
                                        onBlur={(e) => setSelectedInput(false)}
                                    />
                                    <div className={`${selectedInput === 3 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                                </div>
                            </div>
                            <span className="text-14px font-spoqaMedium text-gray-bebebe ml-150px tracking-minus05">한글, 영문, 숫자를 포함한 4~16자로 입력해주세요.</span>
                        </div>
                        {/* BREAK */}
                        <div className="flex space-x-10px w-full mt-6px">
                            <Title text="휴대폰번호" />
                            <div className="w-170px flex-shrink-0 space-y-9px">
                                <DropDownControls buttonChild={carrierButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen}>
                                    {carrierDropdown}
                                </DropDownControls>
                                <div className={`${selectedInput === 4 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                            </div>
                            <div className={`${selectedInput === 5 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                <input 
                                    className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none placeholder-gray-bebebe ml-10px"
                                    placeholder="휴대폰번호(숫자만 입력)"
                                    onFocus={(e) => {
                                        e.target.placeholder = ""
                                        setSelectedInput(5)
                                    }} 
                                    onBlur={(e) => {
                                        e.target.placeholder = "휴대폰번호(숫자만 입력)"
                                        setSelectedInput(false)
                                    }}
                                />
                                <div className={`${selectedInput === 5 ?"bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                            </div>
                        </div>
                        {/* BREAK */}
                        <div className="flex space-x-10px w-full mt-22px">
                            <Title text="추천인 아이디" />
                            <div className={`${selectedInput === 6 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                <input 
                                    className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none placeholder-gray-bebebe ml-10px" 
                                    placeholder="가입코드"
                                    onFocus={(e) => {
                                        e.target.placeholder = ""
                                        setSelectedInput(6)
                                    }} 
                                    onBlur={(e) => {
                                        e.target.placeholder = "가입코드"
                                        setSelectedInput(false)
                                    }}
                                />
                                <div className={`${selectedInput === 6 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                            </div>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col mt-22px">
                            <div className="flex flex-col space-y-4">
                                <div className="flex space-x-10px w-full">
                                    <Title text="계좌번호" />
                                    <div className="w-170px flex-shrink-0 space-y-9px">
                                        <DropDownControls buttonChild={bankButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen} >
                                            {bankDropdown}
                                        </DropDownControls>
                                        <div className={`${selectedInput === 7 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                                    </div>
                                    <div className={`${selectedInput === 8 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                        <input 
                                            className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none placeholder-gray-bebebe ml-10px" 
                                            placeholder="예금주"
                                            onFocus={(e) => {
                                                e.target.placeholder = ""
                                                setSelectedInput(8)
                                            }} 
                                            onBlur={(e) => {
                                                e.target.placeholder = "예금주"
                                                setSelectedInput(false)
                                            }}
                                        />
                                        <div className={`${selectedInput === 8 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                                    </div>
                                </div>
                                <div className="w-full space-y-2 pl-150px pt-1">
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none placeholder-gray-bebebe ml-10px" 
                                        placeholder="계좌번호 (숫자만 입력)"
                                        onFocus={(e) => {
                                            e.target.placeholder = ""
                                            setSelectedInput(9)
                                        }} 
                                        onBlur={(e) => {
                                            e.target.placeholder = "계좌번호 (숫자만 입력)"
                                            setSelectedInput(false)
                                        }}
                                    />
                                    <div className={`${selectedInput === 9 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BREAK */}
                    <div className="w-full px-75px flex flex-col items-center">
                        <div className="h-84px flex items-center">
                            <button 
                                className="w-275px h-64px rounded-xl bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-20px font-spoqa pt-px text-white hover:opacity-75" 
                                onClick={() => setSignedUp(true)}
                            >
                                회원가입
                            </button>
                        </div>
                        <div className="border-b w-full border-gray-bebebe" />
                        <div className="flex h-80px justify-center items-center">
                            <div className="flex items-center space-x-2px pr-10px">
                                <img className="object-none" src={KakaoLogo} alt="kakao-icon" />
                                <span className="text-brown-r351a1e font-roboto text-18px mb-6px tracking-wide">test1234</span>
                            </div>
                            <div className="flex items-center space-x-2px">
                                <img className="object-none" src={TelegramLogo} alt="kakao-icon" />
                                <span className="text-blue-r2aa1d5 font-roboto text-18px mb-6px tracking-wide">test1234</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SignupPopup
