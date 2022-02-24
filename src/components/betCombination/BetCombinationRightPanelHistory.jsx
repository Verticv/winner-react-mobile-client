import React from 'react'

const BetCombinationRightPanelHistory = () => {

    const HistoryCard = ({
        title = "노르웨이 - Eliteserien",
        team1 = "FK Haugesund",
        team2 = "스트룀스고세 IF",
        side = "left",
        type = "축구 - 승무패 (게임)",
        time = "2021-06-29 16:00",
        winStatus = "lose"
    }) => (
        <div 
            style={{height:"25.5rem", borderRadius:"1.3125rem", borderWidth: '0.1875rem', fontSize: '2.625rem', marginBottom: '0.375rem'}}
            className="flex flex-col border border-gray-cccccc overflow-hidden"
        >
            <div 
                style={{height:"5.9375rem", backgroundColor: "#8494a4", paddingLeft: '1.625rem'}}
                className="flex flex-shrink-0 items-center font-spoqaMedium flex items-center text-white tracking-tight pt-1"
            >
                {title}
            </div>

            <div 
                style={{
                    background: "linear-gradient(120deg, #ffffff, #e0e2e6)",
                    paddingLeft: '1.75rem'
                }}
                className="relative w-full h-full"
            >
                <p style={{fontSize: '2.4375rem'}} className="font-spoqaMedium tracking-tight text-gray-r454545 flex items-center mt-5">
                    {time}
                </p>
                <p 
                    className="font-spoqaBold  tracking-tight text-gray-r454545 flex items-center"
                    style={{color: side === "left" ? "#454545" : "#d52e2e"}}
                >
                    {team1}
                </p>
                <p 
                    className="font-spoqaBold mt-1 tracking-tight flex items-center"
                    style={{color: side === "left" ? "#d52e2e" : "#454545"}}
                >
                    {team2}
                </p>
                <p className="font-spoqaMedium mt-4 tracking-tight text-gray-r454545 flex items-center">{type}</p>
                <div style={{bottom: '1.375rem', right: '1.8125rem'}} className="flex absolute tracking-tight font-spoqaMedium items-center text-gray-r454545">
                    <p>{winStatus === "win" ? "승 @" : "패 @"}</p> 
                    <p 
                        className="ml-3"
                        style={{color: winStatus === "win" ? "#d52e2e" : "#0056a6"}}
                    >
                        {winStatus === "win" ? "2.26" : "3.47"}
                    </p>
                </div>
                <div style={{top: '1.25rem',  right: '1.8125rem'}} className="flex absolute tracking-tight font-spoqaMedium items-center text-blue-r0056a6">
                    대기중
                </div>
            </div>
        </div>
    )

    const ResultsCard = () => (
        <div style={{height:"24rem", borderRadius:"1.3125rem", fontSize: '2.4375rem', borderWidth: '0.1875rem',background: "linear-gradient(120deg, #ffffff, #e0e2e6)",}} className="w-full px-7 border border-gray-cccccc">
            <div className="flex justify-between mt-8">
                <p className="font-spoqaMedium flex items-center tracking-tight text-gray-r454545">베팅시간</p>
                <p className="font-roboto flex items-center tracking-tight text-gray-r454545">2021-06-29 16:00</p>
            </div>
            <div className="flex justify-between mt-2">
                <p className="font-spoqaMedium flex items-center tracking-tight text-gray-r454545">베팅금액</p>
                <p className="font-roboto flex items-center tracking-tight text-gray-r454545">5,000</p>
            </div>
            <div className="flex justify-between mt-2">
                <p className="font-spoqaMedium flex items-center tracking-tight text-gray-r454545">배당률</p>
                <p className="font-roboto flex items-center tracking-tight text-gray-r454545">1.00</p>
            </div>
            <div className="flex justify-between mt-2">
                <p className="font-spoqaMedium flex items-center tracking-tight text-gray-r454545">적중예상금액</p>
                <p className="font-roboto flex items-center tracking-tight text-gray-r454545">11,000.00</p>
            </div>
            <div className="flex justify-between mt-2">
                <p className="font-spoqaMedium flex items-center tracking-tight text-gray-r454545">티켓번호</p>
                <p className="font-roboto flex items-center tracking-tight text-blue-r0056a6">189106964</p>
            </div>
        </div>
    )

    return (
        <div>
            <div className="bg-white flex flex-col w-full">

                <div style={{paddingLeft: '1.875rem', paddingRight: '1.875rem'}} className="flex flex-col">
                    <HistoryCard team1="FK Haugesund" team2="스트룀스고세 IF" side="left" winStatus="lose" />
                    <HistoryCard title="오스트리아 - 컵" team1="SV Kuchl" team2="FC Blau Weiss Linz" side="right" winStatus="win" />
                    <ResultsCard />
                </div>

            </div>

            <div className='bg-gray-dddddd w-full' style={{height: '0.1875rem', margin: '1.875rem 0'}}></div>

            <div style={{paddingLeft: '1.875rem', paddingRight: '1.875rem'}} className="bg-white flex flex-col rounded-b-lg">

                <div className="flex flex-col">
                    <HistoryCard title="러시아 - Liga Pro Women" team1="Malahlt" team2="Granat" side="right" type="배구 - 승무패 (게임)" winStatus="win" />
                    <ResultsCard />
                </div>

            </div>
        </div>
    )
}

export default BetCombinationRightPanelHistory
