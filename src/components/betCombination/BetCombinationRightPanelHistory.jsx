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
            style={{width:"301px", height:"149px", borderRadius:"6px"}}
            className="flex flex-col border border-gray-cccccc overflow-hidden"
        >
            <div 
                style={{height:"36px", backgroundColor: "#8494a4"}}
                className="flex flex-shrink-0 items-center pl-7px font-spoqaMedium text-14px h-14px flex items-center text-white tracking-tight"
            >
                {title}
            </div>

            <div 
                style={{
                    background: "linear-gradient(120deg, #ffffff, #e0e2e6",
                    height: "111px"
                }}
                className="relative w-full h-full pl-9px"
            >
                <p className="text-13px font-spoqaMedium tracking-tight text-gray-r454545 h-13px flex items-center mt-15px">
                    {time}
                </p>
                <p 
                    className="text-14px font-spoqaBold tracking-tight text-gray-r454545 h-14px flex items-center mt-8px"
                    style={{color: side === "left" ? "#454545" : "#d52e2e"}}
                >
                    {team1}
                </p>
                <p 
                    className="text-14px font-spoqaBold tracking-tight h-14px flex items-center mt-7px"
                    style={{color: side === "left" ? "#d52e2e" : "#454545"}}
                >
                    {team2}
                </p>
                <p className="text-13px font-spoqaMedium tracking-tight text-gray-r454545 h-14px flex items-center mt-14px">{type}</p>
                <div className="flex absolute bottom-12px right-11px text-13px tracking-tight font-spoqaMedium h-13px items-center text-gray-r454545">
                    <p>{winStatus === "win" ? "승 @" : "패 @"}</p> 
                    <p 
                        className="ml-2px"
                        style={{color: winStatus === "win" ? "#d52e2e" : "#0056a6"}}
                    >
                        {winStatus === "win" ? "2.26" : "3.47"}
                    </p>
                </div>
                <div className="flex absolute top-14px right-10px text-13px tracking-tight font-spoqaMedium h-13px items-center text-blue-r0056a6">
                    대기중
                </div>
            </div>
        </div>
    )

    const ResultsCard = () => (
        <div style={{height:"133px", borderRadius:"6px"}} className="w-full border border-gray-cccccc space-y-9px pt-13px">
            <div className="flex justify-between pl-8px pr-12px">
                <p className="font-spoqaMedium text-14px h-14px flex items-center tracking-tight text-gray-r454545">베팅시간</p>
                <p className="font-roboto text-14px h-14px flex items-center tracking-tight text-gray-r454545">2021-06-29 16:00</p>
            </div>
            <div className="flex justify-between pl-8px pr-12px">
                <p className="font-spoqaMedium text-14px h-14px flex items-center tracking-tight text-gray-r454545">베팅금액</p>
                <p className="font-roboto text-14px h-14px flex items-center tracking-tight text-gray-r454545">5,000</p>
            </div>
            <div className="flex justify-between pl-8px pr-12px">
                <p className="font-spoqaMedium text-14px h-14px flex items-center tracking-tight text-gray-r454545">배당률</p>
                <p className="font-roboto text-14px h-14px flex items-center tracking-tight text-gray-r454545">1.00</p>
            </div>
            <div className="flex justify-between pl-8px pr-12px">
                <p className="font-spoqaMedium text-14px h-14px flex items-center tracking-tight text-gray-r454545">적중예상금액</p>
                <p className="font-roboto text-14px h-14px flex items-center tracking-tight text-gray-r454545">11,000.00</p>
            </div>
            <div className="flex justify-between pl-8px pr-12px">
                <p className="font-spoqaMedium text-14px h-14px flex items-center tracking-tight text-gray-r454545">티켓번호</p>
                <p className="font-roboto text-14px h-14px flex items-center tracking-tight text-blue-r0056a6">189106964</p>
            </div>
        </div>
    )

    return (
        <div>
            <div className="bg-white border-b border-2px border-gray-dddddd pb-12px px-3px flex flex-col">

                <div className="flex flex-col space-y-4px">
                    <HistoryCard team1="FK Haugesund" team2="스트룀스고세 IF" side="left" winStatus="lose" />
                    <HistoryCard title="오스트리아 - 컵" team1="SV Kuchl" team2="FC Blau Weiss Linz" side="right" winStatus="win" />
                    <ResultsCard />
                </div>

            </div>

            <div className="bg-white border-b border-2px border-gray-dddddd pt-12px pb-3px px-3px flex flex-col rounded-b-lg">

                <div className="flex flex-col space-y-4px">
                    <HistoryCard title="러시아 - Liga Pro Women" team1="Malahlt" team2="Granat" side="right" type="배구 - 승무패 (게임)" winStatus="win" />
                    <ResultsCard />
                </div>

            </div>
        </div>
    )
}

export default BetCombinationRightPanelHistory
