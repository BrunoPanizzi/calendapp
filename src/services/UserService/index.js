class UserService {
	listCalendars(user) {
		return [
			{id: '123', title: 'Metas trabalho'},	
			{id: '456', title: 'Eventos'},	
			{id: '789', title: 'Aniversários'},	
		]
	}
}

export default new UserService()