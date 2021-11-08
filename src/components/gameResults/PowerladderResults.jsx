import React from 'react'
import ClockIcon from '../../images/myPage/betHistory/clock.png'

const PowerladderResults = ({title="파워사다리", icon}) => {

    const ExampleArray = [
        {id:0, team1: "홀 [211회]", team2: "[211회] 짝", bet:"left"},
        {id:1, team1: "3줄 [211회]", team2: "[211회] 4줄", bet:"left"},
        {id:2, team1: "좌 [211회]", team2: "[211회] 우", bet:"right"},
    ]
    const ExampleArray2 = [
        {id:0, team1: "홀 [211회]", team2: "[211회] 짝", bet:"right"},
        {id:1, team1: "3줄 [211회]", team2: "[211회] 4줄", bet:"left"},
        {id:2, team1: "좌 [211회]", team2: "[211회] 우", bet:"right"},
    ]
    const ExampleArray3 = [
        {id:0, team1: "홀 [211회]", team2: "[211회] 짝", bet:"left"},
        {id:1, team1: "3줄 [211회]", team2: "[211회] 4줄", bet:"left"},
        {id:2, team1: "좌 [211회]", team2: "[211회] 우", bet:"left"},
    ]

    const ExampleArray4 = [
        {id:0, team1: "언더 [211회]", team2: "[211회] 오버", bet:"left"},
        {id:1, team1: "홀 [211회]", team2: "[211회] 짝", bet:"right"},
    ]
    const ExampleArray5 = [
        {id:0, team1: "언더 [211회]", team2: "[211회] 오버", bet:"right"},
        {id:1, team1: "홀 [211회]", team2: "[211회] 짝", bet:"left"},
    ]
    const ExampleArray6 = [
        {id:0, team1: "언더 [211회]", team2: "[211회] 오버", bet:"left"},
        {id:1, team1: "홀 [211회]", team2: "[211회] 짝", bet:"left"},
    ]

    const CardContent = ({
        bet, 
        team1, 
        team2, 
        stat1 ="1.95", 
        stat3 ="1.95",
    }) => (
        <div className="flex items-center w-full h-56px bg-gray-fefefe border-b border-gray-dddddd">
            <div style={{width:"77px"}} className="flex justify-center font-roboto text-14 tracking-tight text-gray-r454545">211</div>
            <div className="flex space-x-4px">
                <button 
                    style={{
                        width: "424px",
                        textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
                        backgroundColor: bet === "left" ? "#cb4343" : "#dddddd"
                    }} 
                    className="flex items-center justify-center h-36px rounded-lg"
                >
                    <div 
                    style={{width: "422px"}}
                    className={`${
                        bet === "left" 
                        ? "text-white border-red-ff7982 from-red-ff535f via-red-ff535f to-red-ee4e5a" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"} 
                        flex items-center justify-between h-34px rounded-lg border bg-gradient-to-b cursor-pointer px-10px pt-px`
                    }>
                        <span className="truncate w-108px text-left font-spoqaMedium tracking-tight text-14px">{team1}</span>
                        <div className="flex items-center space-x-5px">
                            <span className="font-roboto tracking-tight text-14px">{stat1}</span>
                        </div>
                    </div>
                </button>

                <button
                    style={{textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",}} 
                    className={`flex group items-center justify-center w-81px h-36px rounded-lg bg-gray-dddddd ${bet === "middle" ? "bg-red-cb4343" : "bg-gray-dddddd"}`}
                >
                    <div className={`${
                        bet === "middle" 
                        ? "text-white border-red-ff7982 from-red-ff535f via-red-ff535f to-red-ee4e5a" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"}
                        pt-px flex items-center justify-center h-34px w-79px rounded-lg border border-white bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb cursor-pointer`}
                    >
                        <span className="font-spoqaMedium text-gray-r454545 tracking-tight text-14px">VS</span>
                    </div>
                </button>

                <button style={{width: "424px"}} className={`${bet === "right" ? "bg-red-cb4343" : "bg-gray-dddddd"} flex group items-center justify-center h-36px rounded-lg bg-gray-dddddd`}>
                    <div
                    style={{
                        width: "422px",
                        textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",
                        backgroundColor: bet === "right" ? "#cb4343" : "#dddddd"
                    }} 
                    className={`${
                        bet === "right" 
                        ? "text-white border-red-ff7982 from-red-ff535f via-red-f8515d to-red-ee4e5a" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"} 
                        pt-px flex items-center justify-between h-34px rounded-lg border border-white bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb cursor-pointer px-10px`}
                    >
                        <div className="flex items-center space-x-5px">
                            <span className="font-roboto tracking-tight text-14px">{stat3}</span>
                        </div>
                        <span className="truncate w-108px font-spoqaMedium tracking-tight text-14px text-right">{team2}</span>
                    </div>
                </button>
            </div>
        </div>
    )

    function Cells({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                style={{backgroundColor: item.id % 2 === 0 ? "#fefefe" : "#f7f9fc"}} 
                className="flex items-center bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd text-14px font-roboto tracking-tight text-gray-r454545"
            >
                <CardContent bet={item.bet} team1={item.team1} team2={item.team2} />
            </div>
        ))
    }

    const Table = ({array}) => (
        <div className="flex flex-col shadow-subNavbar rounded-lg overflow-hidden">
            <div style={{backgroundColor:"#3591d5"}} className="h-56px flex items-center justify-between pr-20px">    
                <div className="flex items-center">
                    <img src={icon} alt="" className="ml-19px object-none" />
                    <span className="text-white font-spoqaMedium text-20px ml-4px pt-3px">{title}</span>
                </div>
                

                <div className="flex items-center">
                    <img src={ClockIcon} alt="" />
                    <span 
                        style={{color: "#dae8f5"}}
                        className="ml-5px font-spoqa text-16px tracking-tight text-white"
                    >
                        2021-06-29 15:45
                    </span>
                </div>
            </div>
            <Cells items={array} />
        </div>
    )

    return (
        <div style={{borderRadius:"1em"}} className="w-full shadow-subNavbar bg-gray-fafafa">
            <div style={{height:"54px"}} className="w-full flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r454545">
                <div style={{marginLeft:"36px"}}>회차</div>
                <div style={{marginLeft:"221px"}}>승(홈)</div>
                <div style={{marginLeft:"233px"}}>VS</div>
                <div style={{marginLeft:"235px"}}>패(원정)</div>
            </div>
            <div className="px-10px space-y-10px pb-12px">
                <Table array={title === "스피드키노" ? ExampleArray4 : ExampleArray} />
                <Table array={title === "스피드키노" ? ExampleArray5 : ExampleArray2} />
                <Table array={title === "스피드키노" ? ExampleArray6 : ExampleArray3} />
            </div>
        </div>
    )
}

export default PowerladderResults
