import CouponGiftPopupTable from 'components/myPage/tables/CouponGiftPopupTable'
import React from 'react'
import CloseIcon from '../../images/popups/close.png'
import Step1 from '../../images/popups/step1.png'
import Step2 from '../../images/popups/step2.png'
import './Scrollbars.css'

const CouponGiftPopup = ({setPopupOpen}) => {
    return (
        <div style={{height:"100vh", width: '77.625rem' ,borderTopLeftRadius: '4rem', borderTopRightRadius: '4rem'}} className="flex flex-col rounded-lg overflow-hidden">
            <div style={{height: '9.5rem'}} className="relative bg-blue-r5d799c flex items-center justify-center flex-shrink-0">
                <label style={{fontSize: '3.75rem'}} className="font-spoqaBold text-white tracking-tight">베팅내역</label>
                <button style={{marginRight: '4.625rem'}} className="absolute right-0 cursor-pointer z-20" onClick={() => setPopupOpen(false)}>
                    <img style={{width: '3.1875rem', height: '3.1875rem'}} src={CloseIcon} alt="close_icon" />
                </button>
            </div>

            <div style={{padding: '0 1.875rem'}} className="w-full h-full bg-white">
                <div style={{marginTop: '3.125rem', marginBottom: '1.125rem'}} className="flex items-start">
                    <img style={{width: '7.9375rem', height: '2.875rem', marginLeft: '0.4375rem', marginRight: '1.875rem'}} src={Step1} alt="" />
                    <span style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-gray-r7c7c7c">선물로 보낼 쿠폰을 확인하세요.</span>
                </div>

                <div style={{height: '10.4375rem', fontSize: '2.8125rem', marginBottom: '7rem'}} className="w-full bg-gray-f9f9f9 border border-gray-dddddd rounded-2xl flex items-center justify-center font-spoqaMedium tracking-tight ">
                    <span className="text-gray-r454545">선물할 쿠폰</span>
                    <div style={{height: '6.75rem', width: '41.4375rem', marginLeft: '1.875rem'}} className="bg-white border border-gray-dddddd rounded-2xl flex items-center">
                        <span style={{paddingLeft: '1.5625rem'}} className="text-gray-r8c8c8c">쿠폰테스트</span>
                    </div>
                </div>

                <div style={{marginBottom: '1.875rem'}} className="flex items-center">
                    <img  style={{width: '7.9375rem', height: '2.875rem', marginLeft: '0.4375rem', marginRight: '1.875rem'}} src={Step2} alt="" />
                    <span style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-gray-r7c7c7c">쿠폰받을 회원을 선택하세요.</span>
                </div>

                <div style={{borderRadius:"0.5rem"}} className="w-full rounded-2xl shadow-subNavbar overflow-hidden">
                    <CouponGiftPopupTable />
                </div>

                <div className="w-full flex items-center justify-center">
                    <button style={{height: '7.3125rem', width: '36.4375rem', padding: '1px', fontSize: '2.8125rem', marginTop: '3.75rem'}} className="flex items-center justify-center rounded-2xl bg-blue-r0070d9" onClick={()=> setPopupOpen(false)}>
                        <div 
                        style={{background:"linear-gradient(to bottom, #1491fc, #0675db)"}} 
                        className="flex w-full h-full items-center justify-center rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-white">쿠폰발송</span>
                        </div>
                    </button>
                </div>
                
            </div>
            
        </div>
    )
}

export default CouponGiftPopup
