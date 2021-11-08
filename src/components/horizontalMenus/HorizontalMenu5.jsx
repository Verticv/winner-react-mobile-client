import React from 'react'

const HorizontalMenu5 = ({
    itemsArray, 
    selectedTab = 0, 
    setSelectedTab
}) => {


    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                style={{
                    height:"41px",
                    backgroundColor: selectedTab === item.id
                    ? "#3771ad" 
                    : "#c7c7c7"
                }}
                className="overflow-hidden w-full rounded-lg flex border border-gray-dddddd rounded-lg pb-2px"
                onClick={() => setSelectedTab(item.id)}
            >
                <div 
                    style={{
                        height: "37px",
                        background: selectedTab === item.id 
                        ? "linear-gradient(to bottom, #3e9dfd, #1c7cde)" 
                        : "linear-gradient(to bottom, #f7f7f7, #e9e9e9)"
                    }}
                    className="w-full rounded-b-md rounded-b-lg flex items-center justify-center"
                >
                    <div className="flex items-center">
                        <div 
                            style={{color: selectedTab === item.id ? "#ffffff" : "#585858"}}
                            className="text-14px tracking-tight font-spoqaMedium flex h-14px items-center pt-3px"
                        >
                            {item.text}
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full h-47px space-x-3px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu5
