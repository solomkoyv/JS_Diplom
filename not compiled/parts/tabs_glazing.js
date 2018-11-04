function tabs_glazing() {
	const body = document.querySelector("body"),
		tabContent = document.querySelectorAll(".tabcontent_glazing"),
		tab = document.querySelectorAll(".glazing_block");

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
		for (let i = a; i < tab.length; i++) {
			tab[i].childNodes[2].nextSibling.classList.remove('active');
			tab[i].childNodes[2].nextSibling.classList.add('no_active');
		}
	}
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains("hide")) {
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
		if (tab[b].childNodes[2].nextSibling.classList.contains("no_active")) {
			tab[b].childNodes[2].nextSibling.classList.remove("no_active");
			tab[b].childNodes[2].nextSibling.classList.add("active");
		}
	}
	body.addEventListener("click", e => {
		let target = e.target;

		if (target && target.classList.contains("glazing_block") || target.parentNode.classList.contains("glazing_block")) {
			[...tab].forEach(function (e, i) {
				if (target == e || target.parentNode == e) {
					hideTabContent(0);
					showTabContent(i);
				}
			});
		}
	});
}

export default tabs_glazing;