import DropDownControls from 'components/dropdowns/DropDownControls';
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
        <div className="mt-4px flex flex-col items-center justify-center w-120px overflow-hidden bg-white rounded-md border border-gray-dddddd text-gray-r393e41 font-spoqaMedium text-14px tracking-tight">
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("제목")
                setDropdownOpen(false)
            }}>
                제목
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("본문")
                setDropdownOpen(false)
            }}>
                본문
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("작성자")
                setDropdownOpen(false)
            }}>
                작성자
            </button>
        </div>
    )

    const dropdownButton = (
        <div className="flex w-120px h-42px bg-white rounded-md border border-gray-dddddd group">
            <input  className="w-0 text-16px"/>
            <div
                className="flex w-full text-gray-r393e41 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight" 
            >
                <label className="ml-14px cursor-pointer group-hover:text-black">{selectedCarrier}</label>
                <img className="w-10px h-6px object-contain mr-10px" src={DownArrowIcon} alt="arrow" /> 
            </div>
        </div>
    )

    const InboxSearch = (
        <div className="h-102px w-full bg-gray-f9f9f9 rounded-2xl border border-gray-dddddd flex items-center justify-center space-x-10px">
            <DropDownControls 
                buttonChild={dropdownButton} 
                isDropdownOpen={isDropdownOpen} 
                setDropdownOpen={setDropdownOpen}
            >
                {searchDropdown}
            </DropDownControls>

            <div className="flex w-381px h-42px bg-white rounded-md border border-gray-dddddd">
                <input 
                    className="pl-11px rounded-md placeholder-gray-r7c7c7c w-full text-gray-r393e41 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight"
                    placeholder="검색어를 입력해 주세요"
                />
                <button className="flex items-center justify-center w-42px h-42px rounded-md bg-gradient-to-b from-gray-r555555 via-gray-r555555 to-gray-r333333 -mt-px -mr-px flex-shrink-0 hover:opacity-75">
                    <img src={SearchIcon} alt=""/>
                </button>
            </div>
        </div>
    )

    function InboxList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd`}
                onClick={() => history.push(item.path)}
            >
                <div 
                    style={{
                        backgroundColor: 
                        item.type === "안내" 
                        ? "#e5edfb" 
                        : item.type === "이벤트" 
                        ? "#fff5d7" 
                        : item.id % 2 === 0 
                        ? "#f7f9fc"
                        : ""
                    }}
                    className="flex items-center font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd" >     
                    
                    <div style={{width: "128px"}} className="font-spoqaMedium text-14px tracking-tight text-gray-r585858 flex items-center justify-center">
                        {item.type === "안내" 
                        ? <img src={BlueSpeaker} alt="" />
                        : item.type === "이벤트" 
                        ? <img src={YellowSpeaker} alt="" />
                        : item.id
                        }
                    </div>   

                    <div 
                        style={{width: "808px"}}
                        className={`w-612px flex items-center space-x-10px font-spoqaMedium text-gray-r585858 group`}>
                        {
                            item.type === "안내" 
                            ? <div className="w-45px h-25px rounded-full bg-blue-r00a1e9 flex items-center justify-center text-white text-12px">안내</div> 
                            : item.type === "이벤트" 
                            ? <div className="w-53px h-25px rounded-full bg-yellow-ffab39 flex items-center justify-center text-white text-12px">이벤트</div> 
                            : <div></div>
                        }
                        <p
                            className={`${
                                item.type === "안내" 
                                ? "text-blue-r0056a6 group-hover:text-blue-700" 
                                : item.type === "이벤트" 
                                ? "text-yellow-a65600 group-hover:text-yellow-600" 
                                : "group-hover:text-black"
                            }`}
                        >
                            {item.text}
                        </p>
                        {item.replies && (
                            <div className="h-17px pl-7px pr-8px rounded-full flex items-center justify-center text-white font-roboto text-12px bg-blue-r0056a6">{item.replies}</div>
                        )}
                        {item.isBetHistory === true && (
                            <div style={{backgroundColor: "#41b06c"}} className="h-25px w-65px rounded-full flex items-center justify-center text-white font-spoqaMedium text-12px">베팅내역</div>
                        )}
                        {item.isRead === false && (
                            <div className="w-18px h-18px bg-red-notification rounded-full text-12px text-white flex items-center justify-center font-roboto">
                                <p className="flex items-center h-12px pr-px pt-px">N</p>
                            </div>
                        )}
                    </div>

                    <div 
                        style={{width: "108px"}}
                        className={`w-158px flex justify-center font-spoqaMedium tracking-tight text-r585858 text-center`} >
                            {item.type !== "일반"
                            ? <img src={WinnerLogo} alt="" />
                            : (
                                <div className="flex space-x-2px">
                                    {
                                    item.level === 1 
                                    ? <img src={Rank1} alt="" />
                                    : item.level === 2
                                    ? <img src={Rank2} alt="" />
                                    : item.level === 3 
                                    ? <img src={Rank3} alt="" />
                                    : item.level === 4
                                    ? <img src={Rank4} alt="" />
                                    : <img src={Rank5} alt="" />
                                    }
                                    <p>{item.author}</p>
                                </div>
                            )
                            }
                        </div>
                    <div style={{width: "216px"}} className="w-70px flex items-center justify-center text-gray-r585858 font-spoqa">
                        {item.type !== "일반"
                            ? ""
                            : item.time
                        }
                    </div>
                    
                </div>
            </button>
        ));
    }

    return (
        <div className="w-full">

            <div style={{borderRadius:"1em"}} className="shadow-subNavbar w-full overflow-hidden">
                <div className="h-56px bg-gray-fafafa w-full flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r454545">
                    <div style={{width: "128px"}} className="flex items-center justify-center">번호</div>
                    <div style={{width: "808px"}} className="flex items-center justify-center">제목</div>
                    <div style={{width: "108px"}} className="flex items-center justify-center">닉네임</div>
                    <div style={{width: "216px"}} className="flex items-center justify-center">등록일시</div>
                </div>

                <div className="flex flex-col w-full">
                    <InboxList items={cellArray} />
                </div>
            </div>


            <div className="mt-20px flex justify-end">
                <button onClick={() => history.push('/freeboard/compose')} className="flex items-center justify-center h-36px w-90px rounded-4px bg-blue-r0070d9 hover:opacity-75">
                    <div className="flex items-center justify-center h-34px w-88px bg-black rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-14px text-white">작성하기</span>
                    </div>
                </button>
            </div>
            

            <div className="flex w-full justify-center mt-14px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

            <div className="-mt-30px mb-60px">
                {InboxSearch}
            </div>
            
        </div>
    )
}

export default FreeBoardMain
