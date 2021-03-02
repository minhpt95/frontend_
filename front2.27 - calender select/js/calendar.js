
var date = 0;
const nextYear = new Date().getFullYear() + 1;
const calender = new myCalender('#root', {
    min: new Date(),
    max: new Date(nextYear, 10) 
}, {
	title: "You have something for me ?", 
	detail: "If you are interested to work with us, please contact us.", 
	button: "Submit",
	name: "Your name...",
	email: "Your Email...",
	subject: "Your Subject...",
});
const calendarYear = document.getElementById('year');
const calendarWeek = document.getElementById('week');
const calendarMonth = document.getElementById('month');
const calendarDay = document.getElementById('day');

calender.onValueChange((currentValue) => {
    const [Day, Month, Date, Year] = currentValue.toString().split(' ');
    calendarYear.textContent = `${Year}`;
    calendarWeek.textContent = `${Date}` + `, `;
    calendarMonth.textContent = `${Month}` + ` `;
    calendarDay.textContent =   `${Day}`;
});
