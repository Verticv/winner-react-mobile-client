import React from 'react'
import './RadioButton.css'
import TableHeader from 'components/common/sportCards/TableHeader'
import CardHeader from 'components/common/sportCards/CardHeader'
import CardResults from 'components/common/sportCards/CardResults'
import CardContent from 'components/common/sportCards/CardContent'

const FreeBoardPanel = ({
    checkedState = null,
    setCheckedState = null,
}) => {

    return (
        <>
            <div style={{borderRadius:"1em", margin: '1.875rem', paddingBottom: '2.0625rem'}} className="shadow-subNavbar bg-gray-fafafa">
                <TableHeader smallCard />
                <div style={{padding: '0 1rem' }} className="w-full">
                    <div className="w-full rounded-lg overflow-hidden">
                        <div className='rounded-lg shadow-subNavbar w-full'>
                            <CardHeader flag = 'us' name = 'MLS' date = '2021-06-29 15:45' />
                            <CardResults 
                                bet = "right"
                                result="lose"
                                score="1:2"
                                team1="CF파추카"
                                team2="과달하라 차바extra text"
                                stat1="2.26"
                                stat2="2.96"
                                stat3="3.4"
                                isAttached={false}
                                hasUp={false}
                                hasDown={false}
                                smallCard
                            />
                        </div>
                        <CardContent showBetNumber={false} withButtons={false} withInput={false} winAmount='+900,000,000' checkedState={checkedState} type={0} setCheckedState={setCheckedState} />
                    </div>
                </div>
            </div>
            <div style={{borderRadius:"1em", margin: '1.875rem', paddingBottom: '2.0625rem'}} className="shadow-subNavbar bg-gray-fafafa">
                <TableHeader smallCard />
                <div style={{padding: '0 1rem' }} className="w-full">
                    <div className="w-full rounded-lg overflow-hidden">
                        <div className='rounded-lg shadow-subNavbar w-full'>
                            <CardHeader flag = 'uk' name = 'EPL' date = '2021-06-29 15:45' />
                            <CardResults 
                                bet = "left"
                                result="cancel"
                                score=""
                                team1="맨유"
                                team2="첼시"
                                stat1="2.95"
                                stat2="4.62"
                                stat3="1.39"
                                isAttached={false}
                                hasUp={false}
                                hasDown={false}
                                smallCard
                            />
                        </div>
                        <CardContent showBetNumber={false} withButtons={false} withInput={false} winAmount='+900,000,000' checkedState={checkedState} type={0} setCheckedState={setCheckedState} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreeBoardPanel
