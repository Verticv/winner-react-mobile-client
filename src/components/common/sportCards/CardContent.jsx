import React from 'react';
import UploadIcon from '../../../images/newImages/upload.png'
import CloseIcon from '../../../images/newImages/close-white.png'

const CardContent = ({
    checkedState = null,
    index = null,
    winAmount= '0',
    withButtons=true,
    withInput=true,
    setCheckedState = null,
    showBetNumber=true,
    withUploadButton=false,
    uploadHandler=null,
    withCancelButton=false,
    cancelHandler=null,
    id=0,
    number="1",
    hasHistory = null,
    time = " 2021-06-29 15:45",
    isPopup = true,
    type
  }) => {

    const handleOnChange = () => {

        setCheckedState(checkedState => {
            return checkedState.map((item, j) => {
                console.log(j)
              return `${j}` === number ? !item : item
            })
          })

        console.log(checkedState)
        // console.log(updatedCheckedState)
        
        console.log("Position : ", number)
    }; 

  return (
    <>
      <div style={{margin: '1.9375rem', marginBottom: '0', marginTop: '2.0625rem'}} className={`flex flex-wrap items-center h-full  ${ withUploadButton || withCancelButton ? 'justify-between' : ''}`}>
          
          <div style={{width: ''}} className='flex items-center'>
            {withInput && (
                <div style={{marginRight: "3rem"}} className="relative text-left">
                    <label className="form-control">
                        <input
                            key={Math.random()}
                            className='w-12 h-12'
                            type="checkbox"
                            checked={checkedState[number]}
                            onChange={() => handleOnChange()}
                        />
                    </label>
                </div>
            )}
            <div>
              {showBetNumber && (
              <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', marginBottom: '0.375rem'}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅번호 :</span> 1891241599</div>)}
              <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', marginBottom: '0.375rem'}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅시간 :</span>{time}</div>
              {hasHistory && (
                <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', marginBottom: '0.375rem'}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅내역 :</span>{hasHistory}</div>
              )}
              <div style={{marginBottom: '0.375rem'}} className='flex'>
                  <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', marginRight: '3.8125rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅금액 :</span> 5,000</div>
                  <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>배당률 :</span> 4.34</div>
              </div>
              {isPopup ? (
                  <>
                  <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', marginRight: '3.8125rem', marginBottom: '0.375rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>예상적중금액 :</span> 20,000</div>
                  <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>당첨금 :</span> <span className={`${winAmount.includes("+") && "text-red-d52e2e"}`}>{winAmount}</span></div>
                  </>
              ) : (
                <div className='flex'>
                    <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', marginRight: '3.8125rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>예상적중금액 :</span> 20,000</div>
                    <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>당첨금 :</span> <span className={`${winAmount.includes("+") && "text-red-d52e2e"}`}>{winAmount}</span></div>
                </div>
              )}
              
            </div>
          </div>
            {withUploadButton === true && (
                <button 
                    onClick={() => uploadHandler(id)} 
                    style={{width: '9rem', height: '9rem',  padding: '1px'}}
                    className="flex items-center bg-blue-r286fce justify-center rounded-2xl hover:opacity-75"
                    >
                    <div className="flex w-full h-full items-center justify-center flex-wrap rounded-2xl border border-blue-r70a8f5 bg-gradient-to-b from-blue-r1491fc to-blue-r0675db cursor-pointer">
                        <img style={{width: '3.1875rem', height: '3.25rem'}} className="object-contain" src={UploadIcon} alt="" />
                    </div>
                </button>
            )}
            {withCancelButton && (
               <button 
                    onClick={() => cancelHandler(id)} 
                    style={{width: '9rem', height: '9rem',  padding: '1px'}}
                    className="flex items-center justify-center rounded-2xl hover:opacity-75 bg-brown-r7e3636"
                >
                    <div 
                        className="flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 bg-gradient-to-b from-red-f03a50 to-red-cf254d cursor-pointer"
                    >
                        <img style={{width: '2.5rem', height: '2.5rem'}} className="object-contain" src={CloseIcon} alt="" />
                    </div>
                </button>
            )}
      </div>
        {withButtons && (
            <div style={{margin: '3.75rem 0.875rem', marginTop: '1.875rem', marginBottom: '0'}} className="flex items-center justify-between">
                <div className="flex w-full">
                    <button 
                        style={{padding: '1px', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center mr-4 rounded-2xl bg-blue-r0070d9 hover:opacity-75"
                        // onClick={() => allSelectButtonPressed()}
                    >
                        <div 
                            className="flex items-center justify-center h-full w-full rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">내역올리기</span>
                        </div>
                    </button>
                    <button 
                        style={{padding: '1px', height: '7.3125rem'}}
                        className="flex flex-1 items-center justify-center m-0 rounded-2xl bg-brown-r7e3636 hover:opacity-75"
                    >
                        <div 
                            className="flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 bg-gradient-to-b from-red-f03a50 to-red-cf254d cursor-pointer"
                        >
                            <span style={{fontSize: '2.8125rem'}} className="font-spoqaMedium tracking-tight text-14px text-white pt-px">내역삭제</span>
                        </div>
                    </button>
                </div>
            </div>
        )}
    </>
  )
}

export default CardContent;
