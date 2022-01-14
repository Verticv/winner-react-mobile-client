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
            style={{height: '5.25rem', width: '13.625rem', paddingBottom: '0.375rem', paddingTop: '0.4375rem', marginBottom: !index ? '0.25rem' : ''}}
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
                <div style={{width: '4.375rem', height: '4.375rem', marginRight: '1.4375rem'}} className="rounded-full flex items-center justify-center">
                    <img className="" src={item.text === "KR" ? Koreaflag : UKflag} alt="flag"></img>
                </div>
                <label  style={{marginRight: '1.4375rem', fontSize: '2.5rem', marginTop: '0.125rem'}} className={`${(selectedTab === item.id) ? "text-white" : "text-gray-subNavbar"} font-spoqaBold cursor-pointer`}>{item.text}</label>            </div>
        ));
    }
    return (
        <div style={{width: '14rem', borderRadius: '2.8rem'}} className="p-1 relative flex flex-col items-center bg-white shadow-plain bg-white">
            <div style={{width: '4rem', height: '1.5rem', marginTop: '-1.5rem', marginLeft: '1.3125rem'}} className="absolute top-0 -mt-2 w-4 overflow-hidden inline-block">
                <div style={{width: '2rem', height: '2rem'}} className="h-2 w-2 bg-white rotate-45 transform origin-bottom-left shadow"></div>
            </div>
            <CountriesList items={countriesArray} />
        </div>
    )
}

export default CountryDropDown
