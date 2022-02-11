import { 
	collection,
	query,
	where,
	addDoc,
	getDocs,
	doc,
	updateDoc,
	arrayUnion,
	arrayRemove, 
	deleteDoc
} from 'firebase/firestore'

import { db, Auth } from '../../../firebase'

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
		return updateDoc(calendarRef, {
			events: arrayUnion({
				...eventDetails,
				creatorId: Auth.currentUser.uid
			})
		})
	}

	deleteCalendar(calendarId) {
		return deleteDoc(doc(db, `calendars/${calendarId}`))
	}
	
}

export default new CalendarService()