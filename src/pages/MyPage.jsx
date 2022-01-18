import React, { useState } from "react";
import { Route } from 'react-router';
import { useLocation } from "react-router-dom";
import MoneyPage from "pages/MoneyPage";
import MoneyExchangePage from "pages/MoneyExchangePage";
import PointsPage from "pages/PointsPage";
import WinLoseSettlement from "pages/WinLoseSettlement";
import LeftMenu from "components/myPage/LeftMenu";
import EditInfo from 'components/myPage/EditInfo';
import AccountProfileComponent from 'components/common/AccountProfileComponent'
import BetHistory from 'components/myPage/BetHistory'
import CouponUsage from 'components/myPage/CouponUsage'
import Inbox from 'components/myPage/Inbox'
import InboxView from 'components/myPage/InboxView'
import GameResultsPage from 'components/myPage/GameResults'
import Icon1 from "../images/newImages/mainPage/icons/1.png";
import Icon2 from "../images/newImages/mainPage/icons/2.png";
import Icon3 from "../images/newImages/mainPage/icons/3.png";
import Icon4 from "../images/newImages/mainPage/icons/4.png";
import Icon5 from "../images/newImages/mainPage/icons/5.png";
import Icon6 from "../images/newImages/mainPage/icons/6.png";
import Icon7 from "../images/newImages/mainPage/icons/7.png";
import Icon8 from "../images/newImages/mainPage/icons/8.png";
import Icon9 from "../images/newImages/mainPage/icons/9.png";
import Icon10 from "../images/newImages/mainPage/icons/10.png";
import Icon11 from "../images/newImages/mainPage/icons/11.png";
import Icon12 from "../images/newImages/mainPage/icons/12.png";
import Icon13 from "../images/newImages/mainPage/icons/13.png";
import Icon14 from "../images/newImages/mainPage/icons/14.png";
import Logo from "../images/newImages/mainPage/icons/logo.png";


const MyPage = ({setAuthenticated, isAuthenticated }) => {
  
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);
  const [selectedSubTab, setSelectedSubTab] = useState(location.pathname);


  const LeftMenuArray = [
    {
      text: "베팅내역",
      icon: Icon1,
      id: 0,
      path: "/mypage/bet-history",
      mainPath: "/mypage",
      hasArrow: true,
    },
    {
      text: "머니충전",
      icon: Icon2,
      id: 1,
      path: "/mypage/money",
      mainPath: "#",
      hasArrow: true,
    },
    {
      text: "머니환전",
      icon: Icon3,
      id: 2,
      path: "/mypage/money/exchange",
      mainPath: "#",
      hasArrow: true,
    },
    {
      text: "포인트전환",
      icon: Icon4,
      id: 3,
      path: "/mypage/points",
      mainPath: "#",
      hasArrow: true,
    },
    {
      text: "총판페이지",
      icon: Icon5,
      id: 4,
      path: "/distributor-page",
      mainPath: "#",
    },
    {
      text: "윈루즈정산",
      icon: Icon6,
      id: 5,
      path: "/mypage/win-lose-settlement",
      mainPath: "#",
    },
    {
      text: "라이브영상",
      icon: Icon7,
      id: 6,
      path: "#",
      mainPath: "#",
    },
    {
      text: "경기결과",
      icon: Icon8,
      id: 7,
      path: "/mypage/gameresults",
      mainPath: "#",
      hasArrow: true,
    },
    {
      text: "게시판",
      icon: Icon9,
      id: 8,
      path: "/freeboard",
      mainPath: "#",
    },
    {
      text: "쿠폰관리",
      icon: Icon10,
      id: 9,
      path: "/mypage/coupon",
      inboxCount: "1",
      mainPath: "#",
      hasArrow: true,
    },
    {
      text: "쪽지관리",
      icon: Icon11,
      id: 10,
      path: "/mypage/inbox",
      inboxCount: "20",
      mainPath: "#",
    },
    {
      text: "고객센터",
      icon: Icon12,
      id: 11,
      path: "/cscenter",
      mainPath: "#",
      hasArrow: true,
    },
    {
      text: "계좌문의",
      icon: Icon13,
      id: 12,
      path: "#",
      mainPath: "#",
    },
    {
      text: "회원정보수정",
      icon: Icon14,
      id: 13,
      path: "#",
      mainPath: "#",
    },
  ];


  const MyInfo = () => {
    console.log(`location.state`, location.state)
    return (
      <>
      <AccountProfileComponent isAuthenticated={isAuthenticated} />
      <div style={{marginTop: '1.875rem', marginBottom: '36.375rem'}} className="flex w-full">
            <LeftMenu
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              selectedSubTab={selectedSubTab}
              setSelectedSubTab={setSelectedSubTab}
              array={LeftMenuArray}
            />
      </div>
      <div className="w-full flex justify-center mb-40">
        <img style={{width: '22.3125rem'}} className="object-contain" src={Logo} alt="logo" />
      </div>
      </>
    )
  }

  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col items-start limit:items-center w-full h-full">
        <Route exact path="/mypage">
            <MyInfo />
        </Route>
        <Route path="/mypage/bet-history">
            <BetHistory isAuthenticated={isAuthenticated} />
        </Route>
        <Route path="/mypage/money">
            <MoneyPage isAuthenticated={true} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/mypage/money/exchange">
            <MoneyExchangePage isAuthenticated={true} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/mypage/points">
            <PointsPage isAuthenticated={true} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/mypage/win-lose-settlement">
          <WinLoseSettlement isAuthenticated={true} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/mypage/gameresults">
            <GameResultsPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
        </Route>

        <Route path="/mypage/coupon">
            <CouponUsage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
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

      </div>
    </div>
  );
};

export default MyPage;
