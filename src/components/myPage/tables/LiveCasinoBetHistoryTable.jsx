import PopupControls from 'components/popups/PopupControls';
import React from 'react'
import LiveCasinoHistoryDetailPopup from '../popups/LiveCasinoHistoryDetailPopup';

const LiveCasinoBetHistoryTable = ({array, checkedState, setCheckedState, isPopupOpen, setPopupOpen}) => {

    function Cells({ items }) {

        const detailButton = (
            <button style={{width: '10.875rem', height: '10.875rem'}} className="flex items-center justify-center rounded-lg bg-blue-r0070d9 hover:opacity-75">
                <div style={{width: '10.5rem', height: '10.5rem'}} className="flex items-center justify-center flex-wrap bg-black rounded-lg p-10 border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                    <span style={{fontSize: '2.8125rem', lineHeight: '1.1'}} className="w-full font-font-spoqaMedium tracking-tight text-white pt-px">상세 보기</span>
                    {/* <span style={{fontSize: '2.8125rem'}} className="w-full font-font-spoqaMedium tracking-tight text-white pt-px"></span> */}
                </div>
            </button>
        ); 

        const handleOnChange = (position) => {
            const updatedCheckedState = checkedState.map((item, index) =>
              index === position ? !item : item
            );
            setCheckedState(updatedCheckedState);
        }; 

        return items.map((item, index) => (
            <div style={{height: '33.75rem', paddingRight: '1.875rem', margin: '1.875rem', marginTop: `${index ? '0': '1.875rem'}`}} className="p-12 bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 h-56px border-b border-gray-dddddd flex items-center justify-between shadow-subNavbar rounded-2xl">
                <div className="flex flex-wrap items-center w-full h-full">
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
                    <div style={{width: '52.3125rem'}}>
                        <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅번호 :</span> {item.number}</div>
                        <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅시간 :</span> {item.time}</div>
                        <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>게임종류 :</span> {item.type}</div>
                        <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>게임구분 :</span> {item.name}</div>
                        <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅금액 :</span> {item.amount}</div>
                        <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', color: item.profit.includes("+") ? "#d52e2e" : "#585858"}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>적중/손실금액 :</span> {item.profit}</div>
                        <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', color: item.status === "승" ? "#d52e2e" : "#585858"}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>상태 :</span> {item.status}</div>
                    </div>
                </div>
                <div className="text-center">
                    <PopupControls isNotFullScreen buttonChild={detailButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                        <LiveCasinoHistoryDetailPopup setPopupOpen={setPopupOpen} />
                    </PopupControls> 
                </div>
            </div>
        ))
    }

    return (
        <div style={{borderRadius: "1em"}} className="overflow-hidden">
            <div className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <Cells items={array} />
            </div>
        </div>      
    )
}

export default LiveCasinoBetHistoryTable
