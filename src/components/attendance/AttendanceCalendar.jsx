import React from "react";
import { 
    startOfWeek, 
    format, 
    addDays, 
    startOfMonth, 
    endOfMonth,
    endOfWeek, 
    isSameMonth, 
    addMonths,
    subMonths
} from 'date-fns'
import Arrow from '../../images/arrows/chevron_right.png'
import AttendanceEmpty from '../../images/attendance/attendance_empty.png'
import AttendanceFilled from '../../images/attendance/attendance_filled.png'

class Calendar extends React.Component {
  state = {
    today: new Date(),
    currentMonth: new Date(),
    currendDate: new Date(),
    selectedDate: new Date(),
    isChecked: false
  };

  renderHeader() {
    const dateFormat1 = "yyyy";
    const dateFormat2 = "MM";

    return (
        <div className="flex items-center w-full justify-center h-23px space-x-30px mt-10px mb-30px">
            <img className={`cursor-pointer transform rotate-180 hover:opacity-75`} onClick={this.prevMonth} src={Arrow} alt="" />
            <div className="flex items-center h-23px text-blue-r0056a6">
                <div className="flex items-center font-roboto text-32px h-23px">{format(this.state.currentMonth, dateFormat1)}</div>
                <div className="flex items-center font-spoqaMedium text-25px h-23px pt-px -ml-4px">년</div>
                <div className="flex items-center font-roboto text-32px h-23px ml-6px">{format(this.state.currentMonth, dateFormat2)}</div>
                <div className="flex items-center font-spoqaMedium text-25px h-23px pt-px">월</div>
            </div>
            <img className={`${this.state.currentMonth < this.state.today ? "opacity-100 hover:opacity-75" : "opacity-20"} cursor-pointer`} onClick={this.nextMonth} src={Arrow} alt="" />

        </div>
    );
  }

    renderDays() {
        return (
            <div className="text-21px font-spoqaBold text-gray-r454545 flex h-50px border-l rounded-t-lg border-gray-dddddd">
                <div className="w-full flex items-center justify-center text-red-600">일</div>
                <div className="w-full flex items-center justify-center">월</div>
                <div className="w-full flex items-center justify-center">화</div>
                <div className="w-full flex items-center justify-center">수</div>
                <div className="w-full flex items-center justify-center">목</div>
                <div className="w-full flex items-center justify-center">금</div>
                <div className="w-full flex items-center justify-center">토</div>
            </div>
        )
    }

    renderCells() {
        const { currentMonth, currendDate, isChecked } = this.state;
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = "d";
        const dateFormat1 = "MM/dd";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";
        let formattedDate1 = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
              formattedDate = format(day, dateFormat);
              formattedDate1 = format(day, dateFormat1);
              days.push(
                    <div
                        style={{height:"130px"}}
                        className="relative w-full border-t border-l border-gray-dddddd flex items-center justify-center"
                        key={day}
                    >
                        <div className={`${
                            i === 0 
                            ? " text-red-600"
                            : " text-gray-r454545"} 
                            text-21px font-roboto mt-19px ml-18px h-full w-full flex items-start justify-start`}
                        >
                            <p>{isSameMonth(day, monthStart) && formattedDate}</p>
                        </div>
                        {isSameMonth(day, monthStart) && (
                            <img className="absolute" src={isChecked && format(currendDate, dateFormat1) === formattedDate1 ? AttendanceFilled : AttendanceEmpty} alt="" />
                        )}
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="flex" key={day}>
                  {days}
                </div>
            );
            days = [];
        }

        return <div style={{height: "", width: "1112px"}} className="overflow-hidden">{rows}</div>;
    }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    if (this.state.currentMonth  <  this.state.today) {
      this.setState({
        currentMonth: addMonths(this.state.currentMonth, 1)
      });
    }
    
  };

  prevMonth = () => {
      this.setState({
        currentMonth: subMonths(this.state.currentMonth, 1)
      });
    
  };

  checkAttendance = () => {
      this.setState({
          isChecked: true
      })
  }

  render() {
    return (
      <div className="w-full flex flex-col items-center">
        {this.renderHeader()}
        <div 
            style={{width:"1260px"}} 
            className="relative bg-gray-fafafa rounded-3xl shadow-subNavbar border border-gray-dddddd p-73px flex justify-center"
        >
            <div className="bg-white rounded-lg border-t border-b border-r border-gray-dddddd overflow-hidden">
                {this.renderDays()}
                {this.renderCells()}
            </div>
        
            <div className="absolute bottom-0 h-19px flex items-center text-20px font-spoqaMedium mb-26px text-gray-r454545 tracking-tight">
                2021년 07월은 총 
                <p className="mx-4px font-spoqaBold text-blue-r0056a6">7일</p>
                출석 하였습니다
            </div>
        </div>
        <button 
          className="flex items-center justify-center h-52px w-192px rounded-4px bg-blue-r0070d9 mt-20px mb-63px hover:opacity-75"
          onClick={this.checkAttendance}
        >
            <div className="flex items-center justify-center h-50px w-190px bg-black rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                <span className="font-spoqaMedium tracking-tight text-16px text-white">출석체크하기</span>
            </div>
        </button>

      </div>
    );
  }
}

export default Calendar;