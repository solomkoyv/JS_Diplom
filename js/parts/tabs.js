function tabs() {
	const tabContent = document.querySelectorAll(".tabcontent"),
		body = document.querySelector("body"),
		tab = document.querySelectorAll(".furnish_tab");

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
		for (let i = a; i < tab.length; i++) {
			tab[i].classList.remove("after_click");
			tab[i].classList.add("no_click");
		}
	}
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains("hide")) {
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
		if (tab[b].classList.contains("no_click")) {
			tab[b].classList.remove("no_click");
			tab[b].classList.add("after_click");
		}
	}
	body.addEventListener("click", e => {
		let target = e.target;

		if (target && target.classList.contains("furnish_tab") || target.parentNode.classList.contains("furnish_tab")) {
			// console.log(target.parentNode.classList.contains("furnish_tab"));
			[...tab].forEach(function (e, i) {
				if (target == e || target.parentNode == e) {
					hideTabContent(0);
					showTabContent(i);
				}
			});
		}
	});
}

export default tabs;