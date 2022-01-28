import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../../firebase'

class UserService {
	listCalendars(user) {
		return [
			{id: '123', title: 'Metas trabalho'},	
			{id: '456', title: 'Eventos'},	
			{id: '789', title: 'Aniversários'},	
		]
	}

	login(email, password) {
		return signInWithEmailAndPassword(auth, email, password)
	}

	createUser(email, password) {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	signOut() {
		signOut(auth)
	}
}

export default new UserService()