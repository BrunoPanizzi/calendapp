export default function isSameTime(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() 
		&& d1.getMonth() === d2.getMonth() 
		&& d1.getDate() === d2.getDate()
		&& d1.getHours() === d2.getHours()
		&& d1.getMinutes() === d2.getMinutes()
	)
}