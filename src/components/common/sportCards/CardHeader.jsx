import React from 'react';
import FootballIcon from '../../../images/newImages/mypage/sports/football.png'
import USFlagIcon from '../../../images/newImages/mypage/sports/usaFlag.png'
import UKFlagIcon from '../../../images/newImages/mypage/sports/englandFlag.png'
import SpainFlagIcon from '../../../images/newImages/mypage/sports/spain.svg.png'
import ClockIcon from '../../../images/newImages/mypage/sports/clock.png'
import Icon3 from '../../../images/newImages/minigameResults/1.png'
import Icon4 from '../../../images/newImages/minigameResults/2.png'

const CardHeader = ({flag = 'us', name = 'MLS', date = '2021-06-29 15:45', isMinigame=false, minigameType="powerball"}) => {
  const flags = {
    us: USFlagIcon,
    uk: UKFlagIcon,
    spain: SpainFlagIcon
  }
  const headerFlag = flags[flag]

  if (isMinigame === true) return (
    <div style={{height: '7.5rem', borderTopRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem'}} className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-8">
      <div className="flex items-center">
          <img style={{width: '3.9375rem', height: '3.9375rem'}} className='object-contain' src={minigameType === "powerball" ? Icon3 : Icon4} alt="" />
          <span style={{fontSize: '2.625rem', paddingTop: '0.1875rem', marginLeft: '1.125rem'}} className="ml-4 font-spoqaMedium text-20px tracking-tight text-white">{name}</span>
      </div>
      {minigameType !== "powerball" && (
        <div className="flex items-center">
          <img style={{width: '2.875rem', height: '2.875rem'}} src={ClockIcon} alt="" />
          <span 
              style={{color: "#dae8f5", fontSize: '2.625rem', marginLeft: '0.5625rem', marginTop: '0.125rem'}}
              className="font-spoqa text-16px tracking-tight text-white"
          >
              {date}
          </span>
        </div>
      )}
      
    </div>
  )

  else return (
    <div style={{height: '7.5rem', borderTopRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem'}} className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-8">
      <div className="flex items-center">
          <img style={{width: '3.9375rem', height: '3.9375rem'}} src={FootballIcon} alt="" />
          <img style={{width: '5.625', height: '3.3125rem', marginLeft: '1.0625rem'}} src={headerFlag} alt="" />
          <span style={{fontSize: '2.625rem', paddingTop: '0.1875rem', marginLeft: '1.125rem'}} className="ml-4 font-spoqaMedium text-20px tracking-tight text-white">{name}</span>
      </div>
      <div className="flex items-center">
          <img style={{width: '2.875rem', height: '2.875rem'}} src={ClockIcon} alt="" />
          <span 
              style={{color: "#dae8f5", fontSize: '2.625rem', marginLeft: '0.5625rem', marginTop: '0.125rem'}}
              className="font-spoqa text-16px tracking-tight text-white"
          >
              {date}
          </span>
      </div>
    </div>
  )
}

export default CardHeader;
