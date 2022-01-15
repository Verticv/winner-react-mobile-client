import React from 'react'

const SelectAllButton = (
    {
        isAllSelected,
        setCheckedState,
        setAllSelected,
        count = 3,
        buttonsNumber = 2,
        btn1Text = '선택삭제',
        btn2Text = '내역올리기',
    }) => {

    function allSelectButtonPressed() {
        if (isAllSelected) {
            setCheckedState(Array(count).fill(false))
        } else {
            setCheckedState(Array(count).fill(true))
        }
        setAllSelected(!isAllSelected)
    }
    
    if (buttonsNumber === 3) {
        return (
            <div style={{margin: '3.75rem 1.875rem', marginTop: '1.875rem', marginBottom: '2.5rem'}} className="flex items-center justify-between">
                <div className="flex w-full">
                    <button 
                        style={{padding: '1px', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center mr-4 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                        onClick={() => allSelectButtonPressed()}
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #555555, #333333)",
                            }}
                            className="flex items-center justify-center h-full w-full rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button 
                        style={{padding: '1px', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center mr-4 rounded-2xl bg-brown-r7e3636 hover:opacity-75"
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                            }}
                            className="flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 cursor-pointer"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">{btn1Text}</span>
                        </div>
                    </button>
                    <button 
                        style={{padding: '1px', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center rounded-2xl bg-blue-r0070d9 hover:opacity-75"
                        onClick={() => allSelectButtonPressed()}
                    >
                        <div 
                            className="flex items-center justify-center h-full w-full rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">{btn2Text}</span>
                        </div>
                    </button>
                </div>
            </div>
          )
    }

    return (
        <div style={{margin: '3.75rem 1.875rem', marginTop: '1.875rem', marginBottom: '2.5rem'}} className="flex items-center justify-between">
                <div className="flex w-full space-x-2px">
                    <button 
                        style={{padding: '1px', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center mr-4 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                        onClick={() => allSelectButtonPressed()}
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #555555, #333333)",
                            }}
                            className="flex items-center justify-center h-full w-full rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white mt-1.5">{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button 
                        style={{padding: '1px', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center m-0 rounded-2xl bg-brown-r7e3636 hover:opacity-75"
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                            }}
                            className="flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 cursor-pointer"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white mt-1.5">{btn1Text}</span>
                        </div>
                    </button>
                </div>
            </div>
    )
}

export default SelectAllButton

