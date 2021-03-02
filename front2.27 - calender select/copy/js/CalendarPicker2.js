/**
 * @class CalendarPicker2.
 * @description Provides a simple way to get a minimalistic calender in your DOM.
 * @author KirrNguyen - 21 October 2020.
 */

class myCalender {
    constructor(element, options) {
        // Core variables.
        this.date = new Date();
        this._formatDateToInit(this.date);

        this.day = this.date.getDay()
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();

        // Storing the todays date for practical reasons.
        this.today = this.date;

        // The calendars value should always be the current date.
        this.value = this.date;

        // Ranges for the calendar (optional).
        this.min = options.min;
        this.max = options.max;
        this._formatDateToInit(this.min)
        this._formatDateToInit(this.max)

        // Element to insert calendar in.
        this.userElement = document.querySelector(element);

        // Destructuring current date as readable text.
        [this.dayAsText, this.monthAsText, this.dateAsText, this.yearAsText] = this.date.toString().split(' ');

        // Hard-coded list of all days.
        this.listOfAllDaysAsText = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ];
        // Hard-coded list of sub all days.
        this.listOfSubAllDaysAsText = [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
        ];

        // Hard-coded list of all months.
        this.listOfAllMonthsAsText = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
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

        // The elements used to build the calendar.
        this.calendarWrapper = document.createElement('div');

        // Header
        this.calendarHeader = document.createElement('div')
        	this.calendarTitle = document.createElement('div')
		        this.calendarYear = document.createElement('h5');
		        this.calendarDate = document.createElement('h4');
		        	this.calendarWeek = document.createElement('span');
		        	this.calendarMonth = document.createElement('span');
		        	this.calendarDay = document.createElement('span');

        // Main
        this.calendarMain = document.createElement('div');
	        this.calendarDaysWrapper = document.createElement('div');
        		this.calendarDays = document.createElement('div');
			        this.calendarNavigation = document.createElement('div');
			        	this.calendarPrevMonth = document.createElement('div');
			        	this.calendarWrapperMonth = document.createElement('div');
			        	this.calendarNextMonth = document.createElement('div');
			        this.calendarListDay = document.createElement('div');
			        this.calendarFullDay = document.createElement('div');

        this.calendarDayElementType = 'time';

        // Creating the calendar
        this.calendarWrapper.className = 'calendar-wrapper';

        // Header
        this.calendarHeader.className = 'calendar-header';
        	this.calendarTitle.className = 'calendar-title';
        		this.calendarYear.className = 'year';
        		this.calendarYear.id = 'year';
		        this.calendarWeek.className = 'week';
		        this.calendarWeek.id = 'week';
			        this.calendarDay.className = 'day';
			        this.calendarDay.id = 'day';
			        this.calendarMonth.className = 'month';
			        this.calendarMonth.id = 'month';

        // Main
        this.calendarMain.className = 'calendar-main';
        	this.calendarDaysWrapper.className = 'calendar-days-wrapper';
        		this.calendarDays.className = 'calendar-days';
		        	this.calendarNavigation.className = 'navigation-wrapper';
		        		this.calendarPrevMonth.className = 'prev-month';
		        		this.calendarPrevMonth.id = 'prev-month';
		        		this.calendarWrapperMonth.className = 'month-wrapper';
		        		this.calendarNextMonth.className = 'next-month';
		        		this.calendarNextMonth.id = 'next-month';
		        	this.calendarListDay.className = 'days-wrapper';
		        	this.calendarFullDay.className = 'days-wrapper';

        this._insertHeaderIntoCalendarWrapper();
        this._insertMainIntoCalendarWrapper();
        this._insertCalendarGridDaysHeader();
        this._insertDaysIntoGrid();
        this._insertCalendarIntoWrapper();


