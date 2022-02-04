import React from 'react'
import './RadioButton.css'
import TableHeader from 'components/common/sportCards/TableHeader'
import CardHeader from 'components/common/sportCards/CardHeader'
import CardResults from 'components/common/sportCards/CardResults'
import CardContent from 'components/common/sportCards/CardContent'

const PowerLadderBetHistoryPanel = ({
    checkedState = null,
    setCheckedState = null,
}) => {

    return (
        <>
            <div style={{borderRadius:"1em", margin: '1.875rem', paddingBottom: '2.0625rem'}} className="shadow-subNavbar bg-gray-fafafa">
                <TableHeader />
                <div style={{padding: '0 1rem' }} className="w-full">
                    <div className="w-full rounded-lg">
                        <div className='rounded-lg w-full'>
                            <CardHeader flag = 'us' name = '파워사다리' date = '2021-06-29 15:45'  isMinigame={true} minigameType="powerladder"/>
                            <CardResults 
                                bet = "right"
                                result="lose"
                                score=""
                                team1="홀 [200회]"
                                team2="[200회] 짝"
                                // team2="과달하라"
                                stat1="1.95"
                                stat2="VS"
                                stat3="1.95"
                                isAttached={false}
                                hasUp={false}
                                hasDown={false}
                            />
                        </div>
                        <CardContent checkedState={checkedState} type={0} setCheckedState={setCheckedState} hasHistory=" 짝" time=" 2021-06-29 15:45:05" />
                    </div>
                </div>
            </div>
            <div style={{borderRadius:"1em", margin: '1.875rem', paddingBottom: '2.0625rem'}} className="shadow-subNavbar bg-gray-fafafa">
                <TableHeader />
                <div style={{padding: '0 1rem' }} className="w-full">
                    <div className="w-full rounded-lg">
                        <div className='rounded-lg w-full'>
                            <CardHeader flag = 'us' name = '파워사다리' date = '2021-06-29 15:45'  isMinigame={true} minigameType="powerladder"/>
                            <CardResults 
                                bet="left" 
                                result="win" 
                                // choice="home"
                                team1="우3홀 [200회]"
                                team2="[200회] 좌3짝"
                                stat1="1.95"
                                stat2="VS"
                                stat3="1.95"
                                isAttached={false}
                                hasUp={false}
                                hasDown={false}
                                withoutRadius
                            />
                        </div>
                        <CardContent winAmount="+900,000,000" checkedState={checkedState} type={1} setCheckedState={setCheckedState} hasHistory="홀" time=" 2021-06-29 15:45:05" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PowerLadderBetHistoryPanel
