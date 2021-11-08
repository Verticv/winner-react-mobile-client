import React, { useState } from 'react'

const HorizontalMenu2 = ({
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
                    height:"56px",
                    background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                    borderRadius:"5px",
                }}
                className={`${
                    isState === item.id
                    ? "bg-blue-r58baf7" 
                    : "bg-gray-fafafa  hover:bg-blue-d3f3fe"
                } relative overflow-hidden w-full flex items-end p-px`} 
                onClick={() => setState(item.id)}
                onMouseOver={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
            >
                <div 
                    style={{
                        height:"54px", 
                        width:"100%", 
                        borderRadius:"4px",
                    }} 
                    className={`flex w-full justify-end items-end bg-white ${
                        isState === item.id
                        ? "bg-blue-r58baf7" 
                        : "bg-white hover:bg-blue-d3f3fe"
                    }`}
                >
                    <div 
                        style={{
                            height: "52px",
                            background: isState === item.id 
                            ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                            : isHover === item.id 
                            ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                            : "#fafafa",
                            borderRadius: isState === item.id ? "4px" : "4px",
                            borderColor: isState === item.id  ? "#1a73ce" : "#d6dfe8",
                            boxShadow:'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset'
                        }}
                        className={`${
                            isState === item.id 
                            ? "bg-gradient-to-b from-blue-r2087f0 via-blue-r2087f0 to-blue-gradDark"
                            : "bg-gray-fafafa"
                        } mt-2px w-full rounded-b-md flex items-center justify-center space-x-4px`}
                    >
                        <img className={`${item.id === 0 ? "mb-3px" : "mb-2px" } object-none`} src={isState === item.id ? item.iconHighlight : item.icon} alt="" />
                        <div 
                            className={`${
                                isState === item.id
                                ? "text-white"
                                : "text-gray-r616161" }
                                text-16px font-spoqaMedium tracking-tight h-16px flex items-center`}
                        >
                            {item.text}
                        </div>

                        <div 
                        className={`${
                            isState === item.id
                            ? "bg-gradient-to-b from-red-ff426a via-red-ef325f to-red-cf1348"
                            : "bg-gradient-to-b from-blue-r4c6782 via-blue-r40566c to-blue-r26303a"
                        } absolute top-3px right-3px h-22px w-22px rounded-full flex items-center justify-center shadow-plain1`}>
                            <p className=" font-roboto text-12px text-white">{item.number}</p>
                        </div>

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

export default HorizontalMenu2
