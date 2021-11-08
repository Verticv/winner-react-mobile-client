import React from 'react'
import WinnerSmall from '../../images/freeBoard/winner_small.png'
import Sample from '../../images/freeBoard/sample.png'
import { useHistory } from 'react-router';
import Rank1 from '../../images/freeBoard/1.png'
import Rank2 from '../../images/freeBoard/2.png'
import Rank3 from '../../images/freeBoard/3.png'
import Rank4 from '../../images/freeBoard/4.png'
import Rank5 from '../../images/freeBoard/5.png'
import ReplyArrow from '../../images/freeBoard/reply.png'

const FreeBoardView = () => {

    const history = useHistory();

    const ReplyCell = ({
        text = "이벤트 참여 감사합니다.",
        rank = 1,
        username = "쇼유",
        isEdit = false,
        tag = null
    }) => (
        <div className="w-full h-110px pr-20px">
            <div className="h-56px ml-23px flex items-center justify-between">
                <div className="flex">
                    <img className="object-none" src={ReplyArrow} alt="" />
                    <img className="pl-12px" src={rank === 1 ? Rank1 : rank === 2 ? Rank2 : rank === 3 ? Rank3 : rank === 4 ? Rank4 : Rank5} alt="" />
                    <p className="ml-5px text-15px font-spoqaMedium tracking-tight text-gray-r454545">{username}</p>
                </div>
                {isEdit === true ? (
                    <div className="flex space-x-4px my-20px justify-end">
                        <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-red-cb4343 hover:opacity-75">
                            <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-white">수정하기</span>
                            </div>
                        </button>
                        <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-gray-r171a1d hover:opacity-75" >
                            <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-white">삭제하기</span>
                            </div>
                        </button>
                    </div>
                ) : (
                    <button className="flex items-center justify-center h-36px w-90px rounded-4px bg-blue-r0070d9 hover:opacity-75">
                        <div className="flex items-center justify-center h-34px w-88px bg-black rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">답글달기</span>
                        </div>
                    </button>
                )}
               
            </div> 
            <div className="pl-49px">
                <div style={{borderRadius:"1em"}} className="h-54px w-full bg-white border border-gray-dddddd flex items-center px-20px justify-between">
                    <div className="flex text-15px font-spoqa">
                    {tag && ( <p className="text-blue-r0056a6 mr-10px font-spoqaMedium">@{tag}</p>)}
                    <p style={{WebkitTextStroke:"0.2px"}} className="text-gray-r585858">{text}</p>
                    </div>
                    <p className="text-gray-r7b7b7b text-13px tracking-tight font-spoqa">2021.06.28 15:36</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="w-full">
            <div style={{borderRadius:"1em"}} className="w-full shadow-subNavbar overflow-hidden">
                <div className="bg-gray-fafafa h-58px border-b border-gray-dddddd flex items-center px-20px space-x-10px">
                    <div 
                        style={{backgroundColor:"#02569c"}} 
                        className="rounded-full flex items-center justify-center w-45px h-25px font-spoqaMedium text-12px tracking-tight text-white"
                    >
                        공지
                    </div>
                    <div 
                        style={{backgroundColor:"#ffab39"}} 
                        className="rounded-full flex items-center justify-center w-53px h-25px font-spoqaMedium text-12px tracking-tight text-white"
                    >
                        이벤트
                    </div>
                    <div className="text-15px font-spoqaMedium tracking-tight text-gray-r454545">메신져 고객센터 사칭주의</div>
                </div>

                <div className="bg-gray-fafafa h-58px border-b border-gray-dddddd flex items-center px-20px space-x-10px">
                    <img className="mb-3px" src={WinnerSmall} alt="" />
                    <div className="w-px h-10px bg-gray-dddddd" />
                    <div className="font-spoqaMedium text-14px tracking-tight text-gray-r7b7b7b">댓글</div>
                    <div className="w-17px h-17px text-white text-12px font-roboto flex items-center justify-center rounded-full bg-red-notification">2</div>
                </div>

                <div className="py-59px bg-white">

                    <div className="w-full flex justify-center">
                        <img src={Sample} alt="" />
                    </div>

                    <div className="px-20px pt-20px">
                        <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r585858">이벤트 중 주간 낙첨 포인트 지급은 21년 6월 7일 이후 베팅건 부터 아래와 같이 적용됩니다.</div>
                        <div 
                            style={{color:"#c0392b"}} 
                            className="h-16px flex items-center text-16px font-spoqaMedium tracking-tight mt-37px">
                                [낙첨 금액별 쿠폰 금액]
                        </div>
                        <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r585858 mt-19px">
                            10만원 ~     5,000 쿠폰
                        </div>
                        <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r585858 mt-19px">
                            20만원 이상     10,000  쿠폰
                        </div>
                        <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r585858 mt-19px">
                            30만원 이상     15,000  쿠폰
                        </div>
                        <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r585858 mt-19px">
                            50만원 이상     25,000  쿠폰
                        </div>
                        <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r585858 mt-19px">
                            100만원 이상     50,000  쿠폰
                        </div>
                        <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r585858 mt-19px">
                            300만원 이상     150,000  쿠폰
                        </div>
                        <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r585858 mt-19px">
                            500만원 이상     낙첨액 5%  쿠폰
                        </div>

                        <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r585858 mt-36px">
                            * 2021년 5월 31일 ~ 6월 6일 (일요일)까지 베팅 내역을 화요일 낙첨금액 5% 쿠폰 발행되며,
                        </div>
                        <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r585858 mt-21px">
                            <p style={{color:"#2980b9"}}>* 2021년 6월 7일 (월) 이후 베팅에 대한 낙첨쿠폰은 위 기준에 따라 제공</p>되오니 참고 부탁 드립니다.
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex space-x-4px my-20px justify-end">
                <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-red-cb4343 hover:opacity-75">
                    <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-14px text-white">수정하기</span>
                    </div>
                </button>
                <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-gray-r171a1d hover:opacity-75" >
                    <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-14px text-white">삭제하기</span>
                    </div>
                </button>
            </div>


            <div style={{height:"171px", borderRadius:"1em"}} className="w-full bg-gray-fafafa shadow-subNavbar px-20px pb-20px">
                <div className="h-58px flex items-center space-x-10px">
                    <p className="text-15px font-spoqaMedium tracking-tight text-gray-r454545">댓글 작성하기</p>
                    <div className="w-17px h-17px text-white text-12px font-roboto flex items-center justify-center rounded-full bg-red-notification pt-px">2</div>
                </div>
                <div style={{height:"93px", borderRadius:"1em"}} className="relative flex w-full bg-white border border-gray-dddddd overflow-hidden">

                    <textarea 
                        style={{width: "1099px", resize: "none", WebkitTextStroke:"0.2px"}}
                        className="outline-none w-full px-19px py-19px text-14px font-spoqa tracking-tight placeholder-gray-r8f8f8f"
                        placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다."
                    />

                    <button style={{borderRadius:"1em"}} className="right-0 absolute flex items-center justify-center h-93px w-120px bg-blue-r2068b2 hover:opacity-75">
                        <div style={{width:"118px", borderRadius:"1em"}} className="flex items-center justify-center h-91px w-118px bg-black rounded-xl border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">댓글작성</span>
                        </div>
                    </button>
                </div>
            </div>


            <div style={{borderRadius:"1em"}} className="w-full bg-gray-fafafa shadow-subNavbar mt-20px pb-20px">
                <div style={{height:"123px"}} className="border-b border-gray-dddddd px-20px"> 
                    <div className="h-58px w-full flex items-center flex justify-between">
                        <div className="flex items-center space-x-5px">
                            <img src={Rank2} alt="" />
                            <p className="text-15px font-spoqaMedium tracking-tight text-gray-r585858">신풍사우나</p>
                        </div>
                        <div className="flex space-x-4px my-20px justify-end">
                            <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-red-cb4343 hover:opacity-75">
                                <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                                    <span className="font-spoqaMedium tracking-tight text-14px text-white">수정하기</span>
                                </div>
                            </button>
                            <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-gray-r171a1d hover:opacity-75" >
                                <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                                    <span className="font-spoqaMedium tracking-tight text-14px text-white">삭제하기</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    
                    <div style={{borderRadius:"1em", WebkitTextStroke:"0.2px"}} className="h-54px w-full bg-white border border-gray-dddddd flex items-center px-20px justify-between">
                        <p className="text-15px font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                        <p className="text-gray-r7b7b7b text-13px tracking-tight font-spoqa">2021.06.28 15:36</p>
                    </div>
                </div>

                <ReplyCell rank={5} />
                <ReplyCell rank={2} username="신풍사우나" isEdit={true} text="오전에 발행되나요?" tag="소유"/>
            </div>



            <div style={{borderRadius:"1em"}} className="w-full bg-gray-fafafa shadow-subNavbar mt-20px">
                <div style={{height:"123px"}} className="border-b border-gray-dddddd px-20px"> 
                    <div className="h-58px w-full flex items-center flex justify-between">
                        <div className="flex items-center space-x-5px">
                            <img src={Rank2} alt="" />
                            <p className="text-15px font-spoqaMedium tracking-tight text-gray-r585858">신풍사우나</p>
                        </div>
                        <div className="flex space-x-4px my-20px justify-end">
                            <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-red-cb4343 hover:opacity-75">
                                <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                                    <span className="font-spoqaMedium tracking-tight text-14px text-white">수정하기</span>
                                </div>
                            </button>
                            <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-gray-r171a1d hover:opacity-75" >
                                <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                                    <span className="font-spoqaMedium tracking-tight text-14px text-white">삭제하기</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    
                    <div style={{borderRadius:"1em", WebkitTextStroke:"0.2px"}} className="h-54px w-full bg-white border border-gray-dddddd flex items-center px-20px justify-between">
                        <p className="text-15px font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                        <p className="text-gray-r7b7b7b text-13px tracking-tight font-spoqa">2021.06.28 15:36</p>
                    </div>
                </div>
                <div style={{height:"115px"}} className="px-20px py-11px">
                    <div style={{height:"93px", borderRadius:"1em"}} className="relative flex w-full bg-white border border-gray-dddddd overflow-hidden">
                        <textarea 
                            style={{width: "1099px", resize: "none", WebkitTextStroke:"0.2px"}}
                            className="outline-none w-full px-19px py-19px text-14px font-spoqa tracking-tight placeholder-gray-r8f8f8f"
                            placeholder="두개의 이벤트 모두 참여하였습니다."
                        />

                        <button style={{borderRadius:"1em"}} className="right-0 absolute flex items-center justify-center h-93px w-120px bg-blue-r2068b2 hover:opacity-75">
                            <div style={{width:"118px", borderRadius:"1em"}} className="flex items-center justify-center h-91px w-118px bg-black border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">댓글수정</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div style={{borderRadius:"1em"}} className="w-full bg-gray-fafafa shadow-subNavbar mt-20px">
                <div style={{height:"123px"}} className="border-b border-gray-dddddd px-20px"> 
                    <div className="h-58px w-full flex items-center flex justify-between">
                        <div className="flex items-center space-x-5px">
                            <img src={Rank2} alt="" />
                            <p className="text-15px font-spoqaMedium tracking-tight text-gray-r585858">신풍사우나</p>
                        </div>
                        <button className="flex items-center justify-center h-36px w-90px rounded-4px bg-blue-r0070d9 hover:opacity-75">
                            <div className="flex items-center justify-center h-34px w-88px bg-black rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-white">답글달기</span>
                            </div>
                        </button>
                    </div>
                    
                    <div style={{borderRadius:"1em", WebkitTextStroke:"0.2px"}} className="h-54px w-full bg-white border border-gray-dddddd flex items-center px-20px justify-between">
                        <p className="text-15px font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                        <p className="text-gray-r7b7b7b text-13px tracking-tight font-spoqa">2021.06.28 15:36</p>
                    </div>
                </div>
                <div style={{height:"115px"}} className="px-20px py-11px">
                    <div style={{height:"93px", borderRadius:"1em", WebkitTextStroke:"0.2px"}} className="relative flex w-full bg-white border border-gray-dddddd overflow-hidden">
                        <textarea 
                            style={{width: "1099px", resize: "none"}}
                            className="outline-none w-full px-19px py-19px text-14px font-spoqa tracking-tight placeholder-gray-r8f8f8f"
                            placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다."
                        />

                        <button style={{borderRadius:"1em"}} className="right-0 absolute flex items-center justify-center h-93px w-120px bg-blue-r2068b2 hover:opacity-75">
                            <div style={{width:"118px", borderRadius:"1em"}} className="flex items-center justify-center h-91px w-118px bg-black border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">답글작성</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>


            <div className="mt-20px mb-60px flex items-start justify-between">
                <button className="flex items-center justify-center h-36px w-90px rounded-4px bg-gray-r171a1d hover:opacity-75">
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-34px w-88px bg-black rounded-4px border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-14px text-white">이전</span>
                    </div>
                </button>

                <button 
                    className="flex items-center justify-center h-52px w-192px rounded-4px bg-gray-r171a1d hover:opacity-75"
                    onClick={() => history.push('/freeboard')}
                >
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-50px w-190px bg-black rounded-4px border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-16px text-white">목록보기</span>
                    </div>
                </button>

                <button 
                    className="flex items-center justify-center h-36px w-90px rounded-4px bg-gray-r171a1d hover:opacity-75"
                    onClick={() => history.push('/freeboard/view2')}
                >
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-34px w-88px bg-black rounded-4px border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-14px text-white">다음</span>
                    </div>
                </button>
            </div>
            
            
        </div>
    )
}

export default FreeBoardView
