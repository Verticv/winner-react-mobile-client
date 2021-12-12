import React, { useState } from "react";
import { Route } from 'react-router';
import { useLocation, useHistory } from "react-router-dom";
import MoneyPage from "pages/MoneyPage";
import MoneyExchangePage from "pages/MoneyExchangePage";
import PointsPage from "pages/PointsPage";
import LeftMenu from "components/myPage/LeftMenu";
import CountryDropDown from "components/dropdowns/CountryDropDown";
import DropDownControls from "components/dropdowns/DropDownControls";
import BetHistory from 'components/myPage/BetHistory'
import Icon1 from "../images/newImages/mainPage/Recharge-application.png";
import Icon2 from "../images/newImages/mainPage/Recharge-application.png";
import Icon3 from "../images/newImages/mainPage/Application-for-currency-exchange.png";
import Icon4 from "../images/newImages/mainPage/Point-conversion-request.png";
import Koreaflag from "../images/korea_flag.png";
import ArrowUpWhite from "../images/arrows/arrow_up_white.png";
import ArrowDown from "../images/arrows/arrow_down.png";
import ArrowUp from "../images/arrows/arrow_up.png";
import ArrowDownWhite from "../images/arrows/arrow_down_white.png";
import KakaoLogo from "../images/footer/kakao.png";
import Logout from "../images/newImages/logout.png";
import UKflag from "../images/uk_flag.png";
import TelegramLogo from "../images/footer/telegram.png";
import CloseIcon from "../images/newImages/close-gray.png";
import ProfileIcon from "../images/newImages/profile-image.png";
import InboxIcon from "../images/inbox_icon.png";
import Profile from "../images/newImages/profile-icon.png";