        this.userElement.appendChild(this.calendarWrapper);
    }

    /**
     * @param {Number} The month number, 0 based.
     * @param {Number} The year, not zero based, required to account for leap years.
     * @return {Array<Date>} List with date objects for each day of the month.
     * @author Juan Mendes - 30th October 2012.
     */
    _getDaysInMonth(month, year){
        if ((!month && month !== 0) || (!year && year !== 0)) return;

        const date = new Date(year, month, 1);
        const days = [];

        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }
    /**
     * @param {DateObject} date.
     * @description Sets the clock of a date to 00:00:00 to be consistent.
     */
    _formatDateToInit(date){
        if (!date) return;
        date.setHours(0, 0, 0);
    }

    /**
     * @description Adds the "main" calendar-header.
     */
    _insertHeaderIntoCalendarWrapper(){

    	this.calendarYear.textContent = `${this.year}`;
    	this.calendarWeek.textContent = `${this.listOfSubAllDaysAsText[this.day]}, `;
    	this.calendarMonth.textContent = `${this.listOfSubAllMonthsAsText[this.month]} `;
    	this.calendarDay.textContent = `${this.today.getDate()}`;

    	this.calendarDate.appendChild(this.calendarWeek);
    	this.calendarDate.appendChild(this.calendarMonth);
    	this.calendarDate.appendChild(this.calendarDay);

    	this.calendarTitle.appendChild(this.calendarYear);
    	this.calendarTitle.appendChild(this.calendarDate);

        this.calendarHeader.appendChild(this.calendarTitle);
        this.calendarWrapper.appendChild(this.calendarHeader);
    }

    /**
     * @description Adds the "main" calendar-main.
     */
    _insertMainIntoCalendarWrapper(){
    	const nextArrow = '<i class="fas fa-chevron-right"></i>';
    	const prevArrow = '<i class="fas fa-chevron-left"></i>';

        this.calendarPrevMonth.innerHTML = prevArrow;
        this.calendarNextMonth.innerHTML = nextArrow;
        this.calendarWrapperMonth.textContent = `${this.listOfAllMonthsAsText[this.month]} - ${this.year}`;

    	this.calendarNavigation.appendChild(this.calendarPrevMonth);
    	this.calendarNavigation.appendChild(this.calendarWrapperMonth);
    	this.calendarNavigation.appendChild(this.calendarNextMonth);

        this.calendarNavigation.addEventListener('click', (clickEvent) => {
            if (clickEvent.target.closest(`#${this.calendarPrevMonth.id}`)) {
                if (this.month === 0) {
                    this.month = 11;
                    this.year -= 1;
                } else {
                    this.month -= 1;
                }
                this._updateCalendar();
            }

            if (clickEvent.target.closest(`#${this.calendarNextMonth.id}`)) {
                if (this.month === 11) {
                    this.month = 0;
                    this.year += 1;
                } else {
                    this.month += 1;
                }
                this._updateCalendar();
            }
        }, false)


    	this.calendarDays.appendChild(this.calendarNavigation);

    	this.calendarDaysWrapper.appendChild(this.calendarDays);

    	this.calendarMain.appendChild(this.calendarDaysWrapper);

        this.calendarWrapper.appendChild(this.calendarMain);
    }

    /**
     * @description Inserts the calendar-grid header with all the weekdays.
     */
    _insertCalendarGridDaysHeader(){
        this.listOfSubAllDaysAsText.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.textContent = day;
        	dayElement.className = 'days-item';
            this.calendarListDay.appendChild(dayElement);
        })

    	this.calendarDays.appendChild(this.calendarListDay);

    	this.calendarDaysWrapper.appendChild(this.calendarDays);
    	
        // this.calendarDays.appendChild(this.calendarListDay);
    }

    /**
     * @description Updates the core-values for the calendar based on the new month and year
     * given by the navigation. Also updates the UI with the new values.
     */
    _updateCalendar = () => {
        this.date = new Date(this.year, this.month);

        [this.dayAsText, this.monthAsText, this.dateAsText, this.yearAsText] = this.date.toString().split(' ');
        this.day = this.date.getDay();
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();

        window.requestAnimationFrame(() => {
            this.calendarWrapperMonth.textContent = `${this.listOfAllMonthsAsText[this.month]} - ${this.year}`;
            this._insertDaysIntoGrid();
        })
    }

    /**
     * @description Inserts the calendar into the wrapper and adds eventListeners for the calender-grid.
     */
    _insertCalendarIntoWrapper = () => {
        this.calendarDays.appendChild(this.calendarFullDay);
        // this.calendarWrapper.appendChild(this.calendarElement);

        /**
         * @param {Event} event An event from an eventListener.
         */
        const handleSelectedElement = (event) => {
            if (event.target.nodeName.toLowerCase() === this.calendarDayElementType && !event.target.classList.contains('disabled')) {

                // Removes the 'selected' class from all elements that have it.
                Array.from(document.querySelectorAll('.selected')).forEach(element => element.classList.remove('selected'));

                // Adds the 'selected'-class to the selected date.
                event.target.classList.add('selected');

                this.value = event.target.value;

                // Fires the onValueChange function with the provided callback.
                this.onValueChange(this.callback);
            }
        }

        this.calendarFullDay.addEventListener('click', handleSelectedElement, false);

        this.calendarFullDay.addEventListener('keydown', (keyEvent) => {
            if (keyEvent.key !== 'Enter') return;

            handleSelectedElement(keyEvent);
        }, false);
    }

    /**
     * @description Adds all the days for current month into the calendar-grid.
     * Takes into account which day the month starts on, so that "empty/placeholder" days can be added
     * in case the month for example starts on a Thursday.
     * Also disables the days that are not within the provided.
     */
    _insertDaysIntoGrid = () => {
        this.calendarFullDay.innerHTML = '';

        let arrayOfDays = this._getDaysInMonth(this.month, this.year);
        let firstDayOfMonth = arrayOfDays[0].getDay();

        // Converting Sunday (0 when using getDay()) to 7 to make it easier to work with.
        firstDayOfMonth = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;

        if (1 < firstDayOfMonth) {
            arrayOfDays = Array(firstDayOfMonth - 1).fill(false, 0).concat(arrayOfDays);
        }

        arrayOfDays.forEach(date => {
            const dateElement = document.createElement(date ? this.calendarDayElementType : 'span');
            const [Day, Month, Date, Year] = date.toString().split(' ');

            const dateIsTheCurrentValue = this.value.toString() === date.toString();
            if (dateIsTheCurrentValue) this.activeDateElement = dateElement;

            const dateIsBetweenAllowedRange = (this.min || this.max) && 
                                                (date.toString() !== this.today.toString() && 
                                                (date < this.min || date > this.max)) || 
                                                (`${Day}` == `Sat`) ||
                                                (`${Day}` == `Sun`)
            dateElement.classList.add('days-item');
            if (dateIsBetweenAllowedRange) {
                dateElement.classList.add('disabled');
            } else {
                dateElement.tabIndex = 0;
                dateElement.value = date;
            }

            dateElement.textContent = date ? `${Date}` : '';
            this.calendarFullDay.appendChild(dateElement);
        })

        this.activeDateElement.classList.add('selected');
    }

    /**
     * @param {Function} callback
     * @description A "listener" that lets the user do something everytime the value changes.
     */
    onValueChange(callback){
        if (this.callback) return this.callback(this.value);
        this.callback = callback;
    }
}
