import React from 'react'

const SelectAllButton = ({isAllSelected, setCheckedState, setAllSelected, count = 3}) => {

    function allSelectButtonPressed() {
        if (isAllSelected) {
            setCheckedState(Array(count).fill(false))
        } else {
            setCheckedState(Array(count).fill(true))
        }
        setAllSelected(!isAllSelected)
    }

    return (
        <div style={{margin: '3.75rem 1.875rem', marginTop: '1.875rem'}} className="flex items-center justify-between">
                <div className="flex w-full space-x-2px">
                    <button 
                        style={{borderRadius:"4px", padding: '0.1875rem', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center mr-4 rounded-md bg-gray-r171a1d hover:opacity-75"
                        onClick={() => allSelectButtonPressed()}
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #555555, #333333)",
                                borderRadius: "3px"
                            }}
                            className="flex items-center justify-center h-full w-full rounded-lg border border-gray-r737579 cursor-pointer"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button 
                        style={{borderRadius:"4px", padding: '0.1875rem', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center m-0 rounded-md bg-red-cb4343 hover:opacity-75"
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                                borderRadius: "3px"
                            }}
                            className="flex items-center justify-center h-full w-full rounded-lg border border-red-f36576 cursor-pointer"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">선택삭제</span>
                        </div>
                    </button>
                </div>
            </div>
    )
}

export default SelectAllButton
