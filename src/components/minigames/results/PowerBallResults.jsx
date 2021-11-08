import React from 'react'

const PowerBallResults = ({array}) => {

    function Cells({ items }) {
        return items.map(item => (
            <tr 
                style={{height: "62px", backgroundColor: item.count % 2 === 0 ? "#ffffff" : "#f7f9fc"}} 
                className="rounded-3xl font-spoqa text-14px tracking-tight text-gray-r585858 h-62px w-full border-b border-gray-dddddd"
            >
                <td style={{width: "156px"}} className="text-center">{item.count}</td>
                <td style={{width: "226px"}} className="text-center">{item.chosenNum}</td>
                <td style={{width: "123px"}} className="text-center">{item.numberSum}</td>
                <td style={{width: "173px", color:"#e9441d"}} className="text-center">{item.odd ? "홀" : "짝"}</td>
                <td style={{width: "110px"}} className="text-center">{item.powerball}</td>
                <td style={{width: "172px", color:"#0056a6"}} className="text-center">{item.powerballOdd ? "홀" : "짝"}</td>
                <td style={{width: "132px"}} className="text-center">{item.size}</td>
                <td style={{width: "172px"}} className="text-center">{item.range}</td>
            </tr>
        ));
    }

    return (
        <table className="w-full">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td style={{width: "156px"}} className="text-center">회차</td>
                    <td style={{width: "226px"}} className="text-center">당첨번호결과</td>
                    <td style={{width: "123px"}} className="text-center">숫자 합</td>
                    <td style={{width: "173px"}} className="text-center">홀/짝</td>
                    <td style={{width: "110px"}} className="text-center">파워볼</td>
                    <td style={{width: "172px"}} className="text-center">파워볼 홀/짝</td>
                    <td style={{width: "132px"}} className="text-center">대/중/소</td>
                    <td style={{width: "172px"}} className="text-center">파워볼 구간</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                <Cells items={array} />
            </tbody>
        </table>      
    )
}

export default PowerBallResults
