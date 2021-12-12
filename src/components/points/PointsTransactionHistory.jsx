import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import DateSearchBar from '../myPage/DateSearchBar'
import LiveCasinoBetHistoryTable from '../myPage/tables/LiveCasinoBetHistoryTable';

const tableArrayTitles = [
    {
        id: 0,
        text: "신청포인트",
        isRed: false,
    },
    {
        id: 1,
        text: "사용구분",
        isRed: false,
    },
    {
        id: 2,
        text: "신청일시",
        isRed: false,
    },
    {
        id: 3,
        text: "처리일시",
        isRed: false,
    }
]

const tableArray = [
    {
        id: 0,
        number: '100,000,000',
        time: "보유머니전환",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
    },
    {
        id: 1,
        number: '100,000,000',
        time: "보유머니전환",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#9ca3af',
    },
    {
        id: 2,
        number: '100,000,000',
        time: "보유머니전환",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
    },
    {
        id: 3,
        number: '100,000,000',
        time: "보유머니전환",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
    },
    {
        id: 4,
        number: '100,000,000',
        time: "보유머니전환",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
    },
    {
        id: 5,
        number: '100,000,000',
        time: "보유머니전환",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
    },
    {
        id: 6,
        number: '100,000,000',
        time: "보유머니전환",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
    },
    {
        id: 7,
        number: '100,000,000',
        time: "보유머니전환",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
    },
];


const PointsTransactionHistory = () => {
    const [page, setPage] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))

    return (
        <div className="flex flex-col items-center">

            <div style={{fontSize: '2.625rem', marginTop: '1.875rem', marginBottom: '3.75rem'}} className="font-spoqaMedium tracking-tight text-gray-r8c8c8c space-x-2px">
                <span className="font-spoqaBold text-blue-r0056a6">louie3</span>
                <span className="">님의 포인트전환 정보입니다</span>
            </div>

            <div style={{padding: '1.875rem', paddingBottom: '0.9375rem'}} className='w-full flex'>
                <div style={{borderRadius:"10px", padding: '0.375rem', marginRight: '0.46875rem', height: '13.125rem'}} className="flex items-center justify-center w-1/2 bg-gradient-to-b from-blue-r01a0ea to-blue-r0779de">
                    <div style={{borderRadius:"8px"}} className="w-full h-full pt-2 bg-white flex items-center justify-center flex-col">
                        <div className="text-gray-r616161 font-spoqaMedium text-4xl tracking-tight flex items-center">잔여 포인트</div>
                        <div style={{fontSize: '4.125rem', marginTop: '0.625rem'}} className="tracking-tight flex items-center">
                            <span className="font-spoqaBold text-blue-r0056a6">278</span>
                            <span className="font-spoqa text-gray-r616161">P</span>
                        </div>
                    </div>
                </div>
                <div style={{borderRadius:"10px", marginLeft: '0.46875rem', height: '13.125rem'}} className="items-center justify-center pt-2 flex-col flex w-1/2 bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r616161 font-spoqaMedium text-4xl tracking-tight flex items-center">당월 적립포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '0.625rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">50</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
            </div>

            
            <div style={{padding: '1.875rem', paddingTop: '0'}} className='w-full flex'>
                <div style={{borderRadius:"10px", marginRight: '0.46875rem', height: '13.125rem'}} className="items-center justify-center pt-2 flex-col flex w-1/3 bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r616161 font-spoqaMedium text-4xl tracking-tight flex items-center">전월 적립포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '0.625rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">228</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
                <div style={{borderRadius:"10px", marginRight: '0.46875rem',  marginLeft: '0.46875rem', height: '13.125rem'}} className="items-center justify-center pt-2 flex-col flex w-1/3 bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r616161 font-spoqaMedium text-4xl tracking-tight flex items-center">총 누적포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '0.625rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">278</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
                <div style={{borderRadius:"10px", marginLeft: '0.46875rem', height: '13.125rem'}} className="items-center justify-center pt-2 flex-col flex w-1/3 bg-white border-2 border-gray-dddddd">
                    <div className="text-gray-r616161 font-spoqaMedium text-4xl tracking-tight flex items-center">총 사용포인트</div>
                    <div style={{fontSize: '4.125rem', marginTop: '0.625rem'}} className="tracking-tight flex items-center text-gray-r616161">
                        <span className="font-spoqaBold">0</span>
                        <span className="font-spoqa">P</span>
                    </div>
                </div>
            </div>


            <DateSearchBar isLeagueSearch={false} withBlackButton />

            <div className="h-full">
                <LiveCasinoBetHistoryTable 
                    array={tableArray} 
                    titleArray={tableArrayTitles}
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
