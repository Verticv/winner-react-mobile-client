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
                imageWidth = '14rem';
            } else if (index === 2 ) {
                imageWidth = '14.3rem';
            } else if (index === 3 ) {
                imageWidth = '12.25rem';
            } else if (index === 4 ) {
                imageWidth = '9rem';
            } else if (index === 5 ) {
                imageWidth = '11rem';
            } else if (index === 6 ) {
                imageWidth = '13rem';
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
                        className={`mt-px h-full w-full rounded-b-md rounded-t-lg flex flex-col items-center justify-center border-gray-b7b7b7`}
                    >
                        <img style={{ width: imageWidth}} className="h-full mt-2 ml-2px w-10 object-contain" src={item.icon} alt="" />
                        <div className='h-24'>
                            <span style={{marginTop: '1.68rem'}} className={`text-4xl font-spoqaMedium tracking-tight text-gray-r7b7b7b mb-10px mt-2px ${item.custom}`} >{item.text}</span>
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
