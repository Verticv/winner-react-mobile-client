import React from 'react'
import { useHistory } from 'react-router';
import ClockIcon from '../../images/newImages/mypage/sports/clock-gray.png'
import ClockIconWhite from '../../images/newImages/mypage/sports/clock-white.png'

const HorizontalMenu3 = ({
    itemsArray, 
    selectedTab = "", 
    setSelectedTab,
    setSelectedTab1,
    setSelectedOption,
}) => {

    const history = useHistory();
    function TabsList({ items }) {
        return items.map((item, index) => (
            <button 
                key={item.id} 
                style={{
                    background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                    borderRadius:"1.625rem",
                    width: '18.25rem',
                    height: '13.18rem',
                    marginRight: `${items.length - 1 !== index ? '0.5625rem' : '' }`, 
                    padding: '0.1875rem'
                }}
                className={`${
                    selectedTab === item.path
                    ? "bg-blue-r58baf7" 
                    : "bg-white"
                } overflow-hidden rounded-lg flex items-end`} 
                onClick={() => {
                    setSelectedTab(item.path)
                    setSelectedTab1(0)
                    history.push(item.path)
                    setSelectedOption([
                        {
                            type: "",
                            name: "",
                            selection: "",
                            buttonType: "",
                            subtitle: null
                        }
                    ])
                }}
                // onMouseOver={() => setHover(item.path)}
                // onMouseLeave={() => setHover(null)}
            >
                <div 
                    style={{
                        width:"100%", 
                        borderRadius:"1.625rem",
                        paddingTop: '0.5rem'
                    }} 
                    className={`flex w-full justify-end h-full items-end bg-white ${
                        selectedTab === item.path 
                        ? "bg-blue-r58baf7" 
                        : "bg-white"
                    }`}
                >
                    <div 
                        style={{
                            background: selectedTab === item.path 
                            ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                            : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                            borderRadius:"1.625rem",
                            borderTopLeftRadius:"1.625rem 1.3rem",
                            borderTopRightRadius: "1.625rem 1.3rem",
                            borderColor: selectedTab === item.path ? "#1a73ce" : "#d6dfe8",
                            boxShadow:'rgb(0 0 0 / 30%) 7px 0px 2px -7px inset, rgb(0 0 0 / 30%) -7px 0px 2px -7px inset, rgb(0 0 0 / 30%) 0px -7px 2px -7px inset'
                        }}
                        className={`mt-3px h-full w-full rounded-b-lg rounded-t-md flex flex-col justify-center items-center`}
                    >
                        <div className={`flex items-center -ml-px`}>
                            <span 
                                style={{fontSize: '3.1875rem' ,color: item.textColor}} 
                                className={`
                                ${
                                    item.id === 0 
                                    ? "ml-4px"
                                    : item.id === 1 
                                    ? "ml-6px"
                                    : item.id === 2
                                    ? "ml-8px"
                                    : "ml-7px"
                                } text-20px tracking-tight font-spoqaBold text-white-border`}
                            >
                                {item.text}
                            </span>
                        </div>
                        
                        <div className="flex items-center">
                            <img style={{width: '3.1875rem', marginRight: '0.6875rem'}} className="object-contain" src={selectedTab === item.path ? ClockIconWhite : ClockIcon} alt="" />
                            <div 
                                style={{fontSize: '3.875rem', color: selectedTab === item.path ? "#ffffff" : "#748496"}}
                                className="tracking-tight font-swagger -mt-1 flex items-center"
                            >
                                {item.time}
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div style={{margin: '1.875rem 0'}} className="flex w-full">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu3
