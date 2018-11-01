function timer() {
	let deadLine = "2019-07-04";

	function getTimeRemaninig(endtime) {

		let t = Date.parse(endtime) - Date.parse(new Date()),
			x = new Date().getTimezoneOffset() / 60,
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			// hours = Math.floor(t / (1000 * 60 * 60)),
			hours = Math.floor((t / 1000 / 60 / 60) % 24) + x,
			days = Math.floor((t / (1000 * 60 * 60 * 24)));

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	}

	function setCloack(id, endtime) {
		let timer = document.getElementById(id),
			days = timer.querySelector(".days"),
			hours = timer.querySelector(".hours"),
			minutes = timer.querySelector(".minutes"),
			seconds = timer.querySelector(".seconds"),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaninig(endtime),
				d = t.days.toString(),
				h = t.hours.toString(),
				m = t.minutes.toString(),
				s = t.seconds.toString();

			if (
				t.total <= 0 &&
				t.days <= 0 &&
				t.hours <= 0 &&
				t.minutes <= 0 &&
				t.seconds <= 0
			) {
				days.textContent = "00";
				hours.textContent = "00";
				minutes.textContent = "00";
				seconds.textContent = "00";
				clearInterval(timeInterval);
			} else {
				days.textContent = d;
				hours.textContent = h.length < 2 ? `0${h}` : h;
				minutes.textContent = m.length < 2 ? `0${m}` : m;
				seconds.textContent = s.length < 2 ? `0${s}` : s;
			}
		}
	}
	setCloack("timer", deadLine);
}
export default timer;