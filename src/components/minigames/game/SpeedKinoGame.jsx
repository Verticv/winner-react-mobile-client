import React, { useState } from 'react'
import BlueButton from '../../../images/minigames/blue_sq.png'
import RedButton from '../../../images/minigames/red_sq.png'
import BlueSMButton from '../../../images/minigames/blue_sm.png'
import RedSMButton from '../../../images/minigames/red_sm.png'
import BlueButtonPressed from '../../../images/minigames/blue_sq_pressed.png'
import RedButtonPressed from '../../../images/minigames/red_sq_pressed.png'
import RedSMButtonPressed from '../../../images/minigames/red_pressed.png'
import BlueSMButtonPressed from '../../../images/minigames/blue_pressed.png'

const SpeedKinoGame = ({setSelectedOption}) => {

    const [state, setstate] = useState("")

    const PanelTitle = ({title}) => (
        <div className="w-full h-30px flex items-center pl-3px space-x-5px">
            <div
                style={{background: "linear-gradient(to bottom, #2087f0, #1873cf"}}
                className="h-17px w-5px rounded-3px"
            />
            <p style={{color:"#5b5b5b"}} className="font-spoqaMedium text-14px tracking-tight pt-2px">{title}</p>
        </div>
    )

    const BetOptions = ({
        width = 413, 
        height = 168,
        gradient1 = "#ffece3",
        gradient2 = "#ffbda6",
        titleBg = "#ea8668",
        titleNumber = 1,
        subText = "홀짝",
        subText2 = null,
    }) => (
        <div
            style={{
                width: width + "px", 
                height: height+ "px",
                background: "linear-gradient(to bottom, #b8d5e6, #b7c7d4)",
                borderRadius:"6px"
            }}
            className={`flex justify-center items-center flex-shrink-0`} 
        >
            <div
                style={{
                    width: width - 2 + "px", 
                    height: height - 2 + "px",
                    backgroundColor: "#fdfdf8",
                    borderRadius:"5px"
                }}
                className={`flex items-center`} 
            >
                <div 
                    style={{
                        background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,
                        borderRadius: "5px"
                    }}
                    className="w-full h-full rounded-b flex items-start justify-start border-t border-white"
                >

                    <div className="w-42px h-full flex flex-col  flex-shrink-0">
                        <div 
                            style={{height:"38px", backgroundColor: titleBg}} 
                            className="flex-shrink-0 shadow-plain2 w-40px rounded-md border border-white ml-px flex flex-col items-center justify-center text-12px tracking-tight text-white -space-y-4px"
                        >
                            <p className="font-spoqaMedium">{titleNumber}</p>
                            <p className="font-spoqa">게임</p>
                        </div>

                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <div className="text-12px tracking-tight text-gray-r585858 font-spoqaMedium h-12px flex items-center">{subText}</div>
                            {subText2 !== null && (
                                <div className="text-12px tracking-tight text-gray-r585858 font-spoqaMedium h-12px flex items-center mt-2px">{subText2}</div>
                            )}
                        </div>
                    </div>

                    <div style={{height:"162px", width:"2px"}} className="flex flex-shrink-0 pt-3px">
                        <div style={{backgroundColor:"#cf9494"}} className="h-full w-px"></div>
                        <div style={{backgroundColor:"#ffffff"}} className="h-full w-px"></div>
                    </div>

                    {titleNumber === 1 || titleNumber === 2 ? (
                        <div className="flex justify-center w-full h-full items-start">
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setstate(`${titleNumber}-1`)
                                        if (titleNumber === 1) {
                                            setSelectedOption([{type:"스피드키노", name:"홀짝", selection: "홀", buttonType: "blue_sq"}])
                                        } else {
                                            setSelectedOption([{type:"스피드키노", name:"언더/오버", selection: "언더", buttonType: "blue_sq"}])
                                        }
                                    }} 
                                    style={{width:"121px", height:"127px", marginTop:"14px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img className={`absolute object-none ${state === `${titleNumber}-1` && "mb-3px"}`} src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                    <p 
                                        style={{textShadow: "2px 2px 2px #00000050", fontSize: "48px"}} 
                                        className="z-20 font-swagger text-white"
                                    >
                                        {titleNumber === 1 ? "홀" :"언더"}
                                    </p>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858 mt-4px h-12px flex items-center">1.95</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setstate(`${titleNumber}-2`)
                                        if (titleNumber === 1) {
                                            setSelectedOption([{type:"스피드키노", name:"홀짝", selection: "짝", buttonType: "red_sq"}])
                                        } else {
                                            setSelectedOption([{type:"스피드키노", name:"언더/오버", selection: "오버", buttonType: "red_sq"}])
                                        }
                                    }} 
                                    style={{width:"121px", height:"127px", marginTop: "14px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img className={`absolute object-none ${state === `${titleNumber}-2` && "mb-3px"}`} src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                    <p 
                                        style={{textShadow: "2px 2px 2px #00000050", fontSize: "48px"}} 
                                        className="z-20 font-swagger text-white text-20px"
                                    >
                                        {titleNumber === 1 ? "짝" : "오버"}
                                    </p>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858 mt-4px h-12px flex items-center">1.95</p>
                            </div>
                        </div>
                    ) : titleNumber === 3 ? (
                        <div className="flex flex-col items-center w-full h-full">
                            <div className="flex space-x-18px pt-7px"> 
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setstate(`${titleNumber}-1`)
                                            setSelectedOption([{type:"스피드키노", name:"홀짝/언오버", selection: "홀언더", buttonType: "blue"}])
                                        }} 
                                        style={{width:"68px", height:"59px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img className="absolute object-none" src={state === `${titleNumber}-1` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">홀언더</p>
                                    </div>
                                    <div className="text-12px font-robotoRegular tracking-tight text-gray-r585858 h-12px flex items-center">3.75</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setstate(`${titleNumber}-2`)
                                            setSelectedOption([{type:"스피드키노", name:"홀짝/언오버", selection: "홀오버", buttonType: "blue"}])
                                        }} 
                                        style={{width:"68px", height:"59px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img className="absolute object-none" src={state === `${titleNumber}-2` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">홀오버</p>
                                    </div>
                                    <div className="text-12px font-robotoRegular tracking-tight text-gray-r585858 h-12px flex items-center">3.75</div>
                                </div>
                            </div>
                            <div className="flex space-x-18px mt-10px"> 
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setstate(`${titleNumber}-3`)
                                            setSelectedOption([{type:"스피드키노", name:"홀짝/언오버", selection: "짝언더", buttonType: "red"}])
                                        }} 
                                        style={{width:"68px", height:"59px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img className="absolute object-none" src={state === `${titleNumber}-3` ? RedSMButtonPressed : RedSMButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">짝언더</p>
                                    </div>
                                    <div className="text-12px font-robotoRegular tracking-tight text-gray-r585858 h-12px flex items-center">3.75</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setstate(`${titleNumber}-4`)
                                            setSelectedOption([{type:"스피드키노", name:"홀짝/언오버", selection: "짝오버", buttonType: "red"}])
                                        }} 
                                        style={{width:"68px", height:"59px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img className="absolute object-none" src={state === `${titleNumber}-4` ? RedSMButtonPressed : RedSMButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">짝오버</p>
                                    </div>
                                    <div className="text-12px font-robotoRegular tracking-tight text-gray-r585858 h-12px flex items-center">3.75</div>
                                </div>
                            </div>
                        </div>
                    ) : <></> }
                    
                </div>
            </div>
        </div>
    )

    return (
        <div 
            style={{height: "205px"}}
            className="flex w-full"
        >
            <div className="w-full flex flex-col px-6px pb-7px">
                <PanelTitle title="스피드키노" />
                <div className="flex space-x-2px">
                    <BetOptions width={414} titleNumber={1} subText="홀짝" />
                    <BetOptions titleNumber={2} subText="언더" subText2="오버"/>
                    <BetOptions titleNumber={3} subText="홀짝" subText2="언오버" />
                </div>
            </div>
        </div>
    )
}

export default SpeedKinoGame
