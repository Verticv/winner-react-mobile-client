import React from 'react'

const SportsGamePolicyTable2 = ({array}) => {

    function Cells({ items }) {     
        return items.map(item => (
            <tr className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                <td style={{width: "248px"}} className="font-spoqaMedium h-56px text-center pl-20px flex justify-around items-center">
                    <p style={{color: item.color}}>{item.title}</p>
                    {item.title2 && (
                        <p>{item.title2}</p>
                    )}
                </td>
                <td style={{width: "792px", WebkitTextStroke:"0.2px"}} className="h-56px pl-20px -space-y-4px">
                    <p>{item.text}</p>
                    <p>{item.text2}</p>
                </td>
            </tr>
        )
    )}

    
    return (
        <table style={{borderRadius:"1em"}} className="shadow-subNavbar overflow-hidden">
            <thead className="bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td style={{width: "248px"}} className="text-center pl-20px">타입및 경기시간</td>
                    <td style={{width: "792px"}} className="text-center">결과적용기준</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <Cells items={array} />
            </tbody>
        </table>     
    )
}

export default SportsGamePolicyTable2
