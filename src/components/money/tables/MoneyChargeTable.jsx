import React from 'react'

const MoneyChargeTable = () => {
    return (
        <table className="shadow-subNavbar rounded-3xl overflow-hidden">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td style={{width: "245px"}} className="text-center flex-shrink-0">신청일시</td>
                    <td style={{width: "183px"}} className="text-center">충전금액</td>
                    <td style={{width: "200px"}} className="text-center">보너스금액</td>
                    <td style={{width: "204px"}} className="text-center">처리일시</td>
                    <td style={{width: "210px"}} className="text-center">처리상태</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="bg-gray-fefefe rounded-3xl font-spoqa text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                    <td style={{width: "245px", WebkitTextStroke:"0.2px"}} className="font-robotoRegular h-56px text-center flex-shrink-0">2021-06-29 15:45:41</td>
                    <td style={{width: "183px", WebkitTextStroke:"0.2px"}} className="h-56px text-right pr-50px font-robotoRegular">12,000</td>
                    <td style={{width: "200px", color:"#d52e2e", WebkitTextStroke:"0.2px"}} className="h-56px text-right pr-50px font-robotoRegular">+1,000</td>
                    <td style={{width: "204px", WebkitTextStroke:"0.2px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width: "210px", WebkitTextStroke:"0.2px"}} className="h-56px text-center text-blue-r0056a6">완료</td>
                </tr>
                <tr className="bg-gray-fafafa rounded-3xl font-spoqa text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                    <td style={{width: "245px", WebkitTextStroke:"0.2px"}} className="font-robotoRegular h-56px text-center flex-shrink-0">2021-06-29 15:45:41</td>
                    <td style={{width: "183px", WebkitTextStroke:"0.2px"}} className="h-56px text-right pr-50px font-robotoRegular">100,000</td>
                    <td style={{width: "200px", color:"#d52e2e", WebkitTextStroke:"0.2px"}} className="h-56px text-right pr-50px font-robotoRegular">+10,000</td>
                    <td style={{width: "204px", WebkitTextStroke:"0.2px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width: "210px", WebkitTextStroke:"0.2px"}} className="h-56px text-center">취소</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqa text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                    <td style={{width: "245px", WebkitTextStroke:"0.2px"}} className="font-robotoRegular h-56px text-center flex-shrink-0">2021-06-29 15:45:41</td>
                    <td style={{width: "183px", WebkitTextStroke:"0.2px"}} className="h-56px text-right pr-50px font-robotoRegular">50,000</td>
                    <td style={{width: "200px", color:"#d52e2e", WebkitTextStroke:"0.2px"}} className="h-56px text-right pr-50px font-robotoRegular">+5,000</td>
                    <td style={{width: "204px", WebkitTextStroke:"0.2px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width: "210px", WebkitTextStroke:"0.2px"}} className="h-56px text-center text-blue-r0056a6">완료</td>
                </tr>
            </tbody>
        </table>
    )
}

export default MoneyChargeTable
