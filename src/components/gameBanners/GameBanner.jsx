import React from 'react'
import LiveCasinoBanner from './LiveCasinoBanner'
import SlotsBanner from './SlotsBanner'
import SportsBanner from './SportsBanner'
import EsportsBanner from './EsportsBanner'
import MinigameBanner from './MinigameBanner'
import ARgameBanner from './ARgameBanner'
import FishingGameBanner from './FishingGameBanner'
import AllGamesBanner from './AllGamesBanner'
import LotteryGame from './LotteryGame'

const GameBanner = ({selection}) => {
    return (
        <div className="flex flex-col h-full">

            {selection === 0 ? (
                <AllGamesBanner />
            ) : selection === 1 ? (
                <LiveCasinoBanner />
            ) : selection === 2 ? (
                <SlotsBanner />
            ) : selection === 3 ? (
                <SportsBanner />
            ) : selection === 4 ? (
                <EsportsBanner />
            ) : selection === 5 ? (
                <MinigameBanner />
            ) : selection === 6 ? (
                <ARgameBanner />
            ) : selection === 8 ? (
                <LotteryGame />
            ) : <FishingGameBanner />
            }
        </div>
    )
}

export default GameBanner
