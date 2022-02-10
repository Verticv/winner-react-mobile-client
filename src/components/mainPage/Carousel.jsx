import React, { useEffect, useState } from 'react'
import visual from '../../images/carousel/visual_1.png'
import visual2 from '../../images/carousel/visual_2.png'
import LeftArrow from '../../images/arrows/left_arrow.png'
import RightArrow from '../../images/arrows/right_arrow.png'

const images = [visual,visual2]
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']


const Carousel = () => {

    // We will start by storing the index of the current image in the state.
    const [currentImage, setCurrentImage] = useState(0);
    const [isHover, setHover] = useState(false);

    // Some validation for checking the array length could be added if needed
    const totalImages = images.length;

    // Below functions will assure that after last image we'll scroll back to the start,
    // or another way round - first to last in previousImage method.
    const nextImage = () => {
        if (currentImage >= totalImages - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    };

    const previousImage = () => {
        if (currentImage === 0) {
            setCurrentImage(totalImages - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    };



    // Let's create dynamic buttons. It can be either left or right. Using
    // isLeft boolean we can determine which side we'll be rendering our button
    // as well as change its position and content.

    const leftArrow = (
        <img style={{width: '1.25rem', height: '2.0625rem'}} className="object-contain opacity-50" src={LeftArrow} alt="arrow"/>

    )

    const rightArrow = (
        <img style={{width: '1.25rem', height: '2.0625rem'}} className="object-contain opacity-50" src={RightArrow} alt="arrow"/>
    )

    const sliderControl = isLeft => (
        <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            style={{width: '4.84rem', height: '4.84rem', right:`${isLeft ? '' : '1.875rem'}`, left:`${isLeft ? '1.875rem' : ''}`}}
            className={`absolute text-white z-10 bg-black h-28px w-28px rounded-lg opacity-50 flex items-center justify-center hover:opacity-75`}
        >
            {isLeft ? leftArrow : rightArrow}
        </button>
    );

    const positionIndicator = (
        <div className="absolute text-white text-2xl z-10 w-full rounded-sm flex items-center justify-center bottom-10px left-0 space-x-1">
            {images.map((img, i) => (
                <button key={i} className="w-8px h-8px bg-gray-cccccc rounded-full p-px" onClick={() => setCurrentImage(i)}>
                    {currentImage === i && (
                        <div className="w-full h-full rounded-full bg-blue-gradDark" />
                    )}
                </button>
            ))}
        </div>
    )

    const imagesDisplay = (
        <>
            {images.map((img, i) => (
                 <img 
                    onMouseEnter={() => setHover(true)} 
                    onMouseLeave={() => setHover(false)} 
                    key={i} 
                    src={images[i]} 
                    style={{
                        height:"172px",
                        width: "590px"
                    }}
                    className={`${
                        currentImage === i ? "opacity-100" : "opacity-0"
                    } ${
                        img === visual2 && ""
                    } absolute top-0 w-full object-cover transition duration-300`} 
                    alt={"banner_images"} 
                 />

            ))}
        </>
    )

    useEffect(
        () => {
            let timer1 = setTimeout(() => {
                if (isHover === false) {
                    if (currentImage === 0) {
                        setCurrentImage(1)
                    } else {
                        setCurrentImage(0)
                    }
                }
 
            }, 5000);
            return () => {
                clearTimeout(timer1);
            };
        },
        [currentImage, isHover]
    );

    return (
        <div style={{height:"172px"}} className="relative w-full h-full flex items-center">
            {sliderControl(true)}
            <div style={{height:'172px'}} className="flex items-center w-full justify-center">
                {imagesDisplay}
                <img 
                    onMouseEnter={() => setHover(true)} 
                    onMouseLeave={() => setHover(false)} 
                    src={visual} 
                    className={`opacity-0`} 
                    alt={"banner_images"} 
                 />
            </div>
            {sliderControl()}
            <div className="z-20">
                {positionIndicator}
            </div>
        </div>
    )
}

export default Carousel
