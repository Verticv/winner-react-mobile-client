import React, { useState } from 'react'

const HorizontalMenu8 = ({
    itemsArray, 
    selectedTab = 0,
    setSelectedTab,
    setSelectedSubTab
}) => {

    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                style={{
                    height:"80px",
                    background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                    borderRadius:"10px",
                }}
                className={`${
                    selectedTab === item.id
                    ? "bg-blue-r58baf7" 
                    : "bg-white"
                } overflow-hidden h-80px w-full rounded-lg flex items-end p-px`} 
                onClick={() => {
                    setSelectedTab(item.id)
                    setSelectedSubTab(0)
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
                    className={`flex w-full justify-end items-end ${
                        selectedTab === item.id 
                        ? "bg-blue-r58baf7" 
                        : "bg-white hover:bg-blue-d3f3fe"
                    }`}
                >
                    <div 
                        style={{
                            borderBottomLeftRadius:"9px",
                            borderBottomRightRadius:"9px",
                            borderTopLeftRadius:"8px",
                            borderTopRightRadius: "8px",
                            borderColor: selectedTab === item.id ? "#1a73ce" : "#d6dfe8",
                            background: selectedTab === item.id
                            ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                            : isHover === item.id 
                            ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                            : "linear-gradient(to bottom, #c4d6e6, #f5feff 50%, #ffffff)",
                            boxShadow:'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset'
                        }}
                        className={`mt-3px h-75px w-full rounded-b-md rounded-t-lg flex flex-col items-center`}
                    >
                        <img className="mt-8px ml-2px object-none" src={item.icon} alt="" />
                        <span 
                            className={`${
                                selectedTab === item.id
                                ? "text-white"
                                : "text-gray-r616161" }
                                text-14px font-spoqaMedium tracking-tight -mt-4px`}
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

export default HorizontalMenu8
