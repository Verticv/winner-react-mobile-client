import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from 'components/common/HistoryTable'
import ScrollButton from 'components/common/ScrollButton'
import SelectAllButton from 'components/common/SelectAllButton'
import Icon1 from '../../../images/newImages/mypage/live-casino/ico-1.png'
import Icon3 from '../../../images/newImages/minigameResults/1.png'
import Icon4 from '../../../images/newImages/minigameResults/2.png'
import Icon5 from '../../../images/newImages/minigameResults/3.png'
import Icon6 from '../../../images/newImages/minigameResults/4.png'
import SubHorizontalMenu5 from './SubHorizontalMenu5'
import PowerLadderBetHistoryPanel from 'components/common/cards/PowerLadderBetHistoryPanel'
import KinoLadderBetHistoryPanel from '../../common/cards/KinoLadderBetHistoryPanel'

const subTabsArray = [
    { text: "전체", icon: Icon1, id: 0 },
    { text: "파워볼", icon: Icon3, id: 1 },
    { text: "파워사다리", icon: Icon4, id: 2 },
    { text: "스피드키노", icon: Icon5, id: 3, custom: "mt-8px" },
    { text: "키노사다리", icon: Icon6, id: 4 },
];

// 베팅번호 => number
// 베팅시간 => time
// 게임종류  => type
// 게임구분 => name
// 베팅금액  => amount
// 적중/손실금액 => profit
// 상태 => status

const tableData = [
    [          
        {
            0: {베팅번호: 7193915},
        },
        {
            0: {베팅시간: "2021-06-29 15:46:13"}
        },
        {
            0: {게임종류: "파워볼"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "12,000"}
        },
        {
            0: {배당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-12,000"}
        },
        {
            0: {상태: "패"}
        },
        {
            buttonColor: '#0056a6'
        }
    ],
    [          
        {
            0: {베팅번호: 7193914}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임종류: "파워사다리"}
        },
        {
            0: {게임구분: "홀/짝"}
        },
        {
            0: {베팅내역: "짝"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "+900,000,000"}
        },
        {
            0: {상태: "승"}
        }
    ],
    [          
        {
            0: {베팅번호: 7193913}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임종류: "파워사다리"}
        },
        {
            0: {게임구분: "홀/짝"}
        },
        {
            0: {베팅내역: "홀"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
    [          
        {
            0: {베팅번호: 7193913}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임종류: "파워사다리"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
    [          
        {
            0: {베팅번호: 7193913}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임종류: "파워사다리"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
    [          
        {
            0: {베팅번호: 7193913}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임종류: "파워사다리"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
    [          
        {
            0: {베팅번호: 7193913}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임종류: "파워사다리"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
    [          
        {
            0: {베팅번호: 7193913}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임종류: "파워사다리"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
]

const tableData1 = [
    [          
        {
            0: {베팅번호: 7193915},
        },
        {
            0: {베팅시간: "2021-06-29 15:46:13"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "12,000"}
        },
        {
            0: {배당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-12,000"}
        },
        {
            0: {상태: "패"}
        },
        {
            buttonColor: '#0056a6'
        }
    ],
    [          
        {
            0: {베팅번호: 7193914}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "+900,000,000"}
        },
        {
            0: {상태: "승"}
        }
    ],
    [          
        {
            0: {베팅번호: 7193913}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
    [          
        {
            0: {베팅번호: 7193913}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
    [          
        {
            0: {베팅번호: 7193913}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
    [          
        {
            0: {베팅번호: 7193913}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
    [          
        {
            0: {베팅번호: 7193913}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
    [          
        {
            0: {베팅번호: 7193913}
        },
        {
            0: {베팅시간: "2021-06-29 15:45:41"}
        },
        {
            0: {게임구분: "파워볼 언오버"}
        },
        {
            0: {베팅내역: "언더"}
        },
        {
            0: {베팅금액: "900,000,000"}
        },
        {
            0: {베당률: "1.95"}
        },
        {
            0: {'적중/손실금액': "-800,000"}
        },
        {
            0: {상태: "패"}
        }
    ],
]

const MinigameBetHistory = ({isState = 0, setState, showSub = true}) => {

    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(true)

   

    return (
        <div className="w-full">
            {showSub === true && (
                <>
                    <div className="w-full flex relative top-0">
                        <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                        <div id='scroll-wrapper1' style={{padding: '1.875rem', paddingRight: '0', paddingTop: '0'}} className="sticky overflow-x-scroll overflow-y-hidden hide-scrollbar">
                            <div className=" flex flex-shrink-0 w-full">
                                <SubHorizontalMenu5 itemsArray={subTabsArray} isState={isState} setState={setState} />
                            </div>
                        </div>
                        <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full left-0 z-50"></div>
                    </div>
                </>

            )}
            
            <DateSearchBar isLeagueSearch={false} />

            <ScrollButton />

            <div className="h-full">
                {isState === 0 ? (
                    <HistoryTable
                    containerBackground= '#f7f9fc'
                    tableData={tableData}
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='42.15rem'
                />   
                ) : isState === 1 ? (
                    <HistoryTable
                    containerBackground= '#f7f9fc'
                    tableData={tableData1}
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='37.75rem'
                    />   
                ) : isState === 2 ? (
                    <PowerLadderBetHistoryPanel isPopup={!showSub} type={0} checkedState={checkedState} setCheckedState={setCheckedState} setPopupOpen={setPopupOpen}/>
                ) : (
                    <KinoLadderBetHistoryPanel isPopup={!showSub} type={0} checkedState={checkedState} setCheckedState={setCheckedState} setPopupOpen={setPopupOpen} />
                )}
                
            </div>

            <SelectAllButton buttonsNumber={3} count={3} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
        </div>
    )
}

export default MinigameBetHistory
