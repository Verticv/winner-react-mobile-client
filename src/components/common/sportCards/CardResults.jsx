import React from 'react';
import UpIcon from '../../../images/newImages/mypage/sports/up-red.png'
import DownIcon from '../../../images/newImages/mypage/sports/blue-down.png'

const CardResults = ({
  bet, 
  result, 
  // choice, 
  score, 
  team1, 
  team2, 
  stat1, 
  stat2, 
  stat3,
  isAttached = false,
  hasUp = false,
  hasDown = false,
  smallCard=false,
  withoutRadius
}) => (
  <div className={`flex items-center w-full p-3 pr-0 bg-gray-fefefe ${withoutRadius ? '' : 'rounded-lg'} border-b border-gray-dddddd`}>
      <div className="flex">
          <button 
              style={{
                  width: smallCard ?'25.125rem' : '26.875rem',
                  height: '7.4375rem',
                  padding: '1px',
                  marginRight: '0.375rem',
                  textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
                  backgroundColor: bet === "left" ? "#cb4343" : "#dddddd",
                  
              }} 
              className="flex items-center justify-center h-36px rounded-lg bg-gray-dddddd"
          >
              <div
              // style={{padding: '1px'}}
              className={`${
                  bet === "left" 
                  ? "text-white border-red-f99097 bg-gradient-to-b from-red-ff535f to-red-d7434f" 
                  : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"} 
                  flex items-center justify-between h-full w-full rounded-lg border bg-gradient-to-b cursor-pointer pl-4 pr-3.5`
              }>
                  <span style={{fontSize: '2.625rem'}} className="truncate text-left font-spoqaMedium tracking-tight text-14px">{team1}</span>
                  <div className="flex items-center">
                      {hasUp && <img style={{marginRight: '0.4375rem'}} className="object-contain w-8 h-7" src={UpIcon} alt="" /> }
                      <span  style={{fontSize: '2.625rem'}} className="font-roboto tracking-tight text-14px">{stat1}</span>
                  </div>
              </div>
          </button>

          <button
              style={{
                  textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",
                  height: '7.4375rem',
                  padding: '1px',
                  marginRight: '0.375rem',
              }} 
              className={`flex group items-center justify-center w-40 rounded-lg bg-gray-dddddd ${bet === "middle" ? "bg-red-cb4343" : "bg-gray-dddddd"}`}
          >
              <div className={`${
                  bet === "middle" 
                  ? "text-white border-red-f99097 bg-gradient-to-b from-red-ff535f to-red-d7434f" 
                  : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545 bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb"}
                  pt-px flex items-center justify-center h-full w-full rounded-lg border border-white cursor-pointer pl-4 pr-3.5`}
              >
                  <span style={{fontSize: '2.625rem'}} className="font-roboto tracking-tight text-14px">{stat2}</span>
              </div>
          </button>

          <button style={{
                      width: smallCard ?'25.125rem' : '26.875rem',
                      height: '7.4375rem',
                      padding: '1px',
                      // marginRight: '0.375rem',
                  }} 
              className={`${bet === "right" ? "bg-red-cb4343" : "bg-gray-dddddd"} flex group items-center justify-center h-36px rounded-lg bg-gray-dddddd`}>
              <div
              style={{
                  textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",
                  paddingRight: team2?.length > 8 ? '0' : '',
                  // paddingRight: '1.125rem',
                  // backgroundColor: bet === "right" ? "#cb4343" : "#dddddd"
              }} 
              className={`${
                  bet === "right" 
                  ? "text-white border-red-ff7982 bg-gradient-to-b from-red-ff535f to-red-d7434f"
                  : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545 bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb "} 
                  pt-px flex items-center justify-between h-full w-full rounded-lg border border-white cursor-pointer pl-4 pr-3.5`}
              >
                  <div className="flex items-center">
                      <span style={{fontSize: '2.625rem'}} className="font-roboto tracking-tight">{stat3}</span>
                      {hasDown && <img style={{marginLeft: '0.4375rem'}} className="object-contain w-8 h-7" src={DownIcon} alt="" /> }
                  </div>
                  <span style={{fontSize: '2.625rem', maxWidth: '17.875rem'}} className="truncate truncate-override font-spoqaMedium tracking-tight text-right">{team2}</span>
              </div>
          </button>
      </div>

      <div style={{marginLeft: '0rem', fontSize: '2.625rem'}} className="w-full flex font-spoqaMedium justify-center tracking-tight text-center">
          <div 
          style={{marginRight:isAttached && "5px", fontSize: '2.5rem'}}
          className={`${
              result === "win" 
              ? "text-red-500" 
              : result === "lose" 
              ? "text-gray-subNavbar" 
              : result === "cancel" 
              ? "text-blue-r0056a6"
              : result === 'equality'
              ? 'text-green-r279140' :
              "text-gray-r454545"} 
              font-spoqaMedium
              `}
          >{
              result === "win" 
              ? <><p style={{marginBottom: '-1rem'}}>승</p> <p className='text-gray-subNavbar font-roboto'>{score}</p></>
              : result === "lose" 
              ? <><p style={{marginBottom: '-1rem'}}>패</p> <p className='text-gray-subNavbar font-roboto'>{score}</p></>
              : result === "cancel" 
              ? "취소"
              : result === 'equality'
              ? <><p style={{marginBottom: '-1rem'}}>무</p> <p className='text-gray-subNavbar font-roboto'>{score}</p></>
              : "결과없음"}
              </div>
      </div>
  </div>
)

export default CardResults;
