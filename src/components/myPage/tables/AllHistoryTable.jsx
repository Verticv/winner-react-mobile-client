import PopupControls from 'components/popups/PopupControls';
import React from 'react'
import LiveCasinoHistoryDetailPopup from '../popups/LiveCasinoHistoryDetailPopup';

const AllHistoryTable = ({array, checkedState, setCheckedState, isPopupOpen, setPopupOpen}) => {

    function Cells({ items }) {

        const detailButton = (
            <button 
                style={{height:"29px", width: "73px", backgroundColor:"#e9441d"}} 
                className="rounded-full text-white font-spoqaMedium text-14px tracking-tight pt-2px hover:opacity-75"
            >
                상세보기
            </button>
        ) 

        const handleOnChange = (position) => {
            const updatedCheckedState = checkedState.map((item, index) =>
              index === position ? !item : item
            );
            setCheckedState(updatedCheckedState);
        }; 

        return items.map(item => (
            <tr  className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                <td style={{width: "92px"}} className="text-center pt-7px">
                    <input
                        type="checkbox"
                        checked={checkedState[item.id]}
                        onChange={() => handleOnChange(item.id)}
                    />
                </td>
                <td style={{width: "74px", WebkitTextStroke:"0.2px"}} className="font-robotoRegular text-center">{item.number}</td>
                <td style={{width: "183px", WebkitTextStroke:"0.2px"}} className="font-robotoRegular text-center">{item.time}</td>
                <td style={{width: "146px", WebkitTextStroke:"0.2px"}} className="text-center">{item.type}</td>
                <td style={{width: "115px", WebkitTextStroke:"0.2px"}} className="text-center">{item.name}</td>
                <td style={{width: "119px", WebkitTextStroke:"0.2px"}} className="font-robotoRegular text-right">{item.amount}</td>
                <td style={{width: "140px", WebkitTextStroke:"0.2px", color: item.profit.includes("+") ? "#d52e2e" : "#585858"}} className="font-robotoRegular text-right">{item.profit}</td>
                <td style={{width: "87px", WebkitTextStroke:"0.2px", color: item.status === "승" ? "#d52e2e" : "#585858"}} className="text-center">{item.status}</td>
                <td style={{width: "90px"}} className="text-center pr-17px">
                    <PopupControls buttonChild={detailButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                        <LiveCasinoHistoryDetailPopup setPopupOpen={setPopupOpen} />
                    </PopupControls> 
                </td>
            </tr>
        ))
    }

    return (
        <table style={{borderRadius: "1em"}} className="shadow-subNavbar overflow-hidden">
            <thead className="bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td style={{width: "92px"}} className="text-center">선택</td>
                    <td style={{width: "74px"}} className="text-center">베팅번호</td>
                    <td style={{width: "183px"}} className="text-center">베팅시간</td>
                    <td style={{width: "146px"}} className="text-center">게임종류</td>
                    <td style={{width: "115px"}} className="text-center">게임구분</td>
                    <td style={{width: "119px"}} className="text-center">베팅금액</td>
                    <td style={{width: "140px"}} className="text-center">적중/손실금액</td>
                    <td style={{width: "87px"}} className="text-center">상태</td>
                    <td style={{width: "90px"}} className="text-center pr-17px">보기</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <Cells items={array} />
            </tbody>
        </table>      
    )
}

export default AllHistoryTable
