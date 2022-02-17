import React, { useState, useEffect } from 'react'
import MinigamesRightPanel from 'components/minigames/MinigamesRightPanel'
import ArrowUp from '../../images/newImages/cart-arrow-up.png'
import CartIcon from '../../images/newImages/cart.png'
import Expand from 'react-expand-animated'

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
            {/* <div 
            style={{height: openedCart ? '96.5rem' : '9.0625rem' , padding: openedCart ? '0' : '0 3.6875rem'}} 
            className="flex items-center h-full transition"
            > */}
                {/* {!openedCart ? ( */}
                   <div style={{height:"9.0625rem", padding: "0 3.6875rem"}} className={`${openedCartDelay ? "opacity-0 transition" : "opacity-100 transition"} absolute bottom-0 z-10 shadow-plain bg-white   rounded-t-3xl flex w-full h-full items-center justify-between flex-shrink-0`}  onClick={() => setOpenedCart(!openedCart)}>
                        <div style={{width: '30rem'}} className='flex items-center'>
                            <img style={{width: '4.0625rem', marginLeft: '', paddingBottom: ''}} className="object-contain" src={CartIcon} alt="" />
                            <div 
                            style={{width: '3.5625rem', height: '3.5625rem', marginRight: '1.125rem', background: "linear-gradient(to bottom right, #fb3e67, #d4184c)", boxShadow: "1px 1px 1px #00000060"}} 
                            className="text-4xl rounded-full text-white flex items-center justify-center font-roboto pt-px">
                                1
                            </div>
                            <p className='text-5xl font-spoqaMedium text-gray-r727272 pt-2'>베팅카트 열기</p>
                        </div>

                        <button>
                            <img style={{width: '4.5rem', marginLeft: '', paddingBottom: '1rem'}} className="w-16 object-contain mt-2" src={ArrowUp} alt="" />
                        </button>

                      <div style={{width: '30rem'}} className='flex justify-end'>
                          
                          <div className='flex text-5xl items-center font-spoqaMedium text-gray-r727272 mt-1'>
                            <p>배당률 <span className='text-red-d52e2e'>3.76</span></p>
                          </div>
                      </div>
                   </div>
                {/* ) : ( */}
                    <Expand className='z-50 flex bg-white shadow-plain rounded-t-3xl' open={openedCart} duration={200} >
                        <div className='w-full z-50 bg-white rounded-t-3xl' style={{height: '96.5rem', padding: '1.875rem'}}>
                            <MinigamesRightPanel selectedGame={selectedGame} setOpenedCart={setOpenedCart} selectedOption={selectedOption} />
                        </div>
                    </Expand>
                {/* )} */}
                
            {/* </div> */}
        </div>
    )
}

export default Cart

