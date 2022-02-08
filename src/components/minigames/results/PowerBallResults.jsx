import React from 'react'

const PowerBallResults = ({array}) => {

    function Cells({ items }) {
        return items.map(item => (
            <div 
                style={{height: "10.6875rem", borderBottomWidth: '0.1875rem', fontSize: '2.25rem', backgroundColor: item.count % 2 === 0 ? "#ffffff" : "#fafafa"}} 
                className="flex flex-wrap font-spoqa tracking-tight text-gray-r585858 w-full border-b border-gray-efefef"
            >
                <div style={{width: "10.875rem"}} className="flex justify-center items-center"><div className='text-center'><p>{item.count}</p><p>{item.powerball}</p></div></div>
                <div style={{width: "20.0625rem"}} className="flex justify-center items-center"><div className='text-center'><p>{item.chosenNum}</p><p style={{color:"#0056a6"}}>{item.powerballOdd ? "홀" : "짝"}</p></div></div>
                <div style={{width: "20.0625rem"}} className="flex justify-center items-center"><div className='text-center'><p>{item.numberSum}</p><p>{item.size}</p></div></div>
                <div style={{width: "20.0625rem", color:"#e9441d"}} className="flex justify-center items-center"><div className='text-center'><p>{item.odd ? "홀" : "짝"}</p><p className='text-gray-r585858'>{item.range}</p></div></div>

                {/* <div style={{width: "10.875rem"}} className="text-center">{item.powerball}</div> */}
                {/* <div style={{width: "20.0625rem", color:"#0056a6"}} className="text-center">{item.powerballOdd ? "홀" : "짝"}</div> */}
                {/* <div style={{width: "20.0625rem"}} className="text-center">{item.size}</div> */}
                {/* <div style={{width: "20.0625rem"}} className="text-center">{item.range}</div> */}
            </div>
        ));
    }

    return (
        <div className="w-full p-12 pb-0">
            <div className="font-spoqaMedium tracking-tight text-gray-r454545">
                <div style={{fontSize: '2.25rem'}} className='flex flex-wrap w-full'>
                   <div style={{marginBottom: '0.1875rem'}} className='flex w-full'>
                        <div style={{width: "10.875rem", height: '5.25rem', marginRight:'0.1875rem', borderTopLeftRadius: '0.625rem', borderBottomLeftRadius: '0.625rem'}} className="flex justify-center items-center bg-gray-efefef">회차</div>
                        <div style={{width: "20.0625rem", height: '5.25rem', marginRight:'0.1875rem'}} className="flex justify-center items-center bg-gray-efefef">당첨번호결과</div>
                        <div style={{width: "20.0625rem", height: '5.25rem', marginRight:'0.1875rem'}} className="flex justify-center items-center bg-gray-efefef">숫자 합</div>
                        <div style={{width: "20.0625rem", height: '5.25rem', borderTopRightRadius: '0.625rem', borderBottomRightRadius: '0.625rem'}} className="flex justify-center items-center bg-gray-efefef">홀/짝</div>
                   </div>
                   <div className='flex w-full'>
                        <div style={{width: "10.875rem", height: '5.25rem', marginRight:'0.1875rem', borderTopLeftRadius: '0.625rem', borderBottomLeftRadius: '0.625rem'}} className="flex justify-center items-center bg-gray-efefef">파워볼</div>
                        <div style={{width: "20.0625rem", height: '5.25rem', marginRight:'0.1875rem'}} className="flex justify-center items-center bg-gray-efefef">파워볼 홀/짝</div>
                        <div style={{width: "20.0625rem", height: '5.25rem', marginRight:'0.1875rem'}} className="flex justify-center items-center bg-gray-efefef">대/중/소</div>
                        <div style={{width: "20.0625rem", height: '5.25rem', borderTopRightRadius: '0.625rem', borderBottomRightRadius: '0.625rem'}} className="flex justify-center items-center bg-gray-efefef">파워볼 구간</div>
                   </div>
                </div>
            </div>
            <div className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                <Cells items={array} />
            </div>
        </div>      
    )
}

export default PowerBallResults
