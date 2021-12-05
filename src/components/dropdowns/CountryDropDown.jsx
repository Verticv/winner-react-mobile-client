import React, { useState } from 'react'
import Koreaflag from '../../images/korea_flag.png'
import UKflag from '../../images/uk_flag.png'

const CountryDropDown = ({setCountry, country, isProfilePage}) => {

    const [selectedTab, setSelectedTab] = useState(country === "KR" ? 0 : 1)
    const [hoveredTab, setHoveredTab] = useState(null)

    const countriesArray = [
        { icon: Koreaflag, text: "KR", id: 0 },
        { icon: UKflag, text: "EN", id: 1 },
    ];

    function CountriesList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${
                    (selectedTab === item.id) 
                    ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" 
                    : (hoveredTab === item.id)
                    ? "bg-gray-f2f2f2"
                    : "bg-white"
                } flex w-full items-center p-4px h-20 rounded-full`} 
                onMouseOver={() => {setHoveredTab(item.id)}}
                onMouseLeave={() => setHoveredTab(null)}
                onClick={
                    () => {setSelectedTab(item.id)
                    setCountry(item.text)}
                }
            >
                <div className={`${(selectedTab === item.id) && "shadow-plain3"} w-16 bg-white rounded-full flex items-center justify-center flex-shrink-0`} >
                    <img src={item.icon} alt="flag"></img>
                </div>
                <div className="w-full flex justify-center mr-3">                
                    <label 
                    className={`${(selectedTab === item.id) ? "text-white" : "text-gray-subNavbar"} font-spoqaBold text-3xl cursor-pointer`}>{item.text}</label>
                </div>
            </button>
        ));
    }

    console.log('isProfilePage', isProfilePage)

    return (
        <div style={{borderRadius:"16px"}} className={`relative flex flex-col items-center bg-white shadow-plain rounded-16px bg-white p-2px -mr-3px -mt-26px ${isProfilePage ? "w-96" : "w-56"}`}>
            <div className="absolute top-0 -mt-2 ml-2 w-4 overflow-hidden inline-block">
                <div className="h-2 w-2 bg-white rotate-45 transform origin-bottom-left shadow"></div>
            </div>
            <CountriesList items={countriesArray} />
        </div>
    )
}

export default CountryDropDown
