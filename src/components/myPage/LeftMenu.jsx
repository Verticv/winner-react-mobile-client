import React, { useState } from 'react'
import ArrowDown from '../../images/myPage/leftMenu/arr_down.png'
import ArrowUp from '../../images/myPage/leftMenu/arr_up.png'
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
        <button 
            className={`${
                pathname.includes(path)
                ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" 
                : "bg-white"
            } flex w-full items-center p-5px h-53px rounded-full group hover:bg-gray-f2f2f2`} 
            onClick={() => {
                buttonPressed(path)
                setPopupOpen(true)
            }}
        >
            <div 
                className={`${
                    (pathname.includes(path)) && "shadow-plain9"
                } h-42px w-42px bg-white rounded-full flex items-center justify-center flex-shrink-0`} 
            >
                <img 
                    className="h-42px w-42px bg-white rounded-full flex items-center justify-center" 
                    src={(pathname.includes(path)) ? iconHighlight : icon} 
                    alt="icon" />
            </div>
            <div className="w-full flex mx-14px justify-between items-center">                
                <label className={`${(pathname.includes(path)) ? "text-white group-hover:text-white" : "text-gray-r8c8c8c group-hover:text-gray-r454545"} font-spoqaMedium text-16px cursor-pointer tracking-tight`}>{text}</label>
            </div>
        </button>
    )

    function MenuList({ items }) {
        
        return items.map(item => (

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
                    <div>
                        <button 
                            className={`${
                                pathname.includes(item.mainPath)
                                ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" 
                                : "bg-white"
                            } flex w-full items-center p-5px h-53px rounded-full hover:bg-gray-f2f2f2`} 
                            onClick={(e) => buttonPressed(item.text, item.path)}
                            onMouseEnter={() => mouseHover(item.path)}
                            onMouseLeave={() => mouseLeave(item.path)}
                        >
                            <div 
                                className={`${
                                    pathname.includes(item.mainPath) && "shadow-plain9"
                                } h-42px w-42px bg-white rounded-full flex items-center justify-center flex-shrink-0`} 
                            >
                                <img 
                                    className="h-42px w-42px bg-white rounded-full flex items-center justify-center" 
                                    src={pathname.includes(item.mainPath) ? item.iconHighlight : item.icon} 
                                    alt="icon" />
                            </div>
                            <div className="w-full flex mx-14px justify-between items-center">
                                <div className="flex items-center">
                                    <label
                                        className={`${
                                            pathname.includes(item.mainPath)
                                            ? "text-white" 
                                            : isMouseHover === item.path
                                            ? "text-gray-r454545"
                                            : "text-gray-r8c8c8c"
                                        } font-spoqaMedium text-16px cursor-pointer tracking-tight`}
                                    >
                                        {item.text}
                                    </label>
                                    {item.inboxCount && (
                                        <div style={{backgroundColor:"#ed2f59"}} className="ml-10px h-17px w-17px rounded-xl text-white flex items-center justify-center text-12px font-roboto pt-px pr-px">
                                            {item.inboxCount}
                                        </div>
                                    )}
                                    </div>
                                    {item.sub1 && (
                                        <img 
                                            className={isExpanded === item.path + "closed" && "transform rotate-180"} 
                                            src={
                                                isExpanded === item.path + "closed"
                                                ? ArrowUp 
                                                : pathname.includes(item.mainPath)
                                                ? ArrowUp 
                                                : ArrowDown
                                            } 
                                            alt="" 
                                        />
                                    )}
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
                            {item.sub1 && (
                                <button 
                                    onClick={() => {
                                        setSelectedSubTab(item.path)
                                        history.push(item.path)
                                    }}
                                    className={`${
                                        pathname === item.path || pathname === item.path_1 
                                        || pathname === item.path_2 || pathname === item.path_3 
                                        || pathname === item.path_4 || pathname === item.path_5 
                                        || pathname === item.path_6 || pathname === item.path_7 || pathname === item.path_8 
                                        ? "bg-blue-d0e8ff text-gray-r454545" 
                                        : "bg-gray-f9f9f9 text-gray-r8c8c8c"
                                    } flex items-center h-45px w-full  pl-60px hover:text-gray-r454545`}>
                                        {item.sub1}
                                </button>
                            )}
                            {item.sub2 && (
                                <button 
                                    onClick={() => {
                                        setSelectedSubTab(item.path2)
                                        setSelectedTab(item.path2)
                                        history.push(item.path2)
                                    }}
                                    className={`${
                                        pathname === item.path2 || pathname === item.path2_1 || pathname === item.path2_2 || pathname === item.path2_3
                                        ? "bg-blue-d0e8ff text-gray-r454545" 
                                        : "bg-gray-f9f9f9 text-gray-r8c8c8c"
                                    } ${item.sub2 === "미니게임" && "rounded-b-3xl"} flex items-center h-45px w-full bg-gray-f9f9f9 pl-60px hover:text-gray-r454545`}>
                                        {item.sub2}
                                </button>
                            )}
                            {item.sub3 && (
                                <button 
                                    onClick={() => {
                                        setSelectedSubTab(item.path3)
                                        setSelectedTab(item.path3)
                                        history.push(item.path3)
                                    }}
                                    className={`${
                                        pathname === item.path3 || pathname === item.path3_1
                                        ? "bg-blue-d0e8ff text-gray-r454545" 
                                        : "bg-gray-f9f9f9 text-gray-r8c8c8c"
                                    } ${item.sub3 === "키론가상게임" && "rounded-b-3xl"} flex items-center h-45px w-full bg-gray-f9f9f9 pl-60px hover:text-gray-r454545`}>
                                        {item.sub3}
                                </button>
                            )}
                            {item.sub4 && (
                                <button 
                                    onClick={() => {
                                        setSelectedSubTab(item.path4)
                                        setSelectedTab(item.path4)
                                        history.push(item.path4)
                                    }}
                                    className={`${
                                        pathname === item.path4
                                        ? "bg-blue-d0e8ff text-gray-r454545" 
                                        : "bg-gray-f9f9f9 text-gray-r8c8c8c"
                                    } ${item.text === "미니게임" && "rounded-b-3xl"} flex items-center h-45px w-full bg-gray-f9f9f9 pl-60px hover:text-gray-r454545`}>
                                        {item.sub4}
                                </button>
                            )}
                        </div>

                    </div>
                )}
                
            </div>
        ));
    }

    return (
        <div className="w-200px bg-white shadow-subNavbar rounded-26px p-4px space-y-px mb-180px">
            <MenuList items={array} />
        </div>
    )
}

export default LeftMenu
