

import React from 'react'
import { useHistory } from 'react-router';
import HomeIcon from '../../images/newImages/mypage/home.png'
import LeftArrowIcon from '../../images/newImages/newLeftArrow.png'

const HomePageTopBanner = ({pageTitle}) => {
    const history = useHistory();
    return (
      <div style={{height: '7.5rem'}} className="relative flex w-full justify-center items-center border-b border-gray-ececec bg-gray-ebeff4">
      <img
          onClick={() => history.push('/mypage')}
          style={{height: '3.375rem', width: '2.1875rem', top: '1.875rem', left: '3.6875rem'}}
          className="absolute w-9 cursor-pointer"
          src={LeftArrowIcon}
          alt="left_arrow_icon"
      />
      <span style={{fontSize: '3.75rem', lineHeight: '4.4625rem', marginTop: '0.375rem'}} className="text-gray-r454545 font-spoqaBold font-semibold">{pageTitle}</span>
      <img
          onClick={() => history.push('/mypage')}
          style={{width: '3.875rem', height: '3.875rem', top: '1.875rem', right: '4.0625rem'}}
          className="absolute cursor-pointer"
          src={HomeIcon}
          alt="home_icon"
      />
  </div>
    )
}

export default HomePageTopBanner
