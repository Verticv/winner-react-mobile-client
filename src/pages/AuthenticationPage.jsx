import React, { useState } from 'react'
import { useHistory } from 'react-router'
import MobileBg from '../images/mobile_bg.png'

const AuthenticationPage = ({isAuthenticated, setAuthenticated}) => {

    const [selectedInput, setSelectedInput] = useState(null)
    const history = useHistory()

    return (
        <div className="relative w-full h-screen overflow-hidden">

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
                                onClick={() => setAuthenticated(true)}
                            >
                                회원가입
                            </button>
                        </div>

                    </div>
                </div>
        </div>
    )
}

export default AuthenticationPage
