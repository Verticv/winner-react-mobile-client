import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import React, { useState } from 'react'
import MyPageBanner from '../images/myPage/mypage_banner.png'
import LeftMenu from 'components/myPage/LeftMenu'
import Footer2 from 'components/mainPage/Footer2'
import Footer from 'components/mainPage/Footer'
import { Route } from 'react-router-dom'
import BetHistory from 'components/myPage/BetHistory'
import DirectoryComponent from 'components/myPage/DirectoryComponent'
import ChargeHistory from 'components/myPage/ChargeHistory'
import ExchangeHistory from 'components/myPage/ExchangeHistory'
import WinLoseSettlement from 'components/myPage/WinLoseSettlement'
import CouponUsage from 'components/myPage/CouponUsage'
import CouponGift from 'components/myPage/CouponGift'
import CouponHistory from 'components/myPage/CouponHistory'
import PointsApply from 'components/myPage/PointsApply'
import PointsAccumulate from 'components/myPage/PointsAccumulate'
import PointsTransaction from 'components/myPage/PointsTransaction'
import EditInfo from 'components/myPage/EditInfo'
import Inbox from 'components/myPage/Inbox'
import InboxView from 'components/myPage/InboxView'
import { useLocation } from 'react-router-dom'
import Icon1 from '../images/myPage/leftMenu/icon_1.png'
import Icon2 from '../images/myPage/leftMenu/icon_2.png'
import Icon3 from '../images/myPage/leftMenu/icon_3.png'
import Icon4 from '../images/myPage/leftMenu/icon_4.png'
import Icon5 from '../images/myPage/leftMenu/icon_5.png'
import Icon6 from '../images/myPage/leftMenu/icon_6.png'
import Icon7 from '../images/myPage/leftMenu/icon_7.png'
import Icon8 from '../images/myPage/leftMenu/icon_8.png'
import IconHighlight1 from '../images/myPage/leftMenu/icon_1_highlight.png'
import IconHighlight2 from '../images/myPage/leftMenu/icon_2_highlight.png'
import IconHighlight3 from '../images/myPage/leftMenu/icon_3_highlight.png'
import IconHighlight4 from '../images/myPage/leftMenu/icon_4_highlight.png'
import IconHighlight5 from '../images/myPage/leftMenu/icon_5_highlight.png'
import IconHighlight6 from '../images/myPage/leftMenu/icon_6_highlight.png'
import IconHighlight7 from '../images/myPage/leftMenu/icon_7_highlight.png'
import IconHighlight8 from '../images/myPage/leftMenu/icon_8_highlight.png'

const MyPage = ({isAuthenticated, setAuthenticated}) => {

    const LeftMenuArray = [
        { text: "베팅내역", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/mypage/bet-history", mainPath:"/mypage/bet-history" },
        { 
            text: "충/환전내역", 
            icon: Icon2, 
            iconHighlight: IconHighlight2, 
            id: 1, 
            path: "/mypage/transaction/charge-history", 
            sub1: "충전내역", 
            sub2: "환전내역",
            path2: "/mypage/transaction/exchange-history",
            mainPath: "/mypage/transaction"
        },
        { text: "총판페이지", icon: Icon3, iconHighlight: IconHighlight3, id: 2, path: "/distributor-page", mainPath:"/distributor-page" },
        { text: "윈루즈정산", icon: Icon4, iconHighlight: IconHighlight4, id: 3, path: "/mypage/win-lose-settlement", mainPath:"/mypage/win-lose-settlement" },
        { 
            text: "쿠폰관리",
            icon: Icon5, 
            iconHighlight: IconHighlight5, 
            id: 4, 
            path: "/mypage/coupon/coupon-usage", 
            sub1: "쿠폰사용",
            sub2: "쿠폰선물",
            sub3: "쿠폰내역",
            path2: "/mypage/coupon/coupon-gift", 
            path3: "/mypage/coupon/coupon-history/received",
            path3_1: "/mypage/coupon/coupon-history/sent",
            mainPath: "/mypage/coupon"
        },
        { 
            text: "포인트", 
            icon: Icon6, 
            iconHighlight: IconHighlight6, 
            id: 5, 
            path: "/mypage/points/points-apply", 
            sub1: "포인트전환신청",
            sub2: "포인트적립내역",
            sub3: "포인트전환내역",
            path2: "/mypage/points/points-accumulate-history", 
            path3: "/mypage/points/points-transaction-history",
            mainPath: "/mypage/points"
        },
        { text: "쪽지관리", icon: Icon7, iconHighlight: IconHighlight7, id: 6, path: "/mypage/inbox", inboxCount: "3", mainPath:"/mypage/inbox" },
        { text: "회원정보수정", icon: Icon8, iconHighlight: IconHighlight8, id: 7, path: "/mypage/edit-info", mainPath:"/mypage/edit-info" }
    ];

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)

    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">

            <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>


            <div className="flex flex-col items-start limit:items-center limit1600:mt-92px mt-122px w-full h-full">
                <Route path="/mypage/bet-history">
                    <DirectoryComponent 
                        setSelectedTab={setSelectedTab}
                        setSelectedSubTab={setSelectedSubTab}
                        branch2="베팅내역" 
                        mainPath="/mypage/bet-history"
                    />
                </Route>
                <Route path="/mypage/transaction/charge-history">
                    <DirectoryComponent 
                        setSelectedTab={setSelectedTab} 
                        setSelectedSubTab={setSelectedSubTab}
                        branch2="충/환전내역" 
                        branch3="충전내역"
                        mainPath="/mypage/transaction/charge-history"
                    />
                </Route>
                <Route path="/mypage/transaction/exchange-history">
                    <DirectoryComponent 
                        setSelectedTab={setSelectedTab} 
                        setSelectedSubTab={setSelectedSubTab}
                        branch2="충/환전내역"
                        branch3="환전내역" 
                        mainPath="/mypage/transaction/charge-history"
                    />
                </Route>
                <Route path="/mypage/win-lose-settlement">
                    <DirectoryComponent 
                        setSelectedTab={setSelectedTab} 
                        setSelectedSubTab={setSelectedSubTab}
                        branch2="윈루즈정산" 
                        mainPath="/mypage/win-lose-settlement"
                    />
                </Route>
                <Route path="/mypage/coupon/coupon-usage">
                    <DirectoryComponent 
                        setSelectedTab={setSelectedTab} 
                        setSelectedSubTab={setSelectedSubTab}
                        branch2="쿠폰관리" 
                        branch3="쿠폰사용" 
                        mainPath="/mypage/coupon/coupon-usage"
                    />
                </Route>
                <Route path="/mypage/coupon/coupon-gift">
                    <DirectoryComponent 
                        setSelectedTab={setSelectedTab} 
                        setSelectedSubTab={setSelectedSubTab}
                        branch2="쿠폰관리" 
                        branch3="쿠폰선물" 
                        mainPath="/mypage/coupon/coupon-usage"
                    />
                </Route>
                <Route path="/mypage/coupon/coupon-history">
                    <DirectoryComponent 
                        setSelectedTab={setSelectedTab} 
                        setSelectedSubTab={setSelectedSubTab}
                        branch2="쿠폰관리" 
                        branch3="쿠폰내역" 
                        mainPath="/mypage/coupon/coupon-usage"
                    />
                </Route>
                <Route path="/mypage/points/points-apply">
                    <DirectoryComponent 
                        setSelectedTab={setSelectedTab} 
                        setSelectedSubTab={setSelectedSubTab}
                        branch2="포인트" 
                        branch3="포인트전환신청" 
                        mainPath="/mypage/points/points-apply"
                    />
                </Route>
                <Route path="/mypage/points/points-accumulate-history">
                    <DirectoryComponent 
                        setSelectedTab={setSelectedTab} 
                        setSelectedSubTab={setSelectedSubTab}
                        branch2="포인트" 
                        branch3="포인트적립내역" 
                        mainPath="/mypage/points/points-apply"
                    />
                </Route>
                <Route path="/mypage/points/points-transaction-history">
                    <DirectoryComponent 
                        setSelectedTab={setSelectedTab} 
                        setSelectedSubTab={setSelectedSubTab}
                        branch2="포인트" 
                        branch3="포인트전환내역" 
                        mainPath="/mypage/points/points-apply"
                    />
                </Route>
                <Route exact path="/mypage/inbox">
                    <DirectoryComponent 
                        setSelectedTab={setSelectedTab} 
                        setSelectedSubTab={setSelectedSubTab}
                        branch2="쪽지관리" 
                        mainPath="/mypage/inbox"
                    />
                </Route>
                <Route path="/mypage/inbox/*">
                    <DirectoryComponent 
                        setSelectedTab={setSelectedTab} 
                        setSelectedSubTab={setSelectedSubTab}
                        branch2="쪽지관리" 
                        branch3="뷰" 
                        mainPath="/mypage/inbox"
                    />
                </Route>
                <Route path="/mypage/edit-info">
                    <DirectoryComponent 
                        setSelectedTab={setSelectedTab} 
                        setSelectedSubTab={setSelectedSubTab}
                        branch2="회원정보수정" 
                        mainPath="/mypage/edit-info"
                    />
                </Route>

                <div className="relative w-default h-225px">
                    <label className="text-36px font-spoqaMedium text-blue-r325685 absolute right-0 bottom-0 z-20 mb-86px mr-50px">마이페이지</label>
                    <img className="z-10" src={MyPageBanner} alt="" />
                </div>

                <div className="flex mt-20px w-default">
                    <div>
                        <LeftMenu 
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            selectedSubTab={selectedSubTab} 
                            setSelectedSubTab={setSelectedSubTab}
                            array={LeftMenuArray}
                        />
                    </div>

                    <div className="ml-20px w-1040px">
                        <Route path="/mypage/bet-history">
                            <BetHistory />
                        </Route>
                        <Route path="/mypage/transaction/charge-history">
                            <ChargeHistory />
                        </Route>
                        <Route path="/mypage/transaction/exchange-history">
                            <ExchangeHistory />
                        </Route>
                        <Route path="/mypage/win-lose-settlement">
                            <WinLoseSettlement />
                        </Route>
                        <Route path="/mypage/coupon/coupon-usage">
                            <CouponUsage />
                        </Route>
                        <Route path="/mypage/coupon/coupon-gift">
                            <CouponGift />
                        </Route>
                        <Route path="/mypage/coupon/coupon-history">
                            <CouponHistory />
                        </Route>
                        <Route path="/mypage/points/points-apply">
                            <PointsApply />
                        </Route>
                        <Route path="/mypage/points/points-accumulate-history">
                            <PointsAccumulate />
                        </Route>
                        <Route path="/mypage/points/points-transaction-history">
                            <PointsTransaction />
                        </Route>
                        <Route exact path="/mypage/inbox">
                            <Inbox />
                        </Route>
                        <Route path="/mypage/inbox/*">
                            <InboxView />
                        </Route>
                        <Route path="/mypage/edit-info">
                            <EditInfo />
                        </Route>
                        <Route path="*">
                        </Route>
                    </div>
                </div>

                <div>
                    <Footer2 />
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default MyPage
