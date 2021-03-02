

    // var date = 0;
    // const nextYear = new Date().getFullYear() + 1;
    // const myCalender = new CalendarPicker('#myCalendarWrapper', {
    //     // If max < min or min > max then the only available day will be today.
    //     min: new Date(),
    //     max: new Date(nextYear, 10) // NOTE: new Date(nextYear, 10) is "Sun Nov 01 <nextYear>"
    // });
    // console.log()
    // myCalender.onValueChange((currentValue) => {
    //     date = currentValue.toDateString();
    //     console.log(currentValue)
    //     console.log(currentValue.getDay())
    //     console.log(currentValue.getMonth())
    //     console.log(currentValue.getYear())
    // });

    // const currentDateElement = document.getElementById('current-date');
    // currentDateElement.textContent = myCalender.value;

    // const currentDayElement = document.getElementById('current-day');
    // currentDayElement.textContent = myCalender.value.getDay();

    // const currentToDateString = document.getElementById('current-datestring');
    // currentToDateString.textContent = myCalender.value.toDateString();

    // myCalender.onValueChange((currentValue) => {
    //     currentDateElement.textContent = currentValue;
    //     currentDayElement.textContent = currentValue.getDay();
    //     currentToDateString.textContent = currentValue.toDateString();

    //     console.log(`The current value of the calendar is: ${currentValue}`);
    // });


$( document ).ready(function() {
    $('.f-clock').on('click', function(){
        $('.calendar-main').addClass('show-clock')
    })
    $('.f-calendar').on('click', function(){
        $('.calendar-main').removeClass('show-clock')
    })
});


    