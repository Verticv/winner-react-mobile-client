import React, { useState, useEffect } from 'react'
// import MinigamesRightPanel from 'components/minigames/MinigamesRightPanel'
import BetCombinationRightPanel from 'components/betCombination/BetCombinationRightPanel'
import ArrowUp from '../../images/newImages/cart-arrow-up.png'
import CartIcon from '../../images/newImages/cart.png'
import Expand from 'react-expand-animated'
import Home from '../../images/newImages/mainPage/icons/navbar/home.png'
import MyInfo from '../../images/tabbar/2.png'
import { Link } from 'react-router-dom';

const BetCart = ({selectedOption, addedCard, setAddedCard, isPanelFixed, setPanelFixed, setOpenedCart, openedCart}) => {
    // const [openedCart, setOpenedCart] = useState(false)
    const [selectedGame, setSelectedGame] = useState(window.location.pathname)
    const [openedCartDelay, setOpenedCartDelay] = useState(false)
    console.log(`selectedGame`, selectedGame)

    useEffect(() => {
      setSelectedGame(window.location.pathname)
    }, [])
  //   const [selectedOption, setSelectedOption] = useState([
  //     {
  //         type: "",
  //         name: "",
  //         selection: "",
  //         buttonType: "",
  //         subtitle: null
  //     }
  // ])
    
  // <div style={{width: '3.1875rem', height: '3.1875rem', fontSize: '2.4375rem'}} className="bg-red-notification rounded-full text-white flex items-center justify-center font-roboto ml-4 font-roboto">
  //   1
  // </div>
    
    useEffect(() => {
        openedCart && (
            setOpenedCartDelay(true)
        )
        setTimeout(()=>{
            !openedCart && (
                setOpenedCartDelay(false)
            )
        }, 250)
        
    }, [openedCart])

    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`); 
    };
      
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div style={{maxWidth: '1242px', height: openedCartDelay ? "100vh" : "auto"}} className=" w-full z-50 shadow-plain bg-black bg-opacity-60 fixed bottom-0">
        <div style={{maxWidth: '1242px', borderTopLeftRadius: '2.5rem', borderTopRightRadius: '2.5rem'}} className=" w-full z-50 rounded-t-3xl shadow-plain fixed bottom-0">
            <div className="flex items-center h-full">
                {/* {!openedCart ? ( */}
                   <div style={{height: "9.0625rem", padding: '0 3.6875rem', borderTopLeftRadius: '2.5rem', borderTopRightRadius: '2.5rem'}} className={`${openedCartDelay ? "opacity-0 transition" : "opacity-100 transition"} bg-white shadow-plain absolute bottom-0  flex w-full items-center h-full flex-shrink-0 justify-between`} onClick={() => setOpenedCart(true)}>
                        <div style={{width: '40.625rem'}} className='flex items-center'>
                            <img style={{width: '4.0625rem', marginLeft: '', paddingBottom: ''}} className="object-contain" src={CartIcon} alt="" />
                            <div style={{width: '3.5625rem', height: '3.5625rem', marginRight: '1.125rem', background: "linear-gradient(to bottom right, #fb3e67, #d4184c)", boxShadow: "1px 1px 1px #00000060"}} className="flex-shrink-0 bg-red-notification text-4xl rounded-full text-white flex items-center justify-center font-roboto pt-1">
                                2
                            </div>
                          <p className='text-5xl font-spoqaMedium text-gray-r727272 flex-shrink-0 mt-2'>베팅카트 열기</p>
                        </div>
                        <button className="flex flex-col flex-shrink-0">
                            <img style={{width: '4.5rem', marginLeft: '', paddingBottom: ''}} className="w-16 object-contain" src={ArrowUp} alt="" />
                        </button>
                        <div  style={{width: '40.625rem'}} className='flex text-5xl items-center justify-end font-spoqaMedium text-gray-r727272'>
                            <p className='flex-shrink-0 mr-8 mt-2'>배당률 <span className='text-red-d52e2e'>99.99</span></p>
                            <Link to={'/main'}>
                                <img 
                                    className='h-24 object-contain flex-shrink-0 mb-2 -mr-4 cursor-pointer' 
                                    onPointerUp={e => {
                                        e.preventDefault();
                                    }} 
                                    src={Home} 
                                    alt="" 
                                    />
                            </Link>
                            <Link to={'/mypage'}>
                                <img 
                                    className='h-24 object-contain flex-shrink-0 mb-2 -mr-6 cursor-pointer' 
                                    onPointerUp={e => {
                                        e.preventDefault();
                                    }} 
                                    src={MyInfo} 
                                    alt="" 
                                />
                            </Link>

                        </div>
                   </div>
                {/* ): */}
                <Expand className='z-50  bg-opacity-0' duration={200} open={openedCart}>
                    <div className='w-full bg-white shadow-plain' style={{height: 'auto', maxHeight: openedCart ? 'calc(var(--vh) * 100)' : 'unset', paddingTop: '1.875rem',borderTopLeftRadius: '2.5rem', borderTopRightRadius: '2.5rem'}}>
                        <BetCombinationRightPanel 
                            addedCard={addedCard} 
                            setAddedCard={setAddedCard} 
                            isPanelFixed={isPanelFixed} 
                            setPanelFixed={setPanelFixed} 
                            setOpenedCart={setOpenedCart}
                        />
                    </div>
                </Expand>
                {/* } */}
                
            </div>
        </div>
        </div>
    )
}

export default BetCart

