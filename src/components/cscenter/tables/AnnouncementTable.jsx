import React from 'react'
import { useHistory } from 'react-router';

const ExampleArray = [
    {
        id: 0,
        type: "스포츠북",
        title: "농구[쿼터] / 배구[세트] 스페셜 규정",
        isNew: true,
        time: "2021.06.29"
    },
    {
        id: 1,
        type: "스포츠북",
        title: "야구스포츠 스페셜 규정",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 2,
        type: "스포츠북",
        title: "예비 도메인 안내",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 3,
        type: "기타",
        title: "은행별 점검시간안내",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 4,
        type: "기타",
        title: "스포츠 종목별 규정",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 5,
        type: "스포츠북",
        title: "미니게임 통합규정",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 6,
        type: "미니게임",
        title: "스포츠게임 관련규정",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 7,
        type: "카지노",
        title: "에볼루션카지노 이용안내",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 8,
        type: "스포츠북",
        title: "라이브 베팅 기본규정",
        isNew: false,
        time: "2021.06.29"
    },
    {
        id: 9,
        type: "스포츠북",
        title: "핸디캡의 이해",
        isNew: false,
        time: "2021.06.29"
    },
    
]

const AnnouncementTable = () => {

    const history = useHistory();

    function Cells({ items }) {
        return items.map(item => (
            <tr 
                style={{backgroundColor: item.id % 2 === 0 ? "#fefefe" : "#f7f9fb"}} 
                className="bg-gray-fefefe text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd group"
            >
                <td style={{width: "173px"}} className="h-56px text-center text-blue-r0056a6 ">{item.type}</td>
                <td  style={{width: "698px"}} className="w-full h-56px flex items-center space-x-10px">
                    <p className="group-hover:text-black">{item.title}</p>
                    {item.isNew && (
                        <div className="w-17px h-17px bg-red-notification rounded-full text-12px text-white flex items-center justify-center font-roboto pr-px">
                            N
                        </div>
                    )}
                </td>
                <td style={{width: "111px"}} className="w-full text-center pr-60px font-spoqa">{item.time}</td>
            </tr>
        ));
    }

    return (
        <table style={{borderRadius:"1em"}} className="shadow-subNavbar overflow-hidden w-full">
            <thead className="bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td style={{width: "173px"}} className="text-center">구분</td>
                    <td style={{width: "698px"}} className="w-full text-center pr-44px">제목</td>
                    <td style={{width: "111px"}} className="w-full text-center pr-60px">등록일</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium cursor-pointer" onClick={() => history.push('/cscenter/announcement/view')}>
                <Cells items={ExampleArray} />
            </tbody>
        </table>  
    )
}

export default AnnouncementTable
