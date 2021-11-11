import React, { useState } from 'react'
import { useHistory } from 'react-router'
import MobileBg from '../images/mobile_bg.png'
import MobileBg1 from '../images/mobile_bg1.png'
import DownArrowIcon from '../images/down_arrow_icon.png'
import KakaoLogo from '../images/footer/kakao.png'
import TelegramLogo from '../images/footer/telegram.png'
import DropDownControls from 'components/dropdowns/DropDownControls'

const AuthenticationPage = ({isAuthenticated, setAuthenticated}) => {

    const [selectedInput, setSelectedInput] = useState(null)
    const [toSignup, setSignup] = useState(false)
    const history = useHistory()

    const [selectedCarrier, setSelectedCarrier] = useState("LGU")
    const [selectedBank, setSelectedBank] = useState("은행선택")
    const [isDropdownOpen, setDropdownOpen] = useState(true)


    const dropDownCellClass = "flex w-170px h-40px py-4px bg-white items-center hover:bg-blue-lightGradLight px-10px"

    const carrierButton = (
        <div
            onFocus={() => setSelectedInput(4)}
            onBlur={(e) => setSelectedInput(false)}
            className="relative cursor-pointer flex w-20 text-gray-r393e41 font-spoqaMedium text-16px outline-none h-full justify-start items-center tracking-minus05" 
        >
            <label className="w-full group-hover:text-black cursor-pointer text-left">{selectedCarrier}</label>
            <img className="absolute w-10px h-10px object-contain right-16px" src={DownArrowIcon} alt="arrow" /> 
        </div>
    )

    const bankButton = (
        <div
            onFocus={() => setSelectedInput(4)}
            onBlur={(e) => setSelectedInput(false)}
            className="relative flex cursor-pointer group w-40 text-gray-r393e41 font-spoqaMedium text-16px outline-none h-full justify-between items-center tracking-minus05" 
        >
            <label className="group-hover:text-black cursor-pointer">{selectedBank}</label>
            <img className="absolute w-10px h-10px object-contain right-16px" src={DownArrowIcon} alt="arrow" /> 
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
        <div className="relative w-full h-screen overflow-hidden">

            {toSignup === false ? (
                <>
                    <img src={MobileBg} alt="" />
                    <div className="absolute bg-white w-full z-20 bottom-0 px-50px">

                        {/* BREAK */}
                        <div className="w-full h-full flex flex-col items-center justify-end pb-10px">

                            <div className="w-full font-spoqaBold pb-20px text-18px">환영합니다</div>

                            <div className="w-full space-y-24px pb-40px">
                                <div className="w-full">
                                    <input 
                                        className="w-full h-5 text-12px outline-none font-spoqaBold tracking-tight placeholder-gray-bebebe pb-10px tracking-mimus05" 
                                        placeholder={"아이디"} 
                                        onFocus={(e) => {
                                            e.target.placeholder = ""
                                            setSelectedInput(0)
                                        }} 
                                        onBlur={(e) => {
                                            e.target.placeholder = "아이디"
                                            setSelectedInput(false)
                                        }}
                                    />
                                    <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-2px -mb-px" : "bg-gray-bebebe h-px"} w-full`} />
                                </div>
                                <div className="w-full">
                                    <input 
                                        className="w-full h-5 text-12px outline-none font-spoqaBold tracking-tight placeholder-gray-bebebe pb-10px tracking-mimus05" 
                                        placeholder={"비밀번호"} 
                                        type="password"
                                        onFocus={(e) => {
                                            e.target.placeholder = ""
                                            setSelectedInput(1)
                                        }} 
                                        onBlur={(e) => {
                                            e.target.placeholder = "비밀번호"
                                            setSelectedInput(false)
                                        }}
                                    />
                                    <div className={`${selectedInput === 1 ? "bg-blue-r1ca7ec h-2px -mb-px" : "bg-gray-bebebe h-px"} w-full`} />
                                </div>
                            </div>

                            <div className="w-full space-y-14px pb-40px">
                                <button 
                                    className="w-full h-54px rounded-full bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-xl text-14px font-spoqaMedium text-white hover:opacity-75 p-3px"
                                    onClick={() => 
                                        {
                                            setAuthenticated(true)
                                            history.push('/main')
                                        }}
                                >
                                    <div style={{color:"#1873cf"}} className="w-full h-full bg-black rounded-full bg-white flex items-center justify-center font-spoqaBold pt-2px">
                                        로그인
                                    </div>
                                </button>
                                <button 
                                    className="w-full h-54px rounded-full bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-xl text-14px  font-spoqaBold text-white hover:opacity-75 pt-2px"
                                    onClick={() => setSignup(true)}
                                >
                                    회원가입
                                </button>
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <>
                    <img className="absolute top-0 w-screen h-screen" src={MobileBg1} alt="" />

                    <div className="relative w-full h-full z-20">

                    {/* BREAK */}
                    <div className="w-full mt-100px px-75px flex flex-col">

                        <label className="text-gray-r393e41 text-xl text-24px font-spoqaBold tracking-minus05 mb-70px">회원가입</label>

                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-8px space-x-10px mb-30px">
                            <div className={`${selectedInput === 0 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                <input 
                                    className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                    onFocus={(e) => setSelectedInput(0)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    placeholder="아이디"
                                />
                                <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                            </div>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-8px mt-2px pb-30px">
                            <div className={`${selectedInput === 1 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                <input 
                                    className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                    onFocus={(e) => setSelectedInput(1)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    type="password"
                                    placeholder="비밀번호"
                                />
                                <div className={`${selectedInput === 1 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                            </div>
                            <span style={{color:"#ff3a3a"}} className="text-14px font-spoqaMedium text-gray-bebebe tracking-minus05">영문 및 숫자를 1자 이상 반드시 포함하여 6~16자 내외로 입력해주세요. (특수문자 사용불가)</span>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-8px mt-2px pb-20px">
                            <div className={`${selectedInput === 2 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                <input 
                                    className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                    onFocus={(e) => setSelectedInput(2)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    type="password"
                                    placeholder="환전 비밀번호"
                                />
                                <div className={`${selectedInput === 2 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                            </div>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-8px mt-2px pb-20px">
                            <div className={`${selectedInput === 3 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                <input 
                                    className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                    onFocus={(e) => setSelectedInput(3)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    placeholder="닉네임"
                                />
                                <div className={`${selectedInput === 3 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                            </div>
                        </div>
                        {/* BREAK */}
                        <div className="flex space-x-10px w-full mt-6px">
                            <div className="w-1/4 flex-shrink-0 space-y-9px">
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
                            <div className={`${selectedInput === 6 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                <input 
                                    className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none placeholder-gray-bebebe" 
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
                                    <div className="w-1/2 flex-shrink-0 space-y-9px">
                                        <DropDownControls buttonChild={bankButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen} >
                                            {bankDropdown}
                                        </DropDownControls>
                                        <div className={`${selectedInput === 7 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                                    </div>
                                    <div className={`${selectedInput === 8 ? "space-y-7px" : "space-y-8px"} w-1/2 `}>
                                        <input 
                                            className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none placeholder-gray-bebebe" 
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
                                <div className="w-full space-y-2 pt-1">
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none placeholder-gray-bebebe" 
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
                    <div className={`w-full px-75px flex flex-col items-center ${selectedInput === 9 ? "mt-49px" : "mt-50px"}`}>
                        <button 
                            className="w-full h-54px rounded-full bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-xl text-14px  font-spoqaBold text-white hover:opacity-75 pt-2px"
                            onClick={() => history.push("/main")}
                        >
                            회원가입
                        </button>

                        <div className="flex h-80px w-full justify-between items-center mt-50px">
                            <div className="flex items-center space-x-2px pr-10px">
                                <img className="object-none" src={KakaoLogo} alt="kakao-icon" />
                                <span className="text-brown-r351a1e font-roboto text-14px mb-6px tracking-wide">test1234</span>
                            </div>
                            <div className="h-9 w-px bg-black" />
                            <div className="flex items-center space-x-2px">
                                <img className="object-none" src={TelegramLogo} alt="kakao-icon" />
                                <span className="text-blue-r2aa1d5 font-roboto text-14px mb-6px tracking-wide">test1234</span>
                            </div>
                        </div>
                    </div>
                </div>

                </>
            )}

            
        </div>
    )
}

export default AuthenticationPage
