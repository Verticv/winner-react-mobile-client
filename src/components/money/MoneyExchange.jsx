// import MyPageTitle from 'components/myPage/MyPageTitle'
// import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import AlertIcon from '../../images/myPage/alert.png'
// import Step1 from '../../images/money/STEP1.png'
// import Step2 from '../../images/money/STEP2.png'
// import Step3 from '../../images/money/STEP3.png'
// import MoneyChargeTable from './tables/MoneyChargeTable'
import BankTable from './BankTable'
import BottomNavbar from '../bottomNavbar/BottomNavbar'

const MoneyExchange = () => {

    // const [page, setPage] = useState(0)
    const [inputValue, setInputValue] = useState(null)
    const [inputClicked, setInputClicked] = useState(false)
    // const [radioValue, setRadioValue] = useState("yes")
    var nf = new Intl.NumberFormat();

    const Title = ({text}) => (
        <div style={{width: "21rem", marginRight: '1.875rem'}} className="flex-shrink-0">
            <div style={{fontSize: '2.625rem'}} className="text-gray-r454545 font-spoqaMedium">{text}</div>
            <div style={{height: '0.1875rem'}} className="w-full bg-gray-bebebe"></div>
        </div>
    )

    return (
        <div style={{padding: '1.875rem'}} className="flex flex-col items-center">
            
            {/* <MyPageTitle title="보유머니 충전" /> */}

            <div style={{paddingLeft: '2.0625rem', paddingTop: '2.25rem', paddingBottom: '2.8125rem'}} className="w-full rounded-2xl border border-red-e8c2b3 bg-red-ffe9de px-19px pt-17px">
                <div className="flex items-center space-x-10px">
                    <img style={{width: '3.375rem'}} src={AlertIcon} alt="" />
                    <span style={{fontSize: '2.8125rem'}} className="text-red-ee3c62 font-spoqaMedium text-20px tracking-tight">확인/필독사항</span>
                </div>
                <div className="mt-18px flex flex-col space-y-14px text-red-ac6d6d tracking-tight font-spoqaMedium text-16px">
                    <span style={{fontSize: '2.5rem', marginRight: '13.5rem'}} className="flex"><span style={{marginRight: '0.875rem'}} className="font-bold block">✓</span>  입금이 지연될 수 있으니 은행 점검 시간을 확인하신 후 점검 시간을.</span>
                    <span style={{fontSize: '2.5rem', marginRight: '6.875rem'}} className="flex"><span style={{marginRight: '0.875rem'}} className="font-bold block">✓</span>  입금계좌는 수시로 변경되오니 반드시 계좌번호 문의 신청을 통해 계좌번호를 확인 후 입금하여 주시기 바랍니다.</span>
                    <span style={{fontSize: '2.5rem'}} className=""><span className="font-bold">✓</span>  자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.</span>
                </div>
            </div>

            <div style={{padding: '0.9375rem', paddingBottom: '2.0625rem'}} className="mt-20px w-full rounded-2xl shadow-subNavbar">
                <div style={{padding: '2.0625rem'}} className="w-full rounded-2xl border border-gray-dddddd bg-gray-f9f9f9">
                    <div 
                        style={{fontSize: '2.8125rem'}}
                        className="font-spoqaMedium tracking-tight text-gray-r393e41 flex items-center"
                    >
                        입금 계좌 정보 확인
                    </div>
                    <div 
                        style={{fontSize: '2.625rem', marginRight: '0.875rem'}}
                        className="font-spoqaMedium tracking-tight text-gray-r7c7c7c flex items-center"
                    >
                        입금 계좌번호는 쪽지로 발송되며, 발송된 계좌번호로 선입금 바랍니다.
                    </div>
                    
                </div>
                
                <div style={{marginTop: '3.75rem'}} className="flex flex-col">
                    <div className="flex space-x-10px">
                        <Title text="현재 보유머니" />
                        <div className="w-full">
                            <div style={{fontSize: '2.625rem'}} className="text-gray-r393e41 font-spoqaMedium text-gray-r585858 pl-9px">
                                <span className="font-spoqaBold text-red-e9441d">478,000</span>
                            </div>
                            <div style={{height: '0.1875rem'}} className="w-full bg-gray-bebebe"></div>
                        </div>
                    </div>
                    <div style={{marginTop: '4.6875rem'}} className="flex">
                        <Title text="충전금액 입력" />
                        <div className="w-full">
                            <input 
                                className="w-full font-spoqa text-gray-bebebe outline-none pl-9px placeholder-gray-bebebe"
                                style={{fontSize: '2.625rem'}}
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
                            <div style={{height: '0.1875rem'}} className={`${inputClicked ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                        </div>
                    </div>
                </div>





                <div style={{marginTop: '1.875rem', marginBottom: '4.6875rem'}} className="">
                    <div style={{marginBottom: '0.9375rem'}} className="flex w-full h-full items-center justify-between">
                        <button
                            style={{width: '16.75rem', height: '7.3125rem', padding: '0.1875rem'}}
                            className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                            onClick={() => setInputValue(inputValue + 10000)}
                        >
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                                <span style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-white">1만원</span>
                            </div>
                        </button>

                        <button 
                            style={{width: '16.75rem', height: '7.3125rem', padding: '0.1875rem'}}
                            className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                            onClick={() => setInputValue(inputValue + 30000)}
                        >
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                                <span style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-white">3만원</span>
                            </div>
                        </button>

                        <button 
                            style={{width: '16.75rem', height: '7.3125rem', padding: '0.1875rem'}}
                            className="flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75"
                            onClick={() => setInputValue(inputValue + 50000)}
                        >
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                                <span style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-white">5만원</span>
                            </div>
                        </button>

                        <button 
                            style={{width: '16.75rem', height: '7.3125rem', padding: '0.1875rem'}}
                            className="flex items-center justify-center rounded-lg bg-blue-r2068b2 hover:opacity-75"
                            onClick={() => setInputValue(inputValue + 100000)}
                        >
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                                <span style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-white">10만원</span>
                            </div>
                        </button>
                    </div>

                    <div className="flex w-full h-full items-center justify-between">
                        <button 
                            style={{width: '16.75rem', height: '7.3125rem', padding: '0.1875rem'}}
                            className="flex items-center justify-center rounded-lg bg-blue-r286fce hover:opacity-75"
                            onClick={() => setInputValue(inputValue + 300000)}
                        >
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r538dcf bg-gradient-to-b from-blue-r3176c5 via-blue-r286bb7 to-blue-r1c5ca5 cursor-pointer">
                                <span style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-white">30만원</span>
                            </div>
                        </button>

                        <button 
                            style={{width: '16.75rem', height: '7.3125rem', padding: '0.1875rem'}}
                            className="flex items-center justify-center rounded-lg bg-blue-r286fce hover:opacity-75"
                            onClick={() => setInputValue(inputValue + 500000)}
                        >
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r70a8f5 bg-gradient-to-b from-blue-r5497f4 via-blue-r4985d8 to-blue-r3d71b8 cursor-pointer">
                                <span style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-white">50만원</span>
                            </div>
                        </button>

                        <button 
                            style={{width: '16.75rem', height: '7.3125rem', padding: '0.1875rem'}}
                            className="flex items-center justify-center rounded-lg bg-blue-r177cce hover:opacity-75"
                            onClick={() => setInputValue(inputValue + 1000000)}
                        >
                            <div className="flex items-center justify-center w-full h-full rounded-lg border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                                <span style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-white">100만원</span>
                            </div>
                        </button>

                        <button 
                            style={{width: '16.75rem', height: '7.3125rem', padding: '0.1875rem'}}
                            className="flex items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75"
                            onClick={() => setInputValue(0)}
                        >
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                                <span style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-white">정정</span>
                            </div>
                        </button>
                    </div>
                    
                </div>
                
                <div style={{marginTop: '4.6875rem'}} className="flex">
                        <Title text="충전금액 입력" />
                        <div className="w-full">
                            <input 
                                className="w-full font-spoqa text-gray-bebebe outline-none pl-9px placeholder-gray-bebebe"
                                style={{fontSize: '2.625rem'}}
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
                            <div style={{height: '0.1875rem'}} className={`${inputClicked ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                        </div>
                    </div>
            </div>

            <button style={{width: "36.4375rem", height: '7.3125rem', padding: '0.1875rem',  marginTop: '3.75rem', marginBottom: '5.8125rem'}} className="flex items-center justify-center h-52px rounded-lg bg-blue-r0070d9 hover:opacity-75">
                <div className="flex items-center justify-center rounded-lg w-full h-full border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                    <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-16px text-white">신청하기</span>
                </div>
            </button>


            {/* <div className="mt-40px">
                <MoneyChargeTable />
            </div>

            <div className="mt-20px">
                <Pagination page={page} setPage={setPage}/>   
            </div> */}

            <BankTable />
            <BottomNavbar />

        </div>
    )
}

export default MoneyExchange
