import Footer from 'components/mainPage/Footer'
import Footer2 from 'components/mainPage/Footer2'
import Pagination from 'components/myPage/Pagination'
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import React, { useState } from 'react'
import DistributorBanner from '../images/myPage/distributor/distributor_banner.png'
import SummaryIcon from '../images/myPage/distributor/summary_icon.png'
import PieIcon from '../images/myPage/distributor/pie.png'
import DetailIcon from '../images/myPage/distributor/detail.png'
import MemberIcon from '../images/myPage/distributor/member.png'
import RecommendIcon from '../images/myPage/distributor/recommend.png'
import SummaryIcon1 from '../images/myPage/distributor/summary/img1.png'
import SummaryIcon2 from '../images/myPage/distributor/summary/img2.png'
import SummaryIcon3 from '../images/myPage/distributor/summary/img3.png'
import SummaryIcon4 from '../images/myPage/distributor/summary/img4.png'
import SummaryIcon5 from '../images/myPage/distributor/summary/img5.png'
import SummaryIcon6 from '../images/myPage/distributor/summary/img6.png'
import SummaryIcon7 from '../images/myPage/distributor/summary/img7.png'
import SummaryIcon8 from '../images/myPage/distributor/summary/img8.png'
import DateSearchBar from 'components/myPage/DateSearchBar'
import Diamond from '../images/myPage/diamond.png'
import WhiteArrow from '../images/arrows/white_arrow.png'
import ReplyArrow from '../images/arrows/reply_arrow.png'
import BlueTriangle from '../images/blue_triangle.png'
import DefaultUser from '../images/myPage/distributor/default.png'

