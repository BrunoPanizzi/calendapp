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

	async login(email, password) {
		let user

		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password)
			user = userCredential.user
		} catch (error) {
			console.log(error)			
		}
    
		return user
	}

	async createUser(email, password) {
		let user

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password)
			user = userCredential.user
		} catch (error) {
			console.log(error)			
		}
    
		return user
	}

	signOut() {
		signOut(auth)
	}
}

export default new UserService()