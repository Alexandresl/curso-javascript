class Utils {

	static dateFormat(date) {

		return (("0" + date.getDate().toString()).slice(-2)) + '/' + (("0" + (date.getMonth() + 1)).toString().slice(-2)) + '/' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes();

	}

}