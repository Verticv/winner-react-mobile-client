import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import horizontalsScroll from '../../utils/horizontalsScroll';

const HorizontalMenu = ({
    itemsArray, 
    selectedSubTab,
    setSelectedSubTab = null,
    withoutFirst = true,
    setSelectedTab
}) => {

    const history = useHistory();
    const [isHover, setHover] = useState(null)

    console.log('selectedSubTab', selectedSubTab);
        
    useEffect(() => {
        if (withoutFirst) {
            horizontalsScroll(itemsArray, 't', 'scroll-wrapper')
        }
    }, [itemsArray, withoutFirst])

    function TabsList({ items }) {
        return items.map((item, index) => {
            const isActive = selectedSubTab === item.id

            return (
                <button 
                    id={`t${index}`}
                    key={item.id} 
                    style={{
                        background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                        borderRadius:"1.625rem",
                        width: '18.68375rem',
                        height: '13.18rem',
                        marginRight: items.length -1 === index ? '1.875rem' : '1px',
                        // padding: '1px'
                        padding: '1px'
                    }}
                    className={`${
                        isActive
                        ? "bg-blue-r58baf7" 
                        : "bg-white"
                    } overflow-hidden flex items-end`} 
                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        setHover(null)
                        horizontalsScroll(itemsArray, 't', 'scroll-wrapper', index)
                        history.push(item.path)
                        setSelectedSubTab(item.id)
                        setSelectedTab(item.id)
                        // if (setSelectedSubTab !== null) {
                        //     setSelectedSubTab(0)
                        // }
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
                            isActive
                            ? "bg-blue-r58baf7" 
                            : "bg-white"
                        }`}
                    >
                        <div 
                            style={{
                                background: isActive
                                ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                                : isHover === item.id 
                                ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                                : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                                borderRadius:"1.625rem",
                                borderTopLeftRadius:"1.625rem 1.3rem",
                                borderTopRightRadius: "1.625rem 1.3rem",
                                borderColor: isActive ? "#1a73ce" : "#d6dfe8",
                                boxShadow:'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset',
                            }}
                            className={`h-full w-full rounded-b-lg rounded-t-md flex flex-col items-center`}
                        >
                            <img style={{width: '6.8rem', marginLeft: '0.5625rem', WebkitUserDrag:"none", MozUserDrag:"none", userDrag:"none"}} className="mt-4 object-contain select-none" src={item.icon} alt="" />
                            <span
                                style={{marginTop: '0.625rem'}}
                                className={`${
                                    isActive
                                    ? "text-white"
                                    : "text-gray-r616161" 
                                } text-4xl font-spoqaMedium tracking-tight -mt-4px`}
                            >{item.text}</span>
                        </div>
                    </div>
                </button>
            )
        });
    }

    return (
        <div id="container" className="flex justify-start items-start">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu
