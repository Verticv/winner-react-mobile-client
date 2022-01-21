import Pagination from 'components/myPage/Pagination'
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from 'components/common/HomePageTopBanner';
import React, { useState } from 'react'
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
import SummaryIcon from '../images/newImages/mainPage/icons/distributor/summary_icon.png'
import PieIcon from '../images/newImages/mainPage/icons/distributor/pie.png'
import DetailIcon from '../images/newImages/mainPage/icons/distributor/detail.png'
import MemberIcon from '../images/newImages/mainPage/icons/distributor//member.png'
import RecommendIcon from '../images/newImages/mainPage/icons/distributor/recommend.png'
import SummaryIcon1 from '../images/newImages/mainPage/icons/distributor/summary-1.png'
import SummaryIcon2 from '../images/newImages/mainPage/icons/distributor/summary-2.png'
import SummaryIcon3 from '../images/newImages/mainPage/icons/distributor/summary-3.png'
import SummaryIcon4 from '../images/newImages/mainPage/icons/distributor/summary-4.png'
import SummaryIcon5 from '../images/newImages/mainPage/icons/distributor/summary-5.png'
import SummaryIcon6 from '../images/newImages/mainPage/icons/distributor/summary-6.png'
import SummaryIcon7 from '../images/newImages/mainPage/icons/distributor/summary-7.png'
import SummaryIcon8 from '../images/newImages/mainPage/icons/distributor/summary-8.png'
import DefaultUser from '../images/newImages/mainPage/icons/distributor/default.png'


