import React from 'react'

const CouponUsageTable = () => {

    const ExampleArray = [
        {
            id: 0,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 1,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 2,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 3,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 4,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 5,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 6,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 7,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 8,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 9,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
    ]

    const UseButton = () => (
        <button className="w-73px h-29px bg-red-e9441d rounded-full flex justify-center items-center hover:opacity-75">
            <span className="text-white text-14px font-spoqaMedium tracking-tight pt-2px">사용하기</span>
        </button>
    )

    function Cells({ items }) {
        return items.map(item => (
            <tr 
                style={{backgroundColor: item.id % 2 === 0 ? "#fefefe" : "#f8f9fb"}} 
                className="font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd"
            >
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-313px text-center">{item.name}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-172px text-right text-red-e9441d pr-20px font-robotoRegular">{item.amount}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-111px text-center">{item.username}</td>
                    <td style={{color: "#ff1237", WebkitTextStroke:"0.2px"}} className="w-108px text-center">{item.status}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-122px text-center font-robotoRegular">{item.date}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-111px text-center font-robotoRegular">{item.expireDate}</td>
                    <td className="w-103px pl-13px"><UseButton /></td>
                </tr>
        ));
    }
    

    return (
        <table style={{borderRadius: "1em"}} className="shadow-subNavbar overflow-hidden">
            <thead className="bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td className="w-313px text-center">쿠폰명</td>
                    <td className="w-172px text-center">쿠폰금액</td>
                    <td className="w-111px text-center">보낸회원아이디</td>
                    <td className="w-108px text-center">처리상태</td>
                    <td className="w-122px text-center">발급일</td>
                    <td className="w-111px text-center">만료일</td>
                    <td className="w-103px text-center">쿠폰사용</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                <Cells items={ExampleArray} />
            </tbody>
        </table>   
    )
}

export default CouponUsageTable
