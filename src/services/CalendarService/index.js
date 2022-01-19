import calendars from '../../mocks/calendars'

class CalendarService {
	getInfo(id) {
		return calendars.find(calendar => calendar.id === id)
	}
	addEvent(calendarId, eventDetails) {
		// console.log('adding')
		// calendars[calendars.findIndex(calendar => calendar.id === calendarId)].events.push(eventDetails)
		// TODO make this thing work
	}
}

export default new CalendarService()