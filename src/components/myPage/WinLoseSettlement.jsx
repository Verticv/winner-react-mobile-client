import React, { useState } from 'react'
import Diamond from '../../images/newImages/mainPage/icons/distributor/diamond.png'
import Pagination from 'components/myPage/Pagination'
import DateSearchBar from './DateSearchBar'
import HistoryTable from 'components/common/HistoryTable'
import SelectAllButton from '../common/SelectAllButton'
import ScrollButton from 'components/common/ScrollButton'

const tableData = [
    [          
        {
            0: {정산시작일: '2021-06-30'},
        },
        {
            0: {정산종료일: "2021-07-29"}
        },
        {
            0: {분류: "미니게임"}
        },
        {
            0: {금액: "75,000"}
        },
        {
            buttonColor: '#9ca3af',
        }
    ],
    [          
        {
            0: {정산시작일: '2021-06-30'},
        },
        {
            0: {정산종료일: "2021-07-29"}
        },
        {
            0: {분류: "에볼루션"}
        },
        {
            0: {금액: "+75,000"}
        },
        {
            buttonColor: '#0056a6',
        }
    ],
    [          
        {
            0: {정산시작일: '2021-06-30'},
        },
        {
            0: {정산종료일: "2021-07-29"}
        },
        {
            0: {분류: "미니게임"}
        },
        {
            0: {금액: "+75,000"}
        },
        {
            buttonColor: '#0056a6',
        }
    ],
    [          
        {
            0: {정산시작일: '2021-06-30'},
        },
        {
            0: {정산종료일: "2021-07-29"}
        },
        {
            0: {분류: "스포츠"}
        },
        {
            0: {금액: "-20,000"}
        },
        {
            buttonColor: '#0056a6',
        }
    ],
    [          
        {
            0: {정산시작일: '2021-06-30'},
        },
        {
            0: {정산종료일: "2021-07-29"}
        },
        {
            0: {분류: "미니게임"}
        },
        {
            0: {금액: "+15,000"}
        },
        {
            buttonColor: '#0056a6',
        }
    ],
    [          
        {
            0: {정산시작일: '2021-06-30'},
        },
        {
            0: {정산종료일: "2021-07-29"}
        },
        {
            0: {분류: "스포츠"}
        },
        {
            0: {금액: "-15,000"}
        },
        {
            buttonColor: '#0056a6',
        }
    ],
    [          
        {
            0: {정산시작일: '2021-06-30'},
        },
        {
            0: {정산종료일: "2021-07-29"}
        },
        {
            0: {분류: "미니게임"}
        },
        {
            0: {금액: "-15,000"}
        },
        {
            buttonColor: '#0056a6',
        }
    ],
    [          
        {
            0: {정산시작일: '2021-06-30'},
        },
        {
            0: {정산종료일: "2021-07-29"}
        },
        {
            0: {분류: "미니게임"}
        },
        {
            0: {금액: "-50,000"}
        },
        {
            buttonColor: '#0056a6',
        }
    ],
]


const WinLoseSettlement = () => {
    
    const [page, setPage] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(8).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)

    
    return (
        <div style={{paddingTop: '1.875rem'}} className="flex flex-col items-center ffffffffffff">         
            <DateSearchBar isLeagueSearch={false} withBlackButton />
            <ScrollButton />
            <div style={{width: '73.875rem', height: '7.3125rem', marginTop: '1.875rem', fontSize: '2.625rem', borderRadius: '3.5rem', borderWidth: '0.1875rem'}} className="flex w-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium tracking-tight">
                <div className='w-1/2 flex items-center justify-center'>
                    <img style={{width: '1.3125rem', height: '1.3125rem', marginRight: '1.3125rem'}} src={Diamond} alt="" />
                    <div className="flex items-center space-x-4px pt-2px">
                        <span className="text-white">진행중인 금액:</span>
                        <span className="text-yellow-ffcc00 font-spoqaBold">2,520,000</span>
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <img style={{width: '1.3125rem', height: '1.3125rem', marginRight: '1.3125rem'}} src={Diamond} alt="" />
                    <div className="flex items-center space-x-4px pt-2px">
                        <span className="text-white">정산 총 금액:</span>
                        <span className="text-yellow-ffcc00 font-spoqaBold">500,000</span>
                    </div>
                </div>
            </div>

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

            <div style={{height: '7.5rem', width: '73.875rem', fontSize: '2.625rem', borderWidth: '0.1875rem', margin: '0px 1.875rem 1.875rem'}} className="font-spoqaMedium text-14px tracking-tight border border-gray-ececec flex items-center shadow-subNavbar rounded-2xl">
                <div style={{borderRightWidth: '0.1875rem'}} className='flex items-center justify-center h-full w-1/2 text-white bg-gray-a3b2c2 border-r border-gray-ececec rounded-l-2xl'>합계</div>
                <div className='flex items-center justify-center h-full w-1/2 text-red-d52e2e rounded-2xl'>+244,119</div>
            </div>

            <div className='w-full'>
                <SelectAllButton  count={8} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
            </div>

            <div style={{marginTop: '1.4375rem'}} className="">
                <Pagination page={page} setPage={setPage}/>   
            </div>

        </div>
    )
}

export default WinLoseSettlement
