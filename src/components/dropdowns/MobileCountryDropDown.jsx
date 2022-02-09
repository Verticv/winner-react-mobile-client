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
        return items.map((item, index) => (
            <div 
            key={item.id} 
            style={{height: '30px', width: '80px', padding: '3px', marginBottom: !index ? '0.25rem' : ''}}
            className={`${
                (selectedTab === item.id) 
                ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" 
                : (hoveredTab === item.id)
                ? "bg-gray-f2f2f2"
                : "bg-white"
            } flex items-center p-2 rounded-full`} 

            // className="flex items-center shadow-inner p-2"
            onMouseOver={() => {setHoveredTab(item.id)}}
            onMouseLeave={() => setHoveredTab(null)}
            onClick={
                () => {setSelectedTab(item.id)
                setCountry(item.text)}
            }
            >
                <div style={{width: '24px', height: '24px', marginRight: '9px'}} className="rounded-full flex items-center justify-center">
                    <img className="" src={item.text === "KR" ? Koreaflag : UKflag} alt="flag"></img>
                </div>
                <label  style={{marginRight: '1.4375rem', fontSize: '14px', marginTop: '0.125rem'}} className={`${(selectedTab === item.id) ? "text-white" : "text-gray-subNavbar"} font-spoqaBold cursor-pointer`}>{item.text}</label>            </div>
        ));
    }
    return (
        <div style={{borderRadius: '16px', width: "84px"}} className="p-1 relative flex flex-col items-center bg-white shadow-plain">
            <div style={{width: '20px', height: '10px', marginTop: '-10px', marginLeft: '10px'}} className="absolute top-0 overflow-hidden inline-block">
                <div style={{width: '20px', height: '10px'}} className="h-2 w-2 bg-white rotate-45 transform origin-bottom-left shadow"></div>
            </div>
            <CountriesList items={countriesArray} />
        </div>
    )
}

export default CountryDropDown
