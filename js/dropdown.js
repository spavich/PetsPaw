
/* Dropdown */

// Polyfill for forEach method for NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button'),
				dropDownList = dropDownWrapper.querySelector('.dropdown__list'),
				dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item'),
				dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
	// Button click. Open/Close select
	dropDownBtn.addEventListener('click', (e) => {
		dropDownList.classList.toggle('dropdown__list--visible');
	});
	// Selecting a list item. Remember the selected value. Close dropdown
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});
	// Click outside the dropdown. Close dropdown
	document.addEventListener('click', (e) =>{
		if (e.target !== dropDownBtn) {
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
	// Pressing Tab or Escape. Close dropdown
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});
/*  */