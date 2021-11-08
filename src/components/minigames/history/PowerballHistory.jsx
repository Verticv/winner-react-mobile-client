import React from 'react'

const PowerballHistory = ({array, checkedState, setCheckedState}) => {

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }; 

    function InboxList({ items }) {
        return items.map(item => (
            <div 
                style={{height: "62px", backgroundColor: item.id % 2 === 0 ? "#ffffff" : "#f7f9fc" }} 
                className="flex items-center justify-start font-spoqa text-14px tracking-tight text-gray-r585858 border-b border-gray-dddddd"
            >        
                <div style={{width: "60px"}} className="flex justify-center ml-28px">
                    <input
                        type="checkbox"
                        checked={checkedState[item.id]}
                        onChange={() => handleOnChange(item.id)}
                    />
                </div>
                <div style={{width: "117px", WebkitTextStroke:"0.2px"}} className="flex justify-center">{item.number}</div>
                <div style={{width: "147px", WebkitTextStroke:"0.2px"}} className="flex justify-center">{item.eventCount}</div>
                <div style={{width: "170px", WebkitTextStroke:"0.2px"}} className="flex justify-center">{item.betTime}</div>
                <div style={{width: "164px", WebkitTextStroke:"0.2px"}} className="flex justify-center">{item.type}</div>
                <div style={{width: "95px"}} className="flex justify-center items-center">
                    <div 
                        style={{
                            backgroundColor: 
                            item.historyType === 0 
                            ? "#d52e2e" 
                            : item.historyType === 1 
                            ? "#00c051" 
                            : item.historyType === 2 
                            ? "#d52e2e" 
                            : item.historyType === 3 
                            ? "#2e6dd5"
                            : ""
                        }} 
                        className="h-44px w-44px rounded-full bg-black text-white flex items-center justify-center text-14px font-spoqaMedium tracking-tight pt-2px"
                    >
                        {
                        item.historyType === 0 
                        ? "짝" 
                        : item.historyType === 1 
                        ? (
                            <div className="flex flex-col items-center justify-center -space-y-6px -mt-2px">
                                <span>홀소</span>
                                <span style={{fontSize:"9px"}}>(15~64)</span>
                            </div>
                        )
                        : item.historyType === 2
                        ? (
                            <div className="flex flex-col items-center justify-center -space-y-6px -mt-2px">
                                <span>오버</span>
                                <span style={{fontSize:"9px"}}>72.5</span>
                            </div>
                        )
                        : item.historyType === 3
                        ? "홀"
                        : ""   
                    }
                    </div>
                </div> 
                <div style={{width: "126px", WebkitTextStroke:"0.2px"}} className="flex justify-center">{item.percentage}</div>
                <div style={{width: "112px", WebkitTextStroke:"0.2px"}} className="flex justify-end">{item.betAmount}</div>
                <div style={{width: "121px", color: item.profit.includes("+") ? "#d52e2e" : "#585858", WebkitTextStroke:"0.2px"}} className="flex justify-end">{item.profit}</div>
                <div style={{width: "107px", color: item.win ? "#d52e2e" : "#585858", WebkitTextStroke:"0.2px"}} className="flex justify-center">{item.win === true ? "승" : "패"}</div>
            </div>
        ));
    }

    return (
        <div className="w-full ">

            <div className="flex items-center justify-start bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">        
                <div style={{width: "60px"}} className="flex justify-center ml-28px">선택</div>
                <div style={{width: "117px"}} className="flex justify-center">번호</div>
                <div style={{width: "147px"}} className="flex justify-center">회차</div>
                <div style={{width: "170px"}} className="flex justify-center">베팅시간</div>
                <div style={{width: "164px"}} className="flex justify-center">게임분류</div>
                <div style={{width: "95px"}} className="flex justify-center">베팅내역</div>
                <div style={{width: "126px"}} className="flex justify-center">배당률</div>
                <div style={{width: "112px"}} className="flex justify-center">베팅금액</div>
                <div style={{width: "121px"}} className="flex justify-center">적중/손실</div>
                <div style={{width: "107px"}} className="flex justify-center">승리</div>
            </div>

            <InboxList items={array} />
        </div>
    )
}

export default PowerballHistory
