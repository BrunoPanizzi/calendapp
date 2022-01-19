function fixNumber(n) {
	// adds the 0 on front of the number if needed
	return ('0' + n).slice(-2)
} 

function parseDate(date) {
	const myDate = new Date(date)

	const day = fixNumber(myDate.getDate())
	const month = fixNumber(myDate.getMonth() + 1)
	const year = myDate.getFullYear()
	
	return `${day}/${month}/${year}`
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