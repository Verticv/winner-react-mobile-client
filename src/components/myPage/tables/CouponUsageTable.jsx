import PopupControls from 'components/popups/PopupControls';
import React from 'react'
import LiveCasinoHistoryDetailPopup from '../popups/LiveCasinoHistoryDetailPopup';

const CouponUsageTable = ({array, titleArray, checkedState, setCheckedState, isPopupOpen, setPopupOpen, cardHeight = '33.75rem', isButtonGradient = true, hasLeftInput = true, hasExtraColumns = false, hasButton = true, containerBackground}) => {

    function Cells({ items, titles }) {
        const detailButton =  (
            <button style={{width: '20.25rem', height: '14.0625rem', padding: '1px'}} className="flex items-center justify-center rounded-3xl bg-orange-d43712 hover:opacity-75">
                <div className="flex w-full h-full items-center justify-center flex-wrap bg-black rounded-3xl p-10 border border-orange-f07a5f bg-gradient-to-b from-orange-f4603d to-orange-e9451e cursor-pointer">
                    <span style={{fontSize: '2.8125rem', lineHeight: '1.1'}} className="w-full font-font-spoqaMedium tracking-tight text-white pt-px">사용하기</span>
                    {/* <span style={{fontSize: '2.8125rem'}} className="w-full font-font-spoqaMedium tracking-tight text-white pt-px"></span> */}
                </div>
            </button>
        )

        const handleOnChange = (position) => {
            const updatedCheckedState = checkedState.map((item, index) =>
              index === position ? !item : item
            );
            setCheckedState(updatedCheckedState);
        }; 

        return items.map((item, index) => (
            <div style={{height: cardHeight, width: `${!hasButton ? '73.875rem' : ''}` , paddingRight: '1.875rem', margin: '1.875rem', marginTop: `${index ? '0': '1.0625rem'}`, background: `${containerBackground && index % 2 ? containerBackground : ''}`}} className="p-12 bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 h-56px border-b border-gray-dddddd flex items-center justify-between shadow-subNavbar rounded-2xl">
                <div style={{marginTop: '-0.5rem'}} className="flex flex-wrap items-center w-full h-full">
                    {hasLeftInput && (
                        <div style={{width: '5.8125rem'}} className="relative text-left pt-7px">
                            <label className="form-control">
                                <input
                                        className='w-12 h-12'
                                        type="checkbox"
                                        checked={checkedState[item.id]}
                                        onChange={() => handleOnChange(item.id)}
                                    />
                            </label>
                        </div>
                    )}
                    <div style={{width: ''}}>
                        {titles?.[0] && (<div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', color: titles?.[0]?.isRed ? "#d52e2e" : ""}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>{titles[0].text} : </span> {item.number}</div>)} 
                        {titles?.[1] && (<div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', color: titles?.[1]?.isRed ? "#d52e2e" : ""}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>{titles[1].text} : </span> {item.time}</div>)} 
                        {titles?.[2] && (
                        <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', color: titles?.[3]?.isRed ? item.type?.includes("+") ? "#d52e2e" : item.type.includes("-") ? "#0056a6" : "#7b7b7b" : "#7b7b7b"}} className="w-full font-spoqa text-left text-gray-r7b7b7b">
                            <span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>{titles[2].text} : </span>
                             {item.type}
                             {hasExtraColumns && <><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem', marginLeft: '3.625rem'}}>종류 :</span> 스포츠</>}
                        </div>
                        )}
                        {titles?.[3] && (
                        <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', color: '#ff1237'}} className="w-full font-spoqa text-left text-gray-r7b7b7b">
                            <span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>{titles[3].text} : </span>
                             {item.name}
                             {hasExtraColumns && <><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem', marginLeft: '3.625rem'}}>보너스퍼센트 :</span> 100%</>}
                        </div>
                        )}
                        {titles?.[4] && (
                        <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', color: titles?.[3]?.isRed ? item.amount.includes("+") ? "#d52e2e" : item.amount.includes("-") ? "#0056a6" : "#7b7b7b" : "#7b7b7b"}} className="w-full font-spoqa text-left text-gray-r7b7b7b">
                            <span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>{titles[4].text} : </span>
                             {item.amount}
                             {hasExtraColumns && <><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem', marginLeft: '3.625rem'}}>적립포인트 : </span><span className='text-blue-r0056a6'> 50P</span></>}
                        </div>
                        )} 
                        {titles?.[5] && (<div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', color: item.profit.includes("+") ? "#d52e2e" : "#7b7b7b"}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>{titles[5].text} : </span> {item.profit}</div>)} 
                        {titles?.[6] && (<div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', color: item.status === "승" ? "#d52e2e" : "#585858"}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>{titles[6].text} : </span> {item.status}</div>)} 
                    </div>
                </div>
                {isButtonGradient ? 
                    hasButton && (<div className="text-center">
                    <PopupControls isNotFullScreen buttonChild={detailButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                        <LiveCasinoHistoryDetailPopup setPopupOpen={setPopupOpen} />
                    </PopupControls> 
                </div>) 
                 : hasButton &&
                    <button style={{width: '10.875rem', height: '10.875rem',  padding: '1px', backgroundColor: item?.buttonColor || '#0056a6'}} className="flex items-center justify-center rounded-3xl hover:opacity-75">
                        <div className="flex w-full h-full items-center justify-center flex-wrap rounded-3xl cursor-pointer">
                            <span style={{fontSize: '2.8125rem', lineHeight: '1.1', width: '10.875rem'}} className="w-full font-font-spoqaMedium tracking-tight text-white pt-px"> {item?.buttonColor === '#0056a6' ? <div> {item.buttonText ? item.buttonText : <><p>정산</p> <p>완료</p></>} </div> : item.buttonText ||'진행중'} </span>
                            {/* <span style={{fontSize: '2.8125rem'}} className="w-full font-font-spoqaMedium tracking-tight text-white pt-px"></span> */}
                        </div>
                    </button>
                }
                
            </div>
        ))
    }
    return (
        <div style={{borderRadius: "1em"}} className="overflow-hidden">
            <div className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <Cells items={array} titles={titleArray} />
            </div>
        </div>      
    )
}

export default CouponUsageTable
