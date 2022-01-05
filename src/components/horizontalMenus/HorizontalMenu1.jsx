import React, { useState } from 'react'
import { useHistory } from 'react-router';

const HorizontalMenu1 = ({
    itemsArray, 
    setSelectedTab,
    setSelectedSubTab = null,
}) => {

    const history = useHistory();
    let pathname = window.location.pathname
   
    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map((item, index) => {
            let isSameLink = pathname === item.path

            if (item.hasSameParent) {
                const pagePath = window.location.pathname.split('/')
                pagePath?.pop()
                const parentPath = item.path.split('/')
                if (parentPath.join('/') === pagePath.join('/')) {
                    isSameLink = true
                }
            }

           return (
                <button 
                    key={item.id} 
                    style={{
                        background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                        borderRadius:"1.625rem",
                        width: '60%',
                        height: '13.18rem',
                        marginRight: items?.length - 1 === index ? '' : '1px',
                        padding: '0.1875rem'
                    }}
                    className={`${
                        isSameLink
                        ? "bg-blue-r58baf7" 
                        : "bg-white"
                    } overflow-hidden flex items-end w-1/2`} 
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
                            width:"100%", 
                            borderRadius:"1.625rem",
                            paddingTop: '0.5rem'
                        }} 
                        className={`flex w-full justify-end h-full items-end bg-white ${
                            isSameLink
                            ? "bg-blue-r58baf7" 
                            : "bg-white"
                        }`}
                    >
                        <div 
                            style={{
                                background: isSameLink
                                ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                                : isHover === item.id 
                                ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                                : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                                borderRadius:"1.625rem",
                                borderTopLeftRadius:"1.625rem 1.3rem",
                                borderTopRightRadius: "1.625rem 1.3rem",
                                borderColor: isSameLink ? "#1a73ce" : "#d6dfe8",
                                boxShadow:'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset',
                            }}
                            className={`h-full w-full rounded-b-lg rounded-t-md flex flex-col items-center`}
                        >
                            <img style={{width: '6.9rem'}} className="mt-5 object-contain" src={item.icon} alt="" />
                            <span
                                className={`${
                                    isSameLink
                                    ? "text-white"
                                    : "text-gray-r616161" 
                                } text-4xl font-spoqaMedium tracking-tight mt-2`}
                            >{item.text}</span>
                        </div>
                    </div>
                </button>
            )
        });
    }

    return (
        <div id="container" className="w-full flex justify-start items-start">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu1
