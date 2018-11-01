function modal() {
	const overlay = document.querySelector(".overlay"),
		body = document.querySelector("body");


	function showModal(modBtn) {
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	}

	function hideModal(modCloseBtn) {
		overlay.style.display = "none";
		document.body.style.overflow = "";

		let statusMessage = document.querySelector('.status');
		if (statusMessage != undefined) {
			statusMessage.innerHTML = '';
		}

	}
	body.addEventListener("click", e => {
		let target = e.target;

		// Modal

		if (target && target.classList.contains("header_btn") || target.classList.contains("phone_link")) {
			showModal(target);
		}
		if (target && target.classList.contains("close_btn") || target.classList.contains("overlay")) {
			hideModal(target);
		}
	});
}

export default modal;