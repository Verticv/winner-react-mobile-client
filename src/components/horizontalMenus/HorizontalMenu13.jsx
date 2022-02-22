import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import horizontalsScroll from '../../utils/horizontalsScroll';

const HorizontalMenu13 = ({
    itemsArray, 
    setSelectedTab,
    isState = 0, 
    setSelectedSubTab = null,
    width,
    imageWidth,
    hasNumber=true
}) => {

    useEffect(() => {
        horizontalsScroll(itemsArray, 't', 'scroll-wrapper')
    }, [itemsArray])

    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map((item, index) => (
            <button 
                id={`t${index}`}
                key={item.id} 
                style={{
                    background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                    borderRadius:"1.625rem",
                    width: `${ width ? width : '13.6rem'}`,
                    height: '13.3rem',
                    marginRight: items.length - 1 === index ?'1.875rem' : '0.1875rem',
                    padding: '1px'
                }}
                className={`${
                    pathname === item.path || isState === item.id
                    ? "bg-blue-r58baf7" 
                    : "bg-white"
                } overflow-hidden flex items-end`} 

                onPointerDown={() => setHover(item.id)}
                onPointerUp={() => {
                    setHover(null)
                    history.push(item.path)
                    setSelectedTab(item.id)
                    horizontalsScroll(itemsArray, 't', 'scroll-wrapper', index)
                    if (setSelectedSubTab !== null) {
                        setSelectedSubTab(0)
                    }
                }}
                onPointerOut={() => setHover(null)}
                onPointerCancel={() => setHover(null)}
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
                        <img style={{width: imageWidth ? imageWidth : '5.7375rem', marginTop: !hasNumber ? 'rem' : imageWidth ? '0.4375rem' : '', marginLeft: '0.4375rem', WebkitUserDrag:"none", MozUserDrag:"none", userDrag:"none"}} className={`${hasNumber ? "mt-2" :"mt-5"}  object-contain`} src={item.icon} alt="" />
                        <span
                            style={{marginTop: `${imageWidth ? '0.0625rem' : ''}`}}
                            className={`${
                                pathname === item.path || isState === item.id
                                ? "text-white"
                                : "text-gray-r616161" 
                            } text-4xl font-spoqaMedium tracking-tight mt-0`}
                        >{item.text}</span>
                        {hasNumber && (
                            <div 
                            style={{width: '6.1875rem', height:'2.785rem', marginTop: imageWidth ? '0.0625rem' : ''}}
                            className={`${
                                pathname === item.path || isState === item.id
                                ? "bg-blue-r1b4372"
                                : "bg-gray-r8c8c8c"
                            } rounded-full flex items-center justify-center`}>
                            <p style={{fontSize: '2rem'}} className=" font-roboto text-white">{item.number}</p>
                        </div>
                        )}
                        
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

export default HorizontalMenu13