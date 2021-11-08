import React, { useState } from 'react'
import CloseIcon from '../../images/popups/close.png'
import AlertIcon from '../../images/myPage/alert.png'
import { useHistory } from 'react-router'

const PointsApplyPopup = ({setPopupOpen}) => {

    const history = useHistory()
    var nf = new Intl.NumberFormat();
    const [inputValue, setInputValue] = useState(null)

    return (
        <div className="h-518px w-610px flex flex-col rounded-lg overflow-hidden">
            <div className="relative h-71px bg-blue-r5d799c flex items-center justify-center flex-shrink-0">
                <label className="font-spoqaBold text-white tracking-tight text-24px">포인트 전환 신청</label>
                <button className="absolute right-0 mr-26px cursor-pointer z-20 hover:opacity-75" onClick={()=> setPopupOpen(false)}>
                    <img src={CloseIcon} alt="close_icon" />
                </button>
            </div>
            
            <div className="w-full h-full bg-white px-35px">
                <div className="mt-40px w-full h-157px rounded-2xl border border-red-e8c2b3 bg-red-ffe9de px-19px pt-17px">
                    <div className="flex items-center h-26px space-x-10px">
                        <img src={AlertIcon} alt="" />
                        <span className="text-red-ee3c62 font-spoqaMedium text-20px tracking-tight">확인/필독사항</span>
                    </div>
                    <div className="mt-18px flex flex-col space-y-14px text-red-ac6d6d tracking-tight font-spoqaMedium text-16px">
                        <span className="h-14px"><span className="font-bold">✓</span>  포인트 전환 시 보유머니로 충전됩니다.</span>
                        <span className="h-14px"><span className="font-bold">✓</span>  최소 10,000P 이상 신청 가능합니다.</span>
                        <span className="h-14px"><span className="font-bold">✓</span>  자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.</span>
                    </div>
                </div>

                <div className="flex items-center h-16px text-16px font-spoqaMedium text-gray-r7c7c7c tracking-tight mt-40px">
                    <span>사용 가능한 포인트:</span>
                    <span className="text-blue-r0056a6 ml-2px font-spoqaBold">278</span>
                    <span className="text-black">P</span>
                </div>

                <div className="h-64px w-full bg-gray-f9f9f9 border border-gray-dddddd rounded-2xl mt-19px flex items-center justify-center">
                    <span className="text-14px tracking-tight font-spoqaMedium mr-10px">전환포인트 입력</span>
                    <input 
                        placeholder="0"
                        className="flex-shrink-0 outline-none w-311px h-42px rounded-md border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c" 
                        value={inputValue !==null ? nf.format(inputValue) : ""}
                        onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                    />
                </div>

                <div className="flex w-full mt-20px space-x-3px">
                    <button className="flex items-center justify-center h-52px w-268px rounded-4px bg-blue-r0070d9 hover:opacity-75">
                        <div 
                            style={{background:"linear-gradient(to bottom, #1491fc, #0675db)"}} 
                            className="flex items-center justify-center h-50px w-266px rounded-4px border border-blue-r3ba3fc cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-16px text-white">포인트전환</span>
                        </div>
                    </button>
                    <button 
                        className="flex items-center justify-center h-52px w-268px rounded-4px bg-blue-r004b8a hover:opacity-75"
                        onClick={() => history.push('/mypage/points/points-transaction-history')}
                    >
                        <div 
                            style={{background:"linear-gradient(to bottom, #004b8a, #012d53)"}} 
                            className="flex items-center justify-center h-50px w-266px bg-black rounded-4px border border-blue-r2a699c cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-16px text-white">상세내역</span>
                        </div>
                    </button>
                </div>
            </div>

            
        </div>
    )
}

export default PointsApplyPopup
