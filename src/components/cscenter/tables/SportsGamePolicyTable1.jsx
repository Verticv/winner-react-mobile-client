import React from 'react'

const SportsGamePolicyTable1 = ({array}) => {

    const Cell = ({
        type, 
        typeColor, 
        overtime, 
        ruleText, 
        ruleText2 = null
    }) => (
        <tr style={{borderBottomWidth: "0.1875rem"}} className={`bg-gray-fefefe font-spoqa tracking-tight text-gray-r585858  w-full border-b border-gray-dddddd`}>
            <td style={{padding: '0.875rem 0', width: "14.8125rem", paddingLeft: '0rem', paddingRight: '0rem', color: typeColor}} className="font-spoqaMedium text-center">
                {type.split('\n').map((item, i) => 
                    <p style={{marginRight: '-1.5rem'}} key={i}>{item}</p>
                )}
            </td>
            <td style={{padding: '0.875rem 0', width: "14.1875rem", color: overtime === null ? "#FF0000" : overtime === true ? "#dbae00" : "#585858"}} className="font-spoqaMedium text-center">{overtime === null ? "연장포함" : overtime === true ? "연장제외" : "연장없음"}</td>
            <td style={{padding: '0.875rem 0', WebkitTextStroke:"0.2px"}} className="">
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
        <table style={{borderRadius:"1em", margin: '0 1.875rem', fontSize: '2.8125rem'}} className="shadow-subNavbar overflow-hidden">
            <thead style={{borderBottomWidth: "0.1875rem"}} className="bg-gray-fafafa font-spoqaMedium tracking-tight text-gray-r454545 border-b border-gray-dddddd">
                <tr style={{height: '9.375rem'}}>
                    <td style={{width: "14.8125rem"}} className="text-center"><p>베팅타입</p></td>
                    <td style={{width: "14.1875rem"}} className="text-center">적용시간</td>
                    <td className="text-center">베팅룰</td>
                </tr>
            </thead>
            <tbody style={{fontSize: '2.625rem'}} className="w-full text-585858 tracking-tight font-spoqa">       
                                     
                <Cells items={array} />        

            </tbody>
        </table>     
    )
}

export default SportsGamePolicyTable1
