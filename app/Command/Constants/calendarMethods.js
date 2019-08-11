const calendarMethods = Object.freeze({
  SET_EVENT: Symbol('SET_EVENT'),
  REMOVE_EVENT: Symbol('REMOVE_EVENT'),
  ADD_NOTIFICATION: Symbol('ADD_NOTIFICATION'),
  REMOVE_NOTIFICATION: Symbol('REMOVE_NOTIFICATION'),
});

export default calendarMethods;