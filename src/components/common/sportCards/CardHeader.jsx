import React from 'react';
import FootballIcon from '../../../images/newImages/mypage/sports/football.png'
import USFlagIcon from '../../../images/newImages/mypage/sports/usaFlag.png'
import UKFlagIcon from '../../../images/newImages/mypage/sports/englandFlag.png'
import SpainFlagIcon from '../../../images/newImages/mypage/sports/spain.svg.png'
import ClockIcon from '../../../images/newImages/mypage/sports/clock.png'

const CardHeader = ({flag = 'us', name = 'MLS', date = '2021-06-29 15:45'}) => {
  const flags = {
    us: USFlagIcon,
    uk: UKFlagIcon,
    spain: SpainFlagIcon
  }
  const headerFlag = flags[flag]
  return (
    <div style={{height: '7.5rem'}} className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-8">
      <div className="flex items-center">
          <img style={{width: '4.25rem', height: '4.25rem'}} src={FootballIcon} alt="" />
          <img style={{width: '5.625', height: '3.3125rem'}} className="ml-4" src={headerFlag} alt="" />
          <span style={{fontSize: '2.625rem'}} className="ml-4 font-spoqaMedium text-20px tracking-tight text-white pt-3px">{name}</span>
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
