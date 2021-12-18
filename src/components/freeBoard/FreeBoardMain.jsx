import MobileDropDownControls from 'components/dropdowns/MobileDropDownControls';
import Pagination from 'components/myPage/Pagination';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import DownArrowIcon from '../../images/down_arrow_icon.png'
import SearchIcon from '../../images/myPage/search.png'
import BlueSpeaker from '../../images/freeBoard/blue_speaker.png'
import YellowSpeaker from '../../images/freeBoard/yellow_speaker.png'
import WinnerLogo from '../../images/freeBoard/winner_logo.png'
import Rank1 from '../../images/freeBoard/1.png'
import Rank2 from '../../images/freeBoard/2.png'
import Rank3 from '../../images/freeBoard/3.png'
import Rank4 from '../../images/freeBoard/4.png'
import Rank5 from '../../images/freeBoard/5.png'

const FreeBoardMain = () => {

    const cellArray = [
        { 
            id: 0,
            text: "입금규정 필독", 
            isRead: false,
            time: "2021.06.29 07:35",
            type: "안내",
            isClicked: true,
            path: '/freeboard/view/0'
        },
        { 
            id: 1,
            text: "메신저 고객센터 사칭주의", 
            isRead: false,
            time: "2021.06.29 07:35",
            type: "안내",
            path: '/freeboard/view/1'
        },
        { 
            id: 2,
            text: "슬롯 롤링 보너스 요율 X2배 증가 안내", 
            isRead: false,
            time: "2021.06.29 07:35",
            type: "안내",
            path: '/freeboard/view/2'
        },
        { 
            id: 3,
            text: "진행중 이벤트 안내(2021.06.02)", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "이벤트",
            path: '/freeboard/view/3'
        },
        { 
            id: 4,
            text: "스포츠 미니게임 충전 보너스 (21.04.24 변경)", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "이벤트",
            path: '/freeboard/view/4'
        },
        { 
            id: 5,
            text: "라이브 카지노 충전 보너스", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "이벤트",
            path: '/freeboard/view/5'
        },
        { 
            id: 6,
            text: "다폴더 적중 보너스 지금(변경 21.04.16)", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "이벤트",
            path: '/freeboard/view/6'
        },
        { 
            id: 7,
            text: "카지노 주간 낙첨 이벤트!(변경 21.06.07)", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "이벤트",
            path: '/freeboard/view/7'
        },
        { 
            id: 8,
            text: "슬롯 충전 남첨 이벤트(변경 21.06.07)", 
            isRead: true,
            time: "2021.06.29 07:35",
            type: "이벤트",
            path: '/freeboard/view/8'
        },
        { 
            id: 9,
            text: "신규 이벤트 가입", 
            isRead: false,
            time: "2021.06.29 07:35",
            type: "이벤트",
            path: '/freeboard/view/9'
        },
        { 
            id: 10,
            text: "슬롯 페이백 복구", 
            isRead: false,
            time: "2021.06.29 07:35",
            type: "이벤트",
            path: '/freeboard/view/10'
        },
        { 
            id: 2805,
            text: "아챔 올플핸", 
            isRead: true,
            isBetHistory: true,
            replies: 20,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2805',
            author: "필라델피아",
            level: 3
        },
        { 
            id: 2804,
            text: "다폴더 이벤트", 
            isRead: true,
            isBetHistory: true,
            replies: 2,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2804',
            author: "하이도1207",
            level: 1
        },
        { 
            id: 2803,
            text: "다폴더 이벤트 신청합니다.", 
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2803',
            author: "소유",
            level: 1
        },
        { 
            id: 2802,
            text: "다폴드 이벤트 참여", 
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2802',
            author: "보라매유아인",
            level: 1
        },
        { 
            id: 2801,
            text: "다폴더 이벤트 신청합니다.", 
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2801',
            author: "아기히뽀",
            level: 4
        },
        { 
            id: 2800,
            text: "다폴더 이벤트 신청합니다.", 
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2800',
            author: "소유",
            level: 5
        },
        { 
            id: 2799,
            text: "다폴", 
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2799',
            author: "야리직",
            level: 1
        },
        { 
            id: 2798,
            text: "다폴더", 
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2798',
            author: "신풍사우나",
            level: 2
        },
        { 
            id: 2797,
            text: "아챔 올플핸", 
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2797',
            author: "필라델피아",
            level: 3
        },
        { 
            id: 2796,
            text: "다폴더 이벤트", 
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2796',
            author: "하이도1207",
            level: 1
        },
        { 
            id: 2795,
            text: "다폴더 이벤트 신청합니다.", 
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2795',
            author: "소유",
            level: 1
        },
        { 
            id: 2794,
            text: "다폴더 이벤트 참여.", 
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2794',
            author: "보라매유아인",
            level: 1
        },
        { 
            id: 2793,
            text: "다폴더 이벤트 신청합니다.", 
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2793',
            author: "아기히뽀",
            level: 4
        },
        { 
            id: 2792,
            text: "다폴더 이벤트 신청합니다.", 
            isRead: true,
            isBetHistory: true,
            time: "2021.06.28 15:36",
            type: "일반",
            path: '/freeboard/view2/2792',
            author: "소유",
            level: 5
        },
        
    ];

    const history = useHistory();
    const [page, setPage] = useState(0)
    const [selectedCarrier, setSelectedCarrier] = useState("제목")
    const [isDropdownOpen, setDropdownOpen] = useState(true)

    const dropDownCellClass = "flex w-120px h-40px py-2px bg-white items-center hover:bg-blue-lightGradLight px-14px"

    const searchDropdown = (
        <div style={{width: '15rem'}} className="mt-4px flex flex-col items-center justify-center w-120px overflow-hidden bg-white rounded-md border border-gray-dddddd text-gray-r393e41 font-spoqaMedium text-14px tracking-tight">
            <button style={{width: '15rem', height: '6.75rem', fontSize: '2.8125rem'}} className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("제목")
                setDropdownOpen(false)
            }}>
                제목
            </button>
            <button style={{width: '15rem', height: '6.75rem', fontSize: '2.8125rem'}} className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("본문")
                setDropdownOpen(false)
            }}>
                본문
            </button>
            <button style={{width: '15rem', height: '6.75rem', fontSize: '2.8125rem'}} className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("작성자")
                setDropdownOpen(false)
            }}>
                작성자
            </button>
        </div>
    )

    const dropdownButton = (
        <div style={{width: '15rem', borderWidth: '0.1875rem'}} className="flex h-full bg-white rounded-md border border-gray-dddddd group">
            <input  className="w-0 text-16px"/>
            <div
                className="flex w-full text-gray-r393e41 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight" 
            >
                <label style={{fontSize: '2.8125rem', marginLeft: '1.6875rem'}} className="cursor-pointer group-hover:text-black">{selectedCarrier}</label>
                <img style={{width: '1.5625rem', height: '1rem', marginRight: '1.5625rem'}} className="w-10px h-6px object-contain" src={DownArrowIcon} alt="arrow" /> 
            </div>
        </div>
    )

    const InboxSearch = (
        <div style={{padding: '1.9375rem', height: '10.4375rem', borderWidth: '0.1875rem'}} className="w-full bg-gray-f9f9f9 rounded-2xl border border-gray-dddddd flex items-center justify-center space-x-10px">
            <MobileDropDownControls 
                buttonChild={dropdownButton} 
                isDropdownOpen={isDropdownOpen} 
                setDropdownOpen={setDropdownOpen}
                dropdownContainerStyle={{marginTop: '6.75rem'}}
            >
                {searchDropdown}
            </MobileDropDownControls>

            <div style={{borderWidth: '0.1875rem'}} className="flex w-full h-full bg-white rounded-md border border-gray-dddddd">
                <input 
                    style={{fontSize: '2.8125rem', paddingLeft: '1.5625rem'}}
                    className="rounded-md placeholder-gray-r7c7c7c w-full text-gray-r393e41 font-spoqaMedium outline-none h-full justify-between items-center tracking-tight"
                    placeholder="검색어를 입력해 주세요"
                />
                <button style={{width: '6.75rem'}} className="flex items-center justify-center h-full rounded-md bg-gradient-to-b from-gray-r555555 via-gray-r555555 to-gray-r333333 -mt-px -mr-px flex-shrink-0 hover:opacity-75">
                    <img style={{width: '3.125rem', height: '3.125rem'}} src={SearchIcon} alt=""/>
                </button>
            </div>
        </div>
    )

    function InboxList({ items }) {
        return items.map(item => (
            <button 
                style={{height: '11.625rem'}}
                key={item.id} 
                className='relative font-spoqaMedium text-14px tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd'
                onClick={() => history.push(item.path)}
            >
                <div 
                    style={{
                        padding: '1.75rem 2.2rem',
                        paddingBottom: "1.5rem",
                        backgroundColor: 
                        item.type === "안내" 
                        ? "#e5edfb" 
                        : item.type === "이벤트" 
                        ? "#fff5d7" 
                        : item.id % 2 === 0 
                        ? "#f7f9fc"
                        : ""
                    }}
                    className="flex items-center font-spoqaMedium tracking-tight text-gray-r454545 h-full border-b border-gray-dddddd" >     
                    
                    {item.type === "안내" || item.type === "이벤트" ? (
                        <div style={{marginRight: '2.375rem'}} className="font-spoqaMedium tracking-tight text-gray-r585858 flex items-center justify-center">
                            {item.type === "안내" 
                            ? <img style={{width: '3.3125rem'}} src={BlueSpeaker} alt="" />
                            : item.type === "이벤트" 
                            ? <img style={{width: '3.3125rem'}} src={YellowSpeaker} alt="" />
                            : ''
                            }
                        </div> 
                    ): (<></>)}

                      

                    <div className='w-full h-full flex flex-wrap'>
                        <div 
                            className={`w-full flex items-center font-spoqaMedium text-gray-r585858 group`}>
                            {
                                item.type === "안내" 
                                ? <div style={{fontSize: '2.4375rem', padding: '0.35rem 1.8rem'}} className="rounded-full bg-blue-r00a1e9 flex items-center justify-center text-white mr-4 mb-2">안내</div> 
                                : item.type === "이벤트" 
                                ? <div style={{fontSize: '2.4375rem', padding: '0.35rem 1.8rem'}} className="rounded-full bg-yellow-ffab39 flex items-center justify-center text-white mr-4 mb-2">이벤트</div> 
                                : <div></div>
                            }
                            <p  
                            style={{textOverflow: 'ellipsis', maxWidth: '46rem'}}
                                className={`${
                                    item.type === "안내" 
                                    ? "text-blue-r0056a6 group-hover:text-blue-700" 
                                    : item.type === "이벤트" 
                                    ? "text-yellow-a65600 group-hover:text-yellow-600" 
                                    : "group-hover:text-black"
                                } text-5xl text-ellipsis overflow-hidden whitespace-nowrap`}
                            >
                                {item.text}
                            </p>
                            {item.replies && (
                                <div style={{width: '7.0625rem', height: '7.0625rem', borderWidth: '0.1875rem', fontSize: "2.25rem", top: '2.375rem', right: '2.375rem'}} className="absolute pl-7px pr-8px rounded-full flex items-center justify-center border text-red-d52e2e font-roboto">{item.replies}</div>
                            )}
                            {item.isBetHistory === true && (
                                <div style={{backgroundColor: "#41b06c", fontSize: '2.4375rem', padding: '0.35rem 1.8rem', marginLeft: '1.1875rem'}} className="rounded-full flex items-center justify-center text-white font-spoqaMedium">베팅내역</div>
                            )}
                            {item.isRead === false && (
                                <div style={{width: '3.1875rem', height: '3.1875rem', fontSize: '2.4375rem'}} className="bg-red-notification rounded-full text-white flex items-center justify-center font-roboto ml-4">
                                    <p className="flex items-center pr-px pt-px">N</p>
                                </div>
                            )}
                        </div>

                        <div 
                            className={`w-full flex justify-start font-spoqaMedium tracking-tight text-r585858 text-center`} >
                                {item.type !== "일반"
                                ? <img style={{width: '12.0625rem', height: '3rem'}} src={WinnerLogo} alt="" />
                                : (
                                    <div className="w-full flex space-x-2px align-center">
                                        {
                                        item.level === 1 
                                        ? <img style={{width: "3.875rem", height: '4.5625rem'}} src={Rank1} alt="" />
                                        : item.level === 2
                                        ? <img style={{width: "3.875rem", height: '4.5625rem'}} src={Rank2} alt="" />
                                        : item.level === 3 
                                        ? <img style={{width: "3.875rem", height: '4.5625rem'}} src={Rank3} alt="" />
                                        : item.level === 4
                                        ? <img style={{width: "3.875rem", height: '4.5625rem'}} src={Rank4} alt="" />
                                        : <img style={{width: "3.875rem", height: '4.5625rem'}} src={Rank5} alt="" />
                                        }
                                        <p className='flex items-center text-gray-r7b7b7b' style={{fontSize: '2.625rem', marginLeft: '0.6875rem'}}>{item.author}</p>
                                        <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1875rem'}} className='bg-gray-c5c5c5'></div>
                                        {item.type === "일반" && (
                                            <div style={{fontSize: '2.625rem'}} className="flex items-center text-gray-r7b7b7b font-spoqa">
                                                {item.time}
                                            </div>
                                        )}
                                    </div>
                                )
                                }
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
            </button>
        ));
    }

    return (
        <div className="w-full">

            <div style={{borderRadius:"1em", margin: '1.875rem'}} className="shadow-subNavbar overflow-hidden">

                <div className="flex flex-col w-full">
                    <InboxList items={cellArray} />
                </div>
            </div>


            <div style={{marginTop: '3.9375rem', marginBottom: '3.75rem'}} className="w-full flex justify-center">
                <button style={{width: '36.4375rem', height: '7.3125rem', padding: '0.1875rem'}} onClick={() => history.push('/freeboard/compose')} className="flex items-center justify-center rounded-lg bg-blue-r0070d9 hover:opacity-75">
                    <div className="flex items-center justify-center h-full w-full bg-black rounded-lg border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                        <span style={{fontSize: "2.8125rem"}} className="font-spoqaMedium tracking-tight text-white">작성하기</span>
                    </div>
                </button>
            </div>
            

            <div className="flex w-full justify-center">
                <Pagination withMarginBottom={false} page={page} setPage={setPage}/>   
            </div>

            <div style={{margin: '1.875rem', marginTop: '3.75rem', marginBottom: '50rem'}} className="">
                {InboxSearch}
            </div>
            
        </div>
    )
}

export default FreeBoardMain
