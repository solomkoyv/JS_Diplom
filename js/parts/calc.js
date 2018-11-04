// import forms from './forms';

function calc() {

	const popup_calc = document.querySelector(".popup_calc"),
		popup_calc_profile = document.querySelector(".popup_calc_profile"),
		popup_calc_end = document.querySelector(".popup_calc_end"),
		body = document.querySelector("body"),
		overlay = document.querySelectorAll(".overlay"),
		input = document.querySelectorAll('.form-control'),
		width = document.getElementById('width'),
		height = document.getElementById('height'),
		type_window = document.querySelectorAll(".window"),
		tab = document.querySelectorAll(".type_window"),
		material = document.getElementById("view_type"),
		temp = document.getElementsByName('checkbox-test');
	let total = {};

	// Tabs Calc

	function hidetype_window(a) {
		for (let i = a; i < type_window.length; i++) {
			type_window[i].classList.remove("show");
			type_window[i].classList.add("hide");
		}
	}
	hidetype_window(1);

	function showtype_window(b) {
		if (type_window[b].classList.contains("hide")) {
			type_window[b].classList.remove("hide");
			type_window[b].classList.add("show");
		}
	}

	// Modal Calc

	function showModal(modal) {
		modal.style.display = "block";
		document.body.style.overflow = "hidden";
		document.body.style.height = "100vh";
	}

	function hideModal(modCloseBtn) {
		[...overlay].forEach(element => {
			element.style.display = "none";
		});
		document.body.style.overflow = "";
		document.body.style.height = "";

		let statusMessage = document.querySelector('.status');
		if (statusMessage != undefined) {
			statusMessage.innerHTML = '';
		}
	}

	// Calc

	let w = width,
		h = height,
		t;

	function calcTotal() {

		let type_w;
		let formData = new FormData();

		type_window.forEach(e => {
			if (e.classList.contains('show')) {
				type_w = e.getAttribute('id');
			}
		});

		temp.forEach((e, i) => {
			if (temp[i].checked) {
				t = temp[i].getAttribute('temp');
			}
		});

		total.width = w.value;
		total.heigh = h.value;
		total.type_window = type_w;
		total.material = material.value;
		total.temp = t;

		// return total;
	}



	function clearInputs() {
		[...input].forEach(elem => (elem.value = ""));
	}

	// Event Calc

	body.addEventListener("click", e => {
		let target = e.target;

		// Modal

		if (target && target.classList.contains("popup_calc_btn")) {
			showModal(popup_calc);
		}
		if (target && target.classList.contains("popup_calc_button")) {
			if ((w.value == '' || h.value == '') || (w.value == 0 || h.value == 0)) {
				alert("ВВЕДИТЕ РАЗМЕРЫ ОКНА!");
			} else {
				calcTotal();
				hideModal(popup_calc);
				showModal(popup_calc_profile);
			}
		}
		if (target && target.classList.contains("popup_calc_profile_button")) {
			calcTotal();
			hideModal(popup_calc_profile);
			showModal(popup_calc_end);
		}
		if (target && target.classList.contains('form_calc_btn')) {
			console.log(total);
			console.log(formData);
			// forms(total);
		}
		if (target && target.classList.contains("cls")) {
			total = {};
			hideModal(target);
			clearInputs()
			// console.log(total);
		}

		// Tabs Calc

		if (target && target.classList.contains("type_window") ||
			target.parentNode.classList.contains("type_window")) {
			[...tab].forEach(function (e, i) {
				if (target == e || target.parentNode == e) {
					hidetype_window(0);
					showtype_window(i);
				}
			});
		}
	});
	// return total;
	// let formData = new FormData(total);
	// console.log(formData);
}

export default calc;