import React, { useState } from 'react'
import { Route, useHistory, useLocation } from 'react-router';
import HorizontalSubMenu1 from 'components/horizontalMenus/HorizontalSubMenu1'
import Icon1 from '../../images/cscenter/sportsPolicy/1.png'
import Icon2 from '../../images/cscenter/sportsPolicy/2.png'
import Icon3 from '../../images/cscenter/sportsPolicy/3.png'
import Icon4 from '../../images/cscenter/sportsPolicy/4.png'
import Icon5 from '../../images/cscenter/sportsPolicy/5.png'
import Icon6 from '../../images/cscenter/sportsPolicy/6.png'
import Icon7 from '../../images/cscenter/sportsPolicy/7.png'
import Icon8 from '../../images/cscenter/sportsPolicy/8.png'
import Icon9 from '../../images/cscenter/sportsPolicy/9.png'
import SportsGamePolicyTable1 from './tables/SportsGamePolicyTable1';
import SportsGamePolicyTable2 from './tables/SportsGamePolicyTable2';
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'

const SoccerArray = [
    {id:0, type:"승무패", typeColor:"#0056a6", overtime:true, ruleText:"승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:1, type:"승무패 \n (전반전)", typeColor:"#0056a6", overtime:false, ruleText:"전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:2, type:"승무패 \n (후반전)", typeColor:"#0056a6", overtime:false, ruleText:"후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:3, type:"승패 (무X)", typeColor:"#0056a6", overtime:false, ruleText:"승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:4, type:"승패 (무X) \n (전반전)", typeColor:"#0056a6", overtime:false, ruleText:"전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:5, type:"승패 (무X) \n (후반전)", typeColor:"#0056a6", overtime:false, ruleText:"후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:6, type:"무실점 \n 완승", typeColor:"#0056a6", overtime:true, ruleText:"무실점으로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (상대팀 무득점이어야 함)" },
    {id:7, type:"전반 & \n 전후반", typeColor:"#0056a6", overtime:true, ruleText:"전반전만의 결과와 최종(전후반포함) 각각의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:8, type:"더블찬스", typeColor:"#0056a6", overtime:true, ruleText:"두개의 결과를 예측하여 베팅하는 방식" },
    {id:9, type:"더블찬스 \n (전반전)", typeColor:"#0056a6", overtime:false, ruleText:"전반전만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" },
    {id:10, type:"더블찬스 \n (후반전)", typeColor:"#0056a6", overtime:false, ruleText:"후반전만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" },

    {id:11, type:"핸디캡", typeColor:"#905a12", overtime:true, ruleText:"상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여 베팅하는 방식 홈팀(왼쪽)", ruleText2:"기준으로 +, -의 핸디캡 기준점수가 표기됨"  },
    {id:12, type:"핸디캡 \n (전반전)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:13, type:"핸디캡 \n (후반전)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:14, type:"핸디캡 승무패", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:15, type:"핸디캡 승무패 \n (전반전)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:16, type:"핸디캡 승무패 \n (후반전)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },

    {id:17, type:"언더오버", typeColor:"#75942d", overtime:true, ruleText:"양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식"  },
    {id:18, type:"언더오버 \n (전반전)", typeColor:"#75942d", overtime:false, ruleText:"전반전만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:19, type:"언더오버 \n (후반전)", typeColor:"#75942d", overtime:false, ruleText:"후반전만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },

    {id:20, type:"홀짝", typeColor:"#b538d6", overtime:true, ruleText:"양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:21, type:"홀짝 \n (전반전)", typeColor:"#b538d6", overtime:false, ruleText:"전반전만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:22, type:"홀짝 \n (후반전)", typeColor:"#b538d6", overtime:false, ruleText:"후반전만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },

    {id:23, type:"양팀득점", typeColor:"#2d6da8", overtime:true, ruleText:"경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식" },
    {id:24, type:"양팀득점 \n (전반전)", typeColor:"#2d6da8", overtime:false, ruleText:"전반전만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식" },
    {id:25, type:"양팀득점 \n (후반전)", typeColor:"#2d6da8", overtime:false, ruleText:"후반전만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식" },

    {id:26, type:"점수합계~", typeColor:"#ff4800", overtime:true, ruleText:"경기결과 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식" },
    {id:27, type:"점수합계~ \n (전반전)", typeColor:"#ff4800", overtime:false, ruleText:"전반전만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식" },
    {id:28, type:"점수합계~ \n (후반전)", typeColor:"#ff4800", overtime:false, ruleText:"후반전만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식" },
    {id:29, type:"점수합계", typeColor:"#ff4800", overtime:true, ruleText:"경기결과 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식" },
    {id:30, type:"점수합계 \n (전반전)", typeColor:"#ff4800", overtime:false, ruleText:"전반전만의 경기결과로 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식" },
    {id:31, type:"점수합계 \n (후반전)", typeColor:"#ff4800", overtime:false, ruleText:"후반전만의 경기결과로 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식" },

    {id:32, type:"최고득점구간", typeColor:"#75943a", overtime:true, ruleText:"경기중 최고 많은 득점이 발생 할 구간(전,후반)을 예측하여 베팅하는 방식(두개 이상의 동일한 최고득점 구간이 발생할 경우 적특저리)" },

    {id:33, type:"스코어", typeColor:"#b538d6", overtime:true, ruleText:"양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:34, type:"스코어 \n (전반전)", typeColor:"#b538d6", overtime:false, ruleText:"전반전만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:35, type:"스코어 \n (후반전)", typeColor:"#b538d6", overtime:false, ruleText:"후반전만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },

]

const BasketballArray = [
    {id:0, type:"언더오버 \n (전반전)", typeColor:"#0056a6", overtime:null, ruleText:"승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"승패 (무X) \n (1쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"1쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:0, type:"승패 (무X) \n (2쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"2쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:0, type:"승패 (무X) \n (3쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"3쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:0, type:"승패 (무X) \n (4쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"4쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:0, type:"승무패", typeColor:"#0056a6", overtime:null, ruleText:"승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (전반전)", typeColor:"#0056a6", overtime:false, ruleText:"전반전(1,2쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (후반전)", typeColor:"#0056a6", overtime:false, ruleText:"후반전(3,4쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (1쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"1쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (2쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"2쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (3쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"3쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (4쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"4쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"더블찬스", typeColor:"#0056a6", overtime:true, ruleText:"두개의 결과를 예측하여 베팅하는 방식" },
    {id:0, type:"더블찬스 \n (전반전)", typeColor:"#0056a6", overtime:false, ruleText:"전반전(1,2쿼터)만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" },
    {id:0, type:"더블찬스 \n (후반전)", typeColor:"#0056a6", overtime:false, ruleText:"전반전(3,4쿼터)만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" },
    {id:0, type:"더블찬스 \n (1쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"1쿼터만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" },
    {id:0, type:"더블찬스 \n (2쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"2쿼터만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" },
    {id:0, type:"더블찬스 \n (3쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"3쿼터만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" },
    {id:0, type:"더블찬스 \n (4쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"4쿼터만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" },

    {id:0, type:"핸디캡 \n (풀타임)", typeColor:"#905a12", overtime:null, ruleText:"상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여", ruleText2:"베팅하는 방식 홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨" },
    {id:0, type:"핸디캡 \n (전반전)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 전반전(1,2쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (후반전)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 후반전(3,4쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (1쿼터)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 1쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (2쿼터)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 2쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (3쿼터)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 3쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (4쿼터)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 4쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },

    {id:0, type:"언더오버 \n (풀타임)", typeColor:"#75942d", overtime:null, ruleText:"양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (전반전)", typeColor:"#75942d", overtime:false, ruleText:"전반전(1,2쿼터)만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (후반전)", typeColor:"#75942d", overtime:false, ruleText:"후반전(3,4쿼터)만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (1쿼터)", typeColor:"#75942d", overtime:false, ruleText:"1쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (2쿼터)", typeColor:"#75942d", overtime:false, ruleText:"2쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (3쿼터)", typeColor:"#75942d", overtime:false, ruleText:"3쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (4쿼터)", typeColor:"#75942d", overtime:false, ruleText:"4쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },

    {id:0, type:"홀짝 \n (풀타임)", typeColor:"#b538d6", overtime:null, ruleText:"양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (전반전)", typeColor:"#b538d6", overtime:false, ruleText:"전반전(1,2쿼터)만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (후반전)", typeColor:"#b538d6", overtime:false, ruleText:"후반전(3,4쿼터)만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (1쿼터)", typeColor:"#b538d6", overtime:false, ruleText:"1쿼터만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (2쿼터)", typeColor:"#b538d6", overtime:false, ruleText:"2쿼터만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (3쿼터)", typeColor:"#b538d6", overtime:false, ruleText:"3쿼터만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (4쿼터)", typeColor:"#b538d6", overtime:false, ruleText:"4쿼터만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },

    {id:0, type:"최고득점구간", typeColor:"#75942d", overtime:true, ruleText:"경기중 최고 많은 득점이 발생 할 구간(1쿼터, 2쿼터, 3쿼터, 4쿼터)을 예측하여 베팅하는 방식" },
    {id:0, type:"첫 2점/3점/자유투", typeColor:"#75942d", overtime:false, ruleText:"먼저 해당 득점을 성공하는 팀을 예상하여 베팅하는 방식" },
]

const BaseballArray = [
    {id:0, type:"승패 \n (풀타임)", typeColor:"#0056a6", overtime:null, ruleText:"승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"승무패", typeColor:"#0056a6", overtime:null, ruleText:"정규이닝(9이닝)까지만의 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (1이닝)", typeColor:"#0056a6", overtime:false, ruleText:"1이닝까지만의 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (4이닝)", typeColor:"#0056a6", overtime:false, ruleText:"4이닝까지만의 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },

    {id:0, type:"핸디캡 \n (풀타임)", typeColor:"#905a12", overtime:null, ruleText:"상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여 베팅하는 방식 홈팀(왼쪽)", ruleText2: "기준으로 +,-의 핸디캡 기준점수가 표기됨" },
    {id:0, type:"핸디캡 \n (1이닝)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 1이닝까지만의 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (4이닝)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 4이닝까지만의 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 승무패 \n (풀타임)", typeColor:"#905a12", overtime:null, ruleText:"핸디캡을 적용하여 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },

    {id:0, type:"언더오버 \n (풀타임)", typeColor:"#75942d", overtime:null, ruleText:"양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (1이닝)", typeColor:"#75942d", overtime:false, ruleText:"1이닝까지만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (4이닝)", typeColor:"#75942d", overtime:false, ruleText:"4이닝까지만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },

    {id:0, type:"홀짝 \n (풀타임)", typeColor:"#b538d6", overtime:null, ruleText:"양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"첫볼넷", typeColor:"#b538d6", overtime:false, ruleText:"데드볼을 제외한 사구(고의사구 포함)를 먼저 획득하는 팀을 예상하여 베팅하는 방식" },
]

const VolleyballArray = [
    {id:0, type:"승패 \n (풀타임)", typeColor:"#0056a6", overtime:null, ruleText:"승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"승패 \n (1세트)", typeColor:"#0056a6", overtime:null, ruleText:"1세트만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"승패 \n (2세트)", typeColor:"#0056a6", overtime:null, ruleText:"2세트만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"승패 \n (3세트)", typeColor:"#0056a6", overtime:null, ruleText:"3세트만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },

    {id:0, type:"언더오버", typeColor:"#75942d", overtime:null, ruleText:"양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (1세트)", typeColor:"#75942d", overtime:false, ruleText:"1세트만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (2세트)", typeColor:"#75942d", overtime:false, ruleText:"2세트만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (3세트)", typeColor:"#75942d", overtime:false, ruleText:"3세트만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },

    {id:0, type:"홀짝 \n (풀타임)", typeColor:"#b538d6", overtime:null, ruleText:"양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (1세트)", typeColor:"#b538d6", overtime:null, ruleText:"1세트만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (2세트)", typeColor:"#b538d6", overtime:null, ruleText:"2세트만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (3세트)", typeColor:"#b538d6", overtime:null, ruleText:"3세트만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"스코어 \n (풀타임)", typeColor:"#b538d6", overtime:null, ruleText:"양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:0, type:"스코어 \n (1세트)", typeColor:"#b538d6", overtime:false, ruleText:"1세트의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:0, type:"스코어 \n (2세트)", typeColor:"#b538d6", overtime:false, ruleText:"2세트의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:0, type:"스코어 \n (3세트)", typeColor:"#b538d6", overtime:false, ruleText:"3세트의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:0, type:"첫 블로킹/서브 득점", typeColor:"#b538d6", overtime:false, ruleText:"먼저 해당 득점을 성공하는 팀을 예상하여 베팅하는 방식" },
]

const TennisArray = [
    {id:0, type:"승패 \n (풀타임)", typeColor:"#0056a6", overtime:null, ruleText:"승리가 예상되는 팀(선수)을 선택하여 베팅하는 방식" },
    {id:0, type:"승패 \n (1세트)", typeColor:"#0056a6", overtime:null, ruleText:"1세트만의 양팀(선수)이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"승패 \n (2세트)", typeColor:"#0056a6", overtime:null, ruleText:"2세트만의 양팀(선수)이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"승패 \n (3세트)", typeColor:"#0056a6", overtime:null, ruleText:"3세트만의 양팀(선수)이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },

    {id:0, type:"언더오버", typeColor:"#75942d", overtime:null, ruleText:"양팀(선수)이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (1세트)", typeColor:"#75942d", overtime:false, ruleText:"1세트만의 양팀(선수)이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (2세트)", typeColor:"#75942d", overtime:false, ruleText:"2세트만의 양팀(선수)이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (3세트)", typeColor:"#75942d", overtime:false, ruleText:"3세트만의 양팀(선수)이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },

    {id:0, type:"홀짝 \n (풀타임)", typeColor:"#b538d6", overtime:null, ruleText:"양팀(선수)의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (1세트)", typeColor:"#b538d6", overtime:null, ruleText:"1세트만의 양팀(선수)이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (2세트)", typeColor:"#b538d6", overtime:null, ruleText:"2세트만의 양팀(선수)이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (3세트)", typeColor:"#b538d6", overtime:null, ruleText:"3세트만의 양팀(선수)이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"스코어 \n (풀타임)", typeColor:"#b538d6", overtime:null, ruleText:"양팀(선수)의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:0, type:"스코어 \n (1세트)", typeColor:"#b538d6", overtime:false, ruleText:"1세트의 양팀(선수)의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:0, type:"스코어 \n (2세트)", typeColor:"#b538d6", overtime:false, ruleText:"2세트의 양팀(선수)의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:0, type:"스코어 \n (3세트)", typeColor:"#b538d6", overtime:false, ruleText:"3세트의 양팀(선수)의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
]

const HockeyArray = [
    {id:0, type:"승무패", typeColor:"#0056a6", overtime:true, ruleText:"승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (1피리어드)", typeColor:"#0056a6", overtime:false, ruleText:"1피어리드의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (2피리어드)", typeColor:"#0056a6", overtime:false, ruleText:"2피어리드의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (3피리어드)", typeColor:"#0056a6", overtime:false, ruleText:"3피어리드의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승패 \n (풀타임)", typeColor:"#0056a6", overtime:false, ruleText:"승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"승패 \n (무X)", typeColor:"#0056a6", overtime:true, ruleText:"승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:0, type:"더블찬스", typeColor:"#0056a6", overtime:true, ruleText:"승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:0, type:"더블찬스 \n (1피리어드)", typeColor:"#0056a6", overtime:false, ruleText:"1피어리드만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" },
    {id:0, type:"더블찬스 \n (2피리어드)", typeColor:"#0056a6", overtime:false, ruleText:"2피어리드만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" },
    {id:0, type:"더블찬스 \n (3피리어드)", typeColor:"#0056a6", overtime:false, ruleText:"3피어리드만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" },

    {id:0, type:"핸디캡", typeColor:"#905a12", overtime:true, ruleText:"상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여", ruleText2:"베팅하는 방식 홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨" },
    {id:0, type:"핸디캡 \n (1피리어드)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 1피리어드만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (2피리어드)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 2피리어드만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (3피리어드)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 3피리어드만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 승무패", typeColor:"#905a12", overtime:true, ruleText:"핸디캡을 적용하여 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },


    {id:0, type:"언더오버", typeColor:"#75942d", overtime:true, ruleText:"양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (풀타임)", typeColor:"#75942d", overtime:null, ruleText:"양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (1피리어드)", typeColor:"#75942d", overtime:false, ruleText:"1피리어드만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (2피리어드)", typeColor:"#75942d", overtime:false, ruleText:"2피리어드만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (3피리어드)", typeColor:"#75942d", overtime:false, ruleText:"3피리어드만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },

    {id:0, type:"홀짝", typeColor:"#b538d6", overtime:true, ruleText:"양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (풀타임)", typeColor:"#b538d6", overtime:false, ruleText:"양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },

    {id:0, type:"양팀득점", typeColor:"#2d6da8", overtime:true, ruleText:"경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식" },
    {id:0, type:"양팀득점 \n (1피리어드)", typeColor:"#2d6da8", overtime:false, ruleText:"1피리어드만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식" },
    {id:0, type:"양팀득점 \n (2피리어드)", typeColor:"#2d6da8", overtime:false, ruleText:"2피리어드만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식" },
    {id:0, type:"양팀득점 \n (3피리어드)", typeColor:"#2d6da8", overtime:false, ruleText:"3피리어드만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식" },

    {id:0, type:"점수합계~", typeColor:"#ff4800", overtime:true, ruleText:"경기결과 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식" },
    {id:0, type:"점수합계~\n (1피리어드)", typeColor:"#ff4800", overtime:false, ruleText:"1피리어드만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식" },
    {id:0, type:"점수합계~\n (2피리어드)", typeColor:"#ff4800", overtime:false, ruleText:"2피리어드만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식" },
    {id:0, type:"점수합계~\n (3피리어드)", typeColor:"#ff4800", overtime:false, ruleText:"3피리어드만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식" },
    {id:0, type:"점수합계", typeColor:"#ff4800", overtime:true, ruleText:"경기결과 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식" },
    {id:0, type:"점수합계 \n (1피리어드)", typeColor:"#ff4800", overtime:false, ruleText:"1피리어드만의 경기결과로 양팀에서 발생한 득점의 합을 예측하여 베팅하는 방식" },
    {id:0, type:"점수합계 \n (2피리어드)", typeColor:"#ff4800", overtime:false, ruleText:"2피리어드만의 경기결과로 양팀에서 발생한 득점의 합을 예측하여 베팅하는 방식" },
    {id:0, type:"점수합계 \n (3피리어드)", typeColor:"#ff4800", overtime:false, ruleText:"3피리어드만의 경기결과로 양팀에서 발생한 득점의 합을 예측하여 베팅하는 방식" },

    {id:0, type:"최고득점구간", typeColor:"#75942d", overtime:true, ruleText:"경기중 최고 많은 득점이 발생 할 구간(1,2,3피리어드)을 예측하여 베팅하는 방식" },

    {id:0, type:"스코어", typeColor:"#b538d6", overtime:true, ruleText:"양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:0, type:"스코어 \n (1피리어드)", typeColor:"#b538d6", overtime:false, ruleText:"1피리어드만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:0, type:"스코어 \n (2피리어드)", typeColor:"#b538d6", overtime:false, ruleText:"2피리어드만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:0, type:"스코어 \n (3피리어드)", typeColor:"#b538d6", overtime:false, ruleText:"3피리어드만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
]

const HandballArray = [
    {id:0, type:"승무패", typeColor:"#0056a6", overtime:true, ruleText:"승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (전반전)", typeColor:"#0056a6", overtime:false, ruleText:"전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (후반전)", typeColor:"#0056a6", overtime:false, ruleText:"후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승패 (무X)", typeColor:"#0056a6", overtime:false, ruleText:"승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:0, type:"승패 (무X) \n (전반전)", typeColor:"#0056a6", overtime:false, ruleText:"전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:0, type:"승패 (무X) \n (후반전)", typeColor:"#0056a6", overtime:false, ruleText:"후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:0, type:"무실점 완승", typeColor:"#0056a6", overtime:true, ruleText:"무실점으로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (상대팀 무득점이어야 함)" },
    {id:0, type:"전반 & 전후반", typeColor:"#0056a6", overtime:true, ruleText:"전반전만의 결과와 최종(전후반포함) 각각의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"더블찬스", typeColor:"#0056a6", overtime:true, ruleText:"두개의 결과를 예측하여 베팅하는 방식" },
    {id:0, type:"더블찬스 \n (전반전)", typeColor:"#0056a6", overtime:false, ruleText:"전반전만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" },
    {id:0, type:"더블찬스 \n (후반전)", typeColor:"#0056a6", overtime:false, ruleText:"후반전만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" },

    {id:0, type:"핸디캡", typeColor:"#905a12", overtime:true, ruleText:"상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여", ruleText2:"베팅하는 방식 홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨" },
    {id:0, type:"핸디캡 \n (전반전)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (후반전)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 승무패", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 승무패 \n (전반전)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 승무패 \n (후반전)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },

    {id:0, type:"언더오버", typeColor:"#75942d", overtime:true, ruleText:"양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (전반전)", typeColor:"#75942d", overtime:false, ruleText:"전반전만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (후반전)", typeColor:"#75942d", overtime:false, ruleText:"후반전만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },

    {id:0, type:"홀짝", typeColor:"#b538d6", overtime:true, ruleText:"양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (전반전)", typeColor:"#b538d6", overtime:false, ruleText:"전반전만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (후반전)", typeColor:"#b538d6", overtime:false, ruleText:"후반전만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },

    {id:0, type:"양팀득점", typeColor:"#2d6da8", overtime:true, ruleText:"경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식" },
    {id:0, type:"양팀득점 \n (전반전)", typeColor:"#2d6da8", overtime:false, ruleText:"전반전만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식" },
    {id:0, type:"양팀득점 \n (후반전)", typeColor:"#2d6da8", overtime:false, ruleText:"후반전만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식" },

    {id:0, type:"점수합계~", typeColor:"#ff4800", overtime:true, ruleText:"경기결과 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식" },
    {id:0, type:"점수합계~ \n (전반전)", typeColor:"#ff4800", overtime:false, ruleText:"전반전만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식" },
    {id:0, type:"점수합계~ \n (후반전)", typeColor:"#ff4800", overtime:false, ruleText:"후반전만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식" },
    {id:0, type:"점수합계", typeColor:"#ff4800", overtime:true, ruleText:"경기결과 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식" },
    {id:0, type:"점수합계 \n (전반전)", typeColor:"#ff4800", overtime:false, ruleText:"전반전만의 경기결과로 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식" },
    {id:0, type:"점수합계 \n (후반전)", typeColor:"#ff4800", overtime:false, ruleText:"후반전만의 경기결과로 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식" },

    {id:0, type:"최고득점구간", typeColor:"#75942d", overtime:true, ruleText:"경기중 최고 많은 득점이 발생 할 구간(전,후반)을 예측하여 베팅하는 방식" },

    {id:0, type:"스코어", typeColor:"#b538d6", overtime:true, ruleText:"양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:0, type:"스코어 \n (전반전)", typeColor:"#b538d6", overtime:false, ruleText:"전반전만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
    {id:0, type:"스코어 \n (후반전)", typeColor:"#b538d6", overtime:false, ruleText:"후반전만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" },
]

const FootballArray = [
    {id:0, type:"승패 \n (풀타임)", typeColor:"#0056a6", overtime:null, ruleText:"승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"승패 (무X) \n (1쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"1쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:0, type:"승패 (무X) \n (2쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"2쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:0, type:"승패 (무X) \n (3쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"3쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:0, type:"승패 (무X) \n (4쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"4쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" },
    {id:0, type:"승무패 \n (전반전)", typeColor:"#0056a6", overtime:false, ruleText:"전반전(1,2쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (후반전)", typeColor:"#0056a6", overtime:false, ruleText:"후반전(3,4쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (1쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"1쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (2쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"2쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (3쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"3쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"승무패 \n (4쿼터)", typeColor:"#0056a6", overtime:false, ruleText:"4쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"전반 & 전후반", typeColor:"#0056a6", overtime:true, ruleText:"전반전만의 결과와 최종(전후반포함) 각각의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },
    {id:0, type:"전반 & 전후반 \n (풀타임)", typeColor:"#0056a6", overtime:null, ruleText:"전반전만의 결과와 최종(전후반 연장포함) 각각의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" },

    {id:0, type:"핸디캡 \n (풀타임)", typeColor:"#905a12", overtime:null, ruleText:"상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여", ruleText2:"베팅하는 방식 홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨" },
    {id:0, type:"핸디캡 \n (전반전)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 전반전(1,2쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (후반전)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 후반전(3,4쿼터)만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (1쿼터)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 1쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (2쿼터)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 2쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (3쿼터)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 3쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },
    {id:0, type:"핸디캡 \n (4쿼터)", typeColor:"#905a12", overtime:false, ruleText:"핸디캡을 적용하여 4쿼터만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" },

    {id:0, type:"언더오버 \n (풀타임)", typeColor:"#75942d", overtime:null, ruleText:"양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (전반전)", typeColor:"#75942d", overtime:false, ruleText:"전반전(1,2쿼터)만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (후반전)", typeColor:"#75942d", overtime:false, ruleText:"후반전(3,4쿼터)만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (1쿼터)", typeColor:"#75942d", overtime:false, ruleText:"1쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (2쿼터)", typeColor:"#75942d", overtime:false, ruleText:"2쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (3쿼터)", typeColor:"#75942d", overtime:false, ruleText:"3쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },
    {id:0, type:"언더오버 \n (4쿼터)", typeColor:"#75942d", overtime:false, ruleText:"4쿼터만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" },

    {id:0, type:"홀짝 \n (풀타임)", typeColor:"#b538d6", overtime:null, ruleText:"양팀의 최종 득점의 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (전반전)", typeColor:"#b538d6", overtime:false, ruleText:"전반전(1,2쿼터)만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },
    {id:0, type:"홀짝 \n (후반전)", typeColor:"#b538d6", overtime:false, ruleText:"후반전(3,4쿼터)만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" },

    {id:0, type:"최고득점구간", typeColor:"#75942d", overtime:true, ruleText:"경기중 최고 많은 득점이 발생 할 구간(1쿼터, 2쿼터, 3쿼터, 4쿼터)을 예측하여 베팅하는 방식" },
]

const ESportsArray = [
    {id:0, type:"승패 \n (풀타임)", typeColor:"#0056a6", overtime:null, ruleText:"승리가 예상되는 팀(선수)을 선택하여 베팅하는 방식" },
    {id:0, type:"승패 (무X) \n (풀타임)", typeColor:"#0056a6", overtime:null, ruleText:"승리가 예상되는 팀(선수)을 선택하여 베팅하는 방식 (무승부는 적중특례)" },
    {id:0, type:"핸디캡 \n (풀타임)", typeColor:"#905a12", overtime:null, ruleText:"상대적으로 전력이 우수한 팀(선수)에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는", ruleText2:"팀(선수)을 선택하여 베팅하는 방식 홈팀(왼쪽)기준으로 +,-의 핸디캡 기준점수가 표기됨" },

]

const SoccerSubArray = [
    {id:0, title: "연장제외", title2: "연장없음", color: "#dbae00", text: "정규시간 (전반전/후반전)의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)"},
    {id:0, title: "핸디캡 \n (전체)", color: "#905a12", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨"},
    {id:0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨"},
]

const BasketballSubArray = [
    {id:0, title: "연장포함", color: "#ff4800", text: "정규(4쿼터)까지 승부 결과가 나지 않을 경우 연장전의 경기 결과 적용됩니다. (승부치기가 있는경우 승부치기의 결과가 적용됩니다.)"},
    {id:0, title: "연장제외", title2: "연장없음", color: "#dbae00", text: "정규시간 (4쿼터)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)"},
    {id:0, title: "승패 \n (풀타임)", color: "#0056a6", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨"},
    {id:0, title: "핸디캡 \n (전체)", color: "#905a12", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨"},
    {id:0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨"},
]

const BaseballSubArray = [
    {id:0, title: "연장포함", color: "#ff4800", text: "정규(9이닝)까지 승부 결과가 나지 않을 경우 연장전의 경기 결과 적용됩니다. (승부치기가 있는경우 승부치기의 결과가 적용됩니다.)"},
    {id:0, title: "연장제외", title2: "연장없음", color: "#dbae00", text: "정규시간 (9이닝)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)"},
    {id:0, title: "승패 \n (풀타임)", color: "#0056a6", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨"},
    {id:0, title: "핸디캡 \n (전체)", color: "#905a12", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨"},
    {id:0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨"},
    {id:0, title: "콜드게임", color: "#2d6da8", text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨"},
    {id:0, title: "기타", color: "#2d6da8", text: "핸디캡과 언더오버의 경우 정규(9이닝)을 채우지 못한 경기라도 노게임 선언이 아니라면 경기 결과에 반영 합니다.", text2:"(해당리그의 공식협회가 정식 경기 결과로 인정시 결과에 반영함)"},
]

const VolleyballSubArray = [
    {id:0, title: "연장포함", color: "#ff4800", text: "정규(3세트)까지 승부 결과가 나지 않을 경우 연장전의 경기 결과 적용됩니다. (승부치기가 있는경우 승부치기의 결과가 적용됩니다.)"},
    {id:0, title: "연장제외", title2: "연장없음", color: "#dbae00", text: "정규시간 (3세트)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)"},
    {id:0, title: "승패 \n (풀타임)", color: "#0056a6", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨"},
    {id:0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨"},
]

const TennisSubArray = [
    {id:0, title: "연장포함", color: "#ff4800", text: "정규(3세트,5세트)까지 승부 결과가 나지 않을 경우 연장전의 경기 결과 적용됩니다. (승부치기가 있는경우 승부치기의 결과가 적용됩니다.)"},
    {id:0, title: "연장제외", title2: "연장없음", color: "#dbae00", text: "정규(3세트,5세트)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)"},
    {id:0, title: "승패 \n (풀타임)", color: "#0056a6", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨"},
    {id:0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨"},
]

const HockeySubArray = [
    {id:0, title: "연장포함", color: "#ff4800", text: "정규(3피리어드)까지 승부 결과가 나지 않을 경우 연장전의 경기 결과 적용됩니다. (승부치기가 있는경우 승부치기의 결과가 적용됩니다.)"},
    {id:0, title: "연장제외", title2: "연장없음", color: "#dbae00", text: "정규(3피리어드)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)"},
    {id:0, title: "승패 \n (풀타임)", color: "#0056a6", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨"},
    {id:0, title: "핸디캡 \n (전체)", color: "#905a12", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨"},
    {id:0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨"},
]

const HandballSubArray = [
    {id:0, title: "연장제외", title2: "연장없음", color: "#dbae00", text: "정규시간 (전반전/후반전)의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)"},
    {id:0, title: "핸디캡 \n (전체)", color: "#905a12", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨"},
    {id:0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨"},
]

const FootballSubArray = [
    {id:0, title: "연장포함", color: "#ff4800", text: "정규(4쿼터)까지 승부 결과가 나지 않을 경우 연장전의 경기 결과 적용됩니다. (승부치기가 있는경우 승부치기의 결과가 적용됩니다.)"},
    {id:0, title: "연장제외", title2: "연장없음", color: "#dbae00", text: "정규시간 (4쿼터)까지의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)"},
    {id:0, title: "승패 \n (풀타임)", color: "#0056a6", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨"},
    {id:0, title: "핸디캡 \n (전체)", color: "#905a12", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨"},
    {id:0, title: "언더오버 \n (전체)", color: "#75942d", text: "선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨"},
]

const ESportsSubArray = [
    {id:0, title: "승패 \n (풀타임)", color: "#0056a6", text: "연장을 포함하여 무승부일 경우는 미당첨 처리됨"},
    {id:0, title: "핸디캡 \n (전체)", color: "#905a12", text: "선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨"},
]

const HistoryMenu = ({
    itemsArray, 
    setSelectedTab,
    setSelectedSubTab = null
}) => {
    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    console.log(isHover)

    function TabsList({ items }) {
        return items.map((item, index) => {
            let isActive = pathname === item.path
            if (item.path.includes('/cscenter/all/policy/sportsgame')) {
                isActive = true
            }
            return (
                <button 
                    className={`${
                        isActive
                        ? "bg-blue-r0056a6" 
                        : "bg-white border border-gray-b7b7b7"
                    } w-1/2 rounded-full font-spoqaMedium`}
                    style={{height: '6.375rem', fontSize: '2.8125rem', marginRight: `${!index ? '0.9375rem' : '' }`, borderWidth: `${pathname !== item.path && !isActive ? '0.1875rem' : ''}`}} 
                    key={item.id} 

                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        history.push(item.path)
                        setSelectedTab(item.id)
                        if (setSelectedSubTab !== null) {
                            setSelectedSubTab(0)
                        }
                    }}
                    onPointerOut={() => setHover(null)}
                    onPointerCancel={() => setHover(null)}
                >
                    <div >
                        <div className='mt-2'>
                            <span
                                className={`${
                                    isActive
                                    ? "text-white" 
                                    : "text-gray-r7b7b7b"
                                }`}
                            >{item.text}</span>
                        </div>
                    </div>
                </button>
            )
        });
    }

    return (
        <div className="flex w-full">
            <TabsList items={itemsArray} />
        </div>
    )
}

const historyTabsArray = [
    { text: "스포츠게임", icon: Icon1, id: 0, path: "/cscenter/all/policy/sportsgame/soccer" },
    { text: "미니게임", icon: Icon2, id: 1, path: "/cscenter/all/policy/minigame/powerball" },
]


const SportsGamePolicy = ({setSelectedTab}) => {

    const location = useLocation();
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    console.log(`selectedSubTab`, selectedSubTab)

    const tabsArray = [
        { text: "축구", icon: Icon1, id: 0, path: "/cscenter/all/policy/sportsgame/soccer" },
        { text: "농구", icon: Icon2, id: 1, path: "/cscenter/all/policy/sportsgame/basketball" },
        { text: "야구", icon: Icon3, id: 2, path: "/cscenter/all/policy/sportsgame/baseball" },
        { text: "배구", icon: Icon4, id: 3, path: "/cscenter/all/policy/sportsgame/volleyball" },
        { text: "테니스", icon: Icon5, id: 4, path: "/cscenter/all/policy/sportsgame/tennis" },
        { text: "하키", icon: Icon6, id: 5, path: "/cscenter/all/policy/sportsgame/hockey" },
        { text: "핸드볼", icon: Icon7, id: 6, path: "/cscenter/all/policy/sportsgame/handball" },
        { text: "미식축구", icon: Icon8, id: 7, path: "/cscenter/all/policy/sportsgame/football" },
        { text: "e-스포츠", icon: Icon9, id: 8, path: "/cscenter/all/policy/sportsgame/e-sports" }
    ];
    
    return (
        <div>
            <div style={{margin: '1.875rem', marginTop: '0', marginBottom: '2.875rem'}}>
                <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
            </div>
            <div className="w-full flex relative top-0">
                <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                <div style={{paddingLeft: '1.875rem'}} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                    <div className=" flex flex-shrink-0 w-full">
                        <HorizontalSubMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                    </div>
                </div>
                <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full left-0 z-50"></div>
            </div>


            <div style={{margin: "0 5.8125rem", marginTop: '1.5rem', marginBottom: '2.9375rem'}} className="flex flex-wrap items-center justify-center tracking-tight font-spoqa text-gray-r454545">
                <Route path="/cscenter/all/policy/sportsgame/soccer">
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">모든 프로축구 경기는 해당 리그의 공식협회가 인정하는</p>
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                </Route>
                <Route path="/cscenter/all/policy/sportsgame/basketball">
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">모든 프로농구 경기는 해당 공식협회가 인정하는</p>
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                </Route>
                <Route path="/cscenter/all/policy/sportsgame/baseball">
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">모든 프로야구 경기는 해당 리그의 공식협회가 인정하는</p>
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                </Route>
                <Route path="/cscenter/all/policy/sportsgame/volleyball">
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">모든 프로배구 경기는 해당 공식협회가 인정하는</p>
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                </Route>
                <Route path="/cscenter/all/policy/sportsgame/tennis">
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">모든 테니스 경기는 해당 리그의 공식협회가 인정하는</p>
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                </Route>
                <Route path="/cscenter/all/policy/sportsgame/hockey">
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">모든 아이스하키 경기는 해당 공식협회가 인정하는</p>
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                </Route>
                <Route path="/cscenter/all/policy/sportsgame/handball">
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">모든 핸드볼 경기는 해당 공식협회가 인정하는</p>
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                </Route>
                <Route path="/cscenter/all/policy/sportsgame/football">
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">모든 미식축구 경기는 해당 공식협회가 인정하는</p>
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                </Route>
                <Route path="/cscenter/all/policy/sportsgame/e-sports">
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">모든 e-스포츠 경기는 해당 리그의 공식협회가 인정하는</p>
                    <p style={{fontSize: '2.625rem'}} className="text-gray-r7b7b7b text-center w-full">경기 결과대로 반영됩니다.</p>
                </Route>        
            </div>


            <Route path="/cscenter/all/policy/sportsgame/soccer">
                <SportsGamePolicyTable1 array={SoccerArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/basketball">
                <SportsGamePolicyTable1 array={BasketballArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/baseball">
                <SportsGamePolicyTable1 array={BaseballArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/volleyball">
                <SportsGamePolicyTable1 array={VolleyballArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/tennis">
                <SportsGamePolicyTable1 array={TennisArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/hockey">
                <SportsGamePolicyTable1 array={HockeyArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/handball">
                <SportsGamePolicyTable1 array={HandballArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/football">
                <SportsGamePolicyTable1 array={FootballArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/e-sports">
                <SportsGamePolicyTable1 array={ESportsArray} />
            </Route>


            <Route path="/cscenter/all/policy/sportsgame/soccer">
                <SportsGamePolicyTable2 array={SoccerSubArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/basketball">
                <SportsGamePolicyTable2 array={BasketballSubArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/baseball">
                <SportsGamePolicyTable2 array={BaseballSubArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/volleyball">
                <SportsGamePolicyTable2 array={VolleyballSubArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/tennis">
                <SportsGamePolicyTable2 array={TennisSubArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/hockey">
                <SportsGamePolicyTable2 array={HockeySubArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/handball">
                <SportsGamePolicyTable2 array={HandballSubArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/football">
                <SportsGamePolicyTable2 array={FootballSubArray} />
            </Route>
            <Route path="/cscenter/all/policy/sportsgame/e-sports">
                <SportsGamePolicyTable2 array={ESportsSubArray} />
            </Route>

            <div style={{marginBottom: '14rem'}} />

            <BottomNavbar />

        </div>
    )
}

export default SportsGamePolicy
