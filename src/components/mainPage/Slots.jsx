import React from 'react'
import SlotBackground from '../../images/slots/slot_background.png'
import RankIcon1 from '../../images/slots/rankicon_1.png'
import RankIcon2 from '../../images/slots/rankicon_2.png'
import RankIcon3 from '../../images/slots/rankicon_3.png'
import RankIcon4 from '../../images/slots/rankicon_4.png'

const Slots = () => {

    const tabsArray = [
        { text: "슬롯잭팟", icon: RankIcon1, amount: "10,111,111", currency: "￦", iconClass: "object-none h-32px mt-29px ml-90px", textClass: "mt-30px ml-8px", id: 0 },
        { text: "슬롯랭킹TOP", icon: RankIcon2, amount: "22,222,222", currency: "￦", iconClass: "object-none h-40px mt-25px ml-73px", textClass: "mt-29px ml-10px", id: 1 },
        { text: "오늘의출금TOP", icon: RankIcon3, amount: "33,333,333", currency: "￦", iconClass: "object-none h-36px mt-27px ml-63px", textClass: "mt-28px ml-11px", id: 2 },
        { text: "금주의출금TOP", icon: RankIcon4, amount: "44,444,444", currency: "￦", iconClass: "object-none h-40px mt-25px ml-64px", textClass: "mt-28px ml-9px", id: 3 }
    ];

    function SlotList({ items }) {
        return items.map(item => (
            <div className="relative w-308px h-182px select-none cursor-pointer" key={item.id}>
                <div className="absolute w-308px h-81px flex">
                    <img className={item.iconClass} src={item.icon} alt="icon" />
                    <span className={`font-spoqaBold text-20px text-gray-r536073 tracking-tight pt-2px ${item.textClass} ${item.id === 3 && "pl-5px"}`}>{item.text}</span>
                </div>
                <span className="absolute z-30 text-28px text-white bottom-0 left-0 mb-44px ml-22px font-spoqaMedium drop-shadow-xl text-shadow">{item.currency}</span>
                <span className="absolute z-30 text-42px text-white bottom-0 right-0 mb-33px mr-21px tracking-wider font-digital text-shadow">{item.amount}</span>
                <img className="object-none w-308px h-182px z-10" src={SlotBackground} alt="background" />
            </div>
        ));
    }

    return (
        <div className="flex w-full items-center justify-between space-x-10px">
            <SlotList items={tabsArray} />
        </div>
    )
}

export default Slots
