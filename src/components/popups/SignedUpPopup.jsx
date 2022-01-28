import React from 'react'
import SignedUpIcon from '../../images/signedUp/signed_up_icon.png'
import img1 from '../../images/signedUp/signed_up_1.png'
import img2 from '../../images/signedUp/signed_up_2.png'
import img3 from '../../images/signedUp/signed_up_3.png'
import { useHistory } from 'react-router-dom'

const SignedUpPopup = ({setCompletePopup, setSignup}) => {

    const history = useHistory()

    return (
        <div style={{width: '70.8125rem', borderRadius: "0.75rem", paddingBottom:"6rem"}} className="relative bg-white rounded-xl shadow-popup">

            <div style={{width: '71rem'}} className="absolute flex justify-center">
                <div className="flex items-center justify-center">
                    <img style={{height: '17.75rem', width: '17.75rem', marginTop: '-9rem'}} src={SignedUpIcon} alt="login_icon"/>
                </div>
            </div>

            {/* BREAK */}
            <div style={{marginTop: "8.8rem"}} className="w-full h-full flex flex-col items-center">
                {/* BREAK */}
                <div className="flex flex-col items-center justify-center space-y-4">
                    <label style={{fontSize: '2.8rem'}} className="text-gray-r393e41 font-spoqaBold">가입 신청이 완료 되었습니다.</label>
                    <div style={{fontSize: '2.8rem'}} className="flex text-gray-r393e41 font-spoqaMedium space-x-2">
                        <label>관리자</label>
                        <label style={{color:'#2087f0'}} className="font-spoqaBold">승인 대기중</label>
                        <label>입니다.</label>
                    </div>
                </div>
                {/* BREAK */}
                <div style={{fontSize: '2.625rem'}} className="text-gray-r393e41 font-spoqaMedium flex flex-col items-center justify-center pt-12 tracking-tighter">
                    <span style={{fontSize: '2.625rem'}}>관리자 승인 후 로그인 하시면</span>
                    <span style={{fontSize: '2.625rem'}} className=''>정상적으로 서비스 이용이 가능합니다.</span>
                    <span style={{fontSize: '2.625rem'}} className="mt-12 text-center">당사 사이트는 깨끗하고 안전한 운영을 자랑합니다. </span>
                </div>
                {/* BREAK */}
                <div style={{paddingLeft:"3rem", paddingRight:"3rem"}} className="relative flex w-full mt-30px">
                    <div className="w-1/3 flex-shrink-0 flex flex-col items-center">
                        <img className="h-30px object-contain" src={img1} alt=""/>
                        <div className="w-full text-center mt-16px">
                            <div style={{fontSize: '0.5rem', wordBreak:"keep-all"}} className="text-gray-r667177 font-spoqaMedium tracking-tight">회원님의 모든 데이터는</div>
                            <div style={{fontSize: '0.5rem', wordBreak:"keep-all"}} className="text-gray-r667177 font-spoqaMedium tracking-tight leading-tight pt-2px">암호화되어 안전하게 </div>
                            <div style={{fontSize: '0.5rem', wordBreak:"keep-all"}} className="text-gray-r667177 font-spoqaMedium tracking-tight leading-tight pt-2px">보관됩니다.</div>
                        </div>
                    </div>
                    <div className="w-1/3 flex-shrink-0 flex flex-col items-center border-l border-r">
                        <img className="h-30px object-contain" src={img2} alt=""/>
                        <div className="w-full text-center mt-20px">
                            <div style={{fontSize: '0.5rem', wordBreak:"keep-all"}} className="text-gray-r667177 font-spoqaMedium text-xl tracking-tight">아이디/비밀번호를</div>
                            <div style={{fontSize: '0.5rem', wordBreak:"keep-all"}} className="text-gray-r667177 font-spoqaMedium text-xl tracking-tight leading-tight pt-2px">분실되지 않도록 보안에 </div>
                            <div style={{fontSize: '0.5rem', wordBreak:"keep-all"}} className="text-gray-r667177 font-spoqaMedium text-xl tracking-tight leading-tight pt-2px">신경 써 주세요.</div>
                        </div>
                    </div>
                    <div className="w-1/3 flex-shrink-0 flex flex-col items-center">
                        <img className="mt-4px h-26px object-contain" src={img3} alt=""/>
                        <div className="w-full text-center mt-21px">
                            <div style={{fontSize: '0.5rem', wordBreak:"keep-all"}} className="text-gray-r667177 font-spoqaMedium text-xl tracking-tight">회원 탈퇴 후</div>
                            <div style={{fontSize: '0.5rem', wordBreak:"keep-all"}} className="text-gray-r667177 font-spoqaMedium text-xl tracking-tight leading-tight pt-2px">회원님의 정보는 </div>
                            <div style={{fontSize: '0.5rem', wordBreak:"keep-all"}} className="text-gray-r667177 font-spoqaMedium text-xl tracking-tight leading-tight pt-2px">완전히 삭제됩니다.</div>
                        </div>
                    </div>
                </div>
                {/* BREAK */}

                <div style={{width: '54rem'}}>
                    <button 
                        style={{height: '8.4375rem', fontSize: '3rem', borderRadius: '0.5625rem', marginTop: '4rem'}}
                        className="w-full rounded-2xl bg-gradient-to-r from-blue-gradLight to-blue-gradDark font-spoqaMedium text-white hover:opacity-75"
                        onClick={() => {
                            history.push('/')
                            setCompletePopup(false)
                            setSignup(false)
                        }}
                    >
                        <span className='block mt-1.5'>로그인</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignedUpPopup
