/**
 * @class CalendarPicker2.
 * @description Provides a simple way to get a minimalistic calender in your DOM.
 * @author KirrNguyen - 21 October 2020.
 */

class myCalender {
    constructor(element, options, text) {
        // Core variables.
        this.date = new Date();
        this._formatDateToInit(this.date);

        this.day = this.date.getDay()
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();

        // string of form
        this.text = text;

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
        this.arrayOfHours = ["12", "13", "14", "15", "16", "17", "*", "*", "*", "09", "10", "11"];
        this.arrayOfMinutes = ["00", "15", "30", "45"];
        this.dateSelect = false;
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
                this.calendarTime = document.createElement('h4');
                    this.calendarHour = document.createElement('span');
                    this.calendarMinute = document.createElement('span');

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
                this.calendarTimes = document.createElement('div');
                    this.calendarTimeWrapper = document.createElement('div');
                    this.calendarHourWrapper = document.createElement('div');
                this.calendarForm = document.createElement('div');
                    this.calendarFormTitle = document.createElement('h2');
                    this.calendarFormDetail = document.createElement('p');
                    this.calendarFormName = document.createElement('input');
                    this.calendarFormEmail = document.createElement('input');
                    this.calendarFormSubject = document.createElement('input');
                    this.calendarFormTextarea = document.createElement('textarea');
                    this.calendarFormSubmit = document.createElement('div');
                        this.calendarFormSubmitButton = document.createElement('button');

                    this.calendarMinuteWrapper = document.createElement('div');
                        // this.calendarMinuteClock = document.createElement('div');
                            this.calendarMinuteBack = document.createElement('div');

                this.calendarControl = document.createElement('div');
                    this.calendarFCalendar = document.createElement('div');
                    this.calendarFInfo = document.createElement('div');

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
                this.calendarHour.className = 'hour';
                this.calendarHour.id = 'hour';
                this.calendarMinute.className = 'minute';
                this.calendarMinute.id = 'minute';

        // Main
        this.calendarMain.className = 'calendar-main show-calendar';
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
                this.calendarTimes.className = 'calendar-time hour-select';
                    this.calendarTimeWrapper.className = 'calendar-time-wrapper';
                    this.calendarHourWrapper.className = 'hour-wrapper';
                this.calendarForm.className = 'calendar-form';
                    this.calendarFormTitle.id = 'calendar-form-title';
                    this.calendarFormDetail.id = 'calendar-form-detail';
                    this.calendarFormName.id = 'calendar-form-name';
                    this.calendarFormEmail.id = 'calendar-form-email';
                    this.calendarFormSubject.id = 'calendar-form-subject';
                    this.calendarFormTextarea.id = 'calendar-form-textarea';
                    this.calendarFormSubmit.className = 'submit';
                        this.calendarFormSubmitButton.className = 'calendar-form-submit';

                    this.calendarMinuteWrapper.className = 'minute-wrapper';
                        // this.calendarMinuteClock.className = 'clock-wrapper';
                            this.calendarMinuteBack.className = 'backto-hour';

                this.calendarControl.className = 'calendar-controls';
                    this.calendarFCalendar.className = 'calendar-button f-calendar';
                    this.calendarFInfo.className = 'calendar-button f-info';

        this._insertHeaderIntoCalendarWrapper();
        this._insertMainIntoCalendarWrapper();
        this._insertCalendarGridDaysHeader();
        this._insertDaysIntoGrid();
        this._insertCalendarIntoWrapper();
        this._createCalendarMinuteBack()

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

        this.calendarTime.appendChild(this.calendarHour);
        this.calendarTime.appendChild(this.calendarMinute);

    	this.calendarTitle.appendChild(this.calendarYear);
        this.calendarTitle.appendChild(this.calendarDate);
        this.calendarTitle.appendChild(this.calendarTime);

        this.calendarHeader.appendChild(this.calendarTitle);
        this.calendarWrapper.appendChild(this.calendarHeader);
    }

    /**
     * @description Adds the "main" calendar-main.
     */
    _insertMainIntoCalendarWrapper(){
        this._insertCalendarDays();

        // this._insertCalendarTimes();

        this._insertCalendarForm();

        this._insertCalendarControl();

    	this.calendarMain.appendChild(this.calendarDaysWrapper);

        this.calendarWrapper.appendChild(this.calendarMain);
    }

    /**
     * @description Inserts the calendar-Day header with all the weekdays.
     */
    _insertCalendarDays(){
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
    }


    /**
     * @description Inserts the calendar-Day header with all the weekdays.
     */
    _insertCalendarForm(){

        this.calendarForm.appendChild(this.calendarFormTitle);
            this.calendarFormTitle.textContent = this.text.title;
        this.calendarForm.appendChild(this.calendarFormDetail);
            this.calendarFormDetail.textContent = this.text.detail;

        this.calendarForm.appendChild(this.calendarFormName);
            this.calendarFormName.placeholder = this.text.name;
        this.calendarForm.appendChild(this.calendarFormEmail);
            this.calendarFormEmail.placeholder = this.text.email;
        this.calendarForm.appendChild(this.calendarFormSubject);
            this.calendarFormSubject.placeholder = this.text.subject;
        
        this.calendarForm.appendChild(this.calendarFormTextarea);
        this.calendarForm.appendChild(this.calendarFormSubmit);
        this.calendarFormSubmit.appendChild(this.calendarFormSubmitButton);
            this.calendarFormSubmitButton.textContent = this.text.button;

        this.calendarDaysWrapper.appendChild(this.calendarForm);
    }

    /**
     * @description Inserts the calendar-Time header with all the weekdays.
     */
    _insertCalendarTimes(){

        this.calendarTimeWrapper.appendChild(this.calendarHourWrapper);

        this.calendarTimeWrapper.appendChild(this.calendarMinuteWrapper);

        this.calendarTimes.appendChild(this.calendarTimeWrapper);

        this.calendarDaysWrapper.appendChild(this.calendarTimes);
    }

    /**
     * @description Inserts the calendar-Time header with all the weekdays.
     */
    _insertCalendarControl(){
        const prevArrow = ' <i class="fas fa-long-arrow-alt-left"></i>';
        this.calendarFCalendar.innerHTML = prevArrow;
        this.calendarControl.appendChild(this.calendarFCalendar);

        this.calendarFInfo.innerHTML = prevArrow;
        this.calendarControl.appendChild(this.calendarFInfo);
       
        this.calendarFCalendar.addEventListener('click', (clickEvent) => {
            $('.calendar-main').removeClass('show-clock');
            $('.calendar-time').removeClass('minute-select');
            try{
                document.getElementById("hour-wrapper").remove();
                document.getElementById("minute-wrapper").remove();
            }catch(err){ }
        }, false)
       
        this.calendarFInfo.addEventListener('click', (clickEvent) => {
            $('.calendar-main').removeClass('show-form');
        }, false)

        this.calendarDaysWrapper.appendChild(this.calendarControl);
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
    _updateCalendar(){
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
    _insertCalendarIntoWrapper(){
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

    _createCalendarHour(){
        var Datetoday = new Date();
        var HourNow = Datetoday.getHours();

        const hourClock = document.createElement('div');
        hourClock.className = 'clock-wrapper';
        hourClock.id = 'hour-wrapper';

        this.arrayOfHours.forEach(hour => {
            const hourElement = document.createElement('div');
            hourElement.className = 'clock-item';
            if (this.dateSelect) {
                if (hour == "*" || hour < HourNow ) {
                    hourElement.classList.add('disabled');
                }else{
                    hourElement.classList.add('visibled');
                    hourElement.addEventListener('click', (clickEvent) => {
                        this.timeSelect(hour, hourElement)
                    }, true)
                }
            }else{
                if (hour == "*") {
                    hourElement.classList.add('disabled');
                }else{
                    hourElement.classList.add('visibled');
                    hourElement.addEventListener('click', (clickEvent) => {
                        this.timeSelect(hour, hourElement)
                    }, true)
                }
            }
            hourElement.textContent = hour;

            hourClock.appendChild(hourElement);
        })

        this.calendarHourWrapper.appendChild(hourClock);

        this.calendarTimeWrapper.appendChild(this.calendarHourWrapper);
    }

    _createCalendarMinute(timeSelect){

        var Datetoday = new Date();
        var HourNow = Datetoday.getHours();
        var MinuteNow = Datetoday.getMinutes();

        const calendarMinuteClock = document.createElement('div');
        calendarMinuteClock.className = 'clock-wrapper';
        calendarMinuteClock.id = 'minute-wrapper';

        calendarMinuteClock.appendChild(this.calendarMinuteBack);

        this.arrayOfMinutes.forEach(minute => {
            const minuteElement = document.createElement('div');
            minuteElement.className = 'clock-item';
            if (this.dateSelect) {
                if (timeSelect == HourNow) {
                    if (minute == "*" || minute < MinuteNow) {
                        minuteElement.classList.add('disabled');
                    }else{
                        minuteElement.classList.add('visibled');
                        minuteElement.addEventListener('click', (clickEvent) => {
                            $('.calendar-time').removeClass('minute-select');
                            $(this).parent().find('.clock-item').removeClass('selected');
                            $(this).addClass('selected');
                            document.getElementById("minute-wrapper").remove();
                            this.minuteSelect(minute, minuteElement);
                        }, false)
                    }
                }else{
                    if (minute == "*") {
                        minuteElement.classList.add('disabled');
                    }else{
                        minuteElement.classList.add('visibled');
                        minuteElement.addEventListener('click', (clickEvent) => {
                            $('.calendar-time').removeClass('minute-select');
                            $(this).parent().find('.clock-item').removeClass('selected');
                            $(this).addClass('selected');
                            document.getElementById("minute-wrapper").remove();
                            this.minuteSelect(minute, minuteElement);
                        }, false)
                    }
                }
            }else{
                if (minute == "*") {
                    minuteElement.classList.add('disabled');
                }else{
                    minuteElement.classList.add('visibled');
                    minuteElement.addEventListener('click', (clickEvent) => {
                        $('.calendar-time').removeClass('minute-select');
                        $(this).parent().find('.clock-item').removeClass('selected');
                        $(this).addClass('selected');
                        document.getElementById("minute-wrapper").remove();
                        this.minuteSelect(minute, minuteElement);
                    }, false)
                }
            }
            minuteElement.textContent = minute;

            calendarMinuteClock.appendChild(minuteElement);
        })


        this.calendarMinuteWrapper.appendChild(calendarMinuteClock);
    }

    _createCalendarMinuteBack(){
        const prevArrow = '<i class="fas fa-undo"></i>';
        this.calendarMinuteBack.innerHTML = prevArrow;
        this.calendarMinuteBack.addEventListener('click', (clickEvent) => {
            $('.calendar-time').removeClass('minute-select');
            document.getElementById("minute-wrapper").remove();
        }, false)
    }
    /**
     * @description Adds all the days for current month into the calendar-grid.
     * Takes into account which day the month starts on, so that "empty/placeholder" days can be added
     * in case the month for example starts on a Thursday.
     * Also disables the days that are not within the provided.
     */
    _insertDaysIntoGrid(){
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
            	dateElement.classList.add('visibled');
                dateElement.tabIndex = 0;
                dateElement.value = date;
                dateElement.addEventListener('click', (clickEvent) => {
                    this._insertCalendarTimes();
                    this.dateClick(date)
                }, false)
            }

            dateElement.textContent = date ? `${Date}` : '';

            this.calendarFullDay.appendChild(dateElement);
        })

        this.activeDateElement.classList.add('selected_today');
    }

