import BoardViewPanel from 'components/common/cards/BoardViewPanel';
import React from 'react'
import { useHistory } from 'react-router';
import Rank1 from '../../images/newImages/freeboard/1.png'
import Rank2 from '../../images/newImages/freeboard/2.png'
import Rank3 from '../../images/newImages/freeboard/3.png'
import Rank4 from '../../images/newImages/freeboard/4.png'
import Rank5 from '../../images/newImages/freeboard/5.png'
import ReplyArrow from '../../images/newImages/reply.png'

const FreeBoardView2 = () => {

    const history = useHistory();

    const SendMessage = ({placeholder, buttonText}) => {
        return (
            <div style={{height:"17.4375rem", borderRadius:"1.625rem", marginTop: '1.875rem', fontSize: '2.8125rem', borderWidth: '0.1875rem'}} className="relative flex w-full bg-white border border-gray-dddddd overflow-hidden">

                    <textarea 
                        style={{width: "60.9375rem", padding: '3.5625rem', paddingTop: '2.6875rem', paddingLeft: '3.75rem', paddingRight: '6.5625rem', resize: "none", lineHeight: '1.3', WebkitTextStroke:"0.2px"}}
                        className="place-color-grey overflow-hidden outline-none w-full font-spoqa tracking-tight placeholder-gray-r8f8f8f"
                        placeholder={placeholder}
                    />

                    <button style={{borderRadius:"1.625rem", width: '10.5625rem', padding: '1px'}} className="right-0 absolute flex items-center justify-center h-full bg-blue-r013d74 hover:opacity-75">
                        <div style={{borderRadius:"1.625rem"}} className="flex items-center justify-center h-full w-full bg-black rounded-xl border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-white">{buttonText}</span>
                        </div>
                    </button>
                </div>
        )
    }

    const ReplyCell = ({
        text = "이벤트 참여 감사합니다.",
        rank = 1,
        username = "쇼유",
        isEdit = false,
        tag = null,
        isOneButton = false
    }) => (
        <div style={{paddingTop: '2.251rem'}} className="w-full">
            <div className="w-full flex items-center flex justify-between">
                <div className="flex items-center">
                    <img style={{width: '2.25625rem', height: '2.25625rem', marginRight: '2.3125rem'}} src={ReplyArrow} alt="" />
                    <img style={{width: '3.625rem', height: '4.4375rem', marginRight: '0.8125rem'}} src={rank === 1 ? Rank1 : rank === 2 ? Rank2 : rank === 3 ? Rank3 : rank === 4 ? Rank4 : Rank5} alt="" />
                    <p style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-gray-r585858">{username}</p>
                    <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1875rem'}} className='bg-gray-c5c5c5'></div>
                    <p style={{fontSize: '2.25rem'}} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium">2021.06.28 15:36</p>
                </div>
            </div> 
            <div style={{marginLeft: '4.125rem', marginTop: '2.43rem', height: '8.625rem'}} className="">
                <div style={{borderRadius:"1rem", fontSize: '2.8125rem', paddingLeft: '3.5625rem', borderWidth: '0.1875rem'}} className="h-full w-full bg-white border border-gray-dddddd flex items-center justify-between">
                    <div className="flex font-spoqa">
                    {tag && ( <p style={{fontSize: '2.8125rem'}} className="text-blue-r0056a6 font-spoqa mr-4">@{tag}</p>)}
                    <p style={{WebkitTextStroke:"0.2px", fontSize: '2.8125rem'}} className="text-gray-r585858">{text}</p>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '1.1875rem', marginLeft: '4.125rem'}} className='flex'>
                <div  style={{width: '8.9375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.75rem'}} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                    <div className={`${isOneButton ? "text-gray-r7b7b7b" : "text-red-d52e2e"} font-spoqaMedium flex items-center justify-center`}>{isOneButton ? "답글" : "수정"}</div>
                </div>
                { !isOneButton && (
                    <div  style={{width: '8.9375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem'}} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                        <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-1.5">삭제</div>
                    </div>
                ) }
            </div>
        </div>
    )

    return (
        <div style={{padding: '1.875rem'}} className="w-full">
            <div style={{borderRadius:"1em"}} className="w-full shadow-subNavbar overflow-hidden">
                <div style={{height: '7.4375rem', borderBottomWidth: '0.1875rem'}} className="bg-gray-fafafa border-b border-gray-ededed justify-center flex items-center">
                    <div className="font-spoqaMedium tracking-tight text-5xl text-gray-r454545">이벤트 신청합니다.</div>
                </div>

                <div style={{height: '7.3125rem', padding: '1.4375rem 1.875rem', borderBottomWidth: '0.1875rem', marginBottom: '3.75rem'}} className="bg-gray-fafafa border-b border-gray-dddddd flex justify-between items-center">
                    <div className="w-full flex items-center flex justify-between">
                        <div className="flex items-center">
                            <img style={{width: '3.625rem', height: '4.4375rem', marginRight: '0.9rem'}} src={Rank1} alt="" />
                            <p style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-gray-r7b7b7b">하이도1207</p>
                            <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1875rem'}} className='bg-gray-dddddd'></div>
                            <p style={{fontSize: '2.25rem'}} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium">2021.06.28 15:49</p>
                        </div>
                    </div>
                    <div  style={{width: '10.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.4375rem'}} className='flex justify-center align-center rounded-full border-b border-gray-b7b7b7'>
                        <div style={{marginRight: '0.6875rem', marginTop: '0.3125rem'}} className="font-spoqaMedium tracking-tight text-gray-r7b7b7b">댓글</div>
                        <div className="text-red-d52e2e font-roboto flex items-center justify-center">2</div>
                    </div>
                </div>

                {/* <div className="bg-gray-fafafa border-b border-gray-dddddd flex items-center">
                    
                    <div className="font-spoqaMedium tracking-tight text-gray-r7b7b7b flex items-center"><img className="" src={Rank1} alt="" />하이도1207</div>
                    <div className="bg-gray-dddddd" />

                    <div className="font-spoqaMedium tracking-tight text-gray-r7b7b7b">2021.06.28 15:49</div>
                    
                    <div className="bg-gray-dddddd" />
                    <div className="font-spoqaMedium tracking-tight text-gray-r7b7b7b">댓글</div>
                    <div className="text-white font-roboto flex items-center justify-center rounded-full bg-red-notification">2</div>
                </div> */}

                <div style={{marginBottom:'5.625rem'}} className="w-full h-full">
                    <div className="">
                        <BoardViewPanel type={0} winAmount="+900,000,000"  isAttached={true} noButtons={true}/>
                        <BoardViewPanel type={1} winAmount="+900,000,000"  isAttached={true} noButtons={true}/>
                        {/* <SportsBetHistoryPanel type={3} isAttached={true} noButtons={true}/> */}
                        {/* <SportsBetHistoryPanel type={4} id={0} noButtons={true} attachedArray={[0]} />
                        <SportsBetHistoryPanel type={3} id={0} isAttached={true} noButtons={true} attachedArray={[2]} /> */}
                    </div>
                </div>

                <div style={{height:"28.1875rem", WebkitTextStroke:"", borderTopWidth: '0.1875rem', paddingTop: '1.875rem', paddingLeft: '2.0625rem', fontSize: '2.8125rem'}} className=" bg-white border-b border-gray-dddddd  font-spoqa tracking-tight text-gray-r585858">

                    베팅기록 올려봅니다.

                </div>

            
            </div>

            <div style={{margin: '3.75rem 0'}} className="w-full flex justify-end">
                <button style={{padding: '0.1875rem', height: '7.3125rem', fontSize: '2.8125rem'}} className="flex items-center justify-center w-1/2 mr-4 rounded-lg bg-red-cb4343 hover:opacity-75">
                    <div className="flex items-center justify-center h-full w-full rounded-lg border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-white">수정하기</span>
                    </div>
                </button>
                <button style={{padding: '0.1875rem', height: '7.3125rem', fontSize: '2.8125rem'}} className="flex items-center justify-center w-1/2 rounded-lg bg-gray-r171a1d hover:opacity-75" >
                    <div className="flex items-center justify-center h-full w-full rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-white">삭제하기</span>
                    </div>
                </button>
            </div>


            <div style={{borderRadius:"3.1875rem", padding: '1.875rem', paddingTop: '1.125rem'}} className="w-full bg-gray-fafafa shadow-subNavbar">
                <div  className="flex items-center justify-between">
                    <p style={{fontSize: '2.625rem', marginTop: '1rem'}} className="font-spoqaMedium tracking-tight text-gray-r454545">댓글 작성하기</p>
                    <div  style={{width: '10.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.4375rem'}} className='flex justify-center mt-3 align-center rounded-full border-b border-gray-b7b7b7'>
                        <div style={{marginRight: '0.6875rem'}} className="font-spoqaMedium tracking-tight text-gray-r7b7b7b">댓글</div>
                        <div className="text-red-d52e2e font-roboto flex items-center justify-center">2</div>
                    </div>
                </div>
                <div style={{paddingTop: '0.625rem'}}>
                    <SendMessage placeholder='욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다.' buttonText='등록' />
                </div>
            </div>

            {/* second */}
            <div style={{borderRadius:"3.1875rem", marginTop: '3.75rem', padding: '1.875rem 0', paddingTop: '2.25rem'}} className="w-full bg-gray-fafafa shadow-subNavbar">
                <div style={{padding: '0 1.875rem', borderBottomWidth: '0.1875rem'}} className="border-b border-gray-dddddd"> 
                    <div className="w-full flex items-center flex justify-between">
                        <div className="flex items-center">
                            <img style={{width: '3.625rem', height: '4.4375rem', marginRight: '0.5625rem'}} src={Rank2} alt="" />
                            <p style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-gray-r585858">신풍사우나</p>
                            <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1875rem'}} className='bg-gray-c5c5c5'></div>
                            <p style={{fontSize: '2.25rem'}} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium">2021.06.28 15:36</p>
                        </div>
                    </div>
                    
                    <div style={{borderRadius:"1em", WebkitTextStroke:"0.2px", height: '8.5625rem', marginTop: '2.25rem', marginBottom: '1.1875rem', borderWidth: '0.1875rem'}} className="w-full h-full bg-white border border-gray-dddddd flex items-center justify-between">
                        <p style={{fontSize: '2.8125rem', paddingLeft: '3.6875rem'}} className="font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                    </div>
                    <div style={{marginBottom: '1.125rem'}} className='flex'>
                        <div  style={{width: '8.9375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.75rem'}} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                            <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-1.5">수정</div>
                        </div>
                        <div  style={{width: '8.9375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem'}} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                            <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-1.5">삭제</div>
                        </div>
                    </div>
                </div>

                <div style={{padding: '0 1.875rem'}}>
                    <ReplyCell rank={5} isOneButton={true} />
                    <ReplyCell rank={2} username="신풍사우나" isEdit={true} text="오전에 발행되나요?" tag="소유"/>
                </div>
            </div>


            {/* third */}
            <div style={{borderRadius:"3.1875rem", marginTop: '3.75rem', padding: '1.875rem 0', paddingTop: '2.25rem'}} className="w-full bg-gray-fafafa shadow-subNavbar">
                <div style={{padding: '0 1.875rem', borderBottomWidth: '0.1875rem'}} className="border-b border-gray-dddddd"> 
                    <div className="w-full flex items-center flex justify-between">
                        <div className="flex items-center">
                            <img style={{width: '3.625rem', height: '4.4375rem', marginRight: '0.5625rem'}} src={Rank2} alt="" />
                            <p style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-gray-r585858">신풍사우나</p>
                            <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1875rem'}} className='bg-gray-c5c5c5'></div>
                            <p style={{fontSize: '2.25rem'}} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium">2021.06.28 15:36</p>
                        </div>
                    </div>
                    
                    <div style={{borderRadius:"1em", WebkitTextStroke:"0.2px", height: '8.5625rem', marginTop: '2.25rem', marginBottom: '1.1875rem', borderWidth: '0.1875rem'}} className="w-full bg-white border border-gray-dddddd flex items-center justify-between">
                        <p style={{fontSize: '2.8125rem', marginLeft: '3.6875rem'}} className="font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                    </div>
                    <div style={{marginBottom: '1.125rem'}} className='flex'>
                        <div  style={{width: '8.9375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.75rem'}} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                            <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-1.5">수정</div>
                        </div>
                        <div  style={{width: '8.9375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem'}} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                            <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center mt-1.5">삭제</div>
                        </div>
                    </div>
                </div>

                <div style={{padding: '0 1.875rem'}}>
                    <SendMessage placeholder='두개의 이벤트 모두 참여하였습니다.' buttonText='등록' />
                </div>
            </div>

            {/* fourth */}
            <div style={{borderRadius:"3.1875rem", marginTop: '3.75rem', padding: '1.875rem 0', paddingTop: '2.25rem'}} className="w-full bg-gray-fafafa shadow-subNavbar">
                <div style={{padding: '0 1.875rem', borderBottomWidth: '0.1875rem'}} className="border-b border-gray-dddddd"> 
                        <div className="w-full flex items-center flex justify-between">
                            <div className="flex items-center">
                                <img style={{width: '3.625rem', height: '4.4375rem'}} src={Rank2} alt="" />
                                <p style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-gray-r585858">신풍사우나</p>
                                <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1875rem'}} className='bg-gray-c5c5c5'></div>
                                <p style={{fontSize: '2.25rem'}} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium">2021.06.28 15:36</p>
                            </div>
                        </div>
                        
                        <div style={{borderRadius:"1em", WebkitTextStroke:"0.2px", height: '8.5625rem', marginTop: '2.25rem', marginBottom: '1.1875rem', borderWidth: '0.1875rem'}} className="w-full bg-white border border-gray-dddddd flex items-center justify-between">
                            <p style={{fontSize: '2.8125rem', paddingLeft: '3.0625rem'}} className="font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                        </div>
                        <div style={{marginBottom: '1.125rem'}} className='flex'>
                            <div  style={{width: '8.9375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.75rem'}} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div className="text-gray-r7b7b7b font-spoqaMedium flex items-center justify-center">답글</div>
                            </div>
                        </div>
                    </div>

                    <div style={{padding: '0 1.875rem'}}>
                        <SendMessage placeholder='욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다.' buttonText='등록' />
                    </div>
            </div>

            <div style={{marginTop: '3.75rem', marginBottom: '19.625rem'}} className="w-full flex items-start justify-between">
                <button style={{height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem'}} className="flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75">
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">이전</span>
                    </div>
                </button>

                <button 
                    style={{height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem'}} 
                    className="flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                    onClick={() => history.push('/freeboard')}
                >
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">목록보기</span>
                    </div>
                </button>

                <button 
                    style={{height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem'}} 
                    className="flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                    onClick={() => history.push('/freeboard/view2')}
                >
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">다음</span>
                    </div>
                </button>
            </div>
            
        </div>
    )
}

export default FreeBoardView2
