import React from 'react'
import './RadioButton.css'
import TableHeader from 'components/common/sportCards/TableHeader'
import CardHeader from 'components/common/sportCards/CardHeader'
import CardResults from 'components/common/sportCards/CardResults'

const SportsMatchResultPanel = ({
    checkedState = null,
    setCheckedState = null,
}) => {

    return (
        <>
            <div style={{borderRadius:"1em", margin: '1.875rem', paddingBottom: '0.8125rem'}} className="shadow-subNavbar bg-gray-fafafa">
                <TableHeader />
                <div style={{padding: '0 1rem' }} className="w-full">
                    <div className="w-full rounded-lg overflow-hidden">
                        <div style={{marginBottom: '1.875rem'}} className='rounded-lg shadow-plain10 w-full'>
                            <CardHeader flag = 'us' name = 'MLS' date = '2021-06-29 15:45' />
                            <CardResults 
                                bet = "middle"
                                result="equality"
                                score="4:4"
                                team1="CF파추카"
                                team2="과달하라 차바"
                                stat1="2.26"
                                stat2="2.96"
                                stat3="3.47"
                                isAttached={false}
                                hasUp={false}
                                hasDown={false}
                            />
                        </div>
                        <div style={{marginBottom: '1.875rem'}} className='rounded-lg shadow-plain10 w-full'>
                            <CardHeader flag = 'uk' name = 'EPL' date = '2021-06-29 15:45' />
                            <CardResults 
                                bet="left" 
                                result="win" 
                                // choice="home"
                                score="5:0"
                                team1="맨유"
                                team2="첼시"
                                stat1="2.95"
                                stat2="VS"
                                stat3="1.39"
                                isAttached={false}
                                hasUp={false}
                                hasDown={false}
                                withoutRadius
                            />
                            <CardResults 
                                bet="right" 
                                result="lose" 
                                // choice="away"
                                score="1:2"
                                team1="아스널"
                                team2="맨시티"
                                stat1="2.26"
                                stat2="VS"
                                stat3="2.25"
                                isAttached={false}
                                hasUp={false}
                                hasDown={false}
                            />
                        </div>

                        <div style={{marginBottom: '1.875rem'}} className='rounded-lg shadow-plain10 w-full'>
                            <CardHeader flag = 'uk' name = 'EPL' date = '2021-06-29 15:45' />
                            <CardResults 
                                bet = "left"
                                result="win"
                                score="1:0"
                                team1="맨유"
                                team2="첼시"
                                stat1="2.95"
                                stat2="4.62"
                                stat3="1.39"
                                isAttached={false}
                                hasUp={false}
                                hasDown={false}
                            />
                        </div>

                        <div className='rounded-lg shadow-plain10 w-full'>
                            <CardHeader flag = 'spain' name = '라리가' date = '2021-06-29 15:45' />
                            <CardResults 
                                bet = "left"
                                result="win"
                                score="2:1"
                                team1="바르셀로나"
                                team2="레알마드리드"
                                stat1="1.80"
                                stat2="3.32"
                                stat3="1.90"
                                isAttached={false}
                                hasUp={false}
                                hasDown={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SportsMatchResultPanel
