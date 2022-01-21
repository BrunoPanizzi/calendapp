import calendars from '../../mocks/calendars'

import isSameDay from '../../utils/isSameDay'
import isBetweenDates from '../../utils/isBetweenDates'

class CalendarService {
	getInfo(id) {
		return calendars.find(calendar => calendar.id === id)
	}
	addEvent(calendarId, eventDetails) {
		console.log('adding')
		console.log(eventDetails)
		console.log(calendarId)
		// calendars[calendars.findIndex(calendar => calendar.id === calendarId)].events.push(eventDetails)
		// TODO make this thing work
		const calendar = calendars.find(calendar => calendar.id === calendarId)
		if (!calendar) return false

		calendar.events.push(eventDetails)
		
	}
	getEventByDate(calendarId, date) {
		const calendar = calendars.find(calendar => calendar.id === calendarId)
		if (!calendar) return false

		const events = calendar.events

		let eventsOnDate = []
		events.forEach(e => {
			if (e.type === 'single') {
				isSameDay(e.start, date) && eventsOnDate.push(e)
			} else if (isBetweenDates(e.start, e.end, date)) {
				eventsOnDate.push(e)
			}
		})
		return eventsOnDate
	}
}

export default new CalendarService()