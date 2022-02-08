import React from 'react'

const PowerLadderResults = () => {

    const array = [
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '4',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '4',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '4',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '4',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '4',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '4',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '4',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '4',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '4',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumber: '4',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '홀',
            departureNumber: '3',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
    ]


    function Cells({ items }) {
        return items.map((item, index) => (
            <div 
                style={{height: "7.09375rem", borderBottomWidth: '0.1875rem', fontSize: '2.25rem', backgroundColor: index % 2 === 0 ? "#ffffff" : "#fafafa"}} 
                className="flex items-center font-spoqa tracking-tight text-gray-r585858 w-full border-b border-gray-efefef"
            >
                <div className="flex w-1/2 justify-center items-center">{item.month} [{item.roundNumber}]</div>
                <div className="flex w-1/2 justify-center items-center">
                    <div 
                        style={{width: "4.5rem", height: "4.5rem",fontSize: '2.25rem' ,backgroundColor: item.departureNumberColor}}
                        className="relative pt-2 rounded-full w-1/2 text-white font-spoqaMedium tracking-tight flex items-center justify-center"
                    >
                        {item.departureText}
                        <div style={{width: '2.25rem', height: '2.25rem', fontSize: '1.5rem', top: '-0.5rem' ,right: item.departureNumberDirection === "right" ? "-0.75rem" : "",  left: item.departureNumberDirection === "left" ? "-0.75rem" : ""}} className={`absolute rounded-full bg-black flex items-center justify-center`}
                        >{item.departureNumber}</div>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <div className="w-full p-12 overflow-y-scroll h-screen pb-64">
            <div className="font-spoqaMedium tracking-tight text-gray-r454545">
                <div style={{fontSize: '2.25rem'}} className='flex w-full'>
                    <div style={{height: '5.25rem', marginRight:'0.1875rem', borderTopLeftRadius: '0.625rem', borderBottomLeftRadius: '0.625rem'}} className="flex w-1/2 justify-center items-center bg-gray-efefef">회차</div>
                    <div style={{height: '5.25rem'}} className="flex w-1/2 justify-center items-center bg-gray-efefef">좌우 출발 3/4줄</div>
                </div>
            </div>
            <div className="w-full  text-585858 text-14px tracking-tight font-spoqaMedium ">
                <Cells items={array} />
            </div>
        </div>      
    )
}

export default PowerLadderResults
