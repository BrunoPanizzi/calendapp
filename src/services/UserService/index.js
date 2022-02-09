import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { Auth } from '../../../firebase'

class UserService {
	listCalendars(user) {
		return [
			{id: '123', title: 'Metas trabalho'},	
			{id: '456', title: 'Eventos'},	
			{id: '789', title: 'Aniversários'},	
		]
	}

	login(email, password) {
		return signInWithEmailAndPassword(Auth, email, password)
	}

	createUser(email, password) {
		return createUserWithEmailAndPassword(Auth, email, password)
	}

	signOut() {
		signOut(Auth)
	}
}

export default new UserService()