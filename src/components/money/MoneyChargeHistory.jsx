import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import DateSearchBar from '../myPage/DateSearchBar'
import HistoryTable from 'components/common/HistoryTable'
import SelectAllButton from '../common/SelectAllButton'
import ScrollButton from 'components/common/ScrollButton'

const tableData = [
    [          
        {
            0: {충전금액: '12,000'},
        },
        {
            0: {보너스금액: "+12,000"}
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
            0: {충전금액: '12,000'},
        },
        {
            0: {보너스금액: "+12,000"}
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
            0: {충전금액: '12,000'},
        },
        {
            0: {보너스금액: "+12,000"}
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
            0: {충전금액: '12,000'},
        },
        {
            0: {보너스금액: "+12,000"}
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
            0: {충전금액: '12,000'},
        },
        {
            0: {보너스금액: "+12,000"}
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
            0: {충전금액: '12,000'},
        },
        {
            0: {보너스금액: "+12,000"}
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
            0: {충전금액: '12,000'},
        },
        {
            0: {보너스금액: "+12,000"}
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
            0: {충전금액: '12,000'},
        },
        {
            0: {보너스금액: "+12,000"}
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



const MoneyChargeHistory = () => {
    
    const [page, setPage] = useState(0)
    // const [inputValue, setInputValue] = useState(null)
    // const [passwordValue, setPasswordValue] = useState("")
    // const [inputClicked, setInputClicked] = useState(null)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(8).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    // var nf = new Intl.NumberFormat();

    
    return (
        <div className="flex flex-col items-center">         

            <DateSearchBar isLeagueSearch={false} withBlackButton />
            <ScrollButton />
            <div className="h-full">
                <HistoryTable 
                    containerBackground= '#f7f9fc'
                    tableData={tableData}
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='20.9375rem'
                    isButtonGradient={false}
                />   
            </div>

            <div className='w-full'>
                <SelectAllButton count={8} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
            </div>

            <div style={{marginTop: '1.25rem'}}>
                <Pagination page={page} setPage={setPage}/>   
            </div>

        </div>
    )
}

export default MoneyChargeHistory
