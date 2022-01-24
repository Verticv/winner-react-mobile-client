import React, { useState } from 'react'


const HorizontalSubMenu = ({
    itemsArray, 
    setSelectedTab,
    selectedTab,
    setSelectedSubTab = null,
    isSameWidth = false,
}) => {

    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    console.log(`isHover`, isHover)
    
    
    function TabsList({ items }) {
        return items.map((item, index) => {
            const activeButton = selectedTab === item.id
            return (
                <>
                    <button 
                        className={`${
                            activeButton
                            ? "bg-blue-r0056a6" 
                            : "bg-white  border border-gray-b7b7b7"
                        } rounded-full min-w-fit`}
                        style={{height: '6.375rem', width: isSameWidth ? '17.625rem' : '', minWidth: item?.width ? item.width : 'fit-content' , fontSize: '2.8125rem', marginRight: '1.125rem', borderWidth: `${pathname !== item.path ? '0.1875rem' : ''}`}} 
                        key={item.id} 
                        onClick={() => {
                            // history.push(item.path)
                            setSelectedTab(item.id)
                            if (setSelectedSubTab !== null) {
                                setSelectedSubTab(item.id)
                            }
                        }}
                        onMouseOver={() => setHover(item.id)}
                        onMouseLeave={() => setHover(null)}
                        >
                            <div style={{margin: item?.width ? '0' : '0 2.6875rem'}} >
                                <div>
                                    <span
                                        className={`${
                                            activeButton
                                            ? "text-white" 
                                            : "text-gray-r7b7b7b"
                                        } font-spoqaMedium`}
                                    >{item.text}</span>
                                </div>
                            </div>
                        </button>
                        {items?.length - 1 === index && (
                            <div style={{minWidth: '0.8rem', height: '6.375rem'}}></div>
                        )}
                        </>
                    )
        });
            }

    return (
        <div id="container" className="flex justify-start items-start mr-8">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalSubMenu
