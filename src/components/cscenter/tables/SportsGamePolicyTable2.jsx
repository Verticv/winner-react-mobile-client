import React from 'react'

const SportsGamePolicyTable2 = ({array}) => {

    function Cells({ items }) {     
        return items.map((item, index) => (
            <tr style={{borderBottomWidth: `${items.length - 1 !== index? "0.1875rem" : ""}`}} className="bg-gray-fefefe font-spoqa tracking-tight text-gray-r585858 w-full border-b border-gray-dddddd">
                <td style={{padding: '0.875rem 0', width: "29.375rem", paddingLeft: '2.5rem', paddingRight: '1.5rem'}} className="font-spoqaMedium  text-center">
                    <span style={{color: item.color}}>{item.title}</span>
                    {item.title2 && (
                        <span style={{marginLeft: '5.3125rem'}}>{item.title2}</span>
                    )}
                </td>
                <td style={{padding: '0.875rem 0', WebkitTextStroke:"0.2px"}} className="">
                    <p>{item.text}</p>
                    <p>{item.text2}</p>
                </td>
            </tr>
        )
    )}

    
    return (
        <table style={{borderRadius:"1em",margin: '0 1.875rem', marginTop: '2.5rem' ,fontSize: '2.8125rem'}} className="shadow-subNavbar overflow-hidden">
            <thead style={{borderBottomWidth:  "0.1875rem"}} className="bg-gray-fafafa font-spoqaMedium tracking-tight text-gray-r454545  border-b border-gray-dddddd">
                <tr style={{height: '9.375rem'}}>
                    <td style={{width: "29.375rem"}} className="text-center">타입및 경기시간</td>
                    <td className="text-center">결과적용기준</td>
                </tr>
            </thead>
            <tbody style={{fontSize: '2.625rem'}} className="w-full text-585858 tracking-tight font-spoqa">
                <Cells items={array} />
            </tbody>
        </table>     
    )
}

export default SportsGamePolicyTable2
