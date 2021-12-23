import React, { useState } from 'react'
import Koreaflag from '../../images/korea_flag.png'
import UKflag from '../../images/uk_flag.png'

const CountryDropDown = ({setCountry, country}) => {

    const [selectedTab, setSelectedTab] = useState(country === "KR" ? 0 : 1)
    const [hoveredTab, setHoveredTab] = useState(null)

    const countriesArray = [
        { icon: Koreaflag, text: "KR", id: 0 },
        { icon: UKflag, text: "EN", id: 1 },
    ];

    function CountriesList({ items }) {
        return items.map(item => (
            <button 
                style={{ height: '5rem'}}
                key={item.id} 
                className={`${
                    (selectedTab === item.id) 
                    ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2 mb-1" 
                    : (hoveredTab === item.id)
                    ? "bg-gray-f2f2f2"
                    : "bg-white"
                } flex w-full items-center p-1.5 rounded-full`} 
                onMouseOver={() => {setHoveredTab(item.id)}}
                onMouseLeave={() => setHoveredTab(null)}
                onClick={
                    () => {setSelectedTab(item.id)
                    setCountry(item.text)}
                }
            >
                <div className={`${(selectedTab === item.id) && "shadow-plain3"} h-14px w-16 bg-white rounded-full flex items-center justify-center flex-shrink-0`} >
                    <img src={item.icon} alt="flag"></img>
                </div>
                <div className="w-full flex justify-center mr-3">                
                    <label 
                    style={{fontSize: '2.5rem'}}
                    className={`${(selectedTab === item.id) ? "text-white" : "text-gray-subNavbar"} font-spoqaBold cursor-pointer`}>{item.text}</label>
                </div>
            </button>
        ));
    }
    // style={{width: '1.4375rem', height: '0.75rem'}}
    return (
        <div style={{width: '14.125rem', borderRadius: '2.3rem'}} className="p-1 relative flex flex-col items-center bg-white shadow-plain bg-white">
            <div style={{width: '4rem', height: '1.5rem', marginTop: '-1.5rem', marginLeft: '2rem'}} className="absolute top-0 -mt-2 w-4 overflow-hidden inline-block">
                <div style={{width: '2rem', height: '2rem'}} className="h-2 w-2 bg-white rotate-45 transform origin-bottom-left shadow"></div>
            </div>
            <CountriesList items={countriesArray} />
        </div>
    )
}

export default CountryDropDown
