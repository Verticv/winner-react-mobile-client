import React from 'react'
import { useHistory } from 'react-router';

const HorizontalMenu1 = ({
    itemsArray, 
    setSelectedTab,
    setSelectedSubTab = null,
    withSmallMarginTop = false
}) => {

    const history = useHistory();
    let pathname = window.location.pathname
   

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

            if (window.location.pathname.includes('/cscenter/all/policy/')  && item.path.includes('/cscenter/all/policy/')) {
                isSameLink = true
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
                        padding: '1px'
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
                                : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                                borderRadius:"1.625rem",
                                borderTopLeftRadius:"1.625rem 1.3rem",
                                borderTopRightRadius: "1.625rem 1.3rem",
                                borderColor: isSameLink ? "#1a73ce" : "#d6dfe8",
                                boxShadow:'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset',
                            }}
                            className={`h-full w-full rounded-b-lg rounded-t-md flex flex-col items-center`}
                        >
                            <img style={{width: '6.9rem', marginLeft: '0.5625rem'}} className="mt-5 object-contain" src={item.icon} alt="" />
                            <span
                                style={{marginTop: withSmallMarginTop ? '0.25rem' : ''}}
                                className={`${
                                    isSameLink
                                    ? "text-white"
                                    : "text-gray-r616161" 
                                } text-4xl font-spoqaMedium tracking-tight`}
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
