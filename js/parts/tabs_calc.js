// function tabs_calc() {
// 	const body = document.querySelector("body"),
// 		tabContent = document.querySelectorAll(".window"),
// 		tab = document.querySelectorAll(".type_window");

// 	function hideTabContent(a) {
// 		for (let i = a; i < tabContent.length; i++) {
// 			tabContent[i].classList.remove("show");
// 			tabContent[i].classList.add("hide");
// 		}
// 	}
// 	hideTabContent(1);

// 	function showTabContent(b) {
// 		if (tabContent[b].classList.contains("hide")) {
// 			tabContent[b].classList.remove("hide");
// 			tabContent[b].classList.add("show");
// 		}
// 	}
// 	body.addEventListener("click", e => {
// 		let target = e.target;

// 		if (target && target.classList.contains("type_window") ||
// 			target.parentNode.classList.contains("type_window")) {
// 			[...tab].forEach(function (e, i) {
// 				if (target == e || target.parentNode == e) {
// 					hideTabContent(0);
// 					showTabContent(i);
// 				}
// 			});
// 		}
// 	});
// }

// export default tabs_calc;