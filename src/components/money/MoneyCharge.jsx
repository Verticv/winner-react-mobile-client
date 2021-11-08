import MyPageTitle from 'components/myPage/MyPageTitle'
import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import AlertIcon from '../../images/myPage/alert.png'
import Step1 from '../../images/money/STEP1.png'
import Step2 from '../../images/money/STEP2.png'
import Step3 from '../../images/money/STEP3.png'
import MoneyChargeTable from './tables/MoneyChargeTable'
import BankTable from './BankTable'

const MoneyCharge = () => {

    const [page, setPage] = useState(0)
    const [inputValue, setInputValue] = useState(null)
    const [inputClicked, setInputClicked] = useState(false)
    const [radioValue, setRadioValue] = useState("yes")
    var nf = new Intl.NumberFormat();

    const Title = ({text}) => (
        <div style={{width: "201px"}} className="space-y-14px flex-shrink-0">
            <div className="h-16px text-gray-r393e41 font-spoqaMedium text-16px">{text}</div>
            <div className="h-px w-full bg-gray-bebebe"></div>
        </div>
    )

    return (
        <div className="flex flex-col items-center">
            
            <MyPageTitle title="보유머니 충전" />

            <div style={{height: "187px"}} className="mt-20px w-full rounded-2xl border border-red-e8c2b3 bg-red-ffe9de px-19px pt-17px">
                <div className="flex items-center h-26px space-x-10px">
                    <img src={AlertIcon} alt="" />
                    <span className="text-red-ee3c62 font-spoqaMedium text-20px tracking-tight">확인/필독사항</span>
                </div>
                <div className="mt-18px flex flex-col space-y-14px text-red-ac6d6d tracking-tight font-spoqaMedium text-16px">
                    <span style={{color:"#8c5757"}} className="h-14px"><span className="font-bold">✓</span>  입금 시 반드시 회원님의 성함으로 입금 바랍니다.</span>
                    <span className="h-14px"><span className="font-bold">✓</span>  입금이 지연될 수 있으니 은행 점검 시간을 확인하신 후 점검 시간을 피해 신청해 주시기 바랍니다.</span>
                    <span className="h-14px"><span className="font-bold">✓</span>  입금계좌는 수시로 변경되오니 반드시 계좌번호 문의 신청을 통해 계좌번호를 확인 후 입금하여 주시기 바랍니다.</span>
                    <span className="h-14px"><span className="font-bold">✓</span>  자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.</span>
                </div>
            </div>

            <div style={{height: "686px"}} className="mt-20px w-full rounded-2xl shadow-subNavbar p-10px">
                <div style={{height: "288px"}} className="w-full rounded-2xl border border-gray-dddddd bg-gray-f9f9f9">
                    <div 
                        style={{marginTop: "31px", marginLeft: "55px"}}
                        className="text-20px font-spoqaMedium tracking-tight text-gray-r393e41 h-19px flex items-center"
                    >
                        입금 계좌 정보 확인
                    </div>
                    <div 
                        style={{marginTop: "14px", marginLeft: "55px"}}
                        className="text-16px font-spoqaMedium tracking-tight text-gray-r7c7c7c h-16px flex items-center"
                    >
                        입금 계좌번호는 쪽지로 발송되며, 발송된 계좌번호로 선입금 바랍니다.
                    </div>
                    <div style={{width: "905px", marginLeft: "55px"}} className="h-px w-full bg-gray-bebebe mt-19px" />

                    <button 
                        style={{width: "222px", marginLeft:"75px", backgroundColor: "#bf4326"}} 
                        className="flex items-center justify-center h-42px rounded-4px mt-20px hover:opacity-75"
                    >
                        <div style={{width: "220px", borderColor: "#ff8f63"}} className="flex items-center justify-center h-40px rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-orange-ff7a45 via-orange-f56032 to-orange-e9441d cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">계좌번호 신청</span>
                        </div>
                    </button>

                    <div style={{marginLeft: "75px", marginTop: "18px"}} className="space-y-11px">
                        <div className="h-19px flex items-center text-16px font-spoqaMedium tracking-minus05 text-gray-r7c7c7c">
                            <img src={Step1} alt="" />
                            <div className="mt-3px ml-8px flex">위 <p className="font-spoqaBold text-gray-r454545 ml-3px">계좌번호 신청</p>버튼을 누르시면 계좌번호가 쪽지로 발송됩니다.</div>
                        </div>
                        <div className="h-19px flex items-center text-16px font-spoqaMedium tracking-minus05 text-gray-r7c7c7c">
                            <img src={Step2} alt="" />
                            <div className="mt-3px ml-8px flex">안내받은 계좌번호로 선입금 해주세요.</div>
                        </div>
                        <div className="h-19px flex items-center text-16px font-spoqaMedium tracking-minus05 text-gray-r7c7c7c">
                            <img src={Step3} alt="" />
                            <div className="mt-3px ml-8px flex">
                                <p className="font-spoqaBold text-gray-r454545">충전금액 입력</p>
                                란에 실제 입금하신 금액과 동일한 금액을 입력하고
                                <p className="font-spoqaBold text-gray-r454545 mx-3px">신청하기</p>
                                버튼을 눌러주세요.
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{width: "906px"}} className="ml-66px mt-42px flex flex-col">
                    <div className="flex space-x-10px">
                        <Title text="현재 보유머니" />
                        <div className="space-y-14px w-full">
                            <div className="h-16px text-gray-r393e41 font-spoqaMedium text-16px text-gray-r585858 pl-9px">
                                <span className="font-spoqaBold text-red-e9441d">487,240</span>
                                <span>원</span>
                            </div>
                            <div className="h-px w-full bg-gray-bebebe"></div>
                        </div>
                    </div>
                    <div className="flex space-x-10px mt-50px">
                        <Title text="충전금액 입력" />
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
                                type = "tel"
                            />
                            <div className={`${inputClicked ? "bg-blue-r1ca7ec h-2px" : " h-px bg-gray-bebebe"} w-full`}></div>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft: "277px"}} className={`${inputClicked ? "mt-19px" : "mt-20px"} flex space-x-5px w-full justify-start pr-115px`}>
                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r004b8a hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 10000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">1만원</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r004b8a hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 30000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">3만원</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r004b8a hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 50000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">5만원</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r2068b2 hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 100000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">10만원</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r286fce hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 300000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r538dcf bg-gradient-to-b from-blue-r3176c5 via-blue-r286bb7 to-blue-r1c5ca5 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">30만원</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r286fce hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 500000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r70a8f5 bg-gradient-to-b from-blue-r5497f4 via-blue-r4985d8 to-blue-r3d71b8 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">50만원</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r177cce hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 1000000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px rounded-4px border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">100만원</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px rounded-4px bg-gray-r171a1d hover:opacity-75"
                        onClick={() => setInputValue(0)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">정정</span>
                        </div>
                    </button>
                </div>
                
                <div style={{width: "906px", marginTop:"38px"}} className="ml-66px flex flex-col">
                    <div className="flex space-x-10px">
                        <Title text="보너스 금액" />
                        <div className="space-y-14px w-full">
                            <div className="h-16px text-gray-r393e41 font-spoqaMedium text-16px text-gray-r585858 pl-9px">
                                <span className="font-spoqaBold text-blue-r0056a6">100,000,000</span>
                                <span>원</span>
                            </div>
                            <div className="h-px w-full bg-gray-bebebe"></div>
                        </div>
                    </div>
                    <div className="flex space-x-10px mt-20px h-42px items-end">
                        <Title text="보너스 혜택" />
                        <div className="flex space-x-5px w-full h-full">
                            <button 
                                style={{width: "142px"}} 
                                className="flex items-center justify-center h-42px rounded-4px bg-blue-r004b8a hover:opacity-75"
                                onClick={() => setRadioValue("yes")}
                            >
                                <div style={{width: "140px"}} className="flex items-center h-40px rounded-4px border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                                    <input type="radio" className="ml-10px" name="gender" checked={radioValue === "yes"} />
                                    <span className="font-spoqaMedium tracking-tight text-14px text-white ml-20px">보너스 받기</span>
                                </div>
                            </button>
                            <button 
                                style={{width: "142px"}} 
                                className="flex items-center justify-center h-42px rounded-4px bg-red-cb4343 hover:opacity-75"
                                onClick={() => setRadioValue("no")}
                            >
                                <div style={{width: "140px"}} className="flex items-center h-40px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                                    <input type="radio" className="ml-10px" name="gender" checked={radioValue === "no"} />
                                    <span className="font-spoqaMedium tracking-tight text-14px text-white ml-10px">보너스 받지않기</span>
                                </div>
                            </button>        
                        </div>
                    </div>
                </div>
            </div>

            <button style={{width: "228px"}} className="flex items-center justify-center h-52px rounded-4px bg-blue-r0070d9 mt-20px hover:opacity-75">
                <div style={{width: "226px"}} className="flex items-center justify-center h-50px rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                    <span className="font-spoqaMedium tracking-tight text-16px text-white">신청하기</span>
                </div>
            </button>

            <div className="mt-40px">
                <MoneyChargeTable />
            </div>

            <div className="mt-20px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

            <BankTable />

        </div>
    )
}

export default MoneyCharge