const MyPage = ({ isAuthenticated, setAuthenticated }) => {
  const history = useHistory();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);
  const [selectedSubTab, setSelectedSubTab] = useState(location.pathname);
  const [country, setCountry] = useState("KR");
  const [isCountryOpen, setCountryOpen] = useState();

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
      path: "/mypage/money/charge",
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
      path: "/mypage/points/points-apply",
      mainPath: "#",
      hasArrow: true,
    },
    {
      text: "총판페이지",
      icon: Icon1,
      id: 4,
      path: "#",
      mainPath: "#",
    },
    {
      text: "윈루즈정산",
      icon: Icon1,
      id: 5,
      path: "#",
      mainPath: "#",
    },
    {
      text: "라이브영상",
      icon: Icon1,
      id: 6,
      path: "#",
      mainPath: "#",
    },
    {
      text: "경기결과",
      icon: Icon1,
      id: 7,
      path: "#",
      mainPath: "#",
      hasArrow: true,
    },
    {
      text: "게시판",
      icon: Icon1,
      id: 8,
      path: "#",
      mainPath: "#",
    },
    {
      text: "쿠폰관리",
      icon: Icon1,
      id: 9,
      path: "#",
      inboxCount: "1",
      mainPath: "#",
      hasArrow: true,
    },
    {
      text: "쪽지관리",
      icon: Icon1,
      id: 10,
      path: "#",
      inboxCount: "20",
      mainPath: "#",
    },
    {
      text: "고객센터",
      icon: Icon1,
      id: 11,
      path: "#",
      mainPath: "#",
      hasArrow: true,
    },
    {
      text: "계좌문의",
      icon: Icon1,
      id: 12,
      path: "#",
      mainPath: "#",
    },
    {
      text: "회원정보수정",
      icon: Icon1,
      id: 13,
      path: "#",
      mainPath: "#",
    },
  ];

  const DropdownArrow = ({ isOpen, isWhite }) => (
    <>
      {isWhite ? (
        <img style={{maxWidth: '1.68rem', width: '1.68rem'}} src={isOpen ? ArrowUpWhite : ArrowDownWhite} alt="arrow" />
      ) : (
        <img style={{maxWidth: '1.68rem', width: '1.68rem'}} src={isOpen ? ArrowUp : ArrowDown} alt="arrow" />
      )}
    </>
  );

  const CountryButton = (
    <div className="flex items-center h-36 w-96 bg-gradient-to-br from-blue-gradLight to-blue-gradDark rounded-full shadow-inner shadow-plain2 hover:opacity-75 p-5">
      <div className="rounded-full flex items-center justify-center">
        <img
          className="w-28 h-28"
          src={country === "KR" ? Koreaflag : UKflag}
          alt="flag"
        />
      </div>
      <label className="text-5xl mx-14 font-spoqaBold text-white cursor-pointer pt-px">
        {country}
      </label>
      <DropdownArrow isWhite isOpen={isCountryOpen} />   
    </div>
  );

  const InboxButton = (
    <button
      onClick={() => history.push("/mypage/inbox")}
      className="flex-shrink-0 relative flex items-center justify-center text-white rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2 hover:opacity-75 h-36 w-36 mr-5"
    >
      <img
        style={{width: '4.5rem'}}
        className="ml-2px mt-2px object-contain"
        src={InboxIcon}
        alt="inbox_icon"
      />
      <div className="absolute flex items-center justify-center w-16 h-16 bg-red-notification top-0 right-0 -mr-6px -mt-3px rounded-full shadow-plain6">
        <label className="text-4xl font-roboto mt-2px ml-px">1</label>
      </div>
    </button>
  );

  const ProfileButton = (
    <button
      onClick={() => history.push("/mypage/inbox")}
      className="flex-shrink-0 relative flex items-center justify-center text-white rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2 hover:opacity-75 h-36 w-36 mr-5"
    >
      <img
        className="ml-2px mt-2px w-14 limit1600:object-none object-contain"
        src={Profile}
        alt="inbox_icon"
      />
    </button>
  );

  const myInfo = (
    <>
    <div className="w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
        <div style={{marginBottom: '1.875rem'}} className="relative flex w-full h-36 justify-center items-center border-b border-gray-ececec">
          <span style={{fontSize: '4rem'}} className="spoqaBold font-semibold">마이 인포</span>
          <img
            className="absolute right-12 top-12 w-14"
            src={CloseIcon}
            alt="close_icon"
          />
        </div>
        <div className="px-10 w-full">
          <div className="relative flex w-full z-10 flex-wrap bg-blue-e8f3fd rounded-3xl">
            {isAuthenticated && (<div style={{padding: '2.4375rem', paddingBottom: '1.3125rem'}} className="flex w-full">
              <div style={{width: '23.6rem'}}>
                <img style={{maxWidth: '23.6rem', width: '23.6rem'}} src={ProfileIcon} alt="profile_icon" />
              </div>
              <div className="ml-5 w-full">
                <p style={{fontSize: '2.8rem', lineHeight: '1', marginBottom: '1.9375rem'}} className="font-robotoBold text-right">
                  LEVEL1
                </p>
                <p style={{fontSize: '2.8rem', lineHeight: '1.1', marginBottom: '1.9375rem'}} className="spoqaBold text-right text-blue-r1ca7ec font-semibold">
                  마이마이프로틴화이팅
                  <span className="text-gray-a4b1b4 font-semibold">님</span>
                </p>
                <div>
                  <div className="flex w-full items-center bg-white rounded-t-2xl p-1.5 pr-4 border-b-2 border-blue-e8f3fd">
                    <div className="w-1/6 ">
                      <div className="flex justify-center items-center text-white h-24 w-24 rounded-full text-6xl bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2">
                        ₩
                      </div>
                    </div>
                    <p className="w-5/6 m-0 text-6xl spoqaBold text-right text-blue-r1ca7ec font-semibold">100,000,000 원</p>
                  </div>
                  <div className="flex w-full items-center bg-white rounded-b-2xl p-1.5 pr-4">
                    <div className="w-1/6 ">
                      <div className="flex justify-center items-center text-white h-24 w-24 rounded-full text-6xl bg-orange-ff7e00 shadow-plain2">
                        P
                      </div>
                    </div>
                    <p className="w-5/6 m-0 text-6xl spoqaBold text-right text-orange-ff7e00 font-semibold">12,500,000 P</p>
                  </div>
                </div>
              </div>
            </div>)}
            <div style={{marginTop: '2.4375rem', padding: '2.4375rem', paddingTop: '0'}} className="flex w-full justify-end">
              {InboxButton}
              {ProfileButton}
              <div className="flex items-center justify-center h-36 w-96 bg-gradient-to-br from-blue-gradLight to-blue-gradDark rounded-full shadow-inner p-4px shadow-plain2 hover:opacity-75 pr-2 limit1600:pr-0 mr-5">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-6">
                  <img className="" src={Logout} alt="logout"></img>
                </div>
                <label className="text-5xl font-spoqaBold text-white cursor-pointer pt-px">
                  로그아웃
                </label>
              </div>
              <DropDownControls
                isProfilePage
                buttonChild={CountryButton}
                onClick={() => setCountryOpen(!isCountryOpen)}
                onClose={() => setCountryOpen(false)}
              >
                <div className="mt-20 sm:mt-12 lg:mt-4">
                  <CountryDropDown isProfilePage setCountry={setCountry} country={country} />
                </div>
              </DropDownControls>
            </div>
          </div>
          <div className="flex w-full justify-between items-center pt-16 -mt-14 h-52 rounded-3xl bg-gray-d9e6f2">
            <div className="flex items-center space-x-2px pr-10px ml-24">
              <img
                className="w-36 object-contain"
                src={KakaoLogo}
                alt="kakao-icon"
              />
              <span className="text-brown-r351a1e font-roboto text-4xl leading-snug mb-6px tracking-wide">
                test1234
              </span>
            </div>
            <div className="h-16 w-2px bg-gray-c1cfdb" />
            <div className="flex items-center space-x-2px mr-24">
              <img
                className="w-36 object-contain"
                src={TelegramLogo}
                alt="kakao-icon"
              />
              <span className="text-blue-r2aa1d5 font-roboto text-4xl leading-snug mb-6px tracking-wide">
                test1234
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop: '1.875rem'}} className="flex w-full">
            <LeftMenu
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              selectedSubTab={selectedSubTab}
              setSelectedSubTab={setSelectedSubTab}
              array={LeftMenuArray}
            />
        </div>
    </>
  )

  return (
    <div className="relative flex flex-col justify-center limit:overflow-x-hidden">
      <div className="flex flex-col items-start limit:items-center w-full h-full">
        <Route path="/mypage/bet-history">
            <BetHistory />
        </Route>
        <Route path="/mypage/money/charge">
            <MoneyPage isAuthenticated={true} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/mypage/money/exchange">
            <MoneyExchangePage isAuthenticated={true} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/mypage/points">
            <PointsPage isAuthenticated={true} setAuthenticated={setAuthenticated} />
        </Route>

        {/* <Route path="/mypage/bet-history">
          <DirectoryComponent
            setSelectedTab={setSelectedTab}
            setSelectedSubTab={setSelectedSubTab}
            branch2="베팅내역"
            mainPath="/mypage/bet-history"
          />
        </Route> */}
        {/* 
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
        </Route> */}

        {/* <div className="relative w-default h-225px">
                    <label className="text-36px font-spoqaMedium text-blue-r325685 absolute right-0 bottom-0 z-20 mb-86px mr-50px">마이페이지</label>
                    <img className="z-10" src={MyPageBanner} alt="" />
                </div> */}


        {/* <div>
                    <Footer2 />
                    <Footer />
                </div> */}
      </div>
      <Route exact path="/mypage">
          {myInfo}
      </Route>
    </div>
  );
};

export default MyPage;
