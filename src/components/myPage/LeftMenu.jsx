// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import ArrowRight from '../../images/newImages/mainPage/icons/right-arrow-gray.png'
import ArrowRightWhite from '../../images/newImages/mainPage/icons/right-arrow-white.png'
import { useHistory } from 'react-router-dom'
import PopupControls from '../popups/PopupControls'
import ReauthenticatePopup from 'components/popups/ReauthenticatePopup'
import { getCookie, setCookie } from '../../utils'


const LeftMenu = ({
    selectedTab,
    setSelectedTab,
    selectedSubTab = null,
    setSelectedSubTab = null,
    array
}) => {

    const { currentPathname } = useLocation();
    const pathname = window.location.pathname
    const history = useHistory();
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [isExpanded, setExpanded] = useState(window.location.pathname)
    const [isMouseHover, setMouseHover] = useState("")

    const [activeButton, setActiveButton] = useState(array?.[0]?.path)
    

    useEffect(() => {
        setTimeout(() => {
            const isFromPreviousPage = array.find(ele => ele.path === getCookie('previousUrl'))
            if (isFromPreviousPage) {
                setActiveButton(getCookie('previousUrl'))
            }
        }, 0)
        
    }, [currentPathname])

    function buttonPressed(text, path) {
        if (text === "총판페이지") {
            window.open('/distributor-page');
        } else {
            console.log(`ddddddd`, {
                pathname: path,
                state: { fromPage: window.location.pathname }
              })
            history.push({
                pathname: path,
                state: { fromPage: window.location.pathname }
              })
            setSelectedTab(path)
            if (setSelectedSubTab !== null) {
                setSelectedSubTab(path)
            }
            
            if (isExpanded === path) {
                setExpanded(path + "closed")
            } else {
                setExpanded(path)
            }
        }
    }

    function mouseHover(path) {
        setMouseHover(path)
    }

    function mouseLeave(path) {
        setMouseHover("")
    }
      
    const EditProfileButton = ({path, text, icon, iconHighlight, selectedTab}) => (
        <div style={{padding: '0 1.875rem', borderBottomWidth: '0.1875rem'}} className='w-full border-b border-gray-ececec bg-gray-f7f7f7'>
            <button 
            style={{height: '12.375rem', padding: '1.3125rem', paddingRight: 0}}
            className={`${
                pathname.includes(path)
                ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" 
                : ""
            } flex w-full items-center rounded-full group`} 
            onClick={() => {
                buttonPressed(path)
                setPopupOpen(true)
            }}
        >
            <div 
                className={`${
                    (pathname.includes(path)) && "shadow-plain9"
                } bg-white rounded-full flex items-center justify-center flex-shrink-0`} 
            >
                <img 
                    style={{height: '9.4375rem', width: '9.4375rem', boxShadow: '4px 6.928px 5px 0px rgba(35, 60, 77, 0.3)'}}
                    className="bg-white rounded-full flex items-center justify-center" 
                    src={icon} 
                    alt="icon" />
            </div>
            <div style={{marginLeft: '5rem', marginRight: '4.8125rem'}} className="w-full flex justify-between items-center">                
                <label className={`${(pathname.includes(path)) ? "text-white group-hover:text-white" : "text-black group-hover:text-gray-r454545"} font-spoqaMedium text-5xl cursor-pointer tracking-tight`}>{text}</label>
            </div>
        </button>
        </div>
    )

    function MenuList({ items }) {
        
        return items.map((item, index) => (

            <div key={item.id}>
                {item.text === "회원정보수정" ? (
                    <PopupControls 
                        buttonChild={(
                            <EditProfileButton 
                                path={item.path} 
                                text={item.text} 
                                icon={item.icon} 
                                iconHighlight={item.iconHighlight} 
                                selectedTab={selectedTab}
                            />
                        ) }
                        isPopupOpen={isPopupOpen} 
                        setPopupOpen={setPopupOpen}
                    >
                        <ReauthenticatePopup setPopupOpen={setPopupOpen} setSelectedTab={setSelectedTab}/>
                    </PopupControls>  
                ) : (
                    <div style={{borderBottomWidth: '0.1875rem', height: '12.375rem'}} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-f7f7f7"} border-b border-gray-ececec`}>
                        <div className='h-full' style={{padding: '0 1.875rem'}}>
                            <button 
                                style={{padding: '1.3125rem', paddingRight: 0}}
                                className={`${
                                    activeButton === item?.path
                                    ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" 
                                    : ""
                                } flex w-full h-full items-center focus:text-white rounded-full focus:bg-gradient-to-l focus:from-blue-gradDark focus:to-blue-r2088f0`} 
                                onClick={(e) => buttonPressed(item.text, item.path)}
                                onMouseEnter={() => mouseHover(item.path)}
                                onMouseLeave={() => mouseLeave(item.path)}
                                onFocus={(e) => {
                                    e.target.children[1].children[0].children[0].style.color = 'white'
                                    if (e.target.children[1].children[0].children.length === 3 ) {
                                        if (e.target.children[1].children[0].children[2]) {
                                            e.target.children[1].children[0].children[2].src = ArrowRightWhite
                                        }
                                    }
                                    if (e.target.children[1].children[0].children[1]) {
                                        e.target.children[1].children[0].children[1].src = ArrowRightWhite
                                    }

                                }}
                            >
                                <div 
                                    className={`${
                                        activeButton === item?.path && "shadow-plain9"
                                    } bg-white rounded-full flex items-center justify-center flex-shrink-0`} 
                                >
                                    <img 
                                        style={{height: '9.4375rem', width: '9.4375rem', boxShadow: '0.25rem 0.433rem 0.3125rem 0px rgba(35, 60, 77, 0.3)'}}
                                        className="bg-white rounded-full flex items-center justify-center shadow-plain9" 
                                        src={item.icon} 
                                        alt="icon" />
                                </div>
                                <div style={{marginLeft: '5rem', marginRight: '4.8125rem'}} className="relative w-full flex justify-between items-center">
                                    <div className="flex items-center">
                                        <label
                                            className={`${
                                                activeButton === item?.path
                                                ? "text-white" 
                                                : isMouseHover === item.path
                                                ? "text-gray-r454545"
                                                : "text-black"
                                            } font-spoqaMedium  text-5xl cursor-pointer tracking-tight`}
                                        >
                                            {item.text}
                                        </label>
                                        {item.inboxCount && (
                                            <div style={{marginLeft: '1.875rem'}} className={`flex items-center justify-center bg-red-notification text-white rounded-full shadow-plain6 ${item.inboxCount.split('').length === 1 ? "w-16 h-16" : "h-16 px-5"}`}>
                                                <label style={{fontSize: '2.8125rem'}} className="font-roboto">{item.inboxCount}</label>
                                            </div>    
                                        )}
                                        {item.hasArrow && (
                                            <img 
                                            className="object-contain absolute right-1 top-1" 
                                            style={{width: '1.9375rem', height: '3.1875rem'}}
                                            src={activeButton === item?.path ? ArrowRightWhite : ArrowRight } 
                                            // src={ArrowRight}
                                            alt="icon" />
                                        )}
                                        </div>
                                </div>
                            </button>
                                
                            {/* <div className={`${
                                pathname.includes(item.mainPath) 
                                && isExpanded !== item.path + "closed" 
                                && isExpanded !== item.path2 + "closed"
                                && isExpanded !== item.path3 + "closed" 
                                ? "" : "hidden"
                                } font-spoqaMedium text-16px cursor-pointer tracking-tight mt-px`} 
                            >
                            </div> */}
                        </div>

                    </div>
                )}
            </div>
        ));
    }

    return (
        <div className="bg-white space-y-px w-full">
            <MenuList items={array} />
        </div>
    )
}

export default LeftMenu
