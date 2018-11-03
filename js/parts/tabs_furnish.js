function tabs_furnish() {
	const body = document.querySelector("body"),
		tabContentFurnish = document.querySelectorAll(".tabcontent_furnish"),
		tabFurnish = document.querySelectorAll(".furnish_tab");

	function hideTabContent(a) {
		for (let i = a; i < tabContentFurnish.length; i++) {
			tabContentFurnish[i].classList.remove("show");
			tabContentFurnish[i].classList.add("hide");
		}
		for (let i = a; i < tabFurnish.length; i++) {
			tabFurnish[i].classList.remove("after_click");
			tabFurnish[i].classList.add("no_click");
		}
	}
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContentFurnish[b].classList.contains("hide")) {
			tabContentFurnish[b].classList.remove("hide");
			tabContentFurnish[b].classList.add("show");
		}
		if (tabFurnish[b].classList.contains("no_click")) {
			tabFurnish[b].classList.remove("no_click");
			tabFurnish[b].classList.add("after_click");
		}
	}
	body.addEventListener("click", e => {
		let target = e.target;

		if (target && target.classList.contains("furnish_tab") || target.parentNode.classList.contains("furnish_tab")) {
			[...tabFurnish].forEach(function (e, i) {
				if (target == e || target.parentNode == e) {
					hideTabContent(0);
					showTabContent(i);
				}
			});
		}
	});
}

export default tabs_furnish;