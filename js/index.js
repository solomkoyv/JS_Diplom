import tabs_furnish from './parts/tabs_furnish';
import tabs_glazing from './parts/tabs_glazing';
import modal from './parts/modal';
import timer from './parts/timer';
import forms from './parts/forms';
import calc from './parts/calc';
import validNum from './parts/validNum';

window.addEventListener("DOMContentLoaded", function () {

	"use strict";

	tabs_glazing();
	tabs_furnish();
	modal();
	timer();
	forms();
	calc();
	validNum();
});