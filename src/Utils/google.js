const getCalendar = () => new Promise((resolve, reject) => {
  fetch(`https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events?key=${process.env.REACT_APP_CALENDAR_API}`)
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(reject)
});

export { getCalendar };