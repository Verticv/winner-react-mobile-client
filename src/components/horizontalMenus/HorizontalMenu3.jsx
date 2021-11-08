import React, { useState } from 'react'
import { useHistory } from 'react-router';
import ClockIcon from '../../images/minigames/clock.png'
import ClockIconWhite from '../../images/minigames/clock_white.png'

const HorizontalMenu3 = ({
    itemsArray, 
    selectedTab = "", 
    setSelectedTab,
    setSelectedTab1,
    setSelectedOption,
}) => {

    const history = useHistory();
    const [isHover, setHover] = useState(null)

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
                    selectedTab === item.path
                    ? "bg-blue-r58baf7" 
                    : "bg-white hover:bg-blue-d3f3fe"
                } overflow-hidden h-59px w-full rounded-lg flex items-end p-px`} 
                onClick={() => {
                    setSelectedTab(item.path)
                    setSelectedTab1(0)
                    history.push(item.path)
                    setSelectedOption([
                        {
                            type: "",
                            name: "",
                            selection: "",
                            buttonType: "",
                            subtitle: null
                        }
                    ])
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
                    className={`flex w-full justify-end items-end bg-white ${
                        selectedTab === item.path 
                        ? "bg-blue-r58baf7" 
                        : "bg-white hover:bg-blue-d3f3fe"
                    }`}
                >
                    <div 
                        style={{
                            height: "54px",
                            background: selectedTab === item.path 
                            ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                            : isHover === item.path 
                            ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                            : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                            borderBottomLeftRadius:"9px",
                            borderBottomRightRadius:"9px",
                            borderTopLeftRadius:"8px",
                            borderTopRightRadius: "8px",
                            borderColor: selectedTab === item.path ? "#1a73ce" : "#d6dfe8",
                            boxShadow:'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset'
                        }}
                        className={`mt-3px w-full rounded-b-md rounded-t-lg flex items-center justify-between pr-20px border-l border-r border-b`}
                    >
                        <div className={`flex items-center -ml-px`}>
                            <img 
                                className={`
                                ${
                                    item.id === 0 
                                    ? "ml-15px"
                                    : item.id === 1 
                                    ? "ml-12px"
                                    : item.id === 2
                                    ? "ml-18px"
                                    : "ml-20px"
                                }`} 
                                src={item.img} 
                                alt="" 
                            />
                            <span 
                                style={{color: selectedTab === item.path ? "#ffffff" : "#616161"}} 
                                className={`
                                ${
                                    item.id === 0 
                                    ? "ml-4px"
                                    : item.id === 1 
                                    ? "ml-6px"
                                    : item.id === 2
                                    ? "ml-8px"
                                    : "ml-7px"
                                } text-20px tracking-tight font-spoqaBold`}
                            >
                                {item.text}
                            </span>
                        </div>
                        
                        <div className="flex items-center -mr-px mt-3px">
                            <img className="mr-4px object-none mb-5px" src={selectedTab === item.path ? ClockIconWhite : ClockIcon} alt="" />
                            <div 
                                style={{color: selectedTab === item.path ? "#ffffff" : "#748496"}}
                                className="text-24px tracking-tight font-swagger flex h-24px items-center mb-px"
                            >
                                {item.time}
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full h-59px space-x-2px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu3
