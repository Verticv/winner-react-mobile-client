import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import DateSearchBar from '../myPage/DateSearchBar'
import HistoryTable from 'components/common/HistoryTable'

const tableData = [
    [          
        {
            0: {신청포인트: '100,000,000'},
        },
        {
            0: {사용구분: "보유머니전환"}
        },
        {
            0: {신청일시: "2021-06-30 14:45"}
        },
        {
            0: {처리일시: "2021-06-30 14:45"}
        },
        {
            buttonColor: '#0056a6',
            buttonText: '완료'
        }
    ],
    [          
        {
            0: {신청포인트: '100,000,000'},
        },
        {
            0: {사용구분: "보유머니전환"}
        },
        {
            0: {신청일시: "2021-06-30 14:45"}
        },
        {
            0: {처리일시: "2021-06-30 14:45"}
        },
        {
            buttonColor: '#9ca3af',
            buttonText: '취소'
        }
    ],
    [          
        {
            0: {신청포인트: '100,000,000'},
        },
        {
            0: {사용구분: "보유머니전환"}
        },
        {
            0: {신청일시: "2021-06-30 14:45"}
        },
        {
            0: {처리일시: "2021-06-30 14:45"}
        },
        {
            buttonColor: '#0056a6',
            buttonText: '완료'
        }
    ],
    [          
        {
            0: {신청포인트: '100,000,000'},
        },
        {
            0: {사용구분: "보유머니전환"}
        },
        {
            0: {신청일시: "2021-06-30 14:45"}
        },
        {
            0: {처리일시: "2021-06-30 14:45"}
        },
        {
            buttonColor: '#0056a6',
            buttonText: '완료'
        }
    ],
    [          
        {
            0: {신청포인트: '100,000,000'},
        },
        {
            0: {사용구분: "보유머니전환"}
        },
        {
            0: {신청일시: "2021-06-30 14:45"}
        },
        {
            0: {처리일시: "2021-06-30 14:45"}
        },
        {
            buttonColor: '#0056a6',
            buttonText: '완료'
        }
    ],
    [          
        {
            0: {신청포인트: '100,000,000'},
        },
        {
            0: {사용구분: "보유머니전환"}
        },
        {
            0: {신청일시: "2021-06-30 14:45"}
        },
        {
            0: {처리일시: "2021-06-30 14:45"}
        },
        {
            buttonColor: '#0056a6',
            buttonText: '완료'
        }
    ],
    [          
        {
            0: {신청포인트: '100,000,000'},
        },
        {
            0: {사용구분: "보유머니전환"}
        },
        {
            0: {신청일시: "2021-06-30 14:45"}
        },
        {
            0: {처리일시: "2021-06-30 14:45"}
        },
        {
            buttonColor: '#0056a6',
            buttonText: '완료'
        }
    ],
    [          
        {
            0: {신청포인트: '100,000,000'},
        },
        {
            0: {사용구분: "보유머니전환"}
        },
        {
            0: {신청일시: "2021-06-30 14:45"}
        },
        {
            0: {처리일시: "2021-06-30 14:45"}
        },
        {
            buttonColor: '#0056a6',
            buttonText: '완료'
        }
    ],

]



const PointsTransactionHistory = () => {
    const [page, setPage] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))

    return (
        <div className="flex flex-col items-center">

            <div style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight my-4 text-gray-r8c8c8c">
                <span className="font-spoqaBold text-blue-r0056a6">louie3</span>
                <span className="">님의 포인트전환 정보입니다.</span>
            </div>

            <div style={{padding: '1.875rem', paddingBottom: '0.9375rem'}} className='w-full flex'>
                <div style={{borderRadius:"1.625rem", padding: '0.375rem', marginRight: '0.46875rem', height: '13.125rem'}} className="flex items-center justify-center w-1/2 bg-gradient-to-b from-blue-r01a0ea to-blue-r0779de">
                    <div style={{borderRadius:"1.3rem"}} className="w-full h-full pt-2 bg-white flex items-center justify-center flex-col">
                        <div className="text-gray-r616161 font-spoqaMedium text-4xl tracking-tight flex items-center">잔여 포인트</div>
                        <div style={{fontSize: '4.125rem', marginTop: '0.625rem'}} className="tracking-tight flex items-center">
                            <span className="font-spoqaBold text-blue-r0056a6">278</span>
                            <span className="font-spoqa text-gray-r616161">P</span>
                        </div>
                    </div>
                </div>
                <div style={{borderRadius:"1.625rem", marginLeft: '0.46875rem', height: '13.125rem'}} className="items-center justify-center pt-2 flex-col flex w-1/2 bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r616161 font-spoqaMedium text-4xl tracking-tight flex items-center">당월 적립포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '0.625rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">50</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
            </div>

            
            <div style={{padding: '1.875rem', paddingTop: '0'}} className='w-full flex'>
                <div style={{borderRadius:"1.625rem", marginRight: '0.46875rem', height: '13.125rem'}} className="items-center justify-center pt-2 flex-col flex w-1/3 bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r616161 font-spoqaMedium text-4xl tracking-tight flex items-center">전월 적립포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '0.625rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">228</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
                <div style={{borderRadius:"1.625rem", marginRight: '0.46875rem',  marginLeft: '0.46875rem', height: '13.125rem'}} className="items-center justify-center pt-2 flex-col flex w-1/3 bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r616161 font-spoqaMedium text-4xl tracking-tight flex items-center">총 누적포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '0.625rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">278</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
                <div style={{borderRadius:"1.625rem", marginLeft: '0.46875rem', height: '13.125rem'}} className="items-center justify-center pt-2 flex-col flex w-1/3 bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r616161 font-spoqaMedium text-4xl tracking-tight flex items-center">총 사용포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '0.625rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">0</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
            </div>


            <DateSearchBar isLeagueSearch={false} withBlackButton />

            <div className="h-full w-full">
                <HistoryTable
                    containerBackground= '#f7f9fc'
                    tableData={tableData}
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='21rem'
                    isButtonGradient={false}
                    hasLeftInput={false}
                />   
            </div>


            <div className="mt-20px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

        </div>
    )
}

export default PointsTransactionHistory