const DistributorPage = ({
    isAuthenticated,
    setAuthenticated
}) => {

    const RecommendedUserArray = [
        {
            id: 0,
            number : 1,
            username: "louie32",
            name: "김선도",
            nickname: "위너테스트2",
            user_count: 3,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0,
            hasSubArray: true
        },
        {
            id: 3,
            number : 2,
            username: "louie32",
            name: "김선도",
            nickname: "위너테스트2",
            user_count: 0,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0
        },
        {
            id: 6,
            number : 3,
            username: "louie32",
            name: "김선도",
            nickname: "위너테스트2",
            user_count: 0,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0
        },
        {
            id: 9,
            number : 4,
            username: "louie32",
            name: "김선도",
            nickname: "위너테스트2",
            user_count: 0,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0,
            isLast: true
        },
    ]

    const RecommendedUserArray2 = [
        {
            id: 12,
            number : 1,
            username: "louie33",
            nickname: "위너테스트3",
            user_count: 0,
            recommended_date: "2021-07-21",
            login_date: "2021-06-03",
            absent_date: "-47일",
            added_amount: 0,
            bonus: 0,
            withdraw_amount: 0,
            added_withdraw_amount: 0,
            bet_amount: 0,
            win_lose: 0,
            point: 0,
            holding_amount: 0,
            hasSubArray: false,
        },
    ]

    const [page, setPage] = useState(0)
    const [isArrowUp, setArrowUp] = useState(new Array(8).fill(false))
    const [viewOnline, setViewOnline] = useState(false)


    const handleOnChange = (position) => {
        const updatedCheckedState = isArrowUp.map((item, index) =>
          index === position ? !item : item
        );
        setArrowUp(updatedCheckedState);
    }; 

    const SummaryCard = ({text, img, count}) => (
        <div className="w-227px h-165px rounded-lg border border-gray-dddddd bg-gray-f8f8fa flex flex-col items-center justify-start shadow-plain8">
            <img className="mt-20px object-none" src={img} alt="" />
            <span className="mt-8px font-spoqaMedium tracking-tight text-18px text-gray-r616161">{text}</span>
            <span className="font-spoqaBold tracking-tight text-26px text-blue-r0056a6">{count}</span>
        </div>
    )

    const PercentageCell = () => (
        <>
            <div className="w-full flex">
                <div className="w-40px mt-10px flex justify-center items-start">
                    {/* <img src={ReplyArrow} className="object-none" alt="" /> */}
                </div>
                <div className="h-112px w-full flex flex-col">
                    <div className="flex h-56px w-full border-b border-gray-dddddd items-center text-white font-spoqaMedium text-16px tracking-tight bg-gray-r687b8e">
                        <div className="w-full h-full flex items-center justify-center bg-gray-r253240">구분</div>
                        <div className="w-full h-full flex items-center justify-center">스포츠</div>
                        <div className="w-full h-full flex items-center justify-center">미니게임</div>
                        <div className="w-full h-full flex items-center justify-center">에볼루션</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>아시아</span><span>게이밍</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>프레그메틱</span><span>카지노</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>드림</span><span>게이밍</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>섹시</span><span>게이밍</span></div>
                        <div className="w-full h-full flex items-center justify-center">빅게이밍</div>
                        <div className="w-full h-full flex items-center justify-center">넷엔트</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>프레그메틱</span><span>플레이</span></div>
                        <div className="w-full h-full flex items-center justify-center">퀵스핀</div>
                        <div className="w-full h-full flex items-center justify-center">스페이드</div>
                        <div className="w-full h-full flex items-center justify-center">하바네로</div>
                        <div className="w-full h-full flex items-center justify-center">월드매치</div>
                        <div className="w-full h-full flex items-center justify-center">메버릭</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>플레이</span><span>앤고</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>YL</span><span>게이밍</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>레드</span><span>타이거</span></div>
                        <div className="w-full h-full flex items-center justify-center">e-스포츠</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>키론</span><span>가상게임</span></div>
                        <div className="w-full h-full flex items-center justify-center pr-3px">관리</div>
                    </div>
                    <div className="flex h-56px w-full border-gray-dddddd items-center text-16px tracking-tight font-roboto text-gray-r585858 border-r-2 border-b border-gray-dddddd bg-white">
                        <div className="w-full h-full flex items-center justify-center font-spoqaMedium text-white bg-gray-r5b6773">변경</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">0.00%</div>
                        <div className="w-full h-full flex items-center justify-center">
                        <button 
                            style={{width: "65px"}}
                            className={`bg-blue-r2068b2 flex items-center justify-center h-36px w-87px rounded-4px hover:opacity-75`}
                        >
                            <div 
                                style={{width:"63px"}}
                                className={`border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a flex items-center justify-center h-34px w-85px rounded-4px border  cursor-pointer space-x-10px`}
                            >
                                <span className="font-spoqaMedium tracking-tight text-14px text-white ">
                                    수정
                                </span>
                            </div>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    const DetailCell = () => (
        <>
            <div className="w-full flex">
                <div className="w-40px mt-10px flex justify-center items-start">
                    {/* <img src={ReplyArrow} className="object-none" alt="" /> */}
                </div>
                <div className="w-full flex flex-col border-r border-gray-dddddd  bg-white  border-b">
                    <div className="flex h-56px w-full border-b border-gray-dddddd items-center bg-gray-cfd7e0">

                        <div className="ml-10px w-231px h-34px rounded-full bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-16px tracking-tight">
                            <img className="mr-10px" src={Diamond} alt="" />
                            <div className="flex items-center space-x-4px">
                                <span className="text-white">입금:</span>
                                <span className="text-yellow-ffcc00">000,000,000</span>
                            </div>
                        </div>
                        <div className="ml-10px w-231px h-34px rounded-full bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-16px tracking-tight">
                            <img className="mr-10px" src={Diamond} alt="" />
                            <div className="flex items-center space-x-4px">
                                <span className="text-white">보너스:</span>
                                <span className="text-yellow-ffcc00">0</span>
                            </div>
                        </div>
                        <div className="ml-10px w-231px h-34px rounded-full bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-16px tracking-tight">
                            <img className="mr-10px" src={Diamond} alt="" />
                            <div className="flex items-center space-x-4px">
                                <span className="text-white">출금:</span>
                                <span className="text-yellow-ffcc00">0</span>
                            </div>
                        </div>

                    </div>
                    <div className="flex h-56px w-full border-b border-gray-dddddd items-center text-white font-spoqaMedium text-16px tracking-tight bg-gray-r687b8e">
                        <div className="w-full h-full flex items-center justify-center bg-gray-r253240">구분</div>
                        <div className="w-full h-full flex items-center justify-center">스포츠</div>
                        <div className="w-full h-full flex items-center justify-center">미니게임</div>
                        <div className="w-full h-full flex items-center justify-center">에볼루션</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>아시아</span><span>게이밍</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>프레그메틱</span><span>카지노</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>드림</span><span>게이밍</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>섹시</span><span>게이밍</span></div>
                        <div className="w-full h-full flex items-center justify-center">빅게이밍</div>
                        <div className="w-full h-full flex items-center justify-center">넷엔트</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>프레그메틱</span><span>플레이</span></div>
                        <div className="w-full h-full flex items-center justify-center">퀵스핀</div>
                        <div className="w-full h-full flex items-center justify-center">스페이드</div>
                        <div className="w-full h-full flex items-center justify-center">하바네로</div>
                        <div className="w-full h-full flex items-center justify-center">월드매치</div>
                        <div className="w-full h-full flex items-center justify-center">메버릭</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>플레이</span><span>앤고</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>YL</span><span>게이밍</span></div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>레드</span><span>타이거</span></div>
                        <div className="w-full h-full flex items-center justify-center">e-스포츠</div>
                        <div className="w-full h-full flex flex-col items-center justify-center -space-y-4px"><span>키론</span><span>가상게임</span></div>
                    </div>
                    <div className="flex h-56px w-full border-gray-dddddd items-center text-16px tracking-tight font-roboto text-gray-r585858 border-b">
                        <div className="w-full h-full flex items-center justify-center font-spoqaMedium text-white bg-gray-r5b6773">베팅금</div>
                        <div className="w-full h-full flex items-center justify-center">1.09M</div>
                        <div className="w-full h-full flex items-center justify-center">33K</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">7.14M</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                    </div>
                    <div className="flex h-56px w-full border-gray-dddddd items-center text-16px tracking-tight font-roboto text-gray-r585858 border-b">
                        <div className="w-full h-full flex items-center justify-center font-spoqaMedium text-white bg-gray-r5b6773">승패</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                    </div>
                    <div className="flex h-56px w-full border-gray-dddddd items-center text-16px tracking-tight font-roboto text-gray-r585858">
                        <div className="w-full h-full flex items-center justify-center font-spoqaMedium text-white bg-gray-r5b6773">정산금액</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                        <div className="w-full h-full flex items-center justify-center">0</div>
                    </div>
                </div>
            </div>
        </>
    )

    function RecommendedUserCell({ items }) {

        const [isUserCountOpen, setUserCountOpen] = useState(new Array(20).fill(false))
        const [subArrowClicked, setSubArrowClicked] = useState(new Array(8).fill(false))
        const handleOnChange1 = (position) => {
            const updatedCheckedState = isUserCountOpen.map((item, index) =>
              index === position ? !item : item
            );
            setUserCountOpen(updatedCheckedState);
        }; 

        const handleOnChange2 = (position) => {
            const updatedCheckedState = subArrowClicked.map((item, index) =>
              index === position ? !item : item
            );
            setSubArrowClicked(updatedCheckedState);
        };
    
        return items.map(item => (
            <>
            <div className={`${item.id % 2 === 1 ? "bg-white" : "bg-gray-f8f9fb"} ${item.isLast ? "border-b" : "border-b"} w-full h-69px flex items-center justify-evenly font-roboto text-16px text-gray-r585858 tracking-tight border-l border-r border-gray-dddddd`}>
                <div className="w-full h-full flex items-center justify-center">{item.number}</div>
                <div className="w-full h-full flex items-center justify-center">{item.username}</div>
                {item.name && (
                    <div className="w-full h-full flex items-center justify-center font-spoqaMedium">{item.name}</div>
                )}
                <div className="w-full h-full flex items-center justify-center font-spoqaMedium">{item.nickname}</div>
                <div className="relative w-full h-full flex items-center justify-center">
                    {item.user_count === 0 
                    ? <div className="">{item.added_amount}</div>
                    : 
                    <button 
                        style={{width: "87px"}}
                        className={`${isUserCountOpen ? "bg-blue-r0070d9" : "bg-blue-r2068b2"} flex items-center justify-center h-36px w-87px rounded-4px hover:opacity-75`}
                        onClick={() => {
                            handleOnChange1(item.id)
                        }}
                    >
                        <div 
                            style={{width:"85px"}}
                            className={`${
                                isUserCountOpen[item.id] === true
                                ? "border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db" 
                                : "border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a"
                                } flex items-center justify-center h-34px w-85px rounded-4px border  cursor-pointer space-x-10px`}
                        >
                            <span className="font-spoqaMedium tracking-tight text-14px text-white ">
                                {isUserCountOpen[item.id] === true ? "접기" : "보기"}  {item.user_count}
                            </span>
                            <img className={isUserCountOpen[0] === false && " transform rotate-180"} src={WhiteArrow} alt=""/>
                        </div>
                    </button>
                    }
                    {isUserCountOpen[item.id] === true && (
                        <div className="absolute bottom-0 -mb-px">
                            <img src={BlueTriangle} alt="" />
                        </div>
                    )}
                </div>
                <div className="w-full text-center flex flex-col items-center justify-center space-y-3px">
                    <div className="flex items-center h-16px">{item.recommended_date}</div>
                    <div className="flex items-center h-16px">{item.login_date}</div>
                    <div className="flex items-center h-16px font-spoqaMedium">({item.absent_date})</div>
                </div>
                <div className="relative w-full h-full flex items-center justify-center">
                    <button 
                        className={`${isUserCountOpen ? "bg-blue-r0070d9" : "bg-blue-r2068b2"} flex items-center justify-center h-36px w-87px rounded-4px hover:opacity-75`}
                        onClick={() => {
                            handleOnChange1(item.id + 1)
                        }}
                    >
                        <div className={`${
                            isUserCountOpen[item.id + 1] === true
                            ? "border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db" 
                            : "border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a"
                            } flex items-center justify-center h-34px w-85px rounded-4px border  cursor-pointer space-x-10px`}
                        >
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">
                                {isUserCountOpen[item.id + 1] === true ? "접기" : "보기"}
                            </span>
                            <img className={isUserCountOpen[item.id + 1] === false && " transform rotate-180"} src={WhiteArrow} alt=""/>
                        </div>
                    </button>
                    {isUserCountOpen[item.id + 1] === true && (
                        <div className="absolute bottom-0 -mb-px">
                            <img src={BlueTriangle} alt="" />
                        </div>
                    )}
                </div>
                <div className="w-full h-full flex items-center justify-end text-right"><p className="pr-32px">{item.added_amount}</p></div>
                <div className="w-full h-full flex items-center justify-end text-right"><p className="pr-32px">{item.bonus}</p></div>
                <div className="w-full h-full flex items-center justify-end text-right"><p className="pr-32px">{item.withdraw_amount}</p></div>
                <div className="w-full h-full flex items-center justify-end text-right"><p className="pr-32px">{item.added_withdraw_amount}</p></div>
                <div className="w-full h-full flex items-center justify-end text-right"><p className="pr-32px">{item.bet_amount}</p></div>
                <div className="w-full h-full flex items-center justify-end text-right"><p className="pr-32px">{item.win_lose}</p></div>
                <div className="relative w-full h-full flex items-center justify-center">
                    <button 
                        className={`${isUserCountOpen ? "bg-blue-r0070d9" : "bg-blue-r2068b2"} flex items-center justify-center h-36px w-87px rounded-4px hover:opacity-75`}
                        onClick={() => {
                            handleOnChange1(item.id + 2)
                        }}
                    >
                        <div className={`${
                            isUserCountOpen[item.id + 2] === true
                            ? "border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db" 
                            : "border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a"
                            } flex items-center justify-center h-34px w-85px rounded-4px border  cursor-pointer space-x-10px`}
                        >
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">
                                {isUserCountOpen[item.id + 2] === true ? "접기" : "보기"}
                            </span>
                            <img className={isUserCountOpen[item.id + 1] === false && " transform rotate-180"} src={WhiteArrow} alt=""/>
                        </div>
                    </button>
                    {isUserCountOpen[item.id + 2] === true && (
                        <div className="absolute bottom-0 -mb-px">
                            <img src={BlueTriangle} alt="" />
                        </div>
                    )}
                </div>
                <div className="w-full h-full flex items-center justify-end"><p className="pr-32px">{item.point}</p></div>
                <div className="w-full h-full flex items-center justify-end"><p className="pr-32px">{item.holding_amount}</p></div>
            </div>
            <div 
                style={{
                    borderTop: (isUserCountOpen[item.id] === true || isUserCountOpen[item.id+1] === true || isUserCountOpen[item.id+2] === true) && "2px solid #1390fa",
                    // borderBottom: (isUserCountOpen[item.id] === true || isUserCountOpen[item.id+1] === true || isUserCountOpen[item.id+2] === true) && "2px solid #dddddd",
                }}
                className={`flex flex-col relative`}
            >
                {(isUserCountOpen[item.id] === true || isUserCountOpen[item.id + 1] === true || isUserCountOpen[item.id + 2] === true) &&
                    <div className="absolute w-40px mt-10px flex justify-center items-start">
                        <img src={ReplyArrow} className="object-none" alt="" />
                    </div>
                }


                {(isUserCountOpen[item.id] === true && item.hasSubArray === true) && (
                    <>
                    <div className="w-full flex" >
                        <div className="w-40px mt-10px flex justify-center items-start">
                            {/* <img src={ReplyArrow} className="object-none" alt="" /> */}
                        </div>
                        <div className=" w-full flex flex-col ">
                            {/* === Header === */}
                            <div className="h-67px w-full bg-gray-r687b8e border-b border-gray-dddddd flex items-center justify-evenly font-spoqaMedium text-16px text-white tracking-tight">
                                <div className="w-full h-full flex items-center justify-center">번호</div>
                                <button 
                                    className="w-full h-full flex items-center justify-center space-x-5px hover:opacity-75"
                                    onClick={() => handleOnChange2(0)}
                                >
                                    <p >아이디</p>
                                    <img src={WhiteArrow} className={`${subArrowClicked[0] === true ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <div className="w-full h-full flex items-center justify-center">별명</div>
                                <button 
                                    className="w-full h-full flex items-center justify-center space-x-5px"
                                    onClick={() => handleOnChange2(1)}
                                >
                                    <div className="flex flex-col items-center justify-center space-y-3px hover:opacity-75 ">
                                        <div className="flex items-center h-16px">하부</div>
                                        <div className="flex items-center h-16px">유저수</div>
                                    </div>
                                    <img src={WhiteArrow} className={`${subArrowClicked[1] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <button 
                                    className="w-full h-full flex items-center justify-center space-x-5px"
                                    onClick={() => handleOnChange2(2)}
                                >
                                    <div className="flex flex-col items-center justify-center space-y-3px  hover:opacity-75">
                                        <div className="flex items-center h-16px">추천일시</div>
                                        <div className="flex items-center h-16px">로그인일시</div>
                                        <div className="flex items-center h-16px">(미접속일수)</div>
                                    </div>
                                    <img src={WhiteArrow} className={`${subArrowClicked[2] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <div className="w-full h-full flex items-center justify-center">요율보기</div>
                                <div className="w-full h-full flex items-center justify-center">입금액</div>
                                <div className="w-full h-full flex items-center justify-center">보너스</div>
                                <button 
                                    className="w-full h-full flex items-center justify-center space-x-5px hover:opacity-75"
                                    onClick={() => handleOnChange2(3)}
                                >
                                    <p>출금액</p>
                                    <img src={WhiteArrow} className={`${subArrowClicked[3] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <div className="w-full h-full flex items-center justify-center">입출금액</div>
                                <button 
                                    className="w-full h-full flex items-center justify-center space-x-5px hover:opacity-75"
                                    onClick={() => handleOnChange2(4)}
                                >
                                    <p>베팅액</p>
                                    <img src={WhiteArrow} className={`${subArrowClicked[4] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <button 
                                    className="w-full h-full flex items-center justify-center space-x-5px hover:opacity-75"
                                    onClick={() => handleOnChange2(5)}
                                >
                                    <p>윈루즈</p>
                                    <img src={WhiteArrow} className={`${subArrowClicked[5] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <div className="w-full h-full flex items-center justify-center">상세내역</div>
                                <button 
                                    className="w-full h-full flex items-center justify-center space-x-5px hover:opacity-75"
                                    onClick={() => handleOnChange2(6)}
                                >
                                    <p>포인트</p>
                                    <img src={WhiteArrow} className={`${subArrowClicked[6] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <button 
                                    className="w-full h-full flex items-center justify-center space-x-5px hover:opacity-75"
                                    onClick={() => handleOnChange2(7)}
                                >
                                    <div className="flex flex-col items-center justify-center space-y-3px ">
                                        <div className="flex items-center h-16px">보유</div>
                                        <div className="flex items-center h-16px">금액</div>
                                    </div>
                                    <img src={WhiteArrow} className={`${subArrowClicked[7] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                            </div>
                            <RecommendedUserCell items={RecommendedUserArray2} />
                        </div>
                    </div>
                </>
                )}

                {isUserCountOpen[item.id + 1] === true && (
                    <>
                        {(isUserCountOpen[item.id] === true && item.hasSubArray === true) ? (
                            <>
                                <div className="h-10px"/>
                                <PercentageCell />
                            </>
                        ) : (<PercentageCell />)}       
                    </>
                )}
                {isUserCountOpen[item.id + 2] === true && (

                    <>
                    {((isUserCountOpen[item.id] === true && item.hasSubArray === true) || isUserCountOpen[item.id + 1] === true ) ? (
                        <>
                            <div className="h-10px"/>
                            <DetailCell />
                        </>
                    ) : (<DetailCell />)}       
                    </>
                    
                )}
            </div>
            
            </>
        ));
    }

    const UsersOnline = ({name="tntwk"}) => (
        <div 
            style={{
                background: "linear-gradient(to bottom, #f5f7f8, #e9e9e9",
            }} 
            className="h-48px rounded-full border border-gray-dddddd flex items-center justify-center"
        >
            <div 
                style={{
                    height:"44px",
                    background: "linear-gradient(to bottom, #d0dbe4, #ffffff 60%)"
                }} 
                className="pl-9px pr-15px w-full rounded-full flex items-center space-x-5px"
            >
                    <img src={DefaultUser} alt="" />
                    <span className="text-gray-r7b7b7b text-20px tracking-tight font-spoqaMedium pt-2px">{name}</span>
            </div>
        </div>
    )

    return (
        <div className="relative flex flex-col justify-center">
            
             <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>

            <div className="relative flex flex-col limit1600:mt-92px mt-122px items-start limit:items-center">
                <div className="relative w-default h-225px mt-20px">
                    <label style={{color:"#3a5f39"}} className="text-36px font-spoqaMedium absolute right-0 bottom-0 z-20 mb-86px mr-50px">총판페이지</label>
                    <img className="z-10" src={DistributorBanner} alt="" />
                </div>
            </div>

            <div className="relative flex flex-col items-start limit734:items-center">
                <div className="space-x-2px h-76px w-734px border-b border-gray-r868686 flex items-center justify-center text-24px tracking-tight text-gray-r454545">
                    <span className="font-spoqaBold text-blue-r0056a6">
                        Louie3
                    </span>
                    <span className="font-spoqaMedium">
                        님의 총판 정보입니다.
                    </span>
                </div>
            </div>

            <div className="relative flex flex-col justify-start limit:justify-center">
                {/* <div className="relative w-default h-225px mt-20px">
                    <label style={{color:"#3a5f39"}} className="text-36px font-spoqaMedium absolute right-0 bottom-0 z-20 mb-86px mr-50px">총판페이지</label>
                    <img className="z-10" src={DistributorBanner} alt="" />
                </div> */}

                <div className="flex flex-col items-start limit1920:items-center w-full h-full">

                    <div className="mt-42px w-1836px">
                        <div className="h-29px w-full flex items-center space-x-6px text-24px tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                            <img src={SummaryIcon} alt="" />
                            <span>총판현황</span>
                        </div>
                        <div className="flex h-165px w-full mt-20px space-x-4px">
                            <SummaryCard img={SummaryIcon1} text="전체 유저" count={5} />
                            <SummaryCard img={SummaryIcon2} text="요율 설정 완료건" count={20} />
                            <SummaryCard img={SummaryIcon3} text="요율 설정 미완료건" count={5} />
                            <SummaryCard img={SummaryIcon4} text="전체 포인트" count={0} />
                            <SummaryCard img={SummaryIcon5} text="현재까지 사용 포인트" count={0} />
                            <SummaryCard img={SummaryIcon6} text="현재 나의 포인트" count={0} />
                            <SummaryCard img={SummaryIcon7} text="진행중인 금액" count="78,307.50" />
                            <SummaryCard img={SummaryIcon8} text="제휴 금액" count="117,515,875.76" />
                        </div>

                        <div className="mt-60px h-29px w-full flex items-center space-x-6px text-24px tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                            <img src={PieIcon} alt="" />
                            <span>롤링요율</span>
                        </div>
                        <div className="mt-20px h-112px w-full border-2 rounded-md border-gray-dddddd shadow-plain8 overflow-hidden">
                            <table className="w-full overflow-hidden">
                                <thead className="h-54px w-full border-b border-gray-dddddd bg-gray-r8e9296 font-spoqaMedium text-16px text-white tracking-tight">
                                    <tr className="flex items-center h-54px">
                                        <td className="w-91px text-center">스포츠</td>
                                        <td className="w-91px text-center">미니게임</td>
                                        <td className="w-91px text-center">에볼루션</td>
                                        <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>아시아</span><span>게이밍</span></td>
                                        <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>프레그메틱</span><span>카지노</span></td>
                                        <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>드림</span><span>게이밍</span></td>
                                        <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>섹시</span><span>게이밍</span></td>
                                        <td className="w-91px text-center">빅게이밍</td>
                                        <td className="w-91px text-center">넷엔트</td>
                                        <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>프레그메틱</span><span>플레이</span></td>
                                        <td className="w-91px text-center">퀵스핀</td>
                                        <td className="w-91px text-center">스페이드</td>
                                        <td className="w-91px text-center">하바네로</td>
                                        <td className="w-91px text-center">월드매치</td>
                                        <td className="w-91px text-center">메버릭</td>
                                        <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>플레이</span><span>앤고</span></td>
                                        <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>YL</span><span>게이밍</span></td>
                                        <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>레드</span><span>타이거</span></td>
                                        <td className="w-91px text-center">e-스포츠</td>
                                        <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>키론</span><span>가상게임</span></td>
                                    </tr>
                                </thead>
                                <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                                    <tr className="flex items-center bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-54px w-full border-b border-gray-dddddd">
                                        <td className="w-91px text-center">1.00%</td>
                                        <td className="w-91px text-center">1.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.70%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>
                                        <td className="w-91px text-center">0.00%</td>

                                    </tr>
                                </tbody>
                            </table>   
                        </div>
                        <div className="mt-60px h-29px w-full flex items-center space-x-6px text-24px tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                            <img src={DetailIcon} alt="" />
                            <span>나의 상세내역</span>
                        </div>

                        <DateSearchBar isLeagueSearch={false} hasIdSearch={true}/>

                        <div className="flex mt-30px w-full space-x-11px">
                            <div className="w-333px h-48px rounded-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-20px tracking-tight">
                                <img className="mr-16px" src={Diamond} alt="" />
                                <div className="flex items-center space-x-4px pt-2px">
                                    <span className="text-white">입금:</span>
                                    <span className="text-yellow-ffcc00">0</span>
                                </div>
                            </div>

                            <div className="w-333px h-48px rounded-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-20px tracking-tight">
                                <img className="mr-16px" src={Diamond} alt="" />
                                <div className="flex items-center space-x-4px pt-2px">
                                    <span className="text-white">보너스:</span>
                                    <span className="text-yellow-ffcc00">0</span>
                                </div>
                            </div>

                            <div className="w-333px h-48px rounded-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-20px tracking-tight">
                                <img className="mr-16px" src={Diamond} alt="" />
                                <div className="flex items-center space-x-4px pt-2px">
                                    <span className="text-white">출금:</span>
                                    <span className="text-yellow-ffcc00">0</span>
                                </div>
                            </div>

                            <div className="w-333px h-48px rounded-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-20px tracking-tight">
                                <img className="mr-16px" src={Diamond} alt="" />
                                <div className="flex items-center space-x-4px pt-2px">
                                    <span className="text-white">입출금 합계:</span>
                                    <span className="text-red-f47d7d">-3,200,000</span>
                                </div>
                            </div>
                        </div>

                        <div>

                        <div className="mt-20px w-full border-2 rounded-md border-gray-dddddd shadow-plain8 overflow-hidden">
                            <table className="w-full overflow-hidden">
                                <thead className="h-54px w-full border-b border-gray-dddddd bg-gray-r8e9296 font-spoqaMedium text-16px text-white tracking-tight">
                                    <tr className="flex items-center h-54px border-b">
                                        <td className="w-83px bg-gray-r676e76 h-full flex items-center justify-center">구분</td>
                                        <td className="w-83px text-center">스포츠</td>
                                        <td className="w-83px text-center">미니게임</td>
                                        <td className="w-83px text-center">에볼루션</td>
                                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>아시아</span><span>게이밍</span></td>
                                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>프레그메틱</span><span>카지노</span></td>
                                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>드림</span><span>게이밍</span></td>
                                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>섹시</span><span>게이밍</span></td>
                                        <td className="w-83px text-center">빅게이밍</td>
                                        <td className="w-83px text-center">넷엔트</td>
                                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>프레그메틱</span><span>플레이</span></td>
                                        <td className="w-83px text-center">퀵스핀</td>
                                        <td className="w-83px text-center">스페이드</td>
                                        <td className="w-83px text-center">하바네로</td>
                                        <td className="w-83px text-center">월드매치</td>
                                        <td className="w-83px text-center">메버릭</td>
                                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>플레이</span><span>앤고</span></td>
                                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>YL</span><span>게이밍</span></td>
                                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>레드</span><span>타이거</span></td>
                                        <td className="w-83px text-center">e-스포츠</td>
                                        <td className="w-90px text-center flex flex-col pt-2px -space-y-4px"><span>키론</span><span>가상게임</span></td>
                                        <td style={{backgroundColor:"#808387"}} className="w-83px text-center h-full flex items-center justify-center">합계</td>
                                    </tr>
                                </thead>
                                <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                                    <tr className="flex items-center bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-54px w-full border-b border-gray-dddddd">
                                        <td className="w-83px bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-16px text-white tracking-tight">베팅금</td>
                                        <td className="w-83px text-right">1.09M</td>
                                        <td className="w-83px text-right">33K</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">3.06M</td>
                                        <td className="w-90px text-right pr-7px">0</td>
                                        <td style={{backgroundColor:"#f2f2f2", color:"#d52e2e"}} className="w-83px text-right pr-7px h-full flex items-center justify-end">7.14M</td>
                                    </tr>
                                    <tr className="flex items-center bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-54px w-full border-b border-gray-dddddd">
                                        <td className="w-83px bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-16px text-white tracking-tight">승패</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-90px text-right pr-7px">0</td>
                                        <td style={{backgroundColor:"#ebecee", color:"#d52e2e"}} className="w-83px text-right pr-7px h-full flex items-center justify-end">0</td>
                                    </tr>
                                    <tr className="flex items-center bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-54px w-full border-b border-gray-dddddd">
                                        <td className="w-83px bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-16px text-white tracking-tight">정산금액</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-83px text-right">0</td>
                                        <td className="w-90px text-right pr-7px">0</td>
                                        <td style={{backgroundColor:"#f2f2f2", color:"#d52e2e"}} className="w-83px text-right pr-7px h-full flex items-center justify-end">0</td>
                                    </tr>
                                </tbody>
                            </table>   
                        </div>
                        </div>

                        <div className="mt-52px h-42px w-full flex items-center space-x-6px text-24px tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                            <img src={MemberIcon} alt="" />
                            <div>접속중인 회원수: <span className="font-spoqaBold text-black tracking-tight text-gray-r454545">2 명</span></div>

                            <div 
                                style={{
                                    width:"75px",
                                    height:"42px",
                                    borderRadius: "4px",
                                    marginLeft: "14px"
                                }} 
                                className="flex items-center justify-center rounded-4px bg-gray-r171a1d hover:opacity-75"
                                onClick={() => setViewOnline(!viewOnline)}
                            >
                                <div 
                                    style={{
                                        width:"73px", 
                                        height:"40px",
                                        background: "linear-gradient(to bottom, #585b5e, #303337)",
                                        borderRadius: "3px"
                                    }} 
                                    className="flex items-center justify-center bg-black rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r585b5e to-gray-r303337 cursor-pointer"
                                >
                                    <span className="font-spoqaMedium tracking-tight text-14px text-white">{viewOnline ? "닫기" : "보기"}</span>
                                </div>
                            </div>
                        </div>

                        {viewOnline && (
                            <div style={{height:"66px"}} className="flex bg-gray-f9f9f9 border border-gray-dddddd rounded-md mt-13px px-8px items-center space-x-10px">
                                <UsersOnline />
                                <UsersOnline name="tkskdl12" />
                            </div>
                        )}

                        <div className="mt-60px h-29px w-full flex items-end justify-between text-24px tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                            <div className="flex items-center space-x-6px items-center h-27px flex">
                                <img src={RecommendIcon} alt="" />
                                <div>추천 회원내역</div>
                            </div>
                            
                            <div className="w-333px h-48px rounded-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-20px tracking-tight">
                                <img className="mr-16px" src={Diamond} alt="" />
                                <div className="flex items-center space-x-4px pt-2px">
                                    <span className="text-white">보유금 총합계:</span>
                                    <span className="text-yellow-ffcc00">75,000</span>
                                </div>
                            </div>
                        </div>

                        {/* === 추천회원내역 표 === */}
                        <div style={{filter: "drop-shadow(0px 0px 2px #00000050)"}} className="flex flex-col mt-21px w-full rounded-md border-t  border-gray-dddddd overflow-hidden">
                            {/* === Header === */}
                            <div className="h-67px w-full bg-gray-r8e9296 border-b border-r-2 border-l-2 border-gray-dddddd flex items-center justify-evenly font-spoqa text-16px text-white tracking-tight">
                                <div className="w-114px text-center">번호</div>
                                <button 
                                    className="flex w-114px text-center items-center space-x-5px justify-center hover:font-spoqaBold hover:opacity-75"
                                    onClick={() => handleOnChange(0)}
                                >
                                    <p>아이디</p>
                                    <img src={WhiteArrow} className={`${isArrowUp[0] === true ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <div className="w-114px text-center">이름</div>
                                <div className="w-114px text-center">별명</div>
                                <button 
                                    className="w-114px text-center flex items-center justify-center space-x-5px hover:opacity-75"
                                    onClick={() => handleOnChange(1)}
                                >
                                    <div className="flex flex-col items-center justify-center space-y-3px ">
                                        <div className="flex items-center h-16px">하부</div>
                                        <div className="flex items-center h-16px">유저수</div>
                                    </div>
                                    <img src={WhiteArrow} className={`${isArrowUp[1] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <button 
                                    className="w-114px text-center flex items-center justify-center space-x-5px hover:opacity-75 "
                                    onClick={() => handleOnChange(2)}
                                >
                                    <div className="flex flex-col items-center justify-center space-y-3px">
                                        <div className="flex items-center h-16px">추천일시</div>
                                        <div className="flex items-center h-16px">로그인일시</div>
                                        <div className="flex items-center h-16px">(미접속일수)</div>
                                    </div>
                                    <img src={WhiteArrow} className={`${isArrowUp[2] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <div className="w-114px text-center">요율보기</div>
                                <div className="w-114px text-center">입금액</div>
                                <div className="w-114px text-center">보너스</div>
                                <button 
                                    className="flex w-114px text-center items-center space-x-5px justify-center hover:opacity-75"
                                    onClick={() => handleOnChange(3)}
                                >
                                    <p>출금액</p>
                                    <img src={WhiteArrow} className={`${isArrowUp[3] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <div className="w-114px text-center">입출금액</div>
                                <button 
                                    className="flex w-114px text-center items-center space-x-5px justify-center hover:opacity-75"
                                    onClick={() => handleOnChange(4)}
                                >
                                    <p>베팅액</p>
                                    <img src={WhiteArrow} className={`${isArrowUp[4] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <button 
                                    className="flex w-114px text-center items-center space-x-5px justify-center hover:opacity-75"
                                    onClick={() => handleOnChange(5)}
                                >
                                    <p>윈루즈</p>
                                    <img src={WhiteArrow} className={`${isArrowUp[5] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <div className="w-114px text-center">상세내역</div>
                                <button 
                                    className="flex w-114px text-center items-center space-x-5px justify-center hover:opacity-75"
                                    onClick={() => handleOnChange(6)}
                                >
                                    <p>포인트</p>
                                    <img src={WhiteArrow} className={`${isArrowUp[6] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <button 
                                    className="w-114px text-center flex items-center justify-center space-x-5px hover:opacity-75"
                                    onClick={() => handleOnChange(7)}
                                >
                                    <div className="flex flex-col items-center justify-center space-y-3px ">
                                        <div className="flex items-center h-16px">보유</div>
                                        <div className="flex items-center h-16px">금액</div>
                                    </div>
                                    <img src={WhiteArrow} className={`${isArrowUp[7] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                            </div>
                            {/* === Body === */}
                            <RecommendedUserCell items={RecommendedUserArray}/>
                        </div>

                    </div>
    
                    <div className="flex mt-60px justify-center w-full">
                        <Pagination page={page} setPage={setPage}/>   
                    </div>


                    <div className="w-full">
                        <Footer2  fullWidth={true}/>
                        <Footer fullWidth={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DistributorPage
