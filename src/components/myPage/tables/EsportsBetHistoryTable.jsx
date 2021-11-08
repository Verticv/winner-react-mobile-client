import React from 'react'

const EsportsBetHistoryTable = () => {

    return (
        <div style={{borderRadius: "1em"}} className="shadow-subNavbar overflow-hidden">
            <div style={{height:"57px"}} className="flex items-center bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd pt-px">
                <div style={{width: "92px"}} className="text-center">선택</div>
                <div style={{width: "74px"}} className="text-center">베팅번호</div>
                <div style={{width: "183px"}} className="text-center">베팅시간</div>
                <div style={{width: "146px"}} className="text-center">게임종류</div>
                <div style={{width: "115px"}} className="text-center">게임구분</div>
                <div style={{width: "119px"}} className="text-center">베팅금액</div>
                <div style={{width: "140px"}} className="text-center">적중/손실금액</div>
                <div style={{width: "87px"}} className="text-center">상태</div>
                <div style={{width: "90px"}} className="text-center pr-17px">보기</div>
            </div>
            <div className="w-full text-gray-r585858 text-14px tracking-tight font-spoqa h-56px items-center flex h-full justify-center">
                <div style={{WebkitTextStroke:"0.2px"}} className="flex items-center justify-center h-56px">베팅내역이 없습니다.</div>
            </div>
        </div>      
    )
}

export default EsportsBetHistoryTable
