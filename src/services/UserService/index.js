import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, deleteUser } from 'firebase/auth'
import { Auth } from '../../../firebase'

class UserService {
	login(email, password) {
		return signInWithEmailAndPassword(Auth, email, password)
	}

	createUser(email, password) {
		return createUserWithEmailAndPassword(Auth, email, password)
	}

  getCurrentUser() {
    return Auth.currentUser
  }

	signOut() {
		signOut(Auth)
	}

  delete() {
    return deleteUser(this.getCurrentUser())
  }
}

export default new UserService()
