import React, { useState } from 'react'
import { useHistory } from 'react-router';

const HorizontalMenu = ({
    itemsArray, 
    setSelectedTab,
    setSelectedSubTab = null
}) => {

    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                style={{
                    background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                    borderRadius:"10px",
                    width: '18.69rem',
                    height: '13.18rem',
                    marginRight: '0.1875rem'
                }}
                className={`${
                    pathname === item.path
                    ? "bg-blue-r58baf7" 
                    : "bg-white hover:bg-blue-d3f3fe"
                } overflow-hidden flex items-end p-px`} 
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
                        borderRadius:"9px",
                        paddingTop: '0.625rem'
                    }} 
                    className={`flex w-full justify-end h-full items-end bg-white ${
                        pathname === item.path
                        ? "bg-blue-r58baf7" 
                        : "bg-white hover:bg-blue-d3f3fe"
                    }`}
                >
                    <div 
                        style={{
                            background: pathname === item.path
                            ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                            : isHover === item.id 
                            ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                            : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                            borderBottomLeftRadius:"9px",
                            borderBottomRightRadius:"9px",
                            borderTopLeftRadius:"8px",
                            borderTopRightRadius: "8px",
                            borderColor: pathname === item.path ? "#1a73ce" : "#d6dfe8",
                            boxShadow:'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset',
                        }}
                        className={`mt-3px h-full w-full rounded-b-lg rounded-t-md flex flex-col items-center`}
                    >
                        <img style={{width: '6.8rem'}} className="mt-8px ml-2px object-contain" src={item.icon} alt="" />
                        <span
                            style={{marginTop: '0.625rem'}}
                            className={`${
                                pathname === item.path
                                ? "text-white"
                                : "text-gray-r616161" 
                            } text-4xl font-spoqaMedium tracking-tight -mt-4px`}
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

export default HorizontalMenu


// .전체 {
//     position: absolute;
//     left: 0px;
//     top: 0px;
//     width: 1242px;
//     height: 6383px;
//     z-index: 222;
//   }
//   .BG {
//     border-radius: 26px;
//     background-image: -moz-linear-gradient( 90deg, rgb(255,255,255) 0%, rgb(232,243,253) 76%, rgb(196,214,230) 100%);
//     background-image: -webkit-linear-gradient( 90deg, rgb(255,255,255) 0%, rgb(232,243,253) 76%, rgb(196,214,230) 100%);
//     background-image: -ms-linear-gradient( 90deg, rgb(255,255,255) 0%, rgb(232,243,253) 76%, rgb(196,214,230) 100%);
//     box-shadow: inset 0px 12px 6px 0px rgba(255, 255, 255, 0.004);
//     position: absolute;
//     left: 29px;
//     top: 381px;
//     width: 300px;
//     height: 212px;
//     z-index: 212;
//   }
  