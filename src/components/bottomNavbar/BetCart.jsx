import React, { useState, useEffect } from 'react'
// import MinigamesRightPanel from 'components/minigames/MinigamesRightPanel'
import BetCombinationRightPanel from 'components/betCombination/BetCombinationRightPanel'
import ArrowUp from '../../images/newImages/cart-arrow-up.png'
import CartIcon from '../../images/newImages/cart.png'
import Expand from 'react-expand-animated'

const BetCart = ({selectedOption, addedCard, setAddedCard, isPanelFixed, setPanelFixed}) => {
    const [openedCart, setOpenedCart] = useState(false)
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


    return (
        <div style={{maxWidth: '1242px', height: openedCartDelay ? "100%" : "auto"}} className=" w-full z-50 shadow-plain bg-black bg-opacity-60 fixed bottom-0">
        <div style={{maxWidth: '1242px', borderTopLeftRadius: '2.5rem', borderTopRightRadius: '2.5rem'}} className=" w-full z-50 rounded-t-3xl shadow-plain fixed bottom-0">
            <div className="flex items-center h-full">
                {/* {!openedCart ? ( */}
                   <div style={{height: "9.0625rem", padding: '0 3.6875rem'}} className={`${openedCartDelay ? "opacity-0 transition" : "opacity-100 transition"} bg-white rounded-t-3xl shadow-plain absolute bottom-0  flex w-full items-center h-full flex-shrink-0`} onClick={() => setOpenedCart(true)}>
                      <div style={{marginRight: '7.25rem'}} className='flex items-center'>
                          <img style={{width: '4.0625rem', marginLeft: '', paddingBottom: ''}} className="object-contain" src={CartIcon} alt="" />
                          <div style={{width: '3.5625rem', height: '3.5625rem', marginRight: '1.125rem'}} className="bg-red-notification text-4xl rounded-full text-white flex items-center justify-center font-roboto">
                              1
                          </div>
                          <p className='text-5xl font-spoqaMedium text-gray-r727272'>베팅카트 열기</p>
                      </div>
                      <div style={{width: '37rem'}} className='flex justify-between'>
                          <button
                              style={{width: '15.625rem'}}
                              className="flex flex-col">
                              <img style={{width: '4.5rem', marginLeft: '', paddingBottom: ''}} className="w-16 object-contain" src={ArrowUp} alt="" />
                          </button>
                          <div className='flex text-5xl items-center font-spoqaMedium text-gray-r727272'>
                            <p>배당률 <span className='text-red-d52e2e'>3.76</span></p>
                          </div>
                      </div>
                   </div>
                {/* ): */}
                <Expand className='z-50 bg-white rounded-t-3xl shadow-plain' duration={200} open={openedCart}>
                 <div className='w-full overflow-scroll ' style={{height: 'auto', maxHeight: openedCart ? '100vh' : 'unset', padding: '1.875rem'}}>
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

