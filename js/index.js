import tabs_furnish from './parts/tabs_furnish';
import tabs_glazing from './parts/tabs_glazing';
import modal from './parts/modal';
import timer from './parts/timer';
import forms from './parts/forms';
// import slider from './parts/slider';
// import calc from './parts/calc';
// import events from './parts/events';
import validNum from './parts/validNum';

window.addEventListener("DOMContentLoaded", function () {

	"use strict";

	tabs_glazing();
	tabs_furnish();
	modal();
	timer();
	forms();
	// slider();
	// calc();
	// events();
	validNum();
});