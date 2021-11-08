import SportsBetHistoryPanel from 'components/myPage/betHistory/SportsBetHistoryPanel';
import React from 'react'
import { useHistory } from 'react-router';
import Rank1 from '../../images/freeBoard/1.png'
import Rank2 from '../../images/freeBoard/2.png'
import Rank3 from '../../images/freeBoard/3.png'
import Rank4 from '../../images/freeBoard/4.png'
import Rank5 from '../../images/freeBoard/5.png'
import ReplyArrow from '../../images/freeBoard/reply.png'

const FreeBoardView2 = () => {

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
                    <p className="text-gray-r585858">{text}</p>
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
                    <div className="text-15px font-spoqaMedium tracking-tight text-gray-r454545">이벤트 신청합니다.</div>
                </div>

                <div className="bg-gray-fafafa h-58px border-b border-gray-dddddd flex items-center px-20px space-x-10px">
                    
                    <div className="font-spoqaMedium text-14px tracking-tight text-gray-r7b7b7b flex items-center"><img className="mb-2px mr-3px" src={Rank1} alt="" />하이도1207</div>
                    <div className="w-px h-10px bg-gray-dddddd" />

                    <div className="font-spoqaMedium text-14px tracking-tight text-gray-r7b7b7b">2021.06.28 15:49</div>
                    
                    <div className="w-px h-10px bg-gray-dddddd" />
                    <div className="font-spoqaMedium text-14px tracking-tight text-gray-r7b7b7b">댓글</div>
                    <div className="w-17px h-17px text-white text-12px font-roboto flex items-center justify-center rounded-full bg-red-notification pr-px">2</div>
                </div>

                <div className="py-20px border-b border-gray-dddddd px-30px space-y-28px"> 
                    <SportsBetHistoryPanel type={1} winAmount="+900,000,000"  isAttached={true} noButtons={true}/>
                    <SportsBetHistoryPanel type={2} isAttached={true} noButtons={true}/>
                    {/* <SportsBetHistoryPanel type={4} id={0} noButtons={true} attachedArray={[0]} />
                    <SportsBetHistoryPanel type={3} id={0} isAttached={true} noButtons={true} attachedArray={[2]} /> */}
                </div>

                <div style={{height:"441px", WebkitTextStroke:"0.2px"}} className="p-20px bg-white text-14px font-spoqa tracking-tight text-gray-r585858">

                    베팅기록 올려봅니다.

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
                            <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-red-cb4343 hover:opacity-75 hover:opacity-75">
                                <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                                    <span className="font-spoqaMedium tracking-tight text-14px text-white">수정하기</span>
                                </div>
                            </button>
                            <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-gray-r171a1d hover:opacity-75 hover:opacity-75" >
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
                    <div style={{height:"93px", borderRadius:"1em"}} className="relative flex w-full bg-white border border-gray-dddddd overflow-hidden">
                        <textarea 
                            style={{width: "1099px", resize: "none", WebkitTextStroke:"0.2px"}}
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
                <button 
                className="flex items-center justify-center h-36px w-90px rounded-4px bg-gray-r171a1d hover:opacity-75"
                onClick={() => history.push('/freeboard/view')}
                >
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

                <button className="flex items-center justify-center h-36px w-90px rounded-4px bg-gray-r171a1d hover:opacity-75">
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

export default FreeBoardView2
