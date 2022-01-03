import React from 'react'
import upButton from '../../images/newImages/mainPage/icons/up-botton.png'

const ScrollButton = () => {

    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div onClick={scrollHandler} style={{top: '118rem', right: '1.875rem', zIndex: '200'}} className='absolute cursor-pointer'>
            <img className='object-contain' style={{width: '8.375rem', height: '8.375rem'}} src={upButton} alt='up-button' />
        </div>
    )
}

export default ScrollButton
