import React, { useState } from 'react'
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from 'components/common/HomePageTopBanner'
import Navbar from 'components/mainPage/Navbar'

const EditInfo = () => {

    const [selectedInput, setSelectedInput] = useState()


    const Title = ({text}) => (
        <div style={{width: "21rem", marginRight: '1.875rem'}} className="flex-shrink-0">
            <div style={{fontSize: '2.625rem'}} className="text-gray-r454545 font-spoqaMedium">{text}</div>
            <div style={{height: '0.1875rem', marginTop: '1.1875rem'}} className="w-full bg-gray-bebebe"></div>
        </div>
    )

    return (
        <div className="w-full">
            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar /> 
                <HomePageTopBanner pageTitle='회원정보수정' />
            </div>

            <div style={{margin: '1.875rem', marginTop: '0'}} className="">

                <div style={{fontSize: '2.625rem', marginTop: '3.5625rem', marginBottom: '4.8125rem'}} className="flex text-gray-r7c7c7c flex-col items-center justify-center font-spoqaMedium">
                    <div className="flex items-center h-14">
                        <span className="text-blue-r0056a6 font-spoqaBold">louie3</span>
                        <span>님의 회원정보를 수정합니다.</span>
                    </div>
                    <div className="flex items-center h-14">아이디와 비밀번호 보안에 신경써주십시오.</div>
                </div>

                <div style={{padding: '2.8125rem'}} className="w-full rounded-2xl shadow-subNavbar border border-gray-dddddd">
                    <div style={{marginTop: '0.375rem'}} className="flex">
                        <Title text="아이디" />
                        <div className="w-full">
                            <label
                                style={{fontSize: '2.625rem', marginBottom: '1.1875rem', display: 'inline-block'}}
                                className="text-gray-r585858 font-spoqa">louie3</label>
                            <div style={{height: '0.1875rem'}} className={`bg-gray-bebebe w-full`}></div>
                        </div>
                    </div>


                    {/* BREAK */}
                    <div style={{marginTop: '3.125rem'}} className="flex flex-wrap">
                        <div className='w-full flex'>
                            <Title text="비밀번호" />
                            <div className="w-full">
                                <input 
                                    className="w-full font-spoqa text-gray-bebebe outline-none placeholder-gray-bebebe"
                                    style={{fontSize: '2.625rem', marginBottom: '1.1875rem'}}
                                    onFocus={(e) => setSelectedInput(0)}
                                        onBlur={(e) => setSelectedInput(false)}
                                        type="password"
                                />
                                <div style={{height: '0.1875rem'}} className={`${selectedInput === 0 ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                            </div>
                        </div>
                        <span style={{fontSize: '2.4375rem', lineHeight: '1.2', marginTop: '1.1875rem'}} className="m-0 font-spoqaMedium text-gray-bebebe tracking-minus05">영문과 숫자 그리고 특수문자(ex. !@#$%^&)를 반드시 포함하여 6~16자로 입력해야 합니다.</span>
                    </div>



                    {/* BREAK */}

                    <div style={{marginTop: '3.125rem'}} className="flex flex-wrap">
                        <div className='w-full flex'>
                            <Title text="비밀번호 확인" />
                            <div className="w-full">
                                <input 
                                    className="w-full font-spoqa text-gray-bebebe outline-none placeholder-gray-bebebe"
                                    style={{fontSize: '2.625rem', marginBottom: '1.1875rem'}}
                                    onFocus={(e) => setSelectedInput(1)}
                                        onBlur={(e) => setSelectedInput(false)}
                                        type="password"
                                />
                                <div style={{height: '0.1875rem'}} className={`${selectedInput === 1 ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                            </div>
                        </div>
                    </div>



                    {/* BREAK */}

                    <div style={{marginTop: '3.125rem'}} className="flex flex-wrap">
                        <div className='w-full flex'>
                            <Title text="환전비밀번호" />
                            <div className="w-full">
                                <input 
                                    className="w-full font-spoqa text-gray-bebebe outline-none placeholder-gray-bebebe"
                                    style={{fontSize: '2.625rem', marginBottom: '1.1875rem'}}
                                    onFocus={(e) => setSelectedInput(2)}
                                        onBlur={(e) => setSelectedInput(false)}
                                        type="password"
                                />
                                <div style={{height: '0.1875rem'}} className={`${selectedInput === 2 ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                            </div>
                        </div>
                        <span style={{fontSize: '2.4375rem', lineHeight: '1.2', marginTop: '1.1875rem'}} className="m-0 font-spoqaMedium text-gray-bebebe tracking-minus05">영문과 숫자 6~8자로 입력해야 합니다. (특수문자 포함시 변경불가)</span>
                    </div>

                    {/* BREAK */}

                    <div style={{marginTop: '3.125rem'}} className="flex flex-wrap">
                        <div className='w-full flex'>
                            <Title text="환전 비밀번호 확인" />
                            <div className="w-full">
                                <input 
                                    className="w-full font-spoqa text-gray-bebebe outline-none placeholder-gray-bebebe"
                                    style={{fontSize: '2.625rem', marginBottom: '1.1875rem'}}
                                    onFocus={(e) => setSelectedInput(2)}
                                        onBlur={(e) => setSelectedInput(false)}
                                        type="password"
                                />
                                <div style={{height: '0.1875rem'}} className={`${selectedInput === 2 ? "bg-blue-r1ca7ec" : "bg-gray-bebebe"} w-full`}></div>
                            </div>
                        </div>
                    </div>


                    <div style={{marginTop: '6.75rem'}} className="w-full">


                        <div className="flex">
                            <Title text="레벨" />
                            <div className="w-full">
                                <label
                                    style={{fontSize: '2.625rem', marginBottom: '1.1875rem', display: 'inline-block'}}
                                    className="text-gray-r585858 font-spoqa">레벨 LV.1 (점수: 0)</label>
                                <div style={{height: '0.1875rem'}} className={`bg-gray-bebebe w-full`}></div>
                            </div>
                        </div>


                        
                        <div style={{marginTop: '3.125rem'}} className="flex">
                            <Title text="스포츠" />
                            <div className="w-full">
                                <label
                                    style={{fontSize: '2.625rem', marginBottom: '1.1875rem', display: 'inline-block'}}
                                    className="text-gray-r585858 font-spoqa">Bronze</label>
                                <div style={{height: '0.1875rem'}} className={`bg-gray-bebebe w-full`}></div>
                            </div>
                        </div>


                        <div style={{marginTop: '3.125rem'}} className="flex">
                            <Title text="카지노" />
                            <div className="w-full">
                                <label
                                    style={{fontSize: '2.625rem', marginBottom: '1.1875rem', display: 'inline-block'}}
                                    className="text-gray-r585858 font-spoqa">Bronze</label>
                                <div style={{height: '0.1875rem'}} className={`bg-gray-bebebe w-full`}></div>
                            </div>
                        </div>

                        
                        <div style={{marginTop: '3.125rem'}} className="flex">
                            <Title text="슬롯" />
                            <div className="w-full">
                                <label
                                    style={{fontSize: '2.625rem', marginBottom: '1.1875rem', display: 'inline-block'}}
                                    className="text-gray-r585858 font-spoqa">Bronze</label>
                                <div style={{height: '0.1875rem'}} className={`bg-gray-bebebe w-full`}></div>
                            </div>
                        </div>

                        <div style={{marginTop: '3.125rem'}} className="flex">
                            <Title text="미니게임" />
                            <div className="w-full">
                                <label
                                    style={{fontSize: '2.625rem', marginBottom: '1.1875rem', display: 'inline-block'}}
                                    className="text-gray-r585858 font-spoqa">Bronze</label>
                                <div style={{height: '0.1875rem'}} className={`bg-gray-bebebe w-full`}></div>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div style={{marginTop: '3.75rem', marginBottom: '20rem'}} className="w-full flex items-center justify-center">
                    <button style={{width: '36.4375rem', height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem'}} className="flex items-center justify-center rounded-md bg-red-cb4343 hover:opacity-75">
                        <div className="flex items-center justify-center w-full h-full rounded-lg border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-white">수정하기</span>
                        </div>
                    </button>
                </div>
            </div>

            <BottomNavbar />
        </div>
    )
}

export default EditInfo
