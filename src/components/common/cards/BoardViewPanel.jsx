import React from 'react'
import './RadioButton.css'
import TableHeader from 'components/common/sportCards/TableHeader'
import CardHeader from 'components/common/sportCards/CardHeader'
import CardResults from 'components/common/sportCards/CardResults'
import CardContent from 'components/common/sportCards/CardContent'

const BoardViewPanel = ({
    checkedState = null,
    setCheckedState = null,
    setAttachedArray = null,
    attachedArray = null,
}) => {

    const handleRemoveItem = (id) => {
        setAttachedArray(attachedArray.filter(card => card.id !== id));
    };

    return (
        <>
            {attachedArray && attachedArray?.map((card, index) => (
                <>
                    <div key={card.id} style={{borderRadius:"1em", margin: '1.875rem', paddingBottom: '2.0625rem'}} className="shadow-subNavbar bg-gray-fafafa">
                        <TableHeader smallCard />
                        <div style={{padding: '0 1rem' }} className="w-full">
                            <div className="w-full rounded-lg">
                                <div className='rounded-lg w-full'>
                                    <CardHeader flag = {card.flag} name = {card.name} date = '2021-06-29 15:45' />
                                    <CardResults 
                                        bet = {card.bet}
                                        result={card.result}
                                        score={card.score}
                                        team1={card.team1}
                                        team2={card.team2}
                                        stat1={card.stat1}
                                        stat2={card.stat2}
                                        stat3={card.stat3}
                                        isAttached={false}
                                        hasUp={card.hasUp}
                                        hasDown={card.hasDown}
                                        smallCard
                                        smallContent
                                    />
                                </div>
                                <CardContent winAmount={card.winAmount} id={card.id} withButtons={false} withInput={false} withCancelButton={true} cancelHandler={handleRemoveItem} checkedState={checkedState} type={0} setCheckedState={setCheckedState} />
                            </div>
                        </div>
                    </div>
                    {attachedArray.length - 1 === index && (
                        <div style={{height: '0.1875rem', marginTop: '5.625rem'}} className={`${attachedArray.length - 1 === index ? "bg-gray-dddddd": ""} w-full`}></div>
                    )}
                </>
            ))}
        </>
    )
}

export default BoardViewPanel
