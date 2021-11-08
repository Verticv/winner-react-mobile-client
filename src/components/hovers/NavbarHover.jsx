import React from 'react'
import LiveCasinoHover from './LiveCasinoHover'
import SlotGameHover from './SlotGameHover'
import SportsHover from './SportsHover'
import EsportsHover from './EsportsHover'
import MinigamesHover from './MinigamesHover'
import ARHover from './ARHover'
import FishingGameHover from './FishingGameHover'

const NavbarHover = ({selection, setHoveredTab, setSelectedTab}) => {

    return (
        <div 
            onMouseLeave={() => {
                setHoveredTab(null)
                setSelectedTab(null)
            }}
        >
            <LiveCasinoHover selection={selection}/>
            <SlotGameHover selection={selection}/>
            <SportsHover selection={selection}/>
            <EsportsHover selection={selection}/>
            <MinigamesHover selection={selection}/>
            <ARHover selection={selection}/>
            <FishingGameHover selection={selection}/>
        </div>
    )
}

export default NavbarHover
