import React, { useState } from 'react'
import DateSearchBar from './DateSearchBar'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
import PointsTransactionTable from './tables/PointsTransactionTable'

const PointsTransaction = () => {

    const [page, setPage] = useState(0)

    return (
        <div className="w-full flex flex-col items-center">
            <MyPageTitle title="포인트전환내역" pointsFor="Louie3" isTransaction={true} />

            <div className="flex mt-20px h-100px space-x-5px">
                <div style={{borderRadius:"10px"}} className="flex items-center justify-center w-204px h-100px bg-gradient-to-b from-blue-r01a0ea to-blue-r0779de">
                    <div style={{borderRadius:"8px"}} className="w-200px h-96px bg-white pt-21px flex items-center flex-col">
                        <div className="text-gray-r616161 font-spoqaMedium text-14px tracking-tight h-13px flex items-center">잔여 포인트</div>
                        <div className="text-30px tracking-tight flex items-center h-23px mt-17px">
                            <span className="font-spoqaBold text-blue-r0056a6">278</span>
                            <span className="font-spoqa text-gray-r616161">P</span>
                        </div>
                    </div>
                </div>

                <div style={{borderRadius:"10px"}} className="pt-21px items-center flex-col flex w-204px h-100px bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r616161 font-spoqaMedium text-14px tracking-tight h-13px flex items-center">당월 적립포인트</div>
                    <div className="text-30px tracking-tight flex items-center h-23px mt-17px text-gray-r616161">
                        <span className="font-spoqaBold">50</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>

                <div style={{borderRadius:"10px"}} className="pt-21px items-center flex-col flex w-204px h-100px bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r616161 font-spoqaMedium text-14px tracking-tight h-13px flex items-center">전월 적립포인트</div>
                    <div className="text-30px tracking-tight flex items-center h-23px mt-17px text-gray-r616161">
                        <span className="font-spoqaBold">228</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>

                <div style={{borderRadius:"10px"}} className="pt-21px items-center flex-col flex w-204px h-100px bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r616161 font-spoqaMedium text-14px tracking-tight h-13px flex items-center">총 누적포인트</div>
                    <div className="text-30px tracking-tight flex items-center h-23px mt-17px text-gray-r616161">
                        <span className="font-spoqaBold">278</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>

                <div style={{borderRadius:"10px"}} className="pt-21px items-center flex-col flex w-204px h-100px bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r616161 font-spoqaMedium text-14px tracking-tight h-13px flex items-center">총 사용포인트</div>
                    <div className="text-30px tracking-tight flex items-center h-23px mt-17px text-gray-r616161">
                        <span className="font-spoqaBold">0</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <DateSearchBar has3MonthSearch={true}/>
            </div>

            <div className="mt-20px">
                <PointsTransactionTable />
            </div>

            <div className="mt-60px"></div>
            <Pagination page={page} setPage={setPage}/>   

        </div>
    )
}

export default PointsTransaction
