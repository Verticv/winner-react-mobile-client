import React, { useState } from 'react'

const HorizontalMenu6 = ({
    itemsArray, 
    isState = 0, 
    setState
}) => {
    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                style={{
                    height:"98px",
                    background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                    borderRadius:"10px",
                }}
                className={`${
                    isState === item.id
                    ? "bg-blue-r58baf7" 
                    : "bg-white hover:bg-blue-d3f3fe"
                } grounded-radiants overflow-hidden w-full flex items-end p-px justify-end`} 
                onClick={() => setState(item.id)}
                onMouseOver={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
            >
                <div 
                    style={{
                        height:"96px", 
                        width:"100%", 
                        borderRadius:"9px",
                    }} 
                    className={`flex w-full justify-end items-end bg-white ${
                        isState === item.id
                        ? "bg-blue-r58baf7" 
                        : "bg-white hover:bg-blue-d3f3fe"
                    }`}
                >
                    <div 
                        style={{
                            height: "93px",
                            borderBottomLeftRadius:"9px",
                            borderBottomRightRadius:"9px",
                            borderTopLeftRadius:"8px",
                            borderTopRightRadius: "8px",
                            borderColor: isState === item.id ? "#1a73ce" : "#d6dfe8",
                            borderImage: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                            background: isState === item.id
                            ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                            : isHover === item.id 
                            ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                            : "linear-gradient(to bottom, #c4d6e6, #f5feff 50%, #ffffff)",
                            boxShadow:'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset'
                        }}
                        className={`mt-3px w-full rounded-b-md rounded-t-lg flex flex-col items-center`}
                    >
                        <img className={`${item.id === 0 || item.id === 1 || item.id === 4 || item.id === 5 ? "ml-4px" : "ml-3px"} mt-4px object-none`} src={item.icon} alt="" />
                        <div 
                            className={`${
                                isState === item.id
                                ? "text-white"
                                : "text-gray-r616161" }
                                text-14px font-spoqaMedium tracking-tight -mt-4px h-14px flex items-center`}
                        >
                            {item.text}
                        </div>
                        <div 
                            style={{
                                width: "38px",
                                backgroundColor: isState === item.id 
                                ? "#1b4372"
                                : "#8c8c8c"
                            }}
                            className={`text-white text-12px font-roboto tracking-tight mt-8px h-17px rounded-full flex items-center justify-center`}
                        >
                            {item.number}
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full h-103px space-x-px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu6
