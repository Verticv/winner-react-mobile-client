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
            style={{height: '9.375rem', width: '23.75rem', paddingBottom: '0.6875rem', paddingLeft: '0.9rem', paddingTop: '0.875rem', marginBottom: !index ? '0.625rem' : ''}}
            className={`${
                (selectedTab === item.id) 
                ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" 
                : (hoveredTab === item.id)
                ? "bg-gray-f2f2f2"
                : "bg-white"
            } flex items-center p-4 rounded-full`} 

            // className="flex items-center shadow-inner p-2"
            onMouseOver={() => {setHoveredTab(item.id)}}
            onMouseLeave={() => setHoveredTab(null)}
            onClick={
                () => {setSelectedTab(item.id)
                setCountry(item.text)}
            }
            >
                <div style={{marginRight: '3.1875rem', marginTop: '0.1rem'}} className="rounded-full flex items-center justify-center">
                    <img  style={{width: '7.6rem', height: '7.6rem'}} className="" src={item.text === "KR" ? Koreaflag : UKflag} alt="flag"></img>
                </div>
                <label style={{marginRight: '3.25rem', fontSize: '3rem', marginTop: '0.225rem'}} className={`${(selectedTab === item.id) ? "text-white" : "text-gray-subNavbar"} font-spoqaBold cursor-pointer`}>{item.text}</label>
            </div>
        ));
    }
    return (
        <div style={{width: '24.75rem', borderRadius: '4.8rem', padding: '0.6rem'}} className="relative flex flex-col items-center bg-white shadow-plain bg-white">
            <div style={{width: '8rem', height: '3rem', marginTop: '-3rem', marginLeft: '2.625rem'}} className="absolute top-0 -mt-2 w-4 overflow-hidden inline-block">
                <div style={{width: '4rem', height: '4rem'}} className="bg-white rotate-45 transform origin-bottom-left shadow"></div>
            </div>
            <CountriesList items={countriesArray} />
        </div>
    )
}

export default CountryDropDown

