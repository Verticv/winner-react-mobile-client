import React from 'react'
import LiveCasinoBanner from './LiveCasinoBanner'
import SlotsBanner from './SlotsBanner'
import SportsBanner from './SportsBanner'
import EsportsBanner from './EsportsBanner'
import MinigameBanner from './MinigameBanner'
import ARgameBanner from './ARgameBanner'
import FishingGameBanner from './FishingGameBanner'
import AllGamesBanner from './AllGamesBanner'

const GameBanner = ({selection}) => {
    return (
        <div className="w-screen flex flex-col h-full">
            <div className={`w-screen absolute ${selection === 0 ? "opacity-100" : "opacity-0"}`}><AllGamesBanner /></div>
            <div className={`w-screen absolute ${selection === 1 ? "opacity-100" : "opacity-0"}`}><LiveCasinoBanner /></div>
            <div className={`w-screen absolute ${selection === 2 ? "opacity-100" : "opacity-0"}`}><SlotsBanner /></div>
            <div className={`w-screen absolute ${selection === 3 ? "opacity-100" : "opacity-0"}`}><SportsBanner /></div>
            <div className={`w-screen absolute ${selection === 4 ? "opacity-100" : "opacity-0"}`}><EsportsBanner /></div>
            <div className={`w-screen absolute ${selection === 5 ? "opacity-100" : "opacity-0"}`}><MinigameBanner /></div>
            <div className={`w-screen absolute ${selection === 6 ? "opacity-100" : "opacity-0"}`}><ARgameBanner /></div>
            <div className={`w-screen absolute ${selection === 7 ? "opacity-100" : "opacity-0"}`}><FishingGameBanner /></div>
        </div>
    )
}

export default GameBanner
