import React from 'react';

const TableHeader = ({smallCard = false}) => {
  return (
    <div style={{paddingTop: '1.5625rem', paddingBottom: '1.375rem'}} className="flex w-full pb-8 font-spoqaMedium text-14px tracking-tight text-gray-r454545">
        <div style={{fontSize: '2.625rem', marginLeft: smallCard ? '11rem' : '12rem'}} className="h-full flex items-center justify-end">승(홈)</div>
        <div style={{fontSize: '2.625rem', marginLeft: smallCard ? '13.5rem' : '14.45rem'}} className="h-full flex items-center justify-end">무</div>
        <div style={{fontSize: '2.625rem', marginLeft: smallCard ? '12.25rem' : '13.2rem'}} className="h-full flex items-center justify-end">패(원정)</div>
        <div style={{fontSize: '2.625rem', marginLeft: smallCard ? '9rem' : '10rem'}} className="h-full flex items-center justify-end">결과</div>
    </div>
  )
}

export default TableHeader;
