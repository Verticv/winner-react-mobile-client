import React from 'react'
import SignedUpIcon from '../../images/signedUp/signed_up_icon.png'
import img1 from '../../images/signedUp/signed_up_1.png'
import img2 from '../../images/signedUp/signed_up_2.png'
import img3 from '../../images/signedUp/signed_up_3.png'
import { useHistory } from 'react-router-dom'

const SignedUpPopup = ({setCompletePopup, setSignup}) => {

    const history = useHistory()

    return (
        <div  className="relative w-full bg-white rounded-lg shadow-popup pb-50px">
            <div className="absolute w-full -mt-50px flex justify-center">
                <div className="flex items-center justify-center h-100px w-100px rounded-full">
                    <img src={SignedUpIcon} alt="login_icon"/>
                </div>
            </div>
            {/* BREAK */}
            <div className="w-full h-full flex flex-col items-center px-24 pt-66px">
                {/* BREAK */}
                <div className="flex flex-col items-center justify-center space-y-4">
                    <label className=" text-5xl text-gray-r393e41 font-spoqaBold">가입 신청이 완료 되었습니다.</label>
                    <div className="flex text-gray-r393e41 font-spoqaMedium text-5xl space-x-2">
                        <label>관리자</label>
                        <label className="text-blue-r1ca7ec font-spoqaBold">승인 대기중</label>
                        <label>입니다.</label>
                    </div>
                </div>
                {/* BREAK */}
                <div className="text-gray-r393e41  text-5xl font-spoqaMedium flex flex-col items-center justify-center pt-12 tracking-tighter">
                    <span>관리자 승인 후 로그인 하시면</span>
                    <span className='mt-2'>정상적으로 서비스 이용이 가능합니다.</span>
                    <span className="mt-12 text-center">당사 사이트는 깨끗하고 안전한 운영을 자랑합니다. </span>
                </div>
                {/* BREAK */}
                <div className="relative flex w-full mt-30px mb-40px">
                    <div className="w-1/3 flex-shrink-0 flex flex-col items-center">
                        <img className="h-40px object-contain" src={img1} alt=""/>
                        <div className="w-full text-center mt-23px -space-y-3px -ml-4px">
                            <div className="text-gray-r667177 font-spoqaMedium text-2xl tracking-tight">회원님의 모든 데이터는</div>
                            <div className="text-gray-r667177 font-spoqaMedium text-2xl tracking-tight leading-tight ml-3px">암호화되어 안전하게 </div>
                            <div className="text-gray-r667177 font-spoqaMedium text-2xl tracking-tight leading-tight pt-2px ml-3px">보관됩니다.</div>
                        </div>
                    </div>
                    <div className="w-1/3 flex-shrink-0 flex flex-col items-center border-l border-r">
                        <img className="h-40px object-contain" src={img2} alt=""/>
                        <div className="w-full text-center mt-23px -space-y-3px -ml-4px">
                            <div className="text-gray-r667177 font-spoqaMedium text-2xl tracking-tight ml-2px">아이디/비밀번호를</div>
                            <div className="text-gray-r667177 font-spoqaMedium text-2xl tracking-tight leading-tight ml-3px">분실되지 않도록 보안에 </div>
                            <div className="text-gray-r667177 font-spoqaMedium text-2xl tracking-tight leading-tight pt-2px ml-3px">신경 써 주세요.</div>
                        </div>
                    </div>
                    <div className="w-1/3 flex-shrink-0 flex flex-col items-center">
                        <img className="mt-4px h-36px object-contain" src={img3} alt=""/>
                        <div className="w-full text-center mt-23px -space-y-3px -mr-4px">
                            <div className="text-gray-r667177 font-spoqaMedium text-2xl tracking-tight ml-2px">회원 탈퇴 후</div>
                            <div className="text-gray-r667177 font-spoqaMedium text-2xl tracking-tight leading-tight ml-3px">회원님의 정보는 </div>
                            <div className="text-gray-r667177 font-spoqaMedium text-2xl tracking-tight leading-tight pt-2px ml-3px">완전히 삭제됩니다.</div>
                        </div>
                    </div>
                </div>
                {/* BREAK */}
                <button 
                    className="w-full rounded-lg bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-20px py-6 font-spoqaMedium text-white hover:opacity-75" 
                    onClick={() => {
                        history.push('/')
                        setCompletePopup(false)
                        setSignup(false)
                    }}
                >
                    확인
                </button>
            </div>
        </div>
    )
}

export default SignedUpPopup
