import React, { useState } from 'react'
import { useHistory } from 'react-router';

const HorizontalMenu = ({
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
                    width: `${ width ? width : '18.69'}`,
                    height: '13.18rem',
                    marginRight: items.length - 1 === index ?'1.875rem' : '0.1875rem',
                    padding: '1px'
                }}
                className={`${
                    pathname === item.path || isState === item.id
                    ? "bg-blue-r58baf7" 
                    : "bg-white"
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
                        pathname === item.path || isState === item.id
                        ? "bg-blue-r58baf7" 
                        : "bg-white"
                    }`}
                >
                    <div 
                        style={{
                            background: pathname === item.path || isState === item.id
                            ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                            : isHover === item.id 
                            ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                            : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                            borderRadius:"1.625rem",
                            borderTopLeftRadius:"1.625rem 1.3rem",
                            borderTopRightRadius: "1.625rem 1.3rem",
                            borderColor: pathname === item.path || isState === item.id ? "#1a73ce" : "#d6dfe8",
                            boxShadow:'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset',
                        }}
                        className={`h-full w-full rounded-b-lg rounded-t-md flex flex-col items-center`}
                    >
                        <img style={{width: imageWidth ? imageWidth : '4.9375rem', marginTop: imageWidth ? '0.4375rem' : '', marginLeft: '0.4375rem'}} className="mt-2 object-contain" src={item.icon} alt="" />
                        <span
                            style={{marginTop: `${imageWidth ? '0.0625rem' : ''}`}}
                            className={`${
                                pathname === item.path || isState === item.id
                                ? "text-white"
                                : "text-gray-r616161" 
                            } text-4xl font-spoqaMedium tracking-tight mt-0`}
                        >{item.text}</span>
                        <div 
                        style={{width: '6.1875rem', height:'2.785rem', marginTop: imageWidth ? '0.0625rem' : ''}}
                        className={`${
                            pathname === item.path || isState === item.id
                            ? "bg-blue-r1b4372"
                            : "bg-gray-r8c8c8c"
                        } rounded-full flex items-center justify-center`}>
                            <p style={{fontSize: '2rem'}} className=" font-roboto text-white">{item.number}</p>
                        </div>
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
