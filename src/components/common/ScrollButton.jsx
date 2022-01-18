import React, { useEffect, useState } from 'react'
import upButton from '../../images/newImages/mainPage/icons/up-botton.png'

const ScrollButton = () => {

    const [showUpButton, setShowUpButton] = useState(false)

    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 75) {
                setShowUpButton(true);
            } else {
                setShowUpButton(false);
            }
            
        });
    })

    return showUpButton &&
        <div onClick={scrollHandler} style={{zIndex: '200', right: '1rem', top: '75rem'}} className='fixed cursor-pointer'>
            <div className=''>
                <img className='object-contain' style={{width: '8.375rem', height: '8.375rem'}} src={upButton} alt='up-button' />
            </div>
        </div>
    
}

export default ScrollButton
