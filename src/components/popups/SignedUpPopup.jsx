import React from 'react'
import SignedUpIcon from '../../images/signedUp/signed_up_icon.png'
import img1 from '../../images/signedUp/signed_up_1.png'
import img2 from '../../images/signedUp/signed_up_2.png'
import img3 from '../../images/signedUp/signed_up_3.png'

const SignedUpPopup = ({setToLogin}) => {
    return (
        <div className="relative w-840px h-680px bg-white rounded-xl shadow-xl shadow-popup">
            <div className="absolute w-840px -mt-79px flex justify-center">
                <div className="flex items-center justify-center h-158px w-158px rounded-full">
                    <img src={SignedUpIcon} alt="login_icon"/>
                </div>
            </div>
            {/* BREAK */}
            <div className="w-full h-full flex flex-col items-center px-24 pt-112px">
                {/* BREAK */}
                <div className="flex flex-col items-center justify-center">
                    <label className="text-30px text-gray-r393e41 font-spoqaBold">가입 신청이 완료 되었습니다.</label>
                    <div className="flex text-gray-r393e41 font-spoqaMedium text-30px space-x-2 -mt-4px">
                        <label>관리자</label>
                        <label className="text-blue-r1ca7ec font-spoqaBold">승인 대기중</label>
                        <label>입니다.</label>
                    </div>
                </div>
                {/* BREAK */}
                <div className="text-gray-r393e41 text-20px font-spoqaMedium flex flex-col items-center justify-center pt-26px tracking-tighter	">
                    <span>관리자 승인 후 로그인 하시면 정상적으로 서비스 이용이 가능합니다.</span>
                    <span className="-mt-6px">당사 사이트는 깨끗하고 안전한 운영을 자랑합니다. </span>
                </div>
                {/* BREAK */}
                <div className="relative flex h-138px w-614px mt-55px mb-59px">
                    <div className="w-194px h-138px flex-shrink-0">
                        <img className="mt-9px ml-52px" src={img1} alt=""/>
                        <div className="w-156px text-center mt-23px -space-y-3px -ml-4px">
                            <div className="text-gray-r667177 font-spoqaMedium text-16px tracking-tight">회원님의 모든 데이터는</div>
                            <div className="text-gray-r667177 font-spoqaMedium text-16px tracking-tight leading-tight ml-3px">암호화되어 안전하게 </div>
                            <div className="text-gray-r667177 font-spoqaMedium text-16px tracking-tight leading-tight pt-2px ml-3px">보관됩니다.</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-240px h-138px flex-shrink-0 border-r border-l border-gray-ececec">
                        <img className="mt-10px ml-px" src={img2} alt=""/>
                        <div className="w-156px text-center mt-23px -space-y-3px -ml-4px">
                            <div className="text-gray-r667177 font-spoqaMedium text-16px tracking-tight ml-2px">아이디/비밀번호를</div>
                            <div className="text-gray-r667177 font-spoqaMedium text-16px tracking-tight leading-tight ml-3px">분실되지 않도록 보안에 </div>
                            <div className="text-gray-r667177 font-spoqaMedium text-16px tracking-tight leading-tight pt-2px ml-3px">신경 써 주세요.</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end w-194px h-138px">
                        <img className="mt-7px mr-40px" src={img3} alt=""/>
                        <div className="w-130px text-center mt-23px -space-y-3px -mr-4px">
                            <div className="text-gray-r667177 font-spoqaMedium text-16px tracking-tight ml-2px">회원 탈퇴 후</div>
                            <div className="text-gray-r667177 font-spoqaMedium text-16px tracking-tight leading-tight ml-3px">회원님의 정보는 </div>
                            <div className="text-gray-r667177 font-spoqaMedium text-16px tracking-tight leading-tight pt-2px ml-3px">완전히 삭제됩니다.</div>
                        </div>
                    </div>
                </div>
                {/* BREAK */}
                <button className="w-480px h-74px rounded-md bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-27px font-spoqaMedium text-white hover:opacity-75" onClick={() => setToLogin(true)}>로그인</button>
            </div>
        </div>
    )
}

export default SignedUpPopup
