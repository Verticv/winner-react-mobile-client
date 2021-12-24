import React, { useState } from 'react'
import Logo from '../../images/logo.png'
import Koreaflag from '../../images/korea_flag.png'
import UKflag from '../../images/uk_flag.png'
import DropDownControls from '../dropdowns/CountriesDropDownControls'
import CountryDropDown from '../dropdowns/MobileCountryDropDown'
import ArrowUp from '../../images/arrows/arrow_up.png'
import ArrowUpWhite from '../../images/arrows/arrow_up_white.png'
import ArrowDown from '../../images/arrows/arrow_down.png'
import ArrowDownWhite from '../../images/arrows/arrow_down_white.png'
import { useHistory } from 'react-router-dom'

const Navbar = () => {

    const history = useHistory();

    const [country, setCountry] = useState("KR")
    const [isCountryOpen, setCountryOpen] = useState()

    const DropdownArrow = ({isOpen, isWhite}) => (
        <>
        {isWhite ? (
            <img className="-mr-8px w-4 object-contain" src={isOpen ? ArrowUpWhite : ArrowDownWhite} alt="arrow" />
        ) : (
            <img className="w-4 object-contain" src={isOpen ? ArrowUp : ArrowDown} alt="arrow" />
        )}
        </>
    )

    const CountryButton = (
        <div style={{height: '5.25rem'}} className="flex items-center w-56 bg-gradient-to-br from-blue-gradLight to-blue-gradDark rounded-full shadow-inner p-2 shadow-plain2 hover:opacity-75">
            <div className="mr-7 h-14px w-16 rounded-full flex items-center justify-center">
                <img className="" src={country === "KR" ? Koreaflag : UKflag} alt="flag"></img>
            </div>
            <label style={{marginRight: '1.4375rem'}} className="font-spoqaBold text-white cursor-pointer pt-px text-4xl">{country}</label>
            <DropdownArrow isWhite isOpen={isCountryOpen}/>
        </div>
    )

    return (
        <div className="w-full z-50">
            <header style={{height: '9rem'}} className="relative flex items-center justify-between h-32 px-8 shadow-plain bg-white flex flex-shrink-0">
                <div className="flex items-center flex-shrink-0">
                    <img className=" object-contain w-80 mb-4 cursor-pointer" src={Logo} alt="logo" onClick={() => history.push('/')} />
                </div>
                
                <div className="flex space-x-20px items-center flex-shrink-0">
                    {/* BREAK */}
                    <DropDownControls buttonChild={CountryButton} onClick={() => setCountryOpen(!isCountryOpen)} onClose={() => setCountryOpen(false)}>
                        <div className=""><CountryDropDown setCountry={setCountry} country={country} /></div>
                    </DropDownControls>
                </div>
            </header>
        </div>
    )
}

export default Navbar
