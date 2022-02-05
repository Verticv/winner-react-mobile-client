import React, { useState, useEffect } from 'react'
import MinigamesRightPanel from 'components/minigames/MinigamesRightPanel'
import ArrowUp from '../../images/newImages/cart-arrow-up.png'
import CartIcon from '../../images/newImages/cart.png'

const Cart = ({selectedOption}) => {
    const [openedCart, setOpenedCart] = useState(false)
    const [selectedGame, setSelectedGame] = useState(window.location.pathname)

    useEffect(() => {
      setSelectedGame(window.location.pathname)
    }, [])

    return (
        <div style={{maxWidth: '1242px', borderTopLeftRadius: '2.5rem', borderTopRightRadius: '2.5rem'}} className="transition-all w-full z-50 rounded-t-3xl shadow-plain bg-white fixed bottom-0">
            <div style={{height: openedCart ? '97.75rem' : '9.0625rem' , padding: openedCart ? '0' : '0 3.6875rem'}} className="flex items-center h-full">
                {!openedCart ? (
                   <div className='flex w-full items-center justify-between'>
                        <div style={{width: '30rem'}} className='flex items-center'>
                            <img style={{width: '4.0625rem', marginLeft: '', paddingBottom: ''}} className="object-contain" src={CartIcon} alt="" />
                            <div 
                            style={{width: '3.5625rem', height: '3.5625rem', marginRight: '1.125rem', background: "linear-gradient(to bottom right, #fb3e67, #d4184c)", boxShadow: "1px 1px 1px #00000060"}} 
                            className="text-4xl rounded-full text-white flex items-center justify-center font-roboto pt-px">
                                1
                            </div>
                            <p className='text-5xl font-spoqaMedium text-gray-r727272'>베팅카트 열기</p>
                        </div>

                        <button onClick={() => setOpenedCart(true)} >
                            <img style={{width: '4.5rem', marginLeft: '', paddingBottom: '1rem'}} className="w-16 object-contain" src={ArrowUp} alt="" />
                        </button>

                      <div style={{width: '30rem'}} className='flex justify-end'>
                          
                          <div className='flex text-5xl items-center font-spoqaMedium text-gray-r727272'>
                            <p>배당률 <span className='text-red-d52e2e'>3.76</span></p>
                          </div>
                      </div>
                   </div>
                ): <div className='w-full' style={{height: '97.75rem', padding: '1.875rem'}}>
                    <MinigamesRightPanel selectedGame={selectedGame} setOpenedCart={setOpenedCart} selectedOption={selectedOption} />
                  </div>}
                
            </div>
        </div>
    )
}

export default Cart

