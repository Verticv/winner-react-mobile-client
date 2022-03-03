import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import MobileBg from '../images/mobile_bg.png'
import DownArrowIcon from '../images/newImages/search-arrow-down.png'
import KakaoLogo from '../images/footer/kakao.png'
import TelegramLogo from '../images/footer/telegram.png'
// import DropDownControls from 'components/dropdowns/RegisterDropDownControls'
import Dropdown from 'components/common/Dropdown/Dropdown'
import SignedUpPopup from 'components/popups/SignedUpPopup'

const AuthenticationPage = ({isAuthenticated, setAuthenticated}) => {

    const [selectedInput, setSelectedInput] = useState(null)
    const [toSignup, setSignup] = useState(false)
    const [showCompletePopup, setCompletePopup] = useState(false)
    const history = useHistory()
    
    useEffect(() => {
        const html = document.querySelector('html')
        if (toSignup) {
            html.style.background = '#bcd4e6';
        } else {
            html.style.background = 'white';
        }
    }, [toSignup])

    const banksOptions = [
        "은행선택",
        "KEB하나은행", 
        "제주은행", 
        "전북은행", 
        "우체국", 
        "우리은행", 
        "외환은행",
        "아메리카",
        "씨티은행",
        "신협",
        "신한은행",
        "수협",
        "새마을금고",
        "상호저축은행",
        "산업은행",
        "부산은행",
        "미즈호",
        "미쓰비시",
        "도이치",
        "대구은행",
        "농협",
        "기업은행",
        "국민은행",
        "광주은행",
        "경남은행",
        "SC제일은행",
        "JP모간",
        "HSBC",
        "ABN암로",
    ];

    const carrierOptions = ["LGU+","SKT","KT"]
    
    // const [selectedCarrier, setSelectedCarrier] = useState("LGU+")
    // const [selectedBank, setSelectedBank] = useState("은행선택")
    // const [isDropdownOpen, setDropdownOpen] = useState(true)
    
    
    // const dropDownCellClass = "flex w-full h-40px p-8 bg-white justify-between items-center border-b border-gray-ececec"
    
    // const carrierButton = (
    //     <div
    //     onFocus={() => setSelectedInput(4)}
    //     onBlur={(e) => setSelectedInput(false)}
    //     className="relative cursor-pointer flex w-full text-gray-r393e41 font-spoqaMedium text-5xl outline-none h-full justify-start items-center tracking-minus05" 
    //     >
    //         <label className="w-full group-hover:text-black cursor-pointer text-left">{selectedCarrier}</label>
    //         <img style={{marginRight: '20%', width: '1.5625rem'}} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" /> 
    //     </div>
    // )
    
    // const bankButton = (
    //     <div
    //     onFocus={() => setSelectedInput(4)}
    //     onBlur={(e) => setSelectedInput(false)}
    //     className="relative flex cursor-pointer group w-full text-gray-r393e41 font-spoqaMedium text-5xl outline-none h-full justify-between items-center tracking-minus05" 
    //     >
    //         <label className="group-hover:text-black cursor-pointer">{selectedBank}</label>
    //         <img style={{marginRight: '20%', width: '1.5625rem'}} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" /> 
    //     </div>
    // )
    
    
    // const carrierDropdown = (
    //     <div className="flex flex-col h-full items-center bg-white rounded-3xl shadow-plain5 text-gray-r393e41 font-spoqaMedium text-5xl">
    //         <button style={{height: '8rem'}} className={dropDownCellClass} onClick={() => {
    //             setSelectedCarrier("SKT")
    //             setDropdownOpen(false)
    //         }}>
    //             <p>SKT</p>
    //             <div>
    //                 <label className="form-control">
    //                     <input
    //                         className='w-12 h-12 radio-input'
    //                         type="radio"
    //                         checked={selectedCarrier === "SKT"}
    //                         name="SKT"
    //                     />
    //                 </label>
    //             </div>
    //         </button>
    //         <button style={{height: '8rem'}} className={dropDownCellClass} onClick={() => {
    //             setSelectedCarrier("KT")
    //             setDropdownOpen(false)
    //         }}>
    //             <p>KT</p>
    //             <div>
    //                 <label className="form-control">
    //                     <input
    //                         className='w-12 h-12 radio-input'
    //                         type="radio"
    //                         checked={selectedCarrier === "KT"}
    //                         name="KT"
    //                     />
    //                 </label>
    //             </div>
    //         </button>
    //         <button style={{height: '6rem', borderBottom: 'none'}} className={dropDownCellClass} onClick={() => {
    //             setSelectedCarrier("LGU+")
    //             setDropdownOpen(false)
    //         }}>
    //             <p>LGU+</p>
    //             <div>
    //                 <label className="form-control">
    //                     <input
    //                         className='w-12 h-12 radio-input'
    //                         type="radio"
    //                         checked={selectedCarrier === "LGU+"}
    //                         name="LGU"
    //                     />
    //                 </label>
    //             </div>
    //         </button>
    //     </div>
    // )

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [toSignup])


    return (
        <div className="w-full">

            {toSignup === false ? (
                <>
                    <img src={MobileBg} alt="" />
                    <div className="bg-white w-full z-20 px-44">

                        {/* BREAK */}
                        <div className="w-full h-full flex flex-col items-center justify-end pb-10px">

                            <div style={{fontSize: '4.375rem', marginBottom:"8rem"}} className="w-full mb-12 mt-4 font-spoqaBold text-7xl">환영합니다</div>

                            <div style={{paddingBottom: "10rem"}} className="w-full space-y-12 pb-20">

                                <div className="w-full flex flex-col space-y-4px space-x-10px">
                                    <div className="w-full">
                                        <input 
                                            style={{height:"7rem"}}
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none" 
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
                                        <div className='h-1.5'>
                                            <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                        </div>
                                    </div>
                                </div>

                                <div style={{marginBottom: '2.375rem'}} className="w-full flex flex-col space-y-4px space-x-10px">
                                    <div className="w-full">
                                        <input 
                                            style={{height:"7rem"}}
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none" 
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
                                         <div className='h-1.5'>
                                            <div className={`${selectedInput === 1 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                         </div>
                                    </div>
                                </div>

                            </div>

                            <div style={{paddingBottom: '10.5rem'}} className="w-full">
                                <button
                                    style={{height: '11.8125rem', padding: '0.5625rem', marginBottom: '4.0625rem'}}
                                    className="w-full rounded-full bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-2xl font-spoqaMedium text-white hover:opacity-75"
                                    onClick={() => 
                                        {
                                            setAuthenticated(true)
                                            history.push('/main')
                                        }}
                                >
                                    <div style={{color:"#1873cf"}} className="w-full h-full rounded-full bg-white text-5xl flex items-center justify-center font-spoqaBold">
                                        <p className='mt-1'>로그인</p>
                                    </div>
                                </button>
                                <button 
                                    style={{height: '11.8125rem'}}
                                    className="w-full rounded-full bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-5xl  font-spoqaBold text-white hover:opacity-75"
                                    onClick={() => setSignup(true)}
                                >
                                    <p className='mt-1'>회원가입</p>
                                </button>
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <div className='bg-register-background bg-repeat-round'>
                    <div style={{padding: '0 10.6875rem'}} className="w-full h-full z-20">

                    {/* BREAK */}
                    <div className="w-full flex flex-col">

                        <label style={{marginBottom: '8.0625rem', fontSize: '4.375rem', marginTop: '13.8125rem'}} className="text-black font-spoqaMedium tracking-minus05 w-full">회원가입</label>

                        {/* BREAK */}
                        <div style={{marginBottom: '2.375rem'}} className="w-full flex flex-col space-y-4px space-x-10px">
                            <div className='w-full'>
                                <input 
                                    className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none" 
                                    onFocus={(e) => setSelectedInput(0)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    placeholder="아이디"
                                />
                                 <div className='h-1.5'>
                                    <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                 </div>
                            </div>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col mb-16">
                            <div className={`${selectedInput === 1 ? "" : ""} w-full space-y-4px mb-5 `}>
                                <input 
                                    className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none" 
                                    onFocus={(e) => setSelectedInput(1)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    type="password"
                                    placeholder="비밀번호"
                                />
                                 <div className='h-1.5'>
                                    <div className={`${selectedInput === 1 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                 </div>
                            </div>
                            <span style={{color:"#ff3a3a", fontSize: '2.4375rem', lineHeight: '1.2'}} className="m-0 font-spoqaMedium text-gray-bebebe tracking-minus05">영문 및 숫자를 1자 이상 반드시 포함하여 6~16자 내외로 입력해주세요. (특수문자 사용불가)</span>
                        </div>
                        {/* BREAK */}
                        <div style={{marginBottom: '2.375rem'}} className="w-full flex flex-col space-y-8px">
                            <div className={`${selectedInput === 2 ? "space-y-4px" : "space-y-4px"} w-full `}>
                                <input 
                                    className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none" 
                                    onFocus={(e) => setSelectedInput(2)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    type="password"
                                    placeholder="환전 비밀번호"
                                />
                                <div className='h-1.5'>
                                    <div className={`${selectedInput === 2 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                </div>
                            </div>
                        </div>
                        {/* BREAK */}
                        <div style={{marginBottom: '2.375rem'}} className="w-full flex flex-col space-y-8px">
                            <div className={`${selectedInput === 3 ? "space-y-4px" : "space-y-4px"} w-full `}>
                                <input 
                                    className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none" 
                                    onFocus={(e) => setSelectedInput(3)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    placeholder="닉네임"
                                />
                                <div className='h-1.5'>
                                    <div className={`${selectedInput === 3 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                </div>
                            </div>
                        </div>
                        {/* BREAK */}
                        <div style={{marginBottom: '2.375rem'}} className="flex space-x-10px w-full">
                            <div className="w-1/4 flex-shrink-0 space-y-4px h-24">
                                {/* <DropDownControls className='h-24' buttonChild={carrierButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen}>
                                    {carrierDropdown}
                                </DropDownControls> */}
                                <div className="relative flex cursor-pointer group w-full text-gray-r393e41 font-spoqaMedium text-5xl outline-none h-full justify-between items-center tracking-minus05" >
                                    <Dropdown options={carrierOptions} isSignup={true}>
                                        <img style={{marginRight: '20%', width: '1.5625rem'}} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" /> 
                                    </Dropdown>
                                </div>
                                <div className={`${selectedInput === 4 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75 mt-5px"} w-full`} />
                            </div>
                            <div className={`${selectedInput === 5 ? "space-y-4px" : "space-y-4px"} w-full `}>
                                <input 
                                    className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none placeholder-gray-bebebe"
                                    placeholder="휴대폰번호(숫자만 입력)"
                                    type='number'
                                    pattern="\d*"
                                    onFocus={(e) => {
                                        // e.target.placeholder = ""
                                        setSelectedInput(5)
                                    }} 
                                    onBlur={(e) => {
                                        // e.target.placeholder = "휴대폰번호(숫자만 입력)"
                                        setSelectedInput(false)
                                    }}
                                />
                                <div className='h-1.5'>
                                    <div className={`${selectedInput === 5 ?"bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                </div>
                            </div>
                        </div>
                        {/* BREAK */}
                        <div style={{marginBottom: '2.375rem'}} className="flex space-x-10px w-full">
                            <div className={`${selectedInput === 6 ? "space-y-4px" : "space-y-4px"} w-full `}>
                                <input 
                                    className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none placeholder-gray-bebebe" 
                                    placeholder="가입코드"
                                    onFocus={(e) => {
                                        // e.target.placeholder = ""
                                        setSelectedInput(6)
                                    }} 
                                    onBlur={(e) => {
                                        // e.target.placeholder = "가입코드"
                                        setSelectedInput(false)
                                    }}
                                />
                                <div className='h-1.5'>
                                    <div className={`${selectedInput === 6 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                </div>
                            </div>
                        </div>
                        {/* BREAK */}
                        <div style={{marginBottom: '2.375rem'}} className="w-full flex flex-col">
                            <div className="flex flex-col">
                                <div style={{marginBottom: '2.375rem'}} className="flex space-x-10px w-full">
                                    <div className="w-1/2 flex-shrink-0 space-y-4px h-24">
                                        {/* <DropDownControls isBank className='h-24' buttonChild={bankButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen} >
                                            {bankDropdown}
                                        </DropDownControls> */}
                                        <div
                                            // onFocus={() => setSelectedInput(4)}
                                            // onBlur={(e) => setSelectedInput(false)}
                                            className="relative flex cursor-pointer group w-full text-gray-r393e41 font-spoqaMedium text-5xl outline-none h-full justify-between items-center tracking-minus05" 
                                        >
                                            <Dropdown options={banksOptions} isSignup={true} >
                                                <img style={{marginRight: '20%', width: '1.5625rem'}} className="h-4 object-contain" src={DownArrowIcon} alt="arrow" />
                                            </Dropdown>
                                        </div>
                                        <div className={`${selectedInput === 7 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full mt-5px`} />
                                    </div>
                                    <div className={`${selectedInput === 8 ? "space-y-4px" : "space-y-4px"} w-1/2 `}>
                                        <input 
                                            className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none placeholder-gray-bebebe" 
                                            placeholder="예금주"
                                            onFocus={(e) => {
                                                // e.target.placeholder = ""
                                                setSelectedInput(8)
                                            }} 
                                            onBlur={(e) => {
                                                // e.target.placeholder = "예금주"
                                                setSelectedInput(false)
                                            }}
                                        />
                                        <div className='h-1.5'>
                                            <div className={`${selectedInput === 8 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full space-y-4px">
                                    <input 
                                        className="placeholder-gray w-full text-gray-r393e41 font-spoqaMedium h-24 text-5xl outline-none placeholder-gray-bebebe" 
                                        type='number'
                                        placeholder="계좌번호 (숫자만 입력)"
                                        pattern="\d*"
                                        onFocus={(e) => {
                                            // e.target.placeholder = ""
                                            setSelectedInput(9)
                                        }} 
                                        onBlur={(e) => {
                                            // e.target.placeholder = "계좌번호 (숫자만 입력)"
                                            setSelectedInput(false)
                                        }}
                                    />
                                    <div className='h-1.5'>
                                        <div className={`${selectedInput === 9 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BREAK */}
                    <div style={{marginTop: '3.4375rem'}} className={`w-full flex flex-col items-center`}>
                        <button 
                            className="mb-32 w-full h-48 rounded-full bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-5xl  font-spoqaBold text-white hover:opacity-75 pt-2px"
                            onClick={() => setCompletePopup(true)}
                        >
                            회원가입
                        </button>

                        <div style={{marginBottom: '11.25rem', marginRight: '-2.8125rem'}} className="flex w-full justify-between items-center h-28">
                            <div style={{marginLeft: '-3.25rem'}} className="flex items-center space-x-2px pr-10px">
                                <img className="w-40 object-contain" src={KakaoLogo} alt="kakao-icon" />
                                <span className="text-brown-r351a1e font-roboto text-5xl leading-snug mb-6px tracking-wide">test1234</span>
                            </div>
                            <div style={{marginRight: '1.0625rem'}} className="h-full w-0.5 bg-gray-404040" />
                            <div className="flex items-center space-x-2px">
                                <img className="w-40 object-contain" src={TelegramLogo} alt="kakao-icon" />
                                <span className="text-blue-r2aa1d5 font-roboto text-5xl leading-snug mb-6px tracking-wide">test1234</span>
                            </div>
                        </div>
                    </div>
                    
                </div>

                </div>
            )}

            {showCompletePopup === true && (
                <div className=' flex w-screen h-screen bg-black bg-opacity-60 z-50 top-0 fixed justify-center items-center px-12'>
                    <SignedUpPopup setCompletePopup={setCompletePopup} setSignup={setSignup} />
                </div>
            )}
        </div>
    )
}

export default AuthenticationPage
