import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import horizontalsScroll from '../../utils/horizontalsScroll';

const HorizontalSubMenu = ({
    itemsArray, 
    setSelectedTab,
    setSelectedSubTab = null,
    isSameWidth = false,
    withoutFirst = true
}) => {

    const history = useHistory();
    const pathname = window.location.pathname
    const [, setHover] = useState(null)

    useEffect(() => {
        if (withoutFirst) {
            horizontalsScroll(itemsArray, 't', 'scroll-wrapper12')
        }
    }, [itemsArray, withoutFirst])

    function TabsList({ items }) {
        return items.map((item, index) => (
            <>
                <button 
                    id={`t${index}`}
                    className={`${
                        pathname === item.path
                        ? "bg-blue-r0056a6" 
                        : "bg-white  border border-gray-b7b7b7"
                    } rounded-full min-w-fit`}
                    style={{
                        height: '6.375rem', 
                        // width: item.width, 
                        minWidth: item?.width ? item.width : 'fit-content' , 
                        fontSize: '2.8125rem', 
                        marginRight:'1.125rem', 
                        borderWidth: `${pathname !== item.path ? '0.1875rem' : ''}`
                    }} 
                    key={item.id} 

                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        setHover(null)
                        if (pathname !== item.path) {
                            horizontalsScroll(itemsArray, 't', 'scroll-wrapper12', index)
                            history.push(item.path)
                            setSelectedTab(item.id)
                            if (setSelectedSubTab !== null) {
                                setSelectedSubTab(0)
                            }
                        }
                    }}
                    onPointerOut={() => setHover(null)}
                    onPointerCancel={() => setHover(null)}
                    >
                        <div style={{margin: item?.width ? '0' : '0 2.6875rem'}} >
                            <div>
                                <span
                                    className={`${
                                        pathname === item.path
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
                ));
            }

    return (
        <div id="container" className="flex justify-start items-start">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalSubMenu
