import methods from '../Constants/calendarMethods';

class Calendar {
  constructor(date) {
    this._currentDate = date;
  }

  [methods.SET_EVENT](event) {
    console.log(`CALENDAR: set event ${event}`);
  }

  [methods.REMOVE_EVENT](event) {
    console.log(`CALENDAR: removed event ${event}`);
  }

  [methods.ADD_NOTIFICATION](notification) {
    console.log(`CALENDAR: set notification ${notification}`);
  }

  [methods.REMOVE_NOTIFICATION](notification) {
    console.log(`CALENDAR: removed notification ${notification}`);
  }
}

export default Calendar;