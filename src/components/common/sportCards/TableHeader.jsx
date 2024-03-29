import React from 'react';

const TableHeader = ({smallCard = false, isMinigame = false, middleText="무"}) => {

  if (isMinigame === true) return (
    <div style={{paddingTop: '1.5625rem', paddingBottom: '1.375rem'}} className="flex w-full pb-8 font-spoqaMedium text-14px tracking-tight text-gray-r454545">
        <div style={{fontSize: '2.625rem', marginLeft: smallCard ? '11rem' : '2rem'}} className="h-full flex items-center justify-end">회차</div>
        <div style={{fontSize: '2.625rem', marginLeft: smallCard ? '13.5rem' : '11.3rem'}} className="h-full flex items-center justify-end">승(홈)</div>
        <div style={{fontSize: '2.625rem', marginLeft: smallCard ? '12.25rem' : '14rem'}} className="h-full flex items-center justify-end">VS</div>
        <div style={{fontSize: '2.625rem', marginLeft: smallCard ? '9rem' : '14.2rem'}} className="h-full flex items-center justify-end">패(원정)</div>
    </div>
  ) 
  else return (
    <div style={{paddingTop: '1.5625rem', paddingBottom: '1.375rem'}} className="flex w-full pb-8 font-spoqaMedium text-14px tracking-tight text-gray-r454545">
        <div style={{fontSize: '2.625rem', marginLeft: smallCard ? '11rem' : '12rem'}} className="h-full flex items-center justify-end">승(홈)</div>
        <div style={{fontSize: '2.625rem', marginLeft: smallCard ? '13.5rem' : middleText==="VS" ? '13.75rem' : '14.45rem'}} className="h-full flex items-center justify-end">{middleText}</div>
        <div style={{fontSize: '2.625rem', marginLeft: smallCard ? '12.25rem' : '13.2rem'}} className="h-full flex items-center justify-end">패(원정)</div>
        <div style={{fontSize: '2.625rem', marginLeft: smallCard ? '9rem' : '10rem'}} className="h-full flex items-center justify-end">결과</div>
    </div>
  )
}

export default TableHeader;
