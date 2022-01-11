import React from 'react'
import AlertIcon from '../../images/newImages/mainPage/icons/warning.png'

const WarningMessage = ({title, message1, mr1='', mr2='', mr3='', mr4='', isFirstMessageDark, message2, message3, message4}) => {

    return (
      <div style={{paddingLeft: '1.875rem', paddingTop: '1.875rem', paddingBottom: '1.875rem', borderWidth: '0.1875rem', marginBottom: '0.625rem'}} className="w-full rounded-2xl border border-red-e8c2b3 bg-red-ffe9de px-19px pt-17px">
          <div className="flex">
              <img style={{width: '3.375rem',height: '3.0625rem' ,marginRight: '1rem'}} src={AlertIcon} alt="" />
              <span style={{fontSize: '2.8125rem', lineHeight: '1.2'}} className="text-red-ee3c62 font-spoqaMedium text-20px tracking-tight">{title}</span>
          </div>
          <div style={{marginTop: '1.625rem'}} className="flex flex-col text-red-ac6d6d tracking-tight font-spoqaMedium text-16px">
              {message1 && <span style={{color: isFirstMessageDark ? "#8c5757" : '', fontSize: '2.625rem', marginRight: mr1}} className="flex"><span style={{marginRight: '0.875rem'}} className="font-bold block">✓</span>  {message1}</span>}
              {message2 && <span style={{fontSize: '2.625rem', marginRight: mr2, marginTop: '0.875rem'}} className="flex"><span style={{marginRight: '0.875rem'}} className="font-bold block">✓</span>  {message2}</span>}
              {message3 && <span style={{fontSize: '2.625rem', marginRight: mr3, marginTop: '0.875rem'}} className="flex"><span style={{marginRight: '0.875rem'}} className="font-bold block">✓</span>  {message3}</span>}
              {message4 && <span style={{fontSize: '2.625rem', marginTop: '0.875rem', marginRight: mr4}} className="flex"><span style={{marginRight: '0.875rem'}} className="font-bold">✓</span>  {message4}</span>}
          </div>
      </div>
    )
    
}

export default WarningMessage
