import React, { useState } from 'react'
import BlueButton from '../../../images/minigames/blue_sq.png'
import RedButton from '../../../images/minigames/red_sq.png'
import BlueSMButton from '../../../images/minigames/blue.png'
import RedSMButton from '../../../images/minigames/red.png'
import BlueButtonPressed from '../../../images/minigames/blue_sq_pressed.png'
import RedButtonPressed from '../../../images/minigames/red_sq_pressed.png'
import RedSMButtonPressed from '../../../images/minigames/red_pressed.png'
import BlueSMButtonPressed from '../../../images/minigames/blue_pressed.png'

const SpeedKinoGame = ({setSelectedOption}) => {

    const [state, setState] = useState("")

    const PanelTitle = ({title, titleNumber, subText, subText2, titleBg, isTopBorder = false, missingBorder}) => (
        <div style={{
            height: '5.8125rem', 
            borderTopColor: '#b8d5e6',
            borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #cf9494` : '',
            borderTop: `0.1875rem solid #cf9494`,
            borderBottom: `0.1875rem solid #cf9494`,
            borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #cf9494` : '',
            }} className={`flex flex-shrink-0 items-center justify-center w-full pb-px`}>
            <div 
                style={{height:"4.3rem",width: '8.4375rem', borderWidth: '0.1875rem' , backgroundColor: titleBg, fontSize: '2.25rem'}} 
                className="flex-shrink-0 shadow-plain2 border rounded-2xl border-white flex flex-col items-center justify-center tracking-tight text-white"
            >
                <p style={{marginTop: '0.4rem'}} className="font-spoqaMedium">{titleNumber}{title}</p>
            </div>

            <div style={{fontSize: '2.625rem', marginLeft: '0.75rem'}} className="h-full flex flex-col items-center justify-center pb-1">
                <div className="tracking-tight text-gray-r585858 font-spoqaMedium flex items-center mt-2">{subText} {subText2 ? `/${subText2}` : ''} </div>
            </div>
        </div>
    )
    
    
    const SingleCard = ({
        width = 24.625, 
        height = 23.375,
        extraLeftPadding = 0,
        extraRightPadding = 0,
        gradient1 = "#ffece3",
        gradient2 = "#ffbda6",
        titleBg = "#ea8668",
        titleNumber = 1,
        title = '게임',
        subText = "홀짝",
        subText2 = null,
        dividerColor = "#c7b9a6",
        button1Text = "홀",
        button2Text = "짝",
        missingBorder = "left"
    }) => (
        <div
            style={{
                width: width + "rem", 
                height: height+ "rem",
                // background: "#cf9494",
                marginBottom: '0.2rem',
                // padding: '1px'
            }}
            className={`flex justify-center items-center flex-shrink-0`} 
        >
            <div
                style={{
                    width: width - 0.1875 + "rem", 
                    height: height - 0.1875 + "rem",
                    backgroundColor: "#fdfdf8",
                }}
                className={`flex items-center`} 
            >
                <div 
                    style={{
                        background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,
                    }}
                    className="w-full h-full flex flex-wrap items-start justify-start"
                >
                    <PanelTitle title={title} titleNumber={titleNumber} subText={subText} subText2={subText2} titleBg={titleBg} missingBorder={missingBorder} />

                    <div style={{
                        height: '17.375rem', 
                        borderTopWidth: '0.1875rem',
                        borderTopColor: 'white', 
                        padding: '0 3.875rem', 
                        paddingLeft: `${extraLeftPadding + 3.875}rem`, 
                        paddingRight: `${extraRightPadding + 3.875}rem`,
                        borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #cf9494` : '',
                        // borderTop: `0.1875rem solid #cf9494`,
                        borderBottom: `0.1875rem solid #cf9494`,
                        borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #cf9494` : '',
                        }} className="flex justify-center w-full items-center">
                        <div style={{marginRight: '1.375rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-1`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                    } else {
                                        setSelectedOption([{type:"일반볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                    }
                                }} 
                                // style={{paddingTop: "3px"}} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                <img style={{width: '10.2rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">{button1Text}</p>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">1.95</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-2`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                    } else {
                                        setSelectedOption([{type:"일반볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                    }
                                }} 
                                // style={{paddingTop: "3px"}} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                
                                <img style={{width: '10.2rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white absolute">{button2Text}</p>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">1.95</p>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    )

    const ThreeCard = ({
        width = 77.825, 
        height = 23.375,
        extraLeftPadding = 0,
        extraRightPadding = 0,
        gradient1 = "#ffece3",
        gradient2 = "#ffbda6",
        titleBg = "#ea8668",
        titleNumber = 1,
        title = '게임',
        subText = "홀짝",
        subText2 = null,
        dividerColor = "#c7b9a6",
        missingBorder = "left"
    }) => (
        <div
            style={{
                width: width + "rem", 
                height: height+ "rem",
                // background: "#cf9494",
                marginBottom: '0.2rem',
                padding: '1px'
            }}
            className={`flex justify-center items-center flex-shrink-0`} 
        >
            <div
                style={{
                    width: width - 0.1875 + "rem", 
                    height: height - 0.1875 + "rem",
                    backgroundColor: "#fdfdf8",
                }}
                className={`flex items-center border-b border-red-cf9494`} 
            >
                <div 
                    style={{
                        background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,
                    }}
                    className="w-full h-full flex flex-wrap items-start justify-start"
                >
                    <PanelTitle isTopBorder title={title} titleNumber={titleNumber} subText={subText} subText2={subText2} titleBg={titleBg} />

                    <div style={{
                        height: '17.375rem', 
                        borderTopWidth: '0.1875rem', 
                        borderTopColor: 'white', 
                        padding: '0 3.875rem', 
                        paddingLeft: `${extraLeftPadding + 3.875}rem`, 
                        paddingRight: `${extraRightPadding + 3.875}rem`,
                        borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #cf9494` : '',
                        // borderTop: `0.1875rem solid #cf9494`,
                        borderBottom: `0.1875rem solid #cf9494`,
                        borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #cf9494` : '',
                        }} className="flex justify-center w-full items-center space-x-18">
                        <div style={{marginRight: '1.875rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-1`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                    } else {
                                        setSelectedOption([{type:"일반볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                    }
                                }} 
                                // style={{paddingTop: "3px"}} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">홀언더</p>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.75</p>
                            </div>
                        </div>

                        <div style={{marginRight: '1.875rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-2`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                    } else {
                                        setSelectedOption([{type:"일반볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                    }
                                }} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                
                                <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white absolute">홀오버</p>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.75</p>
                            </div>
                        </div>

                        <div style={{marginRight: '1.875rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-3`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                    } else {
                                        setSelectedOption([{type:"일반볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                    }
                                }} 
                                // style={{paddingTop: "3px"}} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-3` ? RedSMButtonPressed : RedSMButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">짝언더</p>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.75</p>
                            </div>
                        </div>

                        <div style={{marginRight: '1.875rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-4`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                    } else {
                                        setSelectedOption([{type:"일반볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                    }
                                }} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                
                                <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-4` ? RedSMButtonPressed : RedSMButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white absolute">짝오버</p>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.75</p>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    )

    return (
        <div 
            style={{width:"1260px"}}
            className="flex flex-wrap w-full"
        >
            <div className="w-full flex flex-col">
                <div className="flex flex-col">
                    <div className="flex">
                        <div style={{marginRight: '0.35rem'}} className="flex">
                            <SingleCard button1Text='홀' button2Text='짝' width={39} height={23.375} titleNumber={1} title = '게임' subText = "홀짝" />
                        </div>
                        <div>
                            <SingleCard button1Text='언더' button2Text='오버' width={39} height={23.375} titleNumber={2} title = '게임' subText = "언더/오버" missingBorder='right' />
                        </div>
                    </div>
                </div>
                <div>
                    <ThreeCard titleNumber={3} title = '게임' subText = "홀짝/언오버" missingBorder='both' />
                </div>
            </div>
        </div>
    )
}

export default SpeedKinoGame
