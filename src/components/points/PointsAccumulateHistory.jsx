import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import DateSearchBar from '../myPage/DateSearchBar'
import LiveCasinoBetHistoryTable from '../myPage/tables/LiveCasinoBetHistoryTable';

const tableArrayTitles = [
    {
        id: 0,
        text: "적립일",
        isRed: false,
    },
    {
        id: 1,
        text: "제목",
        isRed: false,
    },
    {
        id: 2,
        text: "아이디",
        isRed: false,
    },
    {
        id: 3,
        text: "퍼센트",
        isRed: false,
    },
    {
        id: 4,
        text: "베팅금액",
        isRed: false,
    }
]

const tableArray = [
    {
        id: 0,
        number: '2021-06-30',
        time: "Rolling Bouns",
        type: "eric123",
        name: "1.00%",
        amount: '5,000',
    },
    {
        id: 1,
        number: '2021-06-30',
        time: "Rolling Bouns",
        type: "eric123",
        name: "1.00%",
        amount: '5,000',
    },
    {
        id: 2,
        number: '2021-06-30',
        time: "Rolling Bouns",
        type: "eric123",
        name: "1.00%",
        amount: '5,000',
    },
    {
        id: 3,
        number: '2021-06-30',
        time: "Rolling Bouns",
        type: "eric123",
        name: "1.00%",
        amount: '5,000',
    },
    {
        id: 4,
        number: '2021-06-30',
        time: "Rolling Bouns",
        type: "eric123",
        name: "1.00%",
        amount: '5,000',
    },
    {
        id: 5,
        number: '2021-06-30',
        time: "Rolling Bouns",
        type: "eric123",
        name: "1.00%",
        amount: '5,000',
    },
    {
        id: 6,
        number: '2021-06-30',
        time: "Rolling Bouns",
        type: "eric123",
        name: "1.00%",
        amount: '5,000',
    },
    {
        id: 7,
        number: '2021-06-30',
        time: "Rolling Bouns",
        type: "eric123",
        name: "1.00%",
        amount: '5,000',
    },
];


const PointsAccumulateHistory = () => {
    const [page, setPage] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))

    return (
        <div className="flex flex-col items-center">

            <div style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight my-4 text-gray-r8c8c8c">
                <span className="font-spoqaBold text-blue-r0056a6">louie3</span>
                <span className="">님의 포인트전환 정보입니다</span>
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

            <div className="h-full">
                <LiveCasinoBetHistoryTable
                    containerBackground= '#f7f9fc'
                    array={tableArray} 
                    titleArray={tableArrayTitles}
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='25.25rem'
                    isButtonGradient={false}
                    hasLeftInput={false}
                    hasExtraColumns={true}
                    hasButton={false}
                />   
            </div>


            <div className="mt-20px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

        </div>
    )
}

export default PointsAccumulateHistory
