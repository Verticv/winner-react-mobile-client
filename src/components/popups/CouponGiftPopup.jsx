import CouponGiftPopupTable from 'components/myPage/tables/CouponGiftPopupTable'
import React from 'react'
import CloseIcon from '../../images/popups/close.png'
import Step1 from '../../images/popups/step1.png'
import Step2 from '../../images/popups/step2.png'
import './Scrollbars.css'

const CouponGiftPopup = ({setPopupOpen}) => {
    return (
        <div className="h-731px w-610px flex flex-col rounded-lg overflow-hidden">
            <div className="relative h-71px bg-blue-r5d799c flex items-center justify-center flex-shrink-0">
                <label className="font-spoqaBold text-white tracking-tight text-24px">쿠폰 선물하기</label>
                <button className="absolute right-0 mr-26px cursor-pointer z-20" onClick={()=> setPopupOpen(false)}>
                    <img src={CloseIcon} alt="close_icon" />
                </button>
            </div>

            <div className="w-full h-full bg-white pl-33px pr-37px">
                <div className="flex items-center h-19px mt-36px space-x-8px">
                    <img src={Step1} alt="" />
                    <span className="font-spoqaMedium text-16px tracking-tight text-gray-r7c7c7c pt-3px">선물로 보낼 쿠폰을 확인하세요.</span>
                </div>

                <div className="mt-17px h-64px w-full bg-gray-f9f9f9 border border-gray-dddddd rounded-2xl flex items-center font-spoqaMedium text-14px tracking-tight ">
                    <span className="ml-76px text-gray-r454545">선물할 쿠폰</span>
                    <div className="w-311px h-42px ml-10px bg-white border border-gray-dddddd rounded-md flex items-center">
                        <span className="text-gray-r8c8c8c ml-11px">쿠폰테스트</span>
                    </div>
                </div>

                <div className="flex items-center h-19px mt-40px space-x-8px">
                    <img src={Step2} alt="" />
                    <span className="font-spoqaMedium text-16px tracking-tight text-gray-r7c7c7c pt-3px">쿠폰받을 회원을 선택하세요.</span>
                </div>

                <div style={{borderRadius:"0.5rem"}} className="mt-17px w-full h-337px rounded-2xl shadow-subNavbar overflow-hidden">
                    <CouponGiftPopupTable />
                </div>

                <div className="w-full flex items-center justify-center mt-21px">
                    <button className="flex items-center justify-center h-52px w-192px rounded-4px bg-blue-r0070d9" onClick={()=> setPopupOpen(false)}>
                        <div 
                        style={{background:"linear-gradient(to bottom, #1491fc, #0675db)"}} 
                        className="flex items-center justify-center h-50px w-190px rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-16px text-white">쿠폰발송</span>
                        </div>
                    </button>
                </div>
                
            </div>
            
        </div>
    )
}

export default CouponGiftPopup
