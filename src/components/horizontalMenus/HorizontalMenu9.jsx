import React, { useState } from 'react'
import { useHistory } from 'react-router';

const HorizontalMenu9 = ({
    itemsArray, 
    setSelectedTab,
    setSelectedSubTab = null
}) => {

    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)

    console.log(pathname)

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                style={{
                    height:"59px",
                    background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                    borderRadius:"10px",
                }}
                className={`${
                    pathname === item.path
                    ? "bg-blue-r58baf7" 
                    : "bg-white hover:bg-blue-d3f3fe"
                } overflow-hidden w-full rounded-lg flex items-end p-px`} 
                onClick={() => {
                    history.push(item.path)
                    setSelectedTab(item.id)
                    if (setSelectedSubTab !== null) {
                        setSelectedSubTab(0)
                    }
                }}
                onMouseOver={() => setHover(item.path)}
                onMouseLeave={() => setHover(null)}
            >
                <div 
                    style={{
                        height:"57px", 
                        width:"100%", 
                        borderRadius:"9px",
                    }} 
                    className={`flex w-full justify-end items-end ${
                        pathname === item.path 
                        ? "bg-blue-r58baf7" 
                        : "bg-white hover:bg-blue-d3f3fe"
                    }`}
                >
                    <div 
                        style={{
                            background: pathname === item.path
                            ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                            : isHover === item.path 
                            ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                            : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff )",
                            height:"54px",
                            borderBottomLeftRadius:"9px",
                            borderBottomRightRadius:"9px",
                            borderTopLeftRadius:"8px",
                            borderTopRightRadius: "8px",
                            borderColor: pathname === item.path ? "#1a73ce" : "#d6dfe8",   
                            boxShadow:'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset'
                        }}
                        className={`mt-3px w-full rounded-md flex items-center justify-center pt-3px`}
                    >
                        <span 
                            className={`${
                                pathname === item.path
                                ? "text-white"
                                : "text-gray-r616161" }
                                text-20px font-spoqaBold tracking-tight -mt-2px`}
                        >{item.text}</span>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full space-x-2px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu9
