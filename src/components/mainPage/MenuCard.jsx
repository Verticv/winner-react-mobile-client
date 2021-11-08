import React, { useState } from 'react'
import Shadow from '../../images/menu/shadow.png'
import WhiteArrow from '../../images/arrows/right_arrow_white.png'
import GrayArrow from '../../images/arrows/right_arrow_gray.png'
import { useHistory } from 'react-router-dom'
import PopupControls from '../popups/PopupControls'
import ReauthenticatePopup from '../popups/ReauthenticatePopup'

const MenuCard = ({ 
    mainIcon, 
    menuTitle, 
    optionTitle1, 
    optionTitle2, 
    optionTitle3,
    optionIcon1,
    optionIconHighlight1,
    optionIcon2,
    optionIconHighlight2,
    optionIcon3,
    optionIconHighlight3,
    extraIconCss,
    path1,
    path2,
    path3
}) => {
    const history = useHistory();

    const [selectedTab, setSelectedTab] = useState()
    const [isPopupOpen, setPopupOpen] = useState(true)

    const tabClass = "relative w-full border-b-1 border-gray-d5d5d5 h-59px p-6px z-20 hover:bg-blue-r009edf group"
    const selectedTabClass = "relative w-full h-59px bg-blue-r009edf shadow-plain2 p-6px z-20"

    const menuArray = [
        { text: optionTitle1, id: 0, icon: optionIcon1, iconHighlight: optionIconHighlight1, selectedCss: "border-b rounded-t bg-gray-f6f6f6", path: path1 },
        { text: optionTitle2, id: 1, icon: optionIcon2, iconHighlight: optionIconHighlight2, selectedCss: "border-b bg-gray-fbfbfb", path: path2 },
        { text: optionTitle3, id: 2, icon: optionIcon3, iconHighlight: optionIconHighlight3, selectedCss: "rounded-b bg-gray-f6f6f6", path: path3 },
    ];

    function MenuList({ items }) {
        return items.map(item => (
            <>
            {item.text === "회원정보수정" ? (
                <PopupControls 
                    buttonChild={(
                        <button 
                        style={{width: "280px"}}
                            key={item.id} 
                            className={`${item.selectedCss} ${selectedTab === item.id ? selectedTabClass : tabClass}`}
                        >
                            {selectedTab !== item.id && item.id !== 0 && (<div className="absolute top-0 left-0 h-px w-full bg-white group-hover:bg-blue-r009edf"></div>)} 
                            <div className="relative flex items-center justify-between">
                                <div className="flex items-center space-x-10px">
                                    <div className={selectedTab === item.id ? "relative rounded-full shadow-plain" : "relative rounded-full"}>
                                        <img className="group-hover:opacity-0" src={selectedTab === item.id ? item.iconHighlight : item.icon} alt="meunIcon" />
                                        <img className="absolute group-hover:opacity-100 opacity-0 object-none top-0" src={item.iconHighlight} alt="meunIcon" />                                    
                                    </div>
                                    <label className={`cursor-pointer text-16px font-spoqaMedium tracking-tight pt-px group-hover:text-white ${selectedTab === item.id ? "text-white" : "text-gray-text"}`}>{item.text}</label>
                                </div>
                                <img className="h-15px object-contain mr-4px" src={selectedTab === item.id ? WhiteArrow : GrayArrow} alt="arrow" />
                                <img className="absolute right-0 h-15px object-contain mr-4px group-hover:opacity-100 opacity-0 object-none" src={WhiteArrow} alt="arrow" />
                            </div>
                        </button>
                    ) }
                    isPopupOpen={isPopupOpen} 
                    setPopupOpen={setPopupOpen}
                >
                    <ReauthenticatePopup setPopupOpen={setPopupOpen} setSelectedTab={setSelectedTab}/>
                </PopupControls> 
            ) : (
                <button 
                    key={item.id} 
                    className={`${item.selectedCss} ${selectedTab === item.id ? selectedTabClass : tabClass}`}
                    onMouseDown={() => setSelectedTab(item.id)}
                    onMouseUp={() => {
                        setSelectedTab(false)
                        history.push(item.path)
                    }}
                >
                    {selectedTab !== item.id && item.id !== 0 && (<div className="absolute top-0 left-0 h-px w-full bg-white group-hover:bg-blue-r009edf"></div>)} 
                    <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-10px">
                            <div className={selectedTab === item.id ? "relative rounded-full shadow-plain" : "relative rounded-full"}>
                                <img className="w-full h-full group-hover:opacity-0" src={selectedTab === item.id ? item.iconHighlight : item.icon} alt="meunIcon" />
                                <img className="absolute w-full h-full group-hover:opacity-100 opacity-0 object-none top-0" src={item.iconHighlight} alt="meunIcon" />
                            </div>
                            <label className={`cursor-pointer text-16px font-spoqaMedium tracking-tight pt-px group-hover:text-white ${selectedTab === item.id ? "text-white" : "text-gray-text"}`}>{item.text}</label>
                        </div>
                        <img className="h-15px object-contain mr-4px group-hover:opacity-0" src={selectedTab === item.id ? WhiteArrow : GrayArrow} alt="arrow" />
                        <img className="absolute right-0 h-15px object-contain mr-4px group-hover:opacity-100 opacity-0 object-none" src={WhiteArrow} alt="arrow" />
                    </div>
                </button>
                )}
            
            </>
        ));
    }

    return (
        <div className="relative flex flex-col items-center w-300px h-307px border border-gray-ececec shadow-glow rounded-md bg-gradient-to-b from-white to-gray-f6f6f6 px-8px">
            <div className="flex flex-col h-308px justify-between pt-19px pb-10px">
                <div className="flex flex-col space-y-4px items-center justify-center">
                    <img className={`object-none ${extraIconCss}`} src={mainIcon} alt="icon" />
                    <span className="text-18px text-gray-r667177 font-spoqaMedium pt-2px tracking-tight">{menuTitle}</span>
                </div>
                <div className="relative w-full border border-gray-d5d5d5 rounded-md">
                    <MenuList items={menuArray} />
                    <div className="w-full h-10px rounded-lg absolute bottom-0 z-10 shadow-plain1"/>
                </div>
            </div>
            
            <div className="absolute top-0 mt-306px">
                <img  src={Shadow} alt="shadow" />
            </div>

        </div>
    )
}
// "w-full h-178px border border-gray-d5d5d5 rounded-md shadow-plain5"
export default MenuCard
