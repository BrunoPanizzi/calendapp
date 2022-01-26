import isSameDay from './isSameDay'

function fixNumber(n) {
	// adds the 0 on front of the number if needed
	return ('0' + n).slice(-2)
} 

function parseDate(date, showYear=true) {
	const today = new Date()
	const myDate = new Date(date)
	
	if (isSameDay(today, myDate)) return 'Hoje'

	const day = fixNumber(myDate.getDate())
	const month = fixNumber(myDate.getMonth() + 1)
	const year = myDate.getFullYear()

	return `${day}/${month}${showYear ? '/' + year : ''}`
}

function parseTime(date) {
	const myDate = new Date(date)

	const hour = fixNumber(myDate.getHours())
	const min = fixNumber(myDate.getMinutes())

	return `${hour}:${min}`
}

export {
	parseDate,
	parseTime
}