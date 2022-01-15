import React from 'react';
import UploadIcon from '../../../images/newImages/upload.png'
import CloseIcon from '../../../images/newImages/close-white.png'

const CardContent = ({
    checkedState = null,
    type = 0,
    winAmount= '0',
    withButtons=true,
    withInput=true,
    setCheckedState = null,
    showBetNumber=true,
    withUploadButton=false,
    uploadHandler=null,
    withCancelButton=false,
    cancelHandler=null,
    id=0
  }) => {
    const handleOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
      setCheckedState(updatedCheckedState);
  }; 
  return (
    <>
      <div style={{margin: '1.875rem', marginBottom: '0'}} className={`flex flex-wrap items-center h-full  ${ withUploadButton || withCancelButton ? 'justify-between' : 'w-full'}`}>
          {withInput && (
            <div style={{width: '5.8125rem'}} className="relative text-left pt-7px">
                <label className="form-control">
                    <input
                            className='w-12 h-12'
                            type="checkbox"
                            checked={checkedState?.[type]}
                            onChange={() => handleOnChange(type)}
                        />
                </label>
            </div>
          )}
          <div style={{width: ''}}>
              {showBetNumber && (<div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅번호 :</span> 1891241599</div>)}
              <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="w-full font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅시간 :</span> 2021-06-29 15:45</div>
              <div className='flex'>
                  <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', marginRight: '3.8125rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>베팅금액 :</span> 5,000</div>
                  <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>배당률 :</span> 4.34</div>
              </div>
              <div className='flex'>
                  <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem', marginRight: '3.8125rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>예상적중금액 :</span> 20,000</div>
                  <div style={{WebkitTextStroke:"0.2px", fontSize: '2.625rem'}} className="font-spoqa text-left text-gray-r7b7b7b"><span className='font-spoqaMedium text-gray-r585858' style={{fontSize: '2.625rem'}}>당첨금 :</span> <span className={`${winAmount.includes("+") && "text-red-d52e2e"}`}>{winAmount}</span></div>
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
            <div style={{margin: '3.75rem 1.875rem', marginTop: '2.8125rem', marginBottom: '0'}} className="flex items-center justify-between">
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
                        style={{padding: '1px', height: '7.3125rem', backgroundColor: '#7e3636'}}
                        className="flex flex-1 items-center justify-center m-0 rounded-2xl bg-brown-7e3636 hover:opacity-75"
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
