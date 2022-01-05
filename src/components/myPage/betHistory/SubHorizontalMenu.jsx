import React, { useState } from 'react'

const SubHorizontalMenu = ({
    itemsArray, 
    isState = 0, 
    setState
}) => {

    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map((item, index) => {
            // TODO: remove this
            let imageWidth = '5.81rem'
            if (index === 1) {
                imageWidth = '15rem';
            } else if (index === 2 ) {
                imageWidth = '14.3rem';
            } else if (index === 3 ) {
                imageWidth = '12.25rem';
            } else if (index === 4 ) {
                imageWidth = '13rem';
            } else if (index === 5 ) {
                imageWidth = '12rem';
            } else if (index === 6 ) {
                imageWidth = '16rem';
            }

            return (
                <button 
                    style={{
                        borderRadius:"1.625rem",
                        width: '20.81rem',
                        height: '13.18rem',
                        marginRight: '0.9375rem',
                    }}
                    key={item.id} 
                    className={`${
                        isState === item.id
                        ? "bg-d0e8ff" 
                        : "bg-white"
                    } overflow-hidden flex items-end`} 
                    onClick={() => setState(item.id)}
                    onMouseOver={() => setHover(item.id)}
                    onMouseLeave={() => setHover(null)}
                >
                    <div 
                        style={{
                            borderRadius: '1.625rem',
                            borderWidth: '0.1875rem',
                            background: isState === item.id 
                            ? "#d0e8ff"
                            : isHover === item.id 
                            ? "#d0e8ff"
                            : "#fff"
                        }}
                        className={`h-full w-full rounded-b-md rounded-t-lg flex flex-col items-center justify-center border-gray-b7b7b7`}
                    >
                        <img style={{ width: imageWidth, marginTop: '0.6rem'}} className="h-full ml-2px w-10 object-contain" src={item.icon} alt="" />
                        <div style={{marginTop: '-0.75rem'}} className='h-28'>
                            <span  className={`text-4xl font-spoqaMedium tracking-tight text-gray-r7b7b7b ${item.custom}`} >{item.text}</span>
                        </div>
                    </div>
                </button>
            )
        });
    }

    return (
      <div id="container" className="flex justify-start items-start">
        <TabsList items={itemsArray} />
      </div>
    );
}

export default SubHorizontalMenu
