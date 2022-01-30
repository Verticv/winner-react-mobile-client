import React from 'react'
import PopupControls from 'components/popups/PopupControls';
import LiveCasinoHistoryDetailPopup from '../myPage/popups/LiveCasinoHistoryDetailPopup';

const HistoryTable = ({tableData, checkedState, isCouponUsage = false, setCheckedState, isPopupOpen, wrapButtonText = false, setPopupOpen, cardHeight = '33.75rem', isButtonGradient = true, hasLeftInput = true, wideDetailButton = false, hasButton = true, containerBackground}) => {

    function Cells({ cards }) {
        const detailButton =  (
            <button style={{width: '10.875rem', height: '10.875rem'}} className="common-button flex items-center justify-center rounded-2xl bg-blue-r0070d9 hover:opacity-75">
                <div className="flex w-full h-full items-center justify-center flex-wrap bg-black rounded-2xl p-10 border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                    <span style={{fontSize: '2.7rem', lineHeight: '1.1'}} className="w-full font-font-spoqaMedium tracking-tight text-white">상세 보기</span>                    
                </div>
            </button>
        )

        const wideDetailButtonComponent =  (
            <button style={{width: '20.25rem', height: '14.0625rem'}} className="common-button flex items-center justify-center rounded-3xl bg-orange-d43712 hover:opacity-75">
                <div className="flex w-full h-full items-center justify-center flex-wrap bg-black rounded-3xl p-10 border border-orange-f07a5f bg-gradient-to-b from-orange-f4603d to-orange-e9451e cursor-pointer">
                    <span style={{fontSize: '2.7rem', lineHeight: '1.1'}} className="w-full font-font-spoqaMedium tracking-tight text-white pt-px">사용하기</span>
                </div>
            </button>
        )

        const handleOnChange = (position) => {
            const updatedCheckedState = checkedState.map((item, index) =>
              index === position ? !item : item
            );
            setCheckedState(updatedCheckedState);
        }; 

        return cards.map((card, index) => (
            <div style={{height: cardHeight, width: `${!hasButton ? '73.875rem' : ''}` , paddingRight: '1.875rem', margin: '1.875rem', marginTop: `${index ? '0': '1.875rem'}`, padding: '2.125rem', paddingLeft: '2.7rem', paddingTop: '2.25rem',background: `${containerBackground && index % 2 ? containerBackground : ''}`}} className="p-12 bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 h-56px border-b border-gray-dddddd flex items-center justify-between shadow-subNavbar rounded-2xl">
                <div style={{marginTop: '-0.5rem'}} className="flex flex-wrap items-center w-full h-full">
                    {hasLeftInput && (
                        <div style={{width: '5.8125rem'}} className="relative text-left">
                            <label className="form-control">
                                <input
                                        className='w-12 h-12'
                                        type="checkbox"
                                        checked={checkedState[index]}
                                        onChange={() => handleOnChange(index)}
                                    />
                            </label>
                        </div>
                    )}
                    <div style={{width: wideDetailButton ? '' : '52rem'}}>
                        {card.map((row, index) => {
                            let firstColumnColor = '#7b7b7b';
                            let secondColumnColor = '#7b7b7b';
                            if (row[0]) {
                                const firstRowKeysName = Object.keys(row[0])
                                const secondRowKeysName = Object.keys(row?.[1] || {})
                                if (firstRowKeysName[0] === '적중/손실금액') {
                                    firstColumnColor = row[0][firstRowKeysName[0]].includes("+") ? "#d52e2e" : "#7b7b7b"
                                }
                                if (firstRowKeysName[0] === '상태') {
                                    firstColumnColor =  row[0][firstRowKeysName[0]] === '승' ? "#d52e2e" : "#7b7b7b"
                                }
                                if (firstRowKeysName[0] === '보너스금액') {
                                    firstColumnColor = row[0][firstRowKeysName[0]].includes("+") ? "#d52e2e" : "#7b7b7b"
                                } 
                                if (firstRowKeysName[0] === '금액') {
                                    firstColumnColor = row[0][firstRowKeysName[0]].includes("+") ? "#d52e2e" : row[0][firstRowKeysName[0]].includes("-") ? '#0056a6' : "#7b7b7b"
                                } 
                                if (secondRowKeysName[0] === '적립포인트') {
                                    secondColumnColor =  '#0056a6'
                                } 
                                if (firstRowKeysName[0] === '쿠폰금액') {
                                    firstColumnColor = '#d52e2e'
                                }
                                if (firstRowKeysName[0] === '처리상태') {
                                    firstColumnColor = row[0][firstRowKeysName[0]] === '사용가능' ? "#ff1237" : "#7b7b7b"
                                }
                                return (
                                    <div key={index} style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', marginBottom: '0.375rem', color: firstColumnColor}} className="w-full font-spoqa text-left text-gray-r7b7b7b">
                                        <span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>{firstRowKeysName[0]} : </span>
                                        <span className='font-spoqa'>
                                            {row[0][firstRowKeysName[0]]}
                                        </span>
                                        {secondRowKeysName?.length > 0 && <><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem', marginLeft: '3.625rem'}}>{secondRowKeysName[0]} : </span><span style={{color: secondColumnColor}} className='text-blue-r0056a6'> {row[1][secondRowKeysName[0]]}</span></>}
                                    </div>
                                )
                            }
                            return <></>
                            
                        })}
                    </div>
                </div>
                {isButtonGradient ? 
                    hasButton && (<div className="text-center">
                        {!isCouponUsage ? (
                            <PopupControls isNotFullScreen buttonChild={wideDetailButton ? wideDetailButtonComponent :detailButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                                <LiveCasinoHistoryDetailPopup setPopupOpen={setPopupOpen} />
                            </PopupControls> 
                        ) : (
                            <>{wideDetailButtonComponent}</>
                        ) }
                    
                </div>) 
                : hasButton &&
                    <button style={{width: '10.875rem', height: '10.875rem', backgroundColor: card[card.length -1].buttonColor || 'red'}} className="common-button flex items-center justify-center rounded-2xl hover:opacity-75">
                        <div style={{padding: `${wrapButtonText ? '2rem' : ''}`}} className="flex w-full h-full items-center justify-center flex-wrap rounded-2xl cursor-pointer">
                            <span style={{fontSize: '2.7rem', lineHeight: '1.1', width: '10.875rem', marginTop: '0.2375rem'}} className="w-full -mt-2 font-font-spoqaMedium tracking-tight text-white"> {card[card.length -1].buttonColor === '#0056a6' ? <div> {card[card.length -1].buttonText ? card[card.length -1].buttonText : <><p>정산</p> <p>완료</p></>} </div> : card[card.length -1].buttonText ||'진행중'} </span>
                        </div>
                    </button>
                }
            </div>
        ))
    }
    return (
        <div style={{borderRadius: "1em"}} className="overflow-hidden">
            <div className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <Cells cards={tableData} />
            </div>
        </div>      
    )
}

export default HistoryTable
