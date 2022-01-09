function fixNumber(n) {
	// adds the 0 on front of the number if needed
	return ('0' + n).slice(-2)
} 

export default function parseDate(date) {
	const myDate = new Date(date)

	const day = fixNumber(myDate.getDate())
	const month = fixNumber(myDate.getMonth() + 1)
	const year = myDate.getFullYear()
	
	return `${day}/${month}/${year}`
}