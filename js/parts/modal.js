function modal() {
	const popup = document.querySelector(".popup"),
		popup_engineer = document.querySelector(".popup_engineer"),
		body = document.querySelector("body"),
		overleyPicture = document.createElement("div");

	body.appendChild(overleyPicture);
	overleyPicture.classList.add('bigPicture', 'overlay', 'animated', 'fadeIn');

	let overlay = document.querySelectorAll(".overlay");

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

	function bigPictures(picture) {

		let pic = picture.parentNode.href;

		overleyPicture.innerHTML = `<img src='${pic}'>`;
		showModal(overleyPicture);
	}

	body.addEventListener("click", e => {
		let target = e.target;

		// Modal

		if (target && target.classList.contains("header_btn")) {
			e.preventDefault();
			showModal(popup_engineer);
		}
		if (target && target.classList.contains("phone_link")) {
			e.preventDefault();
			showModal(popup);
		}
		if (target && target.classList.contains("close_btn") || target.classList.contains("overlay")) {
			hideModal(target);
		}
		if (target && target.classList.contains("lupa") || target.classList.contains("small_picture")) {
			e.preventDefault();
			bigPictures(target);
		}
	});

	setTimeout(function velcom() {
		showModal(popup);
	}, 60000);
}

export default modal;