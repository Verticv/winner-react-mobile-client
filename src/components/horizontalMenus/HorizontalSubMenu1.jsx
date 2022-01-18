import React, { useState } from 'react'
import { useHistory } from 'react-router';


const HorizontalSubMenu1 = ({
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
                ? "text-gray-r454545" 
                : "text-gray-b7b7b7"
            } rounded-full min-w-fit bg-white text-black flex items-center`}
            style={{height: '6.375rem', minWidth: 'fit-content' , fontSize: '2.625rem', marginRight: `${!index ? '0.9375rem' : '' }`}} 
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
                <div style={{margin: '0 3.39rem'}} >
                    <div>
                        <span
                            className={`${
                                pathname === item.path
                                ? "text-gray-r454545" 
                                : "text-gray-b7b7b7 hover:text-black"
                            } font-spoqa `}
                        >{item.text}</span>
                    </div>
                </div>
                {items.length - 1 !== index && (
                    <div style={{height: '2.0625rem', width: '0.1875rem', margin: '', marginTop: ''}} className='bg-gray-c5c5c5' />
                )}
            </button>
        ));
    }

    return (
        <div id="container" className="flex justify-start items-start">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalSubMenu1
