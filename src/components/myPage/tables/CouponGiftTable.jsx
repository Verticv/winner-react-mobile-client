import React from 'react'
import '../RadioButton.css'

const CouponGiftTable = () => {

    const RadioButton = (
        <input 
            className="radio" 
            type="checkbox" 
            name="radio" 
            // checked={isChecked === row}
            // onClick={() => setChecked(row)}
        />
    )

    return (
        <table style={{borderRadius: "1em"}} className="shadow-subNavbar overflow-hidden">
            <thead className="bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td className="w-79px text-center">선택</td>
                    <td className="w-340px text-center">쿠폰명</td>
                    <td className="w-143px text-center">쿠폰금액</td>
                    <td className="w-135px text-center">보낸회원아이디</td>
                    <td className="w-94px text-center">처리상태</td>
                    <td className="w-132px text-center">발급일</td>
                    <td className="w-119px text-center">만료일</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-79px text-center pt-7px">{RadioButton}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-340px text-center">테스트쿠폰</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-143px text-right text-red-e9441d pr-20px font-robotoRegular">10,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-135px text-center">eric123</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-94px text-center  text-red-ff1237">사용가능</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-132px text-center font-robotoRegular">2021-06-29</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-119px text-center font-robotoRegular">2021-07-29</td>
                </tr> 
                <tr className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-79px text-center pt-7px">{RadioButton}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-340px text-center">테스트쿠폰</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-143px text-right text-red-e9441d pr-20px font-robotoRegular">10,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-135px text-center">eric123</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-94px text-center  text-red-ff1237">사용가능</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-132px text-center font-robotoRegular">2021-06-29</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-119px text-center font-robotoRegular">2021-07-29</td>
                </tr>
                <tr className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-79px text-center pt-7px">{RadioButton}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-340px text-center">테스트쿠폰</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-143px text-right text-red-e9441d pr-20px font-robotoRegular">10,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-135px text-center">eric123</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-94px text-center  text-red-ff1237">사용가능</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-132px text-center font-robotoRegular">2021-06-29</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-119px text-center font-robotoRegular">2021-07-29</td>
                </tr> 
                <tr className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-79px text-center pt-7px">{RadioButton}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-340px text-center">테스트쿠폰</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-143px text-right text-red-e9441d pr-20px font-robotoRegular">10,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-135px text-center">eric123</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-94px text-center  text-red-ff1237">사용가능</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-132px text-center font-robotoRegular">2021-06-29</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-119px text-center font-robotoRegular">2021-07-29</td>
                </tr> 
                <tr className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-79px text-center pt-7px">{RadioButton}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-340px text-center">테스트쿠폰</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-143px text-right text-red-e9441d pr-20px font-robotoRegular">10,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-135px text-center">eric123</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-94px text-center  text-red-ff1237">사용가능</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-132px text-center font-robotoRegular">2021-06-29</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-119px text-center font-robotoRegular">2021-07-29</td>
                </tr> 
                <tr className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-79px text-center pt-7px">{RadioButton}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-340px text-center">테스트쿠폰</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-143px text-right text-red-e9441d pr-20px font-robotoRegular">10,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-135px text-center">eric123</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-94px text-center  text-red-ff1237">사용가능</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-132px text-center font-robotoRegular">2021-06-29</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-119px text-center font-robotoRegular">2021-07-29</td>
                </tr> 
                <tr className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-79px text-center pt-7px">{RadioButton}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-340px text-center">테스트쿠폰</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-143px text-right text-red-e9441d pr-20px font-robotoRegular">10,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-135px text-center">eric123</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-94px text-center  text-red-ff1237">사용가능</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-132px text-center font-robotoRegular">2021-06-29</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-119px text-center font-robotoRegular">2021-07-29</td>
                </tr> 
                <tr className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-79px text-center pt-7px">{RadioButton}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-340px text-center">테스트쿠폰</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-143px text-right text-red-e9441d pr-20px font-robotoRegular">10,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-135px text-center">eric123</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-94px text-center  text-red-ff1237">사용가능</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-132px text-center font-robotoRegular">2021-06-29</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-119px text-center font-robotoRegular">2021-07-29</td>
                </tr> 
                <tr className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-79px text-center pt-7px">{RadioButton}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-340px text-center">테스트쿠폰</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-143px text-right text-red-e9441d pr-20px font-robotoRegular">10,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-135px text-center">eric123</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-94px text-center  text-red-ff1237">사용가능</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-132px text-center font-robotoRegular">2021-06-29</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-119px text-center font-robotoRegular">2021-07-29</td>
                </tr> 
                <tr className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-79px text-center pt-7px">{RadioButton}</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-340px text-center">테스트쿠폰</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-143px text-right text-red-e9441d pr-20px font-robotoRegular">10,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-135px text-center">eric123</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-94px text-center  text-red-ff1237">사용가능</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-132px text-center font-robotoRegular">2021-06-29</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-119px text-center font-robotoRegular">2021-07-29</td>
                </tr> 
            </tbody>
        </table> 
    )
}

export default CouponGiftTable
