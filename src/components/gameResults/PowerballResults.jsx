import React from 'react'
import PowerballIcon from '../../images/gameResults/minigame/powerball_icon.png'

const PowerballResults = () => {

    const ExampleArray = [
        {id:0, result:"파워볼 홀/짝 (홀)", percentage: "1.95"},
        {id:1, result:"파워볼 숫자 (2)", percentage: "9.00"},
        {id:2, result:"파워볼 구간 A (0~2)", percentage: "3.15"},
        {id:3, result:"파워볼 언오버 (짝 언더)", percentage: "3.15"},
        {id:4, result:"일반볼 홀/짝 (짝)", percentage: "1.95"},
        {id:5, result:"일반볼 구간 (중)", percentage: "2.90"},
    ]

    function Cells({ items, count }) {
        return items.map(item => (
            <div 
                key={item.id} 
                style={{backgroundColor: item.id % 2 === 0 ? "#fefefe" : "#f7f9fc"}} 
                className="flex items-center bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd text-14px font-roboto tracking-tight text-gray-r454545"
            >
                <div style={{marginLeft:"45px", width:"136px"}} className="flex justify-center">2021-06-29 15:45</div>
                <div style={{marginLeft:"140px", width:"90px"}} className="flex justify-center">{count}</div>
                <div style={{marginLeft:"120px", width:"220px"}} className="font-spoqaMedium text-blue-r0056a6 flex justify-center">{item.result}</div>
                <div style={{marginLeft:"130px", width:"74px"}} className="flex justify-center">{item.percentage}</div>
            </div>
        ))
    }

    const Table = ({count}) => (
        <div className="flex flex-col shadow-subNavbar rounded-lg overflow-hidden">
            <div style={{backgroundColor:"#3591d5"}} className="h-56px flex items-center">    
                <img src={PowerballIcon} alt="" className="ml-19px" />
                <span className="text-white font-spoqaMedium text-20px ml-4px pt-3px">파워볼</span>
            </div>
            <Cells items={ExampleArray} count={count} />
        </div>
    )

    return (
        <div style={{borderRadius:"1em"}} className="w-full shadow-subNavbar bg-gray-fafafa">
            <div style={{height:"54px"}} className="w-full flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r454545">
                <div style={{marginLeft:"96px"}}>경기일시</div>
                <div style={{marginLeft:"218px"}}>회차</div>
                <div style={{marginLeft:"250px"}}>결과</div>
                <div style={{marginLeft:"244px"}}>배당률</div>
            </div>
            <div className="px-10px space-y-10px pb-12px">
                <Table count="211" />
                <Table count="212" />
            </div>
        </div>
    )
}

export default PowerballResults
