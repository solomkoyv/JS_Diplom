function modal() {
	const overlay = document.querySelectorAll(".overlay"),
		popup = document.querySelector(".popup"),
		popup_engineer = document.querySelector(".popup_engineer"),
		popup_calc = document.querySelector(".popup_calc"),
		popup_calc_profile = document.querySelector(".popup_calc_profile"),
		popup_calc_end = document.querySelector(".popup_calc_end"),
		body = document.querySelector("body");


	function showModal(modal) {
		modal.style.display = "block";
		document.body.style.overflow = "hidden";
	}

	function hideModal(modCloseBtn) {
		[...overlay].forEach(element => {
			element.style.display = "none";
		});
		document.body.style.overflow = "";

		let statusMessage = document.querySelector('.status');
		if (statusMessage != undefined) {
			statusMessage.innerHTML = '';
		}

	}
	body.addEventListener("click", e => {
		let target = e.target;

		// Modal

		if (target && target.classList.contains("header_btn")) {
			showModal(popup_engineer);
		}
		if (target && target.classList.contains("phone_link")) {
			showModal(popup);
		}
		if (target && target.classList.contains("popup_calc_btn")) {
			showModal(popup_calc);
		}
		if (target && target.classList.contains("popup_calc_button")) {
			hideModal(popup_calc);
			showModal(popup_calc_profile);
		}
		if (target && target.classList.contains("popup_calc_profile_button")) {
			hideModal(popup_calc_profile);
			showModal(popup_calc_end);
		}
		if (target && target.classList.contains("close_btn") || target.classList.contains("overlay")) {
			hideModal(target);
		}
	});
}

export default modal;