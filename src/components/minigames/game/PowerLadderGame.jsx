import React, { useState } from 'react'
import BlueButton from '../../../images/minigames/blue_sq.png'
import RedButton from '../../../images/minigames/red_sq.png'
import BlueSMButton from '../../../images/minigames/blue.png'
import RedSMButton from '../../../images/minigames/red.png'
import BlueButtonPressed from '../../../images/minigames/blue_sq_pressed.png'
import RedButtonPressed from '../../../images/minigames/red_sq_pressed.png'
import RedSMButtonPressed from '../../../images/minigames/red_pressed.png'
import BlueSMButtonPressed from '../../../images/minigames/blue_pressed.png'

const PowerLadderGame = ({setSelectedOption}) => {

    const [state, setState] = useState("")

    const PanelTitle = ({title, titleNumber, subText, subText2, titleBg, isTopBorder = false, missingBorder}) => (
        <div style={{
            height: '5.8125rem', 
            borderTopColor: '#b8d5e6',
            borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
            borderTop: `0.1875rem solid #abc7db`,
            borderBottom: `0.1875rem solid #abc7db`,
            borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
        }} className={`flex flex-shrink-0 items-center justify-center w-full pb-px`}>
            <div 
                style={{height:"4.3rem",width: '8.4375rem', borderWidth: '0.1875rem' , backgroundColor: titleBg, fontSize: '2.25rem'}} 
                className="flex-shrink-0 shadow-plain2 border rounded-2xl border-white flex flex-col items-center justify-center tracking-tight text-white"
            >
                <p style={{marginTop: '0.4rem'}} className="font-spoqaMedium pb-px">{titleNumber}{title}</p>
            </div>

            <div style={{fontSize: '2.625rem', marginLeft: '0.75rem'}} className="h-full flex flex-col items-center justify-center pb-1">
                <div className="tracking-tight text-gray-r585858 font-spoqaMedium flex items-center mt-3">{subText} {subText2 ? `/${subText2}` : ''} </div>
            </div>
        </div>
    )

    const SingleCard = ({
        width = 28.625, 
        height = 23.375,
        extraLeftPadding = 0,
        extraRightPadding = 0,
        gradient1 = "#e8f9ff",
        gradient2 = "#bcdbf6",
        titleBg = "#578fb7",
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
                // width: width + "rem", 
                height: height+ "rem",
                // background: "linear-gradient(to bottom, #b8d5e6, #b7c7d4)",
                marginBottom: '0.2rem',
                // padding: '1px'
            }}
            className={`flex justify-center items-center flex-shrink-0 w-full`} 
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
                        borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
                        borderTop: `0.1875rem solid #abc7db`,
                        borderBottom: `0.1875rem solid #abc7db`,
                        borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
                        borderTopColor: 'white', 
                        padding: '0 3.875rem', 
                        paddingLeft: `${extraLeftPadding + 3.875}rem`,
                        paddingRight: `${extraRightPadding + 3.875}rem`
                        }} className="flex justify-center w-full items-center">
                        <div style={{marginRight: '1.375rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-1`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워사다리", name:"홀짝", selection:"홀", buttonType:"blue_sq"}])
                                    } else if (titleNumber === 2) {
                                        setSelectedOption([{type:"파워사다리", name:"출발점", selection:"좌", buttonType:"blue_sq"}])
                                    } else {
                                        setSelectedOption([{type:"파워사다리", name:"줄갯수", selection:"3줄", buttonType:"blue_sq"}])
                                    }
                                }} 
                                // style={{paddingTop: "3px"}} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                <img style={{width:'10.2rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem'}} className="z-20 font-swagger text-white  absolute">{button1Text}</p>
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
                                        setSelectedOption([{type:"파워사다리", name:"홀짝", selection:"짝", buttonType:"red_sq"}])
                                    } else if (titleNumber === 2) {
                                        setSelectedOption([{type:"파워사다리", name:"출발점", selection:"우", buttonType:"red_sq"}])
                                    } else {
                                        setSelectedOption([{type:"파워사다리", name:"줄갯수", selection:"4줄", buttonType:"red_sq"}])
                                    }
                                }} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                
                                <img style={{width: '10.2rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem'}} className="z-20 font-swagger text-white absolute">{button2Text}</p>
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
        gradient1 = "#e8f9ff",
        gradient2 = "#bcdbf6",
        titleBg = "#578fb7",
        titleNumber = 1,
        title = '게임',
        subText = "홀짝",
        subText2 = null,
        dividerColor = "#c7b9a6",
        missingBorder="left"
    }) => (
        <div
            style={{
                width: width + "rem", 
                height: height+ "rem",
                // background: "linear-gradient(to bottom, #b8d5e6, #b7c7d4)",
                marginBottom: '0.2rem',
            }}
            className={`flex justify-center items-center flex-shrink-0`} 
        >
            <div
                style={{
                    // width: width - 0.1875 + "rem", 
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
                    <PanelTitle isTopBorder title={title} titleNumber={titleNumber} subText={subText} subText2={subText2} titleBg={titleBg} missingBorder={missingBorder} />

                    <div style={{
                        height: '17.375rem', 
                        borderTopWidth: '0.1875rem',
                        borderTopColor: 'white', 
                        padding: '0 3.875rem', 
                        paddingLeft: `${extraLeftPadding + 3.875}rem`, 
                        paddingRight: `${extraRightPadding + 3.875}rem`,
                        borderRight: (missingBorder !== "both" && missingBorder === "left") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
                        borderBottom: `0.1875rem solid #abc7db`,
                        borderLeft: (missingBorder !== "both" && missingBorder === "right") || missingBorder === 'none' ? `0.1875rem solid #abc7db` : '',
                         }} className="flex justify-center w-full items-center space-x-20 ">
                        <div style={{marginRight: '1.875rem'}} className="flex flex-col items-center ml-5">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-1`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워사다리", name:"좌우 출발 3/4줄", selection:"짝", buttonType:"red", tailSide: "left", tail: "3"}])
                                    } else {
                                        setSelectedOption([{type:"파워사다리", name:"좌우 출발 3/4줄", selection:"짝", buttonType:"red", tailSide: "left", tail: "3"}])
                                    }
                                }} 
                                // style={{paddingTop: "3px"}} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? RedSMButtonPressed : RedSMButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem'}} className="z-20 font-swagger text-white  absolute">짝</p>
                                <div style={{width: '3.75rem', height: '3.75rem'}} className="absolute rounded-full bg-black pt-1 flex-shrink-0 z-20 left-0 top-2 flex items-center justify-center">
                                    <div style={{fontSize: '2.0625rem'}} className="text-white tracking-tight font-spoqaMedium">3</div>
                                </div>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.80</p>
                            </div>
                        </div>

                        <div style={{marginRight: '1.875rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-2`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워사다리", name:"좌우 출발 3/4줄", selection:"홀", buttonType:"blue", tailSide: "right", tail: "3"}])
                                    } else {
                                        setSelectedOption([{type:"파워사다리", name:"좌우 출발 3/4줄", selection:"홀", buttonType:"blue", tailSide: "right", tail: "3"}])
                                    }
                                }} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                
                                <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem'}} className="z-20 font-swagger text-white absolute">홀</p>
                                <div style={{width: '3.75rem', height: '3.75rem'}} className="absolute rounded-full bg-black pt-1 flex-shrink-0 z-20 right-0 top-2 flex items-center justify-center">
                                    <div style={{fontSize: '2.0625rem'}} className="text-white tracking-tight font-spoqaMedium">3</div>
                                </div>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.80</p>
                            </div>
                        </div>

                        <div style={{marginRight: '1.875rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-3`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워사다리", name:"좌우 출발 3/4줄", selection:"홀", buttonType:"blue", tailSide: "left", tail: "4"}])
                                    } else {
                                        setSelectedOption([{type:"파워사다리", name:"좌우 출발 3/4줄", selection:"홀", buttonType:"blue", tailSide: "left", tail: "4"}])
                                    }
                                }} 
                                // style={{paddingTop: "3px"}} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-3` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem'}} className="z-20 font-swagger text-white  absolute">홀</p>
                                <div style={{width: '3.75rem', height: '3.75rem'}} className="absolute rounded-full bg-black pt-1 flex-shrink-0 z-20 left-0 top-2 flex items-center justify-center">
                                    <div style={{fontSize: '2.0625rem'}} className="text-white tracking-tight font-spoqaMedium">4</div>
                                </div>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.80</p>
                            </div>
                        </div>

                        <div style={{marginRight: '1.875rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-4`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워사다리", name:"좌우 출발 3/4줄", selection:"짝", buttonType:"red", tailSide: "right", tail: "4"}])
                                    } else {
                                        setSelectedOption([{type:"파워사다리", name:"좌우 출발 3/4줄", selection:"짝", buttonType:"red", tailSide: "right", tail: "4"}])
                                    }
                                }} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                
                                <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-4` ? RedSMButtonPressed : RedSMButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px rgba(0,0,0, 0.6)", fontSize: '3.75rem', marginTop: '0.3rem'}} className="z-20 font-swagger text-white absolute">짝</p>
                                <div style={{width: '3.75rem', height: '3.75rem'}} className="absolute rounded-full bg-black pt-1 flex-shrink-0 z-20 right-0 top-2 flex items-center justify-center">
                                    <div style={{fontSize: '2.0625rem'}} className="text-white tracking-tight font-spoqaMedium">4</div>
                                </div>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.80</p>
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
                        <div style={{marginRight: '0.35rem'}} >
                            <SingleCard width={25.82} height={23.375} titleNumber={1} title = '게임' subText = "홀짝" />
                        </div>
                        <div style={{marginRight: '0.35rem'}}>
                            <SingleCard button1Text='좌' button2Text='우' width={25.82} height={23.375} titleNumber={2} title = '게임' subText = "출발점" missingBorder='none' />
                        </div>
                        <div>
                            <SingleCard button1Text='3줄' button2Text='4줄' width={25.82} height={23.375} titleNumber={3} title = '게임' subText = "줄갯수" missingBorder='right' />
                        </div>
                    </div>
                </div>
                <div>
                    <ThreeCard title='게임' subText='좌우 출발 3/4줄' titleNumber={4} missingBorder="both"/>
                </div>
            </div>
        </div>
    )
}

export default PowerLadderGame
