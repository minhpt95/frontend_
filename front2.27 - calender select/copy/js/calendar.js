
var date = 0;
const nextYear = new Date().getFullYear() + 1;
const calender = new myCalender('#root', {
    min: new Date(),
    max: new Date(nextYear, 10) 
});
const calendarYear = document.getElementById('year');
const calendarWeek = document.getElementById('week');
const calendarMonth = document.getElementById('month');
const calendarDay = document.getElementById('day');

// Hard-coded list of sub all days.
this.listOfSubAllDaysAsText = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
];
// Hard-coded list of sub all months.
this.listOfSubAllMonthsAsText = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

calender.onValueChange((currentValue) => {
	calendarYear.textContent = currentValue.getFullYear();
	calendarWeek.textContent = listOfSubAllDaysAsText[currentValue.getDay()] + `, `;
	console.log(currentValue.getDay());
	calendarMonth.textContent = listOfSubAllMonthsAsText[currentValue.getMonth()] + ` `;
	calendarDay.textContent = 	currentValue.getDate();
});
