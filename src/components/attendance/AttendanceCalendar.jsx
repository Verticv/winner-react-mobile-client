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
        <div style={{height: '10.0625rem'}} className="flex items-center w-full justify-center">
            <img style={{height: '2.125rem', width: '1.3125rem'}} className={`cursor-pointer transform rotate-180 hover:opacity-75`} onClick={this.prevMonth} src={Arrow} alt="" />
            <div style={{fontSize: '2.625rem', margin: '0 2.8125rem'}} className="flex items-center text-blue-r0056a6">
                <div style={{fontSize: '3.375rem'}} className="flex items-center font-roboto">{format(this.state.currentMonth, dateFormat1)}</div>
                <div className="flex items-center font-spoqaMedium">년 &nbsp;</div>
                <div style={{fontSize: '3.375rem'}} className="flex items-center font-roboto">{format(this.state.currentMonth, dateFormat2)}</div>
                <div className="flex items-center font-spoqaMedium">월</div>
            </div>
            <img style={{height: '2.125rem', width: '1.3125rem'}} className={`${this.state.currentMonth < this.state.today ? "opacity-100 hover:opacity-75" : "opacity-20"} cursor-pointer`} onClick={this.nextMonth} src={Arrow} alt="" />

        </div>
    );
  }

    renderDays() {
        return (
            <div style={{height: '5.625rem', fontSize: '2.25rem'}} className="font-spoqaBold text-gray-r454545 flex border-l rounded-t-lg border-gray-dddddd">
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
                        style={{height:"10rem", width: '10rem'}}
                        className="relative w-full border-t border-l border-gray-dddddd flex items-center justify-center"
                        key={day}
                    >
                        <div
                          style={{marginLeft: '1rem', marginTop: '0.625rem'}} 
                          className={`${
                            i === 0 
                            ? " text-red-600"
                            : " text-gray-r454545"} 
                            font-roboto h-full w-full flex items-start justify-start`}
                        >
                            <p style={{fontSize: '2.0625rem'}}>{isSameMonth(day, monthStart) && formattedDate}</p>
                        </div>
                        {isSameMonth(day, monthStart) && (
                            <img style={{height: '5.75rem', width: '6.25rem', marginLeft: '0.25rem'}} className="absolute" src={isChecked && format(currendDate, dateFormat1) === formattedDate1 ? AttendanceFilled : AttendanceEmpty} alt="" />
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
            style={{padding: '0 2.125rem', paddingTop: '5.8125rem'}} 
            className="w-full relative bg-gray-fafafa rounded-3xl shadow-subNavbar border border-gray-dddddd flex flex-wrap justify-center"
        >
            <div className="bg-white w-full rounded-lg border-t border-b border-r border-gray-dddddd overflow-hidden">
                {this.renderDays()}
                {this.renderCells()}
            </div>
        
            <div style={{height: '5.8125rem', fontSize: '2.25rem'}} className="w-full flex items-center justify-center font-spoqaMedium text-gray-r454545 tracking-tight">
                2021년 07월은 총 
                <p className="font-spoqaBold text-blue-r0056a6 mx-3">7일</p>
                출석 하였습니다.
            </div>
        </div>
        <button
          style={{width: '26.3125rem', height: '7.3125rem', padding: '1px', marginTop: '3.8125rem', marginBottom: '32rem', fontSize: '2.625rem'}}
          className="flex items-center justify-center rounded-lg bg-blue-r0070d9 hover:opacity-75"
          onClick={this.checkAttendance}
        >
            <div className="flex w-full h-full items-center justify-center bg-black rounded-lg border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                <span className="font-spoqaMedium tracking-tight text-white">출석체크하기</span>
            </div>
        </button>

      </div>
    );
  }
}

export default Calendar;