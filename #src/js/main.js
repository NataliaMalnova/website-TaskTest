

document.addEventListener("DOMContentLoaded", () => {

	selectOpen('.search__selected1');
	selectOpen('.search__selected2');
	selectOpen('.search__selected3');

	tabs('tabs', 'tab__item', 'tabContent');
	box('.recom__boxSmall');
	scrolling();
	burger('.menuMobile', '.burger');


	document.onclick = function(e){
		if ( event.target.className != 'select__title' ) {
			const selectSingleAll = document.querySelectorAll('.search__selected');
			selectSingleAll.forEach(item => {
				item.setAttribute('data-state', '');
			});
		};

		if ( event.target.className != 'burger' ) {
			if(document.querySelector('.menuMobile').classList.contains('menuMobileOpen')) {
				document.querySelector('.menuMobile').classList.remove('menuMobileOpen');
			}
		};
	};
});



