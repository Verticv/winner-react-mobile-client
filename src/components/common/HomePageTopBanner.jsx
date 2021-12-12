

import React from 'react'
import { useHistory } from 'react-router';
import HomeIcon from '../../images/newImages/mypage/home.png'
import LeftArrowIcon from '../../images/newImages/left-arrow-gray.png'

const HomePageTopBanner = ({pageTitle}) => {
    const history = useHistory();
    return (
      <div className="relative flex w-full h-36 justify-center items-center border-b border-gray-ececec bg-gray-ebeff4">
      <img
          onClick={() => history.push('/mypage')}
          className="absolute left-12 top-12 w-9 cursor-pointer"
          src={LeftArrowIcon}
          alt="left_arrow_icon"
      />
      <span style={{fontSize: '4rem'}} className="text-gray-r454545 font-spoqaBold font-semibold">{pageTitle}</span>
      <img
          className="absolute right-12 top-12 w-14"
          src={HomeIcon}
          alt="home_icon"
      />
  </div>
    )
}

export default HomePageTopBanner
