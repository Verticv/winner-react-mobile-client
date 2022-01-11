import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import CloseIcon from '../../images/newImages/account-close.png'
import LoginIcon from '../../images/popups/reauth.png'

const ReauthenticatePopup = ({setPopupOpen, setSelectedTab}) => {
    
    const history = useHistory();
    const [selectedInput, setSelectedInput] = useState()

    return (
        <div style={{width: '70.8125rem', maxHeight: '60.625rem'}} className="relative bg-white rounded-xl shadow-popup">
            <button style={{margin: '2.3125rem'}} className="absolute top-0 right-0 cursor-pointer z-20" onClick={()=> setPopupOpen(false)}>
                <img style={{width: '3.1875rem', height: '3.1875rem'}} className='object-contain' src={CloseIcon} alt="close_icon" />
            </button>
            <div style={{width: '71rem'}} className="absolute flex justify-center">
                <div className="flex items-center justify-center">
                    <img style={{height: '17.75rem', width: '17.75rem', marginTop: '-7.75rem'}} src={LoginIcon} alt="login_icon"/>
                </div>
            </div>
            {/* BREAK */}
            <div style={{padding: '11.75rem 0', paddingBottom: '8.4375rem'}} className="w-full h-full flex flex-col items-center">

                <div style={{fontSize: '2.625rem', marginBottom: '5.625rem'}} className="flex text-gray-text flex-col items-center justify-center font-spoqaMedium">
                    <div className="flex items-center h-14">
                        <span className="text-blue-gradLight font-spoqaBold">louie3</span>
                        <span>님의 회원정보를 수정합니다.</span>
                    </div>
                    <div className="flex items-center h-14">비밀번호를 다시 입력해 주세요.</div>
                </div>

                <div style={{width: '54rem',marginBottom: '5.3125rem'}}>
                    <div 
                        style={{paddingBottom: '1.625rem'}}
                        className="w-full text-5xl text-center text-gray-text outline-none font-spoqaMedium tracking-tight placeholder-gray-bebebe tracking-mimus05" 
                        onFocus={(e) => {
                            e.target.placeholder = ""
                            setSelectedInput(0)
                        }} 
                        onBlur={(e) => {
                            e.target.placeholder = "아이디"
                            setSelectedInput(false)
                        }}
                    >louie3</div>
                    <div className='h-1.5'>
                        <div className={`${selectedInput !== 1 ? "bg-blue-r1ca7ec h-1.5" : "bg-gray-bebebe h-0.75"} w-full`} />
                    </div>
                </div>
                <div style={{width: '54rem', marginBottom: '3.6875rem'}}>
                    <input 
                        style={{paddingBottom: '1.625rem'}}
                        className="w-full text-5xl text-center outline-none font-spoqaMedium tracking-tight place-color-grey-2 placeholder-gray-bebebe tracking-mimus05" 
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
                <div style={{width: '54rem'}}>
                    <button 
                        style={{height: '8.4375rem', fontSize: '3rem', borderRadius: '0.5625rem'}}
                        className="w-full rounded-2xl bg-gradient-to-r from-blue-gradLight to-blue-gradDark font-spoqaMedium text-white hover:opacity-75"
                        onClick={() => {
                            history.push("/mypage/edit-info")
                            setSelectedTab("/mypage/edit-info")
                        }}
                    >
                        <span className='block mt-1.5'>확인</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReauthenticatePopup
