import React, { useState } from 'react'
import { useHistory } from 'react-router';

const BetCartHorizontalMenu2 = ({
    itemsArray, 
    setSelectedTab,
    isState = 0, 
    setSelectedSubTab = null,
    width,
    imageWidth,
}) => {

    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map((item, index) => (
            <button 
                key={item.id} 
                style={{
                    background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                    borderRadius:"1.625rem",
                    width: '36.75rem',
                    height: '9.8125rem',
                    marginRight: `${!index ? '0.375rem' : '' }`, 
                    padding: '0.1875rem'
                }}
                // #26303a 0%, #4c6782
                className={`${
                    pathname === item.path
                    ? "bg-blue-r58baf7" 
                    : "bg-white"
                } overflow-hidden rounded-lg flex items-end`} 
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
                        : "bg-white"
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
                        className={`h-full w-full rounded-b-lg rounded-t-md flex justify-center items-center`}
                    >
                        <img style={{width: '3.5rem', marginRight: '0.875rem'}} className="object-contain" src={pathname === item.path ? item.iconHighlight : item.icon} alt="" />
                        <span
                            style={{fontSize: '3rem', marginRight: '0.75rem' ,marginTop: `${imageWidth ? '-0.5rem' : ''}`}}
                            className={`${
                                pathname === item.path
                                ? "text-white"
                                : "text-gray-r616161" 
                            } font-spoqaMedium tracking-tight mt-0`}
                        >{item.text}</span>
                        <div 
                        style={{width: '3.5625rem', height:'3.5625rem'}}
                        className={`${
                            isState === item.id
                            ? "bg-red-notification"
                            : "bg-gradient-to-b from-blue-r4c6782 to-blue-r26303a"
                        } rounded-full flex items-center justify-center shadow-plain1`}>
                            <p style={{fontSize: '1.9375rem'}} className=" font-roboto text-white">{item.number}</p>
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div id="container" style={{margin: '1.875rem 0',}} className="flex w-full">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default BetCartHorizontalMenu2

