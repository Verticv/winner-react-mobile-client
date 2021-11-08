import CouponGiftPopup from 'components/popups/CouponGiftPopup'
import PopupControls from 'components/popups/PopupControls'
import React, { useState } from 'react'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
import CouponGiftTable from './tables/CouponGiftTable'

const CouponGift = () => {

    const [page, setPage] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)

    const GiftButton = (
        <div className="flex items-center justify-center h-36px w-114px rounded-4px bg-blue-r0070d9 hover:opacity-75">
            <div className="flex items-center justify-center h-34px w-112px bg-black rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                <span className="font-spoqaMedium tracking-tight text-14px text-white pt-2px">쿠폰선물하기</span>
            </div>
        </div>
    )
    
    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-full flex justify-between">
                <MyPageTitle title="쿠폰선물"  couponCount={32} couponText="선물 가능한 쿠폰:"/>
                <div className="font-spoqaMedium text-16px tracking-tight w-full text-right text-gray-r8c8c8c space-x-2px h-16px">
                    <span className="font-spoqaBold text-blue-r0056a6">쿠폰선물하기</span>
                    <span>버튼을 클릭하여 쿠폰받을 회원을 선택하세요.</span>
                </div>

                
            </div>
            <div className="mt-20px">
                <CouponGiftTable />
            </div>

            <div className="flex w-full justify-end mt-20px">
                <PopupControls buttonChild={GiftButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                    <CouponGiftPopup setPopupOpen={setPopupOpen} />
                </PopupControls> 
            </div>

            <div className="mt-20px">
                <Pagination page={page} setPage={setPage}/>   
            </div>
        </div>
    )
}

export default CouponGift
