import React from 'react'
import '../RadioButton.css'

const ChargeHistoryTable = ({
    checkedState,
    setCheckedState
}) => {

    const RadioButton =({id}) => (
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

    return (
        <table style={{borderRadius: "1em"}} className="shadow-subNavbar overflow-hidden">
            <thead className="bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td className="w-132px text-center flex-shrink-0">선택</td>
                    <td className="w-181px text-center">신청일시</td>
                    <td className="w-188px text-center">충전금액</td>
                    <td className="w-205px text-center">보너스금액</td>
                    <td className="w-180px text-center">처리일시</td>
                    <td className="w-157px text-center">처리상태</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-132px font-robotoRegular h-56px text-center flex-shrink-0 pt-7px"><RadioButton id={0}/></td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-181px h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-188px h-56px text-right pr-34px font-robotoRegular">12,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-205px h-56px text-right pr-34px text-red-500 font-robotoRegular">+1,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-180px h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-157px h-56px text-center text-blue-r0056a6">완료</td>
                </tr>
                <tr className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r585858 h-56px border-b border-gray-dddddd">
                    <td className="w-132px font-robotoRegular h-56px text-center flex-shrink-0 pt-7px"><RadioButton id={1}/></td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-181px h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-188px h-56px text-right pr-34px font-robotoRegular">100,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-205px h-56px text-right pr-34px text-red-500 font-robotoRegular">+1,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-180px h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-157px h-56px text-center">취소</td>
                </tr>
                <tr className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 h-56px w-full">
                    <td className="w-132px font-robotoRegular h-56px text-center flex-shrink-0 pt-7px"><RadioButton id={2}/></td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-181px h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-188px h-56px text-right pr-34px font-robotoRegular">50,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-205px h-56px text-right pr-34px text-red-500 font-robotoRegular">+1,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-180px h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-157px h-56px text-center text-blue-r0056a6">완료</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ChargeHistoryTable
