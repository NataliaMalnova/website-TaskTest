const burger = (menuelector, burgerSelector) => {

    const menuElem = document.querySelector(menuelector),
		  burgerElem = document.querySelector(burgerSelector);
		  
	const menuElemList = menuElem.querySelectorAll('a');

    menuElem.classList.remove('menuMobileOpen');

    burgerElem.addEventListener('click', () => {
		//if(menuElem.style.display == 'none' && window.screen.availWidth < 993)
		if(!menuElem.classList.contains('menuMobileOpen') && window.innerWidth < 993) {
			menuElem.classList.add('menuMobileOpen');
        } else {
			menuElem.classList.remove('menuMobileOpen');
        }
	});
	
	menuElemList.forEach(item => {
		item.addEventListener('click', () => {
			if(menuElem.classList.contains('menuMobileOpen')) {
				menuElem.classList.remove('menuMobileOpen');
			}
		});
	});


    window.addEventListener('resize', () => {
        if(window.innerWidth > 992) {
            menuElem.style.display = 'none';
        }
	});

	
}