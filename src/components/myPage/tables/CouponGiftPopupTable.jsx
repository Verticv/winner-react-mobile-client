import React, { useState } from 'react'

const CouponGiftPopupTable = () => {
    const [isChecked , setChecked] = useState(null)

    const RadioButton = ({id}) => (
        <label className="form-control">
            <input
                className="radio" 
                type="radio" 
                name="radio" 
                checked={isChecked === id}
                onChange={() => setChecked(id)}
            />
        </label>
    )

    return (
        <div style={{borderRadius:"0.5rem"}} className="shadow-subNavbar overflow-y-scroll">
            <div style={{height: '7.125rem'}} className="bg-gray-fafafa font-spoqaMedium w-full tracking-tight text-gray-r585858 border-b border-gray-dddddd flex items-center">
                <div style={{fontSize: '2.625rem'}} className='w-full flex justify-between'>
                    <td className="w-1/3 text-center">선택</td>
                    <td className="w-1/3 text-center">아이디</td>
                    <td className="w-1/3 text-center">별명</td>
                </div>
            </div>
            <div style={{height:"280px"}} className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <div style={{height: '8.625rem', fontSize: '2.625rem'}} className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 justify-between w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-1/3 text-center flex justify-center"><RadioButton id={0}/></td>
                    <td className="w-1/3 text-center">louie32</td>
                    <td className="w-1/3 text-center">위너테스트2</td>
                </div>
                <div style={{height: '8.625rem', fontSize: '2.625rem'}} className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r585858 justify-between w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-1/3 text-center flex justify-center"><RadioButton id={1}/></td>
                    <td className="w-1/3 text-center">louie32</td>
                    <td className="w-1/3 text-center">위너테스트2</td>
                </div>
                <div style={{height: '8.625rem', fontSize: '2.625rem'}} className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 justify-between w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-1/3 text-center flex justify-center"><RadioButton id={2}/></td>
                    <td className="w-1/3 text-center">louie32</td>
                    <td className="w-1/3 text-center">위너테스트2</td>
                </div>
                <div style={{height: '8.625rem', fontSize: '2.625rem'}} className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r585858 justify-between w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-1/3 text-center flex justify-center"><RadioButton id={3}/></td>
                    <td className="w-1/3 text-center">louie32</td>
                    <td className="w-1/3 text-center">위너테스트2</td>
                </div>
                <div style={{height: '8.625rem', fontSize: '2.625rem'}} className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 justify-between w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-1/3 text-center flex justify-center"><RadioButton id={4}/></td>
                    <td className="w-1/3 text-center">louie32</td>
                    <td className="w-1/3 text-center">위너테스트2</td>
                </div>
                <div style={{height: '8.625rem', fontSize: '2.625rem'}} className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r585858 justify-between w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-1/3 text-center flex justify-center"><RadioButton id={5}/></td>
                    <td className="w-1/3 text-center">louie32</td>
                    <td className="w-1/3 text-center">위너테스트2</td>
                </div>
                <div style={{height: '8.625rem', fontSize: '2.625rem'}} className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 justify-between w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-1/3 text-center flex justify-center"><RadioButton id={6}/></td>
                    <td className="w-1/3 text-center">louie32</td>
                    <td className="w-1/3 text-center">위너테스트2</td>
                </div>
                <div style={{height: '8.625rem', fontSize: '2.625rem'}} className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r585858 justify-between w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-1/3 text-center flex justify-center"><RadioButton id={7}/></td>
                    <td className="w-1/3 text-center">louie32</td>
                    <td className="w-1/3 text-center">위너테스트2</td>
                </div>
            </div>
        </div> 
    )
}

export default CouponGiftPopupTable
