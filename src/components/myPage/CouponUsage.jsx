import React, { useState } from 'react'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
import CouponUsageTable from './tables/CouponUsageTable'

const CouponUsage = () => {

    const [page, setPage] = useState(0)

    return (
        <div className="flex flex-col w-full items-center">
            <MyPageTitle title="쿠폰사용" couponCount={32}/>

            <div className="mt-20px">
                <CouponUsageTable />
            </div>

            <div className="mt-60px">
                <Pagination page={page} setPage={setPage}/>   
            </div>
        </div>
    )
}

export default CouponUsage
