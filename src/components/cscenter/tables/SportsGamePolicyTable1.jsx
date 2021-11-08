import React from 'react'

const SportsGamePolicyTable1 = ({array}) => {

    const Cell = ({
        type, 
        typeColor, 
        overtime, 
        ruleText, 
        ruleText2 = null
    }) => (
        <tr className={`${ruleText2 ? "h-73px" : "h-56px"} bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858  w-full border-b border-gray-dddddd`}>
            <td style={{width: "162px", color: typeColor}} className="font-spoqaMedium w-235px h-56px text-center">{type}</td>
            <td style={{width: "86px", color: overtime === null ? "#FF0000" : overtime === true ? "#dbae00" : "#585858"}} className="font-spoqaMedium h-56px text-center">{overtime === null ? "연장포함" : overtime === true ? "연장제외" : "연장없음"}</td>
            <td style={{width: "792px", WebkitTextStroke:"0.2px"}} className="h-56px pl-20px -space-y-4px">
                <p>{ruleText}</p>
                <p>{ruleText2}</p>
            </td>
        </tr>
    )

    function Cells({ items }) {     
        return items.map(item => (
            <Cell type={item.type} typeColor={item.typeColor} overtime={item.overtime} ruleText={item.ruleText} ruleText2={item.ruleText2} />           
        )
    )}

    return (
        <table style={{borderRadius:"1em"}} className="shadow-subNavbar overflow-hidden">
            <thead className="bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td style={{width: "162px"}} className="text-center">베팅타입</td>
                    <td style={{width: "86px"}} className="w-170px text-center">적용시간</td>
                    <td style={{width: "792px"}} className="w-170px text-center">베팅룰</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">       
                                     
                <Cells items={array} />        

            </tbody>
        </table>     
    )
}

export default SportsGamePolicyTable1
