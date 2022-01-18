import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import DateSearchBar from '../myPage/DateSearchBar'
import HistoryTable from 'components/common/HistoryTable'


const tableData = [
    [          
        {
            0: {적립일: '2021-06-30'},
        },
        {
            0: {제목: "Rolling Bouns"}
        },
        {
            0: {아이디: "eric123"},
            1: {종류: "스포츠"}
        },
        {
            0: {퍼센트: "1.00%"},
            1: {보너스퍼센트: "100%"}
        },
        {
            0: {베팅금액: "5,000"},
            1: {적립포인트: "50P"}
        }
    ],
    [          
        {
            0: {적립일: '2021-06-30'},
        },
        {
            0: {제목: "Rolling Bouns"}
        },
        {
            0: {아이디: "eric123"},
            1: {종류: "스포츠"}
        },
        {
            0: {퍼센트: "1.00%"},
            1: {보너스퍼센트: "100%"}
        },
        {
            0: {베팅금액: "5,000"},
            1: {적립포인트: "50P"}
        }
    ],
    [          
        {
            0: {적립일: '2021-06-30'},
        },
        {
            0: {제목: "Rolling Bouns"}
        },
        {
            0: {아이디: "eric123"},
            1: {종류: "스포츠"}
        },
        {
            0: {퍼센트: "1.00%"},
            1: {보너스퍼센트: "100%"}
        },
        {
            0: {베팅금액: "5,000"},
            1: {적립포인트: "50P"}
        }
    ],
    [          
        {
            0: {적립일: '2021-06-30'},
        },
        {
            0: {제목: "Rolling Bouns"}
        },
        {
            0: {아이디: "eric123"},
            1: {종류: "스포츠"}
        },
        {
            0: {퍼센트: "1.00%"},
            1: {보너스퍼센트: "100%"}
        },
        {
            0: {베팅금액: "5,000"},
            1: {적립포인트: "50P"}
        }
    ],
    [          
        {
            0: {적립일: '2021-06-30'},
        },
        {
            0: {제목: "Rolling Bouns"}
        },
        {
            0: {아이디: "eric123"},
            1: {종류: "스포츠"}
        },
        {
            0: {퍼센트: "1.00%"},
            1: {보너스퍼센트: "100%"}
        },
        {
            0: {베팅금액: "5,000"},
            1: {적립포인트: "50P"}
        }
    ],
    [          
        {
            0: {적립일: '2021-06-30'},
        },
        {
            0: {제목: "Rolling Bouns"}
        },
        {
            0: {아이디: "eric123"},
            1: {종류: "스포츠"}
        },
        {
            0: {퍼센트: "1.00%"},
            1: {보너스퍼센트: "100%"}
        },
        {
            0: {베팅금액: "5,000"},
            1: {적립포인트: "50P"}
        }
    ],
    [          
        {
            0: {적립일: '2021-06-30'},
        },
        {
            0: {제목: "Rolling Bouns"}
        },
        {
            0: {아이디: "eric123"},
            1: {종류: "스포츠"}
        },
        {
            0: {퍼센트: "1.00%"},
            1: {보너스퍼센트: "100%"}
        },
        {
            0: {베팅금액: "5,000"},
            1: {적립포인트: "50P"}
        }
    ],
    [          
        {
            0: {적립일: '2021-06-30'},
        },
        {
            0: {제목: "Rolling Bouns"}
        },
        {
            0: {아이디: "eric123"},
            1: {종류: "스포츠"}
        },
        {
            0: {퍼센트: "1.00%"},
            1: {보너스퍼센트: "100%"}
        },
        {
            0: {베팅금액: "5,000"},
            1: {적립포인트: "50P"}
        }
    ],
]


const PointsAccumulateHistory = ({SubMenuList}) => {
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

            <div className="h-full">
                <HistoryTable
                    containerBackground= '#f7f9fc'
                    tableData={tableData}
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='25.25rem'
                    isButtonGradient={false}
                    hasLeftInput={false}
                    hasButton={false}
                />   
            </div>


            <div style={{marginTop: '1.875rem'}}>
                <Pagination page={page} setPage={setPage}/>   
            </div>

        </div>
    )
}

export default PointsAccumulateHistory
