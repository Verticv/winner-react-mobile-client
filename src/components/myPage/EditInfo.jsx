import React, { useState } from 'react'
import MyPageTitle from './MyPageTitle'

const EditInfo = () => {

    const [selectedInput, setSelectedInput] = useState()

    const Title = ({text}) => (
        <div className="w-140px space-y-2 flex-shrink-0">
            <label className="text-gray-r393e41 font-spoqaMedium text-16px">{text}</label>
            <div className="border-b w-full border-gray-bebebe"></div>
        </div>
    )

    return (
        <div>
            <MyPageTitle title="회원정보수정" />

            <div className="mt-15px">
                <div className="flex flex-col items-center justify-center font-spoqaMedium text-20px space-y-5px">
                    <div className="flex items-center h-19px">
                        <span className="text-blue-r0056a6 font-spoqaBold">louie3</span>
                        <span>님의 회원정보를 수정합니다.</span>
                    </div>
                    <div className="flex items-center h-19px">아이디와 비밀번호 보안에 신경써주십시오.</div>
                </div>

                <div className="h-752px w-full rounded-2xl shadow-subNavbar mt-30px border border-gray-dddddd pt-50px px-175px">
                    <div className="w-full flex flex-col space-y-8px">
                        <div className="flex space-x-10px w-full">
                            <Title text="아이디" />
                            <div className="w-540px space-y-2 flex-shrink-0">
                                <label className="text-gray-r585858 font-spoqa text-16px pl-10px">louie3</label>
                                <div className="border-b w-full border-gray-bebebe"></div>
                            </div>
                        </div>
                    </div>
                    {/* BREAK */}
                    <div className="w-full flex flex-col space-y-10px mt-50px">
                        <div className="flex space-x-10px w-full">
                            <Title text="비밀번호" />
                            <div className={`${selectedInput === 0 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                <input 
                                    className="w-full text-gray-r393e41 font-spoqa text-16px outline-none" 
                                    onFocus={(e) => setSelectedInput(0)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    type="password"
                                />
                                <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                            </div>
                        </div>
                        <div className="h-13px flex items-center text-14px font-spoqaMedium text-gray-bebebe ml-150px tracking-minus05">영문과 숫자 그리고 특수문자(ex. !@#$%^&)를 반드시 포함하여 6~16자로 입력해야 합니다.</div>
                    </div>
                    {/* BREAK */}
                    <div className="w-full flex flex-col space-y-10px mt-30px">
                        <div className="flex space-x-10px w-full">
                            <Title text="비밀번호 확인" />
                            <div className={`${selectedInput === 1 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                <input 
                                    className="w-full text-gray-r393e41 font-spoqa text-16px outline-none" 
                                    onFocus={(e) => setSelectedInput(1)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    type="password"
                                />
                                <div className={`${selectedInput === 1 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                            </div>
                        </div>
                    </div>
                    {/* BREAK */}
                    <div className="w-full flex flex-col space-y-10px mt-50px">
                        <div className="flex space-x-10px w-full">
                            <Title text="환전 비밀번호" />
                            <div className={`${selectedInput === 2 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                <input 
                                    className="w-full text-gray-r393e41 font-spoqa text-16px outline-none" 
                                    onFocus={(e) => setSelectedInput(2)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    type="password"
                                />
                                <div className={`${selectedInput === 2 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                            </div>
                        </div>
                        <div className="h-13px flex items-center text-14px font-spoqa text-gray-bebebe ml-150px tracking-minus05">영문과 숫자 6~8자로 입력해야 합니다. (특수문자 포함시 변경불가)</div>
                    </div>
                    {/* BREAK */}
                    <div className="w-full flex flex-col space-y-10px mt-30px">
                        <div className="flex space-x-10px w-full">
                            <Title text="환전 비밀번호" />
                            <div className={`${selectedInput === 3 ? "space-y-7px" : "space-y-8px"} w-full `}>
                                <input 
                                    className="w-full text-gray-r393e41 font-spoqa text-16px outline-none" 
                                    onFocus={(e) => setSelectedInput(3)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    type="password"
                                />
                                <div className={`${selectedInput === 3 ? "bg-blue-r1ca7ec h-2px" : "bg-gray-bebebe h-px"} w-full`} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-50px w-full space-y-16px">
                        <div className="w-full flex flex-col space-y-8px">
                            <div className="flex space-x-10px w-full">
                                <Title text="레벨" />
                                <div className="w-540px space-y-2 flex-shrink-0">
                                    <label className="text-gray-r585858 font-spoqa text-16px pl-10px">레벨 LV.1 (점수: 0)</label>
                                    <div className="border-b w-full border-gray-bebebe"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-8px">
                            <div className="flex space-x-10px w-full">
                                <Title text="스포츠" />
                                <div className="w-540px space-y-2 flex-shrink-0">
                                    <label className="text-gray-r585858 font-spoqa text-16px pl-10px">Bronze</label>
                                    <div className="border-b w-full border-gray-bebebe"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-8px">
                            <div className="flex space-x-10px w-full">
                                <Title text="카지노" />
                                <div className="w-540px space-y-2 flex-shrink-0">
                                    <label className="text-gray-r585858 font-spoqa text-16px pl-10px">Bronze</label>
                                    <div className="border-b w-full border-gray-bebebe"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-8px">
                            <div className="flex space-x-10px w-full">
                                <Title text="슬롯" />
                                <div className="w-540px space-y-2 flex-shrink-0">
                                    <label className="text-gray-r585858 font-spoqa text-16px pl-10px">Bronze</label>
                                    <div className="border-b w-full border-gray-bebebe"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-8px">
                            <div className="flex space-x-10px w-full">
                                <Title text="미니게임" />
                                <div className="w-540px space-y-2 flex-shrink-0">
                                    <label className="text-gray-r585858 font-spoqa text-16px pl-10px">Bronze</label>
                                    <div className="border-b w-full border-gray-bebebe"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div className="mt-20px w-full flex items-center justify-center mb-60px">
                    <button className="flex items-center justify-center w-192px h-52px rounded-md bg-red-cb4343 hover:opacity-75">
                        <div className="flex items-center justify-center h-50px w-190px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-16px text-white">수정하기</span>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default EditInfo
