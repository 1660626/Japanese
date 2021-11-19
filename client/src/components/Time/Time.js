import React, { useState, useEffect } from "react";


const Time = (props) => {
    const getCurrentTimeDate = () => {
        let currentTimeDate = new Date();

        // var weekday = new Array(7);
        // weekday[0] = "Sunday";
        // weekday[1] = "Monday";
        // weekday[2] = "Tuesday";
        // weekday[3] = "Wednesday";
        // weekday[4] = "Thursday";
        // weekday[5] = "Friday";
        // weekday[6] = "Saturday";

        // var month = new Array();
        // month[0] = "January";
        // month[1] = "February";
        // month[2] = "March";
        // month[3] = "April";
        // month[4] = "May";
        // month[5] = "June";
        // month[6] = "July";
        // month[7] = "August";
        // month[8] = "September";
        // month[9] = "October";
        // month[10] = "November";
        // month[11] = "December";

        var weekday = [];
        weekday[0] = "日";
        weekday[1] = "月";
        weekday[2] = "火";
        weekday[3] = "水";
        weekday[4] = "木";
        weekday[5] = "金";
        weekday[6] = "土";

        var month = [];
        month[0] = "一";
        month[1] = "二";
        month[2] = "三";
        month[3] = "四";
        month[4] = "五";
        month[5] = "六";
        month[6] = "七";
        month[7] = "八";
        month[8] = "九";
        month[9] = "十";
        month[10] = "十一";
        month[11] = "十二";


        var hours = currentTimeDate.getHours();

        var minutes = currentTimeDate.getMinutes();
        var seconds = currentTimeDate.getSeconds();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        //  var AMPM = hours >= 12 ? 'PM' : 'AM';

        // if(hours === 12){
        //     hours=12;

        // }else{

        //     hours = hours%12;

        // }



        var currentTime = `${hours}:${minutes}:${seconds}`;
        var currentDay = weekday[currentTimeDate.getDay()];

        var currentDate = currentTimeDate.getDate();


        // if(currentDate === 1){
        //   currentDate = currentDate + "st";

        // }
        // else if(currentDate === 2){
        //   currentDate = currentDate + "nd";

        // }
        // else if(currentDate === 3){
        //   currentDate = currentDate + "rd";

        // }else{
        //   currentDate = currentDate + "th";
        // }
        // var currentMonth = month[currentTimeDate.getMonth()];
        var currentMonth = currentTimeDate.getMonth() + 1;

        var CurrentYear = currentTimeDate.getFullYear();

        var fullDate = `${CurrentYear}年   ${currentMonth}月  ${currentDate}日 `;



        return { time: currentTime, day: currentDay + "曜日", date: fullDate }
    }
    const [stateTime, setStateTime] = useState(getCurrentTimeDate());
    useEffect(() => {
        setInterval(() => {
            setStateTime(getCurrentTimeDate())
        }, 1000);
    }, []);

 
    return (
        <div className="clock">
            <p id="time">{stateTime.time}</p>
            <p id="day">{stateTime.day}</p>
            <p id="date">{stateTime.date}</p>
        </div>
    )
}

export default Time