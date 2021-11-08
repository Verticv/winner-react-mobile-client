import MyPageTitle from 'components/myPage/MyPageTitle'
import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import AlertIcon from '../../images/myPage/alert.png'
import BankTable from './BankTable'
import MoneyExchangeTable from './tables/MoneyExchangeTable'

const MoneyExchange = () => {
    
    const [page, setPage] = useState(0)
    const [inputValue, setInputValue] = useState(null)
    const [passwordValue, setPasswordValue] = useState("")
    const [inputClicked, setInputClicked] = useState(null)
    var nf = new Intl.NumberFormat();

    const Title = ({text}) => (
        <div style={{width: "201px"}} className="space-y-14px flex-shrink-0">
            <div className="h-16px text-gray-r393e41 font-spoqaMedium text-16px">{text}</div>
            <div className="h-px w-full bg-gray-bebebe"></div>
        </div>
    )
    
    return (
        <div className="flex flex-col items-center">
            
            <MyPageTitle title="보유머니 환전" />

            <div className="mt-20px w-full h-157px rounded-2xl border border-red-e8c2b3 bg-red-ffe9de px-19px pt-17px">
                <div className="flex items-center h-26px space-x-10px">
                    <img src={AlertIcon} alt="" />
                    <span className="text-red-ee3c62 font-spoqaMedium text-20px tracking-tight">확인/필독사항</span>
                </div>
                <div className="mt-18px flex flex-col space-y-14px text-red-ac6d6d tracking-tight font-spoqaMedium text-16px">
                    <span className="h-14px"><span className="font-bold">✓</span>  환전 신청 시 현재 보유머니에서 차감되며, 회원님의 계좌번호로 입금됩니다.</span>
                    <span className="h-14px"><span className="font-bold">✓</span>  입금이 지연될 수 있으니 은행 점검 시간을 확인하신 후 점검 시간을 피해 신청해 주시기 바랍니다.</span>
                    <span className="h-14px"><span className="font-bold">✓</span>  자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.</span>
                </div>
            </div>

            <div style={{height: "474px"}} className="mt-20px w-full rounded-2xl shadow-subNavbar p-10px">

                <div style={{height: "128px"}} className="w-full rounded-2xl border border-gray-dddddd bg-gray-f9f9f9">
                    <div className="text-20px font-spoqaMedium tracking-tight text-gray-r393e41 h-19px flex items-center mt-30px ml-55px">환전금액 입력</div>
                    <div className="text-16px font-spoqaMedium tracking-tight text-gray-r7c7c7c h-16px flex items-center ml-55px mt-14px" >
                        환전 신청을 완료하게 되면 보유머니에서 신청한 금액만큼 차감되며
                    </div>
                    <div className="text-16px font-spoqaMedium tracking-tight text-gray-r7c7c7c h-16px flex items-center ml-55px mt-3px" >
                        고객님의 계좌번호로 입금됩니다.
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
                        <Title text="환전금액 입력" />
                        <div className="space-y-5px w-full">
                            <form autoComplete="off">
                                <input 
                                    className="w-full text-gray-r393e41 font-spoqaMedium text-16px text-gray-r585858 outline-none pl-9px placeholder-gray-bebebe"
                                    placeholder="직접 입력시 숫자만 입력해 주세요."
                                    value={inputValue !==null ? nf.format(inputValue) : ""}
                                    onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                                    onFocus={() => setInputClicked(0)}
                                    onBlur={() => setInputClicked(null)}
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                /> 
                            </form>
                            <div className={`${inputClicked === 0 ? "bg-blue-r1ca7ec h-2px" : " h-px bg-gray-bebebe"} w-full`}></div>
                        </div>
                    </div>
                </div>

                <div style={{marginLeft: "277px"}} className={`${inputClicked === 0 ? "mt-19px" : "mt-20px"} flex space-x-5px w-full justify-start pr-115px`}>
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

                <div style={{width: "906px"}} className="ml-66px mt-42px flex flex-col">
                    <div className="flex space-x-10px">
                        <Title text="출금 비밀번호" />
                        <div className="space-y-5px w-full">
                            <input 
                                className="w-full text-gray-r393e41 font-spoqaMedium text-16px text-gray-r585858 outline-none pl-9px placeholder-gray-bebebe"
                                placeholder="비밀번호를 입력하세요."
                                value={passwordValue}
                                onChange={e => setPasswordValue(e.target.value)}
                                onFocus={() => setInputClicked(1)}
                                onBlur={() => setInputClicked(null)}
                                type="password"
                            />
                            <div className={`${inputClicked === 1 ? "bg-blue-r1ca7ec h-2px" : " h-px bg-gray-bebebe"} w-full`}></div>
                        </div>
                    </div>
                </div>

            </div>

            <button style={{width: "228px"}} className={`mt-20px flex items-center justify-center h-52px rounded-4px bg-blue-r0070d9 hover:opacity-75`}>
                <div style={{width: "226px"}} className="flex items-center justify-center h-50px rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                    <span className="font-spoqaMedium tracking-tight text-16px text-white">신청하기</span>
                </div>
            </button>

            <div className="mt-40px">
                <MoneyExchangeTable />
            </div>

            <div className="mt-20px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

            <BankTable />
        </div>
    )
}

export default MoneyExchange
