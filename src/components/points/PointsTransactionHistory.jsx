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



const PointsTransactionHistory = ({SubMenuList}) => {
    const [page, setPage] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))

    return (
        <div className="flex flex-col items-center">

            <div style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight my-4 text-gray-r8c8c8c">
                <span className="font-spoqaBold text-blue-r0056a6">louie3</span>
                <span className="">님의 포인트전환 정보입니다.</span>
            </div>



            {SubMenuList}

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


            <div style={{marginTop: '1.875rem'}}>
                <Pagination page={page} setPage={setPage}/>   
            </div>

        </div>
    )
}

export default PointsTransactionHistory
