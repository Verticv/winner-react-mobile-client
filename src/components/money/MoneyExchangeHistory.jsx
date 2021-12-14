// import MyPageTitle from 'components/myPage/MyPageTitle'
import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
// import AlertIcon from '../../images/myPage/alert.png'
// import BankTable from './BankTable'
// import MoneyExchangeTable from './tables/MoneyExchangeTable'
import DateSearchBar from '../myPage/DateSearchBar'
import LiveCasinoBetHistoryTable from '../myPage/tables/LiveCasinoBetHistoryTable';
import SelectAllButton from '../common/SelectAllButton'

const tableArrayTitles = [
    {
        id: 0,
        text: "충전금액",
        isRed: false,
    },
    {
        id: 1,
        text: "신청일시",
        isRed: false,
    },
    {
        id: 2,
        text: "처리일시",
        isRed: false,
    }
]

const tableArray = [
    {
        id: 0,
        number: '12,000',
        time: "2021-06-30 14:45",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
        buttonText: '완료',
    },
    {
        id: 1,
        number: '12,000',
        time: "2021-06-30 14:45",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#9ca3af',
        buttonText: '취소',
    },
    {
        id: 2,
        number: '12,000',
        time: "2021-06-30 14:45",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
        buttonText: '완료',
    },
    {
        id: 3,
        number: '12,000',
        time: "2021-06-30 14:45",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
        buttonText: '완료',
    },
    {
        id: 4,
        number: '12,000',
        time: "2021-06-30 14:45",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
        buttonText: '완료',
    },
    {
        id: 5,
        number: '12,000',
        time: "2021-06-30 14:45",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
        buttonText: '완료',
    },
    {
        id: 6,
        number: '12,000',
        time: "2021-06-30 14:45",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
        buttonText: '완료',
    },
    {
        id: 7,
        number: '12,000',
        time: "2021-06-30 14:45",
        type: "2021-06-30 14:45",
        name: "2021-06-30 14:45",
        buttonColor: '#0056a6',
        buttonText: '완료',
    },
];


const MoneyExchangeHistory = () => {
    
    const [page, setPage] = useState(0)
    // const [inputValue, setInputValue] = useState(null)
    // const [passwordValue, setPasswordValue] = useState("")
    // const [inputClicked, setInputClicked] = useState(null)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    // var nf = new Intl.NumberFormat();

    
    return (
        <div className="flex flex-col items-center">         

            <DateSearchBar isLeagueSearch={false} withBlackButton />

            <div className="h-full">
                <LiveCasinoBetHistoryTable 
                    array={tableArray} 
                    titleArray={tableArrayTitles}
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='16.625rem'
                    isButtonGradient={false}
                />   
            </div>

            <div className='w-full'>
                <SelectAllButton count={8} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
            </div>

            <div className="mt-20px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

        </div>
    )
}

export default MoneyExchangeHistory
