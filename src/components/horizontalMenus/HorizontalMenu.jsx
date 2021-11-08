import React, { useState } from 'react'
import { useHistory } from 'react-router';

const HorizontalMenu = ({
    itemsArray, 
    setSelectedTab,
    setSelectedSubTab = null
}) => {

    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                style={{
                    background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                    borderRadius:"10px",
                }}
                className={`${
                    pathname === item.path
                    ? "bg-blue-r58baf7" 
                    : "bg-white hover:bg-blue-d3f3fe"
                } overflow-hidden h-80px w-full flex items-end p-px`} 
                onClick={() => {
                    history.push(item.path)
                    setSelectedTab(item.id)
                    if (setSelectedSubTab !== null) {
                        setSelectedSubTab(0)
                    }
                }}
                onMouseOver={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
            >
                <div 
                    style={{
                        height:"78px", 
                        width:"100%", 
                        borderRadius:"9px",
                    }} 
                    className={`flex w-full justify-end items-end bg-white ${
                        pathname === item.path
                        ? "bg-blue-r58baf7" 
                        : "bg-white hover:bg-blue-d3f3fe"
                    }`}
                >
                    <div 
                        style={{
                            background: pathname === item.path
                            ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                            : isHover === item.id 
                            ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                            : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                            borderBottomLeftRadius:"9px",
                            borderBottomRightRadius:"9px",
                            borderTopLeftRadius:"8px",
                            borderTopRightRadius: "8px",
                            borderColor: pathname === item.path ? "#1a73ce" : "#d6dfe8",
                            boxShadow:'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset'
                        }}
                        className={`mt-3px h-75px w-full rounded-b-lg rounded-t-md flex flex-col items-center`}
                    >
                        <img className="mt-8px ml-2px object-none" src={item.icon} alt="" />
                        <span 
                            className={`${
                                pathname === item.path
                                ? "text-white"
                                : "text-gray-r616161" 
                            } text-14px font-spoqaMedium tracking-tight -mt-4px`}
                        >{item.text}</span>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full h-80px space-x-px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu
