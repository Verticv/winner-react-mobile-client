import React, { useState } from 'react'
import Logo from '../../images/logo.png'
import Koreaflag from '../../images/korea_flag.png'
import UKflag from '../../images/uk_flag.png'
import DropDownControls from '../dropdowns/DropDownControls'
import CountryDropDown from '../dropdowns/CountryDropDown'
import ArrowUp from '../../images/arrows/arrow_up.png'
import ArrowUpWhite from '../../images/arrows/arrow_up_white.png'
import ArrowDown from '../../images/arrows/arrow_down.png'
import ArrowDownWhite from '../../images/arrows/arrow_down_white.png'
import { useHistory } from 'react-router-dom'

const Navbar = ({ isAuthenticated, setAuth }) => {

    const history = useHistory();

    const [country, setCountry] = useState("KR")
    const [isCountryOpen, setCountryOpen] = useState()

    const DropdownArrow = ({isOpen, isWhite}) => (
        <>
        {isWhite ? (
            <img className="-mr-4px w-2.5 object-contain" src={isOpen ? ArrowUpWhite : ArrowDownWhite} alt="arrow" />
        ) : (
            <img className="w-2.5 object-contain" src={isOpen ? ArrowUp : ArrowDown} alt="arrow" />
        )}
        </>
    )

    const CountryButton = (
        <div className="flex items-center w-28 h-10 bg-gradient-to-br from-blue-gradLight to-blue-gradDark rounded-full shadow-inner p-2px shadow-plain2 hover:opacity-75">
            <div className="mr-3.5 h-22px w-8 bg-white rounded-full flex items-center justify-center">
                <img className="" src={country === "KR" ? Koreaflag : UKflag} alt="flag"></img>
            </div>
            <label className="mr-8px font-spoqaBold text-white cursor-pointer pt-px text-xl">{country}</label>
            <DropdownArrow isWhite isOpen={isCountryOpen}/>
        </div>
    )

    return (
        <div className="w-full z-50">
            <header className="relative flex items-center justify-between h-16 px-4 shadow-plain bg-white flex flex-shrink-0">
                <div className="flex items-center flex-shrink-0">
                    <img className=" object-contain w-40 mb-2 mr-10px cursor-pointer pt-5px" src={Logo} alt="logo" onClick={() => history.push('/')} />
                </div>
                
                <div className="flex space-x-20px items-center flex-shrink-0">
                    {/* BREAK */}
                    <DropDownControls dropDownClasses="w-28 sssssssssssss" buttonChild={CountryButton} onClick={() => setCountryOpen(!isCountryOpen)} onClose={() => setCountryOpen(false)}>
                        <div className="mt-10"><CountryDropDown setCountry={setCountry} country={country} /></div>
                    </DropDownControls>
                </div>
            </header>
        </div>
    )
}

export default Navbar
