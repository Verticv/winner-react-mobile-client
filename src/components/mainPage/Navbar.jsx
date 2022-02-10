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
            <img style={{width:"5px"}} className="object-contain" src={isOpen ? ArrowUpWhite : ArrowDownWhite} alt="arrow" />
        ) : (
            <img style={{width:"5px"}} className="w-4 object-contain" src={isOpen ? ArrowUp : ArrowDown} alt="arrow" />
        )}
        </>
    )
    const CountryButton = (
        <div style={{height: '25px', width: '63px', padding: '2px'}} className="flex items-center bg-gradient-to-br from-blue-gradLight to-blue-gradDark rounded-full shadow-inner p-2 shadow-plain2 hover:opacity-75">
            <div style={{width: '21px', height: '21px', marginRight: '7px'}} className="rounded-full flex items-center justify-center">
                <img className="" src={country === "KR" ? Koreaflag : UKflag} alt="flag"></img>
            </div>
            <label style={{marginRight: '6px', fontSize: '10px', marginTop: '1px'}} className="font-spoqaBold text-white cursor-pointer">{country}</label>
            <DropdownArrow isWhite isOpen={isCountryOpen}/>
        </div>
    )

    return (
        <div className="w-full z-50 relative">
            <header style={{height: '42px', paddingLeft:"14px", paddingRight: "14px"}} className=" items-center justify-between h-32 shadow-plain bg-white flex flex-shrink-0">
                <div className="flex items-center flex-shrink-0">
                    <img style={{marginBottom: '0', height: "22px"}} className=" object-contain cursor-pointer" src={Logo} alt="logo" onClick={() => history.push('/')} />
                </div>
                
                <div className="flex items-center">
                    {/* BREAK */}
                    <DropDownControls buttonChild={CountryButton} isDropdownOpen={isCountryOpen} setDropdownOpen={setCountryOpen} >
                        <div style={{marginRight: "-90px",}}><CountryDropDown setCountry={setCountry} country={country} /></div>
                    </DropDownControls>
                </div>
            </header>
        </div>
    )
}

export default Navbar
