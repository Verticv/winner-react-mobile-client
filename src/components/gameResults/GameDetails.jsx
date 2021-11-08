import React from 'react'
import FootballIcon from '../../images/myPage/betHistory/football.png'
import BasketballIcon from '../../images/myPage/betHistory/basketball.png'
import USFlagIcon from '../../images/myPage/betHistory/us_flag.png'

const GameDetails = () => {

    const Options = ({
        bet,
        team1 = "CF파추카",
        team2 = "과달하라 차바스",
        stat1 = "2.26",
        stat2 = "2.96",
        stat3 = "3.47"
    }) => (
        <div className="flex space-x-4px">
            <button 
                style={{textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",}}
                className={`flex items-center justify-center w-285px h-36px rounded-lg ${bet === "left" ? "bg-red-cb4343" : "bg-gray-dddddd"}`}
            >
                <div className={`${
                    bet === "left" 
                    ? "text-white border-red-ff7982 from-red-ff535f via-red-ff535f to-red-ee4e5a" 
                    : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"} 
                    flex items-center justify-between h-34px w-283px rounded-lg border bg-gradient-to-b cursor-pointer px-10px pt-px`
                }>
                    <span className="truncate w-108px text-left font-spoqaMedium tracking-tight text-14px">{team1}</span>
                    <span className="font-roboto tracking-tight text-14px">{stat1}</span>
                </div>
            </button>

            <button
                style={{textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",}}
                className={`flex group items-center justify-center w-81px h-36px rounded-lg bg-gray-dddddd ${bet === "middle" ? "bg-red-cb4343" : "bg-gray-dddddd"}`}
            >
                <div className={`${
                    bet === "middle" 
                    ? "text-white border-red-ff7982 from-red-ff535f via-red-ff535f to-red-ee4e5a" 
                    : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"}
                    pt-px flex items-center justify-center h-34px w-79px rounded-lg border border-white bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb cursor-pointer`}
                >
                    <span className="font-roboto tracking-tight text-14px">{stat2}</span>
                </div>
            </button>

            <button 
                style={{textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",}}
                className={`${bet === "right" ? "bg-red-cb4343" : "bg-gray-dddddd"} flex group items-center justify-center w-285px h-36px rounded-lg bg-gray-dddddd`}
            >
                <div className={`${
                    bet === "right" 
                    ? "text-white border-red-ff7982 from-red-ff535f via-red-f8515d to-red-ee4e5a" 
                    : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"} 
                    pt-px flex items-center justify-between h-34px w-283px rounded-lg border border-white bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb cursor-pointer px-10px`}
                >
                    <span className="font-roboto tracking-tight text-14px">{stat3}</span>
                    <span className="truncate w-108px font-spoqaMedium tracking-tight text-14px text-right">{team2}</span>
                </div>
            </button>
        </div>
    )

    const SingleCard = () => (
        <div className="w-full h-112px rounded-lg overflow-hidden shadow-subNavbar">
            <div className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-20px">
                <div className="flex items-center">
                    <img src={FootballIcon} alt="" />
                    <img className="ml-5px" src={USFlagIcon} alt="" />
                    <span className="ml-4px font-spoqaMedium text-20px tracking-tight text-white pt-2px">미국-MLS</span>
                </div>
            </div>            
            <div className="w-full h-56px bg-white flex items-center tracking-tight">
                <div className="w-165px flex items-center justify-center font-roboto text-14px text-gray-r454545">2021-06-29 15:45</div>
                <div className="w-28px flex items-center justify-center font-spoqaMedium text-14px text-gray-r454545 ">축구</div>
                
                <div style={{marginLeft: "31px"}}>
                    <Options bet="middle" />
                </div>
                
                <div className="ml-36px font-roboto text-14px text-gray-r454545">4 : 4</div>
                <div className="ml-36px font-spoqaMedium text-14px text-green-r279140">무</div>

            </div>
        </div>
    )

    const DoubleCard = () => (
        <div className="w-full h-168px rounded-lg overflow-hidden shadow-subNavbar">
            <div className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-20px">
                <div className="flex items-center">
                    <img src={BasketballIcon} alt="" />
                    <img className="ml-5px" src={USFlagIcon} alt="" />
                    <span className="ml-4px font-spoqaMedium text-20px tracking-tight text-white pt-2px">NBA</span>
                </div>
            </div>   

            <div className="w-full h-56px bg-white border-b border-gray-dddddd flex items-center tracking-tight">
                <div className="w-165px flex items-center justify-center font-roboto text-14px text-gray-r454545">2021-06-29 15:45</div>
                <div className="w-28px flex items-center justify-center font-spoqaMedium text-14px text-gray-r454545 ">축구</div>
                
                <div style={{marginLeft: "31px"}}>
                    <Options bet="left" team1="LA레이커스" team2="피닉스" stat1="2.95" stat2="VS" stat3="1.39" />
                </div>
                
                <div className="ml-20px font-roboto text-14px text-gray-r454545">222 : 222</div>
                <div style={{color: "#d52e2e"}} className="ml-22px font-spoqaMedium text-14px">승</div>
            </div>

            <div className="w-full h-56px bg-white flex items-center tracking-tight">
                <div className="w-165px flex items-center justify-center font-roboto text-14px text-gray-r454545">2021-06-29 15:45</div>
                <div className="w-28px flex items-center justify-center font-spoqaMedium text-14px text-gray-r454545 ">축구</div>
                
                <div style={{marginLeft: "31px"}}>
                    <Options bet="right" team1="세크라멘토" team2="오클라호마" stat1="2.95" stat2="VS" stat3="2.25" />
                </div>
                
                <div className="ml-20px font-roboto text-14px text-gray-r454545">222 : 222</div>
                <div className="ml-22px font-spoqaMedium text-14px text-green-r454545">패</div>
            </div>

        </div>
    )

    return (
        <div style={{borderRadius:"1em"}} className="w-full bg-gray-fafafa shadow-subNavbar">
            <div className="h-53px w-full font-spoqaMedium text-14px tracking-tight text-gray-r454545 flex items-center">

                <div style={{marginLeft: "66px"}} className="h-14px flex items-center">경기일시</div>
                <div style={{marginLeft: "61px"}} className="h-14px flex items-center">종목</div>
                <div style={{marginLeft: "156px"}} className="h-14px flex items-center">승(홈)</div>
                <div style={{marginLeft: "164px"}} className="h-14px flex items-center">무</div>
                <div style={{marginLeft: "157px"}} className="h-14px flex items-center">패(원정)</div>
                <div style={{marginLeft: "150px"}} className="h-14px flex items-center">스코어</div>
                <div style={{marginLeft: "25px"}} className="h-14px flex items-center">결과</div>

            </div>

            <div className="px-10px pb-10px space-y-10px">
                <SingleCard />
                <DoubleCard />
            </div>
            
        </div>
    )
}

export default GameDetails
