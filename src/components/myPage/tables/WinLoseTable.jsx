import React from 'react'

const WinLoseTable = ({
    checkedState,
    setCheckedState
}) => {

    const ExampleArray = [
        {
            id: 0,
            number: 1,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "78,308",
            status: "진행중인 금액"
        },
        {
            id: 1,
            number: 2,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "미니게임",
            amount: "+9,900",
            status: "정산완료"
        },
        {
            id: 2,
            number: 3,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "+32,510",
            status: "정산완료"
        },
        {
            id: 3,
            number: 4,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "에볼루션",
            amount: "-560,500",
            status: "정산완료"
        },
        {
            id: 4,
            number: 5,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "미니게임",
            amount: "+78,308",
            status: "정산완료"
        },
        {
            id: 5,
            number: 6,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "-78,308",
            status: "정산완료"
        },
        {
            id: 6,
            number: 7,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "+78,308",
            status: "정산완료"
        },
        {
            id: 7,
            number: 8,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "+78,308",
            status: "정산완료"
        },
        {
            id: 8,
            number: 9,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "+78,308",
            status: "정산완료"
        },
        {
            id: 9,
            number: 10,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "+78,308",
            status: "정산완료"
        },
    ]

    const RadioButton = ({id}) => (
        <input 
            className="radio" 
            type="checkbox" 
            name="radio" 
            checked={checkedState[id]}
            onChange={() => handleOnChange(id)}
        />
    )

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }; 

    function Cells({ items }) {
        return items.map(item => (
            <tr 
                style={{backgroundColor: item.id % 2 === 0 ? "#fefefe" : "#f8f9fb"}} 
                className="font-spoqa text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd"
            >
                <td style={{WebkitTextStroke:"0.2px"}} className="w-100px font-robotoRegular h-56px text-center flex items-center justify-center pt-3px"><RadioButton id={item.id}/></td>
                <td style={{WebkitTextStroke:"0.2px"}} className="w-64px h-56px text-center font-robotoRegular pt-2px">{item.number}</td>
                <td style={{WebkitTextStroke:"0.2px"}} className="w-176px h-56px text-center font-robotoRegular pt-2px">{item.startDate}</td>
                <td style={{WebkitTextStroke:"0.2px"}} className="w-136px h-56px text-center font-robotoRegular pt-2px">{item.endDate}</td>
                <td style={{WebkitTextStroke:"0.2px"}} className="w-265px h-56px text-center pt-2px">{item.type}</td>
                <td 
                    style={{color: item.amount.includes("+") ? "#d52e2e" : item.amount.includes("-") ? "#0056a6" : "#585858", WebkitTextStroke:"0.2px"}}
                    className="w-170px h-56px text-center font-robotoRegular pt-2px"
                >
                    {item.amount}
                </td>
                <td style={{WebkitTextStroke:"0.2px"}} className="w-128px h-56px text-center pt-2px">{item.status}</td>
            </tr>
        ));
    }

    return (
        <div style={{borderRadius: "1em"}} className="shadow-subNavbar overflow-hidden">
            <table >
                <thead className="bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                    <tr>
                        <td className="w-100px text-center pt-2px">선택</td>
                        <td className="w-64px text-center pt-2px">번호</td>
                        <td className="w-176px text-center pt-2px">정산시작일</td>
                        <td className="w-136px text-center pt-2px">정산종료일</td>
                        <td className="w-265px text-center pt-2px">분류</td>
                        <td className="w-170px text-center pt-2px">금액</td>
                        <td className="w-128px text-center pt-2px">처리상태</td>
                    </tr>
                </thead>
                <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                    <Cells items={ExampleArray} />
                </tbody>
            </table>
            <div className="flex bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px">
                <div className="w-full bg-gray-dee6ef h-56px flex items-center justify-center font-spoqaMedium text-16px tracking-tight border-r border-gray-dddddd">합계</div>
                <div className="w-full h-56px text-center flex items-center justify-center font-roboto tracking-tight text-red-500 text-16px">+120,718</div>
            </div>
        </div>
    )
}

export default WinLoseTable
