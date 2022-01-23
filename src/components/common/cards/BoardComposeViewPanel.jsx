import React from 'react'
import './RadioButton.css'
import TableHeader from 'components/common/sportCards/TableHeader'
import CardHeader from 'components/common/sportCards/CardHeader'
import CardResults from 'components/common/sportCards/CardResults'
import CardContent from 'components/common/sportCards/CardContent'

const BoardComposeViewPanel = ({
    checkedState = null,
    setCheckedState = null,
    setAttachedArray = null,
}) => {

    const data = [
        {
            id:0,
            flag: 'us',
            name: 'MLS',
            date: '2021-06-29 15:45',
            bet: "right",
            result:"lose",
            score:"1:2",
            team1:"CF파추카",
            team2:"과달하라 차바extra text",
            stat1:"2.26",
            stat2:"2.96",
            stat3:"3.40",
            winAmount: '+900,000,000',
            hasUp: false,
            hasDown:false,
        },
        {
            id:1,
            flag: 'uk',
            name: 'ELP',
            date: '2021-06-29 15:45',
            bet: "left",
            result:"win",
            score:"2:1",
            team1:"맨유",
            team2:"첼시",
            stat1:"2.26",
            stat2:"2.96",
            stat3:"3.40",
            hasUp: false,
            hasDown:false,
        },
        {
            id:2,
            flag: 'us',
            name: 'MLS',
            date: '2021-06-29 15:45',
            bet: "right",
            result:"lose",
            score:"1:2",
            team1:"CF파추카",
            team2:"과달하라 차바extra text",
            stat1:"2.26",
            stat2:"2.96",
            stat3:"3.40",
            hasUp: false,
            hasDown:false,
        },
        {
            id:3,
            flag: 'us',
            name: 'MLS',
            date: '2021-06-29 15:45',
            bet: "right",
            result:"lose",
            score:"1:2",
            team1:"CF파추카",
            team2:"과달하라 차바extra text",
            stat1:"2.26",
            stat2:"2.96",
            stat3:"3.40",
            hasUp: false,
            hasDown:false,
        },
        {
            id:4,
            flag: 'us',
            name: 'MLS',
            date: '2021-06-29 15:45',
            bet: "right",
            result:"lose",
            score:"1:2",
            team1:"CF파추카",
            team2:"과달하라 차바extra text",
            stat1:"2.26",
            stat2:"2.96",
            stat3:"3.40",
            hasUp: false,
            hasDown:false,
        },
    ]

    const addEntryClick = (id) => {
        const currentObject = data?.filter(card => card?.id === id)?.[0]
        setAttachedArray(oldArray => [...oldArray, currentObject]);
    };

    return (
        <>
            {data?.map((card, index) => (
                <div key={card.id} style={{borderRadius:"1em", margin: '1.875rem', paddingBottom: '2.0625rem', marginTop: data?.length -1 === index ? '3.75rem': '1.875rem'}} className="shadow-subNavbar bg-gray-fafafa">
                    <TableHeader />
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
                                />
                            </div>
                            <CardContent {...card} withButtons={false} withInput={false} withUploadButton={true} id={card.id} uploadHandler={addEntryClick} checkedState={checkedState} type={0} setCheckedState={setCheckedState} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BoardComposeViewPanel
