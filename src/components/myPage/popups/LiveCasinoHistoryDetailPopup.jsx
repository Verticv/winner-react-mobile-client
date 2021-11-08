import React from 'react'
import CloseIcon from '../../../images/popups/close.png'
import Sample1 from '../../../images/myPage/betHistory/sample1.png'
import Sample2 from '../../../images/myPage/betHistory/sample2.png'

const LiveCasinoHistoryDetailPopup = ({setPopupOpen}) => {
    return (
        <div 
            style={{height: "825px", width:"690px", borderRadius: "10px", backgroundColor:"#5d799c"}}
            className="bg-white overflow-hidden"
        >

            <div className="relative h-71px bg-blue-r5d799c flex items-center justify-center flex-shrink-0">
                <label className="font-spoqaBold text-white tracking-tight text-24px">거래 상세 내역</label>
                <button className="absolute right-0 mr-26px cursor-pointer z-20" onClick={()=> setPopupOpen(false)}>
                    <img src={CloseIcon} alt="close_icon" />
                </button>
            </div>
            
            <div style={{}} className="h-full bg-white flex flex-col items-center text-gray-r454545">
                <div className="text-22px tracking-tight flex h-22px items-center mt-35px mb-20px">
                    <p className="font-spoqaMedium">플레이어 이름:</p>
                    <p className="font-spoqaBold text-blue-r0056a6 ml-5px">WINlouie3</p>
                </div>

                <div style={{width:"459px", backgroundColor:"#868686"}} className="h-px mb-22px"></div>

                <div 
                    style={{width:"618px", height:"619px", backgroundColor:"#ffffff"}} 
                    className="rounded-2xl shadow-subNavbar overflow-hidden"
                >
                    
                    <div className="flex flex-col">
                        <div 
                            style={{backgroundColor:"#8e9296"}}
                            className="h-42px flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-white"
                        >
                            바카라 on 2021-08-09 17:26:30
                        </div>

                        <div className="flex">
                            <div 
                                style={{backgroundColor:"#f8f9fb"}} 
                                className="flex flex-col w-full border-r border-gray-dddddd text-16px font-spoqaMedium tracking-tight text-gray-r585858"
                            >
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    게임
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    테이블아이디
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    게임상태
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    종료시간
                                </div>

                                <div 
                                    style={{backgroundColor:"#8e9296"}}
                                    className="h-42px flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-white"
                                >
                                    뱅커 핸드
                                </div>

                                <div 
                                    style={{height:"127px"}} 
                                    className=" border-b border-gray-dddddd flex items-center justify-center bg-white"
                                >
                                    <img src={Sample1} alt="" />
                                </div>

                                <div style={{height:"41px"}} className="flex h-41px border-b border-gray-dddddd">
                                    <div 
                                        style={{backgroundColor:"#8e9296", width:"71px"}}
                                        className=" flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-white border-r"
                                    >
                                        베팅
                                    </div>
                                    <div 
                                        style={{backgroundColor:"#8e9296", width:"119px"}}
                                        className=" flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-white border-r"
                                    >
                                        금액
                                    </div>
                                    <div 
                                        style={{backgroundColor:"#8e9296", width:"119px"}}
                                        className=" flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-white"
                                    >
                                        회원승패
                                    </div>
                                </div>

                                <div style={{height:"41px"}} className="flex font-robotoRegular border-b border-gray-dddddd text-gray-r585858">
                                    <div 
                                        style={{backgroundColor:"#ffffff", width:"71px"}}
                                        className=" flex items-center justify-center text-16px tracking-tight text- border-r"
                                    >
                                        player
                                    </div>
                                    <div 
                                        style={{backgroundColor:"#ffffff", width:"119px"}}
                                        className=" flex items-center justify-center text-16px tracking-tight text- border-r"
                                    >
                                        50,000.00
                                    </div>
                                    <div 
                                        style={{backgroundColor:"#ffffff", width:"119px"}}
                                        className=" flex items-center justify-center text-16px tracking-tight text-"
                                    >
                                        10,000.00
                                    </div>
                                </div>

                            </div>
                            
                            <div 
                                style={{backgroundColor:"#ffffff"}} 
                                className="flex flex-col w-full border-r border-gray-dddddd text-16px font-robotoRegular tracking-tight text-gray-r585858"
                            >
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    28
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    10103
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-center font-spoqa"
                                >
                                    처리됨
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    2021-08-09 18:26:47
                                </div>

                                <div 
                                    style={{backgroundColor:"#8e9296"}}
                                    className="h-42px flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-white"
                                >
                                    플레이어 핸드
                                </div>

                                <div 
                                    style={{height:"127px"}} 
                                    className=" border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    <img src={Sample2} alt="" />
                                </div>

                                <div style={{height:"41px"}}  className="flex border-b border-gray-dddddd">
                                    <div 
                                        style={{backgroundColor:"#8e9296"}}
                                        className=" flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-white border-r w-full"
                                    >
                                        거래아이디
                                    </div>
                                    <div 
                                        style={{backgroundColor:"#8e9296"}}
                                        className=" flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-white border-r w-full"
                                    >
                                        베팅시간
                                    </div>
                                </div>


                                <div style={{height:"41px"}} className="flex font-robotoRegular border-b border-gray-dddddd text-gray-r585858">
                                    <div 
                                        style={{backgroundColor:"#ffffff"}}
                                        className=" flex items-center justify-center text-16px tracking-tight border-r w-full"
                                    >
                                        85040508001
                                    </div>
                                    <div 
                                        style={{backgroundColor:"#ffffff"}}
                                        className=" flex flex-col -space-y-6px items-center justify-center text-16px tracking-tight w-full"
                                    >
                                        <p>2021-08-09</p>
                                        <p>18:26:27</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div 
                            style={{backgroundColor:"#8e9296", height: "41px"}}
                            className="flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-white border-b border-gray-dddddd"
                        >
                            게임요약
                        </div>
                        <div className="flex">
                            <div 
                                style={{backgroundColor:"#f8f9fb"}} 
                                className="flex flex-col w-full border-r border-gray-dddddd text-16px font-spoqaMedium tracking-tight text-gray-r585858"
                            >
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    총 베팅금액
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    총 지불금액
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-center"
                                >
                                    총 회원승패
                                </div>
                            </div>
                            <div 
                                style={{backgroundColor:"#ffffff"}} 
                                className="flex flex-col w-full border-r border-gray-dddddd text-16px font-robotoRegular tracking-tight text-gray-r585858"
                            >
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-end pr-15px"
                                >
                                    5,000.00
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-end pr-15px"
                                >
                                    10,000.00
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-gray-dddddd flex items-center justify-end pr-15px"
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