    /**
     * @param {Function} callback
     * @description A "listener" that lets the user do something everytime the value changes.
     */
    onValueChange(callback){
        if (this.callback) return this.callback(this.value);
        this.callback = callback;
    }

    dateClick(dateClick){

        var Datetoday = new Date();
        // trả về ngày hôm nay
        const [DayNow, MonthNow, DateNow, YearNow] = Datetoday.toString().split(' ');
        // trả về ngày click
        const [Day, Month, DateClick, Year] = dateClick.toString().split(' ');

        var HourNow = Datetoday.getHours();
        var MinuteNow = Datetoday.getMinutes();

        this.dateSelect = ( `${DateNow}` == `${DateClick}` && `${MonthNow}` == `${Month}` && `${YearNow}` == `${Year}`) ? true : false;
        this._createCalendarHour()

        this.calendarMain.classList.add('show-clock');
    }
    timeSelect(timeSelect, hourElement){
        console.log(hourElement)
        // console.log(document.getElementById('hour'))
        this._createCalendarMinute(timeSelect);
        $('.calendar-time').addClass('minute-select');
        $('#hour').html(timeSelect + " : ");
        $(hourElement).parent().find('.clock-item').removeClass('selected');
        $(hourElement).addClass('selected');
        // console.log("timeSelect")
    }
    minuteSelect(minuteSelect, minuteElement){
        $('#minute').html(minuteSelect);
        $('.calendar-time').removeClass('minute-select');
        $(minuteElement).parent().find('.clock-item').removeClass('selected');
        $(minuteElement).addClass('selected');
        $('.calendar-main').addClass('show-form');
    }


}
