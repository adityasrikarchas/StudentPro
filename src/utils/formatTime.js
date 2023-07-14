export default function FormatTime(time, format) {
	if (format === "hh:mm:ss") {
		const hours = Math.floor(time / 3600);
		const minutes = Math.floor((time - hours * 3600) / 60);
		const seconds = time % 60;
		return `${hours} : ${minutes} : ${
			seconds < 10 ? "0" : ""
		}${seconds}`;
	} else if (format === "mm:ss") {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes} : ${seconds < 10 ? "0" : ""}${seconds}`;
	} else if (format === "ss") {
		return `${time}`;
	}
}