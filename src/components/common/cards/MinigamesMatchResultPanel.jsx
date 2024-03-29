import React from 'react';
import CardHeader from '../sportCards/CardHeader';
import CardResults from '../sportCards/CardResults';
import TableHeader from '../sportCards/TableHeader';

const MinigamesMatchResultPanel = ({
    type = "powerladder"
}) => {
  return (
    <>
      <div style={{borderRadius:"1em", margin: '1.875rem'}} className="shadow-subNavbar bg-gray-fafafa">
        <TableHeader isMinigame={true} />
        <div style={{padding: '0 1rem' }} className="w-full">
            <div className="w-full rounded-lg">
                <div style={{marginBottom: '1.875rem'}} className='rounded-lg w-full'>
                    <CardHeader flag = 'us' name = {type === "powerladder" ? '파워사다리' : type === "speedkino" ? '스피드키노' : '키노사다리'}  date = '2021-06-29 15:45' isMinigame={true} minigameType={type} />
                    <CardResults 
                        bet = "left"
                        result="equality"
                        score="211"
                        team1={type === "speedkino" ? '언더 [211회]' : "홀 [211회]"} 
                        team2={type === "speedkino" ? '[211회] 오버' : "[211회] 짝"} 
                        stat1="1.95"
                        stat2="VS"
                        stat3="1.95"
                        isAttached={false}
                        hasUp={false}
                        hasDown={false}
                        isMinigame={true}
                        withoutRadius={true}
                    />
                    <CardResults 
                        bet = "left"
                        result="equality"
                        score="211"
                        team1={type === "speedkino" ? '홀 [211회]' : "3줄 [211회]"}
                        team2={type === "speedkino" ? '[211회] 짝' : "[211회] 4줄"}
                        stat1="1.95"
                        stat2="VS"
                        stat3="1.95"
                        isAttached={false}
                        hasUp={false}
                        hasDown={false}
                        isMinigame={true}
                        withoutRadius={type !== "speedkino" && true}
                    />
                    {type !== "speedkino" && (
                        <CardResults 
                            bet = "right"
                            result="equality"
                            score="211"
                            team1="좌 [211회]"
                            team2="[211회] 우"
                            stat1="1.95"
                            stat2="VS"
                            stat3="1.95"
                            isAttached={false}
                            hasUp={false}
                            hasDown={false}
                            isMinigame={true}
                        />
                    )}
                    
                </div>
                <div style={{marginBottom: '1.875rem'}} className='rounded-lg w-full'>
                    <CardHeader flag = 'us' name = {type === "powerladder" ? '파워사다리' : type === "speedkino" ? '스피드키노' : '키노사다리'} date = '2021-06-29 15:45' isMinigame={true} minigameType={type} />
                    <CardResults 
                        bet = "right"
                        result="equality"
                        score="211"
                        team1={type === "speedkino" ? '언더 [211회]' : "홀 [211회]"}
                        team2={type === "speedkino" ? '[211회] 오버' : "[211회] 짝"}
                        stat1="1.95"
                        stat2="VS"
                        stat3="1.95"
                        isAttached={false}
                        hasUp={false}
                        hasDown={false}
                        isMinigame={true}
                        withoutRadius={true}
                    />
                    <CardResults 
                        bet = "left"
                        result="equality"
                        score="211"
                        team1={type === "speedkino" ? '홀 [211회]' : "3줄 [211회]"}
                        team2={type === "speedkino" ? '[211회] 짝' : "[211회] 4줄"}
                        stat1="1.95"
                        stat2="VS"
                        stat3="1.95"
                        isAttached={false}
                        hasUp={false}
                        hasDown={false}
                        isMinigame={true}
                        withoutRadius={type !== "speedkino" && true}
                    />
                    {type !== "speedkino" && (
                        <CardResults 
                            bet = "right"
                            result="equality"
                            score="211"
                            team1="좌 [211회]"
                            team2="[211회] 우"
                            stat1="1.95"
                            stat2="VS"
                            stat3="1.95"
                            isAttached={false}
                            hasUp={false}
                            hasDown={false}
                            isMinigame={type !== "speedkino" && true}
                        />
                    )}
                </div>
                <div style={{marginBottom: '1.875rem'}} className='rounded-lg w-full'>
                    <CardHeader flag = 'us' name = {type === "powerladder" ? '파워사다리' : type === "speedkino" ? '스피드키노' : '키노사다리'} date = '2021-06-29 15:45' isMinigame={true} minigameType={type} />
                    <CardResults 
                        bet = "left"
                        result="equality"
                        score="211"
                        team1={type === "speedkino" ? '언더 [211회]' : "홀 [211회]"}
                        team2={type === "speedkino" ? '[211회] 오버' : "[211회] 짝"}
                        stat1="1.95"
                        stat2="VS"
                        stat3="1.95"
                        isAttached={false}
                        hasUp={false}
                        hasDown={false}
                        isMinigame={true}
                        withoutRadius={true}
                    />
                    <CardResults 
                        bet = "left"
                        result="equality"
                        score="211"
                        team1={type === "speedkino" ? '홀 [211회]' : "3줄 [211회]"}
                        team2={type === "speedkino" ? '[211회] 짝' : "[211회] 4줄"}
                        stat1="1.95"
                        stat2="VS"
                        stat3="1.95"
                        isAttached={false}
                        hasUp={false}
                        hasDown={false}
                        isMinigame={true}
                        withoutRadius={type !== "speedkino" && true}
                    />
                    {type !== "speedkino" && (
                        <CardResults 
                            bet = "right"
                            result="equality"
                            score="211"
                            team1="좌 [211회]"
                            team2="[211회] 우"
                            stat1="1.95"
                            stat2="VS"
                            stat3="1.95"
                            isAttached={false}
                            hasUp={false}
                            hasDown={false}
                            isMinigame={true}
                        />
                    )}
                </div>
                {type !== "speedkino" && (
                    <div style={{marginBottom: '1.875rem'}} className='rounded-lg w-full'>
                        <CardHeader flag = 'us' name =  {type === "powerladder" ? '파워사다리' : type === "speedkino" ? '스피드키노' : '키노사다리'} date = '2021-06-29 15:45' isMinigame={true} minigameType={type} />
                        <CardResults 
                            bet = "right"
                            result="equality"
                            score="211"
                            team1="홀 [211회]"
                            team2="[211회] 짝"
                            stat1="1.95"
                            stat2="VS"
                            stat3="1.95"
                            isAttached={false}
                            hasUp={false}
                            hasDown={false}
                            isMinigame={true}
                            withoutRadius={true}
                        />
                        <CardResults 
                            bet = "left"
                            result="equality"
                            score="211"
                            team1="3줄 [211회]"
                            team2="[211회] 4줄"
                            stat1="1.95"
                            stat2="VS"
                            stat3="1.95"
                            isAttached={false}
                            hasUp={false}
                            hasDown={false}
                            isMinigame={true}
                            withoutRadius={true}
                        />
                        <CardResults 
                            bet = "right"
                            result="equality"
                            score="211"
                            team1="좌 [211회]"
                            team2="[211회] 우"
                            stat1="1.95"
                            stat2="VS"
                            stat3="1.95"
                            isAttached={false}
                            hasUp={false}
                            hasDown={false}
                            isMinigame={true}
                        />
                    </div>
                )}

            </div>
        </div>
    </div>
  </>
  )
};

export default MinigamesMatchResultPanel;
