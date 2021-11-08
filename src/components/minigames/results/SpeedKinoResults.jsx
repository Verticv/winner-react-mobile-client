import HorizontalMenu5 from 'components/horizontalMenus/HorizontalMenu5'
import React, { useState } from 'react'

const SpeedKinoResults = ({array}) => {

    const [subTab, setSubTab] = useState(0)

    const SubTabArray = [
        {id: 0, text:"숫자합 홀짝"},
        {id: 1, text:"숫자합 마지막자리 언오버"}
    ]

    function Strip({items}) {
        return items.map(item => (
            <div 
                style={{
                    width:"61px",
                    backgroundColor: item.id % 2 === 0 ? "#f8f8f8" : "#f7f9fc",
                }}
                className="border-r border-gray-dddddd flex-shrink-0"
            >
                <div style={{borderColor:"#c5c5c5"}} className="flex items-center justify-center h-56px border-b">
                    <p 
                        className="text-14px tracking-tight font-spoqaMedium"
                        style={{color: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                    >
                        {subTab === 0 ? (
                            <>
                                {item.id % 2 === 0 ? "짝" : "홀"}
                            </>
                        ) : (
                            <>
                                {item.id % 2 === 0 ? "오버" : "언더"}
                            </>
                        )}
                    </p>
                </div>

                <div 
                    style={{height:"62px", backgroundColor: "#ffffff"}} 
                    className="flex items-center justify-center border-b border-gray-dddddd"
                >
                    {item.row1 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row1}
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#f7f9fc"}} 
                    className="flex items-center justify-center border-b border-gray-dddddd"
                >
                    {item.row2 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row2}
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#ffffff"}} 
                    className="flex items-center justify-center border-b border-gray-dddddd"
                >
                    {item.row3 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row3}
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#f7f9fc"}} 
                    className="flex items-center justify-center border-b border-gray-dddddd"
                >
                    {item.row4 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row4}
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#ffffff"}} 
                    className="flex items-center justify-center border-b border-gray-dddddd"
                >
                    {item.row5 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row5}
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#f7f9fc"}} 
                    className="flex items-center justify-center border-b border-gray-dddddd"
                >
                    {item.row6 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row6}
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#ffffff"}} 
                    className="flex items-center justify-center border-b border-gray-dddddd"
                >
                    {item.row7 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row7}
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#f7f9fc"}} 
                    className="flex items-center justify-center border-b border-gray-dddddd"
                >
                    {item.row8 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row8}
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#ffffff"}} 
                    className="flex items-center justify-center border-b border-gray-dddddd"
                >
                    {item.row9 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row9}
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#f7f9fc"}} 
                    className="flex items-center justify-center border-b border-gray-dddddd"
                >
                    {item.row10 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row10}
                        </div>
                    )}
                </div>
            </div>
        ))
    }

    return (
        <div style={{height: "737px"}} className="border border-gray-dddddd flex flex-col w-full">
            <div style={{height: "51px", backgroundColor: "#fdfdfd"}} className="border-b border-gray-dddddd p-4px">
                <HorizontalMenu5 selectedTab={subTab} setSelectedTab={setSubTab} itemsArray={SubTabArray} />
            </div>

            <div className="flex  overflow-x-scroll">
                <Strip items={array} />
            </div>
        </div>
    )
}

export default SpeedKinoResults
