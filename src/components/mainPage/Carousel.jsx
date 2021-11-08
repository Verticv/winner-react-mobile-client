import React, { useEffect, useState } from 'react'
import visual from '../../images/carousel/visual.png'
import visual2 from '../../images/carousel/visual2.png'
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

    // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
    const arrowStyle = "absolute text-white z-10 bg-black h-40px w-40px rounded-sm opacity-50 flex items-center justify-center hover:opacity-75"

    // Let's create dynamic buttons. It can be either left or right. Using
    // isLeft boolean we can determine which side we'll be rendering our button
    // as well as change its position and content.

    const leftArrow = (
        <img className="h-16px w-16px object-contain opacity-50" src={LeftArrow} alt="arrow"/>

    )

    const rightArrow = (
        <img className="h-16px w-16px object-contain opacity-50" src={RightArrow} alt="arrow"/>
    )

    const sliderControl = isLeft => (
        <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? 'left-10px' : 'right-10px'}`}
        >
            {isLeft ? leftArrow : rightArrow}
        </button>
    );

    const positionIndicator = (
        <div className="absolute text-white text-2xl z-10 w-full rounded-sm flex items-center justify-center bottom-0 space-x-2 mb-10px">
            {images.map((img, i) => (
                <button key={i} className="w-15px h-15px bg-gray-cccccc rounded-full p-3px" onClick={() => setCurrentImage(i)}>
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
                 <img onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} key={i} src={images[i]} className={`${currentImage === i ? "opacity-100" : "opacity-0"} ${img === visual2 && "absolute top-0"} w-full  object-contain transition duration-300`} alt={"banner_images"} />

                // <button key={i} className="w-15px h-15px bg-gray-300 rounded-full p-2px" onClick={() => setCurrentImage(i)}>
                //     {currentImage === i && (
                //         <div className="w-full h-full rounded-full bg-blue-gradDark" />
                //     )}
                // </button>
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
        <div className="flex w-default w-full flex-shrink-0">
            <div className="relative w-full limit1920:h-500px h-full flex items-center">
                {sliderControl(true)}
                {imagesDisplay}
                {sliderControl()}
                {positionIndicator}
            </div>
        </div>
    )
}

export default Carousel
