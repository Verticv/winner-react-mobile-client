import React from 'react'

const PointsTransactionTable = () => {
    return (
        <table style={{borderRadius:"1em"}} className="shadow-subNavbar overflow-hidden">
            <thead className="bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td className="w-196px text-center">신청일시</td>
                    <td className="w-235px text-center">사용구분</td>
                    <td className="w-215px text-center">신청포인트</td>
                    <td className="w-242px text-center">처리일시</td>
                    <td className="w-212px text-center">처리상태</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-196px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-235px text-center">보유머니전환</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-215px text-right pr-40px font-robotoRegular">100,000,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-242px text-center font-robotoRegular">2021-06-29 15:48:47</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-212px text-center text-blue-r0056a6">완료</td>
                </tr>
                <tr className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-196px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-235px text-center">보유머니전환</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-215px text-right pr-40px font-robotoRegular">100,000,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-242px text-center font-robotoRegular">2021-06-29 15:48:47</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-212px text-center">취소</td>
                </tr>
                <tr className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-196px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-235px text-center">보유머니전환</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-215px text-right pr-40px font-robotoRegular">50,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-242px text-center font-robotoRegular">2021-06-29 15:48:47</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-212px text-center text-blue-r0056a6">완료</td>
                </tr>
            </tbody>
        </table> 
    )
}

export default PointsTransactionTable
