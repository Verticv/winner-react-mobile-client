import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import CloseIcon from '../../images/popups/close_icon.png'
import LoginIcon from '../../images/popups/reauth.png'

const ReauthenticatePopup = ({setPopupOpen, setSelectedTab}) => {
    
    const history = useHistory();
    const [selectedInput, setSelectedInput] = useState()

    return (
        <div style={{width: '71rem'}} className="relative bg-white rounded-xl shadow-popup">
            <button className="absolute top-0 right-0 mt-21px mr-21px cursor-pointer z-20" onClick={()=> setPopupOpen(false)}>
                <img className='w-12' src={CloseIcon} alt="close_icon" />
            </button>
            <div style={{width: '71rem'}} className="absolute -mt-79px flex justify-center">
                <div className="flex items-center justify-center h-158px w-72 ">
                    <img src={LoginIcon} alt="login_icon"/>
                </div>
            </div>
            {/* BREAK */}
            <div className="w-full h-full flex flex-col items-center py-48 space-y-40px">

                <div className="flex flex-col items-center justify-center font-spoqaMedium text-5xl space-y-5px">
                    <div className="flex items-center h-14">
                        <span className="text-blue-r0056a6 font-spoqaBold">louie3</span>
                        <span>님의 회원정보를 수정합니다.</span>
                    </div>
                    <div className="flex items-center h-14">비밀번호를 다시 입력해 주세요.</div>
                </div>

                <div style={{width: '54rem'}}>
                    <div 
                        className="w-full text-5xl text-center outline-none font-spoqaMedium tracking-tight placeholder-gray-bebebe pb-10px tracking-mimus05" 
                        onFocus={(e) => {
                            e.target.placeholder = ""
                            setSelectedInput(0)
                        }} 
                        onBlur={(e) => {
                            e.target.placeholder = "아이디"
                            setSelectedInput(false)
                        }}
                    >louie3</div>
                    <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-2px -mb-px" : "bg-gray-bebebe h-px"} w-full`} />
                </div>
                <div style={{width: '54rem'}}>
                    <input 
                        className="w-full text-5xl text-center outline-none font-spoqaMedium tracking-tight placeholder-gray-bebebe pb-10px tracking-mimus05" 
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
                <div style={{width: '54rem'}}>
                    <button 
                        className="w-full h-74px rounded-md bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-xl text-27px font-spoqaMedium text-white hover:opacity-75"
                        onClick={() => {
                            history.push("/mypage/edit-info")
                            setSelectedTab("/mypage/edit-info")
                        }}
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReauthenticatePopup
