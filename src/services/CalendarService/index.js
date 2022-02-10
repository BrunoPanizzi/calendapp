import { 
	collection,
	query,
	where,
	addDoc,
	getDocs,
	doc,
	updateDoc,
	arrayUnion,
	arrayRemove 
} from 'firebase/firestore'

import { db, Auth } from '../../../firebase'

import calendars from '../../mocks/calendars'

import isSameDay from '../../utils/isSameDay'
import isBetweenDates from '../../utils/isBetweenDates'

class CalendarService {
	async addCalendar({ title, isPublic }) {
		return addDoc(collection(db, 'calendars'), {
			title,
			isPublic,
			events: [],
			creator: Auth.currentUser.uid
		})
	}

	getCalendars(uid) {
		return query(collection(db, 'calendars'), where('creator', '==', uid))
	}

	getCalendar(id) {
		return doc(db, `calendars/${id}`)
	}
	
	addEvent(calendarId, eventDetails) {
		const calendarRef = doc(db, `calendars/${calendarId}`)
		console.log(calendarRef.id)
		return updateDoc(calendarRef, {
			events: arrayUnion(eventDetails)
		})
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