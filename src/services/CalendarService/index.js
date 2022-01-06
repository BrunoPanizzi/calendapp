import calendars from '../../mocks/calendars'

class CalendarService {
	getInfo(id) {
		return calendars.find(calendar => calendar.id === id)
	}
}

export default new CalendarService()