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
                    borderRadius:"1.625rem",
                    width: '18.69rem',
                    height: '13.18rem',
                    marginRight: '0.1875rem',
                    padding: '0.1875rem'
                }}
                className={`${
                    pathname === item.path
                    ? "bg-blue-r58baf7" 
                    : "bg-white hover:bg-blue-d3f3fe"
                } overflow-hidden flex items-end`} 
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
                        // height:"78px",
                        width:"100%", 
                        borderRadius:"1.625rem",
                        paddingTop: '0.5rem'
                    }} 
                    className={`flex w-full justify-end h-full items-end bg-white ${
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
                            borderRadius:"1.625rem",
                            borderTopLeftRadius:"1.625rem 1.3rem",
                            borderTopRightRadius: "1.625rem 1.3rem",
                            borderColor: pathname === item.path ? "#1a73ce" : "#d6dfe8",
                            boxShadow:'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset',
                        }}
                        className={`mt-3px h-full w-full rounded-b-lg rounded-t-md flex flex-col items-center`}
                    >
                        <img style={{width: '6.8rem'}} className="mt-4 ml-2px object-contain" src={item.icon} alt="" />
                        <span
                            style={{marginTop: '0.625rem'}}
                            className={`${
                                pathname === item.path
                                ? "text-white"
                                : "text-gray-r616161" 
                            } text-4xl font-spoqaMedium tracking-tight -mt-4px`}
                        >{item.text}</span>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div id="container" className="flex justify-start items-start">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu
