import React, { useState, useEffect } from 'react'
import MinigamesRightPanel from 'components/minigames/MinigamesRightPanel'
import ArrowUp from '../../images/newImages/cart-arrow-up.png'
import CartIcon from '../../images/newImages/cart.png'
import Expand from 'react-expand-animated'
import { Link } from 'react-router-dom';
import Home from '../../images/newImages/mainPage/icons/navbar/home.png'
import MyInfo from '../../images/tabbar/2.png'

const Cart = ({selectedOption}) => {
    const [openedCart, setOpenedCart] = useState(false)
    const [openedCartDelay, setOpenedCartDelay] = useState(false)
    const [selectedGame, setSelectedGame] = useState(window.location.pathname)

    useEffect(() => {
      setSelectedGame(window.location.pathname)
    }, [])

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

    return (
        <div style={{maxWidth: '1242px', borderTopLeftRadius: '2.5rem', borderTopRightRadius: '2.5rem'}} className="transition-all w-full z-30 rounded-t-3xl shadow-plain bg-white fixed bottom-0" >

<div style={{height: "9.0625rem", padding: '0 3.6875rem'}} className={`${openedCartDelay ? "opacity-0 transition" : "opacity-100 transition"} bg-white rounded-t-3xl shadow-plain absolute bottom-0  flex w-full items-center h-full flex-shrink-0 justify-between`} onClick={() => setOpenedCart(true)}>
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
            <Expand className='z-50 flex bg-white shadow-plain rounded-t-3xl' open={openedCart} duration={200} >
                <div className='w-full z-50 bg-white rounded-t-3xl' style={{height: '96.5rem', padding: '1.875rem'}}>
                    <MinigamesRightPanel selectedGame={selectedGame} setOpenedCart={setOpenedCart} selectedOption={selectedOption} />
                </div>
            </Expand>
                
        </div>
    )
}

export default Cart

