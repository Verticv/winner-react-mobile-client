import React from 'react'
import CloseIcon from '../../../images/popups/close.png'
import Sample1 from '../../../images/myPage/betHistory/sample1.png'
import Sample2 from '../../../images/myPage/betHistory/sample2.png'

const LiveCasinoHistoryDetailPopup = ({setPopupOpen}) => {
    return (
        <div 
            style={{height: "118.5rem", width:"72.125rem", borderRadius: "2.5rem", marginTop: '11.8593rem'}}
            className="bg-white overflow-hidden mb-64"
        >

            <div style={{height: '9.5rem', fontSize: '3.75rem'}} className="relative  bg-blue-r5d799c flex items-center justify-center flex-shrink-0">
                <label className="font-spoqaBold text-white tracking-tight">거래 상세 내역</label>
                <button style={{marginRight: '4.375rem'}} className="absolute right-0 cursor-pointer z-20" onClick={()=> setPopupOpen(false)}>
                    <img style={{width: '3.1875rem', height: '3.1875rem'}} src={CloseIcon} alt="close_icon" />
                </button>
            </div>
            
            <div style={{padding: '0 2.0625rem', paddingBottom: '2.0625rem'}} className="h-full bg-white flex flex-col items-center text-gray-r454545">
                <div style={{height: '11.1875rem', fontSize: '2.8125rem', paddingTop: '2.875rem'}} className='flex flex-col items-center'>
                    <div style={{marginBottom: '1.0625rem'}} className="tracking-tight flex items-center">
                        <p className="font-spoqaMedium">플레이어 이름:</p>
                        <p className="font-spoqaBold text-blue-r0056a6">WINlouie3</p>
                    </div>
                    <div style={{backgroundColor:"#868686", height: '0.1875rem', minHeight: '2px', marginBottom: '44px', width: '45.4375rem'}} className=""></div>
                </div>
                <div 
                    style={{height:"", backgroundColor:"#ffffff", fontSize: '2.625rem'}} 
                    className="w-full rounded-2xl shadow-subNavbar overflow-hidden"
                >
                    
                    <div className="flex flex-col">
                        <div 
                            style={{backgroundColor:"#8e9296", height: '5.375rem'}}
                            className="flex items-center justify-center font-spoqaMedium tracking-tight text-white"
                        >
                            바카라 on 2021-08-09 17:26:30
                        </div>

                        <div className="flex">
                            <div 
                                style={{backgroundColor:"#f8f9fb"}} 
                                className="flex flex-col w-full border-r border-gray-dddddd font-spoqaMedium tracking-tight text-gray-r585858"
                            >
                                <div 
                                    style={{height:"5.5rem"}} 
                                    className="border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    게임
                                </div>
                                <div 
                                    style={{height:"5.5rem"}} 
                                    className="border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    테이블아이디
                                </div>
                                <div 
                                    style={{height:"5.5rem"}} 
                                    className="border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    게임상태
                                </div>
                                <div 
                                    style={{height:"5.5rem"}} 
                                    className="border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    종료시간
                                </div>

                                <div 
                                    style={{backgroundColor:"#8e9296", height: '5.375rem'}}
                                    className="flex items-center justify-center font-spoqaMedium tracking-tight text-white"
                                >
                                    뱅커 핸드
                                </div>

                                <div 
                                    style={{height:"18.375rem"}} 
                                    className=" border-b border-gray-dddddd flex items-center justify-center bg-white"
                                >
                                    <img style={{width: '23.625rem', height: '16.25rem'}} src={Sample1} alt="" />
                                </div>



                            </div>
                            
                            <div 
                                style={{backgroundColor:"#ffffff"}} 
                                className="flex flex-col w-full border-r border-gray-dddddd font-robotoRegular tracking-tight text-gray-r585858"
                            >
                                <div 
                                    style={{height:"5.5rem"}} 
                                    className="border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    28
                                </div>
                                <div 
                                    style={{height:"5.5rem"}} 
                                    className="border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    10103
                                </div>
                                <div 
                                    style={{height:"5.5rem"}} 
                                    className="border-b border-gray-dddddd flex items-center justify-center font-spoqa"
                                >
                                    처리됨
                                </div>
                                <div 
                                    style={{height:"5.5rem"}} 
                                    className="border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    2021-08-09 18:26:47
                                </div>

                                <div 
                                    style={{backgroundColor:"#8e9296", height: '5.375rem'}}
                                    className="flex items-center justify-center font-spoqaMedium tracking-tight text-white"
                                >
                                    플레이어 핸드
                                </div>

                                <div 
                                    style={{height:"18.375rem"}} 
                                    className=" border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    <img style={{width: '23.625rem', height: '16.25rem'}} src={Sample2} alt="" />
                                </div>

                                
                            </div>
                        </div>

                        <div style={{height:"5.375rem"}} className="flex W-FULL border-b border-gray-dddddd">
                            <div 
                                style={{backgroundColor:"#8e9296"}}
                                className=" flex flex-1 items-center justify-center font-spoqaMedium tracking-tight text-white border-r"
                            >
                                베팅
                            </div>
                            <div 
                                style={{backgroundColor:"#8e9296"}}
                                className=" flex flex-1 items-center justify-center font-spoqaMedium tracking-tight text-white border-r"
                            >
                                금액
                            </div>
                            <div 
                                style={{backgroundColor:"#8e9296"}}
                                className=" flex flex-1 items-center justify-center font-spoqaMedium tracking-tight text-white"
                            >
                                회원승패
                            </div>
                        </div>

                        <div style={{height:"5.5rem"}} className="flex font-robotoRegular border-b border-gray-dddddd text-gray-r585858">
                            <div 
                                style={{backgroundColor:"#ffffff"}}
                                className=" flex flex-1 items-center justify-center tracking-tight text- border-r"
                            >
                                player
                            </div>
                            <div 
                                style={{backgroundColor:"#ffffff"}}
                                className=" flex flex-1 items-center justify-center tracking-tight text- border-r"
                            >
                                50,000.00
                            </div>
                            <div 
                                style={{backgroundColor:"#ffffff"}}
                                className=" flex flex-1 items-center justify-center tracking-tight text-"
                            >
                                10,000.00
                            </div>
                        </div>

                        <div style={{height:"5.375rem"}}  className="flex w-full border-b border-gray-dddddd">
                            <div 
                                style={{backgroundColor:"#8e9296"}}
                                className=" flex flex-1 items-center justify-center font-spoqaMedium tracking-tight text-white border-r"
                            >
                                거래아이디
                            </div>
                            <div 
                                style={{backgroundColor:"#8e9296"}}
                                className=" flex flex-1 items-center justify-center font-spoqaMedium tracking-tight text-white border-r"
                            >
                                베팅시간
                            </div>
                        </div>


                        <div className="flex w-full font-robotoRegular border-b border-gray-dddddd text-gray-r585858">
                            <div 
                                style={{backgroundColor:"#ffffff", height: '5.5rem'}}
                                className=" flex flex-1 items-center justify-center tracking-tight border-r"
                            >
                                85040508001
                            </div>
                            <div 
                                style={{backgroundColor:"#ffffff", height: '5.5rem'}}
                                className=" flex flex-1 flex-col items-center justify-center tracking-tight"
                            >
                                <p>2021-08-09 18:26:27</p>
                            </div>
                        </div>


                        <div 
                            style={{backgroundColor:"#8e9296", height: '5.375rem'}}
                            className="flex items-center justify-center font-spoqaMedium tracking-tight text-white border-b border-gray-dddddd"
                        >
                            게임요약
                        </div>


                        <div className="flex">
                            <div 
                                style={{backgroundColor:"#f8f9fb"}} 
                                className="flex flex-col w-full border-r border-gray-dddddd font-spoqaMedium tracking-tight text-gray-r585858"
                            >
                                <div 
                                    style={{height:"5.5rem"}} 
                                    className="border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    총 베팅금액
                                </div>
                                <div 
                                    style={{height:"5.5rem"}} 
                                    className="border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    총 지불금액
                                </div>
                                <div 
                                    style={{height:"5.5rem"}} 
                                    className="border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    총 회원승패
                                </div>
                            </div>
                            <div 
                                style={{backgroundColor:"#ffffff"}} 
                                className="flex flex-col w-full border-r border-gray-dddddd font-robotoRegular tracking-tight text-gray-r585858"
                            >
                                <div 
                                    style={{height:"5.5rem", marginRight: '1.8125rem'}} 
                                    className="border-b border-gray-dddddd flex items-center justify-end"
                                >
                                    5,000.00
                                </div>
                                <div 
                                    style={{height:"5.5rem", marginRight: '1.8125rem'}} 
                                    className="border-b border-gray-dddddd flex items-center justify-end"
                                >
                                    10,000.00
                                </div>
                                <div 
                                    style={{height:"5.5rem", marginRight: '1.8125rem'}} 
                                    className="border-b border-gray-dddddd flex items-center justify-end"
                                >
                                    5,000.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default LiveCasinoHistoryDetailPopup
