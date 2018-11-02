function validNum() {
	const inputsPhone = document.querySelectorAll('input[name="user_phone"]'),
		inputsSize = document.querySelectorAll('input[name="size"]');

	function onlyNumber(input) {
		input.oninput = function () {
			return (this.value = this.value.replace(/[^0-9]/g, ""));
		};
	}
	[...inputsPhone].forEach(elem => onlyNumber(elem));
	[...inputsSize].forEach(elem => onlyNumber(elem));
}
export default validNum;