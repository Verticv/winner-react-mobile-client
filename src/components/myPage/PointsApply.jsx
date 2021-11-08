import React, { useState } from 'react'
import MyPageTitle from './MyPageTitle'
import AlertIcon from '../../images/myPage/alert.png'

const PointsApply = () => {

    const [inputValue, setInputValue] = useState(null)
    const [inputClicked, setInputClicked] = useState(false)
    var nf = new Intl.NumberFormat();

    const Title = ({text}) => (
        <div className="space-y-14px w-140px flex-shrink-0">
            <div className="h-16px text-gray-r393e41 font-spoqaMedium text-16px">{text}</div>
            <div className="h-px w-full bg-gray-bebebe"></div>
        </div>
    )

    const PopupButton = (
        <button className="flex items-center justify-center h-52px w-212px rounded-4px bg-blue-r0070d9 hover:opacity-75">
            <div className="flex items-center justify-center h-50px w-210px rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                <span className="font-spoqaMedium tracking-tight text-16px text-white">신청하기</span>
            </div>
        </button>
    )

    return (
        <div className="w-full flex flex-col items-center">
            <MyPageTitle title="포인트전환신청" />

            <div style={{borderRadius:"1em"}} className="mt-20px w-full h-157px border border-red-e8c2b3 bg-red-ffe9de px-19px pt-17px">
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

            <div style={{borderRadius:"1em"}} className="mt-20px w-full h-573px shadow-subNavbar p-10px border border-gray-ececec flex flex-col">
                <div className="w-full rounded-2xl h-128px bg-gray-f9f9f9 border border-gray-dddddd">
                    <div className="ml-114px mt-34px flex flex-col font-spoqaMedium tracking-tight">
                        <span className="text-20px h-19px">전환 포인트 입력</span>
                        <span className="text-16px text-gray-r7c7c7c mt-15px">
                            현재 포인트가 보유 머니로 전환되며, 최소 
                            <span className="text-blue-r0056a6 ml-2px font-spoqaBold">10,000</span>P
                             부터 신청 가능합니다.</span>
                    </div>
                </div>

                <div className="w-785px ml-117px mt-52px flex flex-col space-y-53px">
                    <div className="flex space-x-10px">
                        <Title text="현재 잔여 포인트" />
                        <div className="space-y-14px w-full">
                            <div className="h-16px text-gray-r393e41 font-spoqaMedium text-16px text-gray-r585858 pl-9px">
                                <span className="font-spoqaBold text-blue-r0056a6">278</span>
                                <span>P</span>
                            </div>
                            <div className="h-px w-full bg-gray-bebebe"></div>
                        </div>
                    </div>
                    <div className="flex space-x-10px">
                        <Title text="전환 예정 포인트" />
                        <div className="space-y-14px w-full">
                            <div className="h-16px text-gray-r393e41 font-spoqaMedium text-16px text-gray-r585858 pl-9px">
                                <span className="font-spoqaBold">0</span>
                                <span>P</span>
                            </div>
                            <div className="h-px w-full bg-gray-bebebe"></div>
                        </div>
                    </div>
                    <div className="flex space-x-10px">
                        <Title text="전환 후 잔여 포인트" />
                        <div className="space-y-14px w-full">
                            <div className="h-16px text-gray-r393e41 font-spoqaMedium text-16px text-gray-r585858 pl-9px">
                                <span className="font-spoqaBold text-blue-r0056a6">0</span>
                                <span>P</span>
                            </div>
                            <div className="h-px w-full bg-gray-bebebe"></div>
                        </div>
                    </div>
                    <div className="flex space-x-10px">
                        <Title text="전환 포인트 입력" />
                        <div className="space-y-5px w-full">
                            <input 
                                className="w-full text-gray-r393e41 font-spoqaMedium text-16px text-gray-r585858 outline-none pl-9px placeholder-gray-bebebe"
                                placeholder="직접 입력시 숫자만 입력해 주세요."
                                value={inputValue !==null ? nf.format(inputValue) : ""}
                                onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                                onFocus={() => setInputClicked(true)}
                                onBlur={() => setInputClicked(false)}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                            />
                            <div className={`${inputClicked ? "bg-blue-r1ca7ec h-2px" : " h-px bg-gray-bebebe"} w-full`}></div>
                        </div>
                    </div>
                </div>

                <div className={`${inputClicked ? "mt-19px" : "mt-20px"} flex space-x-5px w-full justify-end pr-117px`}>
                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r004b8a hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 1000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">1천P</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r004b8a hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 5000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">5천P</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r004b8a hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 10000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">1만P</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r2068b2 hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 50000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">5만P</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r286fce hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 100000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r538dcf bg-gradient-to-b from-blue-r3176c5 via-blue-r286bb7 to-blue-r1c5ca5 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">10만P</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r286fce hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 500000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r70a8f5 bg-gradient-to-b from-blue-r5497f4 via-blue-r4985d8 to-blue-r3d71b8 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">50만P</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r177cce hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 1000000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px rounded-4px border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">100만P</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-gray-r171a1d hover:opacity-75"
                        onClick={() => setInputValue(null)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">정정</span>
                        </div>
                    </button>
                </div>

            </div>


            <div className="mt-20px mb-60px">
                {PopupButton}
            </div>

            

        </div>
    )
}

export default PointsApply
