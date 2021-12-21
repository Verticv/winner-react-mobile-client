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

    const SendMessage = ({placeholder, buttonText}) => {
        return (
            <div style={{height:"17.4375rem", borderRadius:"1.625rem", marginTop: '1.875rem', fontSize: '2.8125rem', borderWidth: '0.1875rem'}} className="relative flex w-full bg-white border border-gray-dddddd overflow-hidden">

                    <textarea 
                        style={{width: "60.9375rem", padding: '3.5625rem', paddingTop: '2.6875rem', paddingLeft: '3.75rem', paddingRight: '6.5625rem', resize: "none", lineHeight: '1.3', WebkitTextStroke:"0.2px"}}
                        className="place-color-grey overflow-hidden outline-none w-full font-spoqa tracking-tight placeholder-gray-r8f8f8f"
                        placeholder={placeholder}
                    />

                    <button style={{borderRadius:"1.625rem", width: '10.5625rem', padding: '0.1875rem'}} className="right-0 absolute flex items-center justify-center h-full bg-blue-r2068b2 hover:opacity-75">
                        <div style={{borderRadius:"1.625rem"}} className="flex items-center justify-center h-full w-full bg-black rounded-xl border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-white">{buttonText}</span>
                        </div>
                    </button>
                </div>
        )
    }

    const history = useHistory();

    const ReplyCell = ({
        text = "이벤트 참여 감사합니다.",
        rank = 1,
        username = "쇼유",
        isEdit = false,
        tag = null,
        isOneButton = false
    }) => (
        <div style={{paddingTop: '2.51rem'}} className="w-full">
            <div className="w-full flex items-center flex justify-between">
                <div className="flex items-center">
                    <img style={{width: '2.5625rem', height: '2.5625rem', marginRight: '2.3125rem'}} src={ReplyArrow} alt="" />
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
                        <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center">삭제</div>
                    </div>
                ) }
            </div>
        </div>
    )

    return (
        <div style={{padding: '0 1.875rem'}} className="w-full">
            <div style={{borderRadius:"1em", marginTop: '1.875rem'}} className="w-full shadow-subNavbar overflow-hidden">
                <div style={{borderBottomWidth: '0.1875rem'}} className="bg-gray-fafafa border-b border-gray-dddddd flex flex-wrap  items-center">
                    <div style={{margin: '2.0625rem 0'}} className='flex w-full justify-center'>
                        <div 
                            style={{backgroundColor:"#02569c", fontSize: '2.4375rem', padding: '0.35rem 1.8rem', width: 'fit-content', marginRight: '1.125rem'}} 
                            className="rounded-full flex items-center justify-center font-spoqaMedium tracking-tight text-white"
                        >
                            공지
                        </div>
                        <div 
                            style={{backgroundColor:"#00a1e9", fontSize: '2.4375rem', padding: '0.35rem 1.8rem', width: 'fit-content'}} 
                            className="rounded-full flex items-center justify-center font-spoqaMedium tracking-tight text-white"
                        >
                            안내
                        </div>
                    </div>
                    <div style={{marginBottom: '1.0625rem'}} className="text-5xl text-center w-full font-spoqaMedium tracking-tight text-gray-r454545">메신져 고객센터 사칭주의</div>
                </div>

                <div style={{height: '7.3125rem', padding: '1.4375rem 1.875rem', borderBottomWidth: '0.1875rem' }} className="bg-gray-fafafa border-b border-gray-dddddd flex justify-between items-center">
                    <img style={{width: '12.0625rem'}} className="h-12 object-contain" src={WinnerSmall} alt="" />
                    <div  style={{width: '10.375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.4375rem'}} className='flex justify-center align-center rounded-full border-b border-gray-b7b7b7'>
                        <div style={{marginRight: '0.6875rem'}} className="font-spoqaMedium tracking-tight text-gray-r7b7b7b">댓글</div>
                        <div className="text-red-d52e2e font-roboto flex items-center justify-center">2</div>
                    </div>
                </div>

                <div style={{paddingTop: '5.625rem'}} className="bg-white pb-8">

                    <div style={{padding: '0 1.875rem'}} className="w-full flex justify-center">
                        <img src={Sample} alt="" />
                    </div>

                    <div style={{fontSize: '2.8125rem', padding: '1.8125rem 1.875rem'}} className="font-spoqa">
                        <div style={{marginTop: '0.8125rem'}} className="flex items-center tracking-tight text-gray-r585858">이벤트 중 주간 낙첨 포인트 지급은 21년 6월 7일 이후 베팅건 부터 아래와 같이 적용됩니다.</div>
                        <div 
                            style={{color:"#c0392b", margin: '6.875rem 0'}} 
                            className="flex items-center tracking-tight">
                                [낙첨 금액별 쿠폰 금액]
                        </div>
                        <div style={{marginTop: '0.8125rem'}} className="flex items-center tracking-tight text-gray-r585858">
                            10만원 ~     5,000 쿠폰
                        </div>
                        <div style={{marginTop: '0.8125rem'}} className="flex items-center tracking-tight text-gray-r585858">
                            20만원 이상     10,000  쿠폰
                        </div>
                        <div style={{marginTop: '0.8125rem'}} className="flex items-center tracking-tight text-gray-r585858">
                            30만원 이상     15,000  쿠폰
                        </div>
                        <div style={{marginTop: '0.8125rem'}} className="flex items-center tracking-tight text-gray-r585858">
                            50만원 이상     25,000  쿠폰
                        </div>
                        <div style={{marginTop: '0.8125rem'}} className="flex items-center tracking-tight text-gray-r585858">
                            100만원 이상     50,000  쿠폰
                        </div>
                        <div style={{marginTop: '0.8125rem'}} className="flex items-center tracking-tight text-gray-r585858">
                            300만원 이상     150,000  쿠폰
                        </div>
                        <div style={{marginTop: '0.8125rem'}} className="flex items-center tracking-tight text-gray-r585858">
                            500만원 이상     낙첨액 5%  쿠폰
                        </div>

                        <div style={{margin: '6.875rem 0'}} className="flex items-center tracking-tight text-gray-r585858">
                            * 2021년 5월 31일 ~ 6월 6일 (일요일)까지 베팅 내역을 화요일 낙첨금액 5% 쿠폰 발행되며,
                        </div>
                        <div className="flex items-center tracking-tight text-gray-r585858">
                            <span style={{color:"#2980b9"}}>* 2021년 6월 7일 (월) 이후 베팅에 대한 낙첨쿠폰은 위 기준에 따라 제공 <span className='text-gray-r585858'>되오니 참고 부탁 드립니다.</span></span>
                        </div>
                    </div>

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
            <div style={{borderRadius:"3.1875rem", marginTop: '3.75rem', padding: '1.875rem 0', paddingTop: '2.5rem'}} className="w-full bg-gray-fafafa shadow-subNavbar">
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
                            <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center">수정</div>
                        </div>
                        <div  style={{width: '8.9375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem'}} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                            <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center">삭제</div>
                        </div>
                    </div>
                </div>

                <div style={{padding: '0 1.875rem'}}>
                    <ReplyCell rank={5} isOneButton={true} />
                    <ReplyCell rank={2} username="신풍사우나" isEdit={true} text="오전에 발행되나요?" tag="소유"/>
                </div>
            </div>


            {/* third */}
            <div style={{borderRadius:"3.1875rem", marginTop: '3.75rem', padding: '1.875rem 0', paddingTop: '2.5rem'}} className="w-full bg-gray-fafafa shadow-subNavbar">
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
                            <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center">수정</div>
                        </div>
                        <div  style={{width: '8.9375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem'}} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                            <div className="text-red-d52e2e font-spoqaMedium flex items-center justify-center">삭제</div>
                        </div>
                    </div>
                </div>

                <div style={{padding: '0 1.875rem'}}>
                    <SendMessage placeholder='두개의 이벤트 모두 참여하였습니다.' buttonText='등록' />
                </div>
            </div>

            {/* fourth */}
            <div style={{borderRadius:"3.1875rem", marginTop: '3.75rem', padding: '1.875rem 0'}} className="w-full bg-gray-fafafa shadow-subNavbar">
                <div style={{padding: '0 1.875rem', borderBottomWidth: '0.1875rem'}} className="border-b border-gray-dddddd"> 
                        <div className="w-full flex items-center flex justify-between">
                            <div className="flex items-center">
                                <img style={{width: '3.625rem', height: '4.4375rem'}} src={Rank2} alt="" />
                                <p style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-gray-r585858">신풍사우나</p>
                                <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1875rem'}} className='bg-gray-c5c5c5'></div>
                                <p style={{fontSize: '2.25rem'}} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium">2021.06.28 15:36</p>
                            </div>
                        </div>
                        
                        <div style={{borderRadius:"1em", WebkitTextStroke:"0.2px", height: '8.5625rem', marginTop: '3.3125rem', marginBottom: '2.25rem', borderWidth: '0.1875rem'}} className="w-full bg-white border border-gray-dddddd flex items-center justify-between">
                            <p style={{fontSize: '2.8125rem', paddingLeft: '3.0625rem'}} className="font-spoqa text-gray-r585858">두개의 이벤트 모두 참여하였습니다</p>
                        </div>
                        <div style={{marginBottom: '1.125rem'}} className='flex'>
                            <div  style={{width: '8.9375rem', height: '4.4375rem', borderWidth: '0.1875rem', fontSize: '2.25rem', marginRight: '0.75rem'}} className='flex justify-center align-center rounded-lg border-b border-gray-b7b7b7'>
                                <div className="text-gray-r7b7b7b font-spoqaMedium flex items-center justify-center">수정</div>
                            </div>
                        </div>
                    </div>

                    <div style={{padding: '0 1.875rem'}}>
                        <SendMessage placeholder='욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다.' buttonText='등록' />
                    </div>
            </div>


            <div style={{marginTop: '3.75rem', marginBottom: '14rem'}} className="w-full flex items-start justify-between">
                <button style={{height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem'}} className="flex items-center justify-center w-1/3 rounded-lg bg-gray-r171a1d hover:opacity-75">
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-lg border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">이전</span>
                    </div>
                </button>

                <button 
                    style={{height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem'}} 
                    className="flex items-center justify-center w-1/3 rounded-lg bg-gray-r171a1d hover:opacity-75"
                    onClick={() => history.push('/freeboard')}
                >
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-lg border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">목록보기</span>
                    </div>
                </button>

                <button 
                    style={{height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem'}} 
                    className="flex items-center justify-center w-1/3 rounded-lg bg-gray-r171a1d hover:opacity-75"
                    onClick={() => history.push('/freeboard/view2')}
                >
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-lg border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">다음</span>
                    </div>
                </button>
            </div>
            
            
        </div>
    )
}

export default FreeBoardView
