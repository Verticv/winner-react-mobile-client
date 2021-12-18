import React, { useState } from 'react'
import { useHistory } from 'react-router';


const HorizontalSubMenu = ({
    itemsArray, 
    setSelectedTab,
    setSelectedSubTab = null
}) => {

    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    console.log(`isHover`, isHover)

    function TabsList({ items }) {
        return items.map((item, index) => (
            <button 
            className={`${
                pathname === item.path
                ? "bg-blue-r0056a6" 
                : "bg-white hover:bg-blue-d3f3fe border border-gray-rb7b7b7"
            } rounded-full min-w-fit`}
            style={{height: '6.375rem', minWidth: 'fit-content' , fontSize: '2.8125rem', marginRight: `${!index ? '0.9375rem' : '' }`, borderWidth: `${pathname !== item.path ? '0.1875rem' : ''}`}} 
            key={item.id} 
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
                <div style={{margin: '0 2.6875rem'}} >
                    <div>
                        <span
                            className={`${
                                pathname === item.path
                                ? "text-white" 
                                : "text-gray-r7b7b7b"
                            }`}
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

export default HorizontalSubMenu
