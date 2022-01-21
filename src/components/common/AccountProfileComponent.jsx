import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import DropDownControls from "components/dropdowns/MyPageCountriesDropDownControls";
import CountryDropDown from "components/dropdowns/MyPageMobileCountryDropDown";
import CloseIcon from "../../images/newImages/close-gray.png";
import ProfileIcon from "../../images/newImages/profile-image.png";
import Logout from "../../images/newImages/logout.png";
import InboxIcon from "../../images/newImages/mainPage/icons/mail.png";
import Profile from "../../images/newImages/mainPage/icons/profile.png";
import P from "../../images/newImages/mainPage/icons/p.png";
import W from "../../images/newImages/mainPage/icons/w.png";
import Koreaflag from "../../images/korea_flag.png";
import UKflag from "../../images/uk_flag.png";
import KakaoLogo from "../../images/footer/kakao.png";
import TelegramLogo from "../../images/footer/telegram.png";
import ArrowUpWhite from "../../images/arrows/arrow_up_white.png";
import ArrowDown from "../../images/arrows/arrow_down.png";
import ArrowUp from "../../images/arrows/arrow_up.png";
import ArrowDownWhite from "../../images/arrows/arrow_down_white.png";
import LeftArrowIcon from '../../images/newImages/mainPageLeftArrow.png'

const AccountProfileComponent = ({isAuthenticated}) => {

  const history = useHistory();
  const [isCountryOpen, setCountryOpen] = useState();
  const [country, setCountry] = useState("KR");

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

  const DropdownArrow = ({isOpen, isWhite}) => (
    <>
    {isWhite ? (
        <img style={{width: '1.6875rem'}} className="object-contain" src={isOpen ? ArrowUpWhite : ArrowDownWhite} alt="arrow" />
    ) : (
        <img style={{width: '1.6875rem'}} className="object-contain" src={isOpen ? ArrowUp : ArrowDown} alt="arrow" />
    )}
    </>
  )
  
  const CountryButton = (
      <div style={{height: '9.375rem', width: '23.75rem', paddingBottom: '0.6875rem', paddingTop: '0.875rem', paddingLeft: '0.9rem'}} className="flex items-center bg-gradient-to-br from-blue-gradLight to-blue-gradDark rounded-full shadow-inner p-4 shadow-plain2">
          <div style={{marginRight: '3.1875rem', marginTop: '0.1rem'}} className="rounded-full h-full flex items-center justify-center">
              <img style={{width: '7.6rem', height: '7.6rem'}} className="" src={country === "KR" ? Koreaflag : UKflag} alt="flag"></img>
          </div>
          <label style={{marginRight: '3.25rem', fontSize: '3rem', marginTop: '0.225rem'}} className="font-spoqaBold text-white cursor-pointer">{country}</label>
          <DropdownArrow isWhite isOpen={isCountryOpen}/>
      </div>
  )

  const location = {
    pathname: '/mypage',
    state: { fromPage: window.location.pathname }
  }

  return (
    <div className="w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
          <div style={{marginBottom: '1.875rem'}} className="relative flex w-full h-36 justify-center items-center border-b border-gray-ececec cursor-pointer">
              {window.location.pathname !== '/mypage' && (
                  <button onClick={() => history.push(location)} className="absolute cursor-pointer" style={{top: '2.9375rem', left: '3.6875rem'}}>
                    <img
                      // onClick={() => history.push('/main')}
                      style={{height: '3.625rem', width: '2.3125rem'}}
                      className="w-9"
                      src={LeftArrowIcon}
                      alt="left_arrow_icon"
                  />
                  </button>
              )}
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
                  <DropDownControls buttonChild={CountryButton} isDropdownOpen={isCountryOpen} setDropdownOpen={setCountryOpen} >
                  <div className=""><CountryDropDown setCountry={setCountry} country={country} /></div>
                  </DropDownControls>
              </div>
            </div>
            <div style={{borderBottomRightRadius: '3.75rem', borderBottomLeftRadius: '3.75rem', height: '18.875rem', marginTop: '-7.75rem', paddingTop: '9.3125rem'}} className="flex w-full justify-between items-center pt-16 rounded-3xl bg-gray-d9e6f2">
              <div style={{marginTop: '-0.4375rem'}} className="flex items-center ml-32">
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
              <div style={{height: '6.25rem', width: '0.125rem', marginTop: '-1.3125rem', marginLeft: '0.6rem'}} className="bg-gray-c1cfdb" />
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
  )
}



export default AccountProfileComponent;