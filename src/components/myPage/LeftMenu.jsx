// @ts-nocheck
import React, { useState } from 'react'
import ArrowRight from '../../images/newImages/right-arrow-gray.png'
import ArrowRightWhite from '../../images/newImages/right-arrow-white.png'
import { useHistory } from 'react-router-dom'
import PopupControls from '../popups/PopupControls'
import ReauthenticatePopup from 'components/popups/ReauthenticatePopup'


const LeftMenu = ({
    selectedTab,
    setSelectedTab,
    selectedSubTab = null,
    setSelectedSubTab = null,
    array
}) => {

    console.log('selectedTab', selectedTab)
    const pathname = window.location.pathname
    const history = useHistory();
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [isExpanded, setExpanded] = useState(window.location.pathname)
    const [isMouseHover, setMouseHover] = useState("")

    console.log(pathname)
    function buttonPressed(text, path) {
        if (text === "총판페이지") {
            window.open('/distributor-page');
        } else {
            history.push(path)
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
        <div style={{padding: '0 1.875rem'}} className='w-full'>
            <button 
            className={`${
                pathname.includes(path)
                ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" 
                : ""
            } flex w-full items-center p-2.5 px-10 rounded-full group hover:bg-gray-f2f2f2`} 
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
                    className="h-36 bg-white rounded-full flex items-center justify-center" 
                    src={icon} 
                    alt="icon" />
            </div>
            <div className="w-full flex mx-14px justify-between items-center">                
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
                    <div className={index % 2 === 0 ? "bg-gray-f7f7f7" : "bg-white"}>
                        <div style={{padding: '0 1.875rem'}}>
                            <button 
                                className={`${
                                    pathname.includes(item.mainPath)
                                    ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" 
                                    : ""
                                } flex w-full items-center focus:text-white p-2.5 px-10 rounded-full hover:bg-gray-f2f2f2 focus:bg-gradient-to-l focus:from-blue-gradDark focus:to-blue-r2088f0`} 
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
                                        pathname.includes(item.mainPath) && "shadow-plain9"
                                    } bg-white rounded-full flex items-center justify-center flex-shrink-0`} 
                                >
                                    <img 
                                        className="h-36	bg-white rounded-full flex items-center justify-center" 
                                        src={item.icon} 
                                        alt="icon" />
                                </div>
                                <div className="relative w-full flex mx-14px justify-between items-center">
                                    <div className="flex items-center">
                                        <label
                                            className={`${
                                                pathname.includes(item.mainPath)
                                                ? "text-white" 
                                                : isMouseHover === item.path
                                                ? "text-gray-r454545"
                                                : "text-black"
                                            } font-spoqaMedium  text-5xl cursor-pointer tracking-tight`}
                                        >
                                            {item.text}
                                        </label>
                                        {item.inboxCount && (
                                            <div style={{backgroundColor:"#ed2f59"}} className="ml-10px p-5 rounded-full text-white text-3xl ml-8 flex items-center justify-center font-roboto">
                                                {item.inboxCount}
                                            </div>
                                        )}
                                        {item.hasArrow && (
                                            <img 
                                            className="w-6 absolute right-1 top-1" 
                                            src={ArrowRight} 
                                            alt="icon" />
                                        )}
                                        </div>
                                </div>
                            </button>
                                
                            <div className={`${
                                pathname.includes(item.mainPath) 
                                && isExpanded !== item.path + "closed" 
                                && isExpanded !== item.path2 + "closed"
                                && isExpanded !== item.path3 + "closed" 
                                ? "" : "hidden"
                                } font-spoqaMedium text-16px cursor-pointer tracking-tight mt-px`} 
                            >
                            </div>
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
