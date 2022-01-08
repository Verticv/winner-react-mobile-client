import React, { useState } from "react";
import { Route } from 'react-router';
import { useLocation, useHistory } from "react-router-dom";
import MoneyPage from "pages/MoneyPage";
import MoneyExchangePage from "pages/MoneyExchangePage";
import PointsPage from "pages/PointsPage";
import WinLoseSettlement from "pages/WinLoseSettlement";
import LeftMenu from "components/myPage/LeftMenu";
import EditInfo from 'components/myPage/EditInfo'
import CountryDropDown from "components/dropdowns/MyPageMobileCountryDropDown";
import DropDownControls from "components/dropdowns/MyPageCountriesDropDownControls";
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
import P from "../images/newImages/mainPage/icons/p.png";
import W from "../images/newImages/mainPage/icons/w.png";
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
import InboxIcon from "../images/newImages/mainPage/icons/mail.png";
import Profile from "../images/newImages/mainPage/icons/profile.png";

const MyPage = ({setAuthenticated }) => {
  const isAuthenticated= true
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
      icon: Icon5,
      id: 4,
      path: "#",
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
      path: "#",
      inboxCount: "1",
      mainPath: "#",
      hasArrow: true,
    },
    {
      text: "쪽지관리",
      icon: Icon11,
      id: 10,
      path: "#",
      inboxCount: "20",
      mainPath: "#",
    },
    {
      text: "고객센터",
      icon: Icon12,
      id: 11,
      path: "#",
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

  // const DropdownArrow = ({ isOpen, isWhite }) => (
  //   <>
  //     {isWhite ? (
  //       <img style={{maxWidth: '1.68rem', width: '1.68rem', marginTop: '0.275rem'}} src={isOpen ? ArrowUpWhite : ArrowDownWhite} alt="arrow" />
  //     ) : (
  //       <img style={{maxWidth: '1.68rem', width: '1.68rem', marginTop: '0.275rem'}} src={isOpen ? ArrowUp : ArrowDown} alt="arrow" />
  //     )}
  //   </>
  // );
  const DropdownArrow = ({isOpen, isWhite}) => (
    <>
    {isWhite ? (
        <img style={{width: '1.6875rem'}} className="object-contain" src={isOpen ? ArrowUpWhite : ArrowDownWhite} alt="arrow" />
    ) : (
        <img style={{width: '1.6875rem'}} className="object-contain" src={isOpen ? ArrowUp : ArrowDown} alt="arrow" />
    )}
    </>
  )
  // const CountryButton = (
  //   <div style={{height: '9.3125rem', width: '23.75rem'}} className="flex items-center bg-gradient-to-br from-blue-gradLight to-blue-gradDark rounded-full shadow-inner shadow-plain2 hover:opacity-75 p-5">
  //     <div className="rounded-full flex items-center justify-center">
  //       <img
  //         className="w-28 h-28"
  //         src={country === "KR" ? Koreaflag : UKflag}
  //         alt="flag"
  //       />
  //     </div>
  //     <label style={{marginTop: '0.525rem'}} className="text-5xl mx-14 font-spoqaBold text-white cursor-pointer">
  //       {country}
  //     </label>
  //     <DropdownArrow isWhite isOpen={isCountryOpen} />   
  //   </div>
  // );
  const CountryButton = (
    <div style={{height: '9.375rem', width: '23.75rem', paddingBottom: '0.6875rem', paddingTop: '0.875rem'}} className="flex items-center bg-gradient-to-br from-blue-gradLight to-blue-gradDark rounded-full shadow-inner p-4 shadow-plain2">
        <div style={{width: '7.75rem', height: '7.75rem', marginRight: '3.1875rem'}} className="rounded-full flex items-center justify-center">
            <img className="" src={country === "KR" ? Koreaflag : UKflag} alt="flag"></img>
        </div>
        <label style={{marginRight: '3.25rem', fontSize: '3rem', marginTop: '0.125rem'}} className="font-spoqaBold text-white cursor-pointer">{country}</label>
        <DropdownArrow isWhite isOpen={isCountryOpen}/>
    </div>
)

  const InboxButton = (
    <button
      onClick={() => history.push("/mypage/inbox")}
      style={{height: '9.3125rem'}}
      className="flex-shrink-0 relative flex items-center justify-center text-white rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2 hover:opacity-75 w-36 mr-4"
    >
      <img
        style={{width: '4.5rem', marginTop: '0.4625rem'}}
        className="object-contain"
        src={InboxIcon}
        alt="inbox_icon"
      />
      <div className="absolute flex items-center justify-center w-16 h-16 bg-red-notification top-0 right-0 rounded-full shadow-plain6">
        <label style={{fontSize: '2.8125rem', marginLeft: '0.1875rem'}} className="font-roboto">1</label>
      </div>
    </button>
  );

  const ProfileButton = (
    <button
      onClick={() => history.push("/mypage/inbox")}
      style={{height: '9.3125rem', marginRight: '0.9375rem'}}
      className="flex-shrink-0 relative flex items-center justify-center text-white rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2 hover:opacity-75 w-36"
    >
      <img
        style={{width: '4.3125rem', marginTop: '0.4625rem'}}
        className="object-contain"
        src={Profile}
        alt="profile_icon"
      />
    </button>
  );
  const myInfo = (
    <>
    <div className="w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
        <div style={{marginBottom: '1.875rem'}} className="relative flex w-full h-36 justify-center items-center border-b border-gray-ececec cursor-pointer">
          <span style={{fontSize: '4rem', marginTop: '0.65rem'}} className="font-spoqaBold">마이 인포</span>
          <img
            onClick={() => history.push( isAuthenticated ? "/main" : "/")}
            className="absolute right-12 top-12 w-14"
            src={CloseIcon}
            alt="close_icon"
          />
        </div>
        <div style={{padding: '0 1.875rem'}} className="w-full">
          <div style={{borderRadius: '3.75rem'}} className="relative flex w-full z-10 flex-wrap bg-blue-e8f3fd">
            {isAuthenticated && (<div style={{padding: '2.4375rem', paddingBottom: '1.3125rem'}} className="flex w-full">
              <div style={{width: '23.6rem'}}>
                <img style={{maxWidth: '23.6rem', width: '23.6rem'}} src={ProfileIcon} alt="profile_icon" />
              </div>
              <div style={{marginLeft: '2.4375rem'}} className="w-full">
                <p style={{fontSize: '2.8rem', lineHeight: '0.7', marginBottom: '1.9375rem', marginRight: '1.75rem'}} className="font-robotoBold text-right text-gray-text">
                  LEVEL1
                </p>
                <p style={{fontSize: '3.375rem', lineHeight: '1.1', marginBottom: '1.375rem', marginRight: '1.75rem'}} className="font-spoqaBold text-right text-blue-r1ca7ec">
                  마이마이프로틴화이팅
                  <span className="text-gray-a4b1b4 font-spoqaBold">님</span>
                </p>
                <div>
                  <div style={{borderTopRightRadius: '3.75rem', borderTopLeftRadius: '3.75rem', padding: '0.75rem', paddingRight: '1rem'}} className="flex w-full items-center bg-white rounded-t-2xl p-1.5 pr-4 border-b-2 border-blue-e8f3fd">
                    <div className="w-1/6 ">
                      <div className="flex justify-center items-center text-white h-24 w-24 rounded-full text-6xl bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2">
                        <img className="object-contain ml-1" style={{width: '3.8125rem', marginTop: '0.3125rem'}} src={W} alt="₩" />
                      </div>
                    </div>
                    <p className="w-5/6 m-0 text-6xl text-right text-blue-gradLight font-robotoBold">100,000,000 <span className="font-spoqaBold mr-3">원</span></p>
                  </div>
                  <div style={{borderBottomRightRadius: '3.75rem', borderBottomLeftRadius: '3.75rem', padding: '0.75rem', paddingRight: '1rem'}} className="flex w-full items-center bg-white rounded-b-2xl p-1.5 pr-4">
                    <div className="w-1/6 ">
                      <div className="flex justify-center items-center text-white h-24 w-24 rounded-full text-6xl bg-orange-ff7e00 shadow-plain2">
                        <img className="object-contain mt-1" style={{width: '2.125rem', marginLeft: '0.3125rem'}} src={P} alt="P" />
                      </div>
                    </div>
                    <p className="w-5/6 m-0 text-6xl text-right text-orange-ff7e00 font-robotoBold"><span style={{marginRight: '0.5625rem'}} >12,500,000</span> <span style={{marginRight: '1.1875rem'}} className="font-spoqaBold">P</span></p>
                  </div>
                </div>
              </div>
            </div>)}
            <div style={{marginTop: '2.4375rem', padding: '2.4375rem', paddingTop: '0'}} className="flex w-full justify-end">
              {InboxButton}
              {ProfileButton}
              <div style={{height: '9.3125rem', width: '23.75rem', marginRight: '0.9375rem', paddingLeft: '2.6875rem'}} className="flex items-center bg-gradient-to-br from-blue-gradLight to-blue-gradDark rounded-full shadow-inner shadow-plain2 hover:opacity-75 pr-2">
                <div style={{marginRight: '2.6875rem', marginTop: '0.3375rem'}} className="w-16 h-16 rounded-full flex items-center justify-center">
                  <img className="" src={Logout} alt="logout"></img>
                </div>
                <label style={{marginTop: '0.525rem'}} className="text-5xl font-spoqaBold text-white cursor-pointer">
                  로그아웃
                </label>
              </div>
              {/* <DropDownControls
                isProfilePage
                buttonChild={CountryButton}
                onClick={() => setCountryOpen(!isCountryOpen)}
                onClose={() => setCountryOpen(false)}
              >
                <div className="mt-20 sm:mt-12 lg:mt-4">
                  <CountryDropDown isProfilePage setCountry={setCountry} country={country} />
                </div>
              </DropDownControls> */}
                <DropDownControls buttonChild={CountryButton} onClick={() => setCountryOpen(!isCountryOpen)} onClose={() => setCountryOpen(false)}>
                    <div className=""><CountryDropDown setCountry={setCountry} country={country} /></div>
                </DropDownControls>
            </div>
          </div>
          <div style={{borderBottomRightRadius: '3.75rem', borderBottomLeftRadius: '3.75rem', height: '18.875rem', marginTop: '-7.75rem', paddingTop: '9.3125rem'}} className="flex w-full justify-between items-center pt-16 rounded-3xl bg-gray-d9e6f2">
            <div style={{marginTop: '-0.4375rem'}} className="flex items-center ml-24">
              <img
                style={{width: '10.1875rem'}}
                className="object-contain"
                src={KakaoLogo}
                alt="kakao-icon"
              />
              <span style={{marginTop: '-0.5625rem', marginLeft: '0.4375rem'}} className="text-brown-r351a1e font-roboto text-4xl leading-snug tracking-wide">
                test1234
              </span>
            </div>
            <div style={{height: '6.25rem', width: '0.125rem', marginTop: '-1.3125rem', marginLeft: '2.4375rem'}} className="bg-gray-c1cfdb" />
            <div style={{marginTop: '-0.4375rem', marginRight: '8.75rem'}} className="flex items-center">
              <img
                style={{width: '10.1875rem'}}
                className="object-contain"
                src={TelegramLogo}
                alt="kakao-icon"
              />
              <span style={{marginTop: '-0.5625rem', marginLeft: '0.4375rem'}} className="text-blue-r2aa1d5 font-roboto text-4xl leading-snug tracking-wide">
                test1234
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop: '1.875rem', marginBottom: '36.375rem'}} className="flex w-full">
            <LeftMenu
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              selectedSubTab={selectedSubTab}
              setSelectedSubTab={setSelectedSubTab}
              array={LeftMenuArray}
            />
        </div>
        <div className="flex justify-center mb-40">
          <img style={{width: '22.3125rem'}} className="object-contain" src={Logo} alt="logo" />
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
      <Route exact path="/mypage">
          {myInfo}
      </Route>
    </div>
  );
};

export default MyPage;