import DateSearchBar from 'components/myPage/DateSearchBar'
import Diamond from '../images/newImages/mainPage/icons/distributor/diamond.png'
import WhiteArrow from '../images/newImages/mainPage/icons/distributor/white-arrow.png'
import BlueTriangle from '../images/blue_triangle.png'

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

    const SummaryCard = ({text1, text2, img, count}) => (
        <div style={{width: '18rem', height: '16.5rem', paddingBottom: '1.5625rem', marginBottom: '0.8125rem'}} className="rounded-lg border border-gray-dddddd bg-gray-f8f8fa flex flex-col items-center justify-between shadow-plain10">
            <div className='flex flex-col items-center justify-around'>
                <img style={{marginTop: '1.3125rem', width: '5.0625rem'}} className="object-contain" src={img} alt="" />
                {text1 && <span style={{fontSize: '2.25rem', height: '2.34375rem', marginTop: '0.0625rem'}} className="font-spoqaMedium tracking-tight text-gray-r616161">{text1}</span>}
                {text2 && <span style={{fontSize: '2.25rem', height: '2.34375rem', marginTop: '0.375rem'}} className="font-spoqaMedium tracking-tight text-gray-r616161">{text2}</span>}
            </div>
            <span style={{fontSize: '2.25rem', lineHeight: '1.625rem'}} className="font-robotoBold tracking-tight text-blue-r0056a6">{count}</span>
        </div>
    )

    const PercentageCell = () => (
        <>
            <div className="w-full flex">
                {/* <div className="w-40px mt-10px flex justify-center items-start">
                    <img src={ReplyArrow} className="object-contain" alt="" />
                </div> */}
                <div className="w-full flex flex-col">
                    <div style={{height: '8.625rem', borderBottomWidth: '0.1875rem', fontSize: '2.625rem'}} className="flex w-full border-b border-gray-dddddd items-center text-white font-spoqaMedium tracking-tight bg-gray-r687b8e">
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
                    <div style={{height: '8.625rem', borderBottomWidth: '0.1875rem', fontSize: '2.625rem'}} className="flex w-full border-gray-dddddd items-center tracking-tight font-roboto text-gray-r585858 border-r-2 border-b border-gray-dddddd bg-white">
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
                            style={{width: "11.5rem", fontSize: '2.625rem'}}
                            className={`bg-blue-r2068b2 flex items-center justify-center rounded-lg hover:opacity-75 p-px small-padding`}
                        >
                            <div 
                                className={`border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a flex items-center justify-center w-full h-full py-5 px-10 rounded-lg border  cursor-pointer`}
                            >
                                <span className="font-spoqaMedium tracking-tight text-white ">
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
                {/* <div className="w-40px mt-10px flex justify-center items-start">
                    <img src={ReplyArrow} className="object-contain" alt="" />
                </div> */}
                <div className="w-full flex flex-col border-r border-gray-dddddd  bg-white border-b">
                    <div style={{height: '8.625rem'}} className="flex w-full border-b border-gray-dddddd items-center bg-gray-cfd7e0">
                        <div style={{width: '38.4375rem', height: '6.25rem', fontSize: '2.625rem', marginLeft: '1.125rem'}} className="rounded-full bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium tracking-tight">
                            <img style={{width: '1.3125rem', height: '1.3125rem', marginRight: '1.6875rem'}} className="object-contain" src={Diamond} alt="" />
                            <div className="flex items-center">
                                <span style={{marginRight: '0.625rem'}} className="text-white">입금:</span>
                                <span className="text-yellow-ffcc00">000,000,000</span>
                            </div>
                        </div>
                        <div style={{width: '38.4375rem', height: '6.25rem', fontSize: '2.625rem', marginLeft: '1.125rem'}} className="rounded-full bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium tracking-tight">
                            <img style={{width: '1.3125rem', height: '1.3125rem', marginRight: '1.6875rem'}} className="object-contain" src={Diamond} alt="" />
                            <div className="flex items-center">
                                <span style={{marginRight: '0.625rem'}} className="text-white">보너스:</span>
                                <span className="text-yellow-ffcc00">0</span>
                            </div>
                        </div>
                        <div style={{width: '38.4375rem', height: '6.25rem', fontSize: '2.625rem', marginLeft: '1.125rem'}} className="rounded-full bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium tracking-tight">
                            <img style={{width: '1.3125rem', height: '1.3125rem', marginRight: '1.6875rem'}} className="object-contain" src={Diamond} alt="" />
                            <div className="flex items-center">
                                <span style={{marginRight: '0.625rem'}} className="text-white">출금:</span>
                                <span className="text-yellow-ffcc00">0</span>
                            </div>
                        </div>

                    </div>


                    <div style={{height: '8.625rem', borderBottomWidth: '0.1875rem', fontSize: '2.625rem'}} className="flex w-full border-b border-gray-dddddd items-center text-white font-spoqaMedium tracking-tight bg-gray-r687b8e">
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
                    <div style={{height: '8.625rem', borderBottomWidth: '0.1875rem', fontSize: '2.625rem'}} className="flex w-full border-gray-dddddd items-center tracking-tight font-roboto text-gray-r585858 border-b">
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
                    <div style={{height: '8.625rem', borderBottomWidth: '0.1875rem', fontSize: '2.625rem'}} className="flex w-full border-gray-dddddd items-center tracking-tight font-roboto text-gray-r585858 border-b">
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
                    <div style={{height: '8.625rem', borderBottomWidth: '0.1875rem', fontSize: '2.625rem'}} className="flex w-full border-gray-dddddd items-center tracking-tight font-roboto text-gray-r585858">
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
            <div style={{fontSize: '2.625rem', height: '10.9375rem'}} className={`${item.id % 2 === 1 ? "bg-white" : "bg-gray-f8f9fb"} ${item.isLast ? "border-b" : "border-b"} w-full flex items-center justify-evenly font-roboto text-gray-r585858 tracking-tight border-l border-r border-gray-dddddd`}>
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
                        style={{width: "15.5rem", padding: '1px', fontSize: '2.4375rem'}}
                        className={`${isUserCountOpen ? "bg-blue-r0070d9" : "bg-blue-r2068b2"} flex items-center justify-center rounded-lg hover:opacity-75`}
                        onClick={() => {
                            handleOnChange1(item.id)
                        }}
                    >
                        <div 
                            className={`${
                                isUserCountOpen[item.id] === true
                                ? "border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db" 
                                : "border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a"
                                } flex items-center justify-center rounded-lg w-full h-full border cursor-pointer px-8 py-5`}
                        >
                            <span className="font-spoqaMedium tracking-tight text-white small-padding">
                                {isUserCountOpen[item.id] === true ? "접기" : "보기"}  {item.user_count}
                            </span>
                            <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} className={isUserCountOpen[0] === false && " transform rotate-180"} src={WhiteArrow} alt=""/>
                        </div>
                    </button>
                    }
                    {isUserCountOpen[item.id] === true && (
                        <div className="absolute bottom-0 -mb-px">
                            <img style={{width: '1.1875rem', height: '0.875rem'}} className='object-contain' src={BlueTriangle} alt="" />
                        </div>
                    )}
                </div>
                <div className="w-full text-center flex flex-col items-center justify-center">
                    <div className="flex items-center">{item.recommended_date}</div>
                    <div className="flex items-center -mt-3.5">{item.login_date}</div>
                    <div className="flex items-center -mt-3.5 font-spoqaMedium">({item.absent_date})</div>
                </div>
                <div className="relative w-full h-full flex items-center justify-center">
                    <button 
                        style={{width: "14.375rem", padding: '1px'}}
                        className={`${isUserCountOpen ? "bg-blue-r0070d9" : "bg-blue-r2068b2"} flex items-center justify-center rounded-lg hover:opacity-75`}
                        onClick={() => {
                            handleOnChange1(item.id + 1)
                        }}
                    >
                        <div 
                            className={`${
                            isUserCountOpen[item.id + 1] === true
                            ? "border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db" 
                            : "border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a"
                            } flex items-center justify-center rounded-lg border w-full h-full cursor-pointer px-10 py-5`}
                        >
                            <span className="font-spoqaMedium tracking-tight text-white">
                                {isUserCountOpen[item.id + 1] === true ? "접기" : "보기"}
                            </span>
                            <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} className={isUserCountOpen[item.id + 1] === false && " transform rotate-180"} src={WhiteArrow} alt=""/>
                        </div>
                    </button>
                    {isUserCountOpen[item.id + 1] === true && (
                        <div className="absolute bottom-0 -mb-px">
                            <img style={{width: '1.1875rem', height: '0.875rem'}} className='object-contain' src={BlueTriangle} alt="" />
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
                        style={{width: "14.375rem", padding: '1px'}}
                        className={`${isUserCountOpen ? "bg-blue-r0070d9" : "bg-blue-r2068b2"} flex items-center justify-center rounded-lg hover:opacity-75`}
                        onClick={() => {
                            handleOnChange1(item.id + 2)
                        }}
                    >
                        <div 
                            className={`${
                            isUserCountOpen[item.id + 2] === true
                            ? "border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db" 
                            : "border-blue-r3975ad bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a"
                            } flex items-center justify-center rounded-lg w-full h-full border cursor-pointer px-10 py-5`}
                        >
                            <span className="font-spoqaMedium tracking-tight text-white">
                                {isUserCountOpen[item.id + 2] === true ? "접기" : "보기"}
                            </span>
                            <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} className={isUserCountOpen[item.id + 1] === false && " transform rotate-180"} src={WhiteArrow} alt=""/>
                        </div>
                    </button>
                    {isUserCountOpen[item.id + 2] === true && (
                        <div className="absolute bottom-0 -mb-px">
                            <img style={{width: '1.1875rem', height: '0.875rem'}} className='object-contain' src={BlueTriangle} alt="" />
                        </div>
                    )}
                </div>
                <div className="w-full h-full flex items-center justify-end"><p className="pr-32px">{item.point}</p></div>
                <div className="w-full h-full flex items-center justify-end"><p className="pr-32px">{item.holding_amount}</p></div>
            </div>
            <div 
                style={{
                    borderTop: (isUserCountOpen[item.id] === true || isUserCountOpen[item.id+1] === true || isUserCountOpen[item.id+2] === true) && "1px solid #1390fa",
                    // borderBottom: (isUserCountOpen[item.id] === true || isUserCountOpen[item.id+1] === true || isUserCountOpen[item.id+2] === true) && "2px solid #dddddd",
                }}
                className={`flex flex-col relative`}
            >
                {/* {(isUserCountOpen[item.id] === true || isUserCountOpen[item.id + 1] === true || isUserCountOpen[item.id + 2] === true) &&
                    <div className="absolute w-40px mt-10px flex justify-center items-start">
                        <img src={ReplyArrow} className="object-contain" alt="" />
                    </div>
                } */}


                {(isUserCountOpen[item.id] === true && item.hasSubArray === true) && (
                    <>
                    <div className="w-full flex" >
                        {/* <div className="w-40px mt-10px flex justify-center items-start">
                            <img src={ReplyArrow} className="object-contain" alt="" />
                        </div> */}
                        <div className=" w-full flex flex-col ">
                            {/* === Header === */}
                            <div style={{height: '8.5625rem', fontSize: '2.625rem'}} className="w-full bg-gray-r687b8e border-b border-gray-dddddd flex items-center justify-evenly font-spoqaMedium text-white tracking-tight">
                                <div className="w-full h-full flex items-center justify-center">번호</div>
                                <button 
                                    className="w-full h-full flex items-center justify-center hover:opacity-75"
                                    onClick={() => handleOnChange2(0)}
                                >
                                    <p >아이디</p>
                                    <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${subArrowClicked[0] === true ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <div className="w-full h-full flex items-center justify-center">별명</div>
                                <button 
                                    className="w-full h-full flex items-center justify-center"
                                    onClick={() => handleOnChange2(1)}
                                >
                                    <div className="flex flex-col items-center justify-center hover:opacity-75 ">
                                        <div className="flex items-center">하부</div>
                                        <div className="flex items-center -mt-3.5">유저수</div>
                                    </div>
                                    <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${subArrowClicked[1] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <button 
                                    style={{fontSize: '2.4rem'}}
                                    className="w-full h-full flex items-center justify-center"
                                    onClick={() => handleOnChange2(2)}
                                >
                                    <div className="flex flex-col items-center justify-center hover:opacity-75">
                                        <div className="flex items-center">추천일시</div>
                                        <div className="flex items-center -mt-3.5">로그인일시</div>
                                        <div className="flex items-center -mt-3.5">(미접속일수)</div>
                                    </div>
                                    <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${subArrowClicked[2] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <div className="w-full h-full flex items-center justify-center">요율보기</div>
                                <div className="w-full h-full flex items-center justify-center">입금액</div>
                                <div className="w-full h-full flex items-center justify-center">보너스</div>
                                <button 
                                    className="w-full h-full flex items-center justify-center hover:opacity-75"
                                    onClick={() => handleOnChange2(3)}
                                >
                                    <p>출금액</p>
                                    <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${subArrowClicked[3] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <div className="w-full h-full flex items-center justify-center">입출금액</div>
                                <button 
                                    className="w-full h-full flex items-center justify-center hover:opacity-75"
                                    onClick={() => handleOnChange2(4)}
                                >
                                    <p>베팅액</p>
                                    <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${subArrowClicked[4] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <button 
                                    className="w-full h-full flex items-center justify-center hover:opacity-75"
                                    onClick={() => handleOnChange2(5)}
                                >
                                    <p>윈루즈</p>
                                    <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${subArrowClicked[5] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <div className="w-full h-full flex items-center justify-center">상세내역</div>
                                <button 
                                    className="w-full h-full flex items-center justify-center hover:opacity-75"
                                    onClick={() => handleOnChange2(6)}
                                >
                                    <p>포인트</p>
                                    <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${subArrowClicked[6] === false ? "transform rotate-180" : ""}`} alt=""/>
                                </button>
                                <button 
                                    className="w-full h-full flex items-center justify-center hover:opacity-75"
                                    onClick={() => handleOnChange2(7)}
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="flex items-center">보유</div>
                                        <div className="flex items-center -mt-3.5">금액</div>
                                    </div>
                                    <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${subArrowClicked[7] === false ? "transform rotate-180" : ""}`} alt=""/>
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
                height: '6.78125rem',
                marginRight: '1.4375rem',
                borderWidth: '0.1875rem',
                paddingTop: '0.4375rem'
            }} 
            className="rounded-full  border border-gray-dddddd flex items-center justify-center"
        >
            <div 
                style={{
                    background: "linear-gradient(to bottom, #d0dbe4, #ffffff 60%)",
                    paddingLeft: '1.25rem',
                    paddingRight: '2.0625rem',
                    width: 'max-content'
                }} 
                className="h-full w-full rounded-full flex items-center"
            >
                    <div style={{marginBottom: '0.28125rem'}} className="h-full w-full rounded-full flex items-center">
                        <img style={{width: '3.9375rem', height: '3.9375rem'}} className='mr-3' src={DefaultUser} alt="" />
                        <span style={{fontSize: '2.8125rem'}} className="text-gray-r7b7b7b tracking-tight font-spoqaMedium pt-2">{name}</span>
                    </div>
            </div>
        </div>
    )

    return (
        <div className="relative flex flex-col h-full">
            
            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar /> 
                <HomePageTopBanner pageTitle='총판페이지' />
            </div>

            <div style={{margin: '1.875rem', marginTop: '0.75rem', marginRight: '0', marginBottom: '0'}} className="relative overflow-hidden flex flex-col h-full">
                <div style={{height: '11.1875rem', fontSize: '3rem', paddingTop: '2.75rem'}} className='flex flex-col items-center'>
                    <div style={{marginBottom: '0.25rem', marginLeft: '-1.7rem'}} className="tracking-tight flex items-center">
                        <p className="font-spoqaMedium text-blue-r0056a6">Louie3</p>
                        <p className="font-spoqaMedium ml-2 text-gray-r454545">님의 총판 정보입니다.</p>
                    </div>
                    <div style={{backgroundColor:"#868686", height: '0.1875rem', marginLeft: '-1.7rem', minHeight: '0.1875rem', marginBottom: '2.75rem', width: '46.5625rem'}} className=""></div>
                </div>

                <div style={{marginTop: '3.4375rem'}} className="relative flex flex-col justify-start limit:justify-center">

                    <div className="flex flex-col items-start w-full h-full">

                        <div className="w-1836px">
                            <div style={{marginBottom: '1.25rem'}} className="w-full flex items-center tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <img style={{width: '3rem', height: '3.1875rem', marginRight: '0.8125rem'}} src={SummaryIcon} alt="" />
                                <span style={{fontSize: '3rem', marginTop: '0.4rem'}}>총판현황</span>
                            </div>

                            <div style={{width: '73.7rem'}} className="flex w-full flex-wrap">
                                <div style={{marginRight: '0.5625rem'}}>
                                    <SummaryCard img={SummaryIcon1} text1="전체 유저" text2="" count={5} />
                                </div>
                                <div style={{marginRight: '0.5625rem'}}>
                                    <SummaryCard img={SummaryIcon2} text1="요율 설정" text2="완료건" count={20} />
                                </div>
                                <div style={{marginRight: '0.5625rem'}}>
                                    <SummaryCard img={SummaryIcon3} text1="요율 설정" text2="미완료건" count={5} />
                                </div>
                                    <SummaryCard img={SummaryIcon4} text1="전체 포인트" text2="" count={0} />

                                <div style={{marginRight: '0.5625rem'}}>
                                    <SummaryCard img={SummaryIcon5} text1="현재까지" text2="사용 포인트" count={0} />
                                </div>
                                <div style={{marginRight: '0.5625rem'}}>
                                    <SummaryCard img={SummaryIcon6} text1="현재" text2="나의 포인트" count={0} />
                                </div>
                                <div style={{marginRight: '0.5625rem'}}>
                                    <SummaryCard img={SummaryIcon7} text1="진행중인" text2="금액" count="78,307.50" />
                                </div>
                                    <SummaryCard img={SummaryIcon8} text1="제휴 금액" text2="" count="117,515,875.76" />
                            </div>

                            <div style={{marginBottom: '1rem', marginTop: '3.5625rem'}} className="w-full flex items-center tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <img style={{width: '3.1875rem', marginRight: '0.8125rem'}} src={PieIcon} alt="" />
                                <span style={{fontSize: '3rem', marginTop: '0.4rem'}}>롤링요율</span>
                            </div>

                            <div className='flex relative'>
                                <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem', left: '73rem'}} className="absolute h-full z-50"></div>
                                <div style={{width: '75.75rem'}} className="w-full rounded-2xl shadow-plain10 overflow-scroll">
                                    <table style={{borderWidth: '0.375rem', borderRightWidth: 0}} className="border-2 border-gray-dddddd w-full overflow-hidden">
                                        <thead style={{height: '8.8125rem', borderBottomWidth: '0.1875rem'}} className="w-full border-b border-gray-dddddd bg-gray-r8e9296 font-spoqaMedium text-16px text-white tracking-tight">
                                            <tr style={{height: '8.8125rem'}} className="flex items-center">
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center">스포츠</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center">미니게임</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center">에볼루션</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center flex flex-col"><span>아시아</span><span className='-mt-3.5'>게이밍</span></td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center flex flex-col"><span>프레그메틱</span><span className='-mt-3.5'>카지노</span></td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center flex flex-col"><span>드림</span><span className='-mt-3.5'>게이밍</span></td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center flex flex-col"><span>섹시</span><span className='-mt-3.5'>게이밍</span></td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center">빅게이밍</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center">넷엔트</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center flex flex-col"><span>프레그메틱</span><span className='-mt-3.5'>플레이</span></td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center">퀵스핀</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center">스페이드</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center">하바네로</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center">월드매치</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center">메버릭</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center flex flex-col"><span>플레이</span><span className='-mt-3.5'>앤고</span></td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center flex flex-col"><span>YL</span><span className='-mt-3.5'>게이밍</span></td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center flex flex-col"><span>레드</span><span className='-mt-3.5'>타이거</span></td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center">e-스포츠</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className="text-center flex flex-col"><span>키론</span><span className='-mt-3.5'>가상게임</span></td>
                                            </tr>
                                        </thead>
                                        <tbody style={{height: '8.8125rem'}} className="w-full text-585858 tracking-tight font-spoqaMedium">
                                            <tr style={{height: '8.8125rem'}} className="flex items-center bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">1.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">1.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.70%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>
                                                <td style={{width: '14.5rem', fontSize: '2.625rem'}} className=" text-center">0.00%</td>

                                            </tr>
                                        </tbody>
                                    </table>   
                                </div>
                                <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem', left: '0'}} className="absolute h-full z-50"></div>
                            </div>

                            <div style={{marginBottom: '0.875rem', marginTop: '4.625rem'}} className="w-full flex items-center tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <img style={{width: '3.1875rem', marginRight: '0.8125rem'}} src={DetailIcon} alt="" />
                                <span style={{fontSize: '3rem', marginTop: '0.4rem'}}>나의 상세내역</span>
                            </div>

                            {/* <DateSearchBar isLeagueSearch={false} hasIdSearch={true}/> */}
                            <div style={{maxWidth: '1242px'}} className="relative w-full flex flex-col justify-center overflow-visible">
                                <DateSearchBar withMargin={false} isLeagueSearch={false} withBlackButton />
                            </div>

                            
                            <div style={{width: '73.875rem', borderWidth: '0.1875rem' ,borderRadius: '3.1875rem', padding: '1.75rem 2.75rem', margin: '1.875rem 0'}} className="flex flex-wrap w-full border-2 border-gray-b4b4b4 bg-gray-r5a6067">
                                <div className='w-1/2 flex flex-wrap items-center justify-center'>
                                    <div style={{fontSize: '2.625rem', marginBottom: '0.875rem'}} className="w-full font-spoqaMedium tracking-tight">
                                        <div className='flex items-center'>
                                            <img style={{width: '1.3125rem', height: '1.3125rem', marginRight: '1.3125rem'}} src={Diamond} alt="" />
                                            <div className="flex items-center">
                                                <span style={{marginRight: '0.625rem'}} className="text-white">입금:</span>
                                                <span className="text-yellow-ffcc00">0</span>
                                            </div>
                                        </div>                                        
                                    </div>

                                    <div style={{fontSize: '2.625rem'}} className="w-full font-spoqaMedium tracking-tight">
                                        <div className='flex items-center'>
                                            <img style={{width: '1.3125rem', height: '1.3125rem', marginRight: '1.3125rem'}} src={Diamond} alt="" />
                                            <div className="flex items-center">
                                                <span style={{marginRight: '0.625rem'}} className="text-white">출금:</span>
                                                <span className="text-yellow-ffcc00">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className='w-1/2 flex flex-wrap items-center justify-center'>
                                    <div style={{fontSize: '2.625rem', marginBottom: '0.875rem'}} className="w-full font-spoqaMedium tracking-tight">
                                        <div className='flex items-center'>
                                            <img style={{width: '1.3125rem', height: '1.3125rem', marginRight: '1.3125rem'}} src={Diamond} alt="" />
                                            <div className="flex items-center">
                                                <span style={{marginRight: '0.625rem'}} className="text-white">보너스:</span>
                                                <span className="text-yellow-ffcc00">0</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{fontSize: '2.625rem'}} className="w-full font-spoqaMedium tracking-tight">
                                        <div className='flex items-center'>
                                            <img style={{width: '1.3125rem', height: '1.3125rem', marginRight: '1.3125rem'}} src={Diamond} alt="" />
                                            <div className="flex items-center">
                                                <span style={{marginRight: '1.1875rem'}} className="text-white">입출금 합계:</span>
                                                <span className="text-red-f47d7d">-300,200,000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className='flex relative'> 
                                <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem', left: '73rem'}} className="absolute h-full z-50"></div>
                                <div style={{width: '75.75rem'}} className="w-full rounded-2xl shadow-plain10 overflow-scroll">
                                    <table style={{borderWidth: '0.375rem', borderRightWidth: 0}} className="border-2 border-gray-dddddd w-full overflow-hidden">
                                        <thead style={{fontSize: '2.625rem'}} className="w-full border-b border-gray-dddddd bg-gray-r8e9296 font-spoqaMedium text-white tracking-tight">
                                            <tr style={{height: '8.625rem', borderBottomWidth: '0.1875rem'}} className="flex items-center border-b">
                                                <td style={{width: '13.8125rem'}} className="bg-gray-r676e76 h-full flex items-center justify-center">구분</td>
                                                <td style={{width: '13.8125rem'}} className="text-center">스포츠</td>
                                                <td style={{width: '13.8125rem'}} className="text-center">미니게임</td>
                                                <td style={{width: '13.8125rem'}} className="text-center">에볼루션</td>
                                                <td style={{width: '13.8125rem'}} className="text-center flex flex-col"><span>아시아</span><span className='-mt-3.5' >게이밍</span></td>
                                                <td style={{width: '13.8125rem'}} className="text-center flex flex-col"><span>프레그메틱</span><span className='-mt-3.5'>카지노</span></td>
                                                <td style={{width: '13.8125rem'}} className="text-center flex flex-col"><span>드림</span><span className='-mt-3.5'>게이밍</span></td>
                                                <td style={{width: '13.8125rem'}} className="text-center flex flex-col"><span>섹시</span><span className='-mt-3.5'>게이밍</span></td>
                                                <td style={{width: '13.8125rem'}} className="text-center">빅게이밍</td>
                                                <td style={{width: '13.8125rem'}} className="text-center">넷엔트</td>
                                                <td style={{width: '13.8125rem'}} className="text-center flex flex-col"><span>프레그메틱</span><span className='-mt-3.5'>플레이</span></td>
                                                <td style={{width: '13.8125rem'}} className="text-center">퀵스핀</td>
                                                <td style={{width: '13.8125rem'}} className="text-center">스페이드</td>
                                                <td style={{width: '13.8125rem'}} className="text-center">하바네로</td>
                                                <td style={{width: '13.8125rem'}} className="text-center">월드매치</td>
                                                <td style={{width: '13.8125rem'}} className="text-center">메버릭</td>
                                                <td style={{width: '13.8125rem'}} className="text-center flex flex-col"><span>플레이</span><span className='-mt-3.5'>앤고</span></td>
                                                <td style={{width: '13.8125rem'}} className="text-center flex flex-col"><span>YL</span><span className='-mt-3.5'>게이밍</span></td>
                                                <td style={{width: '13.8125rem'}} className="text-center flex flex-col"><span>레드</span><span className='-mt-3.5'>타이거</span></td>
                                                <td style={{width: '13.8125rem'}} className="text-center">e-스포츠</td>
                                                <td style={{width: '13.8125rem'}} className="text-center flex flex-col"><span>키론</span><span className='-mt-3.5'>가상게임</span></td>
                                                <td style={{backgroundColor:"#808387", width: '13.8125rem'}} className="text-center h-full flex items-center justify-center">합계</td>
                                            </tr>
                                        </thead>
                                        <tbody style={{fontSize: '2.625rem'}} className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                                            <tr style={{height: '8.625rem', borderBottomWidth: '0.1875rem'}} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                                <td style={{width: '13.8125rem'}} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">베팅금</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">1.09M</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">33K</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">3.06M</td>
                                                <td style={{width: '13.8125rem'}} className="text-right pr-4">0</td>
                                                <td style={{backgroundColor:"#f2f2f2", color:"#d52e2e", width: '13.8125rem'}} className="text-right pr-4 h-full flex items-center justify-end">7.14M</td>
                                            </tr>
                                            <tr style={{height: '8.625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem'}} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                                <td style={{width: '13.8125rem'}} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">승패</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right pr-4">0</td>
                                                <td style={{backgroundColor:"#ebecee", color:"#d52e2e", width: '13.8125rem'}} className="text-right pr-4 h-full flex items-center justify-end">0</td>
                                            </tr>
                                            <tr style={{height: '8.625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem'}} className="flex items-center bg-gray-fefefe font-spoqaMedium tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd">
                                                <td style={{width: '13.8125rem'}} className="bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-white tracking-tight">정산금액</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right">0</td>
                                                <td style={{width: '13.8125rem'}} className="text-right pr-4">0</td>
                                                <td style={{backgroundColor:"#f2f2f2", color:"#d52e2e", width: '13.8125rem'}} className="text-right pr-4 h-full flex items-center justify-end">0</td>
                                            </tr>
                                        </tbody>
                                    </table>   
                                </div>
                                <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '2.5rem', left: '0'}} className="absolute h-full z-50"></div>
                            </div>


                            <div style={{marginTop: '4.3125rem', marginBottom: '0.75rem'}} className="w-full flex items-center tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <img style={{width: '3.1875rem', height: '2.75rem', marginRight: '0.8125rem'}} className='object-contain -mt-1.5' src={MemberIcon} alt="" />
                                <div style={{fontSize: '3rem'}}>접속중인 회원수: <span className="font-spoqaBold text-black tracking-tight text-gray-r454545">2 명</span></div>

                                <div 
                                    style={{
                                        width:"13.25rem",
                                        height:"5.0625rem",
                                        borderRadius: "0.5625rem",
                                        marginLeft: "2.625rem",
                                        padding: '1px'
                                    }} 
                                    className="flex items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75"
                                    onClick={() => setViewOnline(!viewOnline)}
                                >
                                    <div 
                                        style={{
                                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                                            borderRadius: "0.4625rem"
                                        }} 
                                        className="flex w-full h-full items-center justify-center bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r585b5e to-gray-r303337 cursor-pointer"
                                    >
                                        <span style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-white">{viewOnline ? "닫기" : "보기"}</span>
                                    </div>
                                </div>
                            </div>

                            {viewOnline && (
                                <div className='flex relative'>
                                    <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem', left: '73rem'}} className="absolute h-full z-50"></div>
                                    <div style={{width: '75.75rem' ,height:"9rem", padding: '0 1.125rem', borderRadius: '1.25rem', borderTopRightRadius: '0', borderBottomRightRadius: '0', borderRightWidth: '0'}} className="flex bg-gray-f9f9f9 relative border border-gray-dddddd rounded-2xl items-center overflow-scroll">
                                        <UsersOnline />
                                        <UsersOnline name="tkskdl12" />
                                    </div>
                                </div>
                            )}



                            {/* <div style={{marginBottom: '1.25rem'}} className="w-full flex items-center tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <img style={{width: '3rem', height: '3.1875rem', marginRight: '0.8125rem'}} src={SummaryIcon} alt="" />
                                <span style={{fontSize: '3rem'}}>총판현황</span>
                            </div> */}

                            <div style={{marginTop: '4.5625rem', fontSize: '3rem', width: '73.875rem'}} className="flex items-end justify-between tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                                <div className="flex items-center items-center flex">
                                    <img style={{width: '3.1875rem', height: '2.9375rem', marginRight: '0.8125rem'}} className='object-contain -mt-1.5' src={RecommendIcon} alt="" />
                                    <div className='mt-1'>추천 회원내역</div>
                                </div>
                                
                                <div style={{width:'30.6875rem', height: '5.3125rem', borderWidth: '0.1875rem', fontSize: '2.625rem', borderRadius: '1.625rem'}} className="border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium tracking-tight">
                                    <img style={{width: '1.3125rem', height: '1.3125rem', marginRight: '1.0625rem'}} className="object-contain" src={Diamond} alt="" />
                                    <div style={{marginTop: '0.15rem'}} className="flex items-center">
                                        <span className="text-white">보유금 총합계:</span>
                                        <span className="text-yellow-ffcc00 ml-3">75,000</span>
                                    </div>
                                </div>
                            </div>

                            






                            {/* === 추천회원내역 표 === */}
                            {/* w-1836px */}
                            <div className='flex relative'>
                                <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem', left: '73rem'}} className="absolute h-full z-50"></div>
                                <div style={{filter: "drop-shadow(0px 0px 2px #00000050)", marginTop: '0.375rem', borderWidth: '0.375rem', width: '75.75rem', borderRightWidth: '0'}} className="flex flex-col w-full rounded-2xl border-t relative border-gray-dddddd overflow-scroll">
                                    <div style={{ width: 'fit-content'}} className='flex flex-col w-full rounded-2xl border-t  border-gray-dddddd'>
                                        {/* === Header === */}
                                        <div style={{height: '8.5625rem', fontSize: '2.625rem'}} className="w-full bg-gray-r8e9296 border-b border-r-2 border-l-2 border-gray-dddddd flex items-center justify-evenly font-spoqaMedium text-white tracking-tight">
                                            <div style={{width: '18rem'}} className="text-center">번호</div>
                                            <button
                                                style={{width: '18rem'}}
                                                className="flex text-center items-center justify-center hover:opacity-75"
                                                onClick={() => handleOnChange(0)}
                                            >
                                                <p>아이디</p>
                                                <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${isArrowUp[0] === true ? "transform rotate-180" : ""}`} alt=""/>
                                            </button>
                                            <div style={{width: '18rem'}} className="text-center">이름</div>
                                            <div style={{width: '18rem'}} className="text-center -mt-3.5">별명</div>
                                            <button 
                                                style={{width: '18rem'}}
                                                className="text-center flex items-center justify-center hover:opacity-75"
                                                onClick={() => handleOnChange(1)}
                                            >
                                                <div className="flex flex-col items-center justify-center">
                                                    <div className="flex items-center">하부</div>
                                                    <div className="flex items-center -mt-3.5">유저수</div>
                                                </div>
                                                <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${isArrowUp[1] === false ? "transform rotate-180" : ""}`} alt=""/>
                                            </button>
                                            <button
                                                style={{width: '18rem', fontSize: '2.4rem'}}
                                                className="text-center flex items-center justify-center hover:opacity-75 "
                                                onClick={() => handleOnChange(2)}
                                            >
                                                <div className="flex flex-col items-center justify-center">
                                                    <div style={{height: '3.29rem', marginTop: '0.2rem'}} className="flex items-center">추천일시</div>
                                                    <div style={{height: '3.29rem'}} className="flex items-center -mt-3.5">로그인일시</div>
                                                    <div style={{height: '3.29rem'}} className="flex items-center -mt-3.5">(미접속일수)</div>
                                                </div>
                                                <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem', fontSize: '2.4rem'}} src={WhiteArrow} className={`${isArrowUp[2] === false ? "transform rotate-180" : ""}`} alt=""/>
                                            </button>
                                            <div style={{width: '18rem'}} className="text-center">요율보기</div>
                                            <div style={{width: '18rem'}} className="text-center -mt-3.5">입금액</div>
                                            <div style={{width: '18rem'}} className="text-center -mt-3.5">보너스</div>
                                            <button 
                                                style={{width: '18rem'}}
                                                className="flex text-center items-center justify-center hover:opacity-75"
                                                onClick={() => handleOnChange(3)}
                                            >
                                                <p>출금액</p>
                                                <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${isArrowUp[3] === false ? "transform rotate-180" : ""}`} alt=""/>
                                            </button>
                                            <div style={{width: '18rem'}} className="text-center">입출금액</div>
                                            <button 
                                                style={{width: '18rem'}}
                                                className="flex text-center items-center justify-center hover:opacity-75"
                                                onClick={() => handleOnChange(4)}
                                            >
                                                <p>베팅액</p>
                                                <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${isArrowUp[4] === false ? "transform rotate-180" : ""}`} alt=""/>
                                            </button>
                                            <button 
                                                style={{width: '18rem'}}
                                                className="flex text-center items-center justify-center hover:opacity-75"
                                                onClick={() => handleOnChange(5)}
                                            >
                                                <p>윈루즈</p>
                                                <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${isArrowUp[5] === false ? "transform rotate-180" : ""}`} alt=""/>
                                            </button>
                                            <div style={{width: '18rem'}} className="text-center">상세내역</div>
                                            <button 
                                                style={{width: '18rem'}}
                                                className="flex text-center items-center justify-center hover:opacity-75"
                                                onClick={() => handleOnChange(6)}
                                            >
                                                <p>포인트</p>
                                                <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${isArrowUp[6] === false ? "transform rotate-180" : ""}`} alt=""/>
                                            </button>
                                            <button 
                                                style={{width: '18rem'}}
                                                className="text-center flex items-center justify-center hover:opacity-75"
                                                onClick={() => handleOnChange(7)}
                                            >
                                                <div className="flex flex-col items-center justify-center">
                                                    <div className="flex items-center">보유</div>
                                                    <div className="flex items-center -mt-3.5">금액</div>
                                                </div>
                                                <img style={{width: '1.9375rem', height: '1.3125rem', marginLeft: '0.4375rem'}} src={WhiteArrow} className={`${isArrowUp[7] === false ? "transform rotate-180" : ""}`} alt=""/>
                                            </button>
                                        </div>
                                        {/* === Body === */}
                                        <RecommendedUserCell items={RecommendedUserArray}/>
                                    </div>
                                </div>
                                <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '2.5rem', left: '0'}} className="absolute h-full z-50"></div>
                            </div>
                           

                        </div>
        
                        <div style={{marginTop: '3.75rem'}} className="flex justify-center w-full">
                            <Pagination withMarginBottom page={page} setPage={setPage}/>   
                        </div>
                    </div>
                </div>
            </div>
            <BottomNavbar />

        </div>
    )
}

export default DistributorPage
